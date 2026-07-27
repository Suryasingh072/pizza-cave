/* ============================================================
   PIZZA CAVE — CARTOON ICON LIBRARY
   Cute flat-style SVG illustrations (original artwork), used as
   playful placeholders in place of product photography.
   Swap any of these for real food photos later if you like —
   just replace the <img>/svg markup wherever CARTOON.xxx is used.
   ============================================================ */

const CARTOON = {

  pizza: `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 18 L182 172 Q100 202 18 172 Z" fill="#e8b34a" stroke="#3a2313" stroke-width="6" stroke-linejoin="round"/>
    <path d="M100 40 L163 164 Q100 184 37 164 Z" fill="#f7cf4d"/>
    <circle cx="88" cy="86" r="11" fill="#d81324" stroke="#7a0b12" stroke-width="3"/>
    <circle cx="122" cy="112" r="11" fill="#d81324" stroke="#7a0b12" stroke-width="3"/>
    <circle cx="70" cy="132" r="9" fill="#d81324" stroke="#7a0b12" stroke-width="3"/>
    <ellipse cx="112" cy="68" rx="8" ry="5" fill="#3a7d44" transform="rotate(25 112 68)"/>
    <ellipse cx="80" cy="112" rx="7" ry="4.5" fill="#3a7d44" transform="rotate(-15 80 112)"/>
    <path d="M58 160 q-2 14 -8 22M100 176 q0 14 0 22M142 160 q2 14 8 22" stroke="#f7cf4d" stroke-width="7" stroke-linecap="round" fill="none"/>
    <circle cx="72" cy="182" r="4.5" fill="#3a2313"/>
    <circle cx="128" cy="182" r="4.5" fill="#3a2313"/>
    <path d="M84 190 Q100 199 116 190" stroke="#3a2313" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  burger: `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 92 Q30 46 100 46 Q170 46 170 92 Z" fill="#e8b34a" stroke="#3a2313" stroke-width="6"/>
    <circle cx="65" cy="66" r="4" fill="#fff2c9"/><circle cx="100" cy="58" r="4" fill="#fff2c9"/><circle cx="135" cy="66" r="4" fill="#fff2c9"/>
    <rect x="26" y="92" width="148" height="14" rx="6" fill="#3a7d44" stroke="#234d2a" stroke-width="4"/>
    <rect x="26" y="106" width="148" height="16" rx="6" fill="#f3b504" stroke="#a87400" stroke-width="4"/>
    <rect x="22" y="122" width="156" height="24" rx="10" fill="#8a4b23" stroke="#4a2712" stroke-width="6"/>
    <rect x="30" y="146" width="140" height="14" rx="6" fill="#d81324" stroke="#7a0b12" stroke-width="4"/>
    <path d="M20 160 Q100 190 180 160 L172 176 Q100 200 28 176 Z" fill="#f2e2b6" stroke="#3a2313" stroke-width="6" stroke-linejoin="round"/>
    <circle cx="80" cy="130" r="4" fill="#3a2313"/>
    <circle cx="120" cy="130" r="4" fill="#3a2313"/>
    <path d="M90 138 Q100 144 110 138" stroke="#3a2313" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  pasta: (sauce = "#d81324") => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="140" rx="82" ry="46" fill="#f2e2b6" stroke="#3a2313" stroke-width="6"/>
    <ellipse cx="100" cy="128" rx="70" ry="34" fill="${sauce}" opacity="0.9"/>
    <path d="M50 118 q20 -22 40 0 q20 -22 40 0 q20 -22 40 0" stroke="#f7cf4d" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M55 132 q20 -18 40 0 q20 -18 40 0 q20 -18 30 -2" stroke="#f7cf4d" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M64 96 q4 -16 -4 -28M100 92 q0 -18 0 -30M136 96 q-4 -16 4 -28" stroke="#e7e7e7" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.85"/>
    <circle cx="76" cy="150" r="4.5" fill="#3a2313"/>
    <circle cx="124" cy="150" r="4.5" fill="#3a2313"/>
    <path d="M86 160 Q100 168 114 160" stroke="#3a2313" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  garlicBread: `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 130 Q24 60 100 52 Q176 60 176 130 Q176 168 100 168 Q24 168 24 130Z" fill="#e8b34a" stroke="#3a2313" stroke-width="6"/>
    <path d="M40 128 Q40 78 100 70 Q160 78 160 128 Q160 152 100 152 Q40 152 40 128Z" fill="#f7cf4d"/>
    <path d="M70 82 q30 -14 60 0M64 104 q36 -16 72 0M68 126 q32 -14 64 0" stroke="#d99a2b" stroke-width="4" fill="none" stroke-linecap="round"/>
    <ellipse cx="145" cy="60" rx="14" ry="18" fill="#f2e9d8" stroke="#3a2313" stroke-width="4" transform="rotate(20 145 60)"/>
    <path d="M145 46 q4 -10 10 -14" stroke="#3a7d44" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="118" r="4.5" fill="#3a2313"/>
    <circle cx="120" cy="118" r="4.5" fill="#3a2313"/>
    <path d="M90 128 Q100 133 110 128" stroke="#3a2313" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  drink: (color = "#d81324") => `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 60 L145 60 L132 178 Q100 190 68 178 Z" fill="#dff1ff" opacity="0.25" stroke="#3a2313" stroke-width="6" stroke-linejoin="round"/>
    <path d="M62 90 L138 90 L128 172 Q100 182 72 172 Z" fill="${color}"/>
    <path d="M55 60 L145 60" stroke="#3a2313" stroke-width="6" stroke-linecap="round"/>
    <rect x="94" y="20" width="10" height="46" rx="5" fill="#fff" stroke="#3a2313" stroke-width="4" transform="rotate(12 99 40)"/>
    <circle cx="80" cy="110" r="5" fill="#fff" opacity="0.7"/>
    <circle cx="115" cy="130" r="4" fill="#fff" opacity="0.6"/>
    <circle cx="88" cy="140" r="4.5" fill="#3a2313"/>
    <circle cx="112" cy="140" r="4.5" fill="#3a2313"/>
    <path d="M92 150 Q100 155 108 150" stroke="#3a2313" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  water: `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M85 24h30v20l14 14v118a10 10 0 0 1-10 10H81a10 10 0 0 1-10-10V58l14-14Z" fill="#eaf6ff" stroke="#3a2313" stroke-width="6" stroke-linejoin="round"/>
    <rect x="76" y="94" width="48" height="66" rx="6" fill="#4bb6e8"/>
    <rect x="80" y="70" width="40" height="16" rx="4" fill="#3a2313" opacity="0.85"/>
    <circle cx="90" cy="128" r="4" fill="#3a2313"/>
    <circle cx="110" cy="128" r="4" fill="#3a2313"/>
    <path d="M92 138 Q100 143 108 138" stroke="#3a2313" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  coffee: `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 74h96l-10 90a16 16 0 0 1-16 14H76a16 16 0 0 1-16-14Z" fill="#8a4b23" stroke="#3a2313" stroke-width="6" stroke-linejoin="round"/>
    <path d="M146 84c22-4 34 14 22 30-8 10-20 12-28 8" fill="none" stroke="#3a2313" stroke-width="6" stroke-linecap="round"/>
    <path d="M70 60q6-18-4-30M100 56q6-18-4-30M130 60q6-18-4-30" stroke="#c9c9c9" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <circle cx="84" cy="120" r="4.5" fill="#f2e2b6"/>
    <circle cx="112" cy="120" r="4.5" fill="#f2e2b6"/>
    <path d="M88 132 Q100 138 108 132" stroke="#f2e2b6" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  cake: `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="150" rx="70" ry="20" fill="#3a2313"/>
    <path d="M50 150 V110 Q100 130 150 110 V150Z" fill="#5a3018" stroke="#2a170b" stroke-width="5"/>
    <ellipse cx="100" cy="110" rx="50" ry="18" fill="#7a4022" stroke="#2a170b" stroke-width="5"/>
    <path d="M80 108 q20 18 0 32" stroke="#3a1a08" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="100" cy="98" r="9" fill="#d81324" stroke="#7a0b12" stroke-width="3"/>
    <circle cx="76" cy="128" r="4.5" fill="#f2e2b6"/>
    <circle cx="124" cy="128" r="4.5" fill="#f2e2b6"/>
    <path d="M84 138 Q100 145 116 138" stroke="#f2e2b6" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  comboBox: `
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="60" width="152" height="112" rx="10" fill="#1c1c1f" stroke="#3a2313" stroke-width="6"/>
    <rect x="24" y="60" width="152" height="30" rx="10" fill="#d81324"/>
    <path d="M60 118 L100 96 L140 118 Q100 138 60 118Z" fill="#f7cf4d" stroke="#3a2313" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="90" cy="112" r="5" fill="#d81324"/>
    <circle cx="112" cy="118" r="5" fill="#d81324"/>
    <rect x="146" y="112" width="18" height="40" rx="4" fill="#4bb6e8" stroke="#3a2313" stroke-width="3"/>
    <circle cx="65" cy="150" r="4.5" fill="#f2e2b6"/>
    <circle cx="105" cy="150" r="4.5" fill="#f2e2b6"/>
    <path d="M75 160 Q90 166 100 160" stroke="#f2e2b6" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  /* Original chef mascot — brand mark, inspired by "pizza chef" concept, drawn fresh in the site's own red/gold palette */
  chefLogo: `
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="58" fill="#141416" stroke="#f3b504" stroke-width="3"/>
    <ellipse cx="60" cy="38" rx="22" ry="16" fill="#f6f1e7"/>
    <path d="M38 38 a22 20 0 0 1 44 0 q-4 -18 -22 -18 q-18 0 -22 18Z" fill="#f6f1e7"/>
    <circle cx="30" cy="34" r="9" fill="#f6f1e7"/><circle cx="90" cy="34" r="9" fill="#f6f1e7"/>
    <path d="M42 60 Q60 74 78 60 L82 88 Q60 100 38 88Z" fill="#d81324" stroke="#7a0b12" stroke-width="2.5"/>
    <circle cx="51" cy="52" r="3" fill="#141416"/><circle cx="69" cy="52" r="3" fill="#141416"/>
    <path d="M52 60 Q60 65 68 60" stroke="#141416" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M46 92 Q60 100 74 92" stroke="#f3b504" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  scooter: `
  <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="112" r="20" fill="#1c1c1f" stroke="#f6f1e7" stroke-width="5"/>
    <circle cx="168" cy="112" r="20" fill="#1c1c1f" stroke="#f6f1e7" stroke-width="5"/>
    <path d="M50 112 h50 l14 -34 h40" stroke="#d81324" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M154 78 q26 -4 30 20" stroke="#d81324" stroke-width="10" fill="none" stroke-linecap="round"/>
    <rect x="18" y="66" width="34" height="30" rx="6" fill="#f3b504" stroke="#3a2313" stroke-width="4"/>
    <text x="35" y="86" font-family="Space Mono, monospace" font-size="10" fill="#3a2313" text-anchor="middle">PC</text>
    <circle cx="150" cy="60" r="16" fill="#f2c9a0"/>
    <path d="M136 52 a16 14 0 0 1 30 0 q-4 -12 -15 -12 q-11 0 -15 12Z" fill="#d81324"/>
    <path d="M140 96 q10 -20 24 -14" stroke="#141416" stroke-width="8" fill="none" stroke-linecap="round"/>
  </svg>`
};
