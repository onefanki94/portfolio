import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/ProjectHistory.css'; // 외부 CSS 파일 임포트

const ProjectHistory = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const projects = [
    {
      year: 2014,
      title: '2014년 창업 아이템 경진대회 ( 대학교 )',
      description: '아이템명 : 파티찾기',
      duration: '2014.05.12 ~ 2014.06.09',
      githubRepo: 'https://github.com/onefanki94/ProjectAlpha',
      hasButtons: false,
      skills: ['VisualStudio 2010 C# ASP.NET', 'Microsoft SQL Server 2010 Management Studio', 'photoshop CS3']
    },
    {
      year: 2016,
      title: '졸업과제작품 ( 대학교 )',
      description: '닥터후(DoctorWho) 소개 사이트',
      duration: '2016.11.03 ~ 2014.12.01',
      githubRepo: 'https://github.com/onefanki94/ProjectBeta',
      hasButtons: false,
      skills: ['VisualStudio 2010 C# ASP.NET', 'Microsoft SQL Server 2010 Management Studio', 'photoshop CS3']
    },
    {
      year: 2024.07,
      title: '반응형 문화공간 공유 플랫폼 사이트 (비동기식 요청)',
      description: 'Noah',
      duration: '2024.07.17 ~ 2024.07.25',
      githubRepo: 'https://github.com/onefanki94/miniproject1',
      hasButtons: true,
      skills: ['JAVA', 'HTML5', 'CSS','JavaScript','MYSQL','VisualStudio Code']
    },
    {
        year: 2024.08,
        title: '부산의 축제 및 맛집 소개 ( 공공데이터 및 오픈 API 활용 )',
        description: 'DANDI',
        duration: '2024.08.29 ~ 2024.09.07',
        githubRepo: 'https://github.com/onefanki94/miniproject2',
        hasButtons: true,
        skills: ['JAVA', 'HTML5', 'CSS','JavaScript','MYSQL','STS3','JSP','JQuery','AJAX','Spring MVC','Tomcat']
      },
      {
        year: 2024.09,
        title: '반응형 애니 추천 및 굿즈 판매 쇼핑몰 ( 클라우드 기반 오픈 API 활용 )',
        description: 'ANIWAVE',
        duration: '2024.09.19 ~ 2024.10.30',
        githubRepo: 'https://github.com/onefanki94/finalproject',
        hasButtons: true,
        skills: ['JAVA', 'HTML5', 'CSS','JavaScript','MYSQL','IntelliJ','JSP','JQuery','AJAX','VisualStudio Code', 'Tomcat']
      },
  ];

  const handleBarClick = (project) => {
    setActiveProject(project);
  };

  const openModal = async (type) => {
    if (type === 'readme') {
      // GitHub에서 README.md 파일 불러오기
      try {
        const repoPath = activeProject.githubRepo.replace('https://github.com/', '').replace('.git', '');
        const response = await axios.get(
          `https://api.github.com/repos/${repoPath}/readme`,
          {
            headers: {
              Accept: 'application/vnd.github.v3.raw',
            },
          }
        );
        setModalContent(response.data);  // GitHub README 내용
      } catch (error) {
        setModalContent('Error fetching README file.');
      }
    } else if (type === 'image') {
      setModalContent(<img src="https://via.placeholder.com/400" alt="Project Image" />); // 예시 이미지
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  return (
    <div className="projects-section">
      <section className="projects-container">
        <h2 className="section-title"> 프로젝트 현황 </h2>
        
        <div className="timeline">
          {projects.map((project, index) => (
            <div
              key={index}
              className="timeline-bar"
              style={{
                left: `${(index * 15) + 5}%`,
                zIndex: activeProject === project ? 1 : 0,
              }}
              onClick={() => handleBarClick(project)}
            >
              <span className="timeline-label">{project.year}</span>
            </div>
          ))}
        </div>

        <div className="projects-content">
          {activeProject && (
            <div className="project-card">
              <div className="project-year">{activeProject.year}</div>
              <div className="project-info">
                <h3 className="project-title">{activeProject.title}</h3>
                <p className="project-duration">{activeProject.duration}</p>
                <p className="project-description">{activeProject.description}</p>
                <p className="project-skills">
  {activeProject.skills && activeProject.skills.map((skill, index) => (
    <span key={index}>{skill}</span>
  ))}
</p>
                {/* 버튼들 */}
                {activeProject.hasButtons && (
  <div className="project-actions">
    <button className="btn-readme" onClick={() => openModal('readme')}>
      <i className="fa fa-book"></i> README
    </button>
    <button className="btn-image" onClick={() => openModal('image')}>
      <i className="fa fa-image"></i> 이미지
    </button>
  </div>
)}


              </div>
            </div>
          )}
        </div>
      </section>

      {/* 모달 창 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>X</button>
            <div className="modal-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {modalContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectHistory;
