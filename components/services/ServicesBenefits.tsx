import React from 'react'
import styles from '../../styles/components/services/ServicesBenefits.module.css'

const ServicesBenefits = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1">
            <div className={styles.imageGrid}>
              <img
                src="/assets/img/services_details/ServiceDetails_main.png"
                alt=""
                className={styles.mainImage}
                data-aos="zoom-out"
                data-aos-delay="200"
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2">
            <div
              className="about-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className={styles.title}>
                중국 시장 진출의 새로운 기준을 만듭니다
              </h2>
              <p className={styles.description}>
                유즈퍼널과 함께라면, 복잡한 중국 시장도 명확한 기회가 됩니다.
                실질적인 성과를 만드는 전략적 파트너가 되어드리겠습니다.
              </p>
              <div className={styles.btnWrapper}>
                <a
                  href="/services/ServicesDetailPage"
                  className={styles.btnPrimary}
                >
                  자세히 알아보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesBenefits
