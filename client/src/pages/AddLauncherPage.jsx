import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createLauncher } from '../api/launcherService';

const AddLauncherPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        rocketType: 'Shahab3', 
        latitude: '',
        longitude: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.city || !formData.latitude || !formData.longitude) {
            alert("נא למלא את כל השדות");
            return;
        }

        const success = await createLauncher(formData);
        
        if (success) {
            alert('המשגר נוסף בהצלחה!');
            navigate('/'); 
        } else {
            alert('שגיאה בהוספת המשגר. בדוק את השרת.');
        }
    };

    return (
        <div className="container">
            <h2>הוספת משגר חדש</h2>
            <form onSubmit={handleSubmit} className="launcher-form">
                <div className="form-group">
                    <label>שם המשגר:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="לדוגמה: משגר דרום"
                    />
                </div>

                <div className="form-group">
                    <label>עיר:</label>
                    <input 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        placeholder="שם העיר"
                    />
                </div>

                <div className="form-group">
                    <label>סוג רקטה:</label>
                    <select name="rocketType" value={formData.rocketType} onChange={handleChange}>
                        <option value="Shahab3">Shahab3</option>
                        <option value="Fetah110">Fetah110</option>
                        <option value="Radwan">Radwan</option>
                        <option value="Kheibar">Kheibar</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>קו רוחב (Latitude):</label>
                    <input 
                        type="number" 
                        name="latitude" 
                        value={formData.latitude} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>קו אורך (Longitude):</label>
                    <input 
                        type="number" 
                        name="longitude" 
                        value={formData.longitude} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit" className="btn-submit">שמור משגר</button>
            </form>
        </div>
    );
};

export default AddLauncherPage;