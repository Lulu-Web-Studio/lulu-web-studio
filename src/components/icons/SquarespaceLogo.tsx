import React from 'react'
import BaseIcon from './BaseIcon'

export default function SquarespaceLogo({size}: {size: number}) {
  return (
    <BaseIcon
      src="/icons/squarespace-svgrepo-com.svg"
      alt="Squarespace Logo"
      size={size}
      className="text-white"
    />
  )
}

