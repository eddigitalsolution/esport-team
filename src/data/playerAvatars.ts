// High quality vector SVG avatars & local assets for Na'Vi Dota 2 Roster & Coaching Staff

export const createEsportsSvgAvatar = (alias: string, role: string, accentColor = '#F5C400') => {
  const encodedAlias = encodeURIComponent(alias);
  const encodedRole = encodeURIComponent(role);
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14151C"/>
        <stop offset="100%" stop-color="#0D0D11"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F5C400"/>
        <stop offset="100%" stop-color="#FFDF00"/>
      </linearGradient>
      <radialGradient id="spotlight" cx="50%" cy="30%" r="50%">
        <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
      </radialGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <!-- Card Background -->
    <rect width="400" height="400" fill="url(#bgGrad)"/>
    <rect width="400" height="400" fill="url(#spotlight)"/>
    
    <!-- Background Tech Grid Lines -->
    <path d="M0 80 L400 80 M0 160 L400 160 M0 240 L400 240 M0 320 L400 320" stroke="rgba(245,196,0,0.06)" stroke-width="1"/>
    <path d="M80 0 L80 400 M160 0 L160 400 M240 0 L240 400 M320 0 L320 400" stroke="rgba(245,196,0,0.06)" stroke-width="1"/>

    <!-- Outer Gold Frame -->
    <rect x="10" y="10" width="380" height="380" rx="16" fill="none" stroke="${accentColor}" stroke-opacity="0.3" stroke-width="2"/>
    <path d="M10 40 L40 10 M390 40 L360 10 M10 360 L40 390 M390 360 L360 390" stroke="${accentColor}" stroke-width="3"/>

    <!-- Player Silhouette Outline -->
    <g transform="translate(100, 70)">
      <!-- Shoulders & Jersey -->
      <path d="M-20 220 Q100 140 220 220 L240 270 L-40 270 Z" fill="#1A1C24" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="2"/>
      <path d="M20 200 Q100 160 180 200 L160 270 L40 270 Z" fill="#0D0D11"/>
      
      <!-- Na'Vi V-Shape Yellow Stripe -->
      <path d="M60 200 L100 240 L140 200 L125 190 L100 215 L75 190 Z" fill="url(#goldGrad)" filter="url(#glow)"/>

      <!-- Head & Neck -->
      <path d="M70 110 Q100 90 130 110 L135 170 Q100 190 65 170 Z" fill="#242733"/>
      <ellipse cx="100" cy="100" rx="45" ry="55" fill="#2E3244"/>

      <!-- Pro Headset -->
      <path d="M45 80 Q100 30 155 80" stroke="${accentColor}" stroke-width="10" fill="none" stroke-linecap="round"/>
      <rect x="40" y="70" width="18" height="36" rx="6" fill="#F5C400" filter="url(#glow)"/>
      <rect x="142" y="70" width="18" height="36" rx="6" fill="#F5C400" filter="url(#glow)"/>
      <path d="M48 95 Q30 120 70 125" stroke="${accentColor}" stroke-width="3" fill="none"/>
      <circle cx="70" cy="125" r="4" fill="#F5C400"/>
    </g>

    <!-- Alias Overlay Banner -->
    <rect x="30" y="310" width="340" height="60" rx="8" fill="rgba(13,13,17,0.9)" stroke="${accentColor}" stroke-opacity="0.5" stroke-width="1.5"/>
    <text x="200" y="342" text-anchor="middle" font-family="'Bebas Neue', sans-serif" font-size="28" fill="#FFFFFF" letter-spacing="3">
      ${encodedAlias}
    </text>
    <text x="200" y="360" text-anchor="middle" font-family="'Rajdhani', sans-serif" font-size="12" font-weight="bold" fill="${accentColor}" letter-spacing="2">
      ${encodedRole}
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const AVATARS = {
  dendiHero: "/assets/images/dendi banner.jpeg?v=20",
  dendi: "/assets/images/dendi.jpg?v=11",
  kurokyHero: "/assets/images/kuroky banner.jpeg?v=20",
  kuroky: "/assets/images/kuroky avatar.jpeg?v=12",
  puppeyHero: "/assets/images/puppy banner.jpeg?v=20",
  puppey: "/assets/images/puppey avatar.jpeg?v=12",
  xboctHero: "/assets/images/Xboct banner.jpeg?v=20",
  xboct: "/assets/images/XBOCT.jpg?v=11",
  funn1kHero: "/assets/images/funn1k banner.jpeg?v=20",
  funn1k: "/assets/images/fUNN1K.jpg?v=11",
  coachV: createEsportsSvgAvatar("COACH V", "HEAD COACH", "#F5C400"),
  metaWang: createEsportsSvgAvatar("META WANG", "LEAD ANALYST", "#00F2FE")
};
