import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getAccommodationById, updateAccommodation } from '../api/index';
import AccommodationForm from './AccommodationForm';

export default function EditAccommodation() {
    const { id } = useParams();
    const history = useHistory();
    const [accommodation, setAccommodation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAccommodation = async () => {
            try {
                const data = await getAccommodationById(id);
                setAccommodation(data);
            } catch (err) {
                setError('Failed to fetch accommodation data');
            } finally {
                setLoading(false);
            }
        };

        fetchAccommodation();
    }, [id]);

    const handleUpdate = async (updatedData) => {
        try {
            await updateAccommodation(id, updatedData);
            history.push('/accommodations');
        } catch (err) {
            setError('Failed to update accommodation');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Edit Accommodation</h2>
            {accommodation && (
                <AccommodationForm
                    initialData={accommodation}
                    onSubmit={handleUpdate}
                />
            )}
        </div>
    );
}