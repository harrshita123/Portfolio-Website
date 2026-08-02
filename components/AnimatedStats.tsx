"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItemProps {
    value: number | null;
    label: string;
    suffix?: string;
    prefix?: string;
    className?: string;
}

function StatItem({ value, label, suffix = "", prefix = "", className = "" }: StatItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const display = useTransform(spring, (current) =>
        prefix + Math.round(current).toLocaleString() + suffix
    );

    useEffect(() => {
        if (isInView && value !== null) {
            spring.set(value);
        }
    }, [spring, value, isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className={`min-w-0 text-center ${className}`}
        >
            <motion.div className="text-3xl sm:text-4xl xl:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tabular-nums">
                {value === null ? "..." : display}
            </motion.div>
            <div className="text-white/60 text-xs sm:text-sm mt-2">{label}</div>
        </motion.div>
    );
}

export default function AnimatedStats() {
    const [stats, setStats] = useState({
        repos: null as number | null,
        contributions: null as number | null,
        prs: null as number | null,
        issues: null as number | null,
        stars: null as number | null
    });

    useEffect(() => {
        async function fetchStats() {
            try {
                const response = await fetch("/api/github-stats");
                if (!response.ok) {
                    throw new Error("GitHub statistics request failed");
                }

                const data: {
                    totalRepos: number | null;
                    totalContributions: number | null;
                    totalPRs: number | null;
                    totalIssues: number | null;
                    totalStars: number | null;
                } = await response.json();

                setStats({
                    repos: data.totalRepos,
                    contributions: data.totalContributions,
                    prs: data.totalPRs,
                    issues: data.totalIssues,
                    stars: data.totalStars,
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        }

        fetchStats();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-6 gap-x-3 gap-y-8 p-4 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
            <StatItem value={stats.repos} label="Repositories" suffix="+" className="col-span-3 sm:col-span-2" />
            <StatItem value={stats.contributions} label="Contributions" suffix="+" className="col-span-3 sm:col-span-2" />
            <StatItem value={stats.prs} label="Pull Requests" suffix="+" className="col-span-3 sm:col-span-2" />
            <StatItem value={stats.issues} label="Issues Raised" suffix="+" className="col-span-3 sm:col-span-2 sm:col-start-2" />
            <StatItem value={stats.stars} label="Total Stars" suffix="+" className="col-span-6 sm:col-span-2" />
        </motion.div>
    );
}
