import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>브랜드의 글로벌 도약, 유즈퍼널과 함께</h1>
            <p>f&b,메디컬은 USEFUNNEL</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="/assets/img/hero-img.png" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
