import React, {useContext} from 'react';
import {LanguageContext} from '../context/LanguageContext.js';

const Shops = () => {
  document.title = 'Shops';
  const language = useContext(LanguageContext);

  return (
    <div className="shops content">
      <h1>{language === 'EN' ? 'Welcome to our stores at:' : 'Ласкаво просимо до наших магазинів за адресою:'}</h1>
    </div>
  );
};

export default Shops;