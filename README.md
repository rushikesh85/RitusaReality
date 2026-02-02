# RitusaReality - React + Vite Frontend Project

A modern, responsive real estate website built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite + SWC
- **Routing**: React Router v6 for seamless navigation
- **Email Integration**: EmailJS for contact form submissions
- **Responsive Design**: Mobile-first approach with modern CSS
- **Path Aliases**: Clean imports using `@` prefix
- **Type Safety**: Full TypeScript support

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   └── Layout/      # Layout components (Header, Footer)
├── pages/           # Page components
│   ├── Home/        # Home page
│   ├── Gallery/     # Property gallery
│   ├── About/       # About page
│   └── Contact/     # Contact form
├── assets/          # Images and media files
│   └── images/
├── styles/          # Global styles
├── utils/           # Utility functions
├── data/            # Static content data
├── types/           # TypeScript type definitions
└── App.tsx          # Main app component
```

## 🛠️ Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure EmailJS** (for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Path Aliases

The project uses path aliases for cleaner imports:

- `@/` → `src/`
- `@components/` → `src/components/`
- `@pages/` → `src/pages/`
- `@assets/` → `src/assets/`
- `@styles/` → `src/styles/`
- `@utils/` → `src/utils/`
- `@data/` → `src/data/`
- `@types/` → `src/types/`

Example:
```typescript
import Layout from '@components/Layout/Layout';
import { Property } from '@types/index';
```

## 🎨 Customization

### Adding Images
1. Place your images in `src/assets/images/`
2. Update the Gallery component to use your images
3. Replace placeholder URLs with actual image paths

### Styling
- Global styles: `src/styles/global.css`
- Component styles: Co-located with components (e.g., `Header.css`)
- CSS variables defined in `:root` for easy theming

### Content
- Update company information in `Footer.tsx`
- Modify page content in respective page components
- Add your actual contact details in `Contact.tsx`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Pages

- **Home** (`/`) - Landing page with hero section and features
- **Gallery** (`/gallery`) - Property gallery with filtering
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form with EmailJS integration

## 🔧 Technologies Used

- React 18
- TypeScript
- Vite
- React Router
- EmailJS
- CSS3 (with CSS Variables)

## 📄 License

This project is private and proprietary.
