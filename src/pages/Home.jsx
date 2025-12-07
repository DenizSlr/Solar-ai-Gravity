import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Layout, Brain, BarChart, Smartphone, Target, Search, Shield } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url('/assets/hero_bg_premium.png')` }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content center">
                    <FadeIn>
                        <h1 className="hero-title">Krachtige Digitale Groei.</h1>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <p className="hero-subtitle">
                            Wij bouwen premium websites en intelligente systemen die uw bedrijf naar een hoger niveau tillen.
                        </p>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <div className="hero-buttons center">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Start Project <ArrowRight size={18} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Section 1: Wat levert een website op? */}
            <section className="section bg-secondary">
                <div className="container">
                    <div className="split-layout">
                        <FadeIn className="split-image">
                            <img src="/assets/professional_web_growth_analysis.png" alt="Strategie Meeting" />
                        </FadeIn>
                        <FadeIn delay={200} className="split-content">
                            <h2 className="section-title">Wat levert een website laten maken op?</h2>
                            <p className="section-desc">
                                Een goede website laten maken is een ontzettend belangrijk onderdeel van je bedrijfsstrategie.
                                Het is vaak de eerste plek waar klanten in contact komen met jouw merk. In een tijd waarin de concurrentie maar een aantal klikken van je verwijderd is, kan een slordige of verouderde website je klanten kosten.
                            </p>
                            <p className="section-desc">
                                Door een professionele en snelle website te laten bouwen, geef je niet alleen een goede eerste indruk, maar leg je ook de basis voor blijvend succes.
                                Van meer omzet tot betere vindbaarheid: jouw op maat website wordt het kloppend hart van je bedrijf.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Section 2: Nog meer redenen */}
            <section className="section">
                <div className="container">
                    <div className="split-layout reverse">
                        <FadeIn className="split-image">
                            <img src="/assets/digital_excellence_workspace.png" alt="Digitale Groei" />
                        </FadeIn>
                        <FadeIn delay={200} className="split-content">
                            <h2 className="section-title">Nog meer redenen om een website te laten maken</h2>
                            <ul className="features-list-large">
                                <li><Check size={20} className="text-primary" /> Geloofwaardigheid en vertrouwen</li>
                                <li><Check size={20} className="text-primary" /> Altijd en overal bereik</li>
                                <li><Check size={20} className="text-primary" /> Meer actie van bezoekers</li>
                                <li><Check size={20} className="text-primary" /> Sterke merkidentiteit</li>
                                <li><Check size={20} className="text-primary" /> Eén plek voor al je marketing</li>
                                <li><Check size={20} className="text-primary" /> Schaalbaarheid voor de toekomst</li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Section 3: Extra USPs */}
            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title center">Onze Standaard</h2>
                    </FadeIn>
                    <div className="usp-grid">
                        <FadeIn delay={100} className="usp-card">
                            <Smartphone className="usp-icon" />
                            <h3>Mobielvriendelijk</h3>
                            <p>Grondige tests die zorgen voor een fijne ervaring op elk apparaat.</p>
                        </FadeIn>
                        <FadeIn delay={200} className="usp-card">
                            <Target className="usp-icon" />
                            <h3>Merkpositionering</h3>
                            <p>We leggen de focus op het creëren van een sterk merk dat aanslaat bij jouw doelgroep.</p>
                        </FadeIn>
                        <FadeIn delay={300} className="usp-card">
                            <Search className="usp-icon" />
                            <h3>UX onderzoek</h3>
                            <p>We doen uitgebreid onderzoek naar jouw doelgroep om de webshop strategisch op te bouwen.</p>
                        </FadeIn>
                        <FadeIn delay={400} className="usp-card">
                            <Shield className="usp-icon" />
                            <h3>100% maatwerk</h3>
                            <p>Elk onderdeel uniek en op maat gemaakt om jouw concurrent voorbij te schieten.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Services Overview (Kept but simplified if needed, or just as is) */}
            <section className="section services-preview">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title center">Onze Expertise</h2>
                    </FadeIn>
                    <div className="services-grid">
                        <FadeIn delay={100} className="service-card">
                            <Layout className="service-icon" />
                            <h3>Website Ontwikkeling</h3>
                            <p>High-end designs die converteren. Vanaf €499.</p>
                            <Link to="/diensten" className="link-arrow">Meer info <ArrowRight size={16} /></Link>
                        </FadeIn>
                        <FadeIn delay={200} className="service-card">
                            <Zap className="service-icon" />
                            <h3>Webshop Ontwikkeling</h3>
                            <p>Schaalbare e-commerce oplossingen. Vanaf €599.</p>
                            <Link to="/diensten" className="link-arrow">Meer info <ArrowRight size={16} /></Link>
                        </FadeIn>
                        <FadeIn delay={300} className="service-card">
                            <Brain className="service-icon" />
                            <h3>AI Integraties</h3>
                            <p>Slimme automatisering voor uw bedrijf.</p>
                            <Link to="/diensten" className="link-arrow">Meer info <ArrowRight size={16} /></Link>
                        </FadeIn>
                        <FadeIn delay={400} className="service-card">
                            <BarChart className="service-icon" />
                            <h3>Advertentiebeheer</h3>
                            <p>Meta, Google & TikTok Ads die werken.</p>
                            <Link to="/diensten" className="link-arrow">Meer info <ArrowRight size={16} /></Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Cases Preview */}
            <section className="section cases-preview">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title center">Recente Cases</h2>
                    </FadeIn>
                    <div className="cases-grid">
                        <FadeIn delay={100} className="case-card clickable">
                            <Link to="/cases" className="case-link-wrapper">
                                <div className="case-image">
                                    <img src="/assets/coach_ede_real_1.png" alt="Coach Ede" />
                                </div>
                                <div className="case-content">
                                    <h3>Coach Ede</h3>
                                    <p>Website & Branding</p>
                                    <Link to="/cases#coach-ede" className="btn btn-outline btn-sm">Bekijk Case</Link>
                                </div>
                            </Link>
                        </FadeIn>
                        <FadeIn delay={200} className="case-card clickable">
                            <Link to="/cases" className="case-link-wrapper">
                                <div className="case-image">
                                    <img src="/assets/serenity_real_hero.png" alt="Serenity Spa" />
                                </div>
                                <div className="case-content">
                                    <h3>Serenity Spa</h3>
                                    <p>Webshop & Experience</p>
                                    <Link to="/cases#serenity-spa" className="btn btn-outline btn-sm">Bekijk Case</Link>
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container center">
                    <FadeIn>
                        <h2>Klaar om te groeien?</h2>
                        <p>Neem vandaag nog contact op voor een vrijblijvend gesprek.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">Neem contact op</Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Home;
