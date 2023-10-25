import React from 'react'
import {Link} from 'react-router-dom'
import './footernav.css'

function FooterNav() {
  return (
    <div className="footer_content">
        <nav className='w1440'>
            <div>
                <h3><Link to="#">PRODUCTS</Link></h3>
                <ul>
                    <li><Link to="#">신상품</Link></li>
                    <li><Link to="#">공식 아울렛</Link></li>
                </ul>
            </div>
            <div>
                <h3><Link to="#">SPORTS</Link></h3>
                <ul>
                    <li><Link to="#">러닝</Link></li>
                    <li><Link to="#">트레이닝</Link></li>
                    <li><Link to="#">아웃도어</Link></li>
                    <li><Link to="#">축구</Link></li>
                    <li><Link to="#">골프</Link></li>
                    <li><Link to="#">요가</Link></li>
                    <li><Link to="#">테니스</Link></li>
                    <li><Link to="#">농구</Link></li>
                    <li><Link to="#">스케이트보딩</Link></li>
                    <li><Link to="#">수영</Link></li>
                    <li><Link to="#">사이클링</Link></li>
                </ul>
            </div>
            <div>
                <h3><Link to="#">COMPANY INFO</Link></h3>
                <ul>
                    <li><Link to="#">회사소개</Link></li>
                    <li><Link to="#">채용정보</Link></li>
                    <li><Link to="#">아디다스 앱</Link></li>
                    <li><Link to="#">컨펌드 앱</Link></li>
                    <li><Link to="#">아디다스 블로그</Link></li>
                </ul>
            </div>
            <div>
                <h3><Link to="#">MEMBERSHIP</Link></h3>
                <ul>
                    <li><Link to="#">아디클럽</Link></li>
                    <li><Link to="#">adidas Runners</Link></li>
                </ul>
            </div>
            <div>
                <h3><Link to="#">SUPPORT</Link></h3>
                <ul>
                    <li><Link to="#">고객센터, 심의수선</Link></li>
                    <li><Link to="#">주문 / 배송 조회</Link></li>
                    <li><Link to="#">FAQ</Link></li>
                    <li><Link to="#">구매 이용약관</Link></li>
                </ul>
            </div>
            <div>
                <h3><Link to="#">FOLLOW US</Link></h3>
                <ul className="sns">
                    <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-music" aria-hidden="true"></i></Link></li>
                    <li><Link to="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default FooterNav