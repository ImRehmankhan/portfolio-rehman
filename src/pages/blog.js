import Head from "next/head";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Tag, Search, TrendingUp } from "lucide-react";

// Import the AdSense-compliant blog posts
import { adsenseBlogPosts } from "../data/adsenseBlogPosts";

export default function Blog() {
  const blogPosts = adsenseBlogPosts;

  const categories = ["All", "Web Development", "Mobile Development", "Backend Development"];

  return (
    <>
      <Head>
        <title>Blog — Web Development Insights | Muhammad Rehman</title>
        <meta 
          name="description" 
          content="Read expert articles on web development, React, Next.js, mobile app development, and modern programming. Learn best practices, tutorials, and insights from experienced full-stack developer Muhammad Rehman." 
        />
        <meta name="keywords" content="web development blog, React tutorials, Next.js guides, mobile development, programming articles, JavaScript tips, full-stack development" />
        <link rel="canonical" href="https://www.softoria.tech/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="Web Development Blog — Muhammad Rehman" />
        <meta property="og:description" content="Expert articles on React, Next.js, mobile development, and modern web technologies." />
        <meta property="og:url" content="https://www.softoria.tech/blog" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Softoria Development Blog",
              "description": "Web development articles and tutorials",
              "author": {
                "@type": "Person",
                "name": "Muhammad Rehman"
              },
              "blogPost": blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "author": {
                  "@type": "Person",
                  "name": post.author
                },
                "datePublished": post.date,
                "keywords": post.tags.join(", ")
              }))
            })
          }}
        />
      </Head>

      <main className="section min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)]">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Development Insights & Tutorials
            </h1>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Expert articles on web development, React, Next.js, mobile apps, and modern programming. Learn from real-world experience and best practices. Interested in working together? View my <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>services</Link>, check out my <Link href="/portfolio" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>portfolio</Link>, or read <Link href="/about" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>about my experience</Link>.
            </p>
          </header>

          {/* All Blog Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--foreground)" }}>
              All Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "var(--surface)", border: post.featured ? "2px solid var(--primary)" : "1px solid var(--border)" }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4" style={{ color: "var(--primary)" }} />
                      <span className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                        {post.category}
                      </span>
                      {post.featured && (
                        <span 
                          className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 line-clamp-2" style={{ color: "var(--foreground)" }}>
                      {post.title}
                    </h3>

                    <p className="mb-4 line-clamp-3" style={{ color: "var(--muted-foreground)" }}>
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: "var(--muted-foreground)" }}>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" style={{ color: "var(--muted-foreground)" }} />
                        <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                          {post.author}
                        </span>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                        style={{ color: "var(--primary)" }}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter/CTA Section */}
          <section className="p-12 rounded-2xl text-center bg-gradient">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary-foreground)" }}>
              Want to Work Together?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--primary-foreground)", opacity: 0.9 }}>
              If you enjoyed these articles and need help with your web or mobile development project, let's connect!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
                <span>View Services</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
