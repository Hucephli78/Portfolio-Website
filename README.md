# The Silent Authority - Deployment Guide

This application is built with React, Vite, and Tailwind CSS. It is ready for deployment to Vercel.

## Deployment to Vercel

### 1. Connect to GitHub (Recommended)
1. Push this project to a new GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New"** > **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect the Vite framework.
6. **Environment Variables:** Add `GEMINI_API_KEY` in the project settings if you use AI features.
7. Click **"Deploy"**.

### 2. Using Vercel CLI
If you have the Vercel CLI installed locally:
1. Run `npm install -g vercel`.
2. Run `vercel`.
3. Follow the prompts to link and deploy.

## Configuration Details
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Routing:** A `vercel.json` file is included to handle SPA routing (rewriting all requests to `index.html`).
