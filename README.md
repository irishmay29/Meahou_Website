# AkamaiPOS MERN Starter

This workspace now includes a MERN foundation for the AkamaiPOS website with:

- React frontend (Vite)
- Node + Express backend
- MongoDB persistence via Mongoose (with in-memory fallback)
- Accessibility baseline (skip link, focus states, ARIA/live regions, reduced motion support)

## Project Structure

- `client/` React app
- `server/` Express API + Socket.IO server
- `package.json` root scripts for running both apps together

## Quick Start

1. Optional MongoDB setup:
   - Copy `server/.env.example` to `server/.env`
   - Set `MONGODB_URI` (or leave unset to use in-memory store)
2. Install dependencies:
   - `npm install`
   - `npm install --prefix server`
   - `npm install --prefix client`
3. Start both apps:
   - `npm run dev`

## GitHub Pages

The React app in `client/` is configured for GitHub Pages:

- routing uses hash-based URLs so page refreshes work on Pages
- Vite builds with relative asset paths
- GitHub Actions deployment is defined in `.github/workflows/deploy-pages.yml`

To publish it:

1. Push this repository to GitHub.
2. In the repository settings, open **Pages**.
3. Set the source to **GitHub Actions**.
4. Push to `main` to trigger the deployment workflow.

The workflow builds `client/` and deploys `client/dist` to GitHub Pages.

## Endpoints

- `GET /api/health`

## Next Up

- Add authentication and role-based permissions
- Persist users and sessions
- Add automated accessibility tests with axe-core and Lighthouse
