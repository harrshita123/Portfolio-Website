"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Wrench } from "lucide-react";
import Image from "next/image";

interface Skill {
    name: string;
    icon: string;
    bg?: string;
}

const languages: Skill[] = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
];

const frameworks: Skill[] = [
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const databases: Skill[] = [
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const tools: Skill[] = [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Chrome DevTools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex items-center gap-3 mb-10 justify-center"
                    >
                        <motion.div
                            className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"
                            whileInView={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Code2 className="w-6 h-6 text-blue-400" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-white">Language Skills</h2>
                    </motion.div>

                    {/* Background Watermark for Languages */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] select-none pointer-events-none">
                        <Code2 className="w-64 h-64 text-white" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        {languages.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: index * 0.03,
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    rotateY: 180,
                                    rotateZ: 5,
                                    transition: { duration: 0.4, type: "spring", stiffness: 200 }
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="group flex flex-col items-center gap-3"
                            >
                                <div className="w-20 h-20 bg-[#1e1e1e] border border-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-10 justify-center"
                    >
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                            <Cpu className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Frameworks</h2>
                    </motion.div>

                    {/* Background Watermark for Frameworks */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] select-none pointer-events-none">
                        <Cpu className="w-64 h-64 text-white" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        {frameworks.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex flex-col items-center gap-3"
                            >
                                <div className={`w-20 h-20 bg-[#1e1e1e] border border-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-purple-500/50 group-hover:shadow-purple-500/20 group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className={`relative w-10 h-10 ${skill.bg === 'white' ? 'bg-white p-1 rounded-full' : ''}`}>
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Database Section */}
                <div className="mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-10 justify-center"
                    >
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                            <Database className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Database</h2>
                    </motion.div>

                    {/* Background Watermark for Database */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] select-none pointer-events-none">
                        <Database className="w-64 h-64 text-white" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        {databases.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex flex-col items-center gap-3"
                            >
                                <div className={`w-20 h-20 bg-[#1e1e1e] border border-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/20 group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className={`relative w-10 h-10 ${skill.bg === 'white' ? 'bg-white p-1 rounded-full' : ''}`}>
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tools Section */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-10 justify-center"
                    >
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                            <Wrench className="w-6 h-6 text-orange-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Tools and Softwares</h2>
                    </motion.div>

                    {/* Background Watermark for Tools */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] select-none pointer-events-none">
                        <Wrench className="w-64 h-64 text-white" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                        {tools.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex flex-col items-center gap-3"
                            >
                                <div className={`w-20 h-20 bg-[#1e1e1e] border border-white/5 rounded-2xl flex items-center justify-center shadow-lg group-hover:border-orange-500/50 group-hover:shadow-orange-500/20 group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className={`relative w-10 h-10 ${skill.bg === 'white' ? 'bg-white p-1 rounded-full' : ''}`}>
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
