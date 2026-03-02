// CloudVault — Configuration File
// ════════════════════════════════════════════════════════════════
// Fill in YOUR real values below, then open cloudvault.html.
// This file is loaded first via: <script src="config.js"></script>
//
// Firebase API keys are public by design — security comes from
// Firebase Security Rules + Authorized Domains, not hiding keys.
// See: https://firebase.google.com/docs/projects/api-keys
// ════════════════════════════════════════════════════════════════

// ── 1. Google Sign-In ─────────────────────────────────────────
// Get from: Google Cloud Console → APIs & Services → Credentials
// → OAuth 2.0 Client IDs → Web client → Client ID
var GOOGLE_CLIENT_ID = '302438212870-0ia3v7g6uj89i8b24bmtrfmrrkccnmic.apps.googleusercontent.com';

// ── 2. Firebase (cross-device sync + blocklist) ───────────────
// Get from: Firebase Console → Project Settings → Your Apps (web)
var FIREBASE_CONFIG = {
  apiKey:            'AIzaSyAETkFRPuicaVS4yu0Wmi6UldezPZ4boEI',
  authDomain:        'cloudvault-web-app.firebaseapp.com',
  projectId:         'cloudvault-web-app',
  storageBucket:     'cloudvault-web-app.firebasestorage.app',
  messagingSenderId: '382820325772',
  appId:             '1:382820325772:web:fe04b4fff54ba2ba17dea9'
};

// ── 3. EmailJS (verification + password reset emails) ────────
// Get from: https://emailjs.com → Account → API Keys
// Service ID: emailjs.com → Email Services → your service
// Template ID: emailjs.com → Email Templates → your template
//   Template variables needed: {{to_email}} {{to_name}} {{code}} {{expires}}
const EMAILJS_SERVICE_ID  = 'service_2pxx48i';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_soigxtd';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'bpPEQU2IXEDnj2JkE';    // e.g. 'AbCdEfGhIjKlMnOp'