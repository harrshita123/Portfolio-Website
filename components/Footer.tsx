"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/harshita-yadav-749763361/",
            label: "LinkedIn",
            color: "hover:text-blue-500"
        },
        {
            icon: Github,
            href: "https://github.com/harrshita123",
            label: "GitHub",
            color: "hover:text-gray-400"
        },
        {
            icon: Twitter,
            href: "https://x.com/HarshitaYa75856",
            label: "Twitter",
            color: "hover:text-blue-400"
        },
        {
            icon: Mail,
            href: "mailto:seemayadavanuj123@gmail.com",
            label: "Email",
            color: "hover:text-red-500"
        }
    ];

    return (
        <footer className="relative py-16 overflow-hidden border-t border-white/10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center space-y-8">

                    {/* Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/harshita-photo.png"
                                alt="Harshita Yadav"
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`text-white/60 ${social.color} transition-colors duration-300`}
                            >
                                <social.icon className="w-6 h-6" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center space-y-2"
                    >
                        <p className="text-white/80 text-lg">
                            Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-semibold">Harshita Yadav</span>
                        </p>
                        <p className="text-white/60 text-sm">
                            Hosted on <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Vercel</a>.
                            The source code is available on <a href="https://github.com/harrshita123/Harshita-Portfolio" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">GitHub</a>.
                        </p>
                        <p className="text-white/50 text-sm flex items-center justify-center gap-2">
                            Hit me up anytime or want always available for a good talk
                            <span className="text-xl">😊</span>
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-white/40 text-sm"
                    >
                        © {currentYear} Harshita Yadav. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
