import React from 'react';
import './feature.css';

function Feature({ title, description, buttonText, onClick }) {
  return (
    <div className="feature">
        <button onClick={onClick}>{buttonText}</button>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
