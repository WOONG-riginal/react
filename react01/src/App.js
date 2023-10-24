import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // state에 데이터 저장
  let [맛집, 메뉴변경] = useState(['백돈', '육부단', '쭈꾸미킹', '홍익짬뽕']);
  let [따봉, 따봉변경] = useState(0);

  // 변수에 데이터 저장
  let posts = '가고 싶은 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>우리 동네 맛집</div>
      </div>

      <button onClick={ ()=>{ 메뉴변경(['오제제', '육부단', '쭈꾸미킹', '홍익짬뽕']) }}>버튼</button>

      <div className="list">
        <h3> { 맛집[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
        <p>일식 돈가츠</p>
        <hr/>
      </div>
      
      <div className="list">
        <h3> { 맛집[1] } </h3>
        <p>초벌구이 삼겹살</p>
        <hr/>
      </div>
      
      <div className="list">
        <h3> { 맛집[2] } </h3>
        <p>쭈꾸미볶음 + 고르곤졸라피자 + 묵사발</p>
        <hr/>
      </div>
      
      <div className="list">
        <h3> { 맛집[3] } </h3>
        <p>짜장면, 짬뽕, 찹쌀탕수육</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
