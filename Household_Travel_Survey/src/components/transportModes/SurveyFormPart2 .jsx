import React, { useState } from 'react';

const SurveyFormPart2 = () => {
  const [formData, setFormData] = useState({
    transportModes: [],
    intermediateTransportModes: []
  });

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => {
      if (checked) {
        return { ...prevState, [name]: [...prevState[name], value] };
      } else {
        return {
          ...prevState,
          [name]: prevState[name].filter((mode) => mode !== value)
        };
      }
    });
  };

  return (
    <form className="survey-form">
      <div className="form-group">
        <label><h3>19. a) Have you travelled by the following private or public transport modes at least once in the last 6 months? (Tick all the modes you used)</h3></label>
        <div className="options">
          <label>
            <input 
              type="checkbox" 
              name="transportModes" 
              value="No" 
              onChange={handleCheckboxChange} 
            />
            No
          </label>
          <label>
            <input 
              type="checkbox" 
              name="transportModes" 
              value="Own Two-wheeler" 
              onChange={handleCheckboxChange} 
            />
            Own Two-wheeler (drove it or was a passenger in it)
          </label>
          <label>
            <input 
              type="checkbox" 
              name="transportModes" 
              value="Own Car" 
              onChange={handleCheckboxChange} 
            />
            Own Car (drove it or was a passenger in it)
          </label>
          <label>
            <input 
              type="checkbox" 
              name="transportModes" 
              value="BMTC Bus" 
              onChange={handleCheckboxChange} 
            />
            BMTC Bus
          </label>
          <label>
            <input 
              type="checkbox" 
              name="transportModes" 
              value="Metro/Train" 
              onChange={handleCheckboxChange} 
            />
            Metro/Train
          </label>
          <label>
            <input 
              type="checkbox" 
              name="transportModes" 
              value="Bicycle" 
              onChange={handleCheckboxChange} 
            />
            Bicycle
          </label>
          <label>
            <input 
              type="checkbox" 
              name="transportModes" 
              value="Carpool or bike pool" 
              onChange={handleCheckboxChange} 
            />
            Carpool or bike pool (share ride with friends/colleagues in their car or two-wheeler) NOT Ola/Uber
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>19. b) Have you travelled by the following Intermediate public transport modes at least once in the last 6 months? (Tick all the modes you used)</label>
        <div className="options">
          <label>
            <input 
              type="checkbox" 
              name="intermediateTransportModes" 
              value="No" 
              onChange={handleCheckboxChange} 
            />
            No
          </label>
          <label>
            <input 
              type="checkbox" 
              name="intermediateTransportModes" 
              value="Auto-rickshaw" 
              onChange={handleCheckboxChange} 
            />
            Auto-rickshaw
          </label>
          <label>
            <input 
              type="checkbox" 
              name="intermediateTransportModes" 
              value="Office Cab/Van" 
              onChange={handleCheckboxChange} 
            />
            Office Cab/Van
          </label>
          <label>
            <input 
              type="checkbox" 
              name="intermediateTransportModes" 
              value="Taxi" 
              onChange={handleCheckboxChange} 
            />
            Taxi (other than Ola/Uber, etc.)
          </label>
          <label>
            <input 
              type="checkbox" 
              name="intermediateTransportModes" 
              value="Ride-hailing Two-wheeler" 
              onChange={handleCheckboxChange} 
            />
            Ride-hailing Two-wheeler (Ola/Uber, etc.)
          </label>
          <label>
            <input 
              type="checkbox" 
              name="intermediateTransportModes" 
              value="Ride-hailing Car" 
              onChange={handleCheckboxChange} 
            />
            Ride-hailing Car (Ola/Uber, etc.)
          </label>
          <label>
            <input 
              type="checkbox" 
              name="intermediateTransportModes" 
              value="Rental Vehicle" 
              onChange={handleCheckboxChange} 
            />
            Rental Vehicle
          </label>
        </div>
      </div>
    </form>
  );
};

export default SurveyFormPart2;
