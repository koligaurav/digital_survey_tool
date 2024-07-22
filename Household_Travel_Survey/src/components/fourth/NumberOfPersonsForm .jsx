import React from 'react';
import './NumberOfPersonsForm.css';

const NumberOfPersonsForm = () => {
  return (
    <form className="number-of-persons-form">
      <h3>4. No. of Persons living in the Household:</h3>

      <div className="form-section">
        <div className="form-group">
          <label className="total-label">
            Total
            <input type="text" name="total" className="input-box" />
          </label>
        </div>

        <div className="form-group">
          <label>
            Male
            <input type="text" name="male" className="input-box" />
          </label>
          <label>
            Female
            <input type="text" name="female" className="input-box" />
          </label>
          <label>
            Others
            <input type="text" name="others" className="input-box" />
          </label>
        </div>

        <div className="form-group">
          <label>
            Kids (&lt; 5 years)
            <input type="text" name="kids" className="input-box" />
          </label>
          <label>
            Students (School – up to 10th Standard)
            <input type="text" name="school-students" className="input-box" />
          </label>
          <label>
            Students (College – post 10th Standard)
            <input type="text" name="college-students" className="input-box" />
          </label>
          <label>
            Adults (Employed/Self-employed)
            <input type="text" name="employed-adults" className="input-box" />
          </label>
          <label>
            Adults (Retired)
            <input type="text" name="retired-adults" className="input-box" />
          </label>
          <label>
            Adults (Unemployed)
            <input type="text" name="unemployed-adults" className="input-box" />
          </label>
        </div>
      </div>
    </form>
  );
};

export default NumberOfPersonsForm;
