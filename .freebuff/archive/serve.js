#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');
const PORT = 3000;

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url.endsWith('/')) url += 'index.html';
  
  let filePath = path.join(BUILD, url);
  
  // If no extension, try .html
  if (!path.extname(filePath)) {
    filePath += '.html';
    if (!fs.existsSync(filePath)) {
      filePath = path.join(BUILD, url, 'index.html');
    }
  }
  
  if (!fs.existsSync(filePath)) {
    // SPA fallback
    filePath = path.join(BUILD, 'index.html');
  }
  
  const ext = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';
  
  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': mime });
    res.end(content);
  } catch(e) {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
