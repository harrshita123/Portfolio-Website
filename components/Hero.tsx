"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CodeCard from "./CodeCard";
import TypingAnimation from "./TypingAnimation";
import AnimatedStats from "./AnimatedStats";
import { useEffect, useState } from "react";

function AnimatedCounter({ value }: { value: number }) {
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
}

export default function Hero() {
    const [visitorCount, setVisitorCount] = useState<number>(0);

    useEffect(() => {
        async function fetchVisitorCount() {
            try {
                // Increment counter on each page load via internal API
                const response = await fetch('/api/visit');
                const data = await response.json();
                setVisitorCount(data.count || 0);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
                setVisitorCount(0);
            }
        }

        fetchVisitorCount();
    }, []);
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            {/* Fine Grid Pattern - Only top half with fade */}
            <div className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(20, 184, 166, 0.08) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(20, 184, 166, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
            }} />

            {/* Original gradient blurs */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{
                            scale: 1.03,
                            rotateY: 5,
                            rotateX: 2,
                            transition: { duration: 0.4, type: "spring", stiffness: 200 }
                        }}
                        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                        className="relative w-full flex justify-center lg:w-1/2"
                    >
                        <div className="relative w-full max-w-[320px] lg:max-w-[500px] aspect-[3/4] grayscale-0 hover:grayscale transition-all duration-500 group lg:-ml-8 lg:-mt-12">
                            {/* Organic Glow on Hover - follows subject contour */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 blur-3xl group-hover:blur-[60px] transition-all duration-500 -z-10 scale-90" />

                            {/* Image Container - No border, no rounded corners */}
                            <div className="w-full h-full relative transition-all duration-500 group-hover:drop-shadow-[0_0_40px_rgba(20,184,166,0.6)]">
                                <Image
                                    src="/harshita-photo.png"
                                    alt="Harshita Yadav"
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />


                                {/* Signature Overlay - Diagonal positioning */}
                                <div className="absolute -bottom-6 lg:-bottom-10 left-0 right-0 z-10 flex justify-center lg:justify-start lg:-ml-24">
                                    <Image
                                        src="/harshita-sign.png"
                                        alt="Harshita Signature"
                                        width={700}
                                        height={450}
                                        className="opacity-90 drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)] w-[200px] lg:w-[700px] h-auto"
                                        style={{
                                            filter: 'brightness(0) invert(1)',
                                            transform: 'rotate(-8deg)'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Horizontal Green/Teal Line Below Photo - Not affected by hover */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent lg:-ml-8" />
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                                <span className="animated-gradient-text">Hi, I am Harshita Yadav</span>
                            </h1>

                            {/* Typing Animation */}
                            <div className="text-lg lg:text-2xl text-white/70 mt-4 h-[30px] lg:h-auto">
                                <TypingAnimation
                                    texts={[
                                        "Artificial Intelligence",
                                        "Machine Learning",
                                        "Robotics Enthusiast",
                                        "Full-Stack Developer"
                                    ]}
                                />
                            </div>

                            <a
                                href="mailto:seemayadavanuj123@gmail.com"
                                className="inline-flex items-center gap-2 text-blue-400 mt-4 hover:text-blue-300 transition-colors text-base lg:text-lg group"
                            >
                                seemayadavanuj123@gmail.com
                                <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </motion.div>

                        <CodeCard />

                        {/* Animated Stats */}
                        <AnimatedStats />
                    </div>
                </div>
            </div>

            {/* Total Visits Pill */}
            {/* Total Visits Pill with Animated Gradient Border */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="absolute top-24 lg:top-8 left-1/2 -translate-x-1/2 rounded-full p-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_infinite_linear] overflow-hidden z-20"
            >
                <div className="relative bg-[#0a0a0a]/90 backdrop-blur-md px-4 lg:px-6 py-1.5 lg:py-2 rounded-full flex items-center gap-2 border border-white/5">
                    <span className="text-white/50 text-xs lg:text-sm font-light">Total Visits</span>
                    <div className="w-px h-3 lg:h-4 bg-white/10" />
                    <span className="font-bold text-white text-xs lg:text-sm tabular-nums tracking-wide">
                        <AnimatedCounter value={visitorCount} />
                    </span>

                    {/* Inner sheen effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                </div>
            </motion.div>
        </section>
    );
}
