import React, { useState } from 'react';

const HouseholdReferenceForm = () => {
  const [householdRefNo, setHouseholdRefNo] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/, ''); // Ensure only numeric input

    if (numericValue.length <= 10) {
      setHouseholdRefNo(numericValue);
      setError('');
    } else {
      setError('Household Reference No. must be exactly 10 digits.');
    }
  };

  const handleBlur = () => {
    if (householdRefNo.length !== 10) {
      setError('Household Reference No. must be exactly 10 digits.');
    }
  };

  return (
    <div className="household-reference-form">
      <label htmlFor="household-ref-no" className="input-label">
      <h4 className='text'>0. Household Reference No.:<span className="required">*</span></h4> 
        
      </label>
      <input
        type="text"
        id="household-ref-no"
        name="household-ref-no"
        className="input-box"
        value={householdRefNo}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        pattern="\d{10}"
        title="Household Reference No. must be exactly 10 digits."
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default HouseholdReferenceForm;
