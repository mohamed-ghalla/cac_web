import React, { useState } from 'react';
import '../styles/components/program.css';

const Programs = () => {
  const [questions, setQuestions] = useState([
    "Add question here",
    "Add question here",
    "Add question here",
    "Add question here",

  ]);

  const addQuestion = () => {
    setQuestions([...questions, "Add question here"]);
  };

  return (
    <div className="programs-container">
      <div className="programs-layout">
        {/* Left Column - Program Information */}
        <div className="program-info-section">
          <h2 className="section-title">Program Information</h2>
          <div className="form-fields">
            <input 
              type="text" 
              placeholder="Mobility programs" 
              className="form-input"
            />
            <input 
              type="text" 
              placeholder="Service price" 
              className="form-input"
            />
            
            {/* Number of Weeks - Select Field */}
            <select className="form-select">
              <option value="">Number of weeks</option>
              <option value="1">1 week</option>
              <option value="2">2 weeks</option>
              <option value="3">3 weeks</option>
              <option value="4">4 weeks</option>
              <option value="6">6 weeks</option>
              <option value="8">8 weeks</option>
              <option value="12">12 weeks</option>
              <option value="16">16 weeks</option>
              <option value="24">24 weeks</option>
              <option value="52">52 weeks</option>
            </select>

            {/* Currency - Select Field */}
            <select className="form-select">
              <option value="">Currency</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="CAD">CAD (C$)</option>
              <option value="AUD">AUD (A$)</option>
              <option value="JPY">JPY (¥)</option>
              <option value="CNY">CNY (¥)</option>
              <option value="INR">INR (₹)</option>
            </select>

            <textarea 
              placeholder="Program description" 
              className="form-textarea"
              rows="4"
            />
          </div>
          
          {/* Continue Button at bottom */}
          <div className="button-container">
            <button className="continue-btn">
              Continue
            </button>
          </div>
        </div>

        {/* Right Column - Program Questions */}
        <div className="program-questions-section">
          <h2 className="section-title">Program Questions</h2>
          <div className="form-fields">
            {questions.map((question, index) => (
              <textarea 
                key={index}
                placeholder={question}
                className="form-input question-input"
                value={question}
                onChange={(e) => {
                  const newQuestions = [...questions];
                  newQuestions[index] = e.target.value;
                  setQuestions(newQuestions);
                }}
                rows="2"
              />
            ))}
          </div>
          
          {/* Add Question Button at bottom */}
          <div className="button-container">
            <button className="add-question-btn" onClick={addQuestion}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Add Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;