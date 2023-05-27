import "./CoachStyles.css"
import vikoTwo from "../../Image/viko2.jpg";
import vikoFour from "../../Image/viko4.jpg";

function Coach(){
    return (
        <div className="coach">
            <div className="first-container">
                <h1>Le coach Viko</h1>
            </div>
            <div className="second-container">
                <div className="column">
                    <img src={vikoTwo} alt="Coach Viko" className="bio-picture"/>
                </div>
                <div className="column">
                    <h2 className="title-bio">Présentation</h2>
                    <p className="bio">En tant que coach sportif passionné de musculation et de fitness, mes objectifs pour mes clients sont variés et personnalisés, afin de répondre à leurs besoins spécifiques et de les aider à atteindre des résultats concrets.<br/><br/>
                        Pour ceux qui souhaitent une prise de masse musculaire, je propose des programmes d'entraînement intensifs axés sur la musculation et l'augmentation de la force. En combinant des exercices spécifiques et une alimentation adaptée, je guide mes clients vers un gain musculaire progressif et durable.<br/><br/>
                        Pour ceux qui cherchent à perdre du poids, je propose des programmes de perte de poids efficaces en combinant des exercices cardiovasculaires, des entraînements en circuit et des conseils en nutrition. Mon approche globale vise à brûler les graisses, à tonifier le corps et à favoriser un mode de vie sain et équilibré.<br/><br/>
                        Si vous souhaitez reprendre une activité physique après une période d'inactivité, je vous accompagne avec des séances adaptées à votre niveau de condition physique actuel. Mon objectif est de vous aider à retrouver progressivement votre forme physique et à retrouver l'énergie et la confiance en vous.<br/><br/>
                        Pour ceux qui recherchent une activité cardio intense, je propose des séances de cardio boxe dynamiques et stimulantes. Cette combinaison de mouvements de boxe et d'exercices cardiovasculaires vous permettra de développer votre endurance, de renforcer votre corps et de libérer le stress.<br/><br/>
                        Je propose également des programmes de remise en forme générale, visant à améliorer la condition physique globale, renforcer les muscles et augmenter la flexibilité. Ces séances variées et stimulantes vous aideront à vous sentir mieux dans votre corps et à augmenter votre niveau d'énergie.<br/><br/>
                        Pour les femmes enceintes ou récemment accouchées, je propose des programmes adaptés à la grossesse et au post-partum, axés sur la santé de la mère et du bébé. Ces séances douces et sécuritaires favorisent le maintien d'une condition physique optimale tout en respectant les besoins spécifiques de cette période de vie.<br/><br/>
                        Enfin, je suis spécialisé dans le développement des performances pour les athlètes et les personnes désireuses d'améliorer leurs compétences sportives. Que ce soit pour augmenter votre vitesse, votre force, votre agilité ou votre puissance, je vous propose des programmes d'entraînement spécifiques pour atteindre vos objectifs sportifs.</p>
                </div>
            </div>
            <div className="third-container">
                <h1>Ma passion pour le sport est votre clé vers la transformation physique et mentale.</h1>
            </div>
            <div className="last-container">
                <div className="column revert">
                    <h2 className="title-bio">Transformez votre corps et atteignez vos objectifs</h2>
                    <p className="bio">En tant que coach sportif passionné de musculation et de fitness, mon objectif principal est d'aider mes clients à atteindre leurs aspirations en matière de remise en forme. Je propose une gamme complète de services personnalisés qui répondent aux besoins spécifiques de chacun.<br/><br/>
                        Pour ceux qui recherchent une prise de masse musculaire, je m'engage à élaborer des programmes d'entraînement ciblés et des plans nutritionnels adaptés, favorisant ainsi une augmentation de la masse musculaire et de la force.<br/><br/>
                        Si votre objectif est de perdre du poids, je vous promets des programmes de perte de poids efficaces qui combinent des séances d'entraînement cardiovasculaire intensives avec des conseils en nutrition personnalisés. Vous bénéficierez d'un soutien continu pour brûler les graisses, tonifier votre corps et atteindre votre poids idéal de manière durable.<br/><br/>
                        Pour ceux qui souhaitent reprendre une activité physique après une période d'inactivité, je suis là pour vous. Je m'engage à vous fournir des séances d'entraînement adaptées à votre niveau actuel de condition physique, afin de vous aider à retrouver progressivement votre forme, votre énergie et votre confiance en vous.<br/><br/>
                        Si vous recherchez une activité cardio intense, je vous promets des séances de cardio boxe dynamiques et motivantes. Ensemble, nous travaillerons sur votre endurance, votre force et votre coordination, vous permettant ainsi de repousser vos limites et de vous sentir revitalisé.<br/><br/>
                        Mon engagement envers la remise en forme globale signifie que je suis déterminé à vous aider à atteindre vos objectifs de tonification musculaire et d'amélioration générale de votre condition physique. Vous bénéficierez de programmes d'entraînement variés et stimulants qui vous permettront de renforcer vos muscles, d'augmenter votre flexibilité et de vous sentir bien dans votre corps.<br/><br/>
                        Pour les femmes enceintes ou récemment accouchées, je vous offre des programmes spécialisés axés sur la santé maternelle et le bien-être post-partum. Avec une approche douce et sécurisée, vous pourrez maintenir votre condition physique tout en répondant aux besoins spécifiques de cette période de vie.<br/><br/>
                        Enfin, je suis spécialisé dans le développement des performances, et je m'engage à vous aider à atteindre vos objectifs sportifs. Que vous souhaitiez augmenter votre vitesse, votre force, votre agilité ou votre puissance, je vous proposerai des programmes d'entraînement spécifiques pour vous aider à repousser vos limites et à améliorer vos compétences sportives.<br/><br/>
                        Quels que soient vos objectifs, je vous promets des séances d'entraînement personnalisées, un suivi attentif et des conseils professionnels pour vous aider à réaliser vos aspirations en matière de remise en forme. Ensemble, nous atteindrons vos objectifs et créerons une vie plus saine et plus épanouissante. Contactez-moi dès maintenant pour démarrer votre parcours vers une meilleure condition physique et un bien-être global.</p>
                </div>
                <div className="column revert">
                    <img src={vikoFour} alt="Coach Viko" className="bio-picture"/>
                </div>
            </div>
        </div>
    );
}

export default Coach;
