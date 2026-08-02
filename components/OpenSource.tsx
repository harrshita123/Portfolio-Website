"use client";

import { motion } from "framer-motion";
import { Award, Calendar, CircleDot, GitPullRequest } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Experience {
    title: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
    points: string[];
    image: string;
    imageClassName?: string;
    workLink: string;
    githubRepo?: string;
    showPrCount?: boolean;
    showIssueCount?: boolean;
    color: string; // Tailwind color name
}

const experiences: Experience[] = [
    {
        title: "Google",
        role: "WebCrypto",
        period: "GSoC",
        description: "Implementing the Web Cryptography API for Dart to enable secure cryptographic operations in web apps.",
        tags: ["Dart", "Cryptography", "Security", "GSoC"],
        points: [
            "Implemented standard cryptographic algorithms",
            "Ensured compliance with Web Crypto API specs",
            "Added comprehensive test suites",
            "Improved security features for Dart web apps"
        ],
        image: "/webcrypto.png",
        workLink: "https://github.com/google/webcrypto.dart/pulls?q=is%3Apr+author%3Aharrshita123",
        githubRepo: "google/webcrypto.dart",
        showPrCount: true,
        showIssueCount: true,
        color: "blue"
    },
    {
        title: "Kubernetes SIG UI",
        role: "Headlamp",
        period: "LFX",
        description: "Contributing to Headlamp, an easy-to-use and extensible web interface for managing Kubernetes clusters.",
        tags: ["LFX", "Kubernetes", "TypeScript", "React", "Cloud Native"],
        points: [
            "Contributed to the Headlamp open-source ecosystem",
            "Worked with a modern React and TypeScript codebase",
            "Improved Kubernetes-focused user experiences",
            "Collaborated through community-driven development"
        ],
        image: "https://headlamp.dev/img/social-card.png",
        workLink: "https://github.com/kubernetes-sigs/headlamp/pulls?q=is%3Apr+author%3Aharrshita123",
        githubRepo: "kubernetes-sigs/headlamp",
        showPrCount: true,
        showIssueCount: true,
        color: "black"
    },
    {
        title: "Dart Language",
        role: "Dart Web",
        period: "GSoC",
        description: "Contributing to the Dart language's web libraries and ecosystem to improve web development capabilities.",
        tags: ["Dart", "Web Assembly", "Compiler", "GSoC"],
        points: [
            "Optimized core web libraries for better performance",
            "Improved JavaScript interop capabilities",
            "Fixed critical bugs in the web compiler",
            "Enhanced documentation for web APIs"
        ],
        image: "/dart-web.png",
        workLink: "https://github.com/dart-lang/web/pulls?q=is%3Apr+author%3Aharrshita123",
        githubRepo: "dart-lang/web",
        showPrCount: true,
        color: "blue"
    },
    {
        title: "SageMath",
        role: "SageMath",
        period: "GSoC",
        description: "SageMath is a free open-source mathematics software system licensed under the GPL.",
        tags: ["Python", "Mathematics", "Open Source", "GSoC"],
        points: [
            "Contributed to mathematical computation modules",
            "Fixed issues in symbolic integration",
            "Optimized algorithms for faster processing",
            "Collaborated with the scientific community"
        ],
        image: "/sageMath.png",
        workLink: "https://github.com/sagemath/sage/pulls?q=is%3Apr+author%3Aharrshita123",
        githubRepo: "sagemath/sage",
        showPrCount: true,
        showIssueCount: true,
        color: "blue"
    },
    {
        title: "Caravan",
        role: "Caravan",
        period: "Summer of Bitcoin",
        description: "Caravan is a stateless, open-source Bitcoin wallet and coordination software.",
        tags: ["Bitcoin", "React", "Cryptography", "SoB"],
        points: [
            "Enhanced wallet security features",
            "Improved multisig coordination workflows",
            "Fixed UI/UX inconsistencies",
            "Contributed to code refactoring and modernization"
        ],
        image: "/caravan.png",
        workLink: "https://github.com/caravan-bitcoin/caravan/pulls?q=is%3Apr+author%3Aharrshita123",
        githubRepo: "caravan-bitcoin/caravan",
        showPrCount: true,
        color: "black"
    },
    {
        title: "EaseMotion CSS",
        role: "EaseMotion CSS",
        period: "GSSoC",
        description: "Contributing to a zero-dependency, animation-first CSS framework for building expressive interfaces with readable utility classes.",
        tags: ["GSSoC", "CSS", "Animations", "UI Components"],
        points: [
            "Worked with reusable animation utilities",
            "Supported readable, beginner-friendly class names",
            "Contributed to a lightweight, zero-dependency framework",
            "Helped expand its open-source UI ecosystem"
        ],
        image: "https://saptarshi-coder.github.io/EaseMotion-css/assets/logo.svg",
        imageClassName: "object-contain p-8",
        workLink: "https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls?q=is%3Apr+author%3Aharrshita123",
        githubRepo: "SAPTARSHI-coder/EaseMotion-css",
        showPrCount: true,
        showIssueCount: true,
        color: "blue"
    }
];

