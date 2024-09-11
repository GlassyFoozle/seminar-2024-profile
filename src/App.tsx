import './App.css';

import brianpfp from './assets/brian_githubpfp.jpg';

function App() {
  return (
    <>
      <div className="profile">
        <p className="hide">고양이 클릭해서 GitHub 가보기!</p>
        <a
          href="https://github.com/GlassyFoozle"
          target="_blank"
          rel="noreferrer"
        >
          <img src={brianpfp} className="pfp" alt="profile image" />
        </a>

        <h1>김채민</h1>
      </div>
      <div className="details">
        <ul>
          <li>조선해양공학과 20학번 01년생</li>
          <li>개발 막 시작하는 뉴비</li>
          <li>취미는 여행, 스포츠 관람, 게임 등</li>
          <li>MBTI는 ISFJ입니다!</li>
        </ul>
      </div>
    </>
  );
}

export default App;
