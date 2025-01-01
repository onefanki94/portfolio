import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react'; // 아이콘 사용
import '../styles/Footer.css'; // 별도 CSS 파일 임포트

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <p className="footer-text">전화: 010-7538-8442</p>
          <p className="footer-text">이메일: renaitrout@kakao.com</p>
        </div>

        <div className="footer-social">
          <a href="https://github.com/onefanki94" target="_blank" rel="noopener noreferrer">
            <Github className="footer-icon" />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 onefanki94. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
