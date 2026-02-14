"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitPullRequest, Code2, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface StatCard {
    icon: any;
    label: string;
    value: string;
    color: string;
    bgColor: string;
}

interface GitHubStats {
    totalStars: number;
    totalPRs: number;
    totalRepos: number;
    totalContributions: number;
}

export default function GitHubStats() {
    const [githubStats, setGithubStats] = useState<GitHubStats>({
        totalStars: 0,
        totalPRs: 0,
        totalRepos: 0,
        totalContributions: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGitHubStats() {
            try {
                const username = 'harrshita123';

                // 1. Fetch User Data
                try {
                    const userResponse = await fetch(`https://api.github.com/users/${username}`);
                    if (userResponse.ok) {
                        const userData = await userResponse.json();
                        setGithubStats(prev => ({
                            ...prev,
                            totalRepos: userData.public_repos,
                        }));
                    } else {
                        // Fallback for repos count
                        const repoSearchResponse = await fetch(`https://api.github.com/search/repositories?q=user:${username}`);
                        if (repoSearchResponse.ok) {
                            const repoSearchData = await repoSearchResponse.json();
                            setGithubStats(prev => ({
                                ...prev,
                                totalRepos: repoSearchData.total_count,
                            }));
                        }
                    }
                } catch (e) {
                    console.error("Failed to fetch user data", e);
                }

                // 2. Fetch Contributions (using external API for accuracy)
                try {
                    const contributionResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
                    if (contributionResponse.ok) {
                        const contributionData = await contributionResponse.json();
                        // Sum up contributions from all years
                        const totalContributions = Object.values(contributionData.total).reduce((a: any, b: any) => a + b, 0);
                        setGithubStats(prev => ({ ...prev, totalContributions: Number(totalContributions) }));
                    }
                } catch (e) {
                    console.error("Failed to fetch contributions", e);
                    setGithubStats(prev => ({ ...prev, totalContributions: 100 })); // Fallback
                }

                try {
                    // 2. Fetch Stars using Search API (Include forks as user's starred repos are often forks)
                    const starsResponse = await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&per_page=100`);
                    if (starsResponse.ok) {
                        const starsData = await starsResponse.json();
                        const stars = starsData.items.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
                        setGithubStats(prev => ({ ...prev, totalStars: stars }));
                    }
                } catch (e) {
                    console.error("Failed to fetch stars", e);
                }

                try {
                    // 3. Fetch PRs
                    const prsResponse = await fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr`);
                    if (prsResponse.ok) {
                        const prsData = await prsResponse.json();
                        setGithubStats(prev => ({ ...prev, totalPRs: prsData.total_count }));
                    }
                } catch (e) {
                    console.error("Failed to fetch PRs", e);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                setLoading(false);
            }
        }

        fetchGitHubStats();
    }, []);

    const stats: StatCard[] = [
        {
            icon: Star,
            label: "Total Stars",
            value: loading ? "..." : `${githubStats.totalStars}+`,
            color: "text-yellow-400",
            bgColor: "bg-yellow-500/10"
        },
        {
            icon: GitPullRequest,
            label: "Pull Requests",
            value: loading ? "..." : `${githubStats.totalPRs}+`,
            color: "text-purple-400",
            bgColor: "bg-purple-500/10"
        },
        {
            icon: GitBranch,
            label: "Repositories",
            value: loading ? "..." : `${githubStats.totalRepos}+`,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10"
        },
        {
            icon: Users,
            label: "Contributions",
            value: loading ? "..." : `${githubStats.totalContributions}+`,
            color: "text-green-400",
            bgColor: "bg-green-500/10"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
                        <Code2 className="w-10 h-10 text-white" />
                        GitHub Activity
                    </h2>
                    <p className="text-white/60 text-center max-w-2xl">
                        Contributing to open source and building projects that matter
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 120
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.05,
                                rotateX: 5,
                                rotateY: 5,
                                transition: { duration: 0.3, type: "spring", stiffness: 250 }
                            }}
                            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl blur-xl group-hover:blur-3xl transition-all duration-300 group-hover:opacity-150" />
                            <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all duration-300">
                                <motion.div
                                    className={`${stat.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </motion.div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-white/50">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Contribution Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-green-400" />
                                Contribution Activity
                            </h3>
                            <a
                                href="https://github.com/harrshita123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                            >
                                View on GitHub
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>

                        {/* Real GitHub Contribution Graph */}
                        <div className="relative rounded-xl overflow-hidden bg-[#0d1117] p-4">
                            <img
                                src="https://github-readme-activity-graph.vercel.app/graph?username=harrshita123&bg_color=0d1117&color=39d353&line=39d353&point=39d353&area=true&hide_border=true&area_color=39d353"
                                alt="GitHub Contribution Chart"
                                className="w-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
