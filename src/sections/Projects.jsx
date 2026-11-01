import React, { useState } from 'react';
import { projects } from '../data/data';
import { ExternalLink, Star, Code2, Layers, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('Všetky');

    const categories = ['Všetky', '⭐ Highlighty', 'Full-Stack', 'Cybersecurity', 'Automatizácia'];

    const filteredProjects = projects.filter((project) => {
        if (selectedCategory === 'Všetky') return true;
        if (selectedCategory === '⭐ Highlighty') return project.featured;
        return project.category === selectedCategory;
    });

    return (
        <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
            {/* Background Accent Gradients */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-4">
                        <Code2 size={14} /> Portfólio prác
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
                        Moje Softvérové Projekty
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Praktické aplikácie, enterprise architektúra, bezpečnostné audity a nástroje vyvíjané s dôrazom na kvalitu kódu a moderné štandardy.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                                selectedCategory === cat
                                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/25'
                                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35 }}
                                className={`group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 backdrop-blur-md relative ${
                                    project.featured
                                        ? 'bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/80 border border-slate-700/80 hover:border-sky-500/60 shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1.5'
                                        : 'bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 hover:-translate-y-1'
                                }`}
                            >
                                <div>
                                    {/* Top Row: Category Pill & Featured Badge */}
                                    <div className="flex justify-between items-center gap-2 mb-4">
                                        <span className="text-[11px] font-semibold text-sky-400 bg-sky-950/60 border border-sky-800/50 px-2.5 py-0.5 rounded-full">
                                            {project.category}
                                        </span>
                                        {project.featured && (
                                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300 bg-amber-950/40 border border-amber-600/30 px-2.5 py-0.5 rounded-full">
                                                <Star size={11} className="fill-amber-300" /> Highlight
                                            </span>
                                        )}
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-sky-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Subtitle if available */}
                                    {project.subtitle && (
                                        <p className="text-xs text-slate-400 font-medium mb-3.5">
                                            {project.subtitle}
                                        </p>
                                    )}

                                    {/* Description */}
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/60">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 bg-slate-950/80 text-slate-300 rounded-md text-[11px] font-mono border border-slate-800/80 group-hover:border-slate-700 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Link */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                            project.featured
                                                ? 'bg-sky-500/15 hover:bg-sky-500 text-sky-300 hover:text-slate-950 border border-sky-500/30 hover:border-sky-400 shadow-sm'
                                                : 'bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-slate-100 border border-slate-700/60'
                                        }`}
                                    >
                                        <span>{project.buttonText || 'Pozrieť projekt'}</span>
                                        <ExternalLink size={15} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
