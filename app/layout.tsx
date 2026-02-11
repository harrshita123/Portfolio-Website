import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google"; // eslint-disable-line @typescript-eslint/no-unused-vars
import "./globals.css";
import InteractiveBackground from "@/components/InteractiveBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harshitayadav-portfolio.vercel.app"),
  title: {
    default: "Harshita Yadav - Portfolio",
    template: "%s | Harshita Yadav"
  },
  description: "Portfolio of Harshita Yadav, a Full-Stack Software Developer specializing in Next.js, React, and Android development.",
  keywords: ["Harshita Yadav", "Software Developer", "Full Stack Developer", "Android Developer", "Next.js", "React", "Open Source", "Portfolio"],
  authors: [{ name: "Harshita Yadav", url: "https://github.com/harrshita123" }],
  creator: "Harshita Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshitayadav-portfolio.vercel.app",
    title: "Harshita Yadav - Software Developer",
    description: "Portfolio of Harshita Yadav, a Full-Stack Software Developer specializing in Next.js, React, and Android development.",
    images: [
      {
        url: "/harshita-photo.png",
        width: 1200,
        height: 630,
        alt: "Harshita Yadav - Software Developer",
      },
    ],
    siteName: "Harshita Yadav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshita Yadav - Software Developer",
    description: "Portfolio of Harshita Yadav, a Full-Stack Software Developer specializing in Next.js, React, and Android development.",
    images: ["/harshita-photo.png"],
    creator: "@HarshitaYa75856",
  },
  icons: {
    icon: "/bear-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
