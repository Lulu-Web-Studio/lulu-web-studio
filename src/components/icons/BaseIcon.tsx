import React from 'react';
import Image from 'next/image';

interface BaseIconProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

const BaseIcon: React.FC<BaseIconProps> = ({
  src,
  alt,
  size = 32,
  className = "",
  children
}) => {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || ''}
          width={size}
          height={size}
          className="object-contain"
        />
      ) : (
        children
      )}
    </div>
  );
};

export default BaseIcon;