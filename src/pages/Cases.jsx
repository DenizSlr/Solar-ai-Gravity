import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import './Cases.css';

const Cases = () => {
    return (
        <div className="cases-page">
            <section className="page-header">
                <div className="container">
                    <FadeIn>
                        <h1>Recente Cases</h1>
                        <p>Ontdek hoe wij bedrijven helpen groeien met design en techniek.</p>
                    </FadeIn>
                </div>
            </section>

            {/* Case 1: Coach Ede */}
            <section className="section case-study">
                <div className="container">
                    <FadeIn>
                        <div className="case-header">
                            <span className="case-category">Website & Branding</span>
                            <h2>Coach Ede</h2>
                            <p className="case-location">Ede, Nederland</p>
                        </div>
                    </FadeIn>

                    <div className="case-content">
                        <FadeIn className="case-main-image">
                            <img src="/assets/coach_ede_real_1.png" alt="Coach Ede Website Hero" />
                        </FadeIn>

                        <div className="case-details-grid">
                            <FadeIn delay={100} className="case-text">
                                <h3>De Uitdaging</h3>
                                <p>
                                    Voor Coach Ede was het essentieel om een online platform te creëren dat de energie en professionaliteit van zijn personal training weerspiegelt.
                                    De focus lag op het aantrekken van de juiste doelgroep en het vereenvoudigen van het aanmeldproces.
                                </p>

                                <h3>De Oplossing</h3>
                                <p>
                                    We hebben een dynamische, high-performance website ontwikkeld met een sterke visuele identiteit.
                                    De site combineert krachtige beelden met een heldere navigatiestructuur, waardoor bezoekers direct worden overtuigd van de waarde.
                                </p>

                                <h3>Resultaten</h3>
                                <ul className="results-list">
                                    <li><strong>Conversie</strong> Significante stijging in kwalitatieve leads.</li>
                                    <li><strong>Snelheid</strong> Geoptimaliseerde laadtijden voor mobiel gebruik.</li>
                                    <li><strong>Design</strong> Een moderne, sportieve uitstraling die vertrouwen wekt.</li>
                                </ul>
                            </FadeIn>

                            <FadeIn delay={200} className="case-gallery">
                                <img src="/assets/coach_ede_real_2.png" alt="Coach Ede Detail" className="gallery-img" />
                                <img src="/assets/coach_ede_real_3.png" alt="Coach Ede Mobile" className="gallery-img" />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case 2: Serenity Spa */}
            <section className="section case-study bg-secondary">
                <div className="container">
                    <FadeIn>
                        <div className="case-header">
                            <span className="case-category">Webshop & Experience</span>
                            <h2>Serenity Spa</h2>
                            <p className="case-location">Londen, Verenigd Koninkrijk</p>
                        </div>
                    </FadeIn>

                    <div className="case-content">
                        <FadeIn className="case-main-image">
                            <img src="/assets/serenity_real_hero.png" alt="Serenity Spa Luxury Design" />
                        </FadeIn>

                        <div className="case-details-grid reverse">
                            <FadeIn delay={100} className="case-text">
                                <h3>Het Doel</h3>
                                <p>
                                    Serenity Spa had behoefte aan een digitale aanwezigheid die hun fysieke luxe-ervaring naadloos doortrekt naar online.
                                    Het doel was een rustgevend, high-end platform te creëren dat zowel het boeken van behandelingen als de aankoop van premium huidverzorgingsproducten faciliteert.
                                </p>

                                <h3>Onze Aanpak</h3>
                                <p>
                                    We hebben een minimalistische, zintuiglijke website ontworpen met zachte kleurenpaletten en elegante typografie.
                                    De geïntegreerde e-commerce functionaliteit is ontworpen voor een moeiteloze winkelervaring, die de ontspanning van de spa zelf weerspiegelt.
                                </p>

                                <h3>Belangrijkste Kenmerken</h3>
                                <ul className="results-list">
                                    <li><strong>Internationaal Bereik</strong> Volledig Engelstalige contentstrategie voor internationale klanten.</li>
                                    <li><strong>E-commerce</strong> Geïntegreerde premium productshop.</li>
                                    <li><strong>Ervaring</strong> Meeslepend visueel ontwerp met soepele overgangen.</li>
                                </ul>
                            </FadeIn>

                            <FadeIn delay={200} className="case-gallery">
                                <img src="/assets/serenity_real_1.png" alt="Serenity Spa Detail" className="gallery-img" />
                                <img src="/assets/serenity_real_2.png" alt="Serenity Spa Interior" className="gallery-img" />
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Visuals Gallery */}
            <section className="section ai-gallery">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title center">AI-Generated Visuals</h2>
                        <p className="section-desc center">Naast webdesign creëren wij unieke, fotorealistische beelden met AI voor uw merk.</p>
                    </FadeIn>
                    <div className="gallery-grid">
                        <FadeIn delay={100} className="gallery-item">
                            <img src="/assets/serenity_hero.png" alt="AI Spa Concept" />
                        </FadeIn>
                        <FadeIn delay={200} className="gallery-item">
                            <img src="/assets/serenity_products.png" alt="AI Product Concept" />
                        </FadeIn>
                        <FadeIn delay={300} className="gallery-item">
                            <img src="/assets/serenity_treatment.png" alt="AI Interior Concept" />
                        </FadeIn>
                    </div>
                </div>
            </section>
            <section className="section cta-section">
                <div className="container center">
                    <FadeIn>
                        <h2>Ook zo'n resultaat?</h2>
                        <Link to="/contact" className="btn btn-primary btn-lg">Start uw project</Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Cases;
