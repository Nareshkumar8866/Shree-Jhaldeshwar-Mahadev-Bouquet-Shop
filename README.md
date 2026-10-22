# Naresh Bouquet — chocolate gifting website

Plain HTML + CSS + JavaScript, GSAP/ScrollTrigger for scroll animation, Three.js for the floating
chocolates/ribbons/sparkles behind the hero. No build step.

## 1. Add your photos
See `images/README.txt`. Add `images/bouquet.jpg` and `images/shop.jpg` (and optionally one photo per product).
The site shows your real photos; it never generates fake product images.

## 2. Edit your details — `js/config.js`
- `whatsapp`: digits with country code, e.g. `"919876543210"`. Until set, WhatsApp buttons open WhatsApp
  with the message ready and let the visitor choose a contact.
- `address`, `hours`, `phone`, `email`, `mapsLink`, `mapsEmbed`, `social`: leave empty to hide.
- `products`: change names, descriptions, photos, `price` (empty shows "Price on request").
- `reviews`: add REAL reviews only; the section stays hidden while empty.
- `faqs`, `occasions`, `steps`: edit text freely. Check the FAQ answers match how you really work.

## 3. Run it
Open with a local server (needed for the 3D module):
    cd naresh-bouquet
    python3 -m http.server 8080      # then visit http://localhost:8080
Or upload the whole folder to any static host (Netlify, GitHub Pages, Vercel, cPanel).

## Notes
- Scripts load from CDNs (cdnjs for GSAP, jsDelivr for Three.js, Google Fonts); internet needed.
- Respects "reduce motion"; 3D layer pauses off-screen and uses fewer objects on mobile.
- For SEO/social sharing after hosting, add your site URL, a canonical link and an `og:image` to `index.html`.
