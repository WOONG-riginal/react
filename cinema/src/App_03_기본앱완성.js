import React, { Component } from 'react'
import axios from 'axios';
import './App.css'
import Movie from './Movie';
class App extends Component {
  /* state 동적데이터 */
  state = {
    isLoading: true,
    movies: [],
  }

  /* 영화앱 실행 함수 */
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    
    this.setState( { movies, isLoading: false } );
  }
  
  /* componentDidMount() */
  componentDidMount(){
    this.getMovies();
  }

  /* render() */
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className='container'>
        { isLoading ? (
          <div className='loader'>
            <span className='load_text'>Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            { movies.map(movie => (
              <Movie 
                key = { movie.id }
                id = { movie.id }
                year = { movie.year }
                title = { movie.title }
                summary = { movie.summary }
                poster = { movie.medium_cover_image }
                genres = { movie.genres }
              />
            ))}
          </div>
        )}
      </section>
    )
  }

} // end of component

export default App
