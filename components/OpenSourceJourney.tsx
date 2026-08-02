"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Bitcoin,
    BookOpen,
    Braces,
    Cloud,
    Code2,
    FileText,
    Github,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

interface EvidenceLink {
    label: string;
    url: string;
}

interface EvidenceGroup {
    title: string;
    icon: React.ReactNode;
    links: EvidenceLink[];
}

interface JourneyMilestone {
    period: string;
    program: string;
    title: string;
    summary: string;
    highlights: string[];
    tags: string[];
    accent: "cyan" | "violet" | "amber" | "emerald" | "rose";
    icon: React.ReactNode;
    evidence?: EvidenceGroup[];
}

const accentStyles = {
    cyan: {
        dot: "bg-cyan-300 shadow-cyan-400/60",
        label: "text-cyan-300",
        badge: "bg-cyan-400/10 text-cyan-200 border-cyan-400/20",
        glow: "from-cyan-400/15",
        hover: "hover:border-cyan-400/35",
        line: "from-cyan-300 via-cyan-400 to-blue-500",
        chapter: "text-cyan-300/20",
    },
    violet: {
        dot: "bg-violet-300 shadow-violet-400/60",
        label: "text-violet-300",
        badge: "bg-violet-400/10 text-violet-200 border-violet-400/20",
        glow: "from-violet-400/15",
        hover: "hover:border-violet-400/35",
        line: "from-violet-300 via-violet-400 to-fuchsia-500",
        chapter: "text-violet-300/20",
    },
    amber: {
        dot: "bg-amber-300 shadow-amber-400/60",
        label: "text-amber-300",
        badge: "bg-amber-400/10 text-amber-200 border-amber-400/20",
        glow: "from-amber-400/15",
        hover: "hover:border-amber-400/35",
        line: "from-amber-300 via-orange-400 to-rose-500",
        chapter: "text-amber-300/20",
    },
    emerald: {
        dot: "bg-emerald-300 shadow-emerald-400/60",
        label: "text-emerald-300",
        badge: "bg-emerald-400/10 text-emerald-200 border-emerald-400/20",
        glow: "from-emerald-400/15",
        hover: "hover:border-emerald-400/35",
        line: "from-emerald-300 via-emerald-400 to-cyan-500",
        chapter: "text-emerald-300/20",
    },
    rose: {
        dot: "bg-rose-300 shadow-rose-400/60",
        label: "text-rose-300",
        badge: "bg-rose-400/10 text-rose-200 border-rose-400/20",
        glow: "from-rose-400/15",
        hover: "hover:border-rose-400/35",
        line: "from-rose-300 via-pink-400 to-violet-500",
        chapter: "text-rose-300/20",
    },
} as const;

