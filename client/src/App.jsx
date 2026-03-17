import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddLauncherPage from './pages/AddLauncherPage';
import DetailsPage from './pages/DetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">בית</Link>
        <Link to="/add">הוספת משגר</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddLauncherPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;