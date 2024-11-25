import React from 'react';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/assets/img/clients/client-1.png" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="/assets/img/clients/client-2.png" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="/assets/img/clients/client-3.png" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="/assets/img/clients/client-4.png" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="/assets/img/clients/client-5.png" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="/assets/img/clients/client-6.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
