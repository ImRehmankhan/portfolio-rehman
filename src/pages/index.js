import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Download, Mail, Monitor, Smartphone, Server, Database, Briefcase, Atom, Terminal, Code, FileCode, Paintbrush, Box, Wind, Repeat, ArrowRight, Award, Users, Clock, Rocket, Phone, ExternalLink, Github, BookOpen, Calendar } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { adsenseBlogPosts } from "@/data/adsenseBlogPosts";

// Dynamic import for ContactForm to reduce initial bundle
const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => <div className="text-center py-12">Loading contact form...</div>,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Softoria — Muhammad Rehman | Full‑Stack Developer</title>
        <meta name="description" content="Muhammad Rehman — Full‑stack web & mobile developer (React, Next.js, Node.js). Available for projects. Build fast, responsive, and scalable digital products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.softoria.tech/" />

        {/* Preload LCP image for better performance */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179525/Profile_ksskl0.jpg"
          fetchPriority="high"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Softoria — Muhammad Rehman | Full‑Stack Developer" />
        <meta property="og:description" content="Full‑stack web & mobile developer specializing in React, Next.js, Node.js and React Native. Available for freelance projects." />
        <meta property="og:url" content="https://www.softoria.tech/" />
        <meta property="og:image" content="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179525/Profile_ksskl0.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Softoria — Muhammad Rehman | Full‑Stack Developer" />
        <meta name="twitter:description" content="Full‑stack web & mobile developer specializing in React, Next.js, Node.js and React Native. Available for freelance projects." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179525/Profile_ksskl0.jpg" />

        {/* Structured Data: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Rehman",
              url: "https://www.softoria.tech/",
              sameAs: ["https://www.linkedin.com/in/rehmankhan301b/", "https://github.com/ImRehmankhan", "https://web.facebook.com/rehman.khan.246606"],
              jobTitle: "Full‑Stack Developer",
              image: "https://res.cloudinary.com/dzc11dpii/image/upload/v1763179525/Profile_ksskl0.jpg",
              description: "Full‑stack web & mobile developer specializing in React, Next.js, Node.js and React Native. Available for freelance projects.",
            }),
          }}
        />
        
        {/* Organization Schema for Logo in Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Softoria",
              "alternateName": "Softoria Tech",
              "url": "https://www.softoria.tech",
              "logo": "https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png",
              "image": "https://res.cloudinary.com/dzc11dpii/image/upload/v1763179527/site-logo_cmmgdi.png",
              "description": "Professional web and mobile development services. Building fast, scalable applications with React, Next.js, Node.js, and React Native.",
              "sameAs": [
                "https://www.linkedin.com/in/rehmankhan301b/",
                "https://github.com/ImRehmankhan",
                "https://web.facebook.com/rehman.khan.246606"
              ],
              "founder": {
                "@type": "Person",
                "name": "Muhammad Rehman",
                "jobTitle": "Full-Stack Developer",
                "url": "https://www.softoria.tech/about"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK",
                "addressLocality": "Islamabad"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "rehmanattock30@gmail.com",
                "url": "https://www.softoria.tech/contact"
              }
            }),
          }}
        />
      </Head>
      <section className="section bg-red-500 hero-modern">
        <div className="container max-w-7xl mx-auto w-full sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="hero-content space-y-6">
              <div className="badge badge--primary inline-block px-4 py-2 rounded-full text-sm font-medium">
                <span>Available for Projects</span>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[var(--foreground)]">
                Hello, I'm{" "}
                <span className="text-gradient" style={{ color: "var(--primary)" }}>
                  Muhammad Rehman
                </span>
              </h1>

              <h2 className="text-[var(--foreground)] text-lg sm:text-xl md:text-2xl font-semibold tracking-tight leading-snug">Turning your ideas into powerful, responsive websites</h2>

              <p
                className="   text-sm md:text-base
    font-normal
    tracking-normal
    leading-snug
    text-[var(--muted-foreground)]"
              >
                You need a website that's not only beautiful but fast, functional, and built to grow with your business. That's exactly what I deliver. With 2+ years of experience, I specialize in building modern, scalable solutions using cutting-edge technologies. Explore my{" "}
                <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                  services
                </Link>
                , view my{" "}
                <Link href="/portfolio" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                  portfolio
                </Link>
                , check out my free{" "}
                <Link href="/tools" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                  tools
                </Link>
                , or read my{" "}
                <Link href="/blog" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                  blog
                </Link>{" "}
                to see how I can help transform your ideas into exceptional digital products.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
                  <Mail className="w-5 h-5" />
                  <span>Hire Me</span>
                </Link>

                <a href="/Resume_Muhammad_Rehman.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3" aria-label="Download CV">
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Download CV</span>
                </a>
              </div>

              {/* Quick Stats (inside hero as per sample) */}
              <div className="about-stats grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { number: "2+", label: "Years Experience" },
                  { number: "15+", label: "Projects Completed" },
                  { number: "10+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="stat-item p-4 rounded-2xl text-center">
                    <div className="stat-number text-3xl font-bold">{stat.number}</div>
                    <div className="stat-label text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="flex  items-center justify-center w-full h-full relative">
              <div className="relative w-full max-w-lg aspect-square">
                <Image 
                  src="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179525/Profile_ksskl0.jpg" 
                  alt="Muhammad Rehman - React and React Native Developer" 
                  fill 
                  priority 
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px" 
                  className="rounded-2xl object-cover object-top shadow-2xl"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzE3MTcxNyIvPjwvc3ZnPg=="
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Me */}
      <section className="section bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)] ">About Me</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
              Let Me Introduce <span className="text-gradient text-3xl md:text-4xl font-bold">Myself</span>
            </h3>
            <p className="text-md text-[var(--muted-foreground)]">Passionate developer with a love for creating exceptional digital experiences</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <h5 className="col-span-1 sm:col-span-2 text-xl sm:text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                Core Expertise
              </h5>
              {[
                { title: "Frontend Development", Icon: Monitor },
                { title: "Mobile App Development", Icon: Smartphone },
                { title: "Backend API Development", Icon: Server },
                { title: "Database Design", Icon: Database },
              ].map(({ title, Icon }) => (
                <div key={title} className="p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 bg-[var(--background)] border-2 border-[var(--border)]">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center shadow-sm" aria-hidden>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary-foreground)]" />
                  </div>
                  <h5 className="font-semibold text-xs sm:text-sm" style={{ color: "var(--foreground)" }}>
                    {title}
                  </h5>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                Building Digital Excellence Since <span className="text-gradient text-2xl font-bold">2022</span>
              </h4>
              <p
                className="text-sm md:text-base
    font-normal
    tracking-normal
    leading-snug
    text-[var(--muted-foreground)]"
              >
                I am a skilled full-stack developer and programmer, specializing in creating robust web applications with modern technologies like <span className="text-[var(--foreground)] font-semibold">React.js, <Link href="/blog/building-scalable-web-applications-nextjs-react" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Next.js</Link>, <Link href="/blog/build-rest-api-nodejs-express-tutorial" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>Node.js</Link>, and <Link href="/blog/why-every-business-needs-mobile-app-2024" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>React Native</Link>.</span>
              </p>
              <p
                className="text-sm md:text-base
    font-normal
    tracking-normal
    leading-snug
    text-[var(--muted-foreground)]"
              >
                With a solid foundation in computer science principles and 2+ years of hands-on experience, I am passionate about crafting efficient, scalable, and user-friendly digital solutions that make a real impact.
              </p>
              <p
                className="text-sm md:text-base
    font-normal
    tracking-normal
    leading-snug
    text-[var(--muted-foreground)]"
              >
                <span className="text-[var(--foreground)] font-semibold">Currently seeking new opportunities and exciting freelance projects.</span> Let's collaborate to bring your vision to life! Learn more{" "}
                <Link href="/about" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                  about my background
                </Link>{" "}
                or explore the{" "}
                <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>
                  services I offer
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Portfolio */}
      <section id="portfolio" className="section bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)] "> My Work</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Delivering Impactful <span className="text-gradient text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Solutions</span>
            </h3>
            <p className="text-md text-[var(--muted-foreground)]">Explore my recent projects where I've transformed ideas into exceptional digital experiences</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {projectsData.map((project, index) => (
              <div key={project.id} className="flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                <div>
                  <div className="relative h-70 md:h-80 sm:h-50 w-full overflow-hidden" style={{ backgroundColor: "var(--input)" }}>
                    <Image src={project.images[0]} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top" loading="lazy" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="text-xs sm:text-sm mb-2 font-semibold" style={{ color: "var(--primary)" }}>
                      {project.category}
                    </p>
                    <h4 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                      {project.title}
                    </h4>
                    <p className="mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
                      {project.shortDescription}
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
                <div className="flex gap-3 p-5 pt-0">
                  <Link href={`/portfolio/${project.slug}`} className="w-full btn-primary inline-flex items-center justify-center gap-2 px-4 py-2 md:text-sm text-[12px]">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center flex-col items-center text-center">
            <h4 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Like What You See?
            </h4>
            <p className="text-lg mb-6" style={{ color: "var(--muted-foreground)" }}>
              Let's work together to bring your next project to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
                <Briefcase className="w-4 h-4" />
                <span>Start a Project</span>
              </Link>
              <a href="/Resume_Muhammad_Rehman.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3" aria-label="Download CV">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Skills */}
      <section className="section bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)] ">Skills & Expertise</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              My Technical <span className="text-gradient text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Skills</span>
            </h3>
            <p className="text-md text-[var(--muted-foreground)]">Technologies and tools I use to bring exceptional digital experiences to life. Learn more about <Link href="/blog/react-hooks-tutorial-usestate-useeffect-beginners-guide" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>React Hooks</Link> and <Link href="/blog/best-practices-database-design-optimization" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>database design best practices</Link>.</p>
          </div>

          {/* Professional Journey Stats */}

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {[
              { name: "React.js", Icon: Atom, category: "Frontend", proficiency: 92 },
              { name: "Next.js", Icon: Atom, category: "Frontend", proficiency: 95 },
              { name: "Node.js", Icon: Terminal, category: "Backend", proficiency: 85 },
              { name: "JavaScript", Icon: Code, category: "Frontend", proficiency: 88 },
              { name: "HTML5", Icon: FileCode, category: "Frontend", proficiency: 95 },
              { name: "CSS3", Icon: Paintbrush, category: "Frontend", proficiency: 90 },
              { name: "SQL", Icon: Briefcase, category: "Database", proficiency: 90 },
              { name: "PostgreSQL", Icon: Database, category: "Database", proficiency: 85 },
              { name: "MongoDB", Icon: Database, category: "Database", proficiency: 80 },
              { name: "Bootstrap", Icon: Box, category: "Framework", proficiency: 87 },
              { name: "Tailwind CSS", Icon: Wind, category: "Framework", proficiency: 85 },
              { name: "Redux", Icon: Repeat, category: "State Management", proficiency: 78 },
            ].map((skill, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)" }}>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <skill.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary)]" />
                    <h5 className="font-bold text-base sm:text-lg" style={{ color: "var(--foreground)" }}>
                      {skill.name}
                    </h5>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                    {skill.proficiency}%
                  </span>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
                  {skill.category}
                </p>
                <div className="text-sm mb-2" style={{ color: "var(--muted-foreground)" }}>
                  {skill.proficiency}% Proficiency
                </div>
                <div className="w-full h-2 rounded-full" style={{ backgroundColor: "var(--input)" }}>
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${skill.proficiency}%`, backgroundColor: "var(--primary)" }} />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Categories */}
          <div className="mb-12">
            <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Technology Stack Categories
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "Frontend", Icon: Monitor, items: "Next.js, React.js, HTML5, CSS3, JavaScript, Responsive Design" },
                { title: "Backend", Icon: Server, items: "Node.js, Express.js, RESTful APIs, Authentication" },
                { title: "Database", Icon: Database, items: "MongoDB, MySQL, PostgreSQL, Database Design, Data Modeling" },
                { title: "Mobile", Icon: Smartphone, items: "React Native, Cross-platform, iOS & Android" },
              ].map((stack, index) => (
                <div key={index} className="p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: "var(--background)", border: "2px solid var(--primary)" }}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-lg flex items-center justify-center bg-gradient" style={{ backgroundColor: "var(--primary)" }}>
                    <stack.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary-foreground)]" />
                  </div>
                  <h5 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[var(--foreground)]">{stack.title}</h5>
                  <p className="text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
                    {stack.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 w-full">
            <div className="bg-[var(--background)] p-4 sm:p-6 rounded-lg w-full sm:max-w-3xl mx-auto" style={{ border: "1px solid var(--border)" }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <h2 className="text-base sm:text-lg font-bold" style={{ color: "var(--foreground)" }}>
                    Prefer to call?
                  </h2>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--muted-foreground)" }}>
                    Available Mon–Fri • Quick response
                  </p>
                </div>

                <a href="tel:+923425221720" aria-label="Call Now" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Services */}
      <section className="section" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)] "> Services</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              What I <span className="text-gradient text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Specialize </span> In
            </h3>
            <p
              className="text-sm md:text-base
    font-normal
    tracking-normal
    leading-snug
    text-[var(--muted-foreground)]"
            >
              I provide comprehensive web and mobile development services to help bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Full Stack Web Development",
                Icon: Code,
                description: "Building responsive and dynamic websites with React.js, along with developing RESTful APIs using Express.js, Node.js, and MongoDB. Complete end-to-end web solutions that are scalable and maintainable.",
                features: ["React.js & Next.js", "Node.js & Express", "MongoDB & MySQL", "RESTful APIs", "Responsive Design"],
              },
              {
                title: "Mobile App Development",
                Icon: Smartphone,
                description: "Creating cross-platform mobile applications using React Native. Proficient in building native-like experiences with smooth performance, intuitive UI/UX, and seamless integration with backend services.",
                features: ["React Native", "iOS & Android", "Native Modules", "Push Notifications", "App Store Deployment"],
              },
              {
                title: "Backend Development",
                Icon: Server,
                description: "Developing robust server-side applications with Node.js and Express.js. Experience with database design, API development, authentication systems, and cloud deployment strategies.",
                features: ["Node.js & Express", "Database Design", "API Development", "Authentication", "Cloud Deployment"],
              },
              {
                title: "Database Design & Optimization",
                Icon: Briefcase,
                description: "Designing efficient and scalable database structures with strong focus on normalization, performance tuning, and optimized queries for modern applications.",
                features: ["Schema Design", "Normalization", "Query Optimization", "MySQL & MongoDB", "Performance Tuning"],
              },
            ].map((service, index) => (
              <div key={index} className="p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-end flex-col justify-between " style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className=" flex-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--primary)" }}>
                    <service.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--primary-foreground)]" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: "var(--foreground)" }}>
                    {service.title}
                  </h4>
                  <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
                    {service.description}
                  </p>
                  <div className="space-y-2 ">
                    <p className="font-semibold mb-3" style={{ color: "var(--primary)" }}>
                      Key Features
                    </p>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="var(--primary)" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: "var(--foreground)" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 w-full flex justify-center">
                  <Link href="/contact" className="btn-primary w-full rounded-2xl px-4 py-2 inline-flex items-center justify-center gap-2   text-sm ">
                    <Mail className="w-4 h-4" />
                    <span >Get Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex justify-center items-center text-center mt-8">
            <Link href="/services" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
              <span>View More Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-gradient">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--primary-foreground)" }}>
              Why Choose Me?
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--primary-foreground)", opacity: 0.9 }}>
              Delivering excellence through expertise, dedication, and proven results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              { number: "2+", label: "Years Experience", Icon: Award, description: "Professional development" },
              { number: "15+", label: "Projects Completed", Icon: Briefcase, description: "Successfully delivered" },
              { number: "10+", label: "Satisfied Clients", Icon: Users, description: "Happy partnerships" },
              { number: "24/7", label: "Support Available", Icon: Clock, description: "Always here to help" },
            ].map((stat, index) => (
              <div key={index} className="group p-6 sm:p-8 bg-[var(--surface)] rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12" style={{ backgroundColor: "var(--primary)" }}>
                  <stat.Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: "var(--primary-foreground)" }} />
                </div>
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                  {stat.number}
                </h4>
                <p className="text-base sm:text-lg font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                  {stat.label}
                </p>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center p-8 sm:p-12 rounded-3xl bg-[var(--surface)]">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center bg-[var(--primary)] shadow-lg">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: "var(--foreground)" }}>
                Ready to Start Your Project?
              </h4>
              <p className="text-base sm:text-lg mb-6 sm:mb-8" style={{ color: "var(--foreground)", opacity: 0.9 }}>
                Let's discuss your requirements and create something amazing together
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
                  <Mail className="w-5 h-5" />
                  <span>Get Started Now</span>
                </Link>
                <a href="/Resume_Muhammad_Rehman.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3">
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Blog Highlights */}
      <section className="section bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)]">Latest Articles</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              From My <span className="text-gradient text-3xl md:text-4xl font-bold mb-4">Blog</span>
            </h3>
            <p className="text-md text-[var(--muted-foreground)]">
              Insights, tutorials, and best practices from real-world development experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {adsenseBlogPosts.slice(0, 3).map((post) => (
              <article 
                key={post.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)" }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4" style={{ color: "var(--primary)" }} />
                    <span className="text-sm font-semibold" style={{ color: "var(--primary)" }}>
                      {post.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: "var(--foreground)" }}>
                    {post.title}
                  </h4>

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

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                    style={{ color: "var(--primary)" }}
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
            >
              <BookOpen className="w-5 h-5" />
              <span>View All Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Contact */}
      <section className="section bg-[var(--background)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="badge badge--primary text-sm font-semibold mb-2 uppercase tracking-wider text-[var(--primary-foreground)] ">Contact</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Let's Work <span className="text-gradient text-3xl md:text-4xl font-bold mb-4"> Together</span>
            </h3>
            <p className="text-md text-[var(--muted-foreground)]">
              Have a project in mind? I'd love to hear from you. Send me a message and let's discuss <br /> how we can bring your ideas to life.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="section bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                question: "What's your response time?",
                answer: "I typically respond within 24 hours. For urgent projects, I'm available for quick calls during business hours.",
              },
              {
                question: "Do you work on weekends?",
                answer: "For urgent projects and deadlines, I'm flexible with weekend work. We can discuss this based on your project requirements.",
              },
              {
                question: "What information should I include?",
                answer: "Please include project details, timeline, budget range, and any specific requirements or technologies you prefer.",
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes! I provide post-launch support and maintenance services to ensure your project continues to perform optimally.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)" }}>
                <h5 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: "var(--primary)" }}>
                  {faq.question}
                </h5>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "var(--muted-foreground)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
