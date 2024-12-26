import React from 'react'
import styles from '../../styles/components/services/ServicesHighlights.module.css'

const ServicesHighlights = () => {
  return (
    <section id="services" className={styles.hero2}>
      <img
        src="/assets/img/hero-background_1.jpg"
        alt=""
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>

      <div
        className={`container text-center ${styles.content}`}
        data-aos="fade-up"
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>기우제 마케팅은 이제 그만</h2>
            <p>실제 성과를 만드는 전략이 필요합니다</p>
            <p>14년간의 중국 현지 경험을 바탕으로 한 현실적인 솔루션</p>
            <p>오가닉 트래픽을 유도하는 진짜 성과 기반 전략</p>
            <p>중국 시장의 최신 흐름을 완벽하게 분석</p>
            <p>누구보다 빠르고 정확한 시장 이해로 성공을 보장합니다</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHighlights
