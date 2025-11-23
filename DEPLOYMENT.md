# 🚀 Deployment Guide - Vercel

## Pre-Deployment Checklist

Before deploying to Vercel, ensure you have:

### ✅ Required Steps

1. **Update Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Fill in your EmailJS credentials (if using contact form)
   - Add Google Analytics ID (optional)
   - Add Google AdSense Client ID (optional)

2. **Update Site URL**
   - Check all instances of `https://www.softoria.tech` in:
     - `public/robots.txt`
     - `public/sitemap.xml`
     - `src/pages/blog/[slug].js` (canonical URLs)
   - Replace with your actual domain

3. **Verify All Content**
   - Test all pages locally: `npm run dev`
   - Check blog posts display correctly
   - Verify images load from Unsplash
   - Test contact form (if configured)
   - Test theme toggle (dark/light mode)
   - Check responsive design on mobile

4. **Build Test**
   - Run production build locally: `npm run build`
   - Check for any build errors
   - Fix any warnings or errors
   - Test production build: `npm start`

5. **SEO Verification**
   - All meta tags are present
   - Open Graph images set
   - Sitemap.xml is up to date
   - Robots.txt configured correctly

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Production ready"
   git branch -M main
   git remote add origin https://github.com/yourusername/soft-portolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Add Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add your `.env.local` variables:
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
     - `NEXT_PUBLIC_ADSENSE_CLIENT_ID` (optional)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site is live! 🎉

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `softoria.tech`)
   - Add `www.softoria.tech` as well

2. **Configure DNS**
   - Add A record: `@` → `76.76.19.19`
   - Add CNAME: `www` → `cname.vercel-dns.com`

3. **Enable SSL**
   - Vercel automatically provisions SSL certificates
   - Usually takes 5-10 minutes

## Post-Deployment Steps

### 1. Verify Production Site
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Blog posts are accessible
- [ ] Contact form works (if configured)
- [ ] Theme toggle works
- [ ] Mobile responsive design works
- [ ] No console errors in browser

### 2. Submit to Search Engines

**Google Search Console**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership
4. Submit sitemap: `https://www.softoria.tech/sitemap.xml`

**Bing Webmaster Tools**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 3. Setup Analytics (Optional)

**Google Analytics**
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables
4. Add tracking code to `_app.js` or `_document.js`

### 4. Setup Google AdSense

1. **Apply for AdSense**
   - Go to [google.com/adsense](https://www.google.com/adsense)
   - Apply with your site
   - Wait for approval (can take 1-2 weeks)

2. **Add AdSense Code**
   - Once approved, get your client ID
   - Add to `_document.js` head section:
   ```javascript
   <script
     async
     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossOrigin="anonymous"
   />
   ```

3. **Place Ad Units**
   - Create ad units in AdSense dashboard
   - Add to your pages strategically
   - Common placements: header, sidebar, between content, footer

### 5. Performance Monitoring

**Vercel Analytics** (Free)
- Enabled automatically in Vercel dashboard
- Monitor Core Web Vitals
- Track page load times

**PageSpeed Insights**
- Test: [pagespeed.web.dev](https://pagespeed.web.dev)
- Aim for 90+ score on mobile and desktop

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:
- **Push to `main` branch**: Deploys to production
- **Push to other branches**: Creates preview deployments

```bash
# Make changes
git add .
git commit -m "Update blog post"
git push

# Vercel automatically deploys! 🚀
```

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Test build locally: `npm run build`
3. Fix any TypeScript/ESLint errors
4. Check Node.js version compatibility

### Images Not Loading
1. Verify image URLs in browser
2. Check `next.config.mjs` remote patterns
3. Ensure Cloudinary/Unsplash URLs are correct

### Environment Variables Not Working
1. Ensure variables start with `NEXT_PUBLIC_` for client-side
2. Re-deploy after adding new variables
3. Check variable names match exactly

### Slow Performance
1. Check Vercel Analytics
2. Optimize images (already configured)
3. Review bundle size
4. Enable caching headers (already configured in `vercel.json`)

## Cost Estimate

**Vercel Free Tier Includes:**
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- 100 GB bandwidth/month
- Serverless functions
- Preview deployments

**This project fits comfortably in the free tier** ✅

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**Ready to deploy!** 🚀 Your website is production-ready and optimized for:
- ⚡ Fast performance
- 🔍 SEO
- 📱 Mobile devices
- 🔒 Security
- 💰 Google AdSense approval
