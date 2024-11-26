import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const initializeLibraries = async () => {
      if (typeof window === 'undefined') return

      // Bootstrap
      require('bootstrap/dist/js/bootstrap.bundle.min.js')

      // AOS
      const AOS = require('aos')
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })

      // GLightbox
      const GLightbox = require('glightbox')
      GLightbox({
        selector: '.glightbox',
      })

      // Mobile Navigation
      const initMobileNav = () => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle')
        if (mobileNavToggle) {
          mobileNavToggle.addEventListener('click', () => {
            document
              .querySelector('body')
              ?.classList.toggle('mobile-nav-active')
            mobileNavToggle.classList.toggle('bi-list')
            mobileNavToggle.classList.toggle('bi-x')
          })
        }

        // Hide mobile nav on same-page/hash links
        document.querySelectorAll('#navmenu a').forEach((navmenu) => {
          navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
              document
                .querySelector('body')
                ?.classList.remove('mobile-nav-active')
              const toggle = document.querySelector('.mobile-nav-toggle')
              if (toggle) {
                toggle.classList.add('bi-list')
                toggle.classList.remove('bi-x')
              }
            }
          })
        })
      }

      initMobileNav()
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
