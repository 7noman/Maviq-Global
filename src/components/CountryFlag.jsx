import React from 'react';

export default function CountryFlag({ code, size = 'md' }) {
  const dimensions = {
    sm: { width: 22, height: 15 },
    md: { width: 28, height: 19 },
    lg: { width: 42, height: 28 },
  }[size] || { width: 28, height: 19 };

  const normalized = (code || '').toUpperCase();

  if (normalized === 'UAE') {
    return (
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 24 16"
        role="img"
        aria-label="United Arab Emirates Flag"
        className="country-flag-svg"
      >
        <rect width="6" height="16" fill="#FF0000" />
        <rect x="6" width="18" height="5.33" fill="#00732F" />
        <rect x="6" y="5.33" width="18" height="5.34" fill="#FFFFFF" />
        <rect x="6" y="10.67" width="18" height="5.33" fill="#000000" />
      </svg>
    );
  }

  if (normalized === 'QATAR') {
    return (
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 24 16"
        role="img"
        aria-label="Qatar Flag"
        className="country-flag-svg"
      >
        <rect width="24" height="16" fill="#8D1B3D" />
        <polygon
          points="0,0 7.2,0 9.6,1.14 7.2,2.28 9.6,3.43 7.2,4.57 9.6,5.71 7.2,6.86 9.6,8 7.2,9.14 9.6,10.29 7.2,11.43 9.6,12.57 7.2,13.71 9.6,14.86 7.2,16 0,16"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (normalized === 'SAUDI ARABIA' || normalized === 'KSA') {
    return (
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 24 16"
        role="img"
        aria-label="Saudi Arabia Flag"
        className="country-flag-svg"
      >
        <rect width="24" height="16" fill="#006C35" />
        {/* Stylized white emblem lines representing script and sword */}
        <path
          d="M5.5 5.2h13M6.5 7.4h11M7.8 9.4h8.4"
          stroke="#FFFFFF"
          strokeWidth="1.05"
          strokeLinecap="round"
        />
        <path
          d="M6.2 11.7h11.6l-1.1 0.9"
          stroke="#FFFFFF"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  return null;
}

