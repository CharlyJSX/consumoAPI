import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EditAccommodation from '../components/EditAccommodation';
import { getAccommodationById, updateAccommodation } from '../api';

const EditAccommodationPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const [accommodation, setAccommodation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAccommodation = async () => {
            try {
                const data = await getAccommodationById(id);
                setAccommodation(data);
            } catch (err) {
                setError('Failed to fetch accommodation details');
            } finally {
                setLoading(false);
            }
        };

        getAccommodation();
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
            <h1>Edit Accommodation</h1>
            {accommodation && (
                <EditAccommodation
                    accommodation={accommodation}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
};

export default EditAccommodationPage;