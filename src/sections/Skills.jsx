import React from 'react';
import { skills } from '../data/data';

function Skills() {
    return (
        <section style={styles.section} id="skills">
            <div className="container">
                <h2 style={styles.heading}>Moje zručnosti</h2>
                <div style={styles.grid}>

                    {/* Zručnosti - Programovanie */}
                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}> Programovanie</h3>
                        <div style={styles.tags}>
                            {skills.programming.map((skill, index) => (
                                <span key={index} style={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Zručnosti - Technológie */}
                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}> Technológie</h3>
                        <div style={styles.tags}>
                            {skills.technologies.map((tech, index) => (
                                <span key={index} style={styles.tag}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* Zručnosti - Koncepty */}
                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}> Koncepty</h3>
                        <div style={styles.tags}>
                            {skills.concepts.map((concept, index) => (
                                <span key={index} style={styles.tag}>{concept}</span>
                            ))}
                        </div>
                    </div>

                    {/* Zručnosti - Soft Skills a Jazyky */}
                    <div style={styles.card}>
                        <h3 style={styles.cardTitle}> Ostatné</h3>
                        <div style={styles.tags}>
                            {skills.languages.map((lang, index) => (
                                <span key={`lang-${index}`} style={{...styles.tag, backgroundColor: '#e2e8f0', color: '#333'}}>{lang}</span>
                            ))}
                            {skills.softSkills.map((skill, index) => (
                                <span key={`soft-${index}`} style={{...styles.tag, backgroundColor: '#e2e8f0', color: '#333'}}>{skill}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

const styles = {
    section: { padding: '80px 0', backgroundColor: '#0f172a' },
    heading: { fontSize: '2rem', textAlign: 'center', marginBottom: '40px', color: '#f8fafc' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
    card: { backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' },
    cardTitle: { fontSize: '1.2rem', marginBottom: '15px', color: '#f8fafc', borderBottom: '2px solid #334155', paddingBottom: '10px' },
    tags: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
    tag: { padding: '5px 12px', backgroundColor: '#0ea5e9', color: '#ffffff', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' }
};

export default Skills;