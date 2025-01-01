import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // 상태 관리 - 링크가 hover 상태인지 아닌지를 추적
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // 스타일 객체들
  const headerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
    height: '50px',
    lineHeight: '50px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'right',
  };

  const navListStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    margin: 0,
  };

  const navItemStyle = {
    margin: '0 15px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s', // 부드러운 색상 전환
  };

  // 링크에 마우스 올리면 색상 변경
  const getLinkStyle = (index) => ({
    ...linkStyle,
    color: hoveredIndex === index ? '#ff6347' : 'white', // 호버 시 색상 변경
  });

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li
            style={navItemStyle}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link to="/" style={getLinkStyle(0)}>
              HOME
            </Link>
          </li>
          <li
            style={navItemStyle}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link to="/about" style={getLinkStyle(1)}>
              About
            </Link>
          </li>
          <li
            style={navItemStyle}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link to="/skills" style={getLinkStyle(2)}>
              Skills
            </Link>
          </li>
          <li
            style={navItemStyle}
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link to="/project" style={getLinkStyle(3)}>
              Project
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
