import React, { useState, useEffect } from 'react';
import apiUrl from "../../../config";
import "./ReservationListStyles.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {format} from "date-fns";

const ReservationComponent = () => {
    const [reservations, setReservations] = useState([]);
    const [filteredReservations, setFilteredReservations] = useState([]);
    const [filter, setFilter] = useState({ date: '', name: '' });

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await fetch(`${apiUrl}api/reservations`);
            const data = await response.json();
            setReservations(data);
            setFilteredReservations(data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        const { date, name } = filter;
        let filteredData = reservations;

        if (date) {
            const formattedDate = format(date, 'yyyy-MM-dd');
            filteredData = filteredData.filter((reservation) =>
                reservation.date.includes(formattedDate)
            );
        }

        if (name) {
            filteredData = filteredData.filter((reservation) => {
                if (reservation.clientId && reservation.clientId.name) {
                    return reservation.clientId.name.toLowerCase() === name.toLowerCase();
                }
                return false;
            });
        }

        setFilteredReservations(filteredData);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', options);
    };

    const formatTime = (dateString) => {
        const options = { hour: 'numeric', minute: 'numeric' };
        const date = new Date(dateString);
        const adjustedDate = new Date(date.getTime() - (2 * 60 * 60 * 1000)); // Ajustement du décalage horaire de 2 heures
        return adjustedDate.toLocaleTimeString('fr-FR', options);
    };



    return (
        <div>
            <h2>Reservations</h2>

            <form onSubmit={handleFilterSubmit}>
                <label htmlFor="date">Date:</label>
                <DatePicker
                    selected={filter.date}
                    onChange={(date) => setFilter({ ...filter, date })}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Sélectionner une date"
                />

                <label htmlFor="name">Nom:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={filter.name}
                    onChange={handleFilterChange}
                />

                <button type="submit">Filtrer</button>
            </form>

            {filteredReservations.map((reservation) => (
                <div key={reservation.id} className="card">
                    <p>Date : {formatDate(reservation.date)}</p>
                    <p>Heure : {formatTime(reservation.date)}</p>
                    <p>Service: {reservation.services}</p>
                    {reservation.clientId && (
                        <>
                            <p>Email: {reservation.clientId.email}</p>
                            <p>Nom: {reservation.clientId.name}</p>
                            <p>Prénom: {reservation.clientId.firstname}</p>
                            <p>Âge: {reservation.clientId.age}</p>
                            <p>Problème de santé: {reservation.clientId.health}</p>
                            <p>Niveau: {reservation.clientId.level}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ReservationComponent;
