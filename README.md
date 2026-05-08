# Premium Commercial Spaces

A production-grade Next.js website for commercial real estate lead generation, powered by Slabs and Beams Realty.

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Netlify (static export)

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repo-url>
cd premiumcommercialspaces

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values
# NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
# NEXT_PUBLIC_SITE_URL=https://premiumcommercialspaces.com

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (no +) | `919876543210` |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | `https://premiumcommercialspaces.com` |

## Build & Deploy

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy to Netlify

#### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=out
```

#### Option 2: Netlify Dashboard

1. Push your code to GitHub/GitLab
2. Log in to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Add environment variables in Site Settings → Environment Variables
7. Deploy

#### Option 3: Drag & Drop

Run `npm run build`, then drag the `out/` folder to Netlify's deploy interface.

### Netlify Forms

The contact form uses Netlify Forms for serverless form handling. After deploying, forms will be automatically detected via the `data-netlify="true"` attribute. View submissions in the Netlify dashboard under "Forms".

## Project Structure

```
premiumcommercialspaces/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── sitemap.ts          # Auto-generated sitemap
├── components/             # Reusable components
│   ├── Navigation.tsx      # Sticky header with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── ui/
│       └── Button.tsx      # Base button component
├── sections/               # Page sections
│   ├── HeroSection.tsx
│   ├── StatsStrip.tsx
│   ├── PropertiesSection.tsx
│   ├── WhatsAppCTA.tsx
│   ├── InvestmentSection.tsx
│   ├── LocationSection.tsx
│   ├── LeadFormSection.tsx
│   ├── WhyChooseSection.tsx
│   └── AboutSection.tsx
├── hooks/
│   └── useScrolled.ts      # Scroll position hook
├── lib/
│   └── utils.ts            # Tailwind merge utility
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    └── robots.txt
```

## Customization

### Colors
Edit `tailwind.config.ts` to update the brand color palette.

### WhatsApp Number
Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`.

### Content
- Property listings: `sections/PropertiesSection.tsx`
- Stats: `sections/StatsStrip.tsx`
- Location advantages: `sections/LocationSection.tsx`
- Why choose us: `sections/WhyChooseSection.tsx`

## License

Private — All rights reserved. Slabs and Beams Realty.
