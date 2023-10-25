/* 영화앱 */
import React, { Component } from 'react'
import axios from 'axios';
class App extends Component {
  state = {
    isLoading: true,
    // 받아온 영화데이터 저장할 배열
    movie: [],
  }
  render() {
    // 동적데이터 state 영역에 있는 값을 구조분해할당으로 넣어줌 
    const {isLoading} = this.state;
    return (
      <div>
        {/* 초깃값이  true이므로 Loading중...이 브라우저에 그려짐 */}
        { isLoading ? 'Loading중...' : '리액트앱 준비완료!!...' }
      </div>
    )
  }
/* 
  axios 
  = HTTP 통신 라이브러리 중 하나 , 사용법 설명이 잘 되어 있고 API가 다양함
  = 자바스크립트 fetch() 대신 사용
  = 영화 API 가져오는 용도로 사용할 것임
  [설치] cmd > npm i axios

  [참고]
  axios는 네크워크를 사용하므로 다소 느리게 동작
  axios.get()이 실행이 끝날때까지 좀 기다려달라고 자바스크립트에게 (친절히) 알려줘야함
  => 모든 데이터를 불러온 다음에 사용이 가능(제이쿼리 document.ready()개념과 비슷)
  => await async 사용 = 둘이 짝궁
  (체크) 가끔 API가 오작동하여 axios.get()이 제대로 실행이 안될때 => 조금 기다렸다가 다시 리액트 앱 실행

*/
  // #b. async : 자바스트립트에게 getMovies 함수는 바로 실행되지 않고 기다릴 시간이 필요해~라고 알려줌 
  //             (비동기로 전환 => 바로 실행되지 않음)
  getMovies = async () => {
    // #a. await : 자바스크립트에게 axios.get()이 데이터를 다 받을때까지 실행하지말고 기다려~라고 명령
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // 주소창의 모든 데이터 콘솔 출력 => {} 객체 형태
    console.log(movies);
    // 모든 데이터 중에 movies데이터만 콘솔에 출력 => data > data > movies[] 구조
    console.log(movies.data.data.movies);
  }
  
  /* 생명주기 함수 componentDidMount() = render()호출 후 실행됨 */
  /* 영화앱 로딩역할 하는 함수 = 컴포넌트가 마운트 되면서 axios.get() 실행되면 영화 API가져옴 */
  componentDidMount(){
    /* setTimeout(()=>{
      this.setState({ isLoading:false });
    },5000); */
    this.getMovies();
  }



} // end of component

export default App
