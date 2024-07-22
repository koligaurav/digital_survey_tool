import React from 'react';
import './PersonInfo.css';

const PersonInfo = () => {
  return (
    <div className="form-container">
      <div className="sections">
        <div className="section">
          <label className="form-label">8. Gender:</label>
          <div className="form-options">
            {renderOptions('gender', ['Male', 'Female', 'Others'])}
          </div>
        </div>

        <div className="section">
          <label className="form-label">9. Age:</label>
          <div className="form-options">
            {renderOptions('age', [
              '5-12 years',
              '13-16 years',
              '17-18 years',
              '19-25 years',
              '26-35 years',
              '36-45 years',
              '46-60 years',
              '> 60 years',
            ])}
          </div>
        </div>

        <div className="section">
          <label className="form-label">10. Relation with Person-1:</label>
          <div className="form-options">
            {renderOptions('relation', [
              'Self',
              'Son/Daughter',
              'Father/Mother',
              'Wife/Husband/Partner',
              'Brother/Sister',
              'Other relative',
              'Not related',
            ])}
          </div>
        </div>

        <div className="section">
          <label className="form-label">11. Education:</label>
          <div className="form-options">
            {renderOptions('education', [
              '< 10th Std. / None',
              '10th Std. (SSLC)',
              '12th Std. (PUC/HSE)',
              'Trade Certificate',
              'Diploma',
              'Graduate degree',
              'Post-graduate degree',
              'Doctorate',
            ])}
          </div>
        </div>
      </div>
    </div>
  );
};

function renderOptions(name, options) {
  return options.map((option, index) => (
    <div key={index}>
      <input type="radio" id={`${name}${index}`} name={name} value={option} />
      <label htmlFor={`${name}${index}`}> {option}</label>
    </div>
  ));
}

export default PersonInfo;
