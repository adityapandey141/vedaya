# Energia - Solar Energy Website

A modern React + Tailwind CSS single-page application cloning the Energia solar energy website.

## Features

- **Navbar** - Top info bar with phone/email/social links, sticky navigation with mobile hamburger menu
- **HeroSection** - Full-viewport image slider (auto-advances every 6s) with floating info card
- **AboutSection** - Two-column layout with image and stats overlay
- **ValueSection** - Three cards: Mission, Vision, Value on dark background
- **CtaBanner** - Full-width green gradient banner with CTA
- **ServicesSection** - Grid of 6 service cards with icons
- **GlobalPresenceSection** - Animated counters with Intersection Observer
- **TestimonialsSection** - 3 testimonial cards with star ratings
- **ProjectsSection** - 4 project cards with hover overlays
- **DiscoverSection** - Two-column layout with features list
- **ContactSection** - Quote request form + Recent articles sidebar
- **Footer** - 4-column layout with social icons and copyright

## Tech Stack

- React 18
- Tailwind CSS v3
- Vite
- Lucide React icons

## Design System

- **Primary Green**: hsl(145, 63%, 42%)
- **Dark Navy**: hsl(210, 29%, 15%)
- **Darker Navy**: hsl(210, 33%, 10%)
- **Fonts**: Rubik (headings), Open Sans (body)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
energia/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ValueSection.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── GlobalPresenceSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── DiscoverSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## License

MIT
