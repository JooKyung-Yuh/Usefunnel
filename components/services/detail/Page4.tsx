import React from 'react'
import styles from '../../../styles/components/services/detail/page4.module.css'

interface TableRow {
  platform: string
  growth: string
  response: string
  longTerm: string
  [key: string]: string
}

const Page4 = () => {
  const tableData: TableRow[] = [
    {
      platform: '플랫폼',
      growth: '조회수 증가 속도',
      response: '초기 반응 시간',
      longTerm: '장기적 성장',
    },
    {
      platform: '트위터',
      growth: '초기 24-48시간 내에 급격한 조회수 증가, 이후 안정',
      response: '매우 빠름',
      longTerm: '초기 급증 후 안정',
    },
    {
      platform: '인스타그램',
      growth: '초기 72시간 내 점진적 증가, 고품질 콘텐츠로 인한 꾸준한 성장',
      response: '빠름',
      longTerm: '꾸준한 증가',
    },
    {
      platform: '페이스북',
      growth: '느린 시작 후 꾸준한 증가, 일주일정도로 조회수가 증가',
      response: '보통 - 느림',
      longTerm: '꾸준한 증가',
    },
  ]

  return (
    <section id="strategy" className={styles.strategy}>
      <div className="container">
        <div className={styles.sectionTitle} data-aos="fade-up">
          <h2>트위터 광고 전략 및 이점</h2>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((key, index) => (
                  <th
                    key={index}
                    data-aos="fade-down"
                    data-aos-delay={index * 100}
                  >
                    {tableData[0][key]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={row.platform === '트위터' ? styles.highlight : ''}
                >
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      data-aos="fade-up"
                      data-aos-delay={rowIndex * 100 + cellIndex * 50}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.bottomText} data-aos="fade-up">
          <p>
            트위터는 24-72시간 내 컨텐츠의 폭발적 확산에 가장 적합한 플랫폼으로,
            신속한 정보 전달력이 필요한 바이럴 캠페인의 핵심 도구입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Page4
