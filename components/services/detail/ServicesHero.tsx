import React from 'react'
import styles from '../../../styles/components/services/detail/ServicesHero.module.css'

const ServicesHero = () => {
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
                경쟁자를 압도하고, 브랜드 가치를 끌어올리세요.
              </h2>
              <p className={styles.description}>
                감성을 자극하는 연결, 트위터에서 시작됩니다. 광고로 세상과
                소통하는 새로운 방식을 경험하세요.
              </p>
              <div className={styles.featureList}>
                {/* ... feature list items ... */}
              </div>
              <div className={styles.btnWrapper}>
                <a href="/about" className={styles.btnPrimary}>
                  More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