export default function OpenSource() {
    const [prCounts, setPrCounts] = useState<Record<string, number | null>>({});
    const [issueCounts, setIssueCounts] = useState<Record<string, number | null>>({});

    useEffect(() => {
        const controller = new AbortController();
        const trackedRepos = experiences.filter((experience) => experience.showPrCount && experience.githubRepo);

        async function fetchContributionCounts() {
            const entries = await Promise.all(
                trackedRepos.map(async (experience) => {
                    const repo = experience.githubRepo as string;

                    try {
                        const query = encodeURIComponent(`repo:${repo} is:pr author:harrshita123`);
                        const issueQuery = encodeURIComponent(`repo:${repo} is:issue author:harrshita123`);
                        const [prResponse, issueResponse] = await Promise.all([
                            fetch(`https://api.github.com/search/issues?q=${query}&per_page=1`, {
                                signal: controller.signal,
                            }),
                            experience.showIssueCount
                                ? fetch(`https://api.github.com/search/issues?q=${issueQuery}&per_page=1`, {
                                    signal: controller.signal,
                                })
                                : Promise.resolve(null),
                        ]);

                        if (!prResponse.ok || (issueResponse && !issueResponse.ok)) {
                            return [repo, { prs: null, issues: null }] as const;
                        }

                        const prData: { total_count?: number } = await prResponse.json();
                        const issueData: { total_count?: number } | null = issueResponse
                            ? await issueResponse.json()
                            : null;
                        const prCount = typeof prData.total_count === "number" ? prData.total_count : null;
                        const issueCount = typeof issueData?.total_count === "number" ? issueData.total_count : null;

                        return [repo, { prs: prCount, issues: issueCount }] as const;
                    } catch {
                        return [repo, { prs: null, issues: null }] as const;
                    }
                })
            );

            if (!controller.signal.aborted) {
                setPrCounts(Object.fromEntries(entries.map(([repo, counts]) => [repo, counts.prs])));
                setIssueCounts(Object.fromEntries(entries.map(([repo, counts]) => [repo, counts.issues])));
            }
        }

        fetchContributionCounts();

        return () => controller.abort();
    }, []);

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-white relative inline-block">
                        Open Source
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {experiences.map((exp, index) => {
                        const styles = {
                            blue: {
                                card: "bg-[#172554]/40 backdrop-blur-md border-blue-500/20",
                                overlay: "from-[#172554]/80 via-[#172554]/20",
                                title: "text-white",
                                desc: "text-blue-100/70",
                                tag: "bg-blue-500/10 border-blue-400/20 text-blue-100 hover:bg-blue-500/20",
                                icon: "text-blue-300",
                                point: "text-blue-100/80"
                            },
                            white: {
                                card: "bg-white/90 backdrop-blur-md border-slate-300",
                                overlay: "from-white/90 via-white/40",
                                title: "text-slate-900",
                                desc: "text-slate-600",
                                tag: "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200",
                                icon: "text-slate-500",
                                point: "text-slate-700"
                            },
                            black: {
                                card: "bg-black/40 backdrop-blur-md border-white/10",
                                overlay: "from-black/80 via-black/20",
                                title: "text-white",
                                desc: "text-zinc-400",
                                tag: "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:bg-zinc-800",
                                icon: "text-zinc-500",
                                point: "text-zinc-400"
                            },
                            red: {
                                card: "bg-[#450a0a]/40 backdrop-blur-md border-red-500/20",
                                overlay: "from-[#450a0a]/80 via-[#450a0a]/20",
                                title: "text-white",
                                desc: "text-red-100/70",
                                tag: "bg-red-500/10 border-red-400/20 text-red-100 hover:bg-red-500/20",
                                icon: "text-red-300",
                                point: "text-red-100/80"
                            }
                        }[exp.color] || { // Default fallback
                            card: "bg-black/40 backdrop-blur-md border-white/10",
                            overlay: "from-black/80 via-black/20",
                            title: "text-white",
                            desc: "text-zinc-400",
                            tag: "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:bg-zinc-800",
                            icon: "text-zinc-500",
                            point: "text-zinc-400"
                        };
                        const prCount = exp.githubRepo ? prCounts[exp.githubRepo] : null;
                        const issueCount = exp.githubRepo ? issueCounts[exp.githubRepo] : null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 group border h-full flex flex-col ${styles.card}`}
                            >
                                {/* Banner Area */}
                                <div className="h-48 relative overflow-hidden bg-white/5 shrink-0">
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        unoptimized={exp.image.endsWith(".svg")}
                                        className={`${exp.imageClassName || "object-cover"} opacity-90 group-hover:scale-105 transition-transform duration-700`}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t to-transparent ${styles.overlay}`} />

                                    {/* Date Pill - Adaptive color */}
                                    <div className={`absolute top-4 right-4 backdrop-blur-md border px-3 py-1.5 rounded-lg text-xs flex items-center gap-2 z-10 font-medium
                                        ${exp.color === 'white' ? 'bg-white/80 border-slate-200 text-slate-800' : 'bg-black/60 border-white/10 text-white/90'}`}>
                                        <Calendar className="w-3 h-3" />
                                        {exp.period}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col grow space-y-6">
                                    <div>
                                        <h3 className={`text-xl font-bold mb-2 ${styles.title}`}>{exp.role}</h3>
                                        <p className={`text-sm leading-relaxed ${styles.desc}`}>{exp.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag, i) => (
                                            <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-default ${styles.tag}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {exp.showPrCount && exp.githubRepo && (
                                        <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium ${styles.point}`}>
                                            <a
                                                href={exp.workLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:underline underline-offset-4 transition-colors"
                                            >
                                                <GitPullRequest className={`w-4 h-4 ${styles.icon}`} />
                                                {typeof prCount === "number"
                                                    ? `${prCount.toLocaleString()} PRs raised`
                                                    : "PRs raised"}
                                            </a>
                                            {typeof issueCount === "number" && issueCount > 0 && (
                                                <a
                                                    href={`https://github.com/${exp.githubRepo}/issues?q=is%3Aissue+author%3Aharrshita123`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 hover:underline underline-offset-4 transition-colors"
                                                >
                                                    <CircleDot className={`w-4 h-4 ${styles.icon}`} />
                                                    {issueCount.toLocaleString()} issues raised
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    <div className="space-y-3 grow">
                                        {exp.points.map((point, i) => (
                                            <div key={i} className="flex gap-3 items-start group/point">
                                                <Award className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${styles.icon}`} />
                                                <p className={`text-sm transition-colors ${styles.point}`}>{point}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
