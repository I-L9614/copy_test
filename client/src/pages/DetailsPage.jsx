import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLauncherById } from '../api/launcherService';

const DetailsPage = () => {
    const { id } = useParams();
    const [launcher, setLauncher] = useState(null);

    useEffect(() => {
        getLauncherById(id).then(setLauncher);
    }, [id]);

    if (!launcher) return <p>Loading...</p>;

    return (
        <div className="container">
            <h2>Launcher details {launcher.name}</h2>
            <div className="details-card">
                <p><strong>cuty:</strong> {launcher.city}</p>
                <p><strong>rocket type:</strong> {launcher.rocketType}</p>
                <p><strong>latitude:(Lat):</strong> {launcher.latitude}</p>
                <p><strong>longitude:(Long):</strong> {launcher.longitude}</p>
                <button onClick={() => useNavigate('/')}>back to list</button>
            </div>
        </div>
    );
};

export default DetailsPage;