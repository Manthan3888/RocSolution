# ROC Solution Website - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Features

### ✨ Animations
- **Framer Motion** for smooth page transitions
- **Scroll-triggered animations** for engaging user experience
- **Hover effects** on interactive elements
- **Floating elements** and gradient animations
- **Loading states** with animated spinners

### 🎨 Design
- **Color Palette**: Blue gradients inspired by ROC Solution logo
  - Primary: `#0073e6` to `#004080`
  - Accent: `#00d4ff` to `#00a8cc`
  - Background: `#0f1419` to `#0a0e13`
- **Modern UI** with glassmorphism effects
- **Responsive design** for all devices
- **Dark theme** with blue accents

### 📄 Pages
- **Home** (`/`) - Hero, services preview, about preview, tech stack, CTA
- **About** (`/about`) - Company mission, vision, team, stats
- **Services** (`/services`) - Detailed service pages for:
  - React.js Development
  - Node.js Solutions
  - React Native Development
  - AWS Cloud Services
  - AI/ML Services
- **Contact** (`/contact`) - Contact form and information

### 🔍 SEO Features
- **Metadata** on all pages
- **Open Graph** tags for social sharing
- **Twitter Card** support
- **Sitemap** generation (`/sitemap.xml`)
- **Robots.txt** configuration
- **Semantic HTML** structure

### 🚀 Performance
- **Next.js 14** App Router
- **TypeScript** for type safety
- **Optimized images** (when added)
- **Code splitting** automatically handled
- **Server-side rendering** for better SEO

## Customization

### Update Company Information
1. **Contact Details**: Edit `components/ContactInfo.tsx` and `components/Footer.tsx`
2. **Email/Phone**: Update email and phone numbers in contact components
3. **Address**: Update address in footer and contact info

### Add Real Logo
1. Place your logo files in `public/` directory:
   - `logo.svg` or `logo.png`
   - `favicon.ico`
2. Update `components/Logo.tsx` to use your actual logo image

### Update Services
Edit `components/ServiceDetails.tsx` to modify service descriptions and features.

### Modify Colors
Update `tailwind.config.js` to change the color palette.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## File Structure

```
roc_solution/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Logo.tsx           # Logo component
│   └── ...                # Other components
├── public/                # Static assets
│   ├── logo.svg           # Logo file
│   └── robots.txt         # Robots.txt
└── ...                    # Config files
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Support

For issues or questions, please contact the development team.
