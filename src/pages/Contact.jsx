import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import './Contact.css';

const Contact = () => {
    const [showPopup, setShowPopup] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setShowPopup(true);
                form.reset();
            } else {
                alert("Er ging iets mis. Probeer het later opnieuw.");
            }
        } catch (error) {
            alert("Er ging iets mis. Probeer het later opnieuw.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Bedankt!</h3>
                        <p>Jouw bericht is verstuurd. We reageren zo snel mogelijk.</p>
                        <button onClick={() => setShowPopup(false)} className="btn btn-primary btn-sm">Sluiten</button>
                    </div>
                </div>
            )}

            <section className="page-header">
                <div className="container">
                    <FadeIn>
                        <h1>Contact</h1>
                        <p>Start uw project vandaag nog. Wij zijn 24/7 bereikbaar.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    {/* Contact Info */}
                    <FadeIn className="contact-info">
                        <h2>Laten we praten</h2>
                        <p className="contact-desc">
                            Heeft u een vraag of wilt u direct een offerte aanvragen?
                            Vul het formulier in of neem direct contact op via telefoon of e-mail.
                        </p>

                        <div className="info-item">
                            <div className="icon-box"><Phone /></div>
                            <div>
                                <h3>Telefoon</h3>
                                <a href="tel:+31641226253">+31 6 41226253</a>
                                <span className="status-badge">24/7 Bereikbaar</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><Mail /></div>
                            <div>
                                <h3>E-mail</h3>
                                <a href="mailto:info@solarai.nl">info@solarai.nl</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box"><MapPin /></div>
                            <div>
                                <h3>Locatie</h3>
                                <p>Nederland (Remote & On-site)</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn delay={200} className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <input type="hidden" name="access_key" value="7d06753f-1fa4-4b86-a81b-a717f8aec272" />
                            <input type="hidden" name="email" value="info@solarai.nl" />
                            {/* Honeypot to prevent spam */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div className="form-group">
                                <label htmlFor="name">Naam</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Uw naam"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="from">E-mail</label>
                                <input
                                    type="email"
                                    id="from"
                                    name="from"
                                    required
                                    placeholder="uw@email.nl"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefoonnummer</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="06 12345678"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="budget">Budget Indicatie</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                    >
                                        <option value="">Maak een keuze</option>
                                        <option value="250-500">€250 - €500</option>
                                        <option value="500-1000">€500 - €1.000</option>
                                        <option value="1000-5000">€1.000 - €5.000</option>
                                        <option value="5000-10000">€5.000 - €10.000</option>
                                        <option value="10000+">€10.000+</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Dienst</label>
                                    <select
                                        id="service"
                                        name="service"
                                    >
                                        <option value="">Maak een keuze</option>
                                        <option value="website">Website Ontwikkeling</option>
                                        <option value="webshop">Webshop Ontwikkeling</option>
                                        <option value="ads">Advertentiebeheer</option>
                                        <option value="ai">AI Integraties</option>
                                        <option value="other">Anders</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Uw Bericht</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Vertel ons over uw project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary full-width" disabled={isSubmitting}>
                                {isSubmitting ? 'Verzenden...' : <>Verstuur Bericht <Send size={18} /></>}
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Contact;
