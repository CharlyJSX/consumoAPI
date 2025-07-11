import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const LoginPage = () => {
    return (
        <Container>
            <LoginForm />
        </Container>
    );
};

export default LoginPage;