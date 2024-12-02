import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/components/services/detail/page10.module.css'

const Page10 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundImage}>
        <Image
          src="/assets/img/services_details/TalkFile_feedx_상품소개서_ver2.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.titleSection} data-aos="fade-up">
          <h2 className={styles.title}>
            강력하고,
            <br />
            더욱 강력하게,
          </h2>
          <p className={styles.subtitle}>
            피드엑스는 광고주에게 효과적이고 성공적인 광고 캠페인을 지원합니다.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <h3 className={styles.cardTitle}>
              다양한 인기계정 및 국내 운영
              <span className={styles.arrow}>&gt;</span>
            </h3>
            <p className={styles.cardText}>
              거짓 없는 실계정 사용이 우리의 핵심 원칙입니다. 국내에서 활발히
              운영되는 다수의 인플루언서 계정을 소유하고 있으며, 유령팔로워가
              아닌 실제 사용자 계정을 통해
            </p>
          </div>

          <div className={styles.card} data-aos="fade-up" data-aos-delay="200">
            <h3 className={styles.cardTitle}>
              다년간의 경험과 풍부한 노하우
              <span className={styles.arrow}>&gt;</span>
            </h3>
            <p className={styles.cardText}>
              3년간 1,000건 이상의 광고 캠페인 경험. SNS광고에 특화된 노하우를
              활용한 캠페인 운영.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page10
