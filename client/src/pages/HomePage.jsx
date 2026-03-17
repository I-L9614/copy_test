import React, { useEffect, useState } from 'react';
import { getLaunchers, deleteLauncher } from '../api/launcherService';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [launchers, setLaunchers] = useState([])
    const [searchCity, setSearchCity] = useState('')
    const [filterType, setFilterType] = useState('')

//     useEffect(() => { loadData() }, [])

//     return (
//         <div className="container">
//             <h1>ניהול משגרים</h1>
            
//             <div className="filters">
//                 <input 
//                     type="text" 
//                     placeholder="חיפוש לפי עיר..." 
//                     onChange={(e) => setSearchCity(e.target.value)} 
//                 />
//                 <select onChange={(e) => setFilterType(e.target.value)}>
//                     <option value="">כל סוגי הרקטות</option>
//                     <option value="Shahab3">Shahab3</option>
//                     <option value="Fetah110">Fetah110</option>
//                     <option value="Radwan">Radwan</option>
//                     <option value="Kheibar">Kheibar</option>
//                 </select>
//             </div>

//             <div className="grid">
//                 {filtered.map(launcher => (
//                     <div key={launcher.id} className="card">
//                         <h3>{launcher.name}</h3>
//                         <p>עיר: {launcher.city}</p>
//                         <p>סוג: {launcher.rocketType}</p>
//                         <div className="actions">
//                             <Link to={`/details/${launcher.id}`}>פרטים</Link>
//                             <button onClick={() => removeLauncher(launcher.id)}>מחק</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

    const loadData = async () => {
        const data = await getLaunchers()
        setLaunchers(data)
    }

    const removeLauncher = async (id) => {
        await deleteLauncher(id)
        loadData()
    }

    const filtered = launchers.filter(launcher => {
        launcher.city.toLowerCase().includes(searchCity.toLowerCase()) &&
        (filterType === '' || launcher.rocketType === filterType)
    })

    
}
export default HomePage;