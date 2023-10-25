import React from 'react'
import './products.css'

function Products() {
  return (
    <section className="products w1440">
        <ul>
            <li>
                <div>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/koKR/Images/fw23-ivp-launch-hp-tc-d_tcm215-1033337.jpg" alt="이미지"/>
                </div>
                <h3>IVY PARADISE</h3>
                <h4>새로운 발견, 여름의 파라다이스</h4>
                <h5>지금 구매하기</h5>
            </li>
            <li>
                <div>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/koKR/Images/230601_ss23-arsenal-tcc-d_tcm215-1028452.jpg" alt="이미지"/>
                </div>
                <h3>아스날 23/24 클럽 홈 저지</h3>
                <h4>2003/2004년 클럽의 무패우승 황금기의 20주년 기념 홈 저지</h4>
                <h5>지금 구매하기</h5>
            </li>
            <li>
                <div>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/koKR/Images/HP_TC_KIDS_LEGO_0627-d_tcm215-1037056.jpg" alt="이미지"/>
                </div>
                <h3>Kids ADIDAS X LEGO®</h3>
                <h4>상상만큼 커지는 우리들의 놀이터를 아디다스 레고® 컬렉션과 함께 만들어 보세요.</h4>
                <h5>지금 구매하기</h5>
            </li>
            <li className="no_mr">
                <div>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/koKR/Images/running-shoe-finder-attract-fw22-digital-hp-teaser-carousel-d_tcm215-938990.jpg" alt="이미지"/>
                </div>
                <h3>Ready, set, find.</h3>
                <h4>아디다스 러닝화 파인더와 함께 나를 위한 완벽한 러닝화 핏을 찾아보세요.</h4>
                <h5>테스트 시작하기</h5>
            </li>
        </ul>
    </section>
  )
}

export default Products