# 🚀 Softoria - Professional Portfolio & Blog

A modern, SEO-optimized portfolio and blog website built with Next.js, featuring dark/light theme toggle, dynamic blog system, and Google AdSense-ready content.

![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)

## 🌟 Features

### 💼 Portfolio
- **Responsive Project Showcase** - Beautiful grid layout displaying projects with images and descriptions
- **Next.js Image Optimization** - Automatic image optimization with Cloudinary integration
- **Project Details** - Comprehensive project information with technologies used
- **Live Demo Links** - Direct links to live projects and GitHub repositories

### 📝 Blog System
- **Dynamic Routing** - Individual pages for each blog post using Next.js dynamic routes
- **AdSense-Compliant Content** - 3 comprehensive blog posts (1,500-2,000 words each) following Google AdSense guidelines
- **Card-Based Layout** - Clean, modern blog listing page with excerpts and "Read More" links
- **Social Media Sharing** - Built-in share buttons for Facebook, Twitter, LinkedIn, and copy link
- **Rich Content** - Posts include personal stories, real client results, step-by-step guides, and FAQ sections
- **Free Images** - Unsplash integration for high-quality, royalty-free images
- **SEO Optimized** - Complete meta tags, Open Graph, and Schema.org markup
- **Related Posts** - Automatic related article suggestions based on category

### 🎨 Design & UX
- **Dark/Light Theme Toggle** - Smooth theme switching with persistent user preference
- **Fully Responsive** - Mobile-first design that works on all devices
- **Custom Animations** - Smooth transitions and hover effects
- **Typography** - Optimized line heights and spacing for maximum readability
- **Styled Bullet Points** - Color-coded list markers for better visual hierarchy

### 📧 Contact Features
- **WhatsApp Integration** - Direct WhatsApp contact button
- **Contact Form** - Professional contact form for client inquiries
- **Social Links** - Links to all social media profiles

## 📁 Project Structure

```
soft-portolio/
├── public/
│   ├── robots.txt              # SEO crawler instructions
│   └── sitemap.xml              # Sitemap for search engines
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx      # Contact form component
│   │   ├── Footer.js            # Site footer
│   │   ├── Header.js            # Navigation header
│   │   └── WhatsAppButton.js    # Floating WhatsApp button
│   ├── data/
│   │   └── adsenseBlogPosts.js  # Blog content data
│   ├── hooks/
│   │   └── useTheme.js          # Theme toggle hook
│   ├── pages/
│   │   ├── _app.js              # App wrapper
│   │   ├── _document.js         # HTML document structure
│   │   ├── index.js             # Homepage
│   │   ├── about.js             # About page
│   │   ├── blog.js              # Blog listing page
│   │   ├── contact.js           # Contact page
│   │   ├── portfolio.js         # Portfolio showcase
│   │   ├── services.js          # Services offered
│   │   ├── privacy-policy.js    # Privacy policy
│   │   ├── terms.js             # Terms of service
│   │   └── blog/
│   │       └── [slug].js        # Dynamic blog post pages
│   └── styles/
│       └── globals.css          # Global styles & theme variables
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 13+](https://nextjs.org/) (Pages Router)
- **UI Library**: [React 18+](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Hosting**: [Cloudinary](https://cloudinary.com/)
- **Free Images**: [Unsplash](https://unsplash.com/)
- **Deployment**: [Vercel](https://vercel.com/) (Recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/soft-portolio.git
cd soft-portolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Blog Content

The blog system includes 3 comprehensive, AdSense-approved articles:

1. **"How I Build Fast Websites with Next.js"** (1,500+ words)
   - Personal experience switching from React to Next.js
   - Step-by-step setup guide with real client results
   - Performance optimization techniques
   - 7-day action plan for beginners

2. **"Why Your Business Needs a Mobile App in 2024"** (1,800+ words)
   - Real case studies with actual numbers (downloads, conversion rates, ROI)
   - Honest cost breakdowns ($8K-$50K+)
   - When you DON'T need an app section
   - Reality check questions for business owners

3. **"Database Design Mistakes That Cost Me $8,000"** (2,000+ words)
   - Personal $8K mistake story
   - Before/after performance comparisons
   - Common mistakes with solutions
   - Practical checklists and tools

### Blog Features
- ✅ Original content with personal experiences
- ✅ 1,200+ words per post (actually 1,500-2,000)
- ✅ Proper H2/H3 heading structure
- ✅ Short paragraphs for readability
- ✅ Bullet points and lists throughout
- ✅ Real numbers and specific examples
- ✅ Step-by-step guides and checklists
- ✅ FAQ sections
- ✅ Conversational, human tone (Grade 6-8 reading level)
- ✅ High-quality free images from Unsplash
- ✅ SEO-optimized with meta tags and Schema markup

## 🎨 Customization

### Theme Colors

Edit theme colors in `src/styles/globals.css`:

```css
[data-theme="light"] {
  --primary: 109 40 217;        /* Purple */
  --background: 255 255 255;    /* White */
  --foreground: 15 23 42;       /* Dark text */
  /* ... more variables */
}

[data-theme="dark"] {
  --primary: 147 51 234;        /* Light purple */
  --background: 15 23 42;       /* Dark blue */
  --foreground: 248 250 252;    /* Light text */
  /* ... more variables */
}
```

### Adding Blog Posts

Add new posts to `src/data/adsenseBlogPosts.js`:

```javascript
{
  id: 4,
  title: "Your Blog Title",
  slug: "your-blog-slug",
  excerpt: "Short description...",
  content: `<h2>Your Content</h2><p>...</p>`,
  author: "Muhammad Rehman",
  date: "2024-12-01",
  readTime: "10 min read",
  category: "Web Development",
  tags: ["nextjs", "react"],
  featured: false
}
```

### Updating Projects

Edit projects in `src/pages/portfolio.js`:

```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "cloudinary-url",
    tags: ["React", "Node.js"],
    liveLink: "https://...",
    githubLink: "https://..."
  }
]
```

## 📱 Pages Overview

- **Home** (`/`) - Hero section, featured projects, blog posts
- **About** (`/about`) - Personal information and background
- **Services** (`/services`) - Services offered with pricing
- **Portfolio** (`/portfolio`) - Complete project showcase
- **Blog** (`/blog`) - Blog listing with card previews
- **Blog Post** (`/blog/[slug]`) - Individual blog articles
- **Contact** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy-policy`) - Privacy policy page
- **Terms** (`/terms`) - Terms of service page

## 🔍 SEO Features

- ✅ Server-side rendering (SSR) for better SEO
- ✅ Static site generation (SSG) for blog posts
- ✅ Meta tags on all pages
- ✅ Open Graph tags for social sharing
- ✅ Schema.org JSON-LD markup
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt for crawler instructions
- ✅ Semantic HTML structure
- ✅ Alt text on all images
- ✅ Descriptive URLs

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com/)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Muhammad Rehman**
- Portfolio: [softoria.tech](https://www.softoria.tech)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/soft-portolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js
