// Script untuk generate icons dengan placeholder
// Karena kita tidak memiliki sharp atau canvas di environment ini,
// kita akan membuat placeholder icons dengan HTML/CSS yang bisa di-screenshot

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconSizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];
const iconsDir = path.join(__dirname, 'public', 'images', 'icons');

// Pastikan directory exists
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
}

// Buat HTML template untuk generate icons
const createIconHTML = (size) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; }
    .icon {
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: ${size * 0.15}px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .code-symbol {
      color: white;
      font-family: 'Courier New', monospace;
      font-size: ${size * 0.4}px;
      font-weight: bold;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    .brackets {
      position: absolute;
      color: rgba(255,255,255,0.8);
      font-family: 'Courier New', monospace;
      font-size: ${size * 0.3}px;
      font-weight: bold;
    }
    .left-bracket {
      left: ${size * 0.1}px;
      top: 50%;
      transform: translateY(-50%);
    }
    .right-bracket {
      right: ${size * 0.1}px;
      top: 50%;
      transform: translateY(-50%);
    }
  </style>
</head>
<body>
  <div class="icon">
    <span class="brackets left-bracket">{</span>
    <span class="code-symbol">NS</span>
    <span class="brackets right-bracket">}</span>
  </div>
</body>
</html>
`;

// Generate HTML files for each icon size
iconSizes.forEach(size => {
    const htmlContent = createIconHTML(size);
    const htmlPath = path.join(iconsDir, `icon-${size}x${size}.html`);
    fs.writeFileSync(htmlPath, htmlContent);
    console.log(`Generated icon template: icon-${size}x${size}.html`);
});

console.log('Icon templates generated! To create PNG files:');
console.log('1. Open each HTML file in a browser');
console.log('2. Take a screenshot of exactly the icon dimensions');
console.log('3. Save as PNG with the corresponding filename');
console.log('4. Or use a tool like html-to-image library');

// Juga buat README untuk instructions
const readmeContent = `# NgodingSkuyy Icons

## Generated Icon Sizes
${iconSizes.map(size => `- icon-${size}x${size}.png (${size}x${size}px)`).join('\n')}

## How to Generate PNG Icons

### Method 1: Manual Screenshot
1. Open each HTML file in browser
2. Use browser dev tools to set exact viewport size
3. Take screenshot and crop to exact dimensions
4. Save as PNG

### Method 2: Using Puppeteer (if available)
\`\`\`javascript
const puppeteer = require('puppeteer');

async function generateIcon(size) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: size, height: size });
  await page.goto(\`file://\${__dirname}/icon-\${size}x\${size}.html\`);
  await page.screenshot({
    path: \`icon-\${size}x\${size}.png\`,
    clip: { x: 0, y: 0, width: size, height: size }
  });
  await browser.close();
}
\`\`\`

### Method 3: Online Tools
Use online HTML to image converters like:
- htmlcsstoimage.com
- html-image-generator.com

## Icon Design
- Background: Linear gradient from #667eea to #764ba2
- Symbol: "NS" in white representing NgodingSkuyy
- Brackets: Code-style brackets { } in semi-transparent white
- Border radius: 15% of icon size for modern look
`;

fs.writeFileSync(path.join(iconsDir, 'README.md'), readmeContent);
console.log('Created README.md with instructions');
