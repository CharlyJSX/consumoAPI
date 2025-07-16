import axios from 'axios';

const API_URL = 'https://apibookingsaccomodations-production.up.railway.app/api';

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchAccommodations = async () => {
    try {
        const response = await axios.get(`${API_URL}/accommodations`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createAccommodation = async (accommodationData) => {
    try {
        const response = await axios.post(`${API_URL}/accommodations`, accommodationData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const updateAccommodation = async (id, accommodationData) => {
    try {
        const response = await axios.put(`${API_URL}/accommodations/${id}`, accommodationData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchReservations = async () => {
    try {
        const response = await axios.get(`${API_URL}/reservations`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createReservation = async (reservationData) => {
    try {
        const response = await axios.post(`${API_URL}/reservations`, reservationData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const cancelReservation = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/reservations/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }

    export const fetchAccommodationById = async (id) => {
        try {
            const response = await axios.get(`${API_URL}/accommodations/${id}`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    };
};