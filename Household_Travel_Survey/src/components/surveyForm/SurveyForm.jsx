import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    travelOption: '',
    workFromHomeDays: '',
    workFromHomeDaysPreCovid: '',
    drivingLicense: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form className="survey-form">
      <h3>(The following 3 questions are applicable only for employed persons)</h3>

      <div className="form-group">
        <label> <h3>15. Do you have an employer provided travel option?</h3></label>
        <div className="options">
          <label>
            <input 
              type="radio" 
              name="travelOption" 
              value="Yes" 
              checked={formData.travelOption === 'Yes'} 
              onChange={handleChange} 
            />
            Yes
          </label>
          <label>
            <input 
              type="radio" 
              name="travelOption" 
              value="No" 
              checked={formData.travelOption === 'No'} 
              onChange={handleChange} 
            />
            No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label><h3>16. How many days do you work from Home without going to the office?</h3></label>
        <div className="options">
          <label>
            <input 
              type="radio" 
              name="workFromHomeDays" 
              value="No" 
              checked={formData.workFromHomeDays === 'No'} 
              onChange={handleChange} 
            />
            No
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDays" 
              value="1-2 days a month" 
              checked={formData.workFromHomeDays === '1-2 days a month'} 
              onChange={handleChange} 
            />
            Yes, 1-2 days a month
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDays" 
              value="3-4 days a month" 
              checked={formData.workFromHomeDays === '3-4 days a month'} 
              onChange={handleChange} 
            />
            Yes, 3-4 days a month
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDays" 
              value="1-2 days a week" 
              checked={formData.workFromHomeDays === '1-2 days a week'} 
              onChange={handleChange} 
            />
            Yes, 1-2 days a week
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDays" 
              value="3-4 days a week" 
              checked={formData.workFromHomeDays === '3-4 days a week'} 
              onChange={handleChange} 
            />
            Yes, 3-4 days a week
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDays" 
              value="5 or more days a week" 
              checked={formData.workFromHomeDays === '5 or more days a week'} 
              onChange={handleChange} 
            />
            Yes, 5 or more days a week
          </label>
        </div>
      </div>

      <div className="form-group">
        <label><h3>17. Before COVID-2019, how many days did you work from Home without going to the office?</h3></label>
        <div className="options">
          <label>
            <input 
              type="radio" 
              name="workFromHomeDaysPreCovid" 
              value="No" 
              checked={formData.workFromHomeDaysPreCovid === 'No'} 
              onChange={handleChange} 
            />
            No
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDaysPreCovid" 
              value="1-2 days a month" 
              checked={formData.workFromHomeDaysPreCovid === '1-2 days a month'} 
              onChange={handleChange} 
            />
            Yes, 1-2 days a month
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDaysPreCovid" 
              value="3-4 days a month" 
              checked={formData.workFromHomeDaysPreCovid === '3-4 days a month'} 
              onChange={handleChange} 
            />
            Yes, 3-4 days a month
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDaysPreCovid" 
              value="1-2 days a week" 
              checked={formData.workFromHomeDaysPreCovid === '1-2 days a week'} 
              onChange={handleChange} 
            />
            Yes, 1-2 days a week
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDaysPreCovid" 
              value="3-4 days a week" 
              checked={formData.workFromHomeDaysPreCovid === '3-4 days a week'} 
              onChange={handleChange} 
            />
            Yes, 3-4 days a week
          </label>
          <label>
            <input 
              type="radio" 
              name="workFromHomeDaysPreCovid" 
              value="5 or more days a week" 
              checked={formData.workFromHomeDaysPreCovid === '5 or more days a week'} 
              onChange={handleChange} 
            />
            Yes, 5 or more days a week
          </label>
        </div>
      </div>

      <div className="form-group">
        <label><h3>18. Do you have a Driving License?</h3></label>
        <div className="options">
          <label>
            <input 
              type="radio" 
              name="drivingLicense" 
              value="Yes" 
              checked={formData.drivingLicense === 'Yes'} 
              onChange={handleChange} 
            />
            Yes
          </label>
          <label>
            <input 
              type="radio" 
              name="drivingLicense" 
              value="No" 
              checked={formData.drivingLicense === 'No'} 
              onChange={handleChange} 
            />
            No
          </label>
          <label>
            <input 
              type="radio" 
              name="drivingLicense" 
              value="NA" 
              checked={formData.drivingLicense === 'NA'} 
              onChange={handleChange} 
            />
            NA (Not Applicable)
          </label>
        </div>
      </div>
    </form>
  );
};

export default SurveyForm;
