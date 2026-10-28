import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Simple CRC32 implementation
function makeCrcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    table[n] = c;
  }
  return table;
}

const crcTable = makeCrcTable();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);

  const crcBuf = Buffer.alloc(4);
  const toCrc = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(toCrc), 0);

  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function generatePNG(width, height, isMaskable = false) {
  // RGBA buffer: width * 4 per scanline + 1 filter byte per scanline
  const scanlineLength = width * 4 + 1;
  const rawData = Buffer.alloc(height * scanlineLength);

  const cx = width / 2;
  const cy = height / 2;
  const maxR = width / 2;
  // If maskable, scale content down to 70% to guarantee safe margin > 15%
  const scale = isMaskable ? 0.68 : 0.88;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // Filter type: None

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;

      // Coordinate relative to center normalized to [-1, 1]
      const nx = (x - cx) / (cx * scale);
      const ny = (y - cy) / (cy * scale);
      const dist = Math.sqrt(nx * nx + ny * ny);

      // Default background: NEXORA Deep Dark Navy #10152B
      let r = 16, g = 21, b = 43, a = 255;

      // Subtle radial glow around center
      if (dist < 1.3) {
        const glowFactor = Math.max(0, 1 - dist / 1.3);
        r = Math.min(255, Math.floor(r + 30 * glowFactor));
        g = Math.min(255, Math.floor(g + 45 * glowFactor));
        b = Math.min(255, Math.floor(b + 90 * glowFactor));
      }

      // Outer emblem circle / border (thickness between 0.82 and 0.94)
      if (dist >= 0.82 && dist <= 0.94) {
        const borderGlow = 1 - Math.abs(dist - 0.88) / 0.06;
        // Gradient from Cyan (#65D8FF) on top to Purple (#A994FF) on bottom
        const gradT = (ny + 1) / 2;
        const br = 101 * (1 - gradT) + 169 * gradT;
        const bg = 216 * (1 - gradT) + 148 * gradT;
        const bb = 255;
        r = Math.floor(r * (1 - borderGlow) + br * borderGlow);
        g = Math.floor(g * (1 - borderGlow) + bg * borderGlow);
        b = Math.floor(b * (1 - borderGlow) + bb * borderGlow);
      }

      // Inside emblem: Stylized "N"
      // Vertical left bar: x between -0.45 and -0.22, y between -0.55 and 0.55
      // Vertical right bar: x between 0.22 and 0.45, y between -0.55 and 0.55
      // Diagonal bar: y ~ 1.55 * x, with width ~ 0.25
      const inLeftBar = nx >= -0.45 && nx <= -0.22 && ny >= -0.55 && ny <= 0.55;
      const inRightBar = nx >= 0.22 && nx <= 0.45 && ny >= -0.55 && ny <= 0.55;
      const diagDist = Math.abs(ny - (1.4 * nx));
      const inDiag = diagDist <= 0.24 && nx >= -0.38 && nx <= 0.38 && ny >= -0.55 && ny <= 0.55;

      if (inLeftBar || inRightBar || inDiag) {
        // High-tech luminous gradient: Cyan to Violet to White
        const gradY = (ny + 0.55) / 1.1;
        let symR = 101 * (1 - gradY) + 169 * gradY;
        let symG = 216 * (1 - gradY) + 148 * gradY;
        let symB = 255;

        // Add specular brightness in center of diagonal
        if (inDiag && diagDist < 0.1) {
          symR = Math.min(255, symR + 60);
          symG = Math.min(255, symG + 40);
          symB = 255;
        }

        r = Math.floor(symR);
        g = Math.floor(symG);
        b = Math.floor(symB);
      }

      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  // PNG Header
  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // RGBA color type
  ihdrData[10] = 0; // Deflate compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Non-interlaced
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // IDAT chunk
  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const idatChunk = createChunk('IDAT', compressed);

  // IEND chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.resolve(process.cwd(), 'public/icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. icon-192.png (purpose: any)
fs.writeFileSync(path.join(outDir, 'icon-192.png'), generatePNG(192, 192, false));
console.log('✓ Created public/icons/icon-192.png (192x192, purpose: any)');

// 2. icon-512.png (purpose: any)
fs.writeFileSync(path.join(outDir, 'icon-512.png'), generatePNG(512, 512, false));
console.log('✓ Created public/icons/icon-512.png (512x512, purpose: any)');

// 3. icon-512-maskable.png (purpose: maskable with safe margin)
fs.writeFileSync(path.join(outDir, 'icon-512-maskable.png'), generatePNG(512, 512, true));
console.log('✓ Created public/icons/icon-512-maskable.png (512x512, purpose: maskable)');

// 4. apple-touch-icon.png (180x180)
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), generatePNG(180, 180, false));
console.log('✓ Created public/icons/apple-touch-icon.png (180x180)');

// 5. favicon.svg
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141B34" />
      <stop offset="100%" stop-color="#0B0E1E" />
    </linearGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#65D8FF" />
      <stop offset="100%" stop-color="#A994FF" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <circle cx="256" cy="256" r="190" fill="none" stroke="url(#glowGrad)" stroke-width="14" opacity="0.85" filter="url(#glow)"/>
  <path d="M 160 140 L 220 140 L 220 372 L 160 372 Z" fill="url(#glowGrad)"/>
  <path d="M 292 140 L 352 140 L 352 372 L 292 372 Z" fill="url(#glowGrad)"/>
  <path d="M 180 140 L 332 372 L 272 372 L 160 200 Z" fill="#FFFFFF" opacity="0.95" filter="url(#glow)"/>
</svg>`;
fs.writeFileSync(path.join(outDir, 'favicon.svg'), svgContent, 'utf-8');
console.log('✓ Created public/icons/favicon.svg');
