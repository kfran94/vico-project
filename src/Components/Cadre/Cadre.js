import React from 'react';
import './Cadre.css';

function Cadre(props) {
    return (
        <div className="cadre">
            <div className="hight-level">
                <h1 className="cadre-title">{props.titre}</h1>
            </div>
            <hr />
            <div className="lower-level">
                {props.contenu}
            </div>
        </div>
    );
}

export default Cadre;
