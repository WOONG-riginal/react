import React from 'react'
import { Link } from 'react-route-dom'

const IMG_BASE_URL = 'http://image.tmdb.org/t/p/w1280';

export default function Movie({ date, title, overview, poster, bgimg, genres, rate }) {
  return (
    <li class="movie">
        <Link to={{ pathname: '/movie-detail', state: { date, title, overview, poster, bgimg, genres, rate }, }}>
            <div class="pic">
                <img src={IMG_BASE_URL + poster} alt={title}/>
            </div>
            <div class="info">
                <h2>{title}</h2>
            </div>
            <div class="additional">
                <h3>
                    {overview}
                </h3>
                <h4>관람평 : <span>{rate}</span></h4>
            </div>
            <div class="curtain"></div>
        </Link>
    </li>
  )
}
