import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <FadeIn>
                        <h1>Onze Diensten</h1>
                        <p>Van concept tot realisatie. Wij bouwen digitale ervaringen die werken.</p>
                    </FadeIn>
                </div>
            </section>

            {/* Website Development */}
            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title">Website Ontwikkeling</h2>
                        <p className="section-desc">
                            Professionele websites die uw merk versterken.
                            <br />
                            <span className="text-sm text-muted">
                                Inclusief 24/7 online support & contact. Volledig geoptimaliseerd voor telefoon, tablet en laptop.
                            </span>
                        </p>
                    </FadeIn>
                    <div className="pricing-grid">
                        <FadeIn delay={100} className="pricing-card">
                            <h3>Starter</h3>
                            <div className="price">Vanaf €499</div>
                            <ul className="features">
                                <li><Check size={16} /> 5 Pagina's</li>
                                <li><Check size={16} /> Professioneel Design</li>
                                <li><Check size={16} /> Volledig Responsive</li>
                                <li><Check size={16} /> Basis SEO</li>
                                <li><Check size={16} /> Snelle Oplevering</li>
                                <li><Check size={16} /> 24/7 Support</li>
                                <li><Check size={16} /> Volledig Maatwerk</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline full-width">Offerte aanvragen</Link>
                        </FadeIn>
                        <FadeIn delay={200} className="pricing-card popular">
                            <div className="badge">Meest Gekozen</div>
                            <h3>Business</h3>
                            <div className="price">Vanaf €999</div>
                            <ul className="features">
                                <li><Check size={16} /> 10 Pagina's</li>
                                <li><Check size={16} /> Professionele Secties</li>
                                <li><Check size={16} /> Volledig Responsive</li>
                                <li><Check size={16} /> Betere Performance</li>
                                <li><Check size={16} /> Uitgebreide SEO</li>
                                <li><Check size={16} /> CMS Integratie</li>
                                <li><Check size={16} /> 24/7 Support</li>
                                <li><Check size={16} /> Volledig Maatwerk</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary full-width">Offerte aanvragen</Link>
                        </FadeIn>
                        <FadeIn delay={300} className="pricing-card">
                            <h3>Business Premium</h3>
                            <div className="price">Vanaf €1499</div>
                            <ul className="features">
                                <li><Check size={16} /> 10+ Pagina's</li>
                                <li><Check size={16} /> High-End Maatwerk</li>
                                <li><Check size={16} /> Volledig Responsive</li>
                                <li><Check size={16} /> Exclusief Design</li>
                                <li><Check size={16} /> Premium Features op Maat</li>
                                <li><Check size={16} /> Volledig op de klant gericht</li>
                                <li><Check size={16} /> Priority Support</li>
                                <li><Check size={16} /> 24/7 Support</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline full-width">Offerte aanvragen</Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Webshop Development */}
            <section className="section bg-secondary">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title">Webshop Ontwikkeling</h2>
                        <p className="section-desc">
                            Verkoop uw producten online met een krachtige webshop.
                            <br />
                            <span className="text-sm text-muted">
                                24/7 online support, geschikt voor alle apparaten, diverse betaalmethodes & professionele beveiliging.
                            </span>
                        </p>
                    </FadeIn>
                    <div className="pricing-grid">
                        <FadeIn delay={100} className="pricing-card">
                            <h3>Basis Shop</h3>
                            <div className="price">Vanaf €599</div>
                            <ul className="features">
                                <li><Check size={16} /> Tot 20 Producten</li>
                                <li><Check size={16} /> Volledig Responsive</li>
                                <li><Check size={16} /> Standaard Betaalmethodes</li>
                                <li><Check size={16} /> Strak & Professioneel</li>
                                <li><Check size={16} /> Basis Voorraadbeheer</li>
                                <li><Check size={16} /> Veilig & Betrouwbaar</li>
                                <li><Check size={16} /> 24/7 Support</li>
                                <li><Check size={16} /> Volledig Maatwerk</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline full-width">Offerte aanvragen</Link>
                        </FadeIn>
                        <FadeIn delay={200} className="pricing-card popular">
                            <div className="badge">Meest Gekozen</div>
                            <h3>Professional Shop</h3>
                            <div className="price">Vanaf €999</div>
                            <ul className="features">
                                <li><Check size={16} /> Tot 100 Producten</li>
                                <li><Check size={16} /> Volledig Responsive</li>
                                <li><Check size={16} /> Uitgebreide Betaalmethodes</li>
                                <li><Check size={16} /> Custom Checkout</li>
                                <li><Check size={16} /> Kortingscodes</li>
                                <li><Check size={16} /> Automatische Facturen</li>
                                <li><Check size={16} /> 24/7 Support</li>
                                <li><Check size={16} /> Volledig Maatwerk</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary full-width">Offerte aanvragen</Link>
                        </FadeIn>
                        <FadeIn delay={300} className="pricing-card">
                            <h3>Premium Shop</h3>
                            <div className="price">Vanaf €1999</div>
                            <ul className="features">
                                <li><Check size={16} /> Volledig op Maat</li>
                                <li><Check size={16} /> Onbeperkt Producten</li>
                                <li><Check size={16} /> Volledig Responsive</li>
                                <li><Check size={16} /> Exclusieve Functies</li>
                                <li><Check size={16} /> Maximale Uitbreidbaarheid</li>
                                <li><Check size={16} /> B2B Functionaliteiten</li>
                                <li><Check size={16} /> 24/7 Support</li>
                            </ul>
                            <Link to="/contact" className="btn btn-outline full-width">Offerte aanvragen</Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="section">
                <div className="container">
                    <div className="other-services-grid">
                        <FadeIn className="other-service-card">
                            <h2>AI Integraties</h2>
                            <p>
                                Automatiseer uw bedrijfsprocessen met slimme AI-oplossingen. Van chatbots tot data-analyse en content generatie.
                                Wij koppelen ChatGPT, Midjourney en andere API's direct aan uw systemen.
                            </p>
                            <div className="price-tag">Prijs op aanvraag</div>
                            <Link to="/contact" className="link-arrow">Bespreek mogelijkheden <ArrowRight size={16} /></Link>
                        </FadeIn>
                        <FadeIn delay={200} className="other-service-card">
                            <h2>Advertentiebeheer</h2>
                            <p>
                                Bereik uw doelgroep effectief met gerichte campagnes op Meta (Facebook/Instagram), Google en TikTok.
                                Wij verzorgen de strategie, creatie, retargeting en continue optimalisatie voor maximaal rendement.
                            </p>
                            <div className="price-tag">Prijs op aanvraag</div>
                            <Link to="/contact" className="link-arrow">Bespreek mogelijkheden <ArrowRight size={16} /></Link>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
