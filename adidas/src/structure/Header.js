import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header id="header">
        <nav className='w1440'>
            <ul>
                <div className="logo">
                    <Link to="/"><img src="./images/logo.png" alt="로고"/></Link>
                </div>
                <div className="gnb">
                    <li><Link to="#">MEN</Link></li>
                    <li><Link to="#">WOMEN</Link></li>
                    <li><Link to="#">KIDS</Link></li>
                    <li><Link to="#"><span>SPORTS</span></Link></li>
                    <li><Link to="#"><span>BRANDS</span></Link></li>
                    <li><Link to="/Sale/">SEASON OFF SALE</Link></li>
                </div>
                <div className="util">
                    <li><i className="fa fa-search" aria-hidden="true"></i></li>
                    <li><i className="fa fa-user" aria-hidden="true"></i></li>
                    <li><i className="fa fa-heart" aria-hidden="true"></i></li>
                    <li><i className="fa fa-shopping-cart" aria-hidden="true"></i></li>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header