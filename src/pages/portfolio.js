import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Code, Smartphone, Monitor, ShoppingCart, GraduationCap, Search, Database, ArrowRight, Mail, CheckCircle } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Tulip Shampoo | Brand Refresh & E-commerce UI",
      category: "E-commerce Website",
      Icon: ShoppingCart,
      description: "A modern e-commerce interface designed for Tulip Shampoo, featuring a complete brand refresh, optimized product presentation, mobile responsiveness, and a clean shopping experience.",
      longDescription: "A modern e-commerce interface designed for Tulip Shampoo with an emphasis on product presentation, simplified checkout flows, and mobile-first performance optimizations.",
      features: ["Brand refresh", "Responsive product grid", "Optimized product images", "Clean checkout flow"],
      technologies: ["Next.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      challenges: "Balancing rich visuals with fast load times on mobile devices.",
      results: "Improved conversion-focused UI with faster page loads and clearer product discovery.",
      img: "https://res.cloudinary.com/dzc11dpii/image/upload/v1763822272/Tulip_Shamoo_Ecom_Website_mock_nazhjz.png",
      demoUrl: "#",
      codeUrl: "#",
      year: "2024"
    },
    {
      id: 2,
      title: "Footwear Landing Page",
      category: "E-commerce Website",
      Icon: ShoppingCart,
      description: "A stylish e-commerce landing page crafted for a footwear brand, offering smooth animations, clean layout structure, and full mobile responsiveness for a seamless browsing experience.",
      longDescription: "A landing experience focused on high-impact visuals, fast interactions, and clear product CTAs to drive conversions across devices.",
      features: ["Hero product showcase", "Animated transitions", "Mobile-first layout", "Fast image loading"],
      technologies: ["React.js", "HTML5", "CSS3", "Responsive Design"],
      challenges: "Keeping animations smooth while ensuring assets remained small for mobile users.",
      results: "A fast, engaging landing page that increased user engagement and time-on-page.",
      img: "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/footwear_landing_page_imswyx.png",
      demoUrl: "#",
      codeUrl: "#",
      year: "2023"
    },
    {
      id: 3,
      title: "Research Agency",
      category: "Business Website",
      Icon: Search,
      description: "A professional business website created for a research agency, showcasing services, insights, and expertise with a polished layout, intuitive navigation, and responsive behavior.",
      longDescription: "A multi-page site with service showcases, case studies, and a blog to publish insights. Prioritized content hierarchy and accessibility.",
      features: ["Case studies", "Service pages", "Accessible layout", "Blog integration"],
      technologies: ["React.js", "HTML5", "CSS3", "Bootstrap"],
      challenges: "Structuring complex content into clear, scannable sections for site visitors.",
      results: "Improved user clarity and lead inquiries through simplified navigation.",
      img: "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/Research_Agency_Business_Website_wtgvja.png",
      demoUrl: "#",
      codeUrl: "#",
      year: "2023"
    },
    {
      id: 4,
      title: "BIIT Institute",
      category: "Educational Website",
      Icon: GraduationCap,
      description: "An educational website built for BIIT Institute featuring course details, admission information, and an easy-to-navigate responsive design suitable for students and parents.",
      longDescription: "Designed to present course offerings, admission steps, and faculty information clearly while maintaining strong mobile usability.",
      features: ["Course catalog", "Admission forms", "Faculty profiles", "Responsive design"],
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
      challenges: "Making complex academic information easy to find for prospective students.",
      results: "A clear, accessible site that improved applicant engagement.",
      img: "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283587/BIIT_Institute_Educational_Website_kief2w.png",
      demoUrl: "#",
      codeUrl: "#",
      year: "2023"
    },
    {
      id: 5,
      title: "TechBlog",
      category: "Blog Website",
      Icon: Monitor,
      description: "A modern blog platform focused on React.js and React Native content, offering featured posts, category browsing, and a clean reading experience with full responsiveness.",
      longDescription: "A content-forward blog with featured posts, category filtering, and an emphasis on readability across devices.",
      features: ["Featured posts", "Category browsing", "Responsive reading experience", "SEO-friendly structure"],
      technologies: ["Next.js", "HTML5", "CSS3", "JavaScript"],
      challenges: "Balancing rich media with fast article load performance.",
      results: "A clean, fast blog that makes content the primary focus.",
      img: "https://res.cloudinary.com/dzc11dpii/image/upload/v1763821944/Blog_Tech_mock_cvb9n3.png",
      demoUrl: "#",
      codeUrl: "#",
      year: "2024"
    }
  ];

  const categories = ["All", "Web Development", "Full-Stack Development", "React Native"];
  
  return (
    <>
      <Head>
        <title>Portfolio — Web & Mobile Projects | Muhammad Rehman</title>
        <meta 
          name="description" 
          content="Browse my portfolio of web and mobile development projects. React.js, Next.js, Node.js, and React Native applications. See real examples of my work including e-commerce sites, business websites, and mobile apps." 
        />
        <meta name="keywords" content="portfolio, web development projects, React projects, Next.js projects, mobile app development, full-stack projects, developer portfolio" />
        <link rel="canonical" href="https://www.softoria.tech/portfolio" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Development Portfolio — Muhammad Rehman" />
        <meta property="og:description" content="View my portfolio of web and mobile applications built with React, Next.js, Node.js, and React Native." />
        <meta property="og:url" content="https://www.softoria.tech/portfolio" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Muhammad Rehman Portfolio",
              "description": "Portfolio of web and mobile development projects",
              "author": {
                "@type": "Person",
                "name": "Muhammad Rehman"
              },
              "hasPart": projects.map(project => ({
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "dateCreated": project.year
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
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              My Recent Work
            </h1>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Explore a selection of projects I've built for clients and personal development. Each project showcases my expertise in modern web and mobile technologies, problem-solving skills, and commitment to quality. Want to learn more? Check out my <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>services</Link>, read <Link href="/about" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>about me</Link>, or explore my <Link href="/blog" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>blog articles</Link>.
            </p>
          </header>

          {/* Projects Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <article 
                  key={project.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  {/* Project Image/Icon */}
                  <div className="relative h-56 md:h-80 w-full overflow-hidden" style={{ backgroundColor: "var(--input)" }}>
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                    >
                      {project.year}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <project.Icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                      <span className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                      {project.title}
                    </h3>

                    <p className="mb-4 line-clamp-3" style={{ color: "var(--muted-foreground)" }}>
                      {project.longDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--primary)" }} />
                            <span style={{ color: "var(--muted-foreground)" }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-bold mb-2" style={{ color: "var(--foreground)" }}>
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Results */}
                    <div className="mb-4 p-4 rounded-lg" style={{ backgroundColor: "var(--background)" }}>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--primary)" }}>
                        Challenge:
                      </h4>
                      <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
                        {project.challenges}
                      </p>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--primary)" }}>
                        Results:
                      </h4>
                      <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                        {project.results}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={project.demoUrl}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                        aria-label={`View ${project.title} demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Demo</span>
                      </a>
                      <a 
                        href={project.codeUrl}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "var(--background)", color: "var(--foreground)", border: "1px solid var(--border)" }}
                        aria-label={`View ${project.title} code`}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          
          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "15+", label: "Projects Completed" },
                { number: "10+", label: "Happy Clients" },
                { number: "6", label: "Technologies" },
                { number: "2+", label: "Years Experience" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl text-center"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                    {stat.number}
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Overview */}
          <section className="mb-16 p-8 rounded-2xl" style={{ backgroundColor: "var(--surface)" }}>
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Technologies I Work With
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "React.js", "Next.js", "React Native", "Node.js", "Express.js",
                "MongoDB", "PostgreSQL", "MySQL", "JavaScript", "TypeScript",
                "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "REST APIs",
                "Git/GitHub"
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg text-center font-medium transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              What Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Business Owner",
                  text: "Muhammad delivered an outstanding website that exceeded our expectations. Professional, timely, and excellent communication throughout the project."
                },
                {
                  name: "David Chen",
                  role: "Startup Founder",
                  text: "Working with Muhammad was a great experience. He understood our vision and translated it into a beautiful, functional application."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Marketing Director",
                  text: "Highly skilled developer with great attention to detail. The final product was exactly what we needed and more. Highly recommend!"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div className="mb-4">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-xl" style={{ color: "var(--primary)" }}>★</span>
                      ))}
                    </div>
                    <p className="italic mb-4" style={{ color: "var(--muted-foreground)" }}>
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: "var(--foreground)" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* CTA Section */}
          <section className="text-center p-12 rounded-2xl bg-gradient">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary-foreground)" }}>
              Have a Project in Mind?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--primary-foreground)", opacity: 0.9 }}>
              Let's collaborate to turn your ideas into reality. I'm available for new projects and always excited to work on challenging and innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Start a Project</span>
              </Link>
              <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                <span>View Services</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
