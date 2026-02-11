import Link from "next/link";
import { Home, Briefcase, Trophy, Code2, FolderOpen, User } from "lucide-react";

const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Trophy, label: "Achievements", href: "#achievements" },
    { icon: Code2, label: "Skills", href: "#skills" },
    { icon: FolderOpen, label: "Projects", href: "#projects" },
    { icon: User, label: "About", href: "#about" },
];

export default function Sidebar() {
    return (
        <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 bg-secondary/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-xl">
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    className="p-3 rounded-xl hover:bg-white/10 hover:text-primary transition-all duration-300 group relative"
                >
                    <item.icon className="w-6 h-6" />
                    <span className="absolute left-full ml-4 px-2 py-1 bg-secondary border border-white/10 rounded-md text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {item.label}
                    </span>
                </Link>
            ))}
        </div>
    );
}
