# Resgato Website

This is the main website for Resgato, a digital marketing agency based in Utah.

## Tech Stack

### Frontend
- React + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for UI components

### Backend & Infrastructure
- **Supabase** for:
  - Database (PostgreSQL)
  - Authentication
  - Edge Functions
  - Storage
  - Row Level Security (RLS)

### Hosting & Services
- **Vercel** for hosting and deployment
- **Cloudflare** for DNS and CDN
- **Resend** for email notifications

## Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase CLI (for local development)

### Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Local Development
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

### Database Migrations
Database migrations are managed through Supabase. To apply migrations:
1. Navigate to the Supabase dashboard
2. Go to the SQL editor
3. Run the migration files in order from the `supabase/migrations` directory

### Edge Functions
Edge Functions are used for:
- Sending email notifications for form submissions
- Processing webhook events
- Other serverless operations

To deploy Edge Functions:
1. Navigate to the Supabase dashboard
2. Go to Edge Functions
3. Deploy the functions from the `supabase/functions` directory

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch. The deployment process:
1. Builds the application
2. Runs database migrations
3. Deploys Edge Functions
4. Updates the production site

## Email Notifications

Email notifications are handled through Resend and are triggered by:
- Contact form submissions
- Marketing audit submissions
- Other form submissions

The email system uses Supabase Edge Functions to:
1. Process form submissions
2. Format email content
3. Send notifications via Resend

## Security

- Row Level Security (RLS) is enabled on all tables
- Environment variables are used for sensitive data
- API keys are stored securely in Vercel and Supabase
- CORS is properly configured for all endpoints

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request
4. Ensure all tests pass
5. Get code review approval

## License

This project is proprietary and confidential. All rights reserved.

