"use client";

import { useState, useRef, useEffect } from "react";
import { Headphones, Play, Pause } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AudioProfile() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [mode, setMode] = useState<"serious" | "enthusiastic">("serious");
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    const togglePlay = () => {
        const audioFile = mode === "serious" ? "/harshita-serious-voice.mp3" : "/harshita-enthusiatic-voice.mp3";

        // If audio source changes or not initialized
        if (!audioRef.current || audioRef.current.src.indexOf(audioFile) === -1) {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            audioRef.current = new Audio(audioFile);
            audioRef.current.onended = () => setIsPlaying(false);

            // Play new audio
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            // Toggle play/pause for current audio
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="relative w-full flex justify-center group/glow">
            {/* Dynamic Background Glow */}
            <div
                className={`absolute -inset-10 blur-3xl rounded-full -z-10 transition-all duration-1000 ${isPlaying
                    ? "bg-gradient-to-r from-red-500/20 via-purple-500/20 to-orange-500/20 opacity-100 scale-110"
                    : "bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-70 scale-100"
                    }`}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex w-full max-w-[450px] overflow-hidden rounded-xl bg-[#0b1221] border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] group/card hover:border-cyan-500/50 transition-all duration-300"
            >
                {/* Left Side - Image */}
                <div className="relative w-32 h-auto bg-black/40 border-r border-cyan-500/20">
                    <Image
                        src="/anime.png"
                        alt="AI Avatar"
                        fill
                        className="object-cover opacity-90 group-hover/card:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col flex-1 p-4 gap-3">
                    {/* Header */}
                    <div className="flex items-start gap-3">
                        <Headphones className="w-5 h-5 text-cyan-400 mt-1" />
                        <div className="flex flex-col">
                            <h3 className="text-base font-bold text-white leading-tight">About me</h3>
                            <p className="text-[10px] text-cyan-400 font-medium tracking-wide">by AI</p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 mt-1">
                        <button
                            onClick={() => setMode("serious")}
                            className={`text-[10px] px-3 py-1 rounded-full font-bold transition-all duration-300 border ${mode === "serious"
                                ? "bg-white text-black border-white shadow-sm"
                                : "bg-transparent text-gray-400 border-gray-600 hover:text-white hover:border-gray-400"
                                }`}
                        >
                            serious
                        </button>
                        <button
                            onClick={() => setMode("enthusiastic")}
                            className={`text-[10px] px-3 py-1 rounded-full font-bold transition-all duration-300 border ${mode === "enthusiastic"
                                ? "bg-[#0f2e3a] text-cyan-400 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                                : "bg-transparent text-gray-400 border-gray-600 hover:text-cyan-400 hover:border-cyan-500/50"
                                }`}
                        >
                            enthusiastic
                        </button>
                    </div>

                    {/* Play Button */}
                    <button
                        onClick={togglePlay}
                        className="flex items-center gap-3 mt-1 group w-full"
                    >
                        <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 ${isPlaying
                            ? "bg-transparent border-cyan-400 text-cyan-400 scale-110"
                            : "bg-transparent border-cyan-500/50 text-cyan-400 group-hover:border-cyan-400 group-hover:text-cyan-300"
                            }`}>
                            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current pl-0.5" />}
                        </div>

                        {isPlaying ? (
                            <div className="flex items-center gap-1 h-5 flex-1 pl-2">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-full"
                                        animate={{
                                            height: ["20%", "100%", "20%"],
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.1,
                                            repeatType: "mirror"
                                        }}
                                        style={{
                                            height: "20%",
                                            minHeight: "20%"
                                        }}
                                    />
                                ))}
                            </div>
                        ) : (
                            <span className="text-xs font-medium text-white/60 group-hover:text-cyan-400 transition-colors">
                                Listen all about me!
                            </span>
                        )}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
