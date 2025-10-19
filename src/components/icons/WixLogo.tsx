import React from 'react'
import BaseIcon from './BaseIcon'

export default function WixLogo({size}: {size: number}) {
  return (
    <BaseIcon
      src="/icons/wix-svgrepo-com.svg"
      alt="Wix Logo"
      size={size}
      className="text-white"
    />
  )
}
