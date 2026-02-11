"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Layers, Activity, Smartphone, Terminal, Building2, Newspaper } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        title: "Local AI",
        description: "A local AI assistant powered by advanced language models, providing privacy-focused AI capabilities without cloud dependency.",
        link: "https://github.com/harrshita123/Local-Ai-assistant",
        linkText: "GitHub",
        visual: (
            <div className="w-full h-full bg-[#0a0a0a] p-4 flex flex-col justify-center gap-3 relative overflow-hidden">
                {/* Abstract UI elements */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-[2px]" />
                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-2 ml-4">
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-2 justify-end">
                    <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-[2px]" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 blur-[2px]" />
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
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
        title: "Student Attendance System",
        description: "Automated attendance tracking system for educational institutions with real-time monitoring and analytics.",
        link: "https://github.com/harrshita123/Attendance-system",
        linkText: "Live Demo",
        status: "https://student-attendance-system-uz1n.onrender.com/",
        visual: (
            <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/student_attendence.png"
                    alt="Student Attendance System"
                    fill
                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
        title: "Open Source Project",
        description: "A collection of open-source contributions and experimental projects showcasing various technologies and frameworks.",
        link: "https://github.com/harrshita123/agri-climate-tracker",
        linkText: "GitHub",
        visual: (
            <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/open_source_project.png"
                    alt="Open Source Project"
                    fill
                    className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
        )
    }
];

interface LargeProject {
    title: string;
    description: string;
    github: string;
    live?: string;
    tags: string[];
    visual: React.ReactNode;
}

const largeProjects: LargeProject[] = [
    {
        title: "GroupWallet",
        description: "A collaborative expense management platform for groups, enabling shared wallets, expense tracking, and automated bill splitting with real-time synchronization.",
        github: "https://github.com/harrshita123/group-wallet",
        tags: ["fintech", "react", "nodejs", "mongodb", "real-time", "expense-tracking", "collaborative"],
        visual: (
            <div className="w-full h-full bg-[#050510] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
                <div className="text-center z-10 p-8">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                        <Layers className="text-white w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">GroupWallet</h4>
                    <p className="text-white/40 mt-2 text-sm">Split expenses, share wallets</p>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute top-10 left-10 w-2 h-2 bg-green-500 rounded-full" />
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-emerald-500 rounded-full" />
            </div>
        )
    },
    {
        title: "User Auth System",
        description: "A comprehensive authentication and authorization system with JWT tokens, OAuth integration, role-based access control, and secure session management for modern web applications.",
        github: "https://github.com/harrshita123/Social-Networking-Platform",
        live: "https://8byte-beryl.vercel.app/",
        tags: ["authentication", "security", "JWT", "OAuth", "RBAC", "nodejs", "express", "backend"],
        visual: (
            <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/user_auth.png"
                    alt="User Auth System"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
        )
    }
];

const freelanceProjects: LargeProject[] = [
    {
        title: "Dr. Parth Portfolio",
        description: "A professional portfolio website for Dr. Parth Sorathiya, featuring modern design, smooth animations, and comprehensive information about medical services and expertise.",
        github: "https://github.com/harrshita123/Parth-Portfolio-website",
        live: "https://www.parthsorathiya.com/",
        tags: ["freelance", "portfolio", "nextjs", "framer-motion", "UI", "UX", "healthcare"],
        visual: (
            <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/dr_parth.png"
                    alt="Dr. Parth Portfolio"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
        )
    },
    {
        title: "Portfolio Profile (Current)",
        description: "The current portfolio website you're viewing right now! Built with Next.js 15, featuring metallic textures, 3D effects, animated gradients, and a comprehensive showcase of my work.",
        github: "https://github.com/harrshita123/Portfolio-Website",
        tags: ["personal", "portfolio", "nextjs", "framer-motion", "3D", "animations", "modern"],
        visual: (
            <div className="w-full h-full relative overflow-hidden bg-[#0a0a0a]">
                <Image
                    src="/portfolio.png"
                    alt="Portfolio Website"
                    fill
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
        )
    }
];

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
                    {projects.map((project, index) => (
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

                {/* Large Scale Projects Section */}
                <div className="flex flex-col items-center mb-16 space-y-4 pt-10 border-t border-white/5">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Large Scale Projects
                    </h2>
                </div>

                <div className="flex flex-col gap-12">
                    {largeProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 md:grid md:grid-cols-2 group"
                        >
                            {/* Project Visual */}
                            <div className="h-64 md:h-full border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden min-h-[300px]">
                                {project.visual}
                            </div>

                            {/* Project Details */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a103c] text-purple-300 border border-purple-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Link
                                        href={project.github}
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        Github
                                    </Link>
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            className="flex items-center gap-2 px-6 py-3 bg-[#121212] border border-white/10 text-white rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            Live
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Freelance/UI Projects Section */}
                <div className="flex flex-col items-center mb-16 space-y-4 pt-10 border-t border-white/5">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        Freelance/UI Projects
                    </h2>
                </div>

                <div className="flex flex-col gap-12">
                    {freelanceProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 md:grid md:grid-cols-2 group"
                        >
                            {/* Project Visual */}
                            <div className="h-64 md:h-full border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden min-h-[300px]">
                                {project.visual}
                            </div>

                            {/* Project Details */}
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a103c] text-purple-300 border border-purple-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Link
                                        href={project.github}
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        Github
                                    </Link>
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            className="flex items-center gap-2 px-6 py-3 bg-[#121212] border border-white/10 text-white rounded-lg font-medium hover:bg-[#1a1a1a] transition-colors"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            Live
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
