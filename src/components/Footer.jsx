import React from 'react';
import { personalInfo } from '../data/data';
import { Mail, Phone, ArrowUp, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-slate-950 border-t border-slate-800/80 py-16 px-6 relative">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-4">
                    <Send size={13} /> Spojme sa
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4">
                    Hľadáte šikovného vývojára do tímu?
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8">
                    Som otvorený zaujímavým projektom, stážam a junior príležitostiam v IT sfére. Ozvite sa mi priamo na e-mail alebo telefón.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-sky-500/25 hover:-translate-y-0.5 text-sm md:text-base"
                    >
                        <Mail size={18} /> {personalInfo.email}
                    </a>
                    <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-sm md:text-base"
                    >
                        <Phone size={18} /> {personalInfo.phone}
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                <p>
                    © {new Date().getFullYear()} {personalInfo.name} ({personalInfo.fullName}). Vytvorené v Reacte & Tailwind CSS.
                </p>

                <div className="flex items-center gap-3">
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-slate-100 transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubIcon size={17} />
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-sky-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon size={17} />
                    </a>
                    <button
                        onClick={scrollToTop}
                        className="p-2 text-slate-400 hover:text-sky-400 transition-colors cursor-pointer"
                        title="Hore"
                        aria-label="Návrat na vrch"
                    >
                        <ArrowUp size={17} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
