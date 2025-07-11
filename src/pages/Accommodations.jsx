import React, { useEffect, useState } from 'react';
import AccommodationList from '../components/AccommodationList';
import AccommodationForm from '../components/AccommodationForm';
import { fetchAccommodations } from '../api/index';

export default function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentAccommodation, setCurrentAccommodation] = useState(null);

    useEffect(() => {
        const loadAccommodations = async () => {
            const data = await fetchAccommodations();
            setAccommodations(data);
        };
        loadAccommodations();
    }, []);

    const handleEdit = (accommodation) => {
        setCurrentAccommodation(accommodation);
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setCurrentAccommodation(null);
        setIsEditing(false);
    };

    return (
        <div>
            <h1>Manage Accommodations</h1>
            {isEditing ? (
                <AccommodationForm 
                    accommodation={currentAccommodation} 
                    onCancel={handleCancelEdit} 
                />
            ) : (
                <AccommodationForm onCancel={handleCancelEdit} />
            )}
            <AccommodationList 
                accommodations={accommodations} 
                onEdit={handleEdit} 
            />
        </div>
    );
}