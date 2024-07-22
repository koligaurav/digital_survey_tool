import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-section">
        <div className="form-group">
          <label className="form-label">12. Occupation:</label>
          <div className="form-options">
            {renderOptions('occupation', [
              'Unemployed', 'Jobseeker', 'Student (part-time)', 'Student (full-time)', 'Homemaker',
              'Employed - Govt (full-time)', 'Employed - Govt (part-time)', 'Employed - Private (part-time)',
              'Employed - Private (full-time)', 'Self Employed', 'Daily Wage', 'Retired', 'Others'
            ])}
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">13. Profession:</label>
          <div className="form-options">
            {renderOptions('profession', [
              'NA (Not Applicable)', 'Agriculture/Forestry/Fishing', 'Govt. (State/Central/Local/Defence/Public Admin)',
              'Construction/Manufacturing/Real-estate', 'Financial Services/Banking/Insurance/Transport/Logistics',
              'Education', 'IT/IT-services & Communication', 'Healthcare/Social Work', 'Own Business/Wholesale or Retail Trade',
              'Hospitality (Accommodation/Hotels)', 'Others'
            ])}
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label className="form-label">14. Individual Monthly Income:</label>
          <div className="form-options">
            {renderOptions('income', [
              'N/A (Not Applicable)', '< 10,000', '10,001 – 25,000', '25,001 – 50,000',
              '50,001 – 1,00,000', '1,00,001 – 2,00,000', '> 2,00,000'
            ])}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">30. Workplace Address or School/College:</label>
          <div className="form-options">
            {renderOptions('workplace', ['School/College', 'Workplace', 'Not Applicable'])}
          </div>
          <label className="form-label">Name of the Company/Organization/School/College:</label>
          <input type="text" placeholder="Name" className="form-input" />
          <label className="form-label">Street name/no., Area/Colony name:</label>
          <input type="text" placeholder="Street name/no., Area/Colony name" className="form-input" />
          <label className="form-label">Landmark (if any):</label>
          <input type="text" placeholder="Landmark" className="form-input" />
        </div>
      </div>
    </div>
  );
};

function renderOptions(name, options) {
  return options.map((option, index) => (
    <div key={index}>
      <input type="radio" id={`${name}${index}`} name={name} value={option.toLowerCase().replace(/ /g, '-')} />
      <label htmlFor={`${name}${index}`}>{option}</label>
    </div>
  ));
}

export default Form;
