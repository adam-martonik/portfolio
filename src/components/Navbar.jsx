import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/data';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'O mne', href: '#about' },
        { name: 'Projekty', href: '#projects' },
        { name: 'Zručnosti', href: '#skills' },
        { name: 'Skúsenosti', href: '#experience' },
        { name: 'Vzdelanie', href: '#education' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#about" className="group flex items-center gap-1.5 text-xl font-bold text-slate-100 hover:text-sky-400 transition-colors">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform"></span>
                    <span>Adam Martoník</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-slate-800"></div>

                    <div className="flex items-center gap-3">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profil"
                            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-all"
                        >
                            <GithubIcon size={18} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profil"
                            className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/60 rounded-lg transition-all"
                        >
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-sky-400 p-2 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 py-5 px-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-slate-200 font-medium hover:text-sky-400 py-1 border-b border-slate-900"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-4 pt-2">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400"
                        >
                            <GithubIcon size={18} /> GitHub
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400"
                        >
                            <LinkedinIcon size={18} /> LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
