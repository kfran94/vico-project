import "./ReservationStyles.css"
import React from "react";
import ReservationForm from "../../Components/ReservationForm/ReservationForm";
function Reservation(){
    return (
        <>
            <div className="reservation">
                <div className="reservation-form">
                    <div className="hight-level">
                        <h1 className="title-form">Prenez rendez-vous</h1>
                    </div>
                    <hr />
                    <div className="lower-level">
                        <ReservationForm/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reservation;