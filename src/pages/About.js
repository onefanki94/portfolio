import React from 'react';
import { User, Phone, Calendar, Mail, GraduationCap } from 'lucide-react';
import profile from '../assets/me.jpeg';
import profile1 from '../assets/me2.jpeg';
import '../styles/About.css';  // CSS 파일 import

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">ABOUT ME</h1>

      <div className="flex flex-col items-center max-w-lg w-full space-y-12">
        <img src={profile} alt="Profile" className="about-image" />
        <img src={profile1} alt="Profile" className="about-image" />
        <div className="about-info">
          <div className="about-info-item">
            <User className="w-6 h-6 text-gray-400" />
            <p className="label">이름</p>
            <p className="value">이효민</p>
          </div>

          <div className="about-info-item">
            <Phone className="w-6 h-6 text-gray-400" />
            <p className="label">연락처</p>
            <p className="value">010-7538-8442</p>
          </div>

          <div className="about-info-item">
            <Calendar className="w-6 h-6 text-gray-400" />
            <p className="label">생년월일</p>
            <p className="value">94.11.01</p>
          </div>

          <div className="about-info-item">
            <Mail className="w-6 h-6 text-gray-400" />
            <p className="label">이메일</p>
            <p className="value">renaitrout@kakao.com</p>
          </div>

          <div className="about-info-item">
            <GraduationCap className="w-6 h-6 text-gray-400" />
            <p className="label">학력</p>
            <p className="value">두원공과대학교 (컴퓨터공학)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
