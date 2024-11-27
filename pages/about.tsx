import React from 'react'
import AboutDetails from '../components/AboutDetails'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage = () => {
  return (
    <>
      <Header />
      <main id="main">
        <AboutDetails />
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
