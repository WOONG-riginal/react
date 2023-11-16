import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
        <h1 className="logo"><img src="https://cdn-icons-png.flaticon.com/512/3721/3721881.png" alt="로고" />WEATHER APP</h1>
        <nav className="navbar">
            <ul>
                <li>지역검색</li>
                <li>기상예보</li>
            </ul>
        </nav>
    </header>
  )
}
