import React, { useState, useEffect } from 'react';
import "./HoursListStyles.css"
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
        fetch(`${apiUrl}api/hours`)
            .then(response => response.json())
            .then(data => setHoursList(data));
    }, []);

    const formatTime = time => {
        const date = new Date(time);
        date.setHours(date.getHours() - 1)
        const options = {
            timeZone: 'Europe/Paris',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleString('fr-FR', options);
    };

    const handleEdit = (id) => {
        const entry = hoursList.find(entry => entry.id === id);
        setEditingEntry(id);
        setFormData({
            day: entry.day,
            openingHours: entry.openingHours,
            break: entry.break,
            closingHours: entry.closingHours
        });
    };

    const handleSave = (id) => {
        const url = `${apiUrl}admin/hours/${id}`;


        const modifiedFormData = {
            opening_hours: formData.openingHours,
            closing_hours: formData.closingHours,
            break: formData.break
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
                                    value={formData.day}
                                    onChange={(e) =>
                                        setFormData({...formData, day: e.target.value})
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={formData.openingHours}
                                    onChange={(e) =>
                                        setFormData({...formData, openingHours: e.target.value})
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={formData.break}
                                    onChange={(e) =>
                                        setFormData({...formData, break: e.target.value})
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={formData.closingHours}
                                    onChange={(e) =>
                                        setFormData({...formData, closingHours: e.target.value})
                                    }
                                />
                            </td>
                            <td>
                                {editingEntry === null ? null : (
                                    <i className="fa-solid fa-check save-icon" onClick={() => handleSave(entry.id)}></i>

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
}
export default HoursList
