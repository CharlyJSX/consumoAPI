import React, { useEffect, useState } from 'react';
import { fetchReservations, cancelReservation } from '../api/index';
import ReservationList from '../components/ReservationList';
import { useHistory } from 'react-router-dom';

export default function Reservations() {
    const [reservations, setReservations] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const getReservations = async () => {
            const data = await fetchReservations();
            setReservations(data);
        };

        getReservations();
    }, []);

    const handleCancel = async (id) => {
        await cancelReservation(id);
        setReservations(reservations.filter(reservation => reservation.id !== id));
    };

    return (
        <div>
            <h1>Your Reservations</h1>
            <ReservationList reservations={reservations} onCancel={handleCancel} />
            <button onClick={() => history.push('/new-reservation')}>Create New Reservation</button>
        </div>
    );
}