import React, {useContext} from 'react';
import {Outlet} from "react-router";
import {LanguageContext} from "../context/LanguageContext.js";

const Contact = () => {
  document.title = 'Contact';
  const language = useContext(LanguageContext);

  return (
    <div className="contact content">
      <h1>{language === 'EN' ? 'Contact page' : 'Сторінка контактів'}</h1>
      <Outlet/>
    </div>
  );
};

export default Contact;