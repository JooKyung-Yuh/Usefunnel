import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MedicalMarketingContent from '../components/medical/MedicalMarketingContent'

const MedicalMarketing = () => {
  return (
    <div className="medical-marketing-page">
      <Head>
        <title>의료 마케팅 솔루션 - UseFunnel</title>
        <meta
          name="description"
          content="해외 신규 환자 유치를 위한 글로벌 의료 마케팅 솔루션"
        />
      </Head>

      <Header />

      <main>
        <MedicalMarketingContent />
      </main>

      <Footer />
    </div>
  )
}

export default MedicalMarketing
