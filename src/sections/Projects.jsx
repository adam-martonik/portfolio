import React from 'react';
import { projects } from '../data/data';

function Projects() {
    return (
        <section style={styles.section} id="projects">
            <div className="container">
                <h2 style={styles.heading}>Projekty</h2>
                <div style={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.id} style={styles.card}>
                            <h3 style={styles.projectTitle}>{project.title}</h3>
                            <p style={styles.description}>{project.description}</p>

                            <div style={styles.techStack}>
                                {project.techStack.map((tech, index) => (
                                    <span key={index} style={styles.techTag}>{tech}</span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                                Pozrieť projekt 🔗
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: { padding: '80px 0', backgroundColor: '#0B1120' },
    heading: { fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#f8fafc' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' },
    card: { backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '25px', borderRadius: '8px', display: 'flex', flexDirection: 'column' },
    projectTitle: { fontSize: '1.4rem', marginBottom: '10px', color: '#f8fafc' },
    description: { color: '#94a3b8', marginBottom: '20px', flexGrow: 1 },
    techStack: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' },
    techTag: { padding: '4px 10px', backgroundColor: '#1e293b', color: '#38bdf8', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '500' },
    link: { display: 'inline-block', padding: '8px 16px', backgroundColor: '#38bdf8', color: '#0B1120', textDecoration: 'none', borderRadius: '5px', textAlign: 'center', fontWeight: 'bold' }
};

export default Projects;