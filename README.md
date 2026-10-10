# Akash’s portfolio

Next.js App Router, TypeScript, Tailwind CSS and Framer Motion. The desktop-style interface follows the latest approved reference. Blog and Experience are omitted.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`. Run `npm run lint` for lint checks.

## Content

Edit `data/portfolio.ts` for profile, links, projects, skills, education, credentials, labels and workflow. Replace `public/avatar.webp` and `public/resume.pdf` to update the avatar and downloadable CV. Project detail pages are generated from project data. Project screenshots live in public/projects/: captured from the live demos for investor-platform, orchestration-platform and neurovision; the data-automation architecture diagram was supplied by Akash. No individual repository URLs were supplied. The GitHub button links to https://github.com/akashpatil6294 (corrected by Akash 2026-10-10; the earlier brief's github.com/akashpatil belonged to someone else).

The CV establishes NMIT enrollment in 2024; graduation in 2028 comes from the original brief. The bio is a paraphrase of the CV. No blog is included. Add entries to the `experience` array with `title`, `organization`, `dates`, and `description` to automatically reveal the Experience panel and dock item.

## Vercel

1. Push this folder to a Git repository.
2. Import the repository in Vercel and select Next.js.
3. Keep build command `npm run build` and default output settings.
4. Deploy. No environment variables or external service credentials are required.

Contact uses `mailto:`. Theme preference is saved locally. The resume is publicly downloadable once deployed. Open Graph artwork is generated at `/opengraph-image`.

## Verification

- Production build and TypeScript passed.
- ESLint passed with no errors or warnings.
- Browser checked at 1440, 768 and 390 pixels; no horizontal overflow.
- Checked theme persistence, dock panels, close/restore, project navigation and contact targets.
- Lighthouse score was not measured.
- npm reported five related high-severity development-tool advisories in the ESLint glob dependency chain. Production dependencies had no advisories in the install audit. The suggested fix downgrades the Next lint config to an incompatible older major, so it was not applied.
- Build uses the supported Webpack compiler due to a local Turbopack CSS worker failure.
- 2026-10-10: dock About icon changed from a duplicate of the Profile icon to a distinct info icon; case-study "Built with" heading and detail paragraphs given proper spacing. Build and lint re-verified clean. Checked 1440/768/390 px: no horizontal overflow, and the fixed dock clears every lower panel action (contact submit, panel footers) at full scroll.
- 2026-10-10 (later): added project screenshots (captured from the three live demos; automation-bot diagram supplied by Akash, shown with the description below the image since it has no live demo) to the Projects cards and case-study pages; corrected GitHub to https://github.com/akashpatil6294 (the brief's github.com/akashpatil was someone else's profile) and replaced public/avatar.webp with the illustrated avatar Akash uploaded. Build and lint re-verified clean.

Vercel supplies the production hostname for Open Graph URLs. For another host, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS address.

## Interactive panels

The About panel uses confirmed CV details; age is omitted. Terminal supports `help`, `whoami`, `about`, `skills`, `contact`, `projects`, `ls`, `education`, `resume`, `date`, and `clear`, with arrow-key history. It runs portfolio commands only, never system commands. Contact validates fields and opens a mailto draft; sending takes place in the visitor’s email app. Mouse effects are disabled for coarse pointers and reduced-motion preferences. The dock scrolls horizontally on small screens. X and LinkedIn use the updated links supplied by Akash. The original uploaded resume PDF is retained unchanged.
