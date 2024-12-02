import React from 'react'
import styles from '../../../styles/components/services/detail/page11.module.css'
import GlobeIcon from '../../common/GlobeIcon'
import ChartIcon from '../../common/ChartIcon'
import PeopleIcon from '../../common/PeopleIcon'
import PlanetIcon from '../../common/PlanetIcon'

const Page11 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.smallText}>
          피드엑스는 혁신적인 마케팅 솔루션을 제공하는 리더입니다.
        </p>
        <h2 className={styles.title} data-aos="fade-up">
          디지털 마케팅과 광고 전문가들이
          <br />
          더욱 편리하게 완벽한 성과를 달성할 수 있는
          <br />
          새로운 세계를 만듭니다.
        </h2>

        <div className={styles.cardGrid}>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <h3>전방위 바이럴 마케팅</h3>
            <div className={styles.iconContainer}>
              <GlobeIcon />
            </div>
            <p>
              창의적이고 효과적인 캠페인을 통해
              <br />
              브랜드의 가시성을 증대시키고
              <br />
              고객과의 소통을 강화합니다
            </p>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="200">
            <h3>강력한 SNS 전략</h3>
            <div className={styles.iconContainer}>
              <ChartIcon />
            </div>
            <p>
              소셜 미디어의 미래를 예측하며,
              <br />
              브랜드와 소비자 간의 관계를 개방적으로
              <br />
              유지하는 트렌드에 부합하는
              <br />
              전략을 선도합니다.
            </p>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="300">
            <h3>고객 맞춤형 솔루션</h3>
            <div className={styles.iconContainer}>
              <PeopleIcon />
            </div>
            <p>
              각 고객사의 특성을 고려한 개별화된
              <br />
              마케팅 솔루션을 제공하여,
              <br />
              브랜드의 필요에 따라
              <br />
              최적의 성과를 도출합니다.
            </p>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="400">
            <h3>창의적인 디지털 혁신</h3>
            <div className={styles.iconContainer}>
              <PlanetIcon />
            </div>
            <p>
              소셜 미디어의 특성을 최대한 활용하여
              <br />
              디지털 혁신을 선도합니다.
              <br />
              브랜드의 메시지를 효과적으로 전달하고
              <br />
              소비자와의 상호작용을 최대화합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page11
