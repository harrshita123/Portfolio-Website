"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import AudioProfile from "./AudioProfile";

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Column - Visuals */}
                        <div className="flex flex-col items-center gap-8 w-full">
                            {/* AI Card */}
                            <AudioProfile />

                            {/* HARSHITA Typography with Mirror Effect */}
                            <div className="relative select-none pointer-events-none mt-8 flex flex-col items-center">
                                {/* Main Text */}
                                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight flex gap-1 z-10 relative">
                                    {[
                                        { char: "H", colors: "from-orange-400 to-amber-600" },
                                        { char: "A", colors: "from-blue-400 to-indigo-600" },
                                        { char: "R", colors: "from-pink-500 to-rose-600" },
                                        { char: "S", colors: "from-purple-400 to-violet-600" },
                                        { char: "H", colors: "from-teal-400 to-emerald-600" },
                                        { char: "I", colors: "from-orange-400 to-amber-600" },
                                        { char: "T", colors: "from-blue-400 to-indigo-600" },
                                        { char: "A", colors: "from-pink-500 to-rose-600" }
                                    ].map((item, index) => (
                                        <motion.span
                                            key={index}
                                            whileHover={{
                                                y: -15,
                                                scale: 1.15,
                                                rotateX: 15,
                                                rotateY: 15,
                                                transition: { type: "spring", stiffness: 400, damping: 10 }
                                            }}
                                            className="relative cursor-default select-none"
                                            style={{
                                                display: "inline-block",
                                                transformStyle: "preserve-3d",
                                                perspective: "500px"
                                            }}
                                        >
                                            <span
                                                className={`bg-gradient-to-b ${item.colors} bg-clip-text text-transparent italic`}
                                                style={{
                                                    fontSize: 'inherit',
                                                    WebkitTextStroke: '0.5px rgba(255,255,255,0.2)',
                                                    filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.1))',
                                                    textShadow: `
                                                        1px 1px 0px #e2e8f0,
                                                        2px 2px 0px #cbd5e1,
                                                        3px 3px 0px #94a3b8,
                                                        4px 4px 0px #94a3b8,
                                                        5px 5px 0px #64748b,
                                                        6px 6px 0px #475569,
                                                        7px 7px 10px rgba(0,0,0,0.8)
                                                    `
                                                }}
                                            >
                                                {item.char}
                                            </span>
                                        </motion.span>
                                    ))}
                                </h2>

                                {/* Reflection */}
                                <div
                                    className="absolute left-0 right-0 top-[70%] md:top-[85%] lg:top-[90%] flex justify-center gap-1 -z-10 opacity-20 select-none pointer-events-none"
                                    style={{
                                        transform: 'scaleY(-1)',
                                        maskImage: 'linear-gradient(to bottom, transparent, black)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
                                    }}
                                    aria-hidden="true"
                                >
                                    {"HARSHITA".split("").map((char, index) => (
                                        <span
                                            key={index}
                                            className="text-slate-300 blur-[4px] italic"
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-6 lg:space-y-8 relative pl-0 lg:pl-10 text-center lg:text-left">
                            {/* Vertical Line decoration */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 hidden lg:block rounded-full" />

                            <h2 className="text-5xl font-bold text-white">About</h2>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                                <p>
                                    I am a motivated <span className="text-blue-500 font-bold">B.Tech Computer Science (AI & ML)</span> student.
                                </p>
                                <p>
                                    Passionate about <span className="text-blue-500 font-bold">Artificial Intelligence, Machine Learning, Robotics</span>, and <span className="text-blue-500 font-bold">Full-Stack Web Development</span>, with a strong interest in building real-world, impact-driven solutions.
                                </p>
                                <p>
                                    Actively developing skills in <span className="text-blue-500 font-bold">Python, Web Technologies, and Data Structures</span>, while contributing to open-source projects and participating in hackathons.
                                </p>
                            </div>

                            <a href="https://docs.google.com/document/d/1WgBRZFvnqeVxVf3xb95B2gQiYec0SYQLzM2PNXPDB0g/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="block w-full bg-white hover:bg-gray-200 text-black font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] transition-all duration-300 text-center uppercase tracking-widest text-sm relative overflow-hidden group">
                                <span className="relative z-10">Resume</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </a>
                        </div>

                    </div>
                </motion.div>
            </div >
        </section >
    );
}
