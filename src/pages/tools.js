import Head from "next/head";
import Link from "next/link";
import { Wrench, Calculator, FileText, Image as ImageIcon, Code, ArrowRight, Search, Zap, ChevronRight, Shield, Globe } from "lucide-react";

export default function Tools() {
  // Categories for future tools
  const toolCategories = [
    {
      id: "reference-tools",
      title: "Reference Tools",
      description: "Helpful reference and lookup utilities",
      Icon: Globe,
      tools: [
        {
          name: "Country Flag Finder",
          description: "Search and browse all country flags with names and ISO codes",
          slug: "country-flag-finder",
          comingSoon: false
        },
      ]
    },
    {
      id: "text-tools",
      title: "Text Tools",
      description: "Essential text manipulation and conversion utilities",
      Icon: FileText,
      tools: [
        {
          name: "Word Counter",
          description: "Count words, characters, and paragraphs in your text",
          slug: "word-counter",
          comingSoon: true
        },
        {
          name: "Text Case Converter",
          description: "Convert text between different cases (uppercase, lowercase, title case)",
          slug: "case-converter",
          comingSoon: true
        },
      ]
    },
    {
      id: "image-tools",
      title: "Image Tools",
      description: "Image processing and optimization utilities",
      Icon: ImageIcon,
      tools: [
        {
          name: "Image Compressor",
          description: "Compress images without losing quality",
          slug: "image-compressor",
          comingSoon: true
        },
        {
          name: "Image Resizer",
          description: "Resize images to specific dimensions",
          slug: "image-resizer",
          comingSoon: true
        },
        {
          name: "Image Format Converter",
          description: "Convert between JPG, PNG, WebP, and other formats",
          slug: "image-converter",
          comingSoon: true
        }
      ]
    },
    {
      id: "developer-tools",
      title: "Developer Tools",
      description: "Useful utilities for developers and programmers",
      Icon: Code,
      tools: [
        {
          name: "JSON Formatter",
          description: "Format and validate JSON data",
          slug: "json-formatter",
          comingSoon: true
        },
        {
          name: "Base64 Encoder/Decoder",
          description: "Encode and decode Base64 strings",
          slug: "base64",
          comingSoon: true
        },
        {
          name: "Color Picker",
          description: "Pick colors and convert between HEX, RGB, and HSL",
          slug: "color-picker",
          comingSoon: true
        },
        {
          name: "QR Code Generator",
          description: "Generate QR codes for URLs and text",
          slug: "qr-generator",
          comingSoon: true
        }
      ]
    },
    {
      id: "calculator-tools",
      title: "Calculators",
      description: "Various calculation and conversion tools",
      Icon: Calculator,
      tools: [
        {
          name: "Unit Converter",
          description: "Convert between different units of measurement",
          slug: "unit-converter",
          comingSoon: true
        },
        {
          name: "Percentage Calculator",
          description: "Calculate percentages and ratios",
          slug: "percentage-calculator",
          comingSoon: true
        },
        {
          name: "Age Calculator",
          description: "Calculate age from date of birth",
          slug: "age-calculator",
          comingSoon: true
        }
      ]
    }
  ];

  const features = [
    {
      Icon: Zap,
      title: "Fast & Efficient",
      description: "All tools run directly in your browser for instant results"
    },
    {
      Icon: Shield,
      title: "Privacy First",
      description: "Your data never leaves your device - completely secure"
    },
    {
      Icon: Wrench,
      title: "Free Forever",
      description: "All tools are completely free to use with no limitations"
    }
  ];

  return (
    <>
      <Head>
        <title>Free Online Tools - Web Development Utilities | Softoria</title>
        <meta 
          name="description" 
          content="Free online tools for developers, designers, and content creators. Text tools, image utilities, calculators, and more. Fast, secure, and easy to use." 
        />
        <meta 
          name="keywords" 
          content="online tools, free tools, web tools, developer tools, text tools, image tools, calculator, converter, utilities, JSON formatter, color picker, image compressor" 
        />
        <meta property="og:title" content="Free Online Tools - Web Development Utilities" />
        <meta property="og:description" content="Collection of free online tools for developers and designers. Text, image, and developer utilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softoria.vercel.app/tools" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Online Tools - Web Development Utilities" />
        <meta name="twitter:description" content="Collection of free online tools for developers and designers." />
        <link rel="canonical" href="https://softoria.vercel.app/tools" />
        
        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Online Tools",
              "description": "Collection of free online tools for developers, designers, and content creators",
              "url": "https://softoria.vercel.app/tools",
              "provider": {
                "@type": "Organization",
                "name": "Softoria"
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border" 
              style={{ 
                backgroundColor: 'var(--surface)', 
                borderColor: 'var(--border)',
                color: 'var(--primary)'
              }}>
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-medium">Free Online Tools</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--primary)] to-purple-600 bg-clip-text text-transparent">
              Powerful Tools for Everyone
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
              Collection of free, fast, and privacy-focused online tools for developers, designers, and content creators. 
              All tools run in your browser - your data never leaves your device.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)'
                }}
              >
                Request a Tool
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)'
                }}
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)'
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                  <feature.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--muted-foreground)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tool Categories */}
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Available Tools
              </h2>
              <p className="text-lg" style={{ color: 'var(--muted-foreground)' }}>
                More tools coming soon! Check back regularly for updates.
              </p>
            </div>

            {toolCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                    <category.Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {category.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group p-6 rounded-xl border transition-all duration-300 hover:shadow-lg relative overflow-hidden"
                      style={{
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--border)'
                      }}
                    >
                      {tool.comingSoon && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full"
                            style={{
                              backgroundColor: 'var(--primary)',
                              color: 'var(--primary-foreground)'
                            }}>
                            Coming Soon
                          </span>
                        </div>
                      )}

                      <h4 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors" 
                        style={{ color: 'var(--foreground)' }}>
                        {tool.name}
                      </h4>
                      <p className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
                        {tool.description}
                      </p>

                      {!tool.comingSoon ? (
                        <Link 
                          href={`/tools/${tool.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                          style={{ color: 'var(--primary)' }}
                        >
                          Use Tool
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center gap-2 text-sm font-medium opacity-50"
                          style={{ color: 'var(--muted-foreground)' }}>
                          Coming Soon
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SEO Internal Links Section */}
          <div className="mt-16 p-8 rounded-xl border" 
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border)'
            }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Explore More
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services" className="group">
                <div className="p-4 rounded-lg border transition-all hover:scale-105"
                  style={{ borderColor: 'var(--border)' }}>
                  <h3 className="font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors"
                    style={{ color: 'var(--foreground)' }}>
                    Development Services
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    Need custom tools or web development? Check out our services.
                  </p>
                </div>
              </Link>

              <Link href="/portfolio" className="group">
                <div className="p-4 rounded-lg border transition-all hover:scale-105"
                  style={{ borderColor: 'var(--border)' }}>
                  <h3 className="font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors"
                    style={{ color: 'var(--foreground)' }}>
                    Our Portfolio
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    View our past projects and client success stories.
                  </p>
                </div>
              </Link>

              <Link href="/blog" className="group">
                <div className="p-4 rounded-lg border transition-all hover:scale-105"
                  style={{ borderColor: 'var(--border)' }}>
                  <h3 className="font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors"
                    style={{ color: 'var(--foreground)' }}>
                    Blog & Tutorials
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    Learn web development tips, tricks, and best practices.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 rounded-xl"
            style={{
              background: ' var(--primary)',
            }}>
            <p className="text-3xl md:text-4xl font-bold mb-4  text-white/90" >
              Need a Custom Tool?
            </p>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              I can build custom tools and utilities tailored to your specific needs. 
              Get in touch to discuss your requirements.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-white text-gray-900"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
