import React, { useState } from 'react';
import '../styles/Skills.css'; // 외부 CSS 파일 임포트

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', percentage: 70 },
        { name: 'C#(ASP.NET)', percentage: 80 },
        { name: 'Java', percentage: 80 }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', percentage: 75 },
        { name: 'HTML/CSS', percentage: 50 },
        { name: 'JQuery', percentage: 73 },
        { name: 'Bootstrap', percentage: 60 },
        { name: 'AJAX', percentage: 74 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 70 },
        { name: 'Spring', percentage: 92 },
        { name: 'MyBatis', percentage: 92 },
        { name: 'JSP', percentage: 80 }
      ]
    },
    {
      title: 'DevOps & DB',
      skills: [
        { name: 'Docker', percentage: 80 },
        { name: 'AWS', percentage: 55 },
        { name: 'Git', percentage: 75 },
        { name: 'MySQL', percentage: 87 },
        { name: 'MSSQL', percentage: 86 },
        { name: 'Tomcat', percentage: 86 }
      ]
    }
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="skills-section">
      <section className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category) => {
            // 글자 수에 따라 HR 색상 결정
            const hrColor = `hsl(${category.title.length * 20}, 70%, 60%)`;

            return (
              <div key={category.title} className="category">
                <h3 className="category-title">{category.title}</h3>
                <hr className="category-divider" style={{ borderColor: hrColor }} />
                <div className="skills-grid">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-card"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="skill-name">{skill.name}</div>
                      <div className="progress-bar-container">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${skill.percentage}%`,
                            transition: 'width 1s ease-in-out',
                          }}
                        ></div>
                      </div>
                      <div
                        className="progress-text"
                        style={{
                          opacity: hoveredSkill === skill.name ? 1 : 0,
                          transition: 'opacity 0.3s ease-in-out',
                        }}
                      >
                        {skill.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
