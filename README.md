# Scoovio - Car Sharing Platform

A complete car sharing platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Public Pages
- **Homepage** - Hero section with search functionality, featured cars, how it works
- **Browse Cars** - Advanced filtering, car listings with detailed information
- **Car Details** - Individual car pages with photos, features, booking widget
- **How It Works** - Step-by-step guide for both guests and hosts
- **Become a Host** - Hosting information, earnings calculator, benefits

### Key Components
- Responsive design that works on all devices
- Search and filtering functionality
- Interactive booking forms
- Host earnings calculator
- Modern UI with Scoovio brand colors and styling

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (via SVG)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd scoovio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── browse/            # Browse cars page
│   ├── cars/[id]/         # Individual car details
│   ├── how-it-works/      # How it works page
│   ├── become-host/       # Become a host page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
└── components/            # Reusable components
    └── Header.tsx         # Navigation header
```

## Pages Included

### ✅ Public Pages (Complete)
- [x] Homepage with hero section and featured cars
- [x] Browse cars with filters and search
- [x] Individual car detail pages
- [x] How it works information page  
- [x] Become a host landing page
- [x] Login page with social auth options
- [x] Signup page with complete registration
- [x] Support page with help center

### 🚧 Additional Pages (Coming Soon)
- Login/Signup pages
- User dashboard
- Host dashboard
- Booking flow
- Payment processing

## Features Implemented

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design inspired by Turo
- **Interactive Components**: Search forms, filters, booking widgets
- **Dynamic Routing**: Individual car pages with URL parameters
- **SEO Ready**: Proper meta tags and semantic HTML

## Customization

### Colors
The project uses Scoovio brand colors defined in `tailwind.config.js`:
- `turo-blue`: #149BEE (primary brand color)
- `turo-dark`: #121212 (dark text)
- `turo-gray`: #767676 (secondary text)

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Import and use the `Header` component
4. Update navigation links in `Header.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes only. Turo is a trademark of Turo Inc.

## Next Steps

To extend this clone with backend functionality:
1. Add a database (PostgreSQL, MongoDB)
2. Implement user authentication
3. Add booking and payment processing
4. Create host and guest dashboards
5. Add real-time messaging
6. Implement search with location services

---

Built with ❤️ using Next.js and Tailwind CSS
