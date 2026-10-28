# Shri Siddh – Hotel Homepage

A responsive-in-progress hotel homepage built with **Next.js** from a Figma design, created as a technical assignment for Kontent Kraft Digital.

**Live demo:** https://shri-siddh-web.vercel.app/
**Design reference:** Figma file "Shri Siddh – Web"

> This is a **frontend-only** project. There is no backend, database or authentication. All content (rooms, reviews, blog posts) is hard-coded in the components.

---

## Tech Stack

- **Next.js** (App Router) and **React**
- **CSS Modules** for component styling, plus a small `globals.css` for tokens and resets
- **next/image**, **next/link** for optimized images and navigation
- **Fonts:** Mona Sans (body), Cormorant Garamond (headings), loaded via Google Fonts
- Deployed on **Vercel**

---

## Sections Implemented

1. Navbar (transparent, overlaid on the hero)
2. Hero with booking bar and ratings strip
3. Find Your Room (3 room cards)
4. Hotel Services (overlapping card on a full-width image)
5. Our Story
6. Video banner
7. Hotel Facilities
8. Guest Reviews (horizontal carousel with arrows and progress bar)
9. Gallery (CSS grid)
10. Journal (blog cards)
11. Footer

---

## Project Structure

```
src/
├── app/
│   ├── globals.css      
│   ├── layout.js       
│   └── page.js          
└── components/
    ├── Navbar/
    ├── Hero/
    ├── Button/         
    ├── Rooms/
    ├── Services/
    ├── Story/
    ├── VideoBanner/
    ├── Facilities/
    ├── Reviews/
    ├── Gallery/
    ├── Journal/
    └── Footer/
```

Each component folder contains a `.jsx` file and its own `.module.css`. Static assets (images, logos, icons) live in `public/images/`.

---

## Getting Started

```bash
git clone https://github.com/Blaziator/shri-siddh-web.git
cd shri-siddh-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the code
```

---

## Implementation Notes

- **Design tokens:** colors, fonts and the gold gradient are defined as CSS variables in `globals.css`.
- **Reusable `Button`:** renders a link or a button, used for the gold gradient call-to-action buttons.
- **Booking bar:** the guest counter works; the form does not submit anywhere. "Booking Enquiry" opens a WhatsApp link with a **placeholder number**.
- **Reviews carousel:** built with native scroll-snap and a custom progress indicator, with no carousel library.
- **Content:** room, review, facility and blog data are plain arrays mapped into components.

---

## Known Limitations and Status

- Responsive layout (mobile and tablet) and mobile navigation menu
- Autoplay video in the video banner (currently shows the design's still image; no video file was provided with the design)
- Scroll animation on the hero image (per design comment)
- Scroll-up animation on the services card and image (per design comment)
- Gallery animation (per design comment)

**Other deviations from the design:**

- **Heading font:** the design specifies Sorella, a commercial font I don't have a license for. **Cormorant Garamond** is used as a free substitute.
- **Placeholder links:** footer legal links, social links and the WhatsApp number are placeholders.
- **Images:** exported from the Figma file and stored in `public/images/`.

---

## Author

**Bhavya Kumawat**
GitHub: [@Blaziator](https://github.com/Blaziator) · LinkedIn: [linkedin.com/in/blaziator](https://linkedin.com/in/blaziator)
