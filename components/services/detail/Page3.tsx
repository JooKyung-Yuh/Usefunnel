import React from 'react'
import styles from '../../../styles/components/services/detail/page3.module.css'

const Page3 = () => {
  return (
    <section id="cards" className={styles.cards}>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div
            className="col-lg-4 px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={`${styles.cardItem}`}>
              <span className={styles.cardLabel}>설치자</span>
              <h4 className={styles.statsHeading}>
                <p className={styles.statsLink}>
                  <span className={styles.numberValue}>430</span>
                  <span className={styles.unit}>만명</span>
                </p>
              </h4>
              <p className={styles.cardDescription}>
                월평균 45억회 실행 국내 전체 앱순위 7위 10명 중 6명은 하루 10회
                이상 트위터 접속
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={`${styles.cardItem}`}>
              <span className={styles.cardLabel}>사용자</span>
              <h4 className={styles.statsHeading}>
                <p className={styles.statsLink}>
                  <span className={styles.numberValue}>262</span>
                  <span className={styles.unit}>만명</span>
                </p>
              </h4>
              <p className={styles.cardDescription}>
                월 평균 사용시간 44억분 한국인이 가장 오래사용한 전체앱중 10위
                주 이용자 중 절반가량은 하루 3시간 이상 트위터 이용
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={`${styles.cardItem}`}>
              <span className={styles.cardLabel}>사용률</span>
              <h4 className={styles.statsHeading}>
                <p className={styles.statsLink}>
                  <span className={styles.numberValue}>60.8</span>
                  <span className={styles.unit}>%</span>
                </p>
              </h4>
              <p className={styles.cardDescription}>
                국내 SNS앱 중 사용률 2위. 사용자에게 중독성 있는 플랫폼
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div
          className={styles.sectionTitle}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2>트위터 주 이용자의 '광고'수용 후 태도</h2>
        </div>

        <div className="row gy-4 justify-content-center position-relative">
          <div
            className="col-lg-4 px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={`${styles.cardItem} ${styles.darkCard}`}>
              <span className={styles.cardLabel}>비호감 요소</span>
              <p className={styles.newCardDescription}>
                어설프게 트위터 유저인 척하는 어설픈 바이럴 계정.
              </p>
              <div className={styles.arrowContainer}>
                <div className={styles.arrow}>&gt;</div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={`${styles.cardItem} ${styles.darkCard}`}>
              <span className={styles.cardLabel}>호감 광고 유형</span>
              <p className={styles.newCardDescription}>
                취향•취미에 맞추화된 광고 캠페인. 브랜드의 부정적인 부분도
                진솔하게 소통하고 브랜드를 자연스럽게 노출하는 형식.
              </p>
              <div className={styles.arrowContainer}>
                <div className={styles.arrow}>&gt;</div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={`${styles.cardItem} ${styles.darkCard}`}>
              <span className={styles.cardLabel}>광고 수용도</span>
              <p className={styles.newCardDescription}>
                단순 브랜드•제품 노출 광고보다는 '트위터식 광고'에 즉각적인 반응
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page3
