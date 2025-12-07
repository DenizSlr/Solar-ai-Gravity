import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <div className="top-bar">
                <div className="container top-bar-content">
                    <span>24/7 bereikbaar: <a href="tel:+31641226253">+31 6 41226253</a></span>
                </div>
            </div>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-content">
                    <Link to="/" className="logo">
                        <img src="/assets/logo.png" alt="Solar AI" />
                    </Link>

                    <div className="desktop-menu">
                        <Link to="/">Home</Link>
                        <Link to="/diensten">Diensten</Link>
                        <Link to="/cases">Cases</Link>
                        <Link to="/over-ons">Over ons</Link>
                        <Link to="/werken-bij">Werken bij ons</Link>
                        <Link to="/contact" className="cta-button">Contact</Link>
                    </div>

                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/diensten">Diensten</Link>
                    <Link to="/cases">Cases</Link>
                    <Link to="/over-ons">Over ons</Link>
                    <Link to="/werken-bij">Werken bij ons</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
