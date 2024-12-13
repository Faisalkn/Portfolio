import React from 'react';
import './Experiences.css';
import microsoftLogo from '../../assets/microsoft.png';

function Experiences() {
  const experiences = [
    {
      src: microsoftLogo,
      company: 'Microsoft',
      role: 'Software Engineer Intern',
      location: 'Redmond, WA',
      date: 'June 2024 - September 2024',
    },
    {
      src: microsoftLogo,
      company: 'Microsoft',
      role: 'Explore Apprentice Intern',
      location: 'Redmond, WA',
      date: 'June 2023 - September 2023',
    },
    {
      src: microsoftLogo,
      company: 'Microsoft & Cyborg Mobile',
      role: 'New Technologist Intern',
      location: 'Remote',
      date: 'June 2022 - August 2022',
    },
  ];

  return (
    <section id="experiences" className="experiences-container">
      <h1 className="section-title">Experiences</h1>
      <div className="experiences-grid">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <img src={experience.src} alt={experience.company} className="experience-logo" />
            <h3>{experience.company}</h3>
            <p className="experience-role">{experience.role}</p>
            <p>{experience.location}</p>
            <p className="experience-date">{experience.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
