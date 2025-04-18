import React, { useState} from 'react';
import {NavLink, Outlet} from "react-router";
import {LanguageContext} from '../context/LanguageContext.js';


const Layout = () => {

  const [language, setLanguage] = useState('EN');



  function toggleLanguage() {
    setLanguage(language === 'EN' ? 'UA' : 'EN');
  }

  return (
    <>
    <div className="header_menu">
      <ul className="menu_list">
        <li>
          <NavLink to="/">{language === 'EN' ? 'Home' : 'Головна'}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{language === 'EN' ? 'About us' : 'Про нас'}</NavLink>
        </li>
        <li>
          <NavLink to="/contact" end>{language === 'EN' ? 'Contact' : 'Контакти'}</NavLink>
        </li>
        <li>
          <NavLink to="contact/shops">{language === 'EN' ? 'Shops' : 'Крамнички'}</NavLink>
        </li>
      </ul>
      <div className={`language-toggle ${language === 'EN' ? 'active' : ''}`}
           onClick={toggleLanguage}>
        <div className="lang-labels">
          <span>UA</span>
          <span>EN</span>
        </div>
        <div className="toggle-thumb"></div>
      </div>
    </div>
      <LanguageContext.Provider value={language}>
        <Outlet/>
      </LanguageContext.Provider>
    </>
  );
};

export default Layout;