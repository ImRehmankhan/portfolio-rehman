import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Code, Smartphone, Monitor, ShoppingCart, GraduationCap, Search, Database, ArrowRight, Mail, CheckCircle } from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function Portfolio() {
  // Helper function to get icon based on category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "E-commerce Website":
        return ShoppingCart;
      case "Business Website":
        return Search;
      case "Educational Website":
        return GraduationCap;
      case "Blog Website":
        return Monitor;
      case "Mobile Application":
        return Smartphone;
      case "Business Management Platform":
        return Database;
      default:
        return Code;
    }
  };

  // Transform projectsData to match portfolio display format
  const projects = projectsData.map(project => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    category: project.category,
    Icon: getCategoryIcon(project.category),
    description: project.shortDescription,
    longDescription: project.fullDescription.split('\n\n')[0], // First paragraph
    features: project.features.slice(0, 4),
    technologies: project.technologies,
    challenges: project.challenges ? project.challenges[0] : "Creating a scalable and performant solution.",
    results: project.results ? Object.values(project.results)[0] : "Successfully delivered a high-quality product.",
    img: project.images[0], // Use last image as thumbnail
    demoUrl: project.liveLink,
    codeUrl: project.githubLink,
    year: new Date().getFullYear().toString()
  }));

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
              Explore a selection of projects I've built for clients and personal development. Each project showcases my expertise in modern web and mobile technologies, problem-solving skills, and commitment to quality. Want to learn more? Check out my <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>services</Link>, try my free <Link href="/tools" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>developer tools</Link>, read <Link href="/about" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>about me</Link>, or explore my <Link href="/blog" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>blog articles</Link>.
            </p>
          </header>

          {/* Projects Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
                <article 
                  key={project.id}
                  className="flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div>
                    {/* Project Image */}
                    <div className="relative h-70 md:h-80 sm:h-50 w-full overflow-hidden" style={{ backgroundColor: "var(--input)" }}>
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-4 sm:p-6">
                      <p className="text-xs sm:text-sm mb-2 font-semibold" style={{ color: "var(--primary)" }}>
                        {project.category}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                        {project.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex gap-3 p-5 pt-0">
                    <Link 
                      href={`/portfolio/${project.slug}`}
                      className="w-full btn-primary inline-flex items-center justify-center gap-2 px-4 py-2 md:text-sm text-[12px]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </Link>
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
