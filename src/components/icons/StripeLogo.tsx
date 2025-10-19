import React from 'react'
import BaseIcon from './BaseIcon'

function StripeLogo({size}: {size: number}) {
    return (
        <BaseIcon
            src="/icons/stripe-icon.svg"
            alt="Stripe Logo"
            size={size}
            className="text-white"
        />
    )
}

export default StripeLogo;