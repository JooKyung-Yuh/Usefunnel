import React from 'react'
import styles from '../../../styles/components/services/detail/page8.module.css'

const Page8 = () => {
  const text = '알리지 않으면 성장할 수 없습니다.'
  const backgroundTexts = Array(10).fill(text)

  return (
    <section className={styles.section}>
      <div className={styles.backgroundTexts}>
        {backgroundTexts.map((text, index) => (
          <div
            key={index}
            className={`${styles.backgroundText} ${
              index === 5 ? styles.highlightText : ''
            }`}
            style={{
              transform: `translateY(${(index - 5) * 100}px)`,
              opacity: Math.max(0.2, 1 - Math.abs(index - 5) * 0.2),
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page8
