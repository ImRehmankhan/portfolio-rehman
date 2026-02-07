import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projectsData';

export default function ProjectDetail({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <Head>
        <title>{`${project.title} - Portfolio | Softoria`}</title>
        <meta name="description" content={project.shortDescription} />
        <meta name="keywords" content={`${project.technologies.join(', ')}, portfolio, web development, ${project.category}`} />
        <meta name="author" content="Muhammad Rehman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.softoria.tech/portfolio/${project.slug}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Softoria" />
        <meta property="og:title" content={`${project.title} - Portfolio | Softoria`} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:url" content={`https://www.softoria.tech/portfolio/${project.slug}`} />
        <meta property="og:image" content={project.images[0]} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={project.title} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@softoria" />
        <meta name="twitter:creator" content="@muhammadrehman" />
        <meta name="twitter:title" content={`${project.title} - Portfolio | Softoria`} />
        <meta name="twitter:description" content={project.shortDescription} />
        <meta name="twitter:image" content={project.images[0]} />
        <meta name="twitter:image:alt" content={project.title} />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.softoria.tech/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Portfolio",
                  "item": "https://www.softoria.tech/portfolio"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": project.title,
                  "item": `https://www.softoria.tech/portfolio/${project.slug}`
                }
              ]
            })
          }}
        />
        
        {/* Creative Work Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": project.title,
              "description": project.shortDescription,
              "image": project.images,
              "creator": {
                "@type": "Person",
                "name": "Muhammad Rehman",
                "url": "https://www.softoria.tech/about"
              },
              "keywords": project.technologies.join(', '),
              "url": `https://www.softoria.tech/portfolio/${project.slug}`,
              "inLanguage": "en-US"
            })
          }}
        />
      </Head>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-6">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
        <div className="text-left mt-4  mx-auto">
          <p className="text-sm font-semibold  uppercase tracking-wider text-[var(--primary)]">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </div>


      {/* Image Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
          {/* Main Image */}
          <div className="relative w-full h-[60vh] md:h-[70vh] bg-[var(--background)]">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

            {/* Full Description */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
                Project Overview
              </h2>
              <div className="text-[var(--muted-foreground)] leading-relaxed space-y-4">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--foreground)]">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
                  >
                    <Check className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">
                    Challenges
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="text-[var(--muted-foreground)] pl-4 border-l-2 border-[var(--primary)]"
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <h3 className="text-xl font-bold mb-4 text-[var(--foreground)]">
                    Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li
                        key={index}
                        className="text-[var(--muted-foreground)] pl-4 border-l-2 border-green-500"
                      >
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div className="p-6 rounded-2xl bg-gradient">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-foreground)]">
                  Results & Impact
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-sm text-[var(--primary-foreground)] opacity-90 mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-lg font-bold text-[var(--primary-foreground)]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] sticky top-20">
              <h3 className="text-xl font-bold mb-6 text-[var(--foreground)]">
                Project Info
              </h3>
              <div className="space-y-4">
                {project.clientType && (
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-1">Client Type</p>
                    <p className="font-semibold text-[var(--foreground)]">{project.clientType}</p>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-1">Duration</p>
                    <p className="font-semibold text-[var(--foreground)]">{project.duration}</p>
                  </div>
                )}
                {project.myRole && (
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-1">My Role</p>
                    <p className="font-semibold text-[var(--foreground)]">{project.myRole}</p>
                  </div>
                )}
                {project.teamSize && (
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)] mb-1">Team Size</p>
                    <p className="font-semibold text-[var(--foreground)]">{project.teamSize}</p>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted-foreground)] mb-3">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {project.tags && (
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
               <div className="p-6 mt-6 rounded-2xl bg-gradient text-center sticky top-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary-foreground)]">
                Like This Project?
              </h3>
              <p className="text-sm mb-6 text-[var(--primary-foreground)] opacity-90">
                Let's work together on your next project
              </p>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 w-full"
              >
                <span>Start a Project</span>
              </Link>
            </div>
            </div>

            {/* CTA Card */}
           
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllProjectSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);

  return {
    props: {
      project,
    },
  };
}
