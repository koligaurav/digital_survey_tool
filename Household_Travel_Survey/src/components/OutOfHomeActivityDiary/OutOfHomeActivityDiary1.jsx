import React from 'react';
import './OutOfHomeActivityDiary.css';
import outOfHomeImg from './outOfhome.jpg';

const OutOfHomeActivityDiary1 = () => {
  return (
    <div className="diary-container">
   
      <div className="trip-details">
        
      </div>
      <table>
        <thead>
          <tr>
            <th>Trip No.</th>
            <th>Start Location</th>
            <th>When did you leave from the destination location of Trip 1  (Start time of Trip 2)</th>
            <th>Where did you go? Destination of Trip 2 (Address)</th>
            <th>What was the main purpose of your trip to Destn.2?</th>
            <th>Other than the main purpose, what else did you do at Destn.2?</th>
            <th>when did you reach Destn.2 for the main purpose? (End time of Trip 2)</th>
            <th>So, the total time (door-to-door) taken to reach from start location of Trip 2 to Destn.2 is (in minutes)</th>
            <th>Time spent at Destn.2 (in minutes)</th>
            <th>What was the main mode of travel used to reach Destn.2?</th>
            <th>How much fare did you pay to reach Destn.2? (in Rupees)</th>
            <th>Did you pay any parking cost? If yes, then how much did you pay? (in Rupees)</th>
            <th>How many persons came with you?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Home</td>
            <td><input type="time" /></td>
            <td><textarea /></td>
            <td><input type="text" /></td>
            <td><textarea /></td>
            <td><input type="time" /></td>
            <td><input type="number" /></td>
            <td><input type="number" /></td>
            <td><input type="text" /></td>
            <td><input type="number" /></td>
            <td><input type="number" /></td>
            <td>
              <label>No. of family members <input type="number" /></label>
              <label>No. of non-family members <input type="number" /></label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="transit-section">
        <h3>To be filled only in case of use of transit (Bus/Metro) NA</h3>
        <table>
          <thead>
            <tr>
              <th>Trip 2Pattern Type:</th>
              <th>Other Pattern Type (Please specify):</th>
              <th>Mode of Travel</th>
              <th>Travel Time (in minutes)</th>
              <th>Fare paid / Travel Cost (in Rupees)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1<sup>st</sup> Leg</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
            <tr>
              <td>2<sup>nd</sup> Leg</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
            <tr>
              <td>3<sup>rd</sup> Leg</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
            <tr>
              <td>4<sup>th</sup> Leg</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
            <tr>
              <td>Last Leg</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src={outOfHomeImg} alt="Out of Home Activity Diagram" className="activity-diagram" />
      <div className="stop-section">
        <table>
          <thead>
            <tr>
              <th>Did you stop anywhere to do something/activity (other than changing modes) on the way to Destn.2? If yes, how many times did you stop before reaching Destn.2?</th>
              <th>Purpose of 1<sup>st</sup> Stop</th>
              <th>Is the 1<sup>st</sup> Stop on the route to Destn.2?</th>
              <th>Is the travel mode used to reach 1<sup>st</sup> Stop same as the main mode?</th>
              <th>How much travel time did you take to reach the 1<sup>st</sup> Stop?</th>
              <th>How much time did you spend at the 1<sup>st</sup> Stop location?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="number" /></td>
              <td><input type="text" /></td>
              <td>
                <label><input type="radio" name="first-stop-route" /> Yes, On the route</label>
                <label><input type="radio" name="first-stop-route" /> No. What is the additional distance you travelled?</label>
                <input type="text" />
              </td>
              <td>
                <label><input type="radio" name="first-stop-mode" /> Yes, Same as main mode</label>
                <label><input type="radio" name="first-stop-mode" /> No. What is the other mode used to reach 1<sup>st</sup> Stop?</label>
                <input type="text" />
              </td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Is the 2<sup>nd</sup> Stop on the route to Destn.2?</th>
              <th>Is the travel mode used to reach 2<sup>nd</sup> Stop from 1<sup>st</sup> Stop same as the main mode?</th>
              <th>How much travel time did you take to reach the 2<sup>nd</sup> Stop from 1<sup>st</sup> Stop?</th>
              <th>How much time did you spend at the 2<sup>nd</sup> Stop location?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label><input type="radio" name="second-stop-route" /> Yes, On the route</label>
                <label><input type="radio" name="second-stop-route" /> No. What is the additional distance you travelled?</label>
                <input type="text" />
              </td>
              <td>
                <label><input type="radio" name="second-stop-mode" /> Yes, Same as main mode</label>
                <label><input type="radio" name="second-stop-mode" /> No. What is the other mode used to reach 2<sup>nd</sup> Stop?</label>
                <input type="text" />
              </td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>If Trip 2 is a complete non-transit trip, then did you use any non-transit travel mode other than the main mode?</p>
      <div className="non-transit-mode">
        <label><input type="radio" name="non-transit-mode" /> Yes</label>
        <label><input type="radio" name="non-transit-mode" /> No</label>
        <p>If yes, please specify the other mode used:</p>
        <input type="text" />
      </div>
    </div>
  );
};

export default OutOfHomeActivityDiary1;
