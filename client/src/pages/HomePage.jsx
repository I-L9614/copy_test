import React, { useEffect, useState } from 'react';
import { getLaunchers, deleteLauncher } from '../api/launcherService';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [launchers, setLaunchers] = useState([])
    const [searchCity, setSearchCity] = useState('')
    const [filterType, setFilterType] = useState('')

    
    
    const loadData = async () => {
        const data = await getLaunchers()
        setLaunchers(data)
    }

    useEffect(() => { 
        loadData() 
    }, [])
    
    const removeLauncher = async (id) => {
        await deleteLauncher(id)
        loadData()
    }
    
    const filtered = launchers.filter(launcher => 
        launcher.city.toLowerCase().includes(searchCity.toLowerCase()) &&
        (filterType === '' || launcher.rocketType === filterType)
    )
    
    
    return (
        <div className="container">
            <h1>Launchers manager</h1>
            
            <div className="filters">
                <input 
                    type="text" 
                    placeholder="Search by cuty..." 
                    onChange={(e) => setSearchCity(e.target.value)} 
                />
                <select onChange={(e) => setFilterType(e.target.value)}>
                    <option value="">Rocket type</option>
                    <option value="Shahab3">Shahab3</option>
                    <option value="Fetah110">Fetah110</option>
                    <option value="Radwan">Radwan</option>
                    <option value="Kheibar">Kheibar</option>
                </select>
            </div>

            <div className="grid">
                {filtered.map(launcher => (
                    <div key={launcher.id} className="card">
                        <h3>{launcher.name}</h3>
                        <p>city: {launcher.city}</p>
                        <p>rocket type: {launcher.rocketType}</p>
                        <div className="actions">
                            <Link to={`/details/${launcher.id}`}>deyails</Link>
                            <button onClick={() => removeLauncher(launcher.id)}>delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;