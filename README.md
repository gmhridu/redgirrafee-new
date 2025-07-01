# B2B Global - Vite + React + TypeScript

A modern full-stack application built with Vite, React, TypeScript, and Express.

## 🚀 Features

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Radix UI + Tailwind CSS + shadcn/ui
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Animations**: Framer Motion

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

### Run Full Development Environment (Recommended)
```bash
npm run dev:full
```
This runs both frontend (port 3000) and backend (port 5000) concurrently.

### Run Frontend Only
```bash
npm run dev:frontend
```
Starts Vite dev server on port 3000.

### Run Backend Only
```bash
npm run dev:backend
```
Starts Express server on port 5000.

## 🏗️ Build

```bash
npm run build
```
Builds both frontend and backend for production.

## 🚀 Production

```bash
npm start
```
Runs the production build.

## 📁 Project Structure

```
├── client/                 # Frontend React app
│   ├── src/               # React source code
│   ├── index.html         # HTML entry point
│   └── public/            # Static assets
├── server/                # Backend Express app
├── shared/                # Shared types and utilities
├── dist/                  # Production build output
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required variables:
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment (development/production)

### Database Setup

```bash
npm run db:push
```

## 🎯 Scripts

- `npm run dev:full` - Run both frontend and backend
- `npm run dev:frontend` - Run Vite dev server only
- `npm run dev:backend` - Run Express server only
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run preview` - Preview production build
- `npm run check` - Type check
- `npm run db:push` - Push database schema

## 🔥 Vite Features

- ⚡ Lightning fast HMR (Hot Module Replacement)
- 📦 Optimized build with code splitting
- 🔧 TypeScript support out of the box
- 🎨 CSS preprocessing with PostCSS
- 🔀 API proxy for seamless development
- 📱 Mobile-first responsive design

## 🌐 Deployment

The app is configured for deployment on Replit and other platforms. The build process creates optimized static assets and a bundled server.

## 📝 License

MIT
