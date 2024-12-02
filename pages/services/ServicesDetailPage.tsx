import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ServicesHero from '../../components/services/detail/ServicesHero'
import Page3 from '../../components/services/detail/Page3'
import Page4 from '../../components/services/detail/Page4'

const ServicesDetailPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <ServicesHero />
        <Page3 />
        <Page4 />
      </main>
      <Footer />
    </>
  )
}

export default ServicesDetailPage
