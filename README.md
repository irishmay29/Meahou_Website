# AkamaiPOS MERN Starter

This workspace now includes a MERN foundation for the AkamaiPOS website with:

- React frontend (Vite)
- Node + Express backend
- MongoDB persistence via Mongoose (with in-memory fallback)
- Real-time support chat using Socket.IO
- Accessibility baseline (skip link, focus states, ARIA/live regions, reduced motion support)

## Project Structure

- `client/` React app and support chat widget UI
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

## Endpoints

- `GET /api/health`
- `GET /api/messages`

## Next Up

- Add authentication and role-based permissions
- Persist users, tickets, and sessions
- Add automated accessibility tests with axe-core and Lighthouse
