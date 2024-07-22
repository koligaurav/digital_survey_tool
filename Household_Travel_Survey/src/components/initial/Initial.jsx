import React,{useState} from 'react'
import './Initial.css'

function Initial() {
    const [date, setDate] = useState('');
    const [wardNumber, setWardNumber] = useState('');

  const handleChange = (event) => {
    let inputDate = event.target.value;
    
    // Ensure only numbers and '/' are allowed
    if (/^\d{0,2}\/\d{0,2}\/\d{0,4}$/.test(inputDate) || inputDate === '') {
      setDate(inputDate);
    }}
    const handleChange1 = (event) => {
        // Assuming you want to limit input to numbers only
        let inputWardNumber = event.target.value;
        
        // Ensure only numeric characters are allowed
        if (/^\d*$/.test(inputWardNumber) || inputWardNumber === '') {
          setWardNumber(inputWardNumber);
        }}
        const [enumeratorCode, setEnumeratorCode] = useState('');

  const handleChange2 = (event) => {
    let inputEnumeratorCode = event.target.value;
    
    // Assuming you want to limit input to alphanumeric characters and possibly dashes or underscores
    if (/^[a-zA-Z0-9_-]*$/.test(inputEnumeratorCode) || inputEnumeratorCode === '') {
      setEnumeratorCode(inputEnumeratorCode);
    }
  }
  return (
    <div className='header'>
  
    <div className='Ward'>
    <label  htmlFor="wardInput">Enter Ward No:<span className="required">*</span></label>
      <input
        type="text"
        id="wardInput"
        name="wardInput"
        placeholder="Ward No"
        value={wardNumber}
        onChange={handleChange1}
        required
      />
    </div>
    <div className='Enumerator'>
      <label htmlFor="enumeratorCodeInput">Enter Enumerator Code:<span className="required">*</span></label>
      <input
        type="text"
        id="enumeratorCodeInput"
        name="enumeratorCodeInput"
        placeholder="Enumerator Code"
        value={enumeratorCode}
        onChange={handleChange2}
        required
      />
    </div>
    <div className='Date'>
      <label htmlFor="dateInput">Enter Date (DD/MM/YY):<span className="required">*</span></label>
      <input
        type="text"
        id="dateInput"
        name="dateInput"
        placeholder="DD/MM/YY"
        value={date}
        onChange={handleChange}
        maxLength={8} // Limit to 8 characters (DD/MM/YY)
        required
      />
    </div>
    
   
    </div>
  )
}

export default Initial
