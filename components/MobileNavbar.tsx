"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Trophy, Code2, FolderOpen, User } from "lucide-react";
import Link from "next/link";

const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Trophy, label: "Achievements", href: "#achievements" },
    { icon: Code2, label: "Skills", href: "#skills" },
    { icon: FolderOpen, label: "Projects", href: "#projects" },
    { icon: User, label: "About", href: "#about" },
];

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="lg:hidden fixed top-4 right-4 z-50">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8"
                    >
                        {/* Close Button inside Overlay */}
                        <button
                            onClick={toggleMenu}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                            aria-label="Close Menu"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {navItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={toggleMenu}
                                    className="flex items-center gap-4 text-2xl font-bold text-white/80 hover:text-cyan-400 transition-colors group"
                                >
                                    <item.icon className="w-8 h-8 group-hover:scale-110 transition-transform text-cyan-500/80" />
                                    <span>{item.label}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
