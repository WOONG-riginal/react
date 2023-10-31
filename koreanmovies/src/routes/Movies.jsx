import React from 'react'
import { list } from '../moviesList'
import Movie from '../components/Movie'

export default function Movies() {
  return (
    <div>
      <div className='movies-container'>
        {list.results.map((item) => {
          return (
            <Movie 
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date}
              backdrop_path={item.backdrop_path}
              overview={item.overview}
              vote_average={item.vote_average}
              genres={item.genre_ids}
            />
          )
        })}

      </div>
    </div>
  )
}
