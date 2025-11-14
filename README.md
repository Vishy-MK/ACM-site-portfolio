# ACM Website

A lightweight club website for managing announcements and showcasing resources and team information. Frontend is a React + Vite single-page app and the backend is a small Express API backed by MongoDB.

**Quick summary**: a responsive frontend with domain/resource pages and an admin panel to create/read/delete announcements via a protected REST API.

**Highlights**
- Announcements CRUD (protected endpoints)
- Domain-specific resource pages (webdev, appdev, coding, design, research, AI/ML)
- Lightweight auth (JWT) for admin actions
- Built with modern tooling (Vite, React, Tailwind, Express, Mongoose)

**Tech Stack**
- Frontend: React, Vite, React Router, Tailwind CSS
- Backend: Node.js, Express, Mongoose (MongoDB)
- Auth: JSON Web Tokens (JWT)
- Database: MongoDB

**Repository layout**
- `frontend/` — Vite + React app (UI, pages, animations)
- `backend/` — Express API (announcement model, auth, routes)

**Local development (Windows PowerShell)**
1. Backend

```powershell
cd backend
npm install
# create a .env file with the variables listed below
node index.js
# or if package.json defines a script: npm start
```

2. Frontend

```powershell
cd frontend
npm install
npm run dev
# build for production
npm run build
```

**Environment variables**
The backend expects the following variables (create a `.env` in `backend/`):

- `MONGO_URI` — MongoDB connection string (e.g. `mongodb+srv://...`).
- `JWT_SECRET` — secret key used to sign JWT tokens.
- `ADMIN_USERNAME` — admin username for the simple auth flow.
- `ADMIN_PASSWORD` — admin password (server hashes on start).
- `PORT` — optional server port (defaults to `5000`).

Example `.env` (DO NOT commit this file):

```
MONGO_URI=your_mongo_uri_here
JWT_SECRET=some_long_random_secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=choose-a-strong-password
PORT=5000
```

**API (backend)**
- `GET /` — health check, returns a small message.
- `POST /admin-login` — body `{ username, password }` -> returns `{ token }` on success.
- `GET /admin-dashboard` — protected; requires `Authorization: Bearer <token>` header.
- `GET /announcements` — list all announcements.
- `POST /announcements/create` — protected; body `{ title, date, type, body }`.
- `DELETE /announcements/delete` — protected; body `{ id }` (MongoDB ObjectId).

Example protected request header:
```
Authorization: Bearer <JWT_TOKEN>
```

**Deployment notes**
- Frontend: can be deployed on Vercel, Netlify or static hosting. Build output is in `frontend/dist` after `npm run build`.
- Backend: suitable for Render, Heroku, DigitalOcean, or a dedicated server. Make sure `MONGO_URI` and `JWT_SECRET` are set in the host's environment.

**Security**
- Never commit `.env` or secrets into version control.
- Use a secure and sufficiently long `JWT_SECRET` and strong admin password.
- Consider replacing the simple admin flow with a proper user store for production.

**Notes for resume / project blurb**
- Implemented a full-stack club website with an admin panel for announcements and a modular frontend showcasing resources and domains.
- Built with Vite, React and Tailwind for fast developer iteration and smooth animations; backend uses Express + MongoDB with JWT authentication for protected admin actions.

**Contributing**
Contributions welcome — open an issue or a PR. Keep secrets out of pull requests.

**License**
Add a license of your choice (e.g., MIT) or state that the repo is private if you prefer.
