import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createAccommodation, getAccommodationById, updateAccommodation } from '../api';

const Container = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    margin-top: 1rem;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    background-color: #3D98F4;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #2a7bbf;
    }
`;

export default function AccommodationForm({ accommodationId, onSuccess }) {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        price: '',
        description: '',
    });

    useEffect(() => {
        if (accommodationId) {
            const fetchAccommodation = async () => {
                const accommodation = await getAccommodationById(accommodationId);
                setFormData(accommodation);
            };
            fetchAccommodation();
        }
    }, [accommodationId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (accommodationId) {
            await updateAccommodation(accommodationId, formData);
        } else {
            await createAccommodation(formData);
        }
        onSuccess();
    };

    return (
        <Container>
            <Title>{accommodationId ? 'Edit Accommodation' : 'New Accommodation'}</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Accommodation Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">{accommodationId ? 'Update Accommodation' : 'Create Accommodation'}</Button>
            </Form>
        </Container>
    );
}