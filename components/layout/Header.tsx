import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/layout/Header.module.css'
import NavMenu from './NavMenu'
import Link from 'next/link'
import DynamicNavMenu from './DynamicNavMenu'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()
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

        <DynamicNavMenu />

        {router.pathname !== '/medical-marketing' && (
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/medical-marketing">
                  <a className="nav-link">의료 마케팅</a>
                </Link>
              </li>
            </ul>
          </nav>
        )}

        <a className={styles.btnGetstarted} href="#about">
          Get Started
        </a>
      </div>
    </header>
  )
}

export default Header
