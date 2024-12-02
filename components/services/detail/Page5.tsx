import React from 'react'
import styles from '../../../styles/components/services/detail/page5.module.css'

const Page5 = () => {
  const strategies = [
    '캠페인',
    '브랜드 인지도 향상',
    '신제품 홍보',
    '시제품 테스트',
    '컨셉 대한 소비자 반응',
  ]

  return (
    <section id="strategy" className={styles.strategy}>
      <div className="container">
        <div className={styles.sectionTitle} data-aos="fade-up">
          <h2>캠페인 목적별 트위터 활용 전략</h2>
          <p
            className={styles.highlight}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            페이스북, 인스타그램, 유튜브 대신이 아닌, 새로운 채널 전략
          </p>
        </div>

        <div className={styles.strategyList}>
          {strategies.map((item, index) => (
            <div
              key={index}
              className={styles.strategyItem}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              • {item}
            </div>
          ))}
        </div>

        <div className={styles.bottomText} data-aos="fade-up">
          <p>
            트위터의 빠른 소비 주기는 전략적으로 이용할 경우, 순간적인 주목을
            이끌어내고 신속하게 목표를 달성하는 데 유리하며, 기존의 마케팅
            채널을보완하는 새로운 전략으로 활용될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Page5
