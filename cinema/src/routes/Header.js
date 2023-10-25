import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div class="w1200">
            <nav>
                <ul>
                    <input type="checkbox" id="menuicon"/>
                    <label for="menuicon" class="ham">
                        <span></span>
                        <span></span>
                    </label>
                    <li>영화</li>
                    <li>예매</li>
                    <li>극장</li>
                </ul>
            </nav>
            <h1 class="logo"><Link to="/"><img src="./images/c54f67eb87181a3e6b628d4865307b65.jpg" alt="로고"/></Link></h1>
            <nav>
                <ul>
                    <li>이벤트</li>
                    <li>스토어</li>
                    <li>혜택</li>
                    <li><i class="fa fa-user" aria-hidden="true"></i></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header