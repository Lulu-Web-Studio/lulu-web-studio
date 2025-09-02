import React from 'react'


interface SecondaryTextProps {
    children: React.ReactNode;
    className?: string; // Allows optional custom classes
    as?: keyof React.JSX.IntrinsicElements; // 'h1' | 'h2' | 'h3' | 'p' | etc.
}

export default function SecondaryText({
    children,
    className = "",
    as: Tag = 'p' // default to <h2>
}: SecondaryTextProps) {
    return (
        <Tag

            className={`text-pretty text-xl sm:text-xl ${className}`}
        >
            {children}
        </Tag>
    );
}
