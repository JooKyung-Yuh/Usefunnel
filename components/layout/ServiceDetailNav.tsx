import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/components/layout/Header.module.css'

const ServiceDetailNav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const serviceNavItems = [
    { id: 'overview', title: '서비스 개요' },
    { id: 'problem', title: '시장의 문제점' },
    { id: 'solution', title: '유즈퍼널의 솔루션' },
    { id: 'features', title: '주요 기능' },
    { id: 'benefits', title: '도입 효과' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = serviceNavItems.map((item) =>
        document.getElementById(item.id),
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
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // 헤더 높이만큼 오프셋
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.sticked : ''}`}>
      <ul className={styles.navbarNav}>
        {serviceNavItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.id)
              }}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ''
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ServiceDetailNav
