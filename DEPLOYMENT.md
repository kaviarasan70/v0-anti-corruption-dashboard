# Deployment Guide - Indian Citizen Watchdog Dashboard

This guide covers deploying the Indian Citizen Watchdog dashboard to various platforms.

## Vercel Deployment (Recommended)

Your app is already configured for Vercel deployment.

### Quick Deploy

1. **One-Click Deploy**
   - Click the "Deploy" button in the v0.app interface
   - Or use: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/v0-anti-corruption-dashboard)

2. **Current Deployment**
   - Your app is live at: [https://vercel.com/kavis-projects-5372883d/v0-anti-corruption-dashboard](https://vercel.com/kavis-projects-5372883d/v0-anti-corruption-dashboard)

### Manual Vercel Deployment

1. **Install Vercel CLI**
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Login to Vercel**
   \`\`\`bash
   vercel login
   \`\`\`

3. **Deploy**
   \`\`\`bash
   vercel
   \`\`\`

4. **Production Deployment**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Environment Variables on Vercel

Add these in the Vercel dashboard under Project Settings → Environment Variables:

#### Optional - Google Maps
\`\`\`
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
\`\`\`

#### Optional - Google Sheets
\`\`\`
GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
SPREADSHEET_ID=your_projects_spreadsheet_id
GRIEVANCES_SPREADSHEET_ID=your_grievances_spreadsheet_id
\`\`\`

## Other Deployment Options

### Netlify

1. **Install Netlify CLI**
   \`\`\`bash
   npm install -g netlify-cli
   \`\`\`

2. **Build the app**
   \`\`\`bash
   npm run build
   \`\`\`

3. **Deploy**
   \`\`\`bash
   netlify deploy --prod --dir=.next
   \`\`\`

4. **Configure netlify.toml** (create if it doesn't exist)
   \`\`\`toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   \`\`\`

### Self-Hosted (Node.js)

1. **Build the application**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start the server**
   \`\`\`bash
   npm start
   \`\`\`

3. **Using PM2 for process management**
   \`\`\`bash
   npm install -g pm2
   pm2 start npm --name "citizen-watchdog" -- start
   pm2 save
   pm2 startup
   \`\`\`

### Docker Deployment

1. **Create Dockerfile** (already included in project)
   \`\`\`dockerfile
   FROM node:18-alpine AS base
   
   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build
   
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   \`\`\`

2. **Build Docker image**
   \`\`\`bash
   docker build -t citizen-watchdog .
   \`\`\`

3. **Run container**
   \`\`\`bash
   docker run -p 3000:3000 -e GOOGLE_MAPS_API_KEY=your_key citizen-watchdog
   \`\`\`

### AWS Amplify

1. Connect your GitHub repository to AWS Amplify
2. Configure build settings:
   \`\`\`yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   \`\`\`

## Performance Optimization

### Image Optimization
The app uses Next.js Image component for automatic optimization. On Vercel, images are automatically optimized.

For other platforms, configure:
\`\`\`javascript
// next.config.mjs
const config = {
  images: {
    domains: ['your-domain.com'],
  },
}
\`\`\`

### Caching Strategy
- Static assets are automatically cached by Next.js
- API routes can be cached with appropriate headers
- Google Sheets data is fetched server-side to reduce client requests

## Monitoring and Analytics

### Vercel Analytics
Already configured with `@vercel/analytics/next` in the layout.

### Custom Analytics
Add your tracking code to `app/layout.tsx`:
\`\`\`tsx
import Script from 'next/script'

// In the layout component
<Script
  src="https://your-analytics.com/script.js"
  strategy="afterInteractive"
/>
\`\`\`

## Production Checklist

- [ ] Environment variables configured
- [ ] Google APIs enabled (if using)
- [ ] Domain configured and SSL active
- [ ] Analytics tracking set up
- [ ] Error monitoring configured
- [ ] Performance monitoring active
- [ ] Backup strategy for Google Sheets data
- [ ] Rate limiting on API routes
- [ ] CORS configured properly
- [ ] Security headers configured

## Scaling Considerations

### Database Migration
As usage grows, consider migrating from Google Sheets to:
- PostgreSQL (Supabase, Neon)
- MongoDB
- MySQL

### CDN Configuration
- Use Vercel's global edge network (automatic)
- Or configure CloudFlare for other hosting

### Load Balancing
For high traffic:
- Implement caching with Redis
- Use database read replicas
- Consider serverless functions for API routes

## Troubleshooting

### Build Failures
\`\`\`bash
# Clear cache
rm -rf .next
npm run build
\`\`\`

### Environment Variables Not Working
- Ensure variables are prefixed correctly
- Redeploy after adding new variables
- Check for typos in variable names

### Google Maps Not Loading
- Verify API key is correct
- Check API is enabled in Google Cloud Console
- Ensure billing is active on Google Cloud account

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: [Open an issue](https://github.com/yourusername/v0-anti-corruption-dashboard/issues)
- v0 Chat: [Continue on v0.app](https://v0.app/chat/nIDeSgInWdL)
