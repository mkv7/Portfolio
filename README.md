# Professional Portfolio Website

A modern, fully responsive fullstack portfolio website built with Next.js 15, TypeScript, React, and Tailwind CSS. Features a complete backend API for contact form submissions, beautiful animations, and optimized performance.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### Frontend
- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- 🌓 **Dark Mode** - Built-in dark mode support with system preference detection
- ⚡ **Performance Optimized** - Fast loading with Next.js 15 optimization
- 🎭 **Interactive UI** - Smooth scrolling, typewriter effects, progress bars
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML

### Sections
1. **Hero Section** - Eye-catching landing with typewriter effect
2. **About Me** - Professional introduction with key metrics
3. **Skills** - Interactive skill categories with progress bars
4. **Projects** - Filterable project showcase with live demos
5. **Experience** - Timeline of work history
6. **Testimonials** - Client reviews with star ratings
7. **Contact Form** - Full-featured contact form with validation
8. **Footer** - Social links and quick navigation

### Backend
- 🔒 **API Routes** - Next.js API routes for server-side logic
- ✅ **Form Validation** - Server-side validation for security
- 📧 **Email Integration Ready** - Prepared for SendGrid, AWS SES, etc.
- 🗄️ **Database Ready** - Structure for MongoDB/PostgreSQL integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or use this repository**
   ```bash
   cd "Portfolio web"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization Guide

### 1. Personal Information

Update your personal details in the following files:

**Hero Section** (`src/components/Hero.tsx`):
```typescript
// Change your name and title
<h1>Hi, I'm Your Name</h1>
const fullText = 'Full-Stack Developer';
```

**About Section** (`src/components/About.tsx`):
- Update your photo placeholder
- Modify experience description
- Change project/client counts

**Layout** (`src/app/layout.tsx`):
```typescript
export const metadata: Metadata = {
  title: "Your Name | Developer Portfolio",
  description: "Your custom description",
  // ... update other metadata
};
```

### 2. Skills

Edit `src/components/Skills.tsx`:
```typescript
const skillsData = [
  { category: 'Frontend', skills: [
    { name: 'Your Skill', level: 90 },
    // Add more skills
  ]},
  // Add more categories
];
```

### 3. Projects

Update `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://your-demo.com',
    github: 'https://github.com/your-repo',
    // ... more fields
  },
];
```

### 4. Experience

Modify `src/components/Experience.tsx`:
```typescript
const experiences = [
  {
    company: 'Your Company',
    position: 'Your Position',
    period: '2020 - Present',
    description: 'What you did',
    technologies: ['Tech1', 'Tech2'],
  },
];
```

### 5. Contact Information

Update `src/components/Contact.tsx` and `src/components/Footer.tsx`:
- Email addresses
- Social media links
- Location information

### 6. Colors and Styling

The project uses Tailwind CSS. Main colors can be changed globally:

**Tailwind Config** (`tailwind.config.ts`):
```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    },
  },
}
```

**Global Styles** (`src/app/globals.css`):
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

## 📧 Email Integration

To enable actual email sending, integrate an email service:

### Using SendGrid

```bash
npm install @sendgrid/mail
```

Update `src/app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: 'your-email@example.com',
  from: 'verified-sender@yourdomain.com',
  subject: subject,
  text: message,
  html: `<strong>${message}</strong>`,
};

await sgMail.send(msg);
```

### Environment Variables

Create a `.env.local` file:
```env
SENDGRID_API_KEY=your_api_key
MONGODB_URI=your_mongodb_connection
```

## 🗄️ Database Integration (Optional)

To store contact form submissions, add a database:

### MongoDB Example

```bash
npm install mongodb
```

Update the API route to save submissions:
```typescript
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);
await client.connect();
const db = client.db('portfolio');
await db.collection('contacts').insertOne({
  name, email, subject, message,
  timestamp: new Date()
});
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

### Other Platforms
- **Netlify**: Connect GitHub and deploy
- **AWS Amplify**: Use the Amplify CLI
- **Railway**: Deploy with Git integration

## 📁 Project Structure

```
Portfolio web/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # Contact API endpoint
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   ├── components/
│   │   ├── About.tsx              # About section
│   │   ├── Contact.tsx            # Contact form
│   │   ├── Experience.tsx         # Work experience
│   │   ├── Footer.tsx             # Footer
│   │   ├── Hero.tsx               # Landing section
│   │   ├── Navigation.tsx         # Nav bar
│   │   ├── Projects.tsx           # Projects showcase
│   │   ├── Skills.tsx             # Skills display
│   │   └── Testimonials.tsx       # Client reviews
│   └── middleware.ts              # Next.js middleware
├── public/                        # Static files
├── .eslintrc.json                 # ESLint config
├── next.config.ts                 # Next.js config
├── tailwind.config.ts             # Tailwind config
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI**: React 19
- **Build Tool**: Turbopack (Next.js)
- **Linting**: ESLint
- **Package Manager**: npm

## 🎯 Performance

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Image Optimization
- ✅ Code Splitting
- ✅ Lazy Loading
- ✅ SEO Optimized

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 💡 Tips for Customization

1. **Add Your Photos**: Replace placeholder images with actual photos
2. **Update Links**: Add your real project URLs and social media
3. **Customize Colors**: Match your personal brand
4. **Add More Sections**: Experience, certifications, blog posts, etc.
5. **Analytics**: Add Google Analytics or other tracking
6. **Animations**: Enhance with Framer Motion or similar

## 📞 Support

For questions or issues, feel free to open an issue on GitHub.

---

**Built with ❤️ using Next.js and TypeScript**

*Remember to update all placeholder content with your actual information!*
