import React from 'react';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                Adam<span style={{ color: '#38bdf8' }}>Martonik</span>
            </div>
            <div style={styles.links}>
                <a href="#about" style={styles.link}>O mne</a>
                <a href="#skills" style={styles.link}>Zručnosti</a>
                <a href="#projects" style={styles.link}>Projekty</a>
                <a href="#experience" style={styles.link}>Skúsenosti</a>
                <a href="#education" style={styles.link}>Vzdelanie</a>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(11, 17, 32, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
        zIndex: 1000
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#f8fafc'
    },
    links: {
        display: 'flex',
        gap: '20px'
    },
    link: {
        color: '#e2e8f0',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'color 0.2s',
    }
};

export default Navbar;