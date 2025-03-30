import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 使用 Routes 替代 Switch
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AnnouncementsPage from './components/AnnouncementsPage';
import EventsPage from './components/EventsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* 使用 element 传递组件 */}
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
