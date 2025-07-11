import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchAccommodations, createReservation } from '../api';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

const Input = styled.input`
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Select = styled.select`
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 0.5rem;
    background-color: #3D98F4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #2a7bbf;
    }
`;

export default function ReservationForm() {
    const [accommodations, setAccommodations] = useState([]);
    const [selectedAccommodation, setSelectedAccommodation] = useState('');
    const [reservationDetails, setReservationDetails] = useState({
        name: '',
        date: '',
        duration: ''
    });

    useEffect(() => {
        const loadAccommodations = async () => {
            const data = await fetchAccommodations();
            setAccommodations(data);
        };
        loadAccommodations();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'accommodation') {
            setSelectedAccommodation(value);
        } else {
            setReservationDetails({
                ...reservationDetails,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createReservation({ ...reservationDetails, accommodationId: selectedAccommodation });
        // Reset form or handle success
    };

    return (
        <Container>
            <h2>Create New Reservation</h2>
            <Form onSubmit={handleSubmit}>
                <Select name="accommodation" value={selectedAccommodation} onChange={handleChange} required>
                    <option value="">Select Accommodation</option>
                    {accommodations.map(accommodation => (
                        <option key={accommodation.id} value={accommodation.id}>
                            {accommodation.name}
                        </option>
                    ))}
                </Select>
                <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={reservationDetails.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="date"
                    name="date"
                    value={reservationDetails.date}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="duration"
                    placeholder="Duration (nights)"
                    value={reservationDetails.duration}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Reserve</Button>
            </Form>
        </Container>
    );
}