import React from 'react'
import './promotion.css'


function Promotion() {
  return (
    <section className="promos w1440">
        <ul>
            <li>
                <div>
                    <video muted autoplay loop src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/0620_HP_TC1_EOSS_EB-d.mp4"></video>
                </div>
                <h3>인기제품 최대 40% 할인</h3>
                <h4>라이프 스타일 인기제품을 최대 40% 할인가로 만나보세요.</h4>
                <h5>지금 구매하기</h5>
            </li>
            <li>
                <div>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/koKR/Images/0620_HP_TC2_EOSS_EB-d_tcm215-1033900.jpg" alt="이미지"/>
                </div>
                <h3>퍼포먼스 아이템 최대 40% 할인</h3>
                <h4>최고의 퍼포먼스를 서포트하는 스포츠 아이템을 최대 40% 할인가로 만나보세요.</h4>
                <h5>지금 구매하기</h5>
            </li>
            <li>
                <div>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/koKR/Images/0620_HP_TC3_EOSS_EB-d_tcm215-1034011.jpg" alt="이미지"/>
                </div>
                <h3>스포츠웨어 컬렉션 최대 40% 할인</h3>
                <h4>일상에서 편하게 착용할 수 있는 스포츠 웨어 컬렉션을 최대 40% 할인가로 만나보세요.</h4>
                <h5>지금 구매하기</h5>
            </li>
            <li className="no_mr">
                <div>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_800,w_800/koKR/Images/0620_HP_TC4_EOSS_EB-d_tcm215-1034015.jpg" alt="이미지"/>
                </div>
                <h3>썸머 컬렉션 최대 40% 할인</h3>
                <h4>무더운 여름을 시원하게 만들어줄 썸머 컬렉션을 최대 40% 할인가로 만나보세요.</h4>
                <h5>지금 구매하기</h5>
            </li>
        </ul>
    </section>
  )
}

export default Promotion