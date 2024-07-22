import React from 'react';
import './IncomeForm.css';

function IncomeForm() {
  return (
    <div className="form-container">
      <div className="income-section">
        <label> <h3>7. Household Monthly Income from all sources:</h3></label>
        <div>
          <input type="radio" id="income1" name="income" value="<= 10,000" />
          <label htmlFor="income1"> {"<= 10,000"}</label>
        </div>
        <div>
          <input type="radio" id="income2" name="income" value="10,001 – 25,000" />
          <label htmlFor="income2"> {"10,001 – 25,000"}</label>
        </div>
        <div>
          <input type="radio" id="income3" name="income" value="25,001 – 50,000" />
          <label htmlFor="income3"> {"25,001 – 50,000"}</label>
        </div>
        <div>
          <input type="radio" id="income4" name="income" value="50,001 – 1,00,000" />
          <label htmlFor="income4"> {"50,001 – 1,00,000"}</label>
        </div>
        <div>
          <input type="radio" id="income5" name="income" value="1,00,001 – 2,00,000" />
          <label htmlFor="income5"> {"1,00,001 – 2,00,000"}</label>
        </div>
        <div>
          <input type="radio" id="income6" name="income" value="> 2 Lakh" />
          <label htmlFor="income6"> {"> 2 Lakh"}</label>
        </div>
      </div>
      <div className="delivery-section">
        <label><h3>28. Which of the following do you get delivered to your house on a daily basis?</h3></label>
        <div>
          <input type="checkbox" id="milk" name="delivery" value="Milk" />
          <label htmlFor="milk"> Milk</label>
        </div>
        <div>
          <input type="checkbox" id="newspaper" name="delivery" value="Newspaper" />
          <label htmlFor="newspaper"> Newspaper</label>
        </div>
        <div>
          <label htmlFor="other"> Others (Please Specify)</label>
          <input type="text" id="other" name="other" />
        </div>
      </div>
    </div>
  );
}

export default IncomeForm;
