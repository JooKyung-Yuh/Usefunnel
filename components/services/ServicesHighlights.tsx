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
            <h2>영상에 병원의 진심을 담다</h2>
            <p>영상 제작이 처음이어도 괜찮습니다</p>
            <p>복잡하고 귀찮은 과정은 모두 메디룩스가 도와드리겠습니다.</p>
            <p>원장님, 담당자님은 병원 일에만 집중하셔도 됩니다.</p>
            <p>언제나 환자를 생각하는 의료진의 마음이 잘 전해질 수 있도록</p>
            <p>메이룩스는 항상 영상에 병원의 진심을 담아냅니다</p>
            {/* <a href="#contact" className={styles.btnGetStarted}>Get Started</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHighlights
