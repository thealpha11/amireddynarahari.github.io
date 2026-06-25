# Developer CV Portfolio

A modern single-page CV and portfolio website for frontend, full stack, and software engineering roles. Built with React and Vite, with content stored in one JSON file for easy updates.

## Features

- Responsive mobile-first layout
- Dark and light theme toggle
- Smooth scrolling navigation
- Reusable React components
- JSON-driven portfolio content
- Local optimized visual assets
- SEO meta tags
- GitHub Pages deployment workflow

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── assets/
│   ├── favicon.svg
│   └── resume-placeholder.txt
├── src/
│   ├── components/
│   ├── data/portfolio.json
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Edit Portfolio Content

Update all profile details in:

```text
src/data/portfolio.json
```

Replace placeholder values for:

- Name, title, intro, location, email, phone
- About summary and strengths
- Skills
- Experience
- Projects and links
- Education
- Certifications
- Social links

## Replace Resume

Add your real resume PDF to `public/`, for example:

```text
public/resume.pdf
```

Then update `src/data/portfolio.json`:

```json
"resumeUrl": "resume.pdf"
```

## Replace Images

Local images are stored in:

```text
public/assets/
```

Project preview images are stored in:

```text
public/assets/projects/
```

Keep file paths in `src/data/portfolio.json` relative to `public/`.

## Local Development

Do not open the root `index.html` file directly. This is a React + Vite app, so it must be served over HTTP by Vite during local development or by GitHub Pages after deployment.

On Windows, you can double-click:

```text
start-local-preview.bat
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## GitHub Pages Deployment

This project includes `.github/workflows/deploy.yml` for automatic deployment.

1. Push the project to a GitHub repository.
2. Go to repository `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to the `main` branch.
5. The workflow runs `npm ci`, `npm run build`, and deploys `dist/`.

The Vite `base` path is configured automatically in `vite.config.js` during GitHub Actions builds using the repository name.

## Notes

- The included `public/404.html` provides a basic GitHub Pages fallback for direct page loads.
- Update `index.html` SEO metadata after replacing the placeholder name and role.
- Use real project repository and live demo URLs before sending job applications.
