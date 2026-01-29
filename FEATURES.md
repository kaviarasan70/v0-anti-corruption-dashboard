# Features Documentation - Indian Citizen Watchdog Dashboard

Complete feature documentation for the transparency platform.

## Core Features

### 1. Financial Transparency Section

#### Project Cards
- **Visual Design**: Clean card layout with project details
- **Fund Tracking**: Shows allocated, used, and remaining funds
- **Progress Bars**: Visual representation of fund utilization
- **AI Verification Badge**: Indicates verified and transparent projects
- **Category Tags**: Infrastructure, Transportation, Development, Healthcare

#### Search Functionality
- **Real-time Search**: Filter projects as you type
- **Multi-field Search**: Searches across project name, city, state, and category
- **Responsive Results**: Instant filtering without page refresh
- **Empty State**: Clear message when no projects match search

#### Data Display
Each project card shows:
- Project name and description
- Location (city, state)
- Fund allocation breakdown
- Progress percentage
- Project category
- Verification status

### 2. Live Grievance Map

#### Map Modes

**Google Maps Mode** (when API key is configured):
- Interactive map of India
- Clickable markers for each grievance
- Info windows with issue details
- Zoom and pan controls
- Satellite/terrain view options

**Fallback Mode** (default, no API key needed):
- Static map image of India
- Animated location pins
- Color-coded by severity
- Recent reports list below map

#### Grievance Markers
- **Red**: High severity (potholes, power outage)
- **Orange**: Medium severity (garbage)
- **Yellow**: Low severity (general issues)

#### Information Display
- Issue type
- Location
- Reported date
- Severity level
- Brief description

### 3. Report Issue Form

#### Form Fields

**Photo Upload**:
- Drag and drop support
- Click to browse
- Image preview
- File size limit: 10MB
- Supported formats: JPG, PNG, GIF

**Location Input**:
- Google Places Autocomplete (when API enabled)
- Manual text input fallback
- Supports Indian addresses
- City, state, and landmark detection

**Category Selection**:
- Pothole
- Water Scarcity
- Garbage Disposal
- Power Outage
- Road Damage
- Street Light
- Other

**Description**:
- Multi-line text area
- Minimum 10 characters
- Maximum 500 characters
- Character counter

#### Submission Process
1. User fills form
2. Client-side validation
3. Submit to API route
4. Save to Google Sheets (if configured)
5. Show success message
6. Form auto-clears

#### Validation
- Required fields marked with asterisk
- Real-time validation messages
- Submit button disabled until valid
- Clear error states

## Technical Features

### Performance Optimizations
- **Server Components**: React 19 server components for faster loads
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS v4 with JIT compilation
- **Lazy Loading**: Components load on demand

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch-Friendly**: Large tap targets, swipe gestures
- **Flexible Grid**: Adapts to screen size

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant
- **Focus Indicators**: Clear focus states
- **Alt Text**: All images have descriptive alt text

### Google Integrations

#### Google Sheets Backend
- **Projects Data**: Read from spreadsheet
- **Grievance Submissions**: Write to spreadsheet
- **Real-time Sync**: Data updates on page refresh
- **Fallback Data**: Static data when offline

#### Google Maps
- **Interactive Map**: Full map controls
- **Places Autocomplete**: Address suggestions
- **Geocoding**: Convert addresses to coordinates
- **Custom Markers**: Color-coded by severity
- **Info Windows**: Detailed issue information

### Security Features
- **API Key Protection**: Server-side only
- **Input Validation**: XSS prevention
- **CORS Configuration**: Restricted origins
- **Rate Limiting**: Prevents abuse
- **Secure Headers**: CSP, HSTS configured
- **Environment Variables**: Secrets never exposed to client

## Data Management

### Sample Data Structure

#### Projects
\`\`\`typescript
{
  id: string
  name: string
  description: string
  city: string
  state: string
  category: string
  allocated: number
  used: number
  remaining: number
  progress: number
  verified: boolean
}
\`\`\`

#### Grievances
\`\`\`typescript
{
  id: string
  type: string
  location: string
  coordinates: { lat: number, lng: number }
  severity: 'high' | 'medium' | 'low'
  date: string
  description: string
}
\`\`\`

### Google Sheets Schema

#### Projects Sheet
| Column | Type | Description |
|--------|------|-------------|
| ID | Text | Unique identifier |
| Name | Text | Project name |
| Description | Text | Project details |
| City | Text | Location city |
| State | Text | Location state |
| Category | Text | Project category |
| Allocated | Number | Total budget (crores) |
| Used | Number | Funds used (crores) |
| Remaining | Number | Remaining funds (crores) |
| Progress | Number | Percentage (0-100) |
| Verified | Boolean | AI verified status |

#### Grievances Sheet
| Column | Type | Description |
|--------|------|-------------|
| ID | Text | Unique identifier |
| Type | Text | Issue category |
| Location | Text | Address |
| Latitude | Number | Coordinates |
| Longitude | Number | Coordinates |
| Severity | Text | high/medium/low |
| Date | Date | Submission date |
| Description | Text | Issue details |
| Photo URL | Text | Image link (optional) |

## User Workflows

### 1. Browse Projects
1. User lands on dashboard
2. Views project cards with financial data
3. Uses search to filter by city/category
4. Clicks on projects for details

### 2. View Grievances
1. User scrolls to map section
2. Views pins on India map
3. Clicks pins for issue details
4. Reads recent reports list

### 3. Report New Issue
1. User scrolls to report form
2. Uploads photo of issue
3. Enters/selects location
4. Chooses issue category
5. Writes description
6. Submits form
7. Receives confirmation

## Future Enhancements

### Planned Features
- [ ] User authentication and profiles
- [ ] Admin dashboard for data management
- [ ] Real-time notifications
- [ ] Issue status tracking
- [ ] Voting/priority system
- [ ] Multi-language support
- [ ] Email notifications
- [ ] Mobile app
- [ ] PDF reports export
- [ ] Data analytics dashboard
- [ ] Government response tracking
- [ ] Community forums
- [ ] Issue resolution timeline

### Integration Opportunities
- SMS notifications via Twilio
- Email via SendGrid
- Database upgrade to PostgreSQL
- File storage with AWS S3
- Authentication with Auth0
- Payment gateway for donations
- Social media sharing
- Calendar integration
- Newsletter system

## Support & Documentation

- **Main README**: [README.md](./README.md)
- **Google Setup**: [GOOGLE_INTEGRATION_SETUP.md](./GOOGLE_INTEGRATION_SETUP.md)
- **Sheets Guide**: [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
- **Deployment**: [DEPLOYMENT.md](./DEPLOYMENT.md)
