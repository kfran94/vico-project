import React, { useState, useEffect } from 'react';
import "./HoursListStyles.css";
import apiUrl from "../../../config";

const HoursList = () => {
    const [hoursList, setHoursList] = useState([]);
    const [editingEntry, setEditingEntry] = useState(null);
    const [formData, setFormData] = useState({
        day: '',
        openingHours: '',
        break: '',
        closingHours: ''
    });

    useEffect(() => {
        fetch(`${apiUrl}/api/hours`)
            .then(response => response.json())
            .then(data => setHoursList(data));
    }, []);

    const formatTime = time => {
        const date = new Date(time);
        date.setHours(date.getHours() - 1);
        const options = {
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleTimeString('fr-FR', options);
    };

    const handleEdit = (id) => {
        const entry = hoursList.find(entry => entry.id === id);
        setEditingEntry(id);
        const openingDate = entry.openingHours.substring(0, 10);
        const openingHours = formatTime(entry.openingHours).substring(0, 5);
        const breakHours = formatTime(entry.break).substring(0, 5);
        const closingHours = formatTime(entry.closingHours).substring(0, 5);
        setFormData({
            day: openingDate,
            openingHours: openingHours,
            break: breakHours,
            closingHours: closingHours
        });
    };


    const handleSave = (id) => {
        const url = `${apiUrl}/admin/hours/${id}`;

        const openingDateTime = '1970-01-01T' + formData.openingHours + ':00+00:00';
        const closingDateTime = '1970-01-01T' + formData.closingHours + ':00+00:00';
        const breakDateTime = '1970-01-01T' + formData.break + ':00+00:00';

        const modifiedFormData = {
            opening_hours: openingDateTime,
            closing_hours: closingDateTime,
            break: breakDateTime
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifiedFormData)
        })
            .then(response => response.json())
            .then(data => {
                setEditingEntry(null);
                setFormData({
                    day: '',
                    openingHours: '',
                    break: '',
                    closingHours: ''
                });
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                window.location.reload();
            });
    };


    return (
        <table>
            <thead>
            <tr>
                <th>Jour</th>
                <th>Prise de poste</th>
                <th>Pause</th>
                <th>Fermeture</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {hoursList.map((entry, index) => (
                <tr key={index}>
                    {editingEntry === entry.id ? (
                        <>
                            <td>
                                <input
                                    type="text"
                                    className="date-input"
                                    value={formData.day}
                                    onChange={(e) =>
                                        setFormData({ ...formData, day: e.target.value })
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="time"
                                    value={formData.openingHours}
                                    onChange={(e) =>
                                        setFormData({ ...formData, openingHours: e.target.value })
                                    }
                                />
                            </td>


                            <td>
                                <input
                                    type="time"
                                    value={formData.break}
                                    onChange={(e) =>
                                        setFormData({ ...formData, break: e.target.value })
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="time"
                                    value={formData.closingHours}
                                    onChange={(e) =>
                                        setFormData({ ...formData, closingHours: e.target.value })
                                    }
                                />
                            </td>
                            <td>
                                {editingEntry === null ? null : (
                                    <i
                                        className="fa-solid fa-check save-icon"
                                        onClick={() => handleSave(entry.id)}
                                    ></i>
                                )}
                            </td>
                        </>
                    ) : (
                        <>
                            <td>{entry.day}</td>
                            <td>{formatTime(entry.openingHours)}</td>
                            <td>{formatTime(entry.break)}</td>
                            <td>{formatTime(entry.closingHours)}</td>
                            <td>
                                <i
                                    className="fa-solid fa-pen"
                                    onClick={() => handleEdit(entry.id)}
                                ></i>
                            </td>
                        </>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default HoursList;
