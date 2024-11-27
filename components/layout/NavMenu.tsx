import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/layout/NavMenu.module.css'

const NavMenu = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 200

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

  return (
    <nav id="navmenu" className={styles.navmenu}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a
            href="#hero"
            className={`${styles.navLink} ${
              activeSection === 'hero' ? styles.active : ''
            }`}
            onClick={closeMobileNav}
          >
            Home
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#about"
            className={`${styles.navLink} ${
              activeSection === 'about' ? styles.active : ''
            }`}
            onClick={closeMobileNav}
          >
            About
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#services"
            className={`${styles.navLink} ${
              activeSection === 'services' ? styles.active : ''
            }`}
            onClick={closeMobileNav}
          >
            Services
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#pricing"
            className={`${styles.navLink} ${
              activeSection === 'pricing' ? styles.active : ''
            }`}
            onClick={closeMobileNav}
          >
            Pricing
          </a>
        </li>
        <li className={styles.navItem}>
          <a
            href="#contact"
            className={`${styles.navLink} ${
              activeSection === 'contact' ? styles.active : ''
            }`}
            onClick={closeMobileNav}
          >
            Contact
          </a>
        </li>
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

export default NavMenu
