import React from 'react'
import styles from '../../styles/components/services/ServicesCTA.module.css'

const ServicesCTA = () => {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <img
                src="/assets/img/services_details/ServiceDetails_main.png"
                alt="Services CTA"
                className={styles.mainImage}
                data-aos="zoom-out"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.content}>
              <h2 className={styles.title}>
                경쟁자를 압도하고, 브랜드 가치를 끌어올리세요.
              </h2>
              <p className={styles.description}>
                감성을 자극하는 연결, 트위터에서 시작됩니다. 광고로 세상과
                소통하는 새로운 방식을 경험하세요.
              </p>
              <div className={styles.btnWrapper}>
                <a href="/services/detail" className={styles.btnPrimary}>
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

export default ServicesCTA