const milestones: JourneyMilestone[] = [
    {
        period: "December 2025",
        program: "Google Summer of Code preparation",
        title: "The first contribution",
        summary:
            "I started preparing for Google Summer of Code by learning how established open-source projects work, from reading contribution guides and reproducing issues to writing focused fixes and tests.",
        highlights: [
            "Learned Dart, WebIDL, JavaScript interoperability and browser APIs.",
            "Explored WebCrypto and began working with security-sensitive code and regression tests.",
            "Built a repeatable workflow for issue research, implementation and maintainer feedback.",
        ],
        tags: ["Dart", "WebCrypto", "WebIDL", "GitHub"],
        accent: "cyan",
        icon: <Code2 className="h-5 w-5" />,
        evidence: [
            {
                title: "Contributions",
                icon: <Github className="h-4 w-4" />,
                links: [
                    {
                        label: "WebCrypto work",
                        url: "https://github.com/google/webcrypto.dart/pulls?q=is%3Apr+author%3Aharrshita123",
                    },
                    {
                        label: "Dart web work",
                        url: "https://github.com/dart-lang/web/pulls?q=is%3Apr+author%3Aharrshita123",
                    },
                ],
            },
        ],
    },
    {
        period: "Early 2026",
        program: "Google Summer of Code applications",
        title: "From research to proposal",
        summary:
            "I moved beyond individual issues to study complete project areas in Dart and SageMath. I documented each problem space, built prototypes and developed three structured proposals.",
        highlights: [
            "Created introductions that explain the project context and intended users.",
            "Built working prototypes to test feasibility before proposing the full solution.",
            "Prepared one Dart proposal and two SageMath proposals with implementation plans.",
        ],
        tags: ["Research", "Prototyping", "Dart", "SageMath"],
        accent: "violet",
        icon: <BookOpen className="h-5 w-5" />,
        evidence: [
            {
                title: "Introductions",
                icon: <BookOpen className="h-4 w-4" />,
                links: [
                    { label: "Dart", url: "https://docs.google.com/document/d/1SDSZj8r_TGw5IBOO6elpm9Ndj04N3hmWmNdd-5jYttE/edit?tab=t.0" },
                    { label: "SageMath I", url: "https://docs.google.com/document/d/1AmXHmwrnA0SHVdXGYJD--J2r1zpc7fLjwuQBa1pFbaU/edit?tab=t.0" },
                    { label: "SageMath II", url: "https://docs.google.com/document/d/1KKs9Z9qhYg3rUB30s4EnlvDBM9sybEt86TDF8DkcjTc/edit?tab=t.0" },
                ],
            },
            {
                title: "Prototypes",
                icon: <Braces className="h-4 w-4" />,
                links: [
                    { label: "Dart", url: "https://docs.google.com/document/d/1ZG2ISf1V4p5iXszwIOdgDYoSMrfe4MkDsWLEbXXpXtw/edit?tab=t.0" },
                    { label: "SageMath I", url: "https://docs.google.com/document/d/1Ty6clsT8ClSmjRHEWXnul-gNjBHrV1iMIZItDPCvplU/edit?tab=t.0" },
                    { label: "SageMath II", url: "https://docs.google.com/document/d/1wZAuSOugjfzvoGAIcjCjwfoUwLvHVb7xkZhBsOn6SAw/edit?tab=t.0#heading=h.ou1bsrph9t4q" },
                ],
            },
            {
                title: "Proposals",
                icon: <FileText className="h-4 w-4" />,
                links: [
                    { label: "Dart", url: "https://docs.google.com/document/d/1F92eo7HxWJvFqazYIH-JMGOTq6dmt2TnaksNsKG0SAg/edit?tab=t.0" },
                    { label: "SageMath I", url: "https://docs.google.com/document/d/14CdvbBWMg9rXSVvlmBlMPqkc7WRQ3VxvMamJlhEyaQU/edit?tab=t.0" },
                    { label: "SageMath II", url: "https://docs.google.com/document/d/13nBvPbuz4XIDxMVtBpzsC0-sfOBwQNFQmfTXa2qxaC0/edit?tab=t.0" },
                ],
            },
        ],
    },
    {
        period: "Summer of Bitcoin 2026",
        program: "Summer of Bitcoin",
        title: "Learning Bitcoin by building",
        summary:
            "The Summer of Bitcoin developer challenges turned Bitcoin concepts into working tools focused on transaction inspection, safe construction and blockchain forensics.",
        highlights: [
            "Chain Lens: transaction parsing, fee calculation and script classification.",
            "Coin Smith: UTXO selection, policy checks, change handling and PSBT generation.",
            "Sherlock: block-file analysis, transaction classification and privacy heuristics.",
        ],
        tags: ["Bitcoin", "Transactions", "PSBT", "Chain Analysis"],
        accent: "amber",
        icon: <Bitcoin className="h-5 w-5" />,
        evidence: [
            {
                title: "Chain Lens",
                icon: <Github className="h-4 w-4" />,
                links: [
                    { label: "Live demo", url: "https://chain-lens-bitcoin.vercel.app/" },
                ],
            },
            {
                title: "Coin Smith",
                icon: <Github className="h-4 w-4" />,
                links: [
                    { label: "Live demo", url: "https://coin-smith-bitcoin.vercel.app/" },
                ],
            },
            {
                title: "Sherlock",
                icon: <Github className="h-4 w-4" />,
                links: [
                    { label: "Live demo", url: "https://sherlock-bitcoin-analysis.vercel.app/" },
                ],
            },
        ],
    },
    {
        period: "April 2026 to Present",
        program: "Linux Foundation Mentorship preparation",
        title: "Entering cloud native",
        summary:
            "Preparing for the Linux Foundation Mentorship led me to Headlamp and the Kubernetes ecosystem, where I began investigating and contributing to production Go backend workflows.",
        highlights: [
            "Prepared two Headlamp project proposals based on technical research.",
            "Worked across authorization, caching, Helm workflows, telemetry and regression testing.",
            "Learned to scope backend fixes around reproducible failures and review feedback.",
        ],
        tags: ["Kubernetes", "Headlamp", "Go", "Backend"],
        accent: "emerald",
        icon: <Cloud className="h-5 w-5" />,
        evidence: [
            {
                title: "Linux Foundation Mentorship proposals",
                icon: <FileText className="h-4 w-4" />,
                links: [
                    { label: "Headlamp proposal I", url: "https://docs.google.com/document/d/1i9ZQZbjDq-ljaC5j90Cmb1Xu5J-PjD1xQpCHfc00sCc/edit?tab=t.0" },
                    { label: "Headlamp proposal II", url: "https://docs.google.com/document/d/1ZjIsY97na86BEjBW_jOjMlQaHcpvhWds1SZeIN5RkuE/edit?tab=t.0" },
                ],
            },
            {
                title: "Headlamp contributions",
                icon: <Github className="h-4 w-4" />,
                links: [
                    { label: "View my work", url: "https://github.com/kubernetes-sigs/headlamp/pulls?q=is%3Apr+author%3Aharrshita123" },
                ],
            },
        ],
    },
    {
        period: "Current chapter",
        program: "Ongoing across all organizations",
        title: "Still building across every community",
        summary:
            "I am still actively contributing across every organization in this journey. I continue applying a research-first workflow across cryptography, Dart, cloud-native systems and accessible frontend projects.",
        highlights: [
            "Contributing security and correctness fixes to WebCrypto and Dart ecosystems.",
            "Continuing tested backend work in Kubernetes Headlamp and community projects such as Late-Meet.",
            "Improving accessible component behavior through EaseMotion CSS and GSSoC.",
        ],
        tags: ["GSSoC", "Open Source", "Accessibility", "Testing"],
        accent: "rose",
        icon: <Sparkles className="h-5 w-5" />,
        evidence: [
            {
                title: "Community profiles",
                icon: <ArrowUpRight className="h-4 w-4" />,
                links: [
                    { label: "GSSoC profile", url: "https://gssoc.girlscript.org/profile/8d9ac5d3-f5e1-4248-8af9-b7970777d290" },
                    { label: "EaseMotion CSS work", url: "https://github.com/SAPTARSHI-coder/EaseMotion-css/pulls?q=is%3Apr+author%3Aharrshita123" },
                    { label: "Late-Meet work", url: "https://github.com/shouri123/Late-Meet/pulls?q=harrshita123" },
                ],
            },
        ],
    },
];

