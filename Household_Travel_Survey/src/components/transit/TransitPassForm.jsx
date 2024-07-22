import React from 'react';
import './TransitPassForm.css';

const TransitPassForm = () => {
  return (
    <div className="form-container">
    
      <div className="form-body">
        <h3>20. Do you use any of the following transit passes?</h3>
   
        <div className="form-options">
          <div className="form-column">
            <div className="form-option">
              <input type="checkbox" id="daily-bus-pass" />
              <label htmlFor="daily-bus-pass">Daily Bus Pass</label>
            </div>
            <div className="form-option">
              <input type="checkbox" id="weekly-bus-pass" />
              <label htmlFor="weekly-bus-pass">Weekly Bus Pass</label>
            </div>
            <div className="form-option">
              <input type="checkbox" id="monthly-bus-pass" />
              <label htmlFor="monthly-bus-pass">Monthly Bus Pass</label>
            </div>
          </div>
          <div className="form-column">
            <div className="form-option">
              <input type="checkbox" id="student-pass" />
              <label htmlFor="student-pass">Student Pass</label>
            </div>
            <div className="form-option">
              <input type="checkbox" id="premium-vajra-pass" />
              <label htmlFor="premium-vajra-pass">Premium Vajra Pass</label>
            </div>
            <div className="form-option">
              <input type="checkbox" id="vayu-vajra-gold-pass" />
              <label htmlFor="vayu-vajra-gold-pass">Vayu Vajra Gold Pass</label>
            </div>
          </div>
          <div className="form-column">
            <div className="form-option">
              <input type="checkbox" id="metro-pass" />
              <label htmlFor="metro-pass">Metro Pass</label>
            </div>
            <div className="form-option">
              <input type="checkbox" id="other-pass" />
              <label htmlFor="other-pass">Other type of Pass</label>
            </div>
            <div className="form-option">
              <input type="checkbox" id="no-pass" />
              <label htmlFor="no-pass">Not used any Pass</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitPassForm;
