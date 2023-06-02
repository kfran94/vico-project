import React from "react";
import "./InscriptionStyles.css";
import firstImg from "../../Image/1st-sub.jpg";
import { Link } from "react-router-dom";
import ServicesComponents from "../../Components/ServiceComponents/ServicesComponents";
import perte from "../../Image/perte.jpg"
import perf from "../../Image/devPerf.jpg"
import cardio from "../../Image/cardio.jpg"
import grossesse from "../../Image/grossesse.jpg"
import prise from "../../Image/prise.jpg"
import reprise from "../../Image/reprise.jpg"
import tonification from "../../Image/tonification.jpg"
import remise from "../../Image/remise.jpg"

function Inscription() {
    return (
        <div className="inscription">
            <div className="container">
                <div className="column">
                    <div className="photo">
                        <Link to="/registration" className="subscrib-btn">
                            Inscrivez-vous
                        </Link>
                        <img className="img-first" src={firstImg} alt="Inscription" />
                    </div>
                </div>
                <div className="column">
                    <div className="text-first">
                        <h1 className="tarif-title">Tarifs</h1>
                        <hr className="tarif-hr" />
                        <div>
                            <div>
                                <div className="tarif-row">
                                    <p className="tarif-content service-p">Séance seul</p>
                                    <p className="price">40€</p>
                                </div>
                                <div className="tarif-row">
                                    <p className="tarif-content service-p">Séance duo</p>
                                    <p className="price">50€</p>
                                </div>
                                <div className="tarif-row">
                                    <p className="tarif-content service-p">Programme + Séance</p>
                                    <p className="price">60€</p>
                                </div>
                                <div className="tarif-row">
                                    <p className="tarif-content service-p">Pack de dix Séances</p>
                                    <p className="price">300€</p>
                                </div>
                            </div>
                        </div>
                        <hr className="tarif-hr" />
                        <p className="tarif-content">
                            Pour des devis personnalisés ou des formules plus adaptées, veuillez nous contacter.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="title-services-section">Nos services</h2>
            <div className="services-container">
                <div className="master-row">
                    <div className="services-row">
                        <div className="services-item">
                            <ServicesComponents
                                photo={prise}
                                titre="PRISE DE MASSE"
                                description="Atteignez vos objectifs de développement musculaire avec un programme personnalisé."
                            />
                        </div>
                        <div className="services-item">
                            <ServicesComponents
                                photo={perte}
                                titre="PERTE DE POIDS"
                                description="Perdez du poids efficacement et gagnez en confiance grâce à un plan d'entraînement adapté."
                            />
                        </div>
                    </div>
                    <div className="services-row">
                        <div className="services-item">
                            <ServicesComponents
                                photo={reprise}
                                titre="REPRISE D'UNE ACTIVITE"
                                description=" Renforcez vos muscles et retrouvez votre forme après une période d'inactivité."
                            />
                        </div>
                        <div className="services-item">
                            <ServicesComponents
                                photo={cardio}
                                titre="CARDIO BOXE"
                                description="Intensifiez votre entraînement cardio, brûlez des calories et améliorez votre condition physique avec des exercices inspirés de la boxe."
                            />
                        </div>
                    </div>
                </div>

                <div className="master-row">
                    <div className="services-row">
                        <div className="services-item">
                            <ServicesComponents
                                photo={remise}
                                titre="REMISE EN FORME"
                                description="Retrouvez le plaisir de l'exercice physique et redécouvrez votre forme grâce à un entraînement sur mesure."
                            />
                        </div>
                        <div className="services-item">
                            <ServicesComponents
                                photo={grossesse}
                                titre="GROSSESSE / POST P."
                                description="Restez actif pendant votre grossesse ou retrouvez votre silhouette après l'accouchement en toute sécurité."
                            />
                        </div>
                    </div>

                    <div className="services-row">
                        <div className="services-item">
                            <ServicesComponents
                                photo={tonification}
                                titre="TONIFICATION"
                                description="Sculptez votre corps, tonifiez vos muscles et affinez votre silhouette avec un programme ciblé."
                            />
                        </div>
                        <div className="services-item">
                            <ServicesComponents
                                photo={perf}
                                titre="DEVELOPPEMENT DES PERFORMANCES"
                                description="Augmentez votre force, votre vitesse et votre puissance pour atteindre de nouveaux sommets."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inscription;
