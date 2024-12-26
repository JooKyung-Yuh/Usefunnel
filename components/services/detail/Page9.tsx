import React from 'react'
import styles from '../../../styles/components/services/detail/page9.module.css'

const Page9 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.smallText}>
          피드엑스는 혁신적인 마케팅 솔루션을 제공하는 리더입니다.
        </p>
        <p
          className={styles.grayText}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          1,000건 이상의 경험과 탑브랜드들과 협력해온 피드엑스는
        </p>
        <p className={styles.whiteText} data-aos="fade-up" data-aos-delay="100">
          당신에게 경쟁에서 앞서갈 기회를 제공합니다.
          <br />
          바이럴의 세계에서 우리의 부스팅 로켓에 올라타세요.
        </p>
        <p
          className={styles.highlightText}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          이건 단순히 경쟁을 앞서는 것이 아닙니다,
          <br />
          이것은 전설로 남는 길입니다.
        </p>
      </div>
    </section>
  )
}

export default Page9
