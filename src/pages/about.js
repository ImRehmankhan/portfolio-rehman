import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Monitor, Smartphone, Server, Database, Award, Users, Clock, Briefcase, Code, Lightbulb, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <Head>
        <title>About Muhammad Rehman — Full-Stack Developer | Softoria</title>
        <meta 
          name="description" 
          content="Learn about Muhammad Rehman, a passionate full-stack developer with 2+ years of experience in React, Next.js, Node.js, and React Native. Building scalable web and mobile applications." 
        />
        <meta name="keywords" content="Muhammad Rehman, full-stack developer, React developer, Next.js expert, Node.js developer, React Native, web development, mobile app development" />
        <link rel="canonical" href="https://www.softoria.tech/about" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Muhammad Rehman — Full-Stack Developer | Softoria" />
        <meta property="og:description" content="Passionate full-stack developer specializing in React, Next.js, Node.js, and React Native development." />
        <meta property="og:url" content="https://www.softoria.tech/about" />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "mainEntity": {
                "@type": "Person",
                "name": "Muhammad Rehman",
                "jobTitle": "Full-Stack Developer",
                "url": "https://www.softoria.tech",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Softoria"
                },
                "knowsAbout": ["React.js", "Next.js", "Node.js", "React Native", "JavaScript", "Web Development", "Mobile Development"],
                "alumniOf": "Computer Science",
                "description": "Experienced full-stack developer with expertise in modern web and mobile technologies"
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
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Muhammad Rehman
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "var(--primary)" }}>
              Full-Stack Developer & Digital Innovator
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              Transforming ideas into powerful digital solutions with modern web and mobile technologies
            </p>
          </header>

          {/* Story Section */}
          <section className="mb-16 bg-[var(--surface)] p-8 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://res.cloudinary.com/dzc11dpii/image/upload/v1763179525/Profile_ksskl0.jpg" 
                    alt="Muhammad Rehman - Full-Stack Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzE3MTcxNyIvPjwvc3ZnPg=="
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                  My Journey as a Developer
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  Hello! I'm Muhammad Rehman, a passionate full-stack developer based in Islamabad, Pakistan. My journey into software development began with a fascination for how technology can solve real-world problems and create meaningful user experiences.
                </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                With over 2 years of professional experience, I specialize in building scalable web applications using React.js and Next.js, developing cross-platform mobile apps with React Native, and creating robust backend systems with Node.js and Express.js. I have successfully delivered 15+ projects for clients worldwide, ranging from e-commerce platforms to enterprise applications. You can explore my work in the <Link href="/portfolio" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>portfolio section</Link>.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                My approach combines technical expertise with strong problem-solving skills. I believe in writing clean, maintainable code and following industry best practices. Whether it's optimizing performance, implementing responsive designs, or integrating complex APIs, I'm committed to delivering excellence in every project. Learn more about what I can do for you on my <Link href="/services" className="font-semibold hover:underline" style={{ color: "var(--primary)" }}>services page</Link>.
              </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Core Values & Principles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Innovation", 
                  Icon: Lightbulb, 
                  description: "Constantly exploring new technologies and approaches to solve complex problems creatively." 
                },
                { 
                  title: "Quality", 
                  Icon: Award, 
                  description: "Delivering high-quality code with attention to detail, performance optimization, and best practices." 
                },
                { 
                  title: "Collaboration", 
                  Icon: Users, 
                  description: "Working closely with clients and teams to ensure project success and clear communication." 
                },
                { 
                  title: "Commitment", 
                  Icon: Heart, 
                  description: "Dedicated to meeting deadlines, exceeding expectations, and building long-term relationships." 
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl transition-all duration-300 hover:scale-105" 
                  style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div 
                    className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    <value.Icon className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
                    {value.title}
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Expertise */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Technical Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Frontend Development", 
                  Icon: Monitor, 
                  skills: ["React.js", "Next.js", "JavaScript/TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Responsive Design"]
                },
                { 
                  title: "Mobile Development", 
                  Icon: Smartphone, 
                  skills: ["React Native", "Cross-platform Apps", "iOS & Android", "Mobile UI/UX", "Native Modules", "App Deployment"]
                },
                { 
                  title: "Backend Development", 
                  Icon: Server, 
                  skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication", "API Integration", "Microservices"]
                },
                { 
                  title: "Database & Tools", 
                  Icon: Database, 
                  skills: ["MongoDB", "MySQL", "PostgreSQL", "Git/GitHub", "Docker", "Cloud Deployment"]
                }
              ].map((category, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: "var(--surface)", border: "2px solid var(--primary)" }}
                >
                  <div 
                    className="w-12 h-12 mb-4 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    <category.Icon className="w-6 h-6" style={{ color: "var(--primary-foreground)" }} />
                  </div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: "var(--primary)" }}
                        />
                        <span style={{ color: "var(--muted-foreground)" }}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 bg-gradient p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary-foreground)" }}>
              Professional Achievements
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "2+", label: "Years Experience", Icon: Clock },
                { number: "15+", label: "Projects Completed", Icon: Briefcase },
                { number: "10+", label: "Satisfied Clients", Icon: Users },
                { number: "10+", label: "Technologies Mastered", Icon: Code }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-[var(--background)]">
                    <stat.Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2" style={{ color: "var(--primary-foreground)" }}>
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "var(--primary-foreground)", opacity: 0.9 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-16 p-8 rounded-2xl" style={{ backgroundColor: "var(--surface)" }}>
            <div className="max-w-3xl mx-auto text-center">
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <Target className="w-8 h-8" style={{ color: "var(--primary-foreground)" }} />
              </div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
                My Mission
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>
                My mission is to empower businesses and individuals by creating exceptional digital experiences that drive growth and innovation. I strive to stay at the forefront of technology trends, continuously learning and adapting to provide cutting-edge solutions that exceed client expectations.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                I believe in building long-term partnerships based on trust, transparency, and mutual success. Every project is an opportunity to make a positive impact and contribute to the digital transformation of businesses worldwide.
              </p>
            </div>
          </section>

          {/* Education & Background */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>
              Education & Background
            </h3>
            <div className="max-w-3xl mx-auto bg-[var(--surface)] p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                    Computer Science Education
                  </h4>
                  <p className="mb-2" style={{ color: "var(--foreground)" }}>
                    Bachelor's Degree in Computer Science
                  </p>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Strong foundation in data structures, algorithms, software engineering principles, and computer systems
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                    Professional Development
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Continuously updating skills through online courses, certifications, and hands-on project experience. Actively participating in developer communities and staying current with the latest industry trends and technologies.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                    Specializations
                  </h4>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Specialized in modern JavaScript frameworks, full-stack development, mobile application development, and cloud-based solutions. Experienced in agile methodologies, version control, and collaborative development practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center p-12 rounded-2xl" style={{ backgroundColor: "var(--surface)" }}>
            <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
              Let's Work Together
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
              I'm always excited to take on new challenges and collaborate on innovative projects. Whether you need a web application, mobile app, or technical consultation, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                <span>Start a Project</span>
              </a>
              <a 
                href="/Resume_Muhammad_Rehman.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary inline-flex items-center gap-2"
                aria-label="Download CV"
              >
                <Code className="w-5 h-5" />
                <span>View Resume</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
