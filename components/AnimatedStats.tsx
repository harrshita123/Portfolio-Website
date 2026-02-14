"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItemProps {
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

function StatItem({ value, label, suffix = "", prefix = "" }: StatItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { bounce: 0, duration: 2000 });
    const display = useTransform(spring, (current) =>
        prefix + Math.round(current).toLocaleString() + suffix
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [spring, value, isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <motion.div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {display}
            </motion.div>
            <div className="text-white/60 text-sm mt-2">{label}</div>
        </motion.div>
    );
}

export default function AnimatedStats() {
    const [stats, setStats] = useState({
        repos: 0,
        contributions: 0,
        prs: 0,
        stars: 0
    });

    useEffect(() => {
        async function fetchStats() {
            try {
                const username = 'harrshita123';
                let newStats = { repos: 0, contributions: 0, prs: 0, stars: 0 };

                // Fetch User Data & Repos
                try {
                    const userResponse = await fetch(`https://api.github.com/users/${username}`);
                    if (userResponse.ok) {
                        const userData = await userResponse.json();
                        newStats.repos = userData.public_repos;
                    }
                } catch (e) { console.error(e); }

                // Fetch Contributions
                try {
                    const contributionResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
                    if (contributionResponse.ok) {
                        const contributionData = await contributionResponse.json();
                        const total = Object.values(contributionData.total).reduce((a: any, b: any) => a + b, 0);
                        newStats.contributions = Number(total);
                    }
                } catch (e) {
                    console.error(e);
                    newStats.contributions = 100; // Fallback
                }

                // Fetch Stars
                try {
                    const starsResponse = await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&per_page=100`);
                    if (starsResponse.ok) {
                        const starsData = await starsResponse.json();
                        const stars = starsData.items.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
                        newStats.stars = stars;
                    }
                } catch (e) { console.error(e); }

                // Fetch PRs
                try {
                    const prsResponse = await fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr`);
                    if (prsResponse.ok) {
                        const prsData = await prsResponse.json();
                        newStats.prs = prsData.total_count;
                    }
                } catch (e) { console.error(e); }

                setStats(newStats);
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 p-4 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
            <StatItem value={stats.repos} label="Repositories" suffix="+" />
            <StatItem value={stats.contributions} label="Contributions" suffix="+" />
            <StatItem value={stats.prs} label="Pull Requests" suffix="+" />
            <StatItem value={stats.stars} label="Total Stars" suffix="+" />
        </motion.div>
    );
}
