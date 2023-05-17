import React, { useState } from 'react';
import axios from 'axios';
import "./LoginContentStyles.css";
import jwtDecode from "jwt-decode";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();


            axios.post(`http://127.0.0.1:8000/api/login_check`, {
                "username": username,
                "password": password
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    const token = res.data.token;
                    localStorage.setItem('token', token);
                    const decodedTokken = jwtDecode(token);
                    console.log(decodedTokken);
                    window.location.href= "/"
                })




    };

    return (
        <form onSubmit={handleSubmit} className="login-content">
            <div>
                <label htmlFor="username">Email</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button className="submit-button" type="submit">Se connecter</button>
        </form>
    );
}

export default LoginForm;
