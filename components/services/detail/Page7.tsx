import React from 'react'
import styles from '../../../styles/components/services/detail/page7.module.css'

const Page7 = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.topContent} data-aos="fade-up">
            <h2 className={styles.title}>
              피드 폭팔, 경험해보셨나요?
              <br />
              당신의 브랜드가 순식간에
              <br />
              눈부시게 빛나게 합니다.
            </h2>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.bottomContent}>
            <h3 className={styles.highlight} data-aos="fade-up">
              프로라면, 선택이 아닌 필수입니다.
            </h3>
            <p className={styles.description} data-aos="fade-up">
              <span className={styles.grayText}>
                피드엑스는 광고주에게 최상의 바이럴 효과를 제공합니다.
              </span>
              <br />
              이는 오로지 전문가들만이 접근할 수 있는 비밀 무기입니다.
              <br />
              전문가를 위해 특별히 설계된 바이럴 확산 솔루션, 바로
              피드엑스입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page7
