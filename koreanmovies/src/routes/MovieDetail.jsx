import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className='detail-container' 
          style={{display: 'flex', backgroundImage: 'url(' + IMG_BASE_URL + `${state.backdrop_path})`}}>
        <div className='info-container'>
          <img 
              style={{width: "300px", height: "450px"}}
              src={IMG_BASE_URL + state.poster_path} 
              alt={title}
          />
          <div className='detail-info'>
              <h2>{title}</h2>
              <p>
                {state.release_date} /
                {state.genres.map((genre, i, num)=>{
                  if(i+1 === num.length){
                    return <span> {genre} </span>
                  }else{
                    return <span> {genre}, </span>
                  }
                })}
              </p>
              <h3>개요</h3>
              <p>{state.overview}</p>
              <p>평점 : <span className='red-point'>{state.vote_average}</span></p>
          </div>
        </div>
        <div class="curtain"></div>
    </div>
  )
}
