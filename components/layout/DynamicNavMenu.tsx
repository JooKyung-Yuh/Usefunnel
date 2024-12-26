import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/components/layout/NavMenu.module.css'

const DynamicNavMenu = () => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)

  const defaultMenu = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  const serviceDetailMenu = [
    { href: '#overview', label: '서비스 개요' },
    { href: '#problem', label: '시장의 문제점' },
    { href: '#solution', label: '유즈퍼널의 솔루션' },
    { href: '#features', label: '주요 기능' },
    { href: '#benefits', label: '도입 효과' },
  ]

  const medicalMenu = [
    { href: '#hero', label: '소개' },
    { href: '#problems', label: '시장 현황' },
    { href: '#solution', label: '솔루션' },
    { href: '#cta', label: '상담 신청' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentMenu = getCurrentMenu()
      const sections = currentMenu.map((item) =>
        document.getElementById(item.href.substring(1)),
      )

      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id)
          }
        }
      })

      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [router.pathname])

  const getCurrentMenu = () => {
    switch (router.pathname) {
      case '/services/ServicesDetailPage':
        return serviceDetailMenu
      case '/medical-marketing':
        return medicalMenu
      default:
        return defaultMenu
    }
  }

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
    document.body.classList.toggle(styles.mobileNavActive)
  }

  const closeMobileNav = () => {
    setIsMobileNavActive(false)
    document.body.classList.remove(styles.mobileNavActive)
  }

  const currentMenu =
    router.pathname === '/services/ServicesDetailPage'
      ? serviceDetailMenu
      : defaultMenu

  return (
    <nav
      id="navmenu"
      className={`${styles.navmenu} ${scrolled ? styles.sticked : ''}`}
    >
      <ul className={styles.navList}>
        {getCurrentMenu().map((item) => (
          <li key={item.href} className={styles.navItem}>
            <a
              href={item.href}
              className={`${styles.navLink} ${
                activeSection === item.href.substring(1) ? styles.active : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(item.href.substring(1))
                if (element) {
                  const offset = 80
                  const elementPosition = element.offsetTop - offset
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth',
                  })
                }
                closeMobileNav()
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.mobileNavToggleWrapper}>
        <i
          className={`${styles.mobileNavToggle} bi ${
            isMobileNavActive ? 'bi-x' : 'bi-list'
          }`}
          onClick={toggleMobileNav}
        ></i>
      </div>
    </nav>
  )
}

export default DynamicNavMenu
