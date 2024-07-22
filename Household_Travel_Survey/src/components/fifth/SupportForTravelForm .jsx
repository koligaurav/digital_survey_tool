import React from 'react';
import './SupportForTravelForm.css';

const SupportForTravelForm = () => {
  return (
    <form className="support-for-travel-form">
      <h3>5. Number of specially-abled persons and elderly persons who need support for travel:</h3>
      <input type="text" name="support-need" className="input-box" />
    </form>
  );
};

export default SupportForTravelForm;
