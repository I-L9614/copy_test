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
            alert("Please fill in all fields.");
            return;
        }

        const success = await createLauncher(formData);
        
        if (success) {
            alert('launcher created successfuly');
            navigate('/'); 
        } else {
            alert('error in create launcher');
        }
    };

    return (
        <div className="container">
            <h2>Add new launcher</h2>
            <form onSubmit={handleSubmit} className="launcher-form">
                <div className="form-group">
                    <label>Launcher name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="exs: yoooo"
                    />
                </div>

                <div className="form-group">
                    <label>City:</label>
                    <input 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        placeholder="City name"
                    />
                </div>

                <div className="form-group">
                    <label>Rocket type:</label>
                    <select name="rocketType" value={formData.rocketType} onChange={handleChange}>
                        <option value="Shahab3">Shahab3</option>
                        <option value="Fetah110">Fetah110</option>
                        <option value="Radwan">Radwan</option>
                        <option value="Kheibar">Kheibar</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Latitude:</label>
                    <input 
                        type="number" 
                        name="latitude" 
                        value={formData.latitude} 
                        onChange={handleChange} 
                    />
                </div>

                <div className="form-group">
                    <label>Longitude:</label>
                    <input 
                        type="number" 
                        name="longitude" 
                        value={formData.longitude} 
                        onChange={handleChange} 
                    />
                </div>

                <button type="submit" className="btn-submit">Create launcher</button>
            </form>
        </div>
    );
};

export default AddLauncherPage;