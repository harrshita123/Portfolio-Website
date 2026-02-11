"use client";

import { motion } from "framer-motion";
import { Award, ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";

interface Experience {
    title: string;
    role: string;
    period: string;
    description: string;
    tags: string[];
    points: string[];
    image: string;
    credentialsLink: string;
    color: string; // Tailwind color name
}

const experiences: Experience[] = [
    {
        title: "Dart Language",
        role: "Contributor - Dart Web",
        period: "GSoC 2026",
        description: "Contributing to the Dart language's web libraries and ecosystem to improve web development capabilities.",
        tags: ["Dart", "Web Assembly", "Compiler", "GSoC"],
        points: [
            "Optimized core web libraries for better performance",
            "Improved JavaScript interop capabilities",
            "Fixed critical bugs in the web compiler",
            "Enhanced documentation for web APIs"
        ],
        image: "/dart-web.png",
        credentialsLink: "https://github.com/dart-lang/web",
        color: "blue"
    },
    {
        title: "Google",
        role: "Contributor - WebCrypto",
        period: "GSoC 2026",
        description: "Implementing the Web Cryptography API for Dart to enable secure cryptographic operations in web apps.",
        tags: ["Dart", "Cryptography", "Security", "GSoC"],
        points: [
            "Implemented standard cryptographic algorithms",
            "Ensured compliance with Web Crypto API specs",
            "Added comprehensive test suites",
            "Improved security features for Dart web apps"
        ],
        image: "/webcrypto.png",
        credentialsLink: "https://github.com/google/webcrypto.dart",
        color: "blue"
    },
    {
        title: "SageMath",
        role: "Contributor - SageMath",
        period: "GSoC 2026",
        description: "SageMath is a free open-source mathematics software system licensed under the GPL.",
        tags: ["Python", "Mathematics", "Open Source", "GSoC"],
        points: [
            "Contributed to mathematical computation modules",
            "Fixed issues in symbolic integration",
            "Optimized algorithms for faster processing",
            "Collaborated with the scientific community"
        ],
        image: "/sageMath.png",
        credentialsLink: "https://github.com/sagemath/sage",
        color: "blue"
    },
    {
        title: "CCExtractor",
        role: "Contributor - TaskWarrior",
        period: "Summer of Bitcoin",
        description: "A Flutter frontend for TaskWarrior, a command-line task management tool.",
        tags: ["Flutter", "Dart", "Task Management", "SoB"],
        points: [
            "Developed a modern mobile UI for TaskWarrior",
            "Implemented data synchronization features",
            "Improved user experience and accessibility",
            "Fixed cross-platform compatibility issues"
        ],
        image: "/taskwarrior.png",
        credentialsLink: "https://github.com/CCExtractor/taskwarrior-flutter",
        color: "black"
    },
    {
        title: "CCExtractor",
        role: "Contributor - Alarm Clock",
        period: "Summer of Bitcoin",
        description: "An advanced, feature-rich alarm clock application built with Flutter.",
        tags: ["Flutter", "Android", "Mobile", "SoB"],
        points: [
            "Implemented complex alarm scheduling logic",
            "Designed and built custom UI components",
            "Integrated background services for reliable alarms",
            "Optimized battery usage"
        ],
        image: "/alarm-clock.png",
        credentialsLink: "https://github.com/CCExtractor/ultimate_alarm_clock",
        color: "blue"
    },
    {
        title: "Caravan",
        role: "Contributor - Caravan",
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
        credentialsLink: "https://github.com/caravan-bitcoin/caravan",
        color: "black"
    }
];

export default function OpenSource() {
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
                                point: "text-blue-100/80",
                                btn: "text-blue-200 hover:text-white"
                            },
                            white: {
                                card: "bg-white/90 backdrop-blur-md border-slate-300",
                                overlay: "from-white/90 via-white/40",
                                title: "text-slate-900",
                                desc: "text-slate-600",
                                tag: "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200",
                                icon: "text-slate-500",
                                point: "text-slate-700",
                                btn: "text-slate-500 hover:text-slate-900"
                            },
                            black: {
                                card: "bg-black/40 backdrop-blur-md border-white/10",
                                overlay: "from-black/80 via-black/20",
                                title: "text-white",
                                desc: "text-zinc-400",
                                tag: "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:bg-zinc-800",
                                icon: "text-zinc-500",
                                point: "text-zinc-400",
                                btn: "text-zinc-500 hover:text-white"
                            },
                            red: {
                                card: "bg-[#450a0a]/40 backdrop-blur-md border-red-500/20",
                                overlay: "from-[#450a0a]/80 via-[#450a0a]/20",
                                title: "text-white",
                                desc: "text-red-100/70",
                                tag: "bg-red-500/10 border-red-400/20 text-red-100 hover:bg-red-500/20",
                                icon: "text-red-300",
                                point: "text-red-100/80",
                                btn: "text-red-200 hover:text-white"
                            }
                        }[exp.color] || { // Default fallback
                            card: "bg-black/40 backdrop-blur-md border-white/10",
                            overlay: "from-black/80 via-black/20",
                            title: "text-white",
                            desc: "text-zinc-400",
                            tag: "bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:bg-zinc-800",
                            icon: "text-zinc-500",
                            point: "text-zinc-400",
                            btn: "text-zinc-500 hover:text-white"
                        };

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
                                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
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

                                    <div className="space-y-3 grow">
                                        {exp.points.map((point, i) => (
                                            <div key={i} className="flex gap-3 items-start group/point">
                                                <Award className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${styles.icon}`} />
                                                <p className={`text-sm transition-colors ${styles.point}`}>{point}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <a href={exp.credentialsLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 text-xs transition-colors group/btn ${styles.btn}`}>
                                            Show Credentials
                                            <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
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
