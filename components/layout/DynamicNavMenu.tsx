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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('div[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id') || ''

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId)
        }
      })

      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        {currentMenu.map((item) => (
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
