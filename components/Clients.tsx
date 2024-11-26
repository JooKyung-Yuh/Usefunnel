import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'

const Clients: React.FC = () => {
  const [swiperInitialized, setSwiperInitialized] = useState(false)

  useEffect(() => {
    const initSwiper = async () => {
      if (typeof window === 'undefined' || swiperInitialized) return

      try {
        const Swiper = (await import('swiper')).default
        const { Navigation, Pagination, Autoplay } = await import('swiper')

        const swiper = new Swiper('.init-swiper', {
          modules: [Navigation, Pagination, Autoplay],
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 120,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 120,
            },
          },
        })

        setSwiperInitialized(true)

        return () => {
          if (swiper) {
            swiper.destroy()
          }
        }
      } catch (error) {
        console.error('Error initializing Swiper:', error)
      }
    }

    initSwiper()
  }, [swiperInitialized])

  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="zoom-in">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-7.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="/assets/img/clients/client-8.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Clients
