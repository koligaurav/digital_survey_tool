import React from 'react';
import './VehicleForm.css';

const VehicleForm = () => {
  return (
    <form className="vehicle-form">
      <h3>6. a) Number of Vehicles in the Household:</h3>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>Vehicle Type</th>
            <th>Petrol/Diesel</th>
            <th>CNG</th>
            <th>Electric</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cars/Jeeps/SUVs/Vans used for personal-use</td>
            <td><input type="text" name="cars-petrol" /></td>
            <td><input type="text" name="cars-cng" /></td>
            <td><input type="text" name="cars-electric" /></td>
          </tr>
          <tr>
            <td>Two-wheelers</td>
            <td><input type="text" name="two-wheelers-petrol" /></td>
            <td><input type="text" name="two-wheelers-cng" /></td>
            <td><input type="text" name="two-wheelers-electric" /></td>
          </tr>
          <tr>
            <td>Auto-rickshaws</td>
            <td><input type="text" name="auto-rickshaws-petrol" /></td>
            <td><input type="text" name="auto-rickshaws-cng" /></td>
            <td><input type="text" name="auto-rickshaws-electric" /></td>
          </tr>
          <tr>
            <td>Others (Please specify)</td>
            <td><input type="text" name="others-petrol" /></td>
            <td><input type="text" name="others-cng" /></td>
            <td><input type="text" name="others-electric" /></td>
          </tr>
          <tr>
            <td>Bicycles</td>
            <td colSpan="3"><input type="text" name="bicycles" className="full-width-input" /></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default VehicleForm;
