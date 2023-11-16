import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
        <h1 className="logo"><img src="https://cdn-icons-png.flaticon.com/512/3721/3721881.png" alt="로고" />WEATHER APP</h1>
        <nav className="navbar">
            <ul>
                <li>기상예보</li>
                <li>지역으로 검색</li>
                <li>지도에서 검색</li>
            </ul>
        </nav>
    </header>
  )
}
