import React from 'react'
import './homepage.css'
import {Link} from 'react-router-dom'

function Homepage() {
    const bgPath = `url(https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/koKR/Images/0623_HP_MH_EOSS_MS-d_tcm215-1033891.jpg)`;
    const style = {backgroundImage: bgPath};
    return (
    <section className="homepage">
        <div className="main_img" style={style}>
            <div className="main_img_text">
                <h3>SEASON OFF</h3>
                <h4>아디다스 인기 제품 최대 40%할인 6/23~7/2</h4>
                <Link to="/Sale/"><h5>세일상품 보기 <i className="fa fa-arrow-right" aria-hidden="true"></i></h5></Link>
                <h5>인기제품 보기 <i className="fa fa-arrow-right" aria-hidden="true"></i></h5>
            </div>
        </div>
    </section>
  )
}

export default Homepage