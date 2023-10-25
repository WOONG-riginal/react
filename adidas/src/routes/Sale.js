import React from 'react'
import './sale.css'
import Header from '../structure/Header'
import Aside from '../structure/Aside'
import Footer from '../structure/Footer'
import {Link} from 'react-router-dom'

function Sale() {
  return (
    <div>
        <Header/>
        <section className="sale w1440">
            <h2>SEASON OFF SALE</h2>
            <h3>아디다스 SEASON OFF SALE 인기제품 최대 40% 할인 + 전 제품 무료배송 혜택 (6.23 -7.2)</h3>
            <ul>
                <li>
                    <Link to="/Detail/">
                        <div>
                            <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a596ec7a54344c709cf6af5d011efcc0_9366/Brown_HR2975_21_model.jpg" alt="세일상품"/>
                            <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                            <h4>-40 %</h4>
                            <p><del>259,000원</del> <span className="redPrice">155,400원</span></p>
                        </div>
                        <h5>마이쉘터 레인레디 재킷</h5>
                        <p>남성 Outdoor</p>
                    </Link>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e1ec980c86b946fa90eaad5c0089066d_9366/E5_White_H03075_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-40 %</h4>
                        <p><del>149,000원</del> <span className="redPrice">89,400원</span></p>
                    </div>
                    <h5>레트로피E5</h5>
                    <p>남성 originals</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a62848856da3426eab1cae9e012dd864_9366/BW_White_HP5515_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-30 %</h4>
                        <p><del>139,000원</del> <span className="redPrice">97,300원</span></p>
                    </div>
                    <h5>BW 아미</h5>
                    <p>Lifestyle</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/1b07bdde67c24ad58833af4700ce648e_9366/Beige_HQ9916_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-40 %</h4>
                        <p><del>59,000원</del> <span className="redPrice">35,400원</span></p>
                    </div>
                    <h5>아디케인 클로그</h5>
                    <p>sportwear</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c35e57ce960e4ba6956aaf230107831c_9366/White_GZ9794_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-30 %</h4>
                        <p><del>119,000원</del> <span className="redPrice">83,300원</span></p>
                    </div>
                    <h5>라이벌리 로우</h5>
                    <p>남성 originals</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/6e0146df957c4f82ba1fac01012ece3d_9366/AX3_Black_FX4575_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-40 %</h4>
                        <p><del>139,000원</del> <span className="redPrice">83,400원</span></p>
                    </div>
                    <h5>테렉스 AX3</h5>
                    <p>남성 Outdoor</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/8c57a679f8bf4b03a05caf29012331b9_9366/Green_HQ2033_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-40 %</h4>
                        <p><del>59,000원</del> <span className="redPrice">35,400원</span></p>
                    </div>
                    <h5>슈무포일 슬라이드</h5>
                    <p>남성 originals</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e5646514991140efbb6caf500115bf11_9366/Grey_HQ9915_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-40 %</h4>
                        <p><del>55,000원</del> <span className="redPrice">33,000원</span></p>
                    </div>
                    <h5>아디케인 슬라이드</h5>
                    <p>sportswear</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/fe27764fa46e41aaade8af5d010e80da_9366/23_Gold_HT7122_21_model.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-30 %</h4>
                        <p><del>119,000원</del> <span className="redPrice">83,300원</span></p>
                    </div>
                    <h5>자메이카 23 홈 저지</h5>
                    <p>남성 Football</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/870b09b380e64cb69408af1c004765de_9366/86_White_FZ6317_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-30 %</h4>
                        <p><del>129,000원</del> <span className="redPrice">90,300원</span></p>
                    </div>
                    <h5>라이벌리 로우 86</h5>
                    <p>남성 originals</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e9c82ec49ce24ce7b0a0aec200dbbc65_9366/White_GW4365_01_standard.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-20 %</h4>
                        <p><del>109,000원</del> <span className="redPrice">87,200원</span></p>
                    </div>
                    <h5>스텔라 클로그</h5>
                    <p>여성 adidas by Stella McCartney</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b9ff1a2a16fd47608e65af88011470c8_9366/Black_IC9717_21_model.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-30 %</h4>
                        <p><del>305,000원</del> <span className="redPrice">312,500원</span></p>
                    </div>
                    <h5>스텔라 트루페이스 러닝 재킷</h5>
                    <p>여성 adidas by Stella McCartney</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c9e656a4e71467faf60af3501053f06_9366/daewons-%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EB%B0%98%ED%8C%94-%ED%8B%B0.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-40 %</h4>
                        <p><del>59,000원</del> <span className="redPrice">35,400원</span></p>
                    </div>
                    <h5>Daewon's 비즈니스 반팔 티</h5>
                    <p>남성 originals</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/48bc80043ae8489f9478afbd009955cf_9366/opt-%ED%8A%B8%EB%A0%88%EC%9D%B4%EB%8B%9D-%EB%9F%AD%EC%8A%A4-7-8-%EB%A0%88%EA%B9%85%EC%8A%A4.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-40 %</h4>
                        <p><del>119,000원</del> <span className="redPrice">71,400원</span></p>
                    </div>
                    <h5>Opt 트레이닝 럭스 7/8 레깅스</h5>
                    <p>Women Gym & Training</p>
                </li>
                <li>
                    <div>
                        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e733b86e9b56427795efae21005d39c1_9366/%EC%8B%9C%ED%8B%B0-%EB%A7%88%EB%9D%BC%ED%86%A4-pt.jpg" alt="세일상품"/>
                        <h4><i className="fa fa-heart-o" aria-hidden="true"></i></h4>
                        <h4>-20 %</h4>
                        <p><del>119,000원</del> <span className="redPrice">95,200원</span></p>
                    </div>
                    <h5>시티 마라톤 PT</h5>
                    <p>남성 Lifestyle</p>
                </li>
            </ul>
        </section>
        <Aside/>
        <Footer/>
    </div>
  )
}

export default Sale