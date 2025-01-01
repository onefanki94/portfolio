import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <header className="header">
        <div className="centered-container">
          <h1 className="text-4xl font-bold mb-4">
            ONEFANKI( 이 효 민 ) 풀스택 개발자 포트폴리오
          </h1>
          <div className="hr-div">
            <hr/>
          </div>
          <h2 className="text-2xl font-medium">
  안녕하세요!
</h2>
<h3 className="text-2xl font-medium">
  "한번 시작한 일은 끝까지 한다"는 마음으로
</h3>
<h3 className="text-2xl font-medium">
  풀스택 개발자로 성장하는 이효민입니다.
</h3>
        </div>
      </header>
    </div>
  );
}

export default Home;
