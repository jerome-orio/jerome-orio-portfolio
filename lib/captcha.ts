'use server';

export async function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let text = '';
  for (let i = 0; i < 4; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  const svg = `
    <svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="noise" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2"/>
          <feColorMatrix type="saturate" values="0"/>
          <feBlend mode="multiply" in2="SourceGraphic"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="white"/>
      <g filter="url(#noise)">
        <rect width="100%" height="100%" fill="white" opacity="0.5"/>
      </g>
      ${Array.from(text).map((char, i) => `
        <text 
          x="${30 + i * 30}" 
          y="${35 + Math.random() * 10}"
          fill="hsl(var(--p))"
          transform="rotate(${Math.random() * 20 - 10} ${30 + i * 30} 35)"
          font-family="Arial"
          font-size="32"
        >${char}</text>
      `).join('')}
      ${Array(5).fill(0).map(() => `
        <line 
          x1="${Math.random() * 200}" 
          y1="${Math.random() * 60}" 
          x2="${Math.random() * 200}" 
          y2="${Math.random() * 60}"
          stroke="hsl(var(--p) / 0.5)"
          stroke-width="1"
        />
      `).join('')}
    </svg>
  `;

  return { text, svg: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}` };
}