# Quick Reference Guide

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Visit: http://localhost:3000

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 📝 Customization Checklist

### Essential Changes (Do These First!)
- [ ] Update name in `src/components/Hero.tsx`
- [ ] Update job title in `src/components/Hero.tsx`
- [ ] Add bio in `src/components/About.tsx`
- [ ] Update SEO metadata in `src/app/layout.tsx`
- [ ] Change email in `src/components/Contact.tsx`
- [ ] Update social links in `src/components/Footer.tsx`

### Content Updates
- [ ] Add real skills in `src/components/Skills.tsx`
- [ ] Add real projects in `src/components/Projects.tsx`
- [ ] Add work experience in `src/components/Experience.tsx`
- [ ] Update testimonials in `src/components/Testimonials.tsx`

### Optional Enhancements
- [ ] Add real photos/images to `public/` folder
- [ ] Configure email service (see README.md)
- [ ] Set up database for form submissions
- [ ] Add Google Analytics
- [ ] Customize colors in Tailwind config
- [ ] Add more animations

## 🎨 Common Customizations

### Change Primary Color
Edit `src/app/globals.css` and Tailwind classes throughout components.
Default: Blue (#3B82F6) - Change `blue-600`, `blue-500`, etc.

### Change Font
Edit `src/app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
const yourFont = YourFont({ subsets: ["latin"] });
```

### Add a New Section
1. Create component in `src/components/YourSection.tsx`
2. Import in `src/app/page.tsx`
3. Add to navigation in `src/components/Navigation.tsx`

## 🔧 File Structure Quick Reference

```
src/
├── app/
│   ├── api/contact/route.ts    # Backend API
│   ├── layout.tsx              # Main layout + SEO
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
│
└── components/
    ├── Hero.tsx                # Landing section
    ├── About.tsx               # About me
    ├── Skills.tsx              # Skills showcase
    ├── Projects.tsx            # Project portfolio
    ├── Experience.tsx          # Work history
    ├── Testimonials.tsx        # Client reviews
    ├── Contact.tsx             # Contact form
    ├── Footer.tsx              # Footer
    └── Navigation.tsx          # Navigation bar
```

## 🚀 Deployment Quick Steps

### Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Environment Variables
Add these in Vercel dashboard if using email/database:
- `SENDGRID_API_KEY` (for email)
- `MONGODB_URI` (for database)

## 💡 Tips

1. **Test Locally First**: Always run `npm run build` before deploying
2. **Mobile Testing**: Test on actual mobile devices
3. **Performance**: Use Chrome DevTools Lighthouse
4. **SEO**: Verify meta tags in browser inspector
5. **Accessibility**: Check color contrast and keyboard navigation

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
lsof -ti:3000 | xargs kill
npm run dev
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Type errors
Check `tsconfig.json` and component types

## 📚 Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- React: https://react.dev

## ✅ Pre-Deployment Checklist

- [ ] All personal info updated
- [ ] Real projects added with working links
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] SEO meta tags updated
- [ ] Images optimized
- [ ] Build runs without errors
- [ ] All links work
- [ ] Dark mode looks good
- [ ] Performance tested (Lighthouse score)

---

**Good luck with your portfolio! 🎉**
