const fs = require('fs');

async function testLinks() {
  const file = fs.readFileSync('src/data/menu.js', 'utf8');
  const urls = [...file.matchAll(/https:\/\/images\.unsplash\.com\/[^']+/g)].map(m => m[0]);
  
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (!res.ok) console.log('FAILED:', url);
    } catch (e) {
      console.log('ERROR:', url, e.message);
    }
  }
  console.log('Done testing links from menu.js');
}

testLinks();
