// ╔══════════════════════════════════════════════════════════════╗
// ║  CloudVault — CONFIG TEMPLATE                               ║
// ║  Copy this file to config.js and fill in your real values   ║
// ╚══════════════════════════════════════════════════════════════╝

// ── Firebase ────────────────────────────────────────────────────
// Get these from: Firebase Console → Project Settings → Your Apps
var FIREBASE_CONFIG = {
  apiKey:            'YOUR_FIREBASE_API_KEY',
  authDomain:        'YOUR_PROJECT.firebaseapp.com',
  projectId:         'YOUR_PROJECT_ID',
  storageBucket:     'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId:             'YOUR_APP_ID'
};

// ── EmailJS ─────────────────────────────────────────────────────
// Get these from: https://emailjs.com → Account → API Keys
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';    // e.g. 'AbCdEfGhIjKlMnOp'
