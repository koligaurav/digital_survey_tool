import React from 'react';
import './SurveyFormPart2.css';

function SurveyFormPart2() {
  return (
    <form className="survey-form">
      <div className="question">
        <label>
         <h3> 19. a) Have you travelled by the following private or public transport modes at least once in the last 6 months?</h3>
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
                Own Two-wheeler
                <p>(drove it or was a passenger in it)</p>
              </label>
            </div>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Own Car
                <p>(drove it or was a passenger in it)</p>
              </label>
            </div>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                BMTC Bus
              </label>
            </div>
          </div>
          <div className="right-column">
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Metro/Train
              </label>
            </div>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Bicycle
              </label>
            </div>
            <div className="checkbox-container">
              <label>
                <input type="checkbox" />
                Carpool or bike pool (share ride with friends/colleagues in their car or two-wheeler) NOT Ola/Uber
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SurveyFormPart2;
