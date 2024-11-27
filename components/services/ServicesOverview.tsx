import React from 'react'
import styles from '../../styles/components/services/ServicesOverview.module.css'

const ServicesOverview = () => {
  return (
    <section id="services" className={styles.services2}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className={`fw-bold mb-4 ${styles.servicesTitle}`}>
              매년 평균 1600만명
              <div>관람객이 한국에 방문합니다</div>
            </h2>
            <a href="#" className={styles.btnOutlinePrimary}>
              See all services
            </a>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className={styles.serviceItem}>
                  {/* <i className="bi bi-activity icon"></i> */}
                  <img src="/assets/img/services2/Services2_1.png" alt="" />
                  <h3>
                    <a href="service-details.html">월간 이용자 3억</a>
                  </h3>
                  <p>중국인 인플루언서 체험단</p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className={styles.serviceItem}>
                  {/* <i className="bi bi-easel icon"></i> */}
                  <img src="/assets/img/services2/Services2_2.png" alt="" />
                  <h3>
                    <a href="service-details.html">월간 이용자 3역</a>
                  </h3>
                  <p>입점 및 노출 프로필관리</p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className={styles.serviceItem}>
                  {/* <i className="bi bi-broadcast icon"></i> */}
                  <img
                    src="/assets/img/services2/Services2_3.png"
                    alt=""
                    style={{ width: '50%' }}
                  />
                  <h3>
                    <a href="service-details.html">전세계 플랫폼</a>
                  </h3>
                  <p>상위노출 및 프로필 관리</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
