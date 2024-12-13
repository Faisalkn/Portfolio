import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <h1 className="section-title">Education</h1>
      <div className="education-container">
        <div className="education-entry">
          <h3>University of Washington</h3>
          <p>Bachelor's of Science in Computer Science Expected 2026</p>
        </div>
        <div className="education-entry">
          <h3>South Seattle Community College</h3>
          <p>Associate's of Science in Computer Science Graduated 2023</p>
        </div>
      </div>
    </section>
  );
}

export default Education;