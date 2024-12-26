import React from 'react'

const Services: React.FC = () => {
  const services = [
    {
      icon: 'bi bi-globe',
      title: '중국 시장 진출',
      description: '14년간의 중국 현지 경험을 바탕으로 한 현실적인 전략 제공',
      delay: 100,
    },
    {
      icon: 'bi bi-graph-up',
      title: '다중뎬핑 마케팅',
      description: '중국 최대 리뷰 플랫폼을 활용한 효과적인 마케팅 솔루션',
      delay: 200,
    },
    {
      icon: 'bi bi-phone',
      title: '샤오홍슈 마케팅',
      description: '중국의 인스타그램, 샤오홍슈를 통한 브랜드 인지도 향상',
      delay: 300,
    },
    {
      icon: 'bi bi-people',
      title: '관광객 타겟팅',
      description: '연간 1,700만 중국 관광객을 위한 맞춤형 마케팅 전략',
      delay: 400,
    },
    {
      icon: 'bi bi-bar-chart',
      title: '성과 분석',
      description: '실시간 데이터 분석을 통한 마케팅 효과 최적화',
      delay: 500,
    },
    {
      icon: 'bi bi-rocket',
      title: '성장 가속화',
      description: '비즈니스 성장을 위한 종합적인 솔루션 제공',
      delay: 600,
    },
  ]

  return (
    <section id="services" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>중국과 한국을 연결하는 새로운 기회</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="/services/ServicesDetailPage" className="read-more">
                    자세히 보기 <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
