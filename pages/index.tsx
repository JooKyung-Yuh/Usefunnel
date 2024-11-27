import Head from 'next/head'
import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import Clients from '../components/home/Clients'
import About from '../components/home/About'
import CallToAction from '../components/home/CallToAction'
import Pricing from '../components/common/Pricing'
import Contact from '../components/home/Contact'
import Footer from '../components/layout/Footer'
import Services from '../components/services/Services'

export default function Home() {
  return (
    <div className="index-page">
      <Head>
        <title>UseFunnel - AI 기반 마케팅 자동화 솔루션</title>
        <meta name="description" content="AI 기반 마케팅 자동화 솔루션" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main id="main">
        <Hero />
        <Clients />
        <About />
        <CallToAction />
        {/* <ServicesOverview />
        <ServicesHighlights />
        <ServicesFeatures />
        <ServicesAdvantages />
        <ServicesBenefits /> */}
        <Services />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
