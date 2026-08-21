# Event Management Platform (EntryMySlot)

Event booking & turf management platform built with **Node.js + Express** (backend) and **HTML + Tailwind CSS** (frontend).

## Project Structure

```
├── package.json              ← monorepo root scripts
├── docker-compose.yml        ← local Postgres + Redis + backend
├── .gitignore
├── README.md
│
├── backend/                  ← Node.js / Express API
│   ├── src/
│   │   ├── server.ts         ← entry point
│   │   ├── shared/           ← infra (db, config, sockets, middleware, utils)
│   │   ├── modules/          ← feature modules (events, bookings, turf, auth, admin, organizer, promotions, media)
│   │   ├── routes/           ← legacy route definitions (thin wrappers)
│   │   ├── controllers/      ← legacy controllers
│   │   ├── services/         ← legacy services (shared, e.g. upload)
│   │   ├── repositories/     ← legacy repositories (shared)
│   │   ├── middleware/       ← legacy middleware
│   │   ├── db/               ← pool, migrations, redis
│   │   ├── utils/            ← crypto, JWT, OTP, logger
│   │   └── rbac/             ← permissions definitions
│   ├── migrations/           ← SQL migration files
│   ├── seed/                 ← seed scripts
│   ├── dist/                 ← compiled output (gitignored)
│   ├── uploads/              ← file uploads
│   └── package.json
│
├── frontend/                 ← static frontend
│   └── public/
│       ├── index.html
│       ├── n.html
│       ├── dash.html
│       ├── book.html
│       ├── events.html
│       ├── event-book.html
│       ├── category.html
│       ├── concert.html
│       ├── movie-cinemas.html
│       ├── movies.html
│       ├── owner-dash.html
│       ├── super-admin.html
│       ├── assets/
│       │   ├── images/
│       │   ├── banners/
│       │   ├── events/
│       │   └── icons/
│       ├── js/               ← shared JS modules
│       └── css/              ← shared stylesheets
│
└── docs/                     ← API docs, architecture
```

## Quick Start

```bash
# 1. Install backend dependencies
cd backend && npm install

# 2. Set up environment
cp backend/.env.example backend/.env   # fill in values

# 3. Start dependencies (Postgres, Redis)
docker-compose up -d postgres redis

# 4. Run migrations + seed admin
cd backend && npm run db:migrate && npm run seed:admin

# 5. Start dev server
npm run dev:backend   # → http://localhost:3000
```

## Backend Modules

| Module | Responsibility |
|--------|---------------|
| `modules/auth` | User registration, login, OTP, JWT |
| `modules/events` | Event CRUD, lifecycle, categories |
| `modules/bookings` | Ticket booking, check-in, scanning |
| `modules/turf` | Turf venues, time-slot booking, availability, coupons |
| `modules/admin` | Admin dashboard, RBAC, organization management |
| `modules/organizer` | Organizer signup, event management |
| `modules/promotions` | Ad campaigns, attribution, ranking |
| `modules/media` | Uploads, banners, media library |
| `modules/finance` | Ledger, settlements, financial config |
| `modules/notifications` | Email, SMS, push notifications |

## Shared Layer

| Path | Purpose |
|------|---------|
| `shared/config` | Env config, validation |
| `shared/db` | PG pool, migrations, Redis |
| `shared/middleware` | Auth, rate-limit, validation, error handling |
| `shared/utils` | JWT, OTP, crypto, logger |
| `shared/rbac` | Permission definitions |
| `shared/sockets` | Socket.IO setup |
| `shared/types` | TypeScript type definitions |
