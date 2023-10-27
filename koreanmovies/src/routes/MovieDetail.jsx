import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className='page-container'>
        <div style={{display: 'flex'}}>
            <img 
                style={{width: "300px", height: "450px"}}
                src={IMG_BASE_URL + state.poster_path} 
                alt={title}
            />
            <div>
                <div style={{fontSize: "32px"}}>{title}</div>
                <div>{state.release_date}</div>
                <div>{state.overview}</div>
                <div>평점 : {state.vote_average}</div>
            </div>
        </div>
    </div>
  )
}
