# NYC Eats - Discover the Best Food Spots in New York City

A modern, responsive landing page built with Next.js 16, TypeScript, Tailwind CSS, and shadcn UI. Discover and explore the best food spots across New York City's five boroughs.

## Features

- **Modern Design**: Clean, professional interface using Beli's brand colors (#134F5C teal and #EBC560 gold)
- **Authentication System**: Built with NextAuth v5 for secure user authentication
- **Responsive Layout**: Mobile-first design that works seamlessly across all devices
- **TypeScript**: Full type safety throughout the application
- **shadcn UI Components**: Beautiful, accessible UI components
- **Tailwind CSS**: Utility-first styling with custom color scheme

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn UI
- **Authentication**: NextAuth v5 (beta)
- **Icons**: Lucide React
- **Fonts**: System fonts for optimal performance

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the root directory (already created):
   ```
   AUTH_SECRET=your-secret-key-change-this-in-production
   NEXTAUTH_URL=http://localhost:3000
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nyc-food-spots/
├── src/
│   ├── app/
│   │   ├── api/auth/[...nextauth]/    # NextAuth API routes
│   │   ├── auth/signin/               # Sign in page
│   │   ├── globals.css                # Global styles with custom theme
│   │   ├── layout.tsx                 # Root layout
│   │   └── page.tsx                   # Home page
│   ├── components/
│   │   ├── ui/                        # shadcn UI components
│   │   ├── Navbar.tsx                 # Navigation component
│   │   ├── Hero.tsx                   # Hero section
│   │   └── Features.tsx               # Features section
│   ├── lib/
│   │   └── utils.ts                   # Utility functions
│   ├── auth.ts                        # NextAuth configuration
│   └── auth.config.ts                 # NextAuth config
├── public/                            # Static assets
└── package.json
```

## Color Scheme (Beli Brand)

- **Primary (Teal)**: `#134F5C` - Used for headings, primary buttons, and brand elements
- **Accent (Gold)**: `#EBC560` - Used for CTAs, highlights, and secondary elements
- **Background**: White with subtle decorative gradients

## Features Overview

1. **Landing Page**:
   - Eye-catching hero section with NYC food theme
   - Statistics showcase (500+ spots, 50K+ users, 5 boroughs)
   - Feature cards highlighting app capabilities
   - Call-to-action section
   - Professional footer with links

2. **Authentication**:
   - Sign in/Sign up forms with toggle
   - Email and password credentials
   - Social login options (Google, GitHub)
   - Fully styled with custom theme

3. **Responsive Design**:
   - Mobile-first approach
   - Optimized for all screen sizes
   - Touch-friendly interface

## Demo Credentials

For testing the authentication:
- Email: `demo@example.com`
- Password: `password`

## Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Restaurant listings and search
- User profiles and favorites
- Interactive maps
- Review system
- Social sharing
- Admin dashboard

## License

MIT License - feel free to use this project as a template for your own applications.

## Author

Built with ❤️ for NYC food lovers
