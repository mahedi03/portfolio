const http = require('http');

const endpoints = [
  '/services/chatgpt-ads',
  '/services/creative-content',
  '/services/google-ads',
  '/services/local-seo',
  '/services/media-buying',
  '/services/meta-ads',
  '/services/pinterest-ads',
  '/services/social-media-management',
  '/services/tiktok-ads',
  '/services/website-marketing',
];

async function check(url) {
  return new Promise((resolve) => {
    http.get('http://localhost:3001' + url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        resolve({ url, status: res.statusCode, length: data.length });
      });
    }).on('error', (err) => {
      resolve({ url, status: 'ERR', error: err.message });
    });
  });
}

async function run() {
  console.log('Testing 10 services on dev server:');
  for (const ep of endpoints) {
    const res = await check(ep);
    console.log(`[${res.status}] ${res.url} (${res.length || res.error} bytes)`);
  }
}

run();
