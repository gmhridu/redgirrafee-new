# B2B Global - Vite + React + TypeScript

A modern frontend application built with Vite, React, TypeScript, and deployed on Vercel with serverless API functions.

## 🚀 Features

- **Frontend**: React 18 + TypeScript + Vite
- **API**: Vercel Serverless Functions
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

### Run Development Server
```bash
npm run dev
```
Starts Vite dev server on port 3000.

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
├── src/                   # React source code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── lib/              # Utility libraries
│   └── hooks/            # Custom React hooks
├── api/                  # Vercel serverless functions
├── shared/               # Shared types and utilities
├── public/               # Static assets
├── dist/                 # Production build output
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
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

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check
- `npm run db:push` - Push database schema

## 🔥 Vite Features

- ⚡ Lightning fast HMR (Hot Module Replacement)
- 📦 Optimized build with code splitting
- 🔧 TypeScript support out of the box
- 🎨 CSS preprocessing with PostCSS
- 🌐 Serverless API functions for Vercel
- 📱 Mobile-first responsive design

## 🌐 Deployment

### Vercel (Recommended)
The app is optimized for Vercel deployment with serverless functions:

```bash
# Deploy to Vercel
npm install -g vercel
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed Vercel deployment guide.

### Other Platforms
The app can also be deployed on Replit, Railway, or any Node.js hosting platform. The build process creates optimized static assets and a bundled server.

## 📝 License

MIT
