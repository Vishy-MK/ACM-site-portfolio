# ACM Website

A lightweight club website for managing announcements and showcasing resources and team information. Frontend is a React + Vite single-page app and the backend is a small Express API backed by MongoDB.

**Quick summary**: a responsive frontend with domain/resource pages and an admin panel to create/read/delete announcements via a protected REST API.

**Highlights**
- Announcements CRUD (protected endpoints)
- Domain-specific resource pages (webdev, appdev, coding, design, research, AI/ML)
- Lightweight auth (JWT) for admin actions
- Built with modern tooling (Vite, React, Tailwind, Express, Mongoose)
- official site : https://manipal.acm.org deployed on CPanel.

**Tech Stack**
- Frontend: React, Vite, React Router, Tailwind CSS
- Backend: Node.js, Express, Mongoose (MongoDB)
- Auth: JSON Web Tokens (JWT)
- Database: MongoDB

**Repository layout**
- `frontend/` — Vite + React app (UI, pages, animations)
- `backend/` — Express API (announcement model, auth, routes)


**Environment variables**
The backend expects the following variables (create a `.env` in `backend/`):

- `MONGO_URI`
- `JWT_SECRET`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`



**For portfolio viewers**
- Implemented a full-stack club website with an admin panel for announcements and a modular frontend showcasing resources and domains.
- Built with Vite, React and Tailwind for fast developer iteration and smooth animations; backend uses Express + MongoDB with JWT authentication for protected admin actions.
- offical site is on https://manipal.acm.org
