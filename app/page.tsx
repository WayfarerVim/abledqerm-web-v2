import React from 'react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import './App.css'; // Assuming a separate CSS file for general styles

const AbleDERM = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const sections = [
        { id: 'hero', title: 'Hero', content: 'Welcome to AbleDERM!' },
        { id: 'services', title: 'Services', content: 'We offer a range of services...' },
        { id: 'treatments', title: 'Treatments', content: 'Our treatments are comprehensive...' },
        { id: 'cqc', title: 'CQC', content: 'We are CQC approved...' },
        { id: 'pricing', title: 'Pricing', content: 'Affordable pricing options...' },
        { id: 'about', title: 'About', content: 'Learn more about us...' },
        { id: 'techstack', title: 'Tech Stack', content: 'We use modern technology...' },
        { id: 'testimonials', title: 'Testimonials', content: 'Hear from our happy clients...' },
        { id: 'contact', title: 'Contact', content: 'Get in touch with us...' },
        { id: 'footer', title: 'Footer', content: 'Footer information...' },
    ];

    return (
        <div>
            <header style={{ backgroundColor: '#6B3E3E', padding: '20px', color: '#F9F7F4' }}>
                <h1>AbleDERM</h1>
                <nav>
                    <button onClick={toggleMenu}>{menuOpen ? 'Close' : 'Menu'}</button>
                    {menuOpen && (
                        <ul style={{ listStyleType: 'none' }}>
                            {sections.map(section => (
                                <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                            ))}
                        </ul>
                    )}
                </nav>
            </header>
            {sections.map(section => (
                <Fade key={section.id}>
                    <section id={section.id} style={{ backgroundColor: '#F9F7F4', color: '#6B3E3E', padding: '20px' }}>
                        <h2>{section.title}</h2>
                        <p>{section.content}</p>
                    </section>
                </Fade>
            ))}
            <footer style={{ backgroundColor: '#6B3E3E', color: '#F9F7F4', padding: '20px' }}>
                <p>© 2026 AbleDERM. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AbleDERM;