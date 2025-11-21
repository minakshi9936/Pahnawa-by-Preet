# Claude Development Notes

## Project Overview
This is a premium boutique website for "Pahnawa By Preets" built with Next.js 14 + Tailwind CSS. It's a UI-only implementation with no backend.

## Important Commands

### Development
```bash
npm run dev
```
Starts the development server at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates an optimized production build

### Production Start
```bash
npm start
```
Runs the production build

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality

## Project Structure

### Pages
- `/` - Homepage with hero, services, testimonials, etc.
- `/boutique` - Collection showcase with filtering
- `/services` - Detailed services with descriptions
- `/designers` - Team profiles
- `/pricing` - Pricing tables and packages
- `/gallery` - Photo gallery with categories
- `/contact` - Contact form and information
- `/admin/login` - Admin login page
- `/admin/dashboard` - Admin management panel

### Components
- `Navbar.tsx` - Main navigation with mobile menu
- `Footer.tsx` - Footer with company info and links

### Configuration Files
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration

## Color Scheme

- **Primary**: #1a1a1a (Dark Black)
- **Secondary**: #d4af37 (Gold)
- **Accent**: #f5f5f5 (Light Gray)

## Key Features

1. ✅ Fully Responsive Design
2. ✅ SEO Optimized Metadata
3. ✅ Premium, Elegant UI
4. ✅ Multiple Filter Options
5. ✅ Admin Dashboard (UI Only)
6. ✅ Contact Form (UI Only)
7. ✅ Testimonials Section
8. ✅ Service Showcase
9. ✅ Gallery with Categories
10. ✅ Pricing Tables

## Important Notes

1. **No Backend**: This is purely a frontend implementation. All forms are UI-only.
2. **No Animations**: Smooth scrolling only, no CSS animations as per requirements.
3. **Placeholder Images**: Use emoji placeholders. Replace with real images in production.
4. **Admin Access**: Demo credentials are admin@pahnawa.com / admin123
5. **No Authentication**: Admin panel is UI-only, no actual login validation.

## Development Guidelines

1. **Components**: Keep components reusable and focused
2. **Styling**: Use Tailwind CSS utility classes, avoid custom CSS
3. **TypeScript**: Maintain type safety throughout
4. **Responsive**: Always test on mobile, tablet, and desktop
5. **Accessibility**: Use semantic HTML elements

## Future Enhancements

- Backend API integration
- Database for products/services
- Real authentication system
- Email notifications
- Payment processing
- Booking system
- Analytics tracking
- Image optimization

## Common Tasks

### Adding a New Page
1. Create folder in `app/` directory
2. Create `page.tsx` file
3. Import Navbar and Footer
4. Add page content
5. Update Navbar links if needed

### Modifying Colors
1. Edit `tailwind.config.ts`
2. Update color hex values
3. Colors update throughout the site via Tailwind utilities

### Adding Images
1. Replace emoji placeholders with image URLs
2. Update `next/image` imports for optimization
3. Add proper alt text for accessibility

## Deployment Notes

- Build command: `npm run build`
- Start command: `npm start`
- Environment: Node.js 18+
- No database required
- No .env variables required for UI-only version

## Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Mobile responsive design works
- [ ] Footer is visible on all pages
- [ ] Forms submit without errors (UI only)
- [ ] Admin login page accessible
- [ ] Admin dashboard displays properly
- [ ] All links are functional
- [ ] SEO meta tags are present

---

**Last Updated**: November 20, 2024
**Status**: Complete and Ready for Development
