import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/announcements">公告</Link></li>
        <li><Link to="/events">活动</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
