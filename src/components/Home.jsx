import React, {useContext} from 'react';
import {LanguageContext} from "../context/LanguageContext.js";

const Home = () => {
  document.title = 'Home page';
  const language = useContext(LanguageContext);

  return (
    <div className="home content">
      <h1>{language === 'EN' ? 'Home page' : 'Головна сторінка'}</h1>
    </div>
  );
};

export default Home;