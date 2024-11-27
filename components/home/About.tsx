import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>ABOUT USEFUNNEL</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>회사 소개</p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>회사 소개</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>회사 소개</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>회사 소개</span></li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>회사 소개</p>
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
