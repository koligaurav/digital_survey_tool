import React, { useState } from 'react';
import './Address.css';

const Address = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    const phonePattern = /^\+[1-9]{1}[0-9]{1,3}[0-9]{10}$/; // Regex for country code + 10 digits
    if (!phonePattern.test(value)) {
      setErrorMessage('Phone number must include country code and 10 digits');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="address1" className="form-label">
          2. Address of Household: <span className="required">*</span>
        </label>
        <input
          type="text"
          id="address1"
          className="form-input"
          placeholder="House/Flat no., House /Building name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="address2"
          className="form-input"
          placeholder="Street name/no., Area/Colony name, Landmark(if any)"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          id="pinCode"
          className="form-input"
          placeholder="Pin Code"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="form-label">
          Phone No.: <span className="required">*</span>
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="+123456789012"
          className="form-input"
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Address;
