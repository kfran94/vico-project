import React, { useState } from 'react';
import axios from 'axios';
import "./RegistrationContentStyles.css"

function RegistrationForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [age, setAge] = useState('');
    const [health, setHealth] = useState('');
    const [level, setLevel] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();


        axios.post(`http://127.0.0.1:8000/api/register`, {
            email: email,
            password: password,
            name: name,
            firstname: firstname,
            age: age,
            health: health,
            level: level
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.href = "/";
            });
    };


    return (
        <form onSubmit={handleSubmit} className="login-content">
            <div>
                <label htmlFor="username">Email</label>
                <input
                    type="text"
                    id="username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="firstname">Prénom</label>
                <input
                    type="text"
                    id="firstname"
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="age">Âge</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="health">Problèmes de santé</label>
                <input
                    type="text"
                    id="health"
                    value={health}
                    onChange={(event) => setHealth(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="level">Niveau</label>
                <select id="level" value={level} onChange={(event) => setLevel(event.target.value)} required>
                    <option value="">Sélectionner votre niveau</option>
                    <option value="debutant">Débutant</option>
                    <option value="intermediaire">Intermédiaire</option>
                    <option value="confirme">Confirmé</option>
                </select>
            </div>

            <button className="submit-button" type="submit">S'inscrire</button>
        </form>
    );
}

export default RegistrationForm;
