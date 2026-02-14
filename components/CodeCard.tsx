"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const skills = [
    "Artificial Intelligence",
    "Machine Learning",
    "Robotics Enthusiast",
    "Full-Stack Developer"
];

export default function CodeCard() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % skills.length;
            const fullText = skills[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500); // Pause before new word
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md bg-black rounded-lg overflow-hidden font-mono text-sm shadow-2xl border border-white/5"
        >
            <div className="flex items-center justify-between px-4 py-3 bg-transparent">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-white font-medium text-xs">bash</span>
            </div>
            <div className="p-6 pt-2 space-y-4">
                <div>
                    <div className="flex gap-2">
                        <span className="text-green-400 font-bold">$</span>
                        <span className="text-green-400 font-bold">npm run intro</span>
                    </div>
                    <div className="mt-1 text-white font-bold">
                        + Harshita@21.3.18
                    </div>
                    <div className="text-white mt-1 leading-relaxed">
                        Robotics Enthusiast • Open Source Contributor • Full-Stack
                    </div>
                </div>

                <div>
                    <div className="flex gap-2">
                        <span className="text-green-400 font-bold">$</span>
                        <span className="text-green-400 font-bold">flutter pub get skills</span>
                    </div>
                    <div className="mt-1 text-white font-bold h-6">
                        {text}<span className="animate-pulse">|</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
