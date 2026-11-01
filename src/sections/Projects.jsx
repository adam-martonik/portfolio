import React, { useState } from 'react';
import { projects } from '../data/data';
import { ExternalLink, Star, Code2, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
    // Only 2 modes as requested: Highlighted (2 projects) vs All (6 projects)
    const [showOnlyHighlighted, setShowOnlyHighlighted] = useState(true);

    const displayedProjects = showOnlyHighlighted
        ? projects.filter((p) => p.highlighted)
        : projects;

    return (
        <section id="projects" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 mb-4">
                        <Code2 size={14} /> Softvérové projekty
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-100 tracking-tight mb-4">
                        Moja Práca & Kód
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Reálne aplikácie s enterprise architektúrou, nízkoúrovňovými algoritmami a sieťovými auditmi.
                    </p>
                </div>

                {/* Simple 2-Option View Selector */}
                <div className="flex justify-center mb-14">
                    <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md inline-flex items-center gap-1 shadow-lg">
                        <button
                            onClick={() => setShowOnlyHighlighted(true)} aria-pressed={showOnlyHighlighted}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                                showOnlyHighlighted
                                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            <Star size={15} className={showOnlyHighlighted ? 'fill-slate-950' : ''} />
                            <span>Výber (2 najlepšie)</span>
                        </button>
                        <button
                            onClick={() => setShowOnlyHighlighted(false)} aria-pressed={!showOnlyHighlighted}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                                !showOnlyHighlighted
                                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            <Layers size={15} />
                            <span>Všetky projekty ({projects.length})</span>
                        </button>
                    </div>
                </div>

                {/* Projects Grid */}
                <div
                    className={`grid gap-8 ${
                        showOnlyHighlighted
                            ? 'grid-cols-1 md:grid-cols-2'
                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.35 }}
                                className={`group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 backdrop-blur-md relative ${
                                    project.highlighted
                                        ? 'bg-gradient-to-b from-slate-900/95 via-slate-900/70 to-slate-950/90 border border-slate-700/80 hover:border-sky-500/60 shadow-xl hover:shadow-sky-500/15 hover:-translate-y-1.5'
                                        : 'bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 hover:-translate-y-1'
                                }`}
                            >
                                <div>
                                    {/* Top Row: Highlight badge */}
                                    <div className="flex justify-between items-center gap-2 mb-4">
                                        {project.highlighted ? (
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-950/50 border border-amber-600/40 px-3 py-1 rounded-full shadow-sm">
                                                <Star size={12} className="fill-amber-300" /> TOP VÝBER
                                            </span>
                                        ) : (
                                            <span className="text-xs text-slate-400 font-medium">Projekt</span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className={`font-black text-slate-100 mb-1 group-hover:text-sky-300 transition-colors ${
                                            showOnlyHighlighted ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                                        }`}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Subtitle */}
                                    {project.subtitle && (
                                        <p className="text-xs md:text-sm text-sky-400/90 font-medium mb-4">
                                            {project.subtitle}
                                        </p>
                                    )}

                                    {/* Description */}
                                    <p
                                        className={`text-slate-300 leading-relaxed mb-6 font-normal ${
                                            showOnlyHighlighted ? 'text-sm md:text-base' : 'text-sm'
                                        }`}
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2.5 py-1 bg-slate-950/80 text-slate-300 rounded-md text-xs font-mono border border-slate-800 group-hover:border-slate-700 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Button */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer" aria-label={`${project.title} - ${project.buttonText || "Pozriet projekt"}`}
                                        className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all ${
                                            project.highlighted
                                                ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-md shadow-sky-500/25 hover:shadow-sky-500/40'
                                                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80'
                                        }`}
                                    >
                                        <span>{project.buttonText || 'Pozrieť projekt'}</span>
                                        <ExternalLink size={16} />
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
