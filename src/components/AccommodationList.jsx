import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchAccommodations } from '../api';

const Container = styled.div`
    padding: 2rem;
`;

const AccommodationItem = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
`;

const Title = styled.h2`
    font-size: 1.5rem;
`;

const Description = styled.p`
    font-size: 1rem;
`;

const AccommodationList = () => {
    const [accommodations, setAccommodations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAccommodations = async () => {
            try {
                const data = await fetchAccommodations();
                setAccommodations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getAccommodations();
    }, []);

    if (loading) return <p>Loading accommodations...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container>
            {accommodations.map(accommodation => (
                <AccommodationItem key={accommodation.id}>
                    <Title>{accommodation.name}</Title>
                    <Description>{accommodation.description}</Description>
                </AccommodationItem>
            ))}
        </Container>
    );
};

export default AccommodationList;