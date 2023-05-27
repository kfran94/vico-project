import React from "react";
import "./HomeStyles.css";
import { Link, useLocation } from "react-router-dom";
import ServicesComponents from "../../Components/ServiceComponents/ServicesComponents";
import test from "../../Image/test-services.jpg";
import WhyComponents from "../../Components/WhyComponents/WhyComponents";

function Home() {
    const location = useLocation();
    const message = location.state?.message;

    return (
        <>
            <div className="home">
                <div className="overlay">
                    <h1>Dépassez vos limites et atteignez vos objectifs avec Coaching by Viko : votre coach pour une transformation physique et mentale !</h1>
                </div>
            </div>
            <div className="why">
                <h2 className="why-viko">Pourquoi<br/>Coaching by Viko ?</h2>
                    <div className="master-why">
                        <div className="why-row">
                            <div className="why-item">
                                <WhyComponents
                                    className="icone-why"
                                    iconName="fas fa-user fa-2xl"
                                    titre="UN ACCOMPAGNEMENT PERSONNALISÉ"
                                    description="En tant que coach sportif dévoué, je m'engage à offrir un accompagnement personnalisé à mes clients. Ensemble, nous créerons un programme d'entraînement sur mesure, adapté à votre niveau, à votre emploi du temps et à vos préférences personnelles."
                                />
                            </div>
                            <div className="why-item">
                                <WhyComponents
                                    iconName="fa-solid fa-dumbbell fa-2xl"
                                    titre="UNE PASSION POUR LA TRANSFORMATION"
                                    description="Ma passion pour la musculation et le fitness est au cœur de mon engagement envers mes clients. Je suis là pour vous inspirer, vous guider et vous encourager tout au long de votre parcours de remise en forme."
                                />
                            </div>
                        </div>
                        <div className="why-row">
                            <div className="why-item">
                                <WhyComponents
                                    iconName="fas fa-chart-line fa-2xl"
                                    titre="UN SUIVI ATTENTIF ET DES RÉSULTATS CONCRETS"
                                    description="Mon objectif est de vous aider à atteindre des résultats concrets. Je vous offre un suivi attentif et des conseils professionnels pour vous assurer que vous progressez vers vos objectifs. Votre succès est ma priorité absolue."
                                />
                            </div>
                            <div className="why-item">
                                <WhyComponents
                                    iconName="fas fa-heart fa-2xl"
                                    titre="UNE APPROCHE HOLISTIQUE"
                                    description="Je crois en une approche holistique de la remise en forme, qui prend en compte tous les aspects de votre bien-être. Je vous fournirai des conseils en nutrition pour optimiser vos résultats et je mettrai à votre disposition des ressources pour favoriser une mentalité positive."
                                />
                            </div>
                        </div>
                    </div>
                   <p className="finaly-why">
                       Contactez-moi dès maintenant pour commencer votre parcours de remise en forme et découvrir comment je peux vous aider à atteindre vos objectifs personnels de manière efficace et adaptée à votre style de vie unique.
                   </p>
                </div>
            <div className="second-section">
                <div className="bio-container">
                    <div className="bio-content">
                        <h2>Le coach Viko</h2>
                        <p>Découvrez l'expérience inspirante du coach sportif Victor, un expert passionné qui aide les autres à atteindre leurs objectifs de condition physique et de bien-être. Victor combine sa passion pour le sport avec des techniques de coaching efficaces pour aider ses clients à se surpasser. Sa philosophie holistique et son approche personnalisée font de lui l'un des coaches les plus recherchés. Victor est un mentor et un modèle de vie saine, prêchant l'importance de la nutrition, du sommeil et de la gestion du stress. Son succès en tant que coach sportif repose sur sa capacité à motiver, inspirer et guider ses clients vers des résultats concrets.</p>
                    </div>
                </div>
            </div>
            <div className="third-section">
                <Link to="/inscription" className="home-btn">
                    Nos services
                </Link>
            </div>
            <div className="last-section">
                <Link to="/inscription" className="home-btn">
                    Rejoignez-nous
                </Link>
            </div>
        </>
    );
}

export default Home;
