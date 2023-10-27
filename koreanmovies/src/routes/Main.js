import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie'
import './main.css'

export class Main extends Component {

    state = {
        isLoading: true,
        movies: [],
    }

    getMovies = async () => {
        const {
            data: {
                data: { results },
            },
        } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=7a14af6465544bb4abe27c2aeada74d1&language=ko&page=1&region=kr');

        this.setState( { results, isLoading: false } );
    }

    componentDidMount(){
        this.getMovies();
    }

    render(){
        const {isLoading, results} = this.state;

        return (
            <section class="movies w1200">
          { isLoading ? (
            <div className='loader'>
              <img src='./images/loading.gif' alt='로딩중'></img>
            </div>
          ) : (
            <ul>
              { results.map(movie => (
                <Movie 
                  key = { movie.id }
                  id = { movie.id }
                  release_date = { movie.release_date }
                  title = { movie.title }
                  overview = { movie.overview }
                  poster = { movie.poster_path }
                  bgimg = {movie.backdrop_path}
                  genres = { movie.genre_ids }
                  rate = {movie.vote_average}
                />
              ))}
            </ul>
          )}
      </section>
    )
  }
}

export default Main