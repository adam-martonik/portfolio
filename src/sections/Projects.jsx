import React from 'react';
import { projects } from '../data/data';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-50 mb-16">
                    Projekty
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col group">
                            
                            <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-sky-400 transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm md:text-base">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-slate-950/50 text-sky-400 rounded-full text-xs font-medium border border-slate-700/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-700/30 hover:bg-sky-500 hover:text-slate-950 text-slate-300 rounded-xl transition-all font-semibold">
                                {project.buttonText ? project.buttonText : "Pozrieť projekt"} 
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}