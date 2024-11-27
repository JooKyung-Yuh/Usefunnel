import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import ServicesHero from '../../components/services/detail/ServicesHero'

const ServicesDetailPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <ServicesHero />
      </main>
      <Footer />
    </>
  )
}

export default ServicesDetailPage
