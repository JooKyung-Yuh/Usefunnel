import React from 'react'
import styles from '../../styles/ServicesAdvantages.module.css'

const ServicesAdvantages = () => {
  return (
    <section id="services" className={styles.services}>
      <img
        src="/assets/img/hero-background_2.jpg"
        alt=""
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>

      <div className={`container ${styles.content}`} data-aos="fade-up">
        <div className="row">
          <div className="col-lg-8">
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                메디록스가
                <br />
                제작하는 메디컬 컨텐츠는?
              </h2>
              <p className={styles.description}>
                <i className="bi bi-check-circle-fill me-2"></i> 전문 의료자문
                위원의 검수
              </p>
              <p className={styles.description}>
                <i className="bi bi-check-circle-fill me-2"></i> 각 진료 과별
                의료광고 심의 가이드라인 준수
              </p>
              <p className={styles.description}>
                <i className="bi bi-check-circle-fill me-2"></i> 영화, 방송,
                광고 출신 감독, PD
              </p>
              <p className={styles.description}>
                <i className="bi bi-check-circle-fill me-2"></i> 넷플릭스인증
                시네마 카메라 사용
              </p>
              <p className={styles.description}>
                <i className="bi bi-check-circle-fill me-2"></i> 하도급 없는
                직접 계약으로 퀄리티 보증
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesAdvantages
