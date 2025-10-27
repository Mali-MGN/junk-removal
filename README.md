# DK Disposal Company Website (Dump King Disposal)

A fast, responsive, SEO-friendly static website for a Bay Area junk removal company. DK Disposal Company is your go-to partner for reclaiming space and peace of mind. Built with a CDN-hosted Tailwind CSS and vanilla JS.

## Structure
- `index.html` — main landing page with services, benefits, gallery, and quote form
- `pricing.html` — transparent rates and ranges
- `faq.html` — frequently asked questions
- `privacy.html` — privacy policy
- `terms.html` — terms of service
- `404.html` — not found page
- `assets/app.js` — smooth scrolling and quote form handling
- `robots.txt`, `sitemap.xml`, `site.webmanifest` — SEO/PWA assets

## Local preview
Open `index.html` directly in a browser, or serve with a simple HTTP server:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000/
```

## Deploy
- GitHub Pages: push this folder to a repo and enable Pages (root).
- Netlify/Vercel: import the repo as a static site.

Update `sitemap.xml` and `robots.txt` with your real domain (replace `https://example.com`).

## Customize
- Replace placeholder images with real photos.
- Update phone, email, and service areas if needed.
- Consider connecting the quote form to a backend or form service (e.g., Netlify Forms, Formspree).

## License
All rights reserved © DK Disposal Company.
