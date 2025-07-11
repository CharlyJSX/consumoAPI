import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const NavLink = styled(Link)`
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 10px;
    background-color: #3D98F4;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
        background-color: #2a7bbf;
    }
`;

export default function Home() {
    return (
        <Container>
            <Title>Welcome to Accommodation Booking</Title>
            <Description>Manage your accommodations and reservations easily.</Description>
            <Navigation>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/accommodations">View Accommodations</NavLink>
                <NavLink to="/reservations">View Reservations</NavLink>
            </Navigation>
        </Container>
    );
}