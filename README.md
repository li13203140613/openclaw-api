# OpenClaw API

OpenClaw API (小龙虾 API) SEO site with:

- Homepage waitlist email capture
- Model detail pages for mainstream models
- Reusable `POST /api/subscribe` endpoint
- Structured data for SEO (`FAQPage`, `BreadcrumbList`, `SoftwareApplication`)
- `robots.txt` and `sitemap.xml`

## Quick Start

```bash
npm install
npm run dev
```

## Environment

Create `.env.local`:

```bash
DATABASE_URL=your_neon_postgres_url
NEXT_PUBLIC_SITE_URL=https://your-domain.com
ADMIN_KEY=optional_admin_password
```

## API

- `POST /api/subscribe`
  - Body: `{ "email": "user@example.com", "source": "homepage-hero" }`
  - Stores unique emails in `emails` table.
- `GET /api/admin/emails`
- `GET /api/admin/export`
  - Add header `x-admin-key: <ADMIN_KEY>` when `ADMIN_KEY` is configured.

## Admin Page

- `GET /admin`
  - View collected emails
  - Export CSV
