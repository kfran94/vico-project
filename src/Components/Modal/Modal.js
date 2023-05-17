import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>Se connecter</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <form>
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <input type="text" id="username" name="username" />

                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" name="password" />

                        <button type="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;
