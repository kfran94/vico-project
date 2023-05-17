import "./RegistrationStyles.css"
import Cadre from "../../Components/Cadre/Cadre";
import RegistrationContent from "../../Components/Cadre/RegistrationContent/RegistrationContent";
function Login(){
    return (
        <>
            <div className="registration">
                <Cadre className="cadre"
                        titre="S'inscrire"
                       contenu={<RegistrationContent/>}
                />
            </div>
        </>
    );
}

export default Login;