import React from 'react';

const NotFound = () => {
  document.title = 'Ouch';
  return (
    <div className="error content">
      <h1>404 not found</h1>
    </div>
  );
};

export default NotFound;