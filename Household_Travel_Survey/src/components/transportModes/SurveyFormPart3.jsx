import React from 'react';


function SurveyFormPart3() {
  return (
    <div className="App">
      <form>
        <h2>
          (The following question is applicable only if the person has used transit in the last 6 months)
        </h2>
        <div className="transit-section">
          <div className="left-column">
            <label>
              <input type="checkbox" name="dailyBusPass" /> Daily Bus Pass
            </label>
            <label>
              <input type="checkbox" name="weeklyBusPass" /> Weekly Bus Pass
            </label>
            <label>
              <input type="checkbox" name="monthlyBusPass" /> Monthly Bus Pass
            </label>
          </div>
          <div className="middle-column">
            <label>
              <input type="checkbox" name="studentPass" /> Student Pass
            </label>
            <label>
              <input type="checkbox" name="premiumVajraPass" /> Premium Vajra Pass
            </label>
            <label>
              <input type="checkbox" name="vayuVajraGoldPass" /> Vayu Vajra Gold Pass
            </label>
          </div>
          <div className="right-column">
            <label>
              <input type="checkbox" name="metroPass" /> Metro Pass
            </label>
            <label>
              <input type="checkbox" name="otherPass" /> Other type of Pass
            </label>
            <label>
              <input type="checkbox" name="noPass" /> Not used any Pass
            </label>
          </div>
        </div>
        <label className="transit-not-used">
          <input type="checkbox" name="transitNotUsed" /> Transit NOT USED in the last 6 months
        </label>
      </form>
    </div>
  );
}

export default SurveyFormPart3;
