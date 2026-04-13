import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent browsers from MIME-sniffing the content type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Block clickjacking — page can't be embedded in an iframe
  { key: "X-Frame-Options", value: "DENY" },
  // Stop sending the referrer to external sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser features not needed by the site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Force HTTPS for 1 year (enable once you have a real domain + SSL)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Content Security Policy — controls what resources the browser can load
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js needs inline scripts for hydration
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Styles: self + inline (Tailwind)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + Airtable CDN (thumbnails)
      "img-src 'self' data: blob: https://v5.airtableusercontent.com",
      // Iframes: YouTube embed only
      "frame-src https://www.youtube.com",
      // API calls: self + Resend + Airtable
      "connect-src 'self' https://api.resend.com https://api.airtable.com",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
