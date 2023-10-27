import React from 'react'
import { useNavigate } from 'react-router-dom';

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie( props ) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`./${props.title}`, {
        state: props
    })
  }

  return (
    <div className='movie-container' onClick={onClickMovieItem}>
      <img src={IMG_BASE_URL + props.poster_path} alt={props.title} />
      <div className='movie-info'>
        <h4>{props.title.slice(0,19)}</h4>
        <p>{props.release_date}</p>
      </div>
    </div>
  )
}