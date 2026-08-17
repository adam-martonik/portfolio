import React from 'react';
import { experience } from '../data/data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-900 relative border-t border-slate-800/50">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-50 mb-16">
                    Pracovné skúsenosti
                </h2>
                
                <div className="flex flex-col gap-8">
                    {experience.map((job) => (
                        <div key={job.id} className="relative pl-8 md:pl-0">
                            
                            {/* Timeline Line pre Desktop */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
                            
                            <div className={`md:flex items-center justify-between w-full ${job.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                
                                {/* Timeline icon */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center -translate-x-1/2 md:translate-x-[-50%] mt-1 md:mt-0 z-10">
                                    <Briefcase size={14} className="text-sky-500" />
                                </div>

                                {/* Content Card */}
                                <div className="md:w-[45%] bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-sky-500/30 transition-colors">
                                    <div className="flex flex-col mb-4">
                                        <span className="text-sm font-medium text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full w-fit mb-3">
                                            {job.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-100">{job.title}</h3>
                                        <h4 className="text-slate-400 font-medium">{job.company}</h4>
                                    </div>
                                    
                                    <ul className="list-disc pl-5 space-y-2 text-slate-300">
                                        {job.tasks.map((task, index) => (
                                            <li key={index} className="leading-relaxed">{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}