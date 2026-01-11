"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconSize?: number;
}

export default function Logo({ className = "", iconSize = 40 }: LogoProps) {
  const scrollToTop = (e: React.MouseEvent) => {
    // Only scroll to top if we are already on the home page
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      href="/"
      onClick={scrollToTop}
      className={`flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity ${className}`}
    >
      <Image
        src="/refearnapp.svg"
        alt="RefearnApp"
        width={iconSize}
        height={iconSize}
        className="w-auto h-auto"
        priority // Ensures the logo loads immediately
      />
      <span className="font-bold text-2xl tracking-tight">
        <span className="text-slate-900">Refearn</span>
        <span className="text-primary">App</span>
      </span>
    </Link>
  );
}
