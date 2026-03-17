import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLauncherById } from '../api/launcherService';

const DetailsPage = () => {
    const { id } = useParams();
    const [launcher, setLauncher] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getLauncherById(id).then(setLauncher);
    }, [id]);

    if (!launcher) return <p>טוען נתונים...</p>;

    return (
        <div className="container">
            <h2>פרטי משגר: {launcher.name}</h2>
            <div className="details-card">
                <p><strong>עיר:</strong> {launcher.city}</p>
                <p><strong>סוג רקטה:</strong> {launcher.rocketType}</p>
                <p><strong>קו רוחב (Lat):</strong> {launcher.latitude}</p>
                <p><strong>קו אורך (Long):</strong> {launcher.longitude}</p>
                <button onClick={() => navigate('/')}>חזור לרשימה</button>
            </div>
        </div>
    );
};

export default DetailsPage;