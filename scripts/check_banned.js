const fs = require('fs');
const path = require('path');

// Banned words checker
const BANNED_WORDS = [
  'delve', 'landscape', 'realm', 'crucial', 'leverage', 'game-changer',
  'unlock', 'seamless', 'cutting-edge', 'robust', 'dynamic', 'revolutionize',
  'elevate', 'mastering', 'tapestry', 'beacon'
];

function checkBannedWords(text, context) {
  const lower = text.toLowerCase();
  for (const word of BANNED_WORDS) {
    // word boundary regex
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    if (regex.test(lower)) {
      throw new Error(`[BANNED WORD DETECTED] "${word}" in ${context}`);
    }
  }
}

console.log('Banned words validator loaded.');
