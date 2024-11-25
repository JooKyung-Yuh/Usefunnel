import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const initializeLibraries = async () => {
      // Import and initialize Bootstrap JS
      require('bootstrap/dist/js/bootstrap.bundle.min.js')
      
      // Import and initialize AOS
      const AOS = require('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })

      // Import and initialize GLightbox
      const GLightbox = require('glightbox')
      GLightbox({
        selector: '.glightbox'
      })

      // Import and initialize Swiper
      if (typeof window !== 'undefined') {
        const { Swiper } = await import('swiper')
        const swiperElements = document.querySelectorAll('.init-swiper')
        swiperElements.forEach(element => {
          new Swiper(element, {
            loop: true,
            speed: 600,
            autoplay: {
              delay: 5000
            },
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            breakpoints: {
              320: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 60
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 80
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 120
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 140
              }
            }
          })
        })
      }
    }

    initializeLibraries()
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
