import React from 'react';
import './DeliveryForm.css';

function DeliveryForm() {
  return (
    <div className="form-container">
      <label><h3>29. Other than milk and newspaper, how often do you (including all household members) get the following delivered to your house via online purchases/e-commerce?</h3></label>
      <div className="sections">
        <div className="section">
          <label>a) Food:</label>
          <div>(Zomato, Swiggy, etc.)</div>
          {renderOptions('food')}
        </div>
        <div className="section">
          <label>b) Groceries:</label>
          <div>(Bigbasket, Grofers, etc.)</div>
          {renderOptions('groceries')}
        </div>
        <div className="section">
          <label>c) Others (Clothes, electronics, etc.):</label>
          <div>(Amazon, Flipkart, etc.)</div>
          {renderOptions('others')}
        </div>
      </div>
    </div>
  );
}

function renderOptions(name) {
  const options = [
    'No',
    'Rarely',
    'Once a month',
    '2-3 times a month',
    'Once a week',
    '2-3 times a week',
    '4 times or more in a week',
  ];

  return options.map((option, index) => (
    <div key={index}>
      <input type="radio" id={`${name}${index}`} name={name} value={option} />
      <label htmlFor={`${name}${index}`}> {option}</label>
    </div>
  ));
}

export default DeliveryForm;
