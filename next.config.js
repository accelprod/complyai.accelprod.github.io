/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — required for GitHub Pages hosting.
  // Produces a fully static site in `out/` on `npm run build`.
  output: 'export',

  // GitHub Pages cannot run the Next.js image optimiser.
  // Safe because the site uses raw SVG assets, not <Image /> components.
  images: {
    unoptimized: true,
  },

  // Pages serves `/foo/index.html` more reliably than `/foo.html`.
  // All internal <Link> components and the sitemap respect this automatically.
  trailingSlash: true,

  turbopack: {
    root: __dirname,
  },

  // NOTE: `async redirects()` is intentionally removed.
  // GitHub Pages is a static host and cannot run server-side 301s.
  // Former redirect routes (waitlist, why, observability, …) are now
  // implemented as small static pages under app/<route>/page.tsx that
  // emit a meta-refresh tag at build time. See Revision 5 of the plan.
};

module.exports = nextConfig;
