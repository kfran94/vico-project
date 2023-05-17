import "./LoginStyles.css"
import Cadre from "../../Components/Cadre/Cadre";
import LoginContent from "../../Components/Cadre/LoginContent/LoginContent";
function Login(){
    return (
        <>
            <div className="login">
                <Cadre titre="Se connecter"
                       contenu={<LoginContent/>}
                />
            </div>
        </>
    );
}

export default Login;