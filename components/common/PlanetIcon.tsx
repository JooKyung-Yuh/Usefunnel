import React from 'react'

const PlanetIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="2" />
      <ellipse
        cx="20"
        cy="20"
        rx="18"
        ry="6"
        stroke="white"
        strokeWidth="2"
        transform="rotate(-30 20 20)"
      />
      <circle cx="26" cy="16" r="2" fill="white" />
      <circle cx="14" cy="22" r="1.5" fill="white" />
    </svg>
  )
}

export default PlanetIcon
