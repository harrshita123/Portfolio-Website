"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Profile {
    name: string;
    icon: string;
    url: string;
    color: string;
    textColor: string;
    rank?: string;
    bg: string;
}

const profiles: Profile[] = [
    {
        name: "LeetCode",
        icon: "/logos/leetcode.png",
        url: "https://leetcode.com/u/mLr2CVndYe/",
        color: "from-orange-500/20 to-yellow-500/20",
        textColor: "text-orange-400",
        bg: "bg-[#1a1a1a]"
    },
    {
        name: "CodeChef",
        icon: "/logos/codechef.png",
        url: "https://www.codechef.com/users/harshitap25",
        color: "from-amber-600/20 to-orange-400/20",
        textColor: "text-amber-400",
        bg: "bg-white"
    },
    {
        name: "GeeksforGeeks",
        icon: "/logos/geeksforgeeks.jpg",
        url: "https://www.geeksforgeeks.org/profile/seemayadazce2",
        color: "from-green-500/20 to-emerald-500/20",
        textColor: "text-green-400",
        bg: "bg-white"
    }
];

export default function CodingProfiles() {
    const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Create grid blocks
    const gridBlocks = Array.from({ length: 120 }, (_, i) => i);

    return (
        <section id="achievements" className="py-20 relative overflow-hidden bg-[#0a0a12]">
            {/* Metallic Texture Background */}
            <div className="absolute inset-0 opacity-30">
                {/* Base metallic gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-950/50" />

                {/* Metallic shine streaks */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"
                    style={{ backgroundSize: '200px 100%' }} />

                {/* Noise texture for grain */}
                <div className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '256px 256px'
                    }}
                />

                {/* Radial highlights for depth */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            {/* Edge Fade Overlays for Smooth Blending */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid grid-cols-12 gap-0 pointer-events-none">
                {gridBlocks.map((block) => {
                    const row = Math.floor(block / 12);
                    const col = block % 12;
                    const hoveredRow = hoveredBlock !== null ? Math.floor(hoveredBlock / 12) : -1;
                    const hoveredCol = hoveredBlock !== null ? hoveredBlock % 12 : -1;

                    // Calculate distance from hovered block
                    const distance = hoveredBlock !== null
                        ? Math.sqrt(Math.pow(row - hoveredRow, 2) + Math.pow(col - hoveredCol, 2))
                        : 999;

                    const isHovered = hoveredBlock === block;
                    const isNeighbor = distance > 0 && distance <= 2;
                    const isNearby = distance > 2 && distance <= 4;

                    return (
                        <motion.div
                            key={block}
                            className="aspect-square border border-white/[0.05] bg-transparent relative overflow-hidden"
                            initial={{ opacity: 0.5, scale: 1 }}
                            animate={{
                                opacity: isHovered ? 1 : isNeighbor ? 0.9 : isNearby ? 0.7 : 0.5,
                                scale: isHovered ? 1.15 : isNeighbor ? 1.08 : 1,
                                backgroundColor: isHovered
                                    ? 'rgba(59, 130, 246, 0.5)'
                                    : isNeighbor
                                        ? 'rgba(59, 130, 246, 0.25)'
                                        : isNearby
                                            ? 'rgba(59, 130, 246, 0.1)'
                                            : 'transparent',
                                borderColor: isHovered
                                    ? 'rgba(59, 130, 246, 0.9)'
                                    : isNeighbor
                                        ? 'rgba(59, 130, 246, 0.5)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                boxShadow: isHovered
                                    ? '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)'
                                    : isNeighbor
                                        ? '0 0 10px rgba(59, 130, 246, 0.3)'
                                        : '0 0 0 rgba(0, 0, 0, 0)',
                            }}
                            transition={{
                                duration: 0.2,
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            onMouseEnter={() => setHoveredBlock(block)}
                            onMouseLeave={() => setHoveredBlock(null)}
                            style={{ pointerEvents: 'auto' }}
                        >
                            {/* Pulsing inner glow for hovered block */}
                            {isHovered && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-purple-500/30"
                                    animate={{
                                        opacity: [0.3, 0.7, 0.3],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}

                            {/* Diagonal shine effect */}
                            {isHovered && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"
                                    initial={{ x: '-100%', y: '-100%' }}
                                    animate={{ x: '100%', y: '100%' }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }}
                                />
                            )}
                        </motion.div>
                    );
                })}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Profiles</h2>
                    <p className="text-white/60 text-center max-w-2xl">
                        Active participation in competitive programming and continuous learning through various coding platforms.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {profiles.map((profile, index) => (
                        <motion.a
                            key={index}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 150
                            }}
                            whileHover={{
                                y: -15,
                                scale: 1.15,
                                rotateZ: 10,
                                transition: { duration: 0.3, type: "spring", stiffness: 200 }
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${profile.color} blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-0 group-hover:opacity-80`} />

                                {/* Circle Container */}
                                <div className={`relative w-full h-full rounded-full border border-white/10 group-hover:border-white/50 ${profile.bg} group-hover:bg-opacity-90 flex items-center justify-center ${['LeetCode', 'CodeChef', 'Codolio'].includes(profile.name) ? 'p-1' : 'p-6'} shadow-xl group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-all duration-300 overflow-hidden`}>

                                    {/* Icon */}
                                    <div className={`relative w-full h-full ${['LeetCode', 'CodeChef', 'Codolio'].includes(profile.name) ? '' : 'p-2'}`}>
                                        <img
                                            src={profile.icon}
                                            alt={profile.name}
                                            className={`w-full h-full object-contain ${['LeetCode', 'Codolio'].includes(profile.name) ? 'scale-150' : ''}`}
                                        />
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                </div>
                            </div>

                            <span className={`text-sm md:text-base font-bold ${profile.textColor} opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-wider`}>
                                {profile.name}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
