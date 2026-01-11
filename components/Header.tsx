"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-3 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <Logo iconSize={40} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {["Features", "How It Works", "Testimonials", "Pricing"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-slate-600 hover:text-blue-600 hover:scale-105 transition-all font-medium"
              >
                {item}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-slate-600 hover:text-blue-600 font-medium"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-sm font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-900 transition-colors"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-2xl px-6 py-8 rounded-2xl mt-3 mx-3 flex flex-col space-y-6 border border-slate-200 animate-slide-down">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-5">
            {["Features", "How It Works", "Testimonials", "Pricing"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={closeMenu}
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </nav>

          {/* Separator and Auth Row */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <Link
              href="/login"
              onClick={closeMenu}
              className="text-lg font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={closeMenu}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold active:scale-95 transition-transform shadow-lg shadow-blue-200 hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
