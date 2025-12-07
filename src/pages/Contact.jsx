import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact op.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            budget: '',
            service: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
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
                            <div className="form-group">
                                <label htmlFor="name">Naam</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Uw naam"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="06 12345678"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="budget">Budget Indicatie</label>
                                    <select
                                        id="budget"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
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
                                        value={formData.service}
                                        onChange={handleChange}
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
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Vertel ons over uw project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary full-width">
                                Verstuur Bericht <Send size={18} />
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Contact;
