import React from 'react';
import { skills } from '../data/data';

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-950 relative border-t border-slate-800/50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-50 mb-16">
                    Moje zručnosti
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                        <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-700/50 pb-3">Programovanie</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.programming?.map((skill, index) => (
                                <span key={index} className="px-3 py-1.5 bg-sky-500/10 text-sky-400 rounded-lg text-sm font-medium border border-sky-500/20">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                        <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-700/50 pb-3">Technológie</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.technologies?.map((tech, index) => (
                                <span key={index} className="px-3 py-1.5 bg-sky-500/10 text-sky-400 rounded-lg text-sm font-medium border border-sky-500/20">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                        <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-700/50 pb-3">Koncepty</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.concepts?.map((concept, index) => (
                                <span key={index} className="px-3 py-1.5 bg-sky-500/10 text-sky-400 rounded-lg text-sm font-medium border border-sky-500/20">{concept}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors">
                        <h3 className="text-lg font-bold text-slate-200 mb-6 border-b border-slate-700/50 pb-3">Ostatné</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.languages?.map((lang, index) => (
                                <span key={`lang-${index}`} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700">{lang}</span>
                            ))}
                            {skills.softSkills?.map((skill, index) => (
                                <span key={`soft-${index}`} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700">{skill}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}