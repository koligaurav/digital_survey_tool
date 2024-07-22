import React from 'react';
import './EnumeratorForm.css'
const EnumeratorForm = () => {
  return (
    <div  className=" fisrt">

      
      <form>
        <div className='second'>
       <h4 className='text'>1. a) Name of the Enumerator:<span className="required">*</span></h4> 
          <label htmlFor="enumeratorName" className='third'>
          
          </label>
          <input
            type="text"
            id="enumeratorName"
            name="enumeratorName"
            placeholder='ennumeratorName'
            required
          />
        </div>
        <div className='fourth'>
          <h4 className='text'> 1. b) Location Code:<span className="required">*</span></h4>
       
          <label className='fifth'>
          
          </label>
          <input
            type="text"
            id="locationCode"
            name="locationCode"
            placeholder='locationcode'
            required
          />
        </div>
      </form>
    </div>
  );
};

export default EnumeratorForm;
