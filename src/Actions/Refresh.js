import axios from 'axios';
import apiUrl from '../config';

export const refreshAccessToken = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${apiUrl}/api/token/refresh`, {
            refresh_token: refreshToken,
        });
        const newToken = response.data.token;

        localStorage.setItem('token', newToken);

        return newToken;
    } catch (error) {
        console.error('Erreur lors du rafraîchissement du token :', error);
        throw error;
    }
};
