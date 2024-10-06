import React from 'react';
import { NavLink } from 'react-router-dom';

function Test() {
  return (
    <nav>
      <NavLink to="/test" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
      <NavLink to="/m" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
    </nav>
  );
}

export default Test;