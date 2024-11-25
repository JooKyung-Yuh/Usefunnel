import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>더 많은 서비스를&nbsp;</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-activity"></i>
              </div>
              <div>
                <h3>서비스 1</h3>
                <p>서비스 1 소개</p>
                <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* End Service Card */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-diagram-3"></i>
              </div>
              <div>
                <h3>서비스 2</h3>
                <p>서비스 2 소개</p>
                <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* End Service Card */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-easel"></i>
              </div>
              <div>
                <h3>서비스 3</h3>
                <p>서비스 3</p>
                <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* End Service Card */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>서비스 4</h3>
                <p>서비스 4</p>
                <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* End Service Card */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="500">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-calendar4-week"></i>
              </div>
              <div>
                <h3>서비스 5</h3>
                <p>서비스 5</p>
                <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* End Service Card */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-chat-square-text"></i>
              </div>
              <div>
                <h3>서비스 6</h3>
                <p>서비스 6</p>
                <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
          {/* End Service Card */}
        </div>
      </div>
    </section>
  );
};

export default Services;
