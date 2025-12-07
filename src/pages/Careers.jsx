import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import './Careers.css';

const Careers = () => {
    const jobs = [
        {
            title: 'Digital Designer',
            type: 'Full-time',
            location: 'Remote / Hybrid',
            description: 'Als Digital Designer ben je verantwoordelijk voor de visuele identiteit van onze projecten. Je ontwerpt high-end interfaces voor websites en webshops.',
            tasks: ['Ontwerpen van user interfaces in Figma', 'Bewaken van brand consistency', 'Prototyping en interactie design'],
            requirements: ['Ervaring met Figma/Adobe XD', 'Sterk portfolio', 'Oog voor typografie en witruimte']
        },
        {
            title: 'E-commerce Specialist',
            type: 'Full-time',
            location: 'Remote / Hybrid',
            description: 'Jij bouwt en optimaliseert de ultieme e-commerce ervaringen. Je combineert design met conversie-psychologie.',
            tasks: ['Ontwikkelen van Shopify/WooCommerce shops', 'CRO (Conversion Rate Optimization)', 'Analyseren van gebruikersgedrag'],
            requirements: ['Ervaring met e-commerce platforms', 'Kennis van UX/UI', 'Commercieel inzicht']
        },
        {
            title: 'Performance Marketeer',
            type: 'Part-time',
            location: 'Remote',
            description: 'Jij zorgt voor zichtbaarheid en resultaat. Je beheert en optimaliseert campagnes over verschillende kanalen.',
            tasks: ['Beheren van Meta & Google Ads', 'Data-analyse en rapportage', 'Strategie ontwikkeling'],
            requirements: ['Ervaring met Ads Managers', 'Analytisch sterk', 'Resultaatgericht']
        }, {
            title: 'AI-integraties Specialist',
            type: 'Freelance',
            location: 'Remote',
            description: 'Je implementeert slimme AI-oplossingen die bedrijfsprocessen automatiseren.',
            tasks: ['Koppelen van API\'s (OpenAI, Midjourney)', 'Bouwen van chatbots en automations', 'Adviseren over AI mogelijkheden'],
            requirements: ['Kennis van Python/JS', 'Ervaring met LLM\'s', 'Probleemoplossend vermogen']
        },
        {
            title: 'Klantenacquisiteur',
            type: 'Commission',
            location: 'Remote',
            description: 'Jij bent het gezicht van Solar AI. Je benadert potentiële klanten en sluit deals.',
            tasks: ['Benaderen van prospects', 'Voeren van verkoopgesprekken', 'Opstellen van offertes'],
            requirements: ['Sales ervaring', 'Communicatief sterk', 'Gedreven en zelfstandig']
        },
    ];

    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleJob = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="careers-page">
            <section className="page-header">
                <div className="container">
                    <FadeIn>
                        <h1>Werken bij Solar AI</h1>
                        <p>Bouw mee aan de volgende generatie digitale oplossingen.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <FadeIn>
                        <h2 className="section-title">Openstaande Vacatures</h2>
                    </FadeIn>
                    <div className="jobs-list">
                        {jobs.map((job, index) => (
                            <FadeIn key={index} delay={index * 100} className={`job-card ${openIndex === index ? 'open' : ''}`}>
                                <div className="job-header" onClick={() => toggleJob(index)}>
                                    <div className="job-info">
                                        <div className="job-icon"><Briefcase size={20} /></div>
                                        <div>
                                            <h3>{job.title}</h3>
                                            <p className="job-meta">{job.type} • {job.location}</p>
                                        </div>
                                    </div>
                                    <div className={`accordion-icon ${openIndex === index ? 'rotate' : ''}`}>
                                        <ArrowRight size={20} />
                                    </div>
                                </div>

                                <div className="job-details">
                                    <div className="job-details-content">
                                        <p className="job-desc">{job.description}</p>
                                        <div className="job-lists">
                                            <div>
                                                <h4>Verantwoordelijkheden</h4>
                                                <ul>
                                                    {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Vereisten</h4>
                                                <ul>
                                                    {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="mailto:werken@solarai.nl" className="btn btn-primary btn-sm apply-btn">
                                            Solliciteer Direct <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
