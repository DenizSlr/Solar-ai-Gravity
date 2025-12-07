import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <Link to="/" className="logo">
                        <img src="/assets/logo.png" alt="Solar AI" />
                        <span>Solar AI</span>
                    </Link>
                    <p className="footer-tagline">
                        Krachtige websites, webshops en slimme AI-oplossingen.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Diensten</h3>
                    <Link to="/diensten">Website ontwikkeling</Link>
                    <Link to="/diensten">Webshop ontwikkeling</Link>
                    <Link to="/diensten">AI-integraties</Link>
                    <Link to="/diensten">Advertentiebeheer</Link>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>
                    <a href="tel:+31641226253">+31 6 41226253</a>
                    <a href="mailto:info@solarai.nl">info@solarai.nl</a>
                    <p className="text-sm text-muted" style={{ marginTop: '0.5rem', fontWeight: 500 }}>KvK: 98280031</p>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Solar AI. Alle rechten voorbehouden.</p>
                <div className="footer-links">
                    <Link to="/privacy">Privacybeleid</Link>
                    <Link to="/voorwaarden">Algemene Voorwaarden</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
