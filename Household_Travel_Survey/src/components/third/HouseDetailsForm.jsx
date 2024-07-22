import React from 'react';
import './HouseDetailsForm.css';

const HouseDetailsForm = () => {
  return (
    <div className="house-details">
      <h3>3. House Details:</h3>
      <form>
        <div className="grid-container">
          <div className="section">
            <label>a) Type</label>
            <div>
              <input type="radio" name="type" value="Independent Single House" /> Independent Single House
            </div>
            <div>
              <input type="radio" name="type" value="Multi-storey building with <= 5 units of Housing" /> Multi-storey building with &lt;= 5 units of Housing
            </div>
            <div>
              <input type="radio" name="type" value="Multi-storey building with > 5 units of Housing" /> Multi-storey building with &gt; 5 units of Housing
            </div>
            <div>
              <input type="radio" name="type" value="Apartment with parking, small play area, gym (Medium-sized gated community)" /> Apartment with parking, small play area, gym (Medium-sized gated community)
            </div>
            <div>
              <input type="radio" name="type" value="Apartment with parking, playground, gym, provision store, etc (Large-sized gated community)" /> Apartment with parking, playground, gym, provision store, etc (Large-sized gated community)
            </div>
            <div>
              <input type="radio" name="type" value="Informal Housing" /> Informal Housing
            </div>
          </div>

          <div className="section">
            <label>b) Ownership</label>
            <div>
              <input type="radio" name="ownership" value="Own House" /> Own House
            </div>
            <div>
              <input type="radio" name="ownership" value="Rented House" /> Rented House
            </div>
            <div>
              <input type="radio" name="ownership" value="Govt. Quarters" /> Govt. Quarters
            </div>
            <div>
              <input type="radio" name="ownership" value="Employer Provided" /> Employer Provided
            </div>
            <div>
              <input type="radio" name="ownership" value="Others" /> Others
            </div>
          </div>

          <div className="section">
            <label>c) Size</label>
            <div>
              <input type="radio" name="size" value="1 Room" /> 1 Room
            </div>
            <div>
              <input type="radio" name="size" value="1 Room Kitchen (1 RK)" /> 1 Room Kitchen (1 RK)
            </div>
            <div>
              <input type="radio" name="size" value="1 Bedroom Hall Kitchen (1 BHK)" /> 1 Bedroom Hall Kitchen (1 BHK)
            </div>
            <div>
              <input type="radio" name="size" value="2 Bedroom Hall Kitchen (2 BHK)" /> 2 Bedroom Hall Kitchen (2 BHK)
            </div>
            <div>
              <input type="radio" name="size" value="3 Bedroom Hall Kitchen (3 BHK)" /> 3 Bedroom Hall Kitchen (3 BHK)
            </div>
            <div>
              <input type="radio" name="size" value=">3 Bedroom Hall Kitchen (>3 BHK)" /> &gt;3 Bedroom Hall Kitchen (&gt;3 BHK)
            </div>
          </div>

          <div className="section">
            <label>d) Monthly Rental Value (in Rs.)</label>
            <input type="text" name="monthly-rental-value" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default HouseDetailsForm;
