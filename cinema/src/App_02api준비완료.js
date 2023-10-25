/* 영화앱 */
import React, { Component } from 'react'
import axios from 'axios';
class App extends Component {
  /* state 동적데이터 */
  state = {
    isLoading: true,
    movies: [],
  }

  /* render() */
  render() {
    const {isLoading} = this.state;
    return (
      <div>
        { isLoading ? 'Data Loading...' : 'Movie App Ready' }
      </div>
    )
  }

  /* 영화앱 실행 함수 */
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // console.log(movies); // 구조분해할당으로 변수로 받았기 떄문에 아래 콘솔과 같은 결과가 나옴
    // console.log(movies.data.data.movies);

    // 객체표현식 = 키명:키밸류값이 같을때 축약가능 => movies
    this.setState( { movies:movies, isLoading: false } );
    console.log(movies)
  }
  
  /* 생명주기 함수 componentDidMount() = render()호출 후 실행됨 */
  componentDidMount(){
    this.getMovies();
  }



} // end of component

export default App
