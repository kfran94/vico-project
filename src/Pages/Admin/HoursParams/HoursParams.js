import "./HoursParamsStyles.css"
import HoursList from "../../../Components/Cadre/HoursList/HoursList";
import React from "react";
function HoursParams(){
    return (
        <>
            <div className="hoursParams">
                <div className="cadreAddArticle">
                    <div className="hight-level">
                        <h1 className="title-form">Modification des horaires</h1>
                    </div>
                    <hr />
                    <div className="lower-level">
                        <HoursList/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HoursParams;