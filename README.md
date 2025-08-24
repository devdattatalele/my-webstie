# Devdatta Talele - Portfolio Website

A modern, responsive portfolio website inspired by Jeffrey Zang's design, showcasing AI engineering expertise and comprehensive project portfolio.

## Features

- **Split-screen hero section** with profile image and introduction
- **Responsive design** that works on mobile and desktop
- **Interactive hover effects** with colored link highlights
- **Comprehensive projects showcase** featuring 8+ major projects with GitHub stars
- **Professional resume section** with experience and achievements
- **Modern animations** including gradient text effects
- **Social integration** with X (Twitter), LinkedIn, GitHub, and Cal.com scheduling

## Tech Stack

- React 18 with Vite
- React Router for navigation  
- Tailwind CSS for styling
- Google Fonts (Quicksand)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Customization

### Adding Your Profile Image
Replace `/public/profile-placeholder.jpg` with your actual profile photo.

### Updating Content
- Edit personal information in `src/pages/Home.jsx`
- Update experience in `src/pages/Resume.jsx`  
- Projects are automatically populated from GitHub analysis via MCP

### Featured Projects
- **Krya.ai** - LLM-powered desktop automation (6⭐)
- **VFORUM** - University community platform (3⭐) 
- **VaxInsight** - Healthcare analytics (#6 globally on Fetch.AI)
- **GitHub Issue Resolution MCP** - AI-powered repository analysis
- **Self-Driving Car Demo** - Neural networks on Raspberry Pi
- **Frappe Helpdesk** - Enterprise ticketing system

### Styling
- Colors and themes are defined in `src/index.css`
- Tailwind classes can be customized in `tailwind.config.js`

## Deployment

This site can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## License

MIT License - feel free to use this template for your own portfolio!