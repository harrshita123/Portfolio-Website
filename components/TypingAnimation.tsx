"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export default function TypingAnimation({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
}: TypingAnimationProps) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const fullText = texts[currentTextIndex];

        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimeout);
        }

        if (!isDeleting && currentText === fullText) {
            setIsPaused(true);
            return;
        }

        if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                setCurrentText((prev) =>
                    isDeleting
                        ? fullText.substring(0, prev.length - 1)
                        : fullText.substring(0, prev.length + 1)
                );
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className="inline-flex items-center">
            {currentText}
            <span className="ml-1 w-0.5 h-6 bg-cyan-500 animate-pulse" />
        </span>
    );
}
