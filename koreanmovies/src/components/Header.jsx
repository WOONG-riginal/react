import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
        <div className='header-wrap'>
            <div className='header-left-wrap'>
                <Link style={{display: 'flex', alignItems: 'center'}} to='/'>
                    <img 
                        style={{ width: "185px" , height:"24px"}}
                        src="https://files.readme.io/29c6fee-blue_short.svg"
                        alt="로고"
                    />
                </Link>
                <ul>
                    <li>
                        <Link className='header-nav-item' to='/movie'>영화</Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/tv'>TV 프로그램</Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/person'>인물</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
