import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <header>
        <Link to='/'><h1 className="logo"><img src="https://www.kma.go.kr/w/resources/image/gnb_icon_01.png" alt="로고" />WEATHER APP</h1></Link>
        <nav className="navbar">
            <ul>
                <li><Link to='/forecast'>기상예보</Link></li>
                <li><Link to='/searchArea'>상세검색</Link></li>
            </ul>
        </nav>
    </header>
  )
}
