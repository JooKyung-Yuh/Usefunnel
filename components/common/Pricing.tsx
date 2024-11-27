import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-item">
              <h3>무료 플랜</h3>
              <h4><sup>₩</sup>0<span> / 월</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>가격 1_1</span></li>
                <li><i className="bi bi-check"></i>가격 1_2</li>
                <li><i className="bi bi-check"></i>가격 1_3</li>
                <li className="na"><i className="bi bi-x"></i> <span>가격 1_4</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>가격 1_5</span></li>
              </ul>
              <a href="#" className="buy-btn">구매 하기</a>
            </div>
          </div>
          {/* End Pricing Item */}

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item featured">
              <h3>Business 플랜</h3>
              <h4><sup>₩</sup>29,000<span> / 월</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>가격 2_1</span></li>
                <li><i className="bi bi-check"></i>가격 2_2</li>
                <li><i className="bi bi-check"></i> <span>가격 2_3</span></li>
                <li><i className="bi bi-check"></i>가격 2_4</li>
                <li><i className="bi bi-check"></i> <span>가격 2_5</span></li>
              </ul>
              <a href="#" className="buy-btn">구매 하기</a>
            </div>
          </div>
          {/* End Pricing Item */}

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-item">
              <h3>Developer 플랜</h3>
              <h4><sup>₩</sup>49,000<span> / 월</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> <span>가격 3_1</span></li>
                <li><i className="bi bi-check"></i> <span>가격 3_2</span></li>
                <li><i className="bi bi-check"></i> <span>가격 3_3</span></li>
                <li><i className="bi bi-check"></i> <span>가격 3_4</span></li>
                <li><i className="bi bi-check"></i> <span>가격 3_5</span></li>
              </ul>
              <a href="#" className="buy-btn">구매 하기</a>
            </div>
          </div>
          {/* End Pricing Item */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
