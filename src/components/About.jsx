import React, {useContext} from 'react';
import {LanguageContext} from "../context/LanguageContext.js";

const About = () => {

  const language = useContext(LanguageContext);

  return (
    <div className="about content">
      <h1>{language === 'EN' ? 'About page' : 'Про нас'}</h1>
    </div>
  );
};

export default About;