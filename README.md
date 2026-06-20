# Tasvee Design School

SEO-optimized marketing website for **Tasvee Design School** — built with Next.js, TypeScript, and Tailwind CSS.

## Pages

- **Home** — Hero, stats, courses preview, projects, learning journey, mentor, testimonials
- **About Us** — Story, mission/vision/values, mentor profile
- **Courses** — Full course catalog with details
- **Success Stories** — Student stories, testimonials, hiring partners
- **Contact** — Contact form, map, FAQ

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your production domain (for SEO/sitemap) |
| `CONTACT_EMAIL` | Where form submissions are sent |
| `RESEND_API_KEY` | [Resend](https://resend.com) API key for email delivery |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend |

The contact form works without Resend (submissions are logged server-side). Add Resend for production email delivery.

## Deploy to Vercel + GoDaddy Domain

1. Push this repo to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. In Vercel → **Settings → Domains**, add your GoDaddy domain
5. In GoDaddy → **DNS**, point nameservers or A/CNAME records to Vercel

## SEO Features

- Per-page metadata (title, description, Open Graph)
- `sitemap.xml` and `robots.txt`
- Semantic HTML structure
- JSON-LD structured data on Contact page
- Static generation for fast load times

## Customization

- **Content**: Edit `src/lib/site-config.ts`
- **Images**: Replace placeholder gradients with real images in `public/images/`
- **Colors**: Brand red is `#E11D2E` in `globals.css`
