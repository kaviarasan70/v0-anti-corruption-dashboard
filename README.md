# Indian Citizen Watchdog Dashboard

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/kavis-projects-5372883d/v0-anti-corruption-dashboard)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/nIDeSgInWdL)

A modern transparency platform for Indian citizens to monitor public infrastructure projects and report civic issues. Built with Next.js 16, React 19, and integrated with Google Sheets for backend data management.

## Features

### 1. Financial Transparency
- **Real-time Project Tracking**: View infrastructure projects from major Indian cities
- **Budget Monitoring**: Track central funds allocated, used, and remaining balances
- **AI Verification Badges**: Projects verified for transparency and authenticity
- **Smart Search**: Filter projects by name, city, state, or category
- **Progress Visualization**: Interactive progress bars for fund utilization

### 2. Live Grievance Map
- **Interactive Map**: Visual representation of reported civic issues across India
- **Google Maps Integration**: Optional real-time map with location pins (fallback to static map)
- **Issue Categories**: Potholes, water scarcity, garbage, power outage, road damage
- **Severity Indicators**: Color-coded markers (high, medium, low priority)
- **Recent Reports**: Timeline of latest grievances with locations

### 3. Report Issue Form
- **Photo Upload**: Citizens can attach visual evidence of issues
- **Smart Location Input**: Google Places Autocomplete for accurate location (with manual fallback)
- **Category Selection**: Organized issue types for efficient tracking
- **Description Field**: Detailed problem reporting
- **Google Sheets Integration**: Automatic submission to spreadsheet database

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19.2 with Server Components
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Backend**: Google Sheets API (optional)
- **Maps**: Google Maps JavaScript API (optional)
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

```bash
Node.js 18+ installed
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/v0-anti-corruption-dashboard.git
cd v0-anti-corruption-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Optional: Enable Google Integrations

The app works perfectly without API keys using fallback modes. To enable full functionality:

#### Google Maps (Optional)
1. Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API and Places API
3. Add to environment variables:
```bash
GOOGLE_MAPS_API_KEY=your_api_key_here
```

#### Google Sheets Backend (Optional)
1. Follow the setup guide in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
2. Add to environment variables:
```bash
GOOGLE_SHEETS_API_KEY=your_api_key_here
SPREADSHEET_ID=your_spreadsheet_id_here
GRIEVANCES_SPREADSHEET_ID=your_grievances_sheet_id_here
```

See [GOOGLE_INTEGRATION_SETUP.md](./GOOGLE_INTEGRATION_SETUP.md) for detailed instructions.

## Project Structure

```
├── app/
│   ├── actions/
│   │   └── fetch-projects.ts      # Server action for Google Sheets data
│   ├── api/
│   │   ├── load-maps/             # Maps API key endpoint
│   │   └── submit-report/         # Form submission handler
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Main dashboard page
│   └── globals.css                # Global styles with design tokens
├── components/
│   ├── financial-transparency.tsx # Project cards with search
│   ├── grievance-map.tsx          # Interactive map component
│   ├── google-maps-loader.tsx     # Maps script loader
│   ├── header.tsx                 # Dashboard header
│   ├── report-issue-form.tsx      # Issue reporting form
│   └── ui/                        # shadcn/ui components
├── lib/
│   ├── google-sheets-integration.ts # Sheets API helper
│   └── projects-data.ts           # Sample project data
└── public/
    └── map-of-india-with-location-pins.jpg # Fallback map image
```

## Sample Data

The app includes 12 sample infrastructure projects from:
- Delhi: Delhi Metro Phase 4, Smart City Initiative
- Mumbai: Coastal Road, Slum Rehabilitation
- Bangalore: Suburban Rail, Tech Park Development
- Chennai: Metro Rail Extension, Port Modernization
- Kolkata: East-West Metro, Heritage Conservation
- Hyderabad: Outer Ring Road, IT Corridor

## Customization

### Adding New Projects
Edit `lib/projects-data.ts` or connect to Google Sheets for dynamic data management.

### Styling
- Design tokens are configured in `app/globals.css`
- Uses a professional white and blue color scheme
- Modify CSS variables for custom theming

### Google Sheets Schema
See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for the exact column structure required.

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/v0-anti-corruption-dashboard)

Or manually:

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard (optional)
4. Deploy

Your app is currently deployed at:
**[https://vercel.com/kavis-projects-5372883d/v0-anti-corruption-dashboard](https://vercel.com/kavis-projects-5372883d/v0-anti-corruption-dashboard)**

## Contributing

This app was built with [v0.app](https://v0.app) and is automatically synced with the v0 deployment.

web app can viewed by [v0.app](https://v0-anti-corruption-dashboard.vercel.app/) 

## Features Roadmap

- [ ] User authentication for verified reporting
- [ ] Admin dashboard for project management
- [ ] Real-time notifications for new grievances
- [ ] Analytics dashboard for tracking trends
- [ ] Multi-language support (Hindi, Tamil, Bengali, etc.)
- [ ] Mobile app version
- [ ] Email notifications for issue updates

## License

MIT License - Built for civic transparency and public good

## Support

For issues and questions, please open an issue on GitHub or contact through [v0.app](https://v0.app).

---

Built with ❤️ using [v0.app](https://v0.app) - AI-powered development by Vercel
