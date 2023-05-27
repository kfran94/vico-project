import React, { useState, useEffect } from 'react';
import apiUrl from "../../../config";
import "./ReservationListStyles.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from "date-fns";

const ReservationComponent = () => {
    const [reservations, setReservations] = useState([]);
    const [filteredReservations, setFilteredReservations] = useState([]);
    const [filter, setFilter] = useState({ date: '', name: '' });
    const [expandedCards, setExpandedCards] = useState([]);


    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/reservations`);
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
                    return reservation.clientId.name.toLowerCase().includes(name.toLowerCase());
                }
                return false;
            });
        }

        setFilteredReservations(filteredData);
    };
    const toggleCard = (reservationId) => {
        if (expandedCards.includes(reservationId)) {
            setExpandedCards(expandedCards.filter((id) => id !== reservationId));
        } else {
            setExpandedCards([...expandedCards, reservationId]);
        }
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
        <div className="reservationList">
            <h2>Reservations</h2>

            <form onSubmit={handleFilterSubmit}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <DatePicker
                            className="input-text"
                            selected={filter.date}
                            onChange={(date) => setFilter({ ...filter, date })}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Sélectionner une date"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Nom:</label>
                        <input
                            className="input-text"
                            type="text"
                            id="name"
                            name="name"
                            value={filter.name}
                            onChange={handleFilterChange}
                        />
                    </div>

                    <div className="form-group">
                        <button className="sub-btn" type="submit">Filtrer</button>
                    </div>
                </div>
            </form>

            {filteredReservations.map((reservation) => (
                <div key={reservation.id} className="card">
                    <div className="card-header" onClick={() => toggleCard(reservation.id)}>
                        <p className="date">{formatDate(reservation.date)}</p>
                        <p className="time">{formatTime(reservation.date)}</p>
                        <p className="service">{reservation.services}</p>
                    </div>
                    {expandedCards.includes(reservation.id) && (
                        <div className="card-content">
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
                    )}
                </div>
            ))}


        </div>
    );
};

export default ReservationComponent;
