import React from 'react';
import './SurveyFormPart1.css';

const SurveyFormPart1 = () =>{
    return (
      <form className="survey-form">
        <div className="question">
          <label>
           <h3>19. b) Have you travelled by the following intermediate public transport modes at least once in the last 6 months?</h3> 
          </label>
          <div className="form-content">
            <div className="left-column">
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" />
                  No
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" />
                  Auto-rickshaw
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" />
                  Office Cab/Van
                </label>
              </div>
            </div>
            <div className="right-column">
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" />
                  Ride-hailing Two-wheeler (Ola/Uber, etc.)
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" />
                  Ride-hailing Car (Ola/Uber, etc.)
                </label>
              </div>
              <div className="checkbox-container">
                <label>
                  <input type="checkbox" />
                  Rental Vehicle
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };
  

export default SurveyFormPart1;
