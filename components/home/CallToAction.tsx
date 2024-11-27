import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <img src="/assets/img/cta-bg.jpg" alt="" />

      <div className="container">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-9 text-center text-xl-start">
            <h3>USEFUNNEL</h3>
            <p>NEW LEAP, GLOBAL</p>
          </div>
          <div className="col-xl-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
