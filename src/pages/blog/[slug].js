import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag, Share2, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { adsenseBlogPosts } from "../../data/adsenseBlogPosts";
import { useState } from "react";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [copied, setCopied] = useState(false);

  // Find the blog post by slug
  const post = adsenseBlogPosts.find((p) => p.slug === slug);

  // Show loading state while router is loading
  if (router.isFallback || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            {!post && !router.isFallback ? "Post Not Found" : "Loading..."}
          </h1>
          <Link href="/blog" className="text-[var(--primary)] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }  // Get related posts (same category, excluding current post)
  const relatedPosts = adsenseBlogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Share functions
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const postTitle = post ? encodeURIComponent(post.title) : '';
  const postExcerpt = post ? encodeURIComponent(post.excerpt) : '';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${currentUrl}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Head>
        <title>{post.title} | Muhammad Rehman Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={`https://www.softoria.tech/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://www.softoria.tech/blog/${post.slug}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:tag" content={post.tags.join(", ")} />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "keywords": post.tags.join(", "),
              "articleBody": post.excerpt
            })
          }}
        />
      </Head>

      <main className="section min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{ color: "var(--primary)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5" style={{ color: "var(--primary)" }} />
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

              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm mb-6" style={{ color: "var(--muted-foreground)" }}>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5" style={{ color: "var(--primary)" }} />
                    <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                      Share this article:
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={shareOnFacebook}
                      className="share-btn p-2 rounded-lg transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button
                      onClick={shareOnTwitter}
                      className="share-btn p-2 rounded-lg transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button
                      onClick={shareOnLinkedIn}
                      className="share-btn p-2 rounded-lg transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button
                      onClick={copyLink}
                      className="share-btn p-2 rounded-lg transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: "var(--surface)", color: "var(--foreground)" }}
                      aria-label="Copy link"
                    >
                      {copied ? (
                        <span className="text-sm font-semibold px-2" style={{ color: "var(--primary)" }}>✓ Copied!</span>
                      ) : (
                        <Link2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              style={{ color: "var(--muted-foreground)" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Article Footer */}
            <footer className="pt-8 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                  About the Author
                </h3>
                <div className="p-6 rounded-2xl" style={{ backgroundColor: "var(--surface)" }}>
                  <p className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                    {post.author}
                  </p>
                  <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
                    Full-stack developer specializing in React, Next.js, Node.js, and React Native. Passionate about building scalable web and mobile applications.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/about" className="text-sm font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                      Learn More About Me
                    </Link>
                    <Link href="/contact" className="text-sm font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
                    Related Articles
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="p-4 rounded-lg transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                      >
                        <h4 className="font-bold mb-2 line-clamp-2" style={{ color: "var(--foreground)" }}>
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm mb-2 line-clamp-2" style={{ color: "var(--muted-foreground)" }}>
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--primary)" }}>
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="p-8 rounded-2xl text-center bg-gradient">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--primary-foreground)" }}>
                  Need Help With Your Project?
                </h3>
                <p className="mb-6" style={{ color: "var(--primary-foreground)", opacity: 0.9 }}>
                  If you found this article helpful and need professional web or mobile development services, let's connect!
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
              </div>
            </footer>
          </article>
        </div>
      </main>

      <style jsx>{`
        .prose h2 {
          font-size: 1.75rem;
          font-weight: bold;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: var(--foreground);
          line-height: 1.3;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: var(--foreground);
          line-height: 1.4;
        }
        .prose p {
          margin-bottom: 1.75rem;
          line-height: 1.9;
          font-size: 1.0625rem;
        }
        .prose ul, .prose ol {
          margin: 2rem 0;
          padding-left: 1.75rem;
          line-height: 1.9;
          list-style-type: disc;
        }
        .prose ol {
          list-style-type: decimal;
        }
        .prose li {
          margin-bottom: 0.875rem;
          line-height: 1.9;
          padding-left: 0.5rem;
        }
        .prose li::marker {
          color: var(--primary);
          font-weight: bold;
        }
        .prose strong {
          font-weight: 600;
          color: var(--foreground);
        }
        .prose a {
          color: var(--primary);
          text-decoration: underline;
        }
        .prose a:hover {
          opacity: 0.8;
        }
        .prose .blog-image {
          margin: 2.5rem 0;
        }
        .prose .blog-image img {
          width: 100%;
          border-radius: 12px;
          margin-bottom: 0.75rem;
        }
        .prose .blog-image .image-caption {
          text-align: center;
          font-size: 0.9375rem;
          font-style: italic;
          color: var(--muted-foreground);
          margin-top: 0.5rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .share-btn:hover {
          background-color: var(--primary) !important;
          color: var(--primary-foreground) !important;
        }
      `}</style>
    </>
  );
}

// This function is required for Next.js dynamic routes
export async function getStaticPaths() {
  const paths = adsenseBlogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
