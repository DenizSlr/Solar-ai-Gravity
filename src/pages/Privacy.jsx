import React from 'react';
import FadeIn from '../components/FadeIn';
import './Legal.css';

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <FadeIn>
                    <h1>PRIVACYBELEID SOLAR AI</h1>
                    <p className="legal-meta">Eenmanszaak • KvK: 98280031 • Contact: info@solarai.nl • Laatste update: 04-12-2025</p>

                    <div className="legal-content">
                        <section>
                            <h2>1. Verwerkingsverantwoordelijke</h2>
                            <p>Solar AI, ingeschreven bij de Kamer van Koophandel onder nummer 98280031, is de verwerkingsverantwoordelijke in de zin van de Algemene Verordening Gegevensbescherming (AVG) voor de verwerking van persoonsgegevens die zij verkrijgt van haar (potentiële) klanten, leveranciers, partners en websitebezoekers.</p>
                        </section>

                        <section>
                            <h2>2. De Persoonsgegevens die wij verwerken</h2>
                            <p>Solar AI verwerkt persoonsgegevens die u zelf aan ons verstrekt in het kader van onze dienstverlening. Dit omvat onder meer:</p>
                            <ul className="legal-list">
                                <li><strong>Identificatiegegevens:</strong> Naam, adres, telefoonnummer, e-mailadres, KvK-nummer.</li>
                                <li><strong>Financiële gegevens:</strong> Factuurgegevens, bankrekeningnummer (voor betalingen).</li>
                                <li><strong>Project- en Communicatiegegevens:</strong> Alle gegevens, bestanden en communicatie in het kader van een project, inclusief logingegevens, API-sleutels, en toegang tot systemen van de Opdrachtgever (alleen indien strikt noodzakelijk voor de uitvoering).</li>
                                <li><strong>Technische Gegevens:</strong> IP-adres, browserinformatie, locatiegegevens, surfgedrag op onze website, verzameld via cookies.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. Doeleinden en Rechtsgronden van de verwerking</h2>
                            <p>Wij verwerken uw persoonsgegevens uitsluitend voor de volgende doeleinden en op basis van de bijbehorende rechtsgronden (artikel 6 AVG):</p>
                            <div className="table-responsive">
                                <table className="legal-table">
                                    <thead>
                                        <tr>
                                            <th>Doeleind van de verwerking</th>
                                            <th>Rechtsgrond AVG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Uitvoering van de Overeenkomst (Diensten leveren, factureren)</td>
                                            <td>Noodzakelijk voor de uitvoering van een overeenkomst.</td>
                                        </tr>
                                        <tr>
                                            <td>Administratie en Beheer (Financiële en projectadministratie)</td>
                                            <td>Noodzakelijk ter voldoening aan een wettelijke verplichting (fiscale wetgeving).</td>
                                        </tr>
                                        <tr>
                                            <td>Communicatie en Support (Contact over het project, vragen beantwoorden)</td>
                                            <td>Noodzakelijk voor de uitvoering van een overeenkomst of gerechtvaardigd belang.</td>
                                        </tr>
                                        <tr>
                                            <td>Beveiliging (Beveiliging van onze systemen en data)</td>
                                            <td>Gerechtvaardigd belang (bescherming van ons bedrijf en klanten).</td>
                                        </tr>
                                        <tr>
                                            <td>Marketing (Nieuwsbrieven, aanbiedingen)</td>
                                            <td>Uw uitdrukkelijke toestemming.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2>4. Delen met Derden (Verwerkers)</h2>
                            <p>Solar AI verkoopt uw gegevens niet aan derden. Wij delen uitsluitend gegevens met derden wanneer dit noodzakelijk is voor de uitvoering van de Overeenkomst of om te voldoen aan een wettelijke verplichting, waaronder:</p>
                            <ul className="legal-list">
                                <li><strong>IT-dienstverleners:</strong> Hostingproviders, cloud-opslagdiensten, onderhoudspartners.</li>
                                <li><strong>Externe Partijen:</strong> Freelancers of externe ontwikkelaars ingeschakeld voor uw project.</li>
                                <li><strong>Financiële partijen:</strong> Betaalproviders en onze accountant.</li>
                            </ul>
                            <p>Met deze partijen sluit Solar AI waar nodig een Verwerkersovereenkomst om te waarborgen dat zij ten minste hetzelfde niveau van beveiliging en vertrouwelijkheid hanteren.</p>
                        </section>

                        <section>
                            <h2>5. Bewaartermijnen</h2>
                            <p>Solar AI bewaart uw persoonsgegevens niet langer dan strikt noodzakelijk is om de doeleinden te realiseren waarvoor uw gegevens worden verzameld.</p>
                            <ul className="legal-list">
                                <li><strong>Administratieve gegevens (facturen e.d.):</strong> 7 jaar na afloop van de Overeenkomst (wettelijke fiscale bewaarplicht).</li>
                                <li><strong>Project- en communicatiegegevens:</strong> Maximaal 5 jaar na beëindiging van de Overeenkomst, tenzij langer noodzakelijk voor juridische geschillen.</li>
                                <li><strong>Data verzameld via cookies:</strong> Zo lang als de cookie-instellingen bepalen.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>6. Beveiliging van uw Gegevens</h2>
                            <p>Solar AI neemt de bescherming van uw gegevens serieus en treft passende technische en organisatorische maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Enkele maatregelen zijn:</p>
                            <ul className="legal-list">
                                <li>Versleuteling van data (waar mogelijk, bijvoorbeeld via SSL-verbindingen).</li>
                                <li>Toegangsbeheer op basis van 'need-to-know'.</li>
                                <li>Regelmatige monitoring en beveiligingsupdates.</li>
                            </ul>
                            <p><strong>Disclaimer Aansprakelijkheid Security:</strong> Ondanks alle genomen voorzorgsmaatregelen kan Solar AI geen absolute beveiliging garanderen. Solar AI is niet aansprakelijk voor schade die ontstaat door beveiligingsinbreuken of datalekken, voor zover de schade niet te wijten is aan grove nalatigheid of opzet van Solar AI en mits zij kan aantonen dat zij de vereiste passende technische en organisatorische maatregelen heeft genomen.</p>
                        </section>

                        <section>
                            <h2>7. Uw Rechten als Betrokkene</h2>
                            <p>U heeft op grond van de AVG verschillende rechten met betrekking tot de persoonsgegevens die wij van u verwerken:</p>
                            <ul className="legal-list">
                                <li><strong>Recht op inzage:</strong> U mag vragen welke gegevens wij van u verwerken.</li>
                                <li><strong>Recht op rectificatie:</strong> U kunt onjuiste of onvolledige gegevens laten corrigeren.</li>
                                <li><strong>Recht op verwijdering:</strong> U kunt vragen uw gegevens te laten wissen (het 'recht om vergeten te worden').</li>
                                <li><strong>Recht op bezwaar:</strong> U kunt bezwaar maken tegen de verwerking van uw gegevens.</li>
                                <li><strong>Recht op dataportabiliteit:</strong> U kunt vragen om uw gegevens in een overdraagbare vorm te ontvangen.</li>
                                <li><strong>Recht op beperking:</strong> U kunt vragen de verwerking van uw gegevens tijdelijk te beperken.</li>
                            </ul>
                            <p>U kunt een verzoek indienen via <a href="mailto:info@solarai.nl">info@solarai.nl</a>. Wij zullen uw identiteit controleren en binnen 30 dagen op uw verzoek reageren.</p>
                        </section>

                        <section>
                            <h2>8. Cookies</h2>
                            <p>Onze website maakt gebruik van cookies voor:</p>
                            <ul className="legal-list">
                                <li><strong>Functionele doeleinden:</strong> Noodzakelijk voor de werking van de website.</li>
                                <li><strong>Analytische doeleinden:</strong> Voor het meten van websitebezoek en -gedrag (geanonimiseerd).</li>
                                <li><strong>Marketingdoeleinden:</strong> Voor het tonen van relevante advertenties (alleen met uw expliciete toestemming).</li>
                            </ul>
                            <p>U kunt uw cookievoorkeuren te allen tijde aanpassen via de instellingen in uw browser.</p>
                        </section>

                        <section>
                            <h2>9. Klacht indienen</h2>
                            <p>Indien u klachten heeft over de manier waarop Solar AI uw persoonsgegevens verwerkt, kunt u contact opnemen via <a href="mailto:info@solarai.nl">info@solarai.nl</a>. Daarnaast heeft u het recht om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens (AP).</p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Privacy;
