import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { Mail, ArrowDown, Sparkles, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-6 relative pt-28 pb-16 overflow-hidden">
            {/* Ambient Background Radial Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/12 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl z-10"
            >
                {/* Greeting badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs md:text-sm text-slate-300 mb-8 backdrop-blur-md shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-medium">Osobný web & vybrané projekty</span>
                </div>

                {/* Name */}
                <h1 className="text-6xl md:text-8xl font-black text-slate-50 mb-5 tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-sky-200 to-sky-400">
                        {personalInfo.name}
                    </span>
                </h1>

                {/* Role / Tagline */}
                <p className="text-xl md:text-2xl text-sky-400/90 mb-8 font-medium">
                    {personalInfo.role}
                </p>

                {/* 2-3 Sentences Introduction */}
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
                    {personalInfo.intro}
                </p>

                {/* Current roles micro-cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
                    {personalInfo.workplaces.map((w, idx) => (
                        <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-start gap-3"
                        >
                            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5 flex-shrink-0">
                                <Briefcase size={16} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Kde pôsobím</p>
                                <p className="text-sm font-bold text-slate-200 truncate">{w.role}</p>
                                <p className="text-xs text-slate-400">{w.company}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Actions */}
                <div className="flex flex-wrap justify-center items-center gap-3.5 mb-10">
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/25 text-sm md:text-base cursor-pointer"
                    >
                        <Sparkles size={18} /> Pozrieť projekty
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium rounded-xl transition-all hover:-translate-y-0.5 text-sm md:text-base"
                    >
                        <Mail size={18} /> Napíš mi
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-slate-100 border border-slate-800 font-medium rounded-xl transition-all hover:-translate-y-0.5 text-sm"
                        aria-label="GitHub"
                    >
                        <GithubIcon size={18} /> GitHub
                    </a>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 font-medium rounded-xl transition-all hover:-translate-y-0.5 text-sm"
                        aria-label="LinkedIn"
                    >
                        <LinkedinIcon size={18} /> LinkedIn
                    </a>
                </div>

                {/* Location & Quick Details */}
                <div className="inline-flex flex-wrap justify-center items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/50 rounded-lg border border-slate-800/60">
                        <MapPin size={13} className="text-sky-400" /> Košice, Slovensko
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/50 rounded-lg border border-slate-800/60 text-slate-300">
                        <GraduationCap size={13} className="text-sky-400" /> TUKE Informatika
                    </span>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.a
                href="#projects"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="absolute bottom-6 text-slate-500 hover:text-sky-400 transition-colors p-2"
                aria-label="Prejsť na projekty"
            >
                <ArrowDown size={24} />
            </motion.a>
        </section>
    );
}
