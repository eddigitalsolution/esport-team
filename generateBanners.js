const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const createSvgBanner = (alias, role, color, hero) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D0D11"/>
      <stop offset="50%" stop-color="#14151C"/>
      <stop offset="100%" stop-color="#0D0D11"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F5C400"/>
      <stop offset="100%" stop-color="#FFDF00"/>
    </linearGradient>
    <radialGradient id="spotlight" cx="75%" cy="45%" r="55%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#bgGrad)"/>
  <rect width="1280" height="720" fill="url(#spotlight)"/>
  
  <path d="M0 0 L1280 720 M0 720 L1280 0" stroke="rgba(245,196,0,0.05)" stroke-width="2"/>
  
  <!-- Right Player Standee Illustration -->
  <g transform="translate(800, 120)">
    <rect x="0" y="0" width="360" height="480" rx="20" fill="#1A1C24" stroke="${color}" stroke-width="3" opacity="0.9"/>
    <path d="M40 430 Q180 330 320 430 L320 480 L40 480 Z" fill="#0D0D11"/>
    <path d="M130 380 L180 430 L230 380 Z" fill="url(#goldGrad)"/>
    <ellipse cx="180" cy="200" rx="75" ry="90" fill="#2E3244"/>
    <path d="M95 160 Q180 80 265 160" stroke="#F5C400" stroke-width="14" fill="none"/>
    <rect x="85" y="140" width="24" height="48" rx="8" fill="#F5C400"/>
    <rect x="250" y="140" width="24" height="48" rx="8" fill="#F5C400"/>
    <text x="180" y="450" text-anchor="middle" font-family="'Bebas Neue', sans-serif" font-size="36" fill="#FFFFFF" letter-spacing="2">${alias}</text>
  </g>

  <!-- Left Header Overlay Text -->
  <text x="80" y="260" font-family="'Bebas Neue', sans-serif" font-size="90" fill="#FFFFFF" letter-spacing="4">MEET "<tspan fill="#F5C400">${alias}</tspan>"</text>
  <text x="80" y="340" font-family="'Bebas Neue', sans-serif" font-size="90" fill="#FFFFFF" letter-spacing="4">THE LEGEND</text>
  <text x="80" y="410" font-family="'Rajdhani', sans-serif" font-size="22" font-weight="bold" fill="${color}" letter-spacing="4">OFFICIAL DOTA 2 ${role} • SIGNATURE HERO: ${hero}</text>
</svg>
`;

fs.writeFileSync(path.join(destDir, 'xboct_hero_banner.svg'), createSvgBanner('XBOCT', 'CARRY / MID', '#FF3366', 'Lifestealer'));
fs.writeFileSync(path.join(destDir, 'funn1k_hero_banner.svg'), createSvgBanner('FUNN1K', 'OFFLANER / MID', '#00C853', 'Bounty Hunter'));

console.log('Successfully generated remaining player hero banners SVG files!');