export default function OpenSourceJourney() {
    return (
        <section aria-labelledby="open-source-journey-title" className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/8 bg-[#070a13]/60 px-4 py-20 shadow-[0_30px_120px_rgba(17,24,39,0.45)] sm:px-8 md:px-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
            <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
            <div className="pointer-events-none absolute left-1/2 top-12 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/12 blur-[120px]" />
            <div className="pointer-events-none absolute -right-24 top-[45%] h-72 w-72 rounded-full bg-rose-500/10 blur-[110px]" />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                className="relative mx-auto mb-16 max-w-3xl text-center"
            >
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-100 shadow-[0_0_30px_rgba(139,92,246,0.16)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.9)]" />
                    Learning in public
                </span>
                <h2 id="open-source-journey-title" className="bg-gradient-to-r from-white via-violet-100 to-cyan-200 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                    Open Source Journey
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">
                    From my first Dart and WebCrypto contributions to research, proposals, Bitcoin tooling and cloud-native systems. Each chapter made me a more thoughtful engineer.
                </p>
            </motion.div>

            <div className="relative mx-auto max-w-5xl">
                <div className="absolute bottom-8 left-[17px] top-3 w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-rose-300 md:left-1/2 md:-translate-x-1/2" />
                <div className="absolute bottom-8 left-[15px] top-3 w-[5px] bg-gradient-to-b from-cyan-300/20 via-violet-400/20 to-rose-300/20 blur-sm md:left-1/2 md:-translate-x-1/2" />

                <div className="space-y-12 md:space-y-20">
                    {milestones.map((milestone, index) => {
                        const styles = accentStyles[milestone.accent];
                        const isRight = index % 2 === 1;

                        return (
                            <motion.article
                                key={milestone.title}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.55 }}
                                className="relative grid pl-12 md:grid-cols-2 md:pl-0"
                            >
                                <div className={`absolute left-[9px] top-7 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full shadow-[0_0_20px_currentColor] md:left-1/2 md:-translate-x-1/2 ${styles.dot}`}>
                                    <div className="h-2 w-2 rounded-full bg-[#080b14]" />
                                </div>

                                <div className={isRight ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12"}>
                                    <div className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f18]/90 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.38)] md:p-8 ${styles.hover}`}>
                                        <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${styles.line} opacity-70`} />
                                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${styles.glow} via-transparent to-transparent opacity-70`} />
                                        <span aria-hidden="true" className={`pointer-events-none absolute -right-1 top-2 font-mono text-7xl font-black tracking-tighter ${styles.chapter}`}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div className="relative">
                                            <div className="mb-5 flex flex-wrap items-center gap-3">
                                                <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${styles.badge}`}>
                                                    {milestone.icon}
                                                    {milestone.program}
                                                </span>
                                                <span className={`text-xs font-mono uppercase tracking-[0.16em] ${styles.label}`}>
                                                    {milestone.period}
                                                </span>
                                            </div>

                                            <h3 className="max-w-[85%] text-2xl font-bold text-white transition-colors group-hover:text-white md:text-3xl">{milestone.title}</h3>
                                            <p className="mt-4 leading-relaxed text-white/60">{milestone.summary}</p>

                                            <ul className="mt-6 space-y-3">
                                                {milestone.highlights.map((highlight) => (
                                                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-white/70">
                                                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`} />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {milestone.tags.map((tag) => (
                                                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {milestone.evidence && (
                                                <div className="mt-7 grid gap-3 border-t border-white/8 pt-6 sm:grid-cols-2">
                                                    {milestone.evidence.map((group) => (
                                                        <div key={group.title} className="rounded-2xl border border-white/8 bg-black/25 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-black/35">
                                                            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/80">
                                                                <span className={styles.label}>{group.icon}</span>
                                                                {group.title}
                                                            </div>
                                                            <div className="flex flex-wrap gap-2">
                                                                {group.links.map((link) => (
                                                                    <Link
                                                                        key={link.url}
                                                                        href={link.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="group/link inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/65 transition-all hover:border-white/25 hover:bg-white/[0.09] hover:text-white"
                                                                    >
                                                                        {link.label}
                                                                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
