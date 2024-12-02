import React from 'react'

const GlobeIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2" />
      <path
        d="M20 1C20 1 10 10 10 20C10 30 20 39 20 39"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M20 1C20 1 30 10 30 20C30 30 20 39 20 39"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M1 20H39" stroke="white" strokeWidth="2" />
      <path d="M4 12H36" stroke="white" strokeWidth="2" />
      <path d="M4 28H36" stroke="white" strokeWidth="2" />
    </svg>
  )
}

export default GlobeIcon
