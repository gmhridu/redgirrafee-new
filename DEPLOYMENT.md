# Vercel Deployment Guide

This guide will help you deploy your B2B Global application to Vercel.

## 🚀 Quick Deployment

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration

### 2. Environment Variables

Set these environment variables in your Vercel dashboard:

**Required:**
- `DATABASE_URL` - Your PostgreSQL connection string
- `NODE_ENV` - Set to `production`

**Optional:**
- `REPL_ID` - Only needed if deploying from Replit

### 3. Deploy

Click "Deploy" and Vercel will:
1. Run `npm run build` (builds both frontend and backend)
2. Deploy static files to CDN
3. Deploy API functions as serverless functions

## 📁 Project Structure for Vercel

```
├── api/                  # Vercel serverless functions
│   ├── contact.ts       # Contact form API endpoint
│   └── contacts.ts      # Get contacts API endpoint
├── src/                 # React source code
├── dist/                # Built frontend (served by Vercel)
├── shared/              # Shared types and utilities
├── lib/                 # Utility libraries
├── index.html           # HTML entry point
└── vercel.json          # Vercel configuration
```

## 🔧 How It Works

### Frontend
- Built with Vite to `dist/`
- Served as static files by Vercel's CDN
- Optimized with code splitting and compression

### Backend API
- API routes in `/api/` folder become serverless functions
- Each `.ts` file in `/api/` becomes an endpoint
- Automatically handles CORS and scaling

### Database
- Uses the same PostgreSQL database
- Serverless-compatible with connection pooling
- Environment variables for connection string

## 🌐 API Endpoints

After deployment, your API will be available at:
- `https://your-app.vercel.app/api/contact` - Contact form submission

## 🔍 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure TypeScript compiles without errors: `npm run check`
- Verify build works locally: `npm run build`

### API Not Working
- Check environment variables are set in Vercel dashboard
- Verify API endpoints are in `/api/` folder
- Check function logs in Vercel dashboard

### Frontend Not Loading
- Ensure `dist/public/` contains built files
- Check that `vercel.json` routes are correct
- Verify no build errors in deployment logs

## 📊 Performance

Vercel provides:
- **Global CDN** - Fast static file delivery
- **Serverless Functions** - Auto-scaling API endpoints
- **Edge Caching** - Optimized performance worldwide
- **Analytics** - Built-in performance monitoring

## 🔄 Continuous Deployment

Once connected:
1. Push to your main branch
2. Vercel automatically deploys
3. Preview deployments for pull requests
4. Production deployment on merge

## 🛠️ Local Development vs Production

### Local Development
```bash
npm run dev:full  # Runs both frontend and backend
```

### Production (Vercel)
- Frontend: Static files served by CDN
- Backend: Serverless functions
- Database: Same PostgreSQL instance

Your app is now ready for production deployment on Vercel! 🎉
