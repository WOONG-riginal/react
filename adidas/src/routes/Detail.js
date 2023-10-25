import React from 'react'
import './detail.css'
import Header from '../structure/Header'
import Aside from '../structure/Aside'
import Footer from '../structure/Footer'

function Detail() {
  return (
    <div>
        <Header/>
        <section className="item_detail w1440">
            <nav>
                <span>- 40%</span>
                <ul>
                    <li><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a596ec7a54344c709cf6af5d011efcc0_9366/Brown_HR2975_21_model.jpg" alt="디테일"/></li>
                    <li><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a858d3d5586347a09b61af5d011f0588_9366/Brown_HR2975_23_hover_model.jpg" alt="디테일"/></li>
                    <li><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/89a7f3589a5b4d06a758af5d011f0fc9_9366/Brown_HR2975_25_model.jpg" alt="디테일"/></li>
                    <li><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b0a550e8ad04708b6efaf5d011f474e_9366/Brown_HR2975_01_laydown.jpg" alt="디테일"/></li>
                </ul>
            </nav>
            <div className="info">
                <h2>남성 &#183; Sportswear</h2>
                <h3>마이쉘터 레인레디 재킷</h3>
                <p><del>119,000원</del> <span className="redPrice">95,200원</span></p>
                <h2 className="info_color">Bronze Strata</h2>
                <h4>구입 가능한 사이즈</h4>
                <ul>
                    <li>A/S</li>
                    <li>A/M</li>
                    <li>A/L</li>
                </ul>
                <h5>장바구니 담기 <i className="fa fa-arrow-right" aria-hidden="true"></i></h5>
                <dl>
                    <li><i className="fa fa-truck" aria-hidden="true"></i> 배송/반품</li>
                    <li><i className="fa fa-info-circle" aria-hidden="true"></i> 세탁 및 취급 시 주의사항</li>
                    <li><i className="fa fa-check-circle-o" aria-hidden="true"></i> 품질 보증 및 AS 정보</li>
                    <li><i className="fa fa-check" aria-hidden="true"></i> 상품 제조연월 정보</li>
                </dl>
            </div>
        </section>
        <Aside/>
        <Footer/>
    </div>
  )
}

export default Detail