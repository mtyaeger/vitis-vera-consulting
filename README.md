# Vitis Vera

The public website for Vitis Vera, a boutique business systems company.

Vitis Vera builds proprietary business systems that buy back time, reduce
manual work, improve operational visibility, and help teams make better
decisions.

## Positioning

The website presents Vitis Vera as a trusted business advisor that uses
technology to solve expensive operating problems.

It is intentionally not positioned as:

- An AI agency
- An automation agency
- A software development shop
- A generic technology consultancy

The primary message is:

> Build systems. Buy back time. Improve decisions.

## Technology

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) 4
- ESLint with Next.js Core Web Vitals rules
- Static rendering for public pages with a server-side contact endpoint
- Vercel-ready deployment

The site does not require a database. Contact-form delivery uses Resend and
requires the environment variables documented below.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Core positioning, business pain, outcomes, methodology, and contact CTA |
| `/about` | Company philosophy, approach, founders, and intended outcomes |
| `/our-process` | Engagement stages, working details, pricing, and ownership |
| `/system-method` | The sequential SYSTEM operating methodology |
| `/contact` | Context-first project intake and guidance for starting a conversation |

## Homepage Structure

The homepage is designed for a fast executive credibility check:

1. Clear promise: build systems, buy back time, improve decisions
2. Familiar business pain caused by manual work and disconnected systems
3. Concrete before-and-after business outcomes
4. Ownership and adaptability principles
5. A measured, value-first engagement process
6. Operator credibility
7. A direct discovery-call invitation

## Project Structure

```text
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── our-process/page.tsx
│   ├── system-method/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── brand-mark.tsx
    ├── context-intake-form.tsx
    ├── page-hero.tsx
    ├── site-footer.tsx
    ├── site-header.tsx
    └── system-grid.tsx
```

## Design System

The visual direction is premium, restrained, and business-focused.

- Warm ivory background
- Ink-black primary surfaces
- Muted gold accents
- Cormorant Garamond display typography
- Manrope interface and body typography
- Large editorial headlines
- Thin borders and generous whitespace
- No stock photography or decorative technology imagery

Global design tokens and shared utilities live in
`src/app/globals.css`.

## Local Development

### Requirements

- Node.js 20 or newer
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form email

Copy `.env.example` to `.env.local` and configure the server-side Resend integration:

```bash
RESEND_API_KEY=re_your_api_key
CONTACT_FROM_EMAIL=Vitis Vera <contact@vitisvera.com>
CONTACT_TO_EMAIL=mark@vitisvera.com,junaid@vitisvera.com
```

`CONTACT_FROM_EMAIL` must use a sender domain verified in Resend. Add the same
variables to the Vercel project before deploying the form. Separate multiple
`CONTACT_TO_EMAIL` recipients with commas.

## Available Commands

```bash
npm run dev     # Start the Next.js development server
npm run lint    # Run ESLint
npm run build   # Create an optimized production build
npm run start   # Serve the production build locally
```

## Production Verification

Before committing or deploying changes, run:

```bash
npm run lint
npm run build
```

The production build should report all public routes as statically rendered.

Responsive changes should also be reviewed at desktop and mobile widths,
particularly:

- Hero typography and CTA placement
- Sticky navigation clearance
- Business outcome cards
- SYSTEM process sequence
- Mobile navigation

## SEO

Global metadata is configured in `src/app/layout.tsx`, including:

- Canonical site URL
- Default title and title template
- Search description and keywords
- Open Graph metadata
- Twitter card metadata

Before launch, add a final social sharing image and verify the production domain.

## Deployment

The project is prepared for Vercel.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Use the default Next.js build settings.
4. Connect the production domain.
5. Confirm the canonical URL in `src/app/layout.tsx`.
6. Verify all routes, metadata, and responsive layouts in production.

No environment variables are currently required.

## Content Guidelines

When updating the site, preserve the following principles:

- Lead with business problems and outcomes, not technical capabilities.
- Use plain language that a business owner can understand quickly.
- Avoid AI hype, startup language, and digital-transformation jargon.
- Treat automation and software development as capabilities, not positioning.
- Keep sections concise and easy to scan.
- Do not add unsupported performance claims or invented metrics.
- Reinforce ownership, adaptability, time savings, and better decisions.

## Future Launch Tasks

- Add final Open Graph artwork
- Confirm production contact and scheduling workflow
- Add privacy and legal pages if forms or analytics are introduced
- Configure production analytics only after consent requirements are defined
- Connect GitHub to Vercel for preview and production deployments

## License

Private project. All rights reserved by Vitis Vera.
