# Documentation Index - Indian Citizen Watchdog Dashboard

Welcome! This guide helps you navigate all the documentation available for this project.

## Getting Started

### 🚀 Start Here: [QUICKSTART.md](./QUICKSTART.md)
The fastest way to get the app running. Complete setup in 5 minutes with sample data ready to go.

**What's inside:**
- Installation steps
- Environment setup
- Running the dev server
- Sample data overview
- Troubleshooting

---

## Core Documentation

### 📖 [README.md](./README.md) - Main Project Documentation
Complete overview of the Indian Citizen Watchdog dashboard including:
- Project vision and goals
- All features explained
- Tech stack details
- Installation & configuration
- Deployment instructions
- Contributing guidelines

### 📊 [DATA_OVERVIEW.md](./DATA_OVERVIEW.md) - Complete Data Reference
Detailed breakdown of all sample data:
- All 12 infrastructure projects with budgets
- All 15 citizen reports with locations
- Data sources and file locations
- Data modification instructions
- Statistics and insights

### 📋 [FEATURES.md](./FEATURES.md) - Feature Documentation
Comprehensive feature guide:
- Financial Transparency features
- Live Grievance Map capabilities
- Report Issue Form walkthrough
- Database features
- Search & filtering

---

## Setup & Configuration

### 🗄️ [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Database Guide
Everything about the Supabase database:
- Schema definition and structure
- Setup instructions step-by-step
- Row Level Security (RLS) policies
- API endpoints documentation
- Query examples
- Seed sample data instructions

### 🌐 [GOOGLE_INTEGRATION_SETUP.md](./GOOGLE_INTEGRATION_SETUP.md) - Google Services
Setting up Google Maps and Google Places:
- Google Maps API configuration
- Places Autocomplete setup
- API key restrictions
- Fallback mode explanation
- Troubleshooting

### 📈 [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) - Google Sheets Backend
Using Google Sheets as data source:
- Google Sheets setup
- API configuration
- Data format requirements
- Integration examples
- Sync options

### 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy to Production
Complete deployment guide:
- Vercel deployment steps
- Environment variables setup
- Database migration in production
- SSL/HTTPS configuration
- Performance optimization
- Monitoring & logging

---

## Data & Scripts

### 📁 Scripts Directory (`scripts/`)

**001_create_reports_table.sql**
- Creates the reports table in Supabase
- Sets up Row Level Security
- Creates indexes for performance
- Run this first!

**002_seed_sample_reports.sql**
- Inserts 15 sample citizen reports
- Demonstrates data structure
- Provides demo data for testing
- Run after creating table (optional)

### 💾 Data Files

**lib/projects-data.ts**
- 12 infrastructure projects
- Includes helper functions
- Format conversion utilities
- Search functionality

**components/grievance-map.tsx**
- 15 sample grievance reports
- Map coordinates for all issues
- Severity levels
- Category information

**lib/sample-reports.ts**
- 15 realistic citizen submissions
- Timestamps and status values
- Descriptions and locations
- Reference for database seeding

---

## Development Files

### 🏗️ Project Structure

```
v0-anti-corruption-dashboard/
├── app/
│   ├── page.tsx                 # Main dashboard page
│   ├── layout.tsx               # App layout & metadata
│   ├── globals.css              # Global styles
│   ├── actions/
│   │   └── fetch-projects.ts    # Projects server action
│   └── api/
│       ├── submit-report/       # Report submission API
│       └── load-maps/           # Google Maps loader
├── components/
│   ├── financial-transparency.tsx # Projects section
│   ├── grievance-map.tsx        # Map with grievances
│   ├── report-issue-form.tsx    # Report form
│   ├── header.tsx               # Navigation header
│   ├── theme-provider.tsx       # Theme setup
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── projects-data.ts         # Project data & utilities
│   ├── sample-reports.ts        # Sample report data
│   ├── google-sheets-integration.ts # Google Sheets
│   ├── supabase/
│   │   ├── client.ts            # Client-side Supabase
│   │   └── server.ts            # Server-side Supabase
│   └── utils.ts                 # Utility functions
├── public/                       # Static assets
│   ├── map-of-india-with-location-pins.jpg
│   └── [other images]
├── scripts/
│   ├── 001_create_reports_table.sql
│   └── 002_seed_sample_reports.sql
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
└── next.config.mjs             # Next.js config
```

---

## Quick Reference

### Common Tasks

**I want to...**

| Task | Go To |
|------|-------|
| Get the app running quickly | [QUICKSTART.md](./QUICKSTART.md) |
| Understand what data is available | [DATA_OVERVIEW.md](./DATA_OVERVIEW.md) |
| Setup the database | [DATABASE_SETUP.md](./DATABASE_SETUP.md) |
| Use Google Maps | [GOOGLE_INTEGRATION_SETUP.md](./GOOGLE_INTEGRATION_SETUP.md) |
| Connect Google Sheets | [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) |
| Deploy to production | [DEPLOYMENT.md](./DEPLOYMENT.md) |
| Learn about all features | [FEATURES.md](./FEATURES.md) |
| Understand the project | [README.md](./README.md) |
| See all sample data | [DATA_OVERVIEW.md](./DATA_OVERVIEW.md) |
| Setup environment variables | [DATABASE_SETUP.md](./DATABASE_SETUP.md) |

---

## Support

### Troubleshooting Guide

**Data Not Displaying?**
1. Check [QUICKSTART.md](./QUICKSTART.md) - Troubleshooting section
2. Review [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Connection issues
3. Look at browser console for errors

**Google Maps Not Working?**
1. See [GOOGLE_INTEGRATION_SETUP.md](./GOOGLE_INTEGRATION_SETUP.md)
2. Check API key configuration
3. Verify environment variables

**Form Submission Failing?**
1. Check [DATABASE_SETUP.md](./DATABASE_SETUP.md) - API endpoints
2. Verify Supabase connection
3. Check network requests in DevTools

**Deployment Issues?**
1. Review [DEPLOYMENT.md](./DEPLOYMENT.md)
2. Check environment variables
3. Verify database is accessible

---

## Documentation Map

```
QUICKSTART.md ─────► Start here
    │
    ├─► README.md ──────► Full project overview
    │
    ├─► FEATURES.md ────► What the app can do
    │
    ├─► DATA_OVERVIEW.md ► See all sample data
    │
    └─► Setup & Config:
        ├─► DATABASE_SETUP.md
        ├─► GOOGLE_INTEGRATION_SETUP.md
        ├─► GOOGLE_SHEETS_SETUP.md
        └─► DEPLOYMENT.md
```

---

## Key Concepts

### Financial Transparency
Government project tracking with real-time budget monitoring. Shows:
- Project status and progress
- Fund allocation and usage
- Central vs remaining balance
- AI verification for authenticity

### Live Grievance Map
Real-time citizen reports displayed on an interactive map. Shows:
- Location of reported issues
- Issue severity levels
- Type of problem
- Report submission timeline

### Report Issue Form
Simple form for citizens to report problems. Collects:
- Issue category
- Location with autocomplete
- Detailed description
- Photo evidence
- Automatic database storage

### Transparency First
All data is publicly viewable (with optional photo storage) ensuring maximum government accountability.

---

## Additional Resources

### External Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Maps API](https://developers.google.com/maps)
- [Google Sheets API](https://developers.google.com/sheets)

### Community
- Report issues on GitHub
- Check existing issues first
- Provide detailed error messages
- Include screenshots if applicable

---

## Version History

**v1.0** (Current)
- ✅ Financial Transparency with 12 projects
- ✅ Live Grievance Map with 15 reports
- ✅ Report Issue Form with database storage
- ✅ Google Maps & Places integration
- ✅ Google Sheets backend support
- ✅ Complete documentation

---

## Next Steps

1. **First Time?** → Start with [QUICKSTART.md](./QUICKSTART.md)
2. **Ready to Deploy?** → Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
3. **Want More Data?** → Check [DATA_OVERVIEW.md](./DATA_OVERVIEW.md)
4. **Need Details?** → Browse [README.md](./README.md)

---

**Happy coding! Making Government Transparent, One Report at a Time** 🇮🇳
