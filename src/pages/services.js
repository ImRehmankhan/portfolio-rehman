import Head from "next/head";
import Link from "next/link";
import { Code, Smartphone, Monitor, Server, Database, Palette, ShoppingCart, Search, Zap, Shield, Users, Clock, CheckCircle, ArrowRight, Mail, Download } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      Icon: Code,
      description: "Comprehensive web development services from frontend to backend. I build complete, scalable web applications using modern technologies like React.js, Next.js, Node.js, and Express.js. From database design to user interface, I handle every aspect of your web project.",
      features: [
        "Custom web application development",
        "React.js & Next.js frontend development",
        "Node.js & Express.js backend APIs",
        "Database design & optimization (MongoDB, MySQL, PostgreSQL)",
        "RESTful API development & integration",
        "Authentication & authorization systems",
        "Third-party API integrations",
        "Performance optimization & caching",
        "Responsive and mobile-first design",
        "Code review and refactoring"
      ],
      benefits: [
        "End-to-end solution from one developer",
        "Consistent architecture and code quality",
        "Faster development and deployment",
        "Better communication and project coordination"
      ],
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "REST APIs"],
      pricing: "Custom quote based on project scope"
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      Icon: Smartphone,
      description: "Professional cross-platform mobile app development using React Native. Build high-performance mobile applications for both iOS and Android with a single codebase. Native-like user experience with seamless performance and modern UI designs.",
      portfolioLink: "/portfolio/kairot-mobile-trading-platform",
      portfolioText: "See my Kairot mobile trading app project",
      features: [
        "Cross-platform app development (iOS & Android)",
        "Native module integration",
        "Push notification implementation",
        "Offline functionality & data persistence",
        "Social media authentication",
        "In-app purchases & payment integration",
        "Maps & geolocation services",
        "Camera & media handling",
        "App store submission & deployment",
        "Performance monitoring & analytics"
      ],
      benefits: [
        "60% cost reduction vs native development",
        "Faster time to market",
        "Single codebase for both platforms",
        "Easy maintenance and updates"
      ],
      technologies: ["React Native", "Expo", "Firebase", "Native Modules", "Redux", "AsyncStorage"],
      pricing: "Starting from competitive rates"
    },
    {
      id: "frontend",
      title: "Frontend Development",
      Icon: Monitor,
      description: "Modern, responsive, and interactive user interfaces that engage users and drive conversions. Specializing in React.js and Next.js with focus on performance, accessibility, and SEO. I use Tailwind CSS to build beautiful UIs 5x faster - check out my productivity tips. Create pixel-perfect designs that work flawlessly across all devices.",
      blogLink: "/blog/tailwind-css-productivity-tips-tricks-2026",
      blogText: "Learn my Tailwind CSS productivity secrets",
      features: [
        "React.js & Next.js applications",
        "Responsive web design",
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "TypeScript implementation",
        "State management (Redux, Context API)",
        "Modern CSS (Tailwind, Bootstrap, CSS Modules)",
        "Animation & interactive elements",
        "SEO optimization",
        "Web accessibility (WCAG compliance)"
      ],
      benefits: [
        "Lightning-fast page loads",
        "Improved user engagement",
        "Better search engine rankings",
        "Increased conversion rates"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"],
      pricing: "Flexible packages available"
    },
    {
      id: "backend",
      title: "Backend API Development",
      Icon: Server,
      description: "Robust and scalable backend systems that power your applications. Expert in Node.js and Express.js for building RESTful APIs, microservices, and server-side applications. Secure, efficient, and well-documented APIs with industry best practices.",
      features: [
        "RESTful API development",
        "Microservices architecture",
        "Database modeling & optimization",
        "User authentication & authorization (JWT, OAuth)",
        "File upload & cloud storage integration",
        "Email services integration",
        "Payment gateway integration (Stripe, PayPal)",
        "Real-time features (WebSockets, Socket.io)",
        "API documentation (Swagger/OpenAPI)",
        "Error handling & logging"
      ],
      benefits: [
        "Scalable architecture for growth",
        "Secure data handling",
        "Easy third-party integrations",
        "Comprehensive API documentation"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "JWT", "Socket.io", "Redis"],
      pricing: "Based on complexity and requirements"
    },
    {
      id: "database",
      title: "Database Design & Management",
      Icon: Database,
      description: "Professional database architecture and management services. Design efficient, normalized databases that scale with your business. Expertise in both SQL and NoSQL databases with focus on performance, security, and data integrity.",
      features: [
        "Database schema design",
        "Data modeling & normalization",
        "Query optimization",
        "Database migration services",
        "Backup & recovery solutions",
        "Performance tuning",
        "Index optimization",
        "Stored procedures & triggers",
        "Data security implementation",
        "Database monitoring & maintenance"
      ],
      benefits: [
        "Improved application performance",
        "Data consistency and integrity",
        "Reduced server costs",
        "Easy scalability"
      ],
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Sequelize", "Prisma"],
      pricing: "Consultation available"
    },
    {
      id: "uiux",
      title: "UI/UX Implementation",
      Icon: Palette,
      description: "Transform designs into beautiful, functional user interfaces. Implement Figma, Adobe XD, and Sketch designs with pixel-perfect accuracy. Focus on user experience, accessibility, and modern design principles for engaging digital products.",
      features: [
        "Figma to React conversion",
        "Adobe XD implementation",
        "Responsive design implementation",
        "Component library development",
        "Design system implementation",
        "Accessibility compliance",
        "Cross-browser compatibility",
        "Animation & micro-interactions",
        "Dark mode implementation",
        "Style guide creation"
      ],
      benefits: [
        "Consistent brand experience",
        "Improved user satisfaction",
        "Faster development cycles",
        "Reduced design-dev handoff time"
      ],
      technologies: ["React.js", "Tailwind CSS", "Styled Components", "Framer Motion", "CSS3", "SASS/SCSS"],
      pricing: "Per design/project quote"
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      Icon: ShoppingCart,
      description: "Complete e-commerce website development with secure payment processing, inventory management, and admin dashboards. Build custom online stores or integrate with existing platforms. Everything you need to sell online successfully.",
      features: [
        "Custom e-commerce platforms",
        "Product catalog management",
        "Shopping cart functionality",
        "Payment gateway integration",
        "Order management system",
        "Customer account management",
        "Inventory tracking",
        "Email notifications",
        "Admin dashboard",
        "Sales analytics & reporting"
      ],
      benefits: [
        "Increased online sales",
        "Streamlined operations",
        "Better customer experience",
        "Detailed business insights"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "PayPal", "React.js"],
      pricing: "Custom e-commerce packages"
    },
    {
      id: "optimization",
      title: "Performance Optimization",
      Icon: Zap,
      description: "Speed up your website or application with expert performance optimization. Analyze and improve load times, optimize assets, implement caching strategies, and enhance overall user experience. Make your application lightning-fast.",
      features: [
        "Performance auditing",
        "Code splitting & lazy loading",
        "Image optimization",
        "Caching strategies",
        "Bundle size reduction",
        "Database query optimization",
        "CDN implementation",
        "Server-side rendering (SSR)",
        "Static site generation (SSG)",
        "Lighthouse score improvement"
      ],
      benefits: [
        "Faster page load times",
        "Better SEO rankings",
        "Improved user engagement",
        "Reduced bounce rates"
      ],
      technologies: ["Next.js", "Webpack", "React", "Node.js", "Redis", "CDN", "Web Vitals"],
      pricing: "Performance audit + optimization"
    }
  ];

  const whyChooseMe = [
    {
      Icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and quality checks to ensure bug-free, production-ready code."
    },
    {
      Icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines without compromising on quality. Clear milestones and regular updates."
    },
    {
      Icon: Shield,
      title: "Security First",
      description: "Implement industry-standard security practices to protect your data and user information."
    },
    {
      Icon: Users,
      title: "Client Collaboration",
      description: "Open communication throughout the project. Your feedback shapes the final product."
    }
  ];

  return (
    <>
      <Head>
        <title>Web & Mobile Development Services — Softoria | Muhammad Rehman</title>
        <meta 
          name="description" 
          content="Professional full-stack web development, React Native mobile app development, and custom software solutions. Expert in React.js, Next.js, Node.js. Get a free quote today!" 
        />
        <meta name="keywords" content="web development services, mobile app development, React development, Next.js services, Node.js backend, full-stack developer, custom software development, e-commerce development" />
        <link rel="canonical" href="https://www.softoria.tech/services" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Web & Mobile Development Services — Softoria" />
        <meta property="og:description" content="Full-stack web development, mobile apps, and custom software solutions. React, Next.js, Node.js expert." />
        <meta property="og:url" content="https://www.softoria.tech/services" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Development Services",
              "provider": {
                "@type": "Person",
                "name": "Muhammad Rehman",
                "url": "https://www.softoria.tech"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Development Services",
                "itemListElement": services.map(service => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.description
                  }
                }))
              }
            })
          }}
        />
      </Head>

      <main className="section min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)]">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Professional Development Services
            </h1>
            <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: "var(--muted-foreground)" }}>
              From concept to deployment, I provide comprehensive web and mobile development services to bring your digital vision to life. Specialized in modern technologies with a focus on quality, performance, and user experience. Check out my <Link href="/portfolio" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>portfolio</Link> to see examples of my work, or read <Link href="/about" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>about my experience</Link>.
            </p>
          </header>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--foreground)" }}>
              Service Offerings
            </h2>
            
            {services.map((service, index) => (
              <article 
                key={service.id}
                id={service.id}
                className="mb-12 p-8 rounded-2xl scroll-mt-20"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="lg:col-span-1">
                    <div 
                      className="w-16 h-16 mb-4 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--primary)" }}
                    >
                      <service.Icon className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                      {service.title}
                    </h3>
                    <p className="mb-4" style={{ color: "var(--muted-foreground)" }}>
                      {service.description}
                    </p>
                    {service.blogLink && (
                      <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: "var(--background)", border: "1px solid var(--primary)" }}>
                        <Link 
                          href={service.blogLink}
                          className="flex items-center gap-2 text-sm font-semibold hover:underline"
                          style={{ color: "var(--primary)" }}
                        >
                          <Monitor className="w-4 h-4" />
                          <span>{service.blogText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                    {service.portfolioLink && (
                      <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: "var(--background)", border: "1px solid var(--primary)" }}>
                        <Link 
                          href={service.portfolioLink}
                          className="flex items-center gap-2 text-sm font-semibold hover:underline"
                          style={{ color: "var(--primary)" }}
                        >
                          <Code className="w-4 h-4" />
                          <span>{service.portfolioText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                    <div className="mb-4">
                      <p className="font-semibold mb-2" style={{ color: "var(--primary)" }}>
                        Pricing
                      </p>
                      <p style={{ color: "var(--muted-foreground)" }}>
                        {service.pricing}
                      </p>
                    </div>
                  </div>

                  {/* Middle Column - Features */}
                  <div className="lg:col-span-1">
                    <h4 className="text-lg font-bold mb-4" style={{ color: "var(--foreground)" }}>
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                          <span style={{ color: "var(--muted-foreground)" }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Benefits & Tech */}
                  <div className="lg:col-span-1">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold mb-4" style={{ color: "var(--foreground)" }}>
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                            <span style={{ color: "var(--muted-foreground)" }}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-3" style={{ color: "var(--foreground)" }}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 rounded-full text-sm font-medium"
                            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Why Choose Me */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Why Choose My Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseMe.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div 
                    className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    <item.Icon className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16 p-8 rounded-2xl" style={{ backgroundColor: "var(--surface)" }}>
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              My Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", description: "Understanding your requirements, goals, and target audience" },
                { step: "02", title: "Planning", description: "Creating project roadmap, timeline, and technical architecture" },
                { step: "03", title: "Development", description: "Building your solution with regular updates and checkpoints" },
                { step: "04", title: "Delivery", description: "Testing, deployment, and post-launch support" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-5xl font-bold mb-4  text-gradient" >
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                    {phase.title}
                  </h3>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center p-12 rounded-2xl bg-gradient">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary-foreground)" }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--primary-foreground)", opacity: 0.9 }}>
              Let's discuss your requirements and create a custom solution that fits your needs and budget. Free consultation available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Get Free Quote</span>
              </Link>
              <a 
                href="/Resume_Muhammad_Rehman.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary inline-flex items-center gap-2"
                aria-label="Download CV"
              >
                <Download className="w-5 h-5" />
                <span>View Portfolio</span>
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "What is your typical project timeline?",
                  answer: "Project timelines vary based on scope and complexity. A simple website takes 2-4 weeks, while complex applications may take 2-3 months. I provide detailed timelines during project planning."
                },
                {
                  question: "Do you provide ongoing support after launch?",
                  answer: "Yes! I offer post-launch support packages including bug fixes, updates, and maintenance. We can discuss a support plan that fits your needs."
                },
                {
                  question: "Can you work with my existing design?",
                  answer: "Absolutely! I can implement designs from Figma, Adobe XD, Sketch, or any other design tool with pixel-perfect accuracy."
                },
                {
                  question: "What is your pricing model?",
                  answer: "Pricing depends on project scope, complexity, and timeline. I offer both fixed-price projects and hourly rates. Contact me for a custom quote."
                },
                {
                  question: "Do you sign NDAs?",
                  answer: "Yes, I'm happy to sign Non-Disclosure Agreements to protect your intellectual property and confidential information."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "I specialize in React.js, Next.js, Node.js, React Native, MongoDB, PostgreSQL, and modern JavaScript frameworks. Check my tech stack above for more details."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--primary)" }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
