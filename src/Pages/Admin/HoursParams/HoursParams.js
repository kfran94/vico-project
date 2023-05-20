import "./HoursParamsStyles.css"
import Cadre from "../../../Components/Cadre/Cadre";
import HoursList from "../../../Components/Cadre/HoursList/HoursList";
function HoursParams(){
    return (
        <>
            <div className="hoursParams">
                <Cadre className="cadre"
                       titre="Modification des horaires"
                       contenu={<HoursList/>}
                />
            </div>
        </>
    );
}

export default HoursParams;