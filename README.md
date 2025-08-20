# CS/AI × Ocean Sustainability Portfolio

A modern, responsive portfolio website showcasing projects at the intersection of computer science, AI, and ocean sustainability. Built with React, TypeScript, and Tailwind CSS.

## 🌊 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Project Showcase**: 12 detailed projects with filtering and search
- **Awards Section**: Recognition and accomplishments display
- **Contact Form**: Validated contact form with React Hook Form
- **Dark Mode**: System-based theme switching
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Layout
│   ├── projects/        # ProjectCard, AwardCard, FilterBar
│   └── ui/             # ShadCN components + custom components
├── data/
│   └── projects.ts     # Project and award data
├── pages/              # Home, Projects, Contact, ProjectDetail
└── assets/             # Images and static assets
```

## ✏️ Content Management

### Adding New Projects

Edit `src/data/projects.ts` and add a new project object:

```typescript
{
  slug: "my-new-project",
  title: "My Amazing Project",
  summary: "Brief description...",
  date: "2025-01-15",
  coverImage: "https://your-image-url.com/image.jpg",
  tags: ["Computer Science", "Sustainability"],
  // ... rest of project data
}
```

### Adding Awards

Add new awards to the `awards` array in `src/data/projects.ts`:

```typescript
{
  title: "Award Name",
  org: "Organization",
  year: 2025,
  image: "https://logo-url.com/logo.png",
  summary: "Brief description...",
  link: "https://award-link.com"
}
```

### Updating Contact Information

Edit the contact methods in `src/pages/Contact.tsx` to update email, LinkedIn, GitHub links.

## 🎨 Design System

The design system uses semantic color tokens defined in `src/index.css`:

- **Primary**: Deep Indigo/Navy (CS/AI theme)
- **Secondary**: Seafoam/Teal (Sustainability theme)  
- **Accent**: Coral (Highlights)

## 🏷️ Tag Colors

Project tags are automatically colored based on category:

- Computer Science: Indigo
- Sustainability: Teal
- Research: Emerald
- Community Service: Rose
- Robotics: Amber
- Education: Sky
- Entrepreneurship: Violet

## 📸 Images

Replace placeholder images in:
- `src/assets/hero-portrait.jpg` - Main hero image
- `src/assets/contact-portrait.jpg` - Contact page image
- Project cover images - Update URLs in `src/data/projects.ts`

## 🔧 Customization

- **Colors**: Edit CSS variables in `src/index.css`
- **Fonts**: Add Google Fonts to `index.html` and update `tailwind.config.ts`
- **Navigation**: Modify links in `src/components/layout/Navbar.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🌐 Deployment

The site is ready for deployment on Vercel, Netlify, or any static hosting platform.

```bash
npm run build
# Deploy the 'dist' folder
```

## 📄 License

This project is open source and available under the MIT License.