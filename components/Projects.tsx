"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, Activity, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import OpenSourceJourney from "./OpenSourceJourney";

interface Project {
    title: string;
    description: string;
    link?: string;
    linkText?: string;
    status?: string;
    visual: React.ReactNode;
    colSpan?: string; // class for grid column span
}

const projects: Project[] = [
    {
        title: "Chain Lens",
        description: "A Bitcoin transaction analyzer and visualizer that parses raw transaction data, calculates fees, classifies scripts, and presents the results clearly.",
        link: "https://github.com/SummerOfBitcoin/2026-developer-challenge-1-chain-lens-harrshita123",
        linkText: "GitHub",
        status: "https://chain-lens-bitcoin.vercel.app/",
        visual: (
            <div className="w-full h-full bg-[#07111f] p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.22),transparent_55%)]" />
                <div className="relative z-10 w-full max-w-[250px] rounded-xl border border-cyan-400/20 bg-black/30 p-4 shadow-2xl shadow-cyan-500/10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                            <Terminal className="w-5 h-5 text-cyan-300" />
                        </div>
                        <div>
                            <div className="text-white font-semibold">Chain Lens</div>
                            <div className="text-cyan-300/60 text-[10px] uppercase tracking-widest">Bitcoin Analyzer</div>
                        </div>
                    </div>
                    <div className="space-y-2 font-mono text-[10px] text-white/50">
                        <div className="flex justify-between"><span>TXID</span><span className="text-cyan-300">b633...55a2</span></div>
                        <div className="flex justify-between"><span>Fee rate</span><span className="text-emerald-300">7.7 sat/vB</span></div>
                        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500" /></div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Smart City Dashboard",
        description: "A comprehensive dashboard for visualizing urban data, monitoring resources, and analyzing city metrics for better management.",
        link: "https://github.com/harrshita123/Smart-City-Dashboard",
        linkText: "GitHub",
        status: "https://harrshita123.github.io/Smart-City-Dashboard/",
        visual: (
            <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/smart-city.png"
                    alt="Smart City Dashboard"
                    fill
                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
        )
    },
    {
        title: "Coin Smith",
        description: "A safety-focused Bitcoin transaction builder with UTXO selection, fee estimation, change handling, policy validation, and PSBT generation.",
        link: "https://github.com/SummerOfBitcoin/2026-developer-challenge-2-coin-smith-harrshita123",
        linkText: "GitHub",
        status: "https://coin-smith-bitcoin.vercel.app/",
        visual: (
            <div className="w-full h-full bg-[#120d05] p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,158,11,0.22),transparent_55%)]" />
                <div className="relative z-10 w-full max-w-[250px]">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-full border border-amber-300/30 bg-amber-500/15 flex items-center justify-center text-amber-300 text-2xl font-bold">₿</div>
                        <div>
                            <div className="text-white text-lg font-semibold">Coin Smith</div>
                            <div className="text-amber-300/60 text-[10px] uppercase tracking-widest">PSBT Builder</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                        {[['1', 'Input'], ['2', 'Outputs'], ['5.0', 'sat/vB']].map(([value, label]) => (
                            <div key={label} className="rounded-lg border border-amber-400/15 bg-black/25 py-2">
                                <div className="text-amber-300 text-sm font-semibold">{value}</div>
                                <div className="text-white/40 text-[9px] uppercase">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "News Reader UI",
        description: "A sleek and modern news reading interface featuring categorized headlines, immersive reading mode, and responsive design.",
        link: "https://github.com/harrshita123/NEXT-reader",
        linkText: "GitHub",
        status: "https://next-read-ojt.vercel.app/",
        colSpan: "md:col-span-2",
        visual: (
            <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/next-read.png"
                    alt="News Reader UI"
                    fill
                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
        )
    },
    {
        title: "Sherlock",
        description: "A Bitcoin chain-analysis engine and interactive visualizer for exploring blocks, transaction classifications, fee statistics, and privacy heuristics.",
        link: "https://github.com/SummerOfBitcoin/2026-developer-challenge-3-sherlock-harrshita123",
        linkText: "GitHub",
        status: "https://sherlock-bitcoin-analysis.vercel.app/",
        visual: (
            <div className="w-full h-full bg-[#0c0d1c] p-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_58%)]" />
                <div className="relative z-10 w-full max-w-[250px]">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center">
                            <Activity className="w-5 h-5 text-violet-300" />
                        </div>
                        <div>
                            <div className="text-white font-semibold">Sherlock</div>
                            <div className="text-violet-300/60 text-[10px] uppercase tracking-widest">Chain Intelligence</div>
                        </div>
                    </div>
                    <div className="flex items-end gap-1.5 h-14">
                        {[35, 62, 46, 82, 54, 95, 68, 78].map((height, index) => (
                            <div key={index} className="flex-1 rounded-t bg-gradient-to-t from-violet-700/50 to-violet-300" style={{ height: `${height}%` }} />
                        ))}
                    </div>
                    <div className="mt-2 text-[9px] text-white/35 text-center uppercase tracking-[0.2em]">500 transactions analyzed</div>
                </div>
            </div>
        )
    }
];

const projectDisplayOrder = new Map([
    ["News Reader UI", 0],
    ["Chain Lens", 1],
    ["Coin Smith", 2],
    ["Sherlock", 3],
    ["Smart City Dashboard", 4],
]);

const orderedProjects = [...projects].sort(
    (a, b) => (projectDisplayOrder.get(a.title) ?? 999) - (projectDisplayOrder.get(b.title) ?? 999)
);

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">

                <motion.div
                    className="flex flex-col items-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <span className="text-sm font-medium text-white/80">Projects</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Flagship Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {orderedProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                rotateX: 5,
                                rotateY: 5,
                                transition: { duration: 0.3, type: "spring", stiffness: 300 }
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                                perspective: 1000
                            }}
                            className={`group relative flex flex-col bg-[#121212] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all duration-300 ${project.colSpan || ''}`}
                        >
                            {/* Visual Area */}
                            <div className="h-48 w-full border-b border-white/5 overflow-hidden">
                                {project.visual}
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-white/40" />
                                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {project.status && (
                                        <Link
                                            href={project.status}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-colors text-xs font-medium"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            Live
                                        </Link>
                                    )}
                                </div>

                                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        {project.linkText}
                                        <ExternalLink className="w-3 h-3" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <OpenSourceJourney />

            </div>
        </section>
    );
}
