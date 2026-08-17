import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-50 font-sans selection:bg-sky-500/30">
            <Navbar />
            <main>
                <Hero />
                <Projects />
            </main>

            <footer className="text-center py-8 bg-slate-950 text-slate-500 border-t border-slate-800">
                <p>© 2026 Adam Martonik. Vytvorené v Reacte & Tailwind CSS.</p>
            </footer>
        </div>
    );
}

export default App;