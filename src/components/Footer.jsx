import React from 'react';
import { personalInfo } from '../data/data';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-950 border-t border-slate-800/80 py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-slate-200 font-bold text-lg mb-1">
                        {personalInfo.name}
                    </p>
                    <p className="text-slate-400 text-xs md:text-sm">
                        Junior Software Engineer & Študent informatiky na TUKE
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-all"
                        aria-label="GitHub"
                    >
                        <GithubIcon size={18} />
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-all"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon size={18} />
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-all"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </a>
                    <button
                        onClick={scrollToTop}
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-all cursor-pointer"
                        aria-label="Hore"
                        title="Naspäť hore"
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-400">
                <p>© {new Date().getFullYear()} Adam Martoník. Postavené v React 18, Tailwind CSS, Vite & Framer Motion.</p>
            </div>
        </footer>
    );
}
