# Pahnawa By Preets - Premium Boutique Website

A modern, responsive, and SEO-friendly website for Pahnawa By Preets, a boutique specializing in custom clothing, stitching, alterations, premium designing, ethnic wear, bridal tailoring, and personalized fashion solutions.

## 🎯 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Premium, elegant design inspired by luxury boutique standards
- **SEO Optimized**: Optimized for search engines with proper meta tags and structure
- **No Backend Required**: UI-only implementation, no backend logic
- **Component-Based**: Reusable components for maintainability
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **TypeScript**: Type-safe code for better development experience

## 📄 Pages Included

### Public Pages
1. **Homepage** (`/`)
   - Hero section with call-to-action
   - Services showcase
   - How it works process
   - Why choose us section
   - Featured designs gallery
   - Testimonials
   - CTA section

2. **Boutique** (`/boutique`)
   - Product collection with filtering
   - Filter by category (Saree Blouse, Bridal Wear, Lehenga, Suits, Western Outfits)
   - Product cards with descriptions
   - Know More buttons

3. **Services** (`/services`)
   - Detailed service descriptions
   - Service features list
   - Service process workflow
   - Book Now buttons for each service

4. **Designers** (`/designers`)
   - Designer profile cards
   - Name, role, bio, and expertise
   - Book appointment functionality

5. **Pricing** (`/pricing`)
   - Three-tier pricing packages (Basic, Premium, Designer)
   - Service-wise pricing table
   - Pricing notes and payment process

6. **Gallery** (`/gallery`)
   - Grid-based photo gallery
   - Category filtering (Bridal, Ethnic, Party, Men, Alterations, Designer)
   - Masonry-style layout
   - Gallery highlights

7. **Contact** (`/contact`)
   - Contact form (Name, Phone, Email, Service, Message)
   - Contact information display
   - Working hours
   - Map placeholder

### Admin Pages
1. **Admin Login** (`/admin/login`)
   - Email and password input
   - Remember me option
   - Demo credentials display

2. **Admin Dashboard** (`/admin/dashboard`)
   - Overview statistics
   - Recent bookings
   - Top services analytics
   - Manage Products
   - Manage Gallery
   - Manage Services
   - Manage Pricing
   - Manage Bookings
   - Logout functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 📦 Project Structure

```
pahnawa/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── boutique/
│   │   └── page.tsx         # Boutique page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── designers/
│   │   └── page.tsx         # Designers page
│   ├── pricing/
│   │   └── page.tsx         # Pricing page
│   ├── gallery/
│   │   └── page.tsx         # Gallery page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   └── admin/
│       ├── page.tsx         # Admin redirect
│       ├── login/
│       │   └── page.tsx     # Admin login
│       └── dashboard/
│           └── page.tsx     # Admin dashboard
├── components/
│   ├── Navbar.tsx           # Navigation component
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets (if needed)
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
└── .eslintrc.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed on your system

### Installation

1. **Clone or extract the project**
   ```bash
   cd pahnawa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Scheme
- **Primary**: #1a1a1a (Dark)
- **Secondary**: #d4af37 (Gold)
- **Accent**: #f5f5f5 (Light)
- **White**: #ffffff
- **Gray Shades**: Various gray tones for hierarchy

### Typography
- **Sans-serif**: Segoe UI, Roboto (default)
- **Serif**: Georgia (for elegant headings)

### Components
- **Buttons**: Primary (Gold), Secondary (Dark), Outline
- **Cards**: Product cards, service cards, testimonial cards, pricing cards
- **Forms**: Input fields, text areas, select dropdowns
- **Navigation**: Responsive navbar with mobile menu
- **Footer**: Multi-column footer with social links

## 🔐 Admin Access

### Demo Credentials
- **Email**: admin@pahnawa.com
- **Password**: admin123

**Note**: This is UI-only. Authentication is not implemented. In production, implement proper authentication.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

- Meta tags for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Image alt text ready (use real images)
- Schema markup ready for implementation

## 🎯 Future Enhancements

- Backend integration for forms and bookings
- Authentication system for admin panel
- Database for products, services, and bookings
- Image optimization and lazy loading
- Search functionality
- Booking system
- Payment integration
- Analytics tracking
- Email notifications
- SMS notifications
- Multi-language support

## ⚙️ Configuration

### Tailwind CSS
Customize the theme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#1a1a1a',
  secondary: '#d4af37',
  accent: '#f5f5f5',
}
```

### Environment Variables
Create a `.env.local` file for any environment variables needed for future backend integration.

## 📄 License

This project is created for Pahnawa By Preets. All rights reserved.

## 👥 Team

- **Design & Development**: Premium Boutique Website

## 📧 Support

For any questions or support regarding the website, please contact the development team.

---

**Note**: This is a UI-only implementation. No backend, no animations, no real data storage. All forms and buttons are for demonstration purposes.
