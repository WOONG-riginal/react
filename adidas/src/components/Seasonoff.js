import React from 'react'
import './seasonoff.css'
import {Link} from 'react-router-dom'

function Seasonoff() {
  return (
    <section className="seasonOff w1440">
        <h2><Link to="/Sale/">SEASON OFF</Link></h2>
        <h3>최대 40% 할인 6/23~7/2</h3>
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
        </ul>
    </section>
  )
}

export default Seasonoff