# Quick Start Guide - Indian Citizen Watchdog Dashboard

Get the anti-corruption dashboard up and running in 5 minutes!

## Step 1: Clone & Install

```bash
git clone https://github.com/yourusername/v0-anti-corruption-dashboard.git
cd v0-anti-corruption-dashboard
npm install
```

## Step 2: Setup Environment Variables

Create a `.env.local` file with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Get these from your Supabase dashboard → Settings → API

## Step 3: Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` - The app will work immediately with demo data!

## Step 4: Setup Database (Optional)

To store real citizen reports in your database:

### 4a. Create the Reports Table

1. Open your Supabase Dashboard
2. Go to SQL Editor → New Query
3. Copy and paste contents from `scripts/001_create_reports_table.sql`
4. Click "Run" ✓

### 4b. Add Sample Data (Optional)

1. Go to SQL Editor → New Query  
2. Copy and paste contents from `scripts/002_seed_sample_reports.sql`
3. Click "Run"

Now you'll have 15 sample citizen reports! The dashboard will display them on the grievance map and in the reports list.

## What You Get Out of the Box

### Financial Transparency Section
- ✅ 12 Indian infrastructure projects with real budget data
- ✅ Search functionality to filter by city, state, or project name
- ✅ Progress bars showing fund allocation and usage
- ✅ AI verification badges on each project

### Live Grievance Map
- ✅ 15 sample citizen reports across major Indian cities
- ✅ Color-coded severity levels (Critical, High, Medium)
- ✅ Interactive pins showing issue locations
- ✅ Recent reports list with details
- ✅ Google Maps integration (with fallback static map)

### Report Issue Form
- ✅ Simple form for citizens to report problems
- ✅ Category selection (pothole, water, drainage, etc.)
- ✅ Location input with autocomplete
- ✅ Photo upload capability
- ✅ Beautiful success confirmation message
- ✅ Automatic database storage (when configured)

## Sample Data Overview

### Projects (Financial Transparency)

| City | Project | Budget | Status |
|------|---------|--------|--------|
| Delhi | Metro Phase 4 Extension | ₹85 Cr | In Progress |
| Mumbai | Coastal Road Project | ₹120 Cr | In Progress |
| Bangalore | Smart Water Distribution | ₹9.5 Cr | In Progress |
| Kolkata | Hospital Modernization | ₹4.2 Cr | Planning |
| Chennai | Metro Phase 2 Extension | ₹50 Cr | In Progress |
| Hyderabad | Road Repair & Maintenance | ₹3.8 Cr | In Progress |

...and 6 more projects across India!

### Reports (Grievance Map)

- **15 sample reports** showing realistic citizen submissions
- **Multiple categories**: Potholes, Water Issues, Drainage, Street Lights, Power Outages, etc.
- **Status tracking**: Pending, In Progress, Resolved
- **Realistic timestamps**: Reports dated from 1 day to 20 days ago
- **Across major cities**: Delhi, Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune, Chandigarh, Ahmedabad, and more

## Features Explained

### Financial Transparency
Track government spending on major infrastructure projects with:
- Real-time budget tracking
- Central funds allocation vs usage
- Project status and completion dates
- AI verification for transparency

### Live Grievance Map
Real-time citizen reports showing:
- Exact locations of reported problems
- Issue severity levels
- Report submission dates
- Status of each issue

### Report Issue Form
Citizens can report problems by providing:
- Issue category (dropdown)
- Location (with autocomplete)
- Detailed description
- Photo evidence
- Anonymous or registered reporting

## Key Files

```
├── lib/projects-data.ts           # 12 sample infrastructure projects
├── components/financial-transparency.tsx  # Projects display
├── components/grievance-map.tsx   # Grievance map with 15 sample reports
├── components/report-issue-form.tsx # Report submission form
├── lib/sample-reports.ts          # 15 sample citizen reports
├── scripts/001_create_reports_table.sql # Database schema
├── scripts/002_seed_sample_reports.sql  # Sample data insertion
└── DATABASE_SETUP.md              # Database setup instructions
```

## Troubleshooting

### "Page showing 'Loading...'"
- Check browser console for errors
- Ensure environment variables are set
- Refresh the page

### "Reports not displaying"
- Verify Supabase credentials in `.env.local`
- Check that database table was created
- Check that sample data was seeded
- Open browser DevTools → Network tab to see API calls

### "Form not submitting"
- Check browser console for errors
- Verify Supabase connection
- Try submitting again (might be network timeout)

### "Google Maps not showing"
- This is normal! The app works with fallback static map
- Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to use interactive maps

## Next Steps

After testing with sample data:

1. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Add Google Maps API Key** (Optional)
   - Get key from Google Cloud Console
   - Add to environment variables
   - Enable interactive map features

3. **Customize Projects & Reports**
   - Replace sample data with real government data
   - Connect Google Sheets as data source
   - Implement user authentication

4. **Setup Admin Dashboard**
   - Create admin panel to manage reports
   - Add report status updates
   - Implement notification system

## Support & Documentation

- 📚 Full docs: See `README.md`
- 🗄️ Database docs: See `DATABASE_SETUP.md`
- 🎨 Features: See `FEATURES.md`
- 🚀 Deployment: See `DEPLOYMENT.md`
- 🗺️ Google Integration: See `GOOGLE_INTEGRATION_SETUP.md`
- 📊 Google Sheets: See `GOOGLE_SHEETS_SETUP.md`

---

**Happy monitoring! Making Government Transparent, One Report at a Time** 🇮🇳
