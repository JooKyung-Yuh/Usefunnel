import React from 'react'
import styles from '../styles/AboutDetails.module.css'

const AboutDetails = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.content}>
              <h2 className={styles.title}>메디록스의 스토리</h2>
              <p className={styles.description}>
                메디록스는 의료 분야의 디지털 혁신을 선도하는 기업입니다. 우리는
                최고의 전문가들과 함께 의료 서비스의 새로운 기준을 만들어가고
                있습니다.
              </p>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <h3>250+</h3>
                  <p>성공적인 프로젝트</p>
                </div>
                <div className={styles.statItem}>
                  <h3>50+</h3>
                  <p>전문 의료진 협력</p>
                </div>
                <div className={styles.statItem}>
                  <h3>98%</h3>
                  <p>고객 만족도</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.imageWrapper}>
              <img
                src="/assets/img/about/about-main.jpg"
                alt="About Medilogs"
                className={styles.mainImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDetails
