import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <FadeIn>
                        <h1>Over Solar AI</h1>
                        <p>Wij bouwen de digitale toekomst voor ambitieuze bedrijven.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container about-content">
                    <FadeIn className="about-text">
                        <h2>Onze Missie</h2>
                        <p>
                            Bij Solar AI geloven we dat technologie de motor is voor groei. Onze missie is simpel:
                            bedrijven helpen hun volledige online potentieel te benutten door middel van high-end design,
                            robuuste techniek en slimme AI-oplossingen.
                        </p>
                        <p>
                            Wij zijn geen standaard webbureau. Wij zijn uw digitale partner die meedenkt, innoveert en resultaat levert.
                        </p>
                    </FadeIn>
                    <FadeIn delay={200} className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Focus op Kwaliteit</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title center">Onze Aanpak</h2>
                    </FadeIn>
                    <div className="values-grid">
                        <FadeIn delay={100} className="value-card">
                            <h3>Transparantie</h3>
                            <p>Geen verborgen kosten of vage beloftes. Wij communiceren helder en eerlijk.</p>
                        </FadeIn>
                        <FadeIn delay={200} className="value-card">
                            <h3>Snelheid</h3>
                            <p>In de digitale wereld telt elke seconde. Wij leveren snel zonder in te leveren op kwaliteit.</p>
                        </FadeIn>
                        <FadeIn delay={300} className="value-card">
                            <h3>Innovatie</h3>
                            <p>Wij lopen voorop met de nieuwste technieken en AI-integraties.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container center">
                    <FadeIn>
                        <h2>Klaar om samen te werken?</h2>
                        <Link to="/contact" className="btn btn-primary btn-lg">Neem contact op</Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default About;
