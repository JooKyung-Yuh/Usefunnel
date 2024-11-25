import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import About from '../components/About'
import CallToAction from '../components/CallToAction'
import Services from '../components/Services'
import Services2 from '../components/Services2'
import Hero2 from '../components/Hero2'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero3 from '../components/Hero3'

export default function Home() {
  return (
    <div className="index-page">
      <Head>
        <title>Index - Usefunnel</title>
        <meta name="description" content="UseFunnel helps businesses optimize their sales funnel and increase conversions through data-driven insights and advanced analytics." />
        <meta name="keywords" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="main">
        <Hero />
        <Clients />
        <About />
        <CallToAction />
        <Services />
        <Services2 />
        <Hero2 />
        <Hero3 />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
