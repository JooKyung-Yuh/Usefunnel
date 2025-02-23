import React from 'react'
import styles from '../../styles/components/medical/MedicalMarketing.module.css'

const MedicalMarketingContent = () => {
  return (
    <div className={styles.medicalMarketing}>
      <section id="hero" className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <h1 data-aos="fade-up">해외 신규 환자를 확보하고 계십니까?</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            글로벌 의료 마케팅의 새로운 기준을 제시합니다
          </p>
        </div>
      </section>

      <section id="problems" className={styles.problems}>
        <div className="container">
          <h2 data-aos="fade-up">
            해외 신규 환자, 언제까지 손 놓고 계실 겁니까?
          </h2>
          <div className={styles.problemGrid}>
            <div
              className={styles.problemCard}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.cardIcon}>1</div>
              <p>국내 신규 환자 유입은 이미 한계에 도달했습니다.</p>
            </div>
            <div
              className={styles.problemCard}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.cardIcon}>2</div>
              <p>
                매년 1,600만 명의 외국인이 한국을 찾고, 그중 60%가 중국인입니다.
              </p>
            </div>
            <div
              className={styles.problemCard}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className={styles.cardIcon}>3</div>
              <p>
                중국인들은 한국의 뷰티와 의료 서비스에 지갑을 열 준비가 되어
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className={styles.solution}>
        <div className="container">
          <h2 data-aos="fade-up">유즈퍼널의 글로벌 마케팅 솔루션</h2>
          <div className={styles.solutionGrid}>
            <div
              className={styles.solutionCard}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>8개국 글로벌 마케팅</h3>
              <p>다양한 국가와 시장을 완벽히 공략하는 전략적 접근</p>
            </div>
            <div
              className={styles.solutionCard}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>다양한 솔루션</h3>
              <p>각 플랫폼과 시장의 특성을 반영한 성과 중심의 실행</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className={styles.cta}>
        <div className="container text-center">
          <h2 data-aos="fade-up">이제는 변화를 선택할 때입니다</h2>
          <p data-aos="fade-up" data-aos-delay="100">
            고객 유입의 답답함을 해결하지 못하고 계신가요?
            <br />
            유즈퍼널과 함께 해외 신규 환자를 확보하고 비즈니스의 새로운 성장을
            만들어보세요!
          </p>
          <a
            href="/#contact"
            className={styles.ctaButton}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            상담 신청하기
          </a>
        </div>
      </section>
    </div>
  )
}

export default MedicalMarketingContent
