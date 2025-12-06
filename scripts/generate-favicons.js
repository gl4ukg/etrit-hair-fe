const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 192, 512];
const inputFile = path.join(__dirname, '../public/logo.png');
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../src/app');

async function generateFavicons() {
  try {
    // Generate PNG favicons
    for (const size of sizes) {
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
      console.log(`Generated favicon-${size}x${size}.png`);
    }

    // Generate apple-touch-icon (180x180)
    await sharp(inputFile)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('Generated apple-touch-icon.png');

    // Generate favicon.ico (32x32)
    await sharp(inputFile)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(appDir, 'favicon.ico'));
    console.log('Generated favicon.ico');

    // Create site.webmanifest
    const manifest = {
      name: 'Etrit Hair',
      short_name: 'Etrit Hair',
      description: 'Premium Hair Salon & Styling Services',
      icons: [
        {
          src: '/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone'
    };

    fs.writeFileSync(
      path.join(publicDir, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );
    console.log('Generated site.webmanifest');

    console.log('\nAll favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
