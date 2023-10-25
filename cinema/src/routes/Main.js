import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import './main.css';
export class Main extends Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    
    this.setState( { movies, isLoading: false } );
  }
  
  componentDidMount(){
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section class="movies w1200">
          { isLoading ? (
            <div className='loader'>
              <img src='./images/loading.gif' alt='로딩중'></img>
            </div>
          ) : (
            <ul>
              { movies.map(movie => (
                <Movie 
                  key = { movie.id }
                  id = { movie.id }
                  year = { movie.year }
                  title = { movie.title }
                  summary = { movie.summary }
                  poster = { movie.medium_cover_image }
                  genres = { movie.genres }
                  rate = {movie.rating}
                />
              ))}
            </ul>
          )}
      </section>
    )
  }
}

export default Main