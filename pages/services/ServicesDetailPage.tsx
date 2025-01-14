import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ServicesHero from '../../components/services/detail/ServicesHero'
import Page3 from '../../components/services/detail/Page3'
import Page4 from '../../components/services/detail/Page4'
import Page5 from '../../components/services/detail/Page5'
import Page6 from '../../components/services/detail/Page6'
import Page7 from '../../components/services/detail/Page7'
import Page8 from '../../components/services/detail/Page8'
import Page9 from '../../components/services/detail/Page9'
import Page10 from '../../components/services/detail/Page10'
import Page11 from '../../components/services/detail/Page11'

const ServicesDetailPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <div id="overview">
          <Page3 />
        </div>
        <div id="problem">
          <Page4 />
        </div>
        <div id="solution">
          <Page5 />
        </div>
        <div id="features">
          <Page6 />
        </div>
        <div id="benefits">
          <Page7 />
        </div>
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
      </main>
      <Footer />
    </>
  )
}

export default ServicesDetailPage
