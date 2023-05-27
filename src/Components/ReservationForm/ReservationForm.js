import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./ReservationFormStyles.css"
import axios from "axios";
import { format, addHours, isBefore, parseISO } from 'date-fns';
import apiUrl from "../../config";

const ReservationForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [service, setService] = useState('');
    const [selectedInterval, setSelectedInterval] = useState('');
    const [availableIntervals, setAvailableIntervals] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dayOfWeek = selectedDate ? selectedDate.toLocaleDateString('fr-FR', { weekday: 'long' }) : '';

        const dayOfWeekMap = {
            lundi: 1,
            mardi: 2,
            mercredi: 3,
            jeudi: 4,
            vendredi: 5,
            samedi: 6,
            dimanche: 7
        };

        if (dayOfWeek && dayOfWeekMap.hasOwnProperty(dayOfWeek.toLowerCase())) {
            const id = dayOfWeekMap[dayOfWeek.toLowerCase()];

            try {
                const response = await axios.get(`${apiUrl}/hours/${id}`);
                const { openingHours, closingHours, break: breakTime } = response.data;

                const intervals = [];
                let currentHour = addHours(new Date(openingHours), -1);
                const closingHour = addHours(new Date(closingHours), -1);

                while (isBefore(currentHour, closingHour)) {
                    const formattedHour = format(currentHour, 'HH:mm');
                    intervals.push(formattedHour);
                    currentHour = addHours(currentHour, 1);
                }

                const adjustedBreakTime = addHours(new Date(breakTime), -1);
                const formattedBreakTime = format(adjustedBreakTime, 'HH:mm');


                const adjustedDate = new Date(
                    Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())
                );

                const searchResponse = await axios.post(`${apiUrl}/api/reservations/search`, {
                    "date": adjustedDate.toISOString().split('T')[0], // Convertir la date en format ISO YYYY-MM-DD
                });

                const reservations = searchResponse.data;

                const formattedReservations = reservations.map(reservation => {
                    const reservationDate = parseISO(reservation.date);
                    const adjustedReservationDate = addHours(reservationDate, -2);
                    return format(adjustedReservationDate, 'HH:mm');
                });


                const filteredIntervals = intervals.filter(interval => {
                    return !formattedReservations.includes(interval) && interval !== formattedBreakTime;
                });

                setAvailableIntervals(filteredIntervals);
            } catch (error) {
                console.error('Erreur lors de la recherche des réservations:', error);
            }
        } else {
            console.error('Jour de la semaine invalide');
        }
    };

    const handleReservation = async (e) => {
        e.preventDefault();

        if (service && selectedInterval) {
            try {
                const adjustedDate = new Date(
                    Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate())
                );
                const formattedDate = format(adjustedDate, "yyyy-MM-dd");
                const dateTime = `${formattedDate}T${selectedInterval}:00+00:00`;

                const userString = localStorage.getItem('user');
                const user = JSON.parse(userString);
                const userId = user.id;


                const reservationData = {
                    date: dateTime,
                    services: service,
                    clientId: { id: userId }
                };

                await axios.post(`${apiUrl}/api/reservations/create`, reservationData);
                console.log('Demande de réservation envoyée avec succès');
                window.location.href = '/';
            } catch (error) {
                console.error('Erreur lors de la réservation:', error);
            }
        } else {
            console.error('Veuillez sélectionner un service et un intervalle');
        }
    };
;

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="date-select">
                    <label className="label-reservation">Sélectionnez une date :</label>
                    <DatePicker
                        className="input-date"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Sélectionnez une date"
                    />
                </div>
                <button className="btn-verify" type="submit">Vérifier la disponibilité</button>
            </form>
            {availableIntervals.length > 0 && (
                <form className="reservation-formulaire" onSubmit={handleReservation}>
                    <h2>Information de la reservation</h2>
                    <div className="form-group-resa">
                        <label className="label-reservation label-second" htmlFor="service">Service :</label>
                        <select className="input-reservation" id="service" value={service} onChange={(e) => setService(e.target.value)}>
                            <option value="">Choisissez un service</option>
                            <option value="prise_de_masse">Prise de masse</option>
                            <option value="perte_de_poids">Perte de poids</option>
                            <option value="reprise_activite">Reprise d'une activité</option>
                            <option value="cardio_boxe">Cardio boxe</option>
                            <option value="remise_en_forme">Remise en forme</option>
                            <option value="grossesse_post_p">Grossesse et post-partum</option>
                            <option value="tonification">Tonification</option>
                            <option value="developpement_perf">Développement des performances</option>
                        </select>
                    </div>
                    <div className="form-group-resa">
                        <label className="label-reservation label-second" htmlFor="interval">Interval :</label>
                        <select className="input-reservation" id="interval" value={selectedInterval} onChange={(e) => setSelectedInterval(e.target.value)}>
                            <option value="">Choisissez un intervalle</option>
                            {availableIntervals.map((interval, index) => (
                                <option key={index} value={interval}>{interval}</option>
                            ))}
                        </select>
                    </div>
                    <button className="btn-reserve" type="submit">Réserver</button>
                </form>
            )}
        </div>
    );
};

export default ReservationForm;
