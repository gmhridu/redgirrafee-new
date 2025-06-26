# RedGirraffe - Modern Full-Stack Business Solution

## Overview

RedGirraffe is a modern full-stack web application built to transform business operations with innovative solutions and cutting-edge technology. The application features a comprehensive landing page with sections for features, pricing, testimonials, and contact forms, all built with a mobile-first responsive design approach.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: REST API with proper error handling and logging
- **Middleware**: Express middleware for JSON parsing, CORS, and request logging

### Database Architecture
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for production)
- **Connection**: Neon serverless PostgreSQL adapter
- **Migrations**: Drizzle Kit for schema management

## Key Components

### User Interface Components
- **Component Library**: Comprehensive shadcn/ui components including buttons, forms, cards, dialogs, etc.
- **Layout System**: Responsive grid system with mobile-first breakpoints
- **Navigation**: Fixed navigation bar with mobile hamburger menu
- **Forms**: Contact form with validation using Zod schemas
- **Animations**: Scroll-triggered animations and smooth transitions

### Business Logic Components
- **Contact Management**: Contact form submission and storage system
- **User Management**: User authentication schema (prepared for future implementation)
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Error Handling**: Comprehensive error handling with proper HTTP status codes

### Storage Layer
- **Abstract Storage Interface**: IStorage interface for flexible storage implementations
- **Memory Storage**: In-memory storage implementation for development
- **Database Storage**: Prepared for PostgreSQL integration with Drizzle ORM
- **Schema Definitions**: Type-safe database schemas with Zod validation

## Data Flow

1. **Client Requests**: User interactions trigger API calls through React Query
2. **API Layer**: Express.js routes handle requests with validation and error handling
3. **Business Logic**: Controllers process requests and interact with storage layer
4. **Data Storage**: Storage interface abstracts database operations
5. **Response Handling**: Structured responses with proper error handling
6. **UI Updates**: React Query manages cache updates and UI re-rendering

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library
- **class-variance-authority**: Component variant management

### Development and Build
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and development experience
- **ESBuild**: Fast JavaScript bundling
- **PostCSS**: CSS processing with Autoprefixer

### Database and Validation
- **Drizzle ORM**: Type-safe database operations
- **Zod**: Runtime schema validation
- **@neondatabase/serverless**: Serverless PostgreSQL adapter

## Deployment Strategy

### Development Environment
- **Replit Configuration**: Configured for Replit deployment with Node.js 20, web, and PostgreSQL modules
- **Hot Reload**: Vite development server with HMR
- **Port Configuration**: Development server on port 5000

### Production Build
- **Frontend Build**: Vite builds optimized static assets to `dist/public`
- **Backend Build**: ESBuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production

### Database Setup
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection
- **Schema Migration**: `npm run db:push` to sync schema with database
- **Connection Pooling**: Configured for serverless PostgreSQL environments

## Changelog

Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Implemented sophisticated fintech design transformation:
  - Created rounded flag system with CSS classes for global appeal (India, USA, UK, Germany, Singapore, Japan, France, Canada)
  - Fixed blue color issues by implementing refined indigo-slate color palette
  - Enhanced full responsiveness across all devices with mobile-first breakpoints
  - Added flag indicators to hero section and footer for international presence
  - Removed excessive animations per user feedback - static content except hero
  - Applied enterprise-grade visual sophistication throughout

## User Preferences

Preferred communication style: Simple, everyday language.