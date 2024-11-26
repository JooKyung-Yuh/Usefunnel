import React, { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

const Clients: React.FC = () => {
  useEffect(() => {
    new Swiper('.init-swiper', {
      // Swiper 옵션 설정
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // 필요에 따라 다른 옵션 추가
    })
  }, [])

  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  )
}

export default Clients
