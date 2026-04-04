# Nishant Khadka Portfolio

Production-ready personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and EmailJS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- EmailJS

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for Production

```bash
npm run build
npm run start
```

## EmailJS Setup

1. Create an EmailJS account at https://www.emailjs.com.
2. Create an Email Service and Email Template.
3. Copy `.env.example` to `.env.local` and add keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

4. Map your template variables to the fields used in the app:

- `from_name`
- `from_email`
- `reply_to`
- `message`
- `to_name`

## JSON Content Architecture

All main content is loaded from JSON files in `data/`:

- `data/experience.json`
- `data/education.json`
- `data/projects.json`
- `data/skills.json`
- `data/certifications.json`
- `data/site.json` (site-level content and SEO)

Update these files to change the portfolio content without editing React components.

### Certifications With Images

Each certification in `data/certifications.json` can include an `image` field:

```json
{
  "title": "My Certification",
  "issuer": "Provider",
  "date": "2026",
  "image": "/certifications/my-cert-image.png",
  "credentialUrl": "https://example.com"
}
```

Place image files in `public/certifications/` and reference them with a `/certifications/...` path.

### Resume PDF

The resume buttons open `public/resume.pdf` in a new tab. Replace this file with your final resume PDF while keeping the same filename.

## Deployment

The project is optimized for Vercel deployment.

```bash
vercel
```

Or connect the repository in the Vercel dashboard for CI deployments.
