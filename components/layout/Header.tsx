import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/layout/Header.module.css'
import NavMenu from './NavMenu'

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id="header"
      className={`${styles.header} d-flex align-items-center fixed-top ${
        scrolled ? 'sticked' : ''
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a
          href="/"
          className={`${styles.logo} d-flex align-items-center me-auto`}
        >
          <h1 className={styles.logoText}>usefunnel</h1>
        </a>

        <NavMenu />

        <a className={styles.btnGetstarted} href="#about">
          Get Started
        </a>
      </div>
    </header>
  )
}

export default Header
