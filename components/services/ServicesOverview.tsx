import React from 'react'
import styles from '../../styles/components/services/ServicesOverview.module.css'

const ServicesOverview = () => {
  return (
    <section id="services" className={styles.services2}>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h2 className={`fw-bold mb-4 ${styles.servicesTitle}`}>
              매년 1,700만 명의
              <div>중국 관광객이 방문합니다</div>
            </h2>
            <a
              href="/services/ServicesDetailPage"
              className={styles.btnOutlinePrimary}
            >
              더 알아보기
            </a>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className={styles.serviceItem}>
                  <img src="/assets/img/services2/Services2_1.png" alt="" />
                  <h3>
                    <a href="/services/ServicesDetailPage">다중뎬핑 마케팅</a>
                  </h3>
                  <p>중국 최대 리뷰 플랫폼 활용</p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className={styles.serviceItem}>
                  <img src="/assets/img/services2/Services2_2.png" alt="" />
                  <h3>
                    <a href="/services/ServicesDetailPage">샤오홍슈 마케팅</a>
                  </h3>
                  <p>중국의 인스타그램 활용</p>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className={styles.serviceItem}>
                  <img
                    src="/assets/img/services2/Services2_3.png"
                    alt=""
                    style={{ width: '50%' }}
                  />
                  <h3>
                    <a href="/services/ServicesDetailPage">전략적 마케팅</a>
                  </h3>
                  <p>데이터 기반 성과 분석</p>
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
