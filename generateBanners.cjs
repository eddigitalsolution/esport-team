const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const createSvgBanner = (alias, role, color) => `
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
      <stop offset="0%" stop-color="${color}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#bgGrad)"/>
  <rect width="1280" height="720" fill="url(#spotlight)"/>
  
  <path d="M0 0 L1280 720 M0 720 L1280 0" stroke="rgba(245,196,0,0.04)" stroke-width="2"/>
  
  <!-- Right Player Standee Illustration -->
  <g transform="translate(820, 120)">
    <rect x="0" y="0" width="340" height="460" rx="20" fill="#1A1C24" stroke="${color}" stroke-width="3" opacity="0.9"/>
    <path d="M40 410 Q170 310 300 410 L300 460 L40 460 Z" fill="#0D0D11"/>
    <path d="M120 360 L170 410 L220 360 Z" fill="url(#goldGrad)"/>
    <ellipse cx="170" cy="190" rx="70" ry="85" fill="#2E3244"/>
    <path d="M90 150 Q170 70 250 150" stroke="#F5C400" stroke-width="12" fill="none"/>
    <rect x="80" y="130" width="22" height="44" rx="8" fill="#F5C400"/>
    <rect x="238" y="130" width="22" height="44" rx="8" fill="#F5C400"/>
  </g>
</svg>
`;

fs.writeFileSync(path.join(destDir, 'xboct_hero_banner.svg'), createSvgBanner('XBOCT', 'CARRY / MID', '#FF3366'));
fs.writeFileSync(path.join(destDir, 'funn1k_hero_banner.svg'), createSvgBanner('FUNN1K', 'OFFLANER / MID', '#00C853'));

console.log('Successfully updated SVG hero banners without duplicate text!');
