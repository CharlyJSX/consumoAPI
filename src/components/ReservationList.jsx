import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchReservations, cancelReservation } from '../api';

const Container = styled.div`
    margin: 2rem;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const ReservationItem = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #c0392b;
    }
`;

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const loadReservations = async () => {
            const data = await fetchReservations();
            setReservations(data);
        };

        loadReservations();
    }, []);

    const handleCancel = async (id) => {
        await cancelReservation(id);
        setReservations(reservations.filter(reservation => reservation.id !== id));
    };

    return (
        <Container>
            <Title>Your Reservations</Title>
            {reservations.map(reservation => (
                <ReservationItem key={reservation.id}>
                    <div>
                        <p><strong>Accommodation:</strong> {reservation.accommodationName}</p>
                        <p><strong>Date:</strong> {reservation.date}</p>
                    </div>
                    <Button onClick={() => handleCancel(reservation.id)}>Cancel</Button>
                </ReservationItem>
            ))}
        </Container>
    );
}