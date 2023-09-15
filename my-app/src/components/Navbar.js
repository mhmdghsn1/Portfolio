import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import logoImages from '../imgs/img1.png'
import Avatar from '@mui/material/Avatar';


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="nav">
        <Breadcrumbs maxItems={3} aria-label="breadcrumb">
          <NavLink
            exact
            activeClassName="active" // التنسيق النشط هنا
            className="nav-link"
            to="/AboutPage"
            onClick={() => handleClick('home')}
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="active" // التنسيق النشط هنا
            className="nav-link"
            to="/Skillss"
            onClick={() => handleClick('certificate')}
          >
            Certificate
          </NavLink>
          <NavLink
            exact
            activeClassName="active" // التنسيق النشط هنا
            className="nav-link"
            to="/Works"
            onClick={() => handleClick('work')}
          >
            Work
          </NavLink>
        </Breadcrumbs>
      </div>

      <div className="profile">
        <img src={logoImages} alt="شعار" className="profile-image" />
        <span className="profile-name">My Portfolio</span>
      </div>
      <div className="logo">
        <Avatar className="logo-image">P</Avatar>
        <div className="logo-text">
          <span className="logo-name">Mohamad F Ghosn</span>
          <br />
          <span className="logo-title">Programmer</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;