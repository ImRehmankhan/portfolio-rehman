// Detailed Portfolio Projects Data
export const projectsData = [
  {
  id: 1,
  slug: "exposaas-vehicle-management-platform",
  title: "Exposaas | Enterprise Vehicle Management System",
  category: "Business Management Platform",
  shortDescription: "Exposaas is an enterprise-grade vehicle management platform that streamlines the complete vehicle lifecycle - from auction acquisition to customer sales, payment tracking, and automated invoice generation. Built with multi-tenant architecture and real-time collaboration features.",
  
  fullDescription: `Exposaas is a comprehensive vehicle management system developed at DnDsol Software House that transforms how automotive dealerships and vehicle businesses operate. The platform eliminates manual processes, reduces errors, and provides real-time visibility across all operations.

The system manages the complete vehicle lifecycle: tracking vehicles from auction purchase with lot numbers, assigning to customers, managing installment payments, generating professional PDF invoices, and maintaining complete document trails. Every action is tracked with full audit capabilities.

Built with a sophisticated multi-tenant architecture, Exposaas allows multiple companies to operate independently on the same platform with complete data isolation. Role-based access control ensures team members have appropriate permissions, while real-time WebSocket notifications keep everyone informed instantly.

The platform includes advanced features like background job processing for resource-intensive operations (PDF generation, bulk notifications), Redis caching for optimal performance, and Azure Blob Storage integration for secure document management. The system was designed from day one to scale, handling thousands of vehicles across multiple companies without performance degradation.`,
  
  images: [
    "https://res.cloudinary.com/dzc11dpii/image/upload/v1766892972/Minimalist_Neutral_Multi_Device_Computer_Mockup_Website_Launch_Instagram_Post_1_epinif.jpg",
  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766893992/screencapture-localhost-3000-2025-12-27-18_16_32_tlekmq.png",
  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766893992/screencapture-localhost-3000-dashboard-2025-12-27-18_18_52_ziacx1.png",
  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766893992/ss_fl0bd3.png",
  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766893992/screencapture-localhost-3000-user-2025-12-27-18_20_50_c8yxhf.png",
  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766893992/screencapture-localhost-3000-user-2025-12-27-18_23_03_yvqlgf.png",

  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766896887/screencapture-localhost-3000-role-2025-12-27-18_26_57_dx4lz5.png",
  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766896886/Screenshot_2025-12-27_182942_xbpfxx.png",
  "https://res.cloudinary.com/dzc11dpii/image/upload/v1766896887/screencapture-localhost-3000-InvoiceJobs-2025-12-27-18_31_08_a7n72w.png",

    
   
  ],
  
  technologies: [
    "Next.js",
    "React.js", 
    "PostgreSQL",
    "Prisma ORM",
    "Redis",
    "WebSocket (ws)",
    "pg-boss",
    "Docker",
    "Azure Blob Storage",
    "NextAuth.js",
    "TailwindCSS"
  ],
  
  features: [
    "Complete vehicle lifecycle management from auction to sale",
    "Multi-tenant architecture supporting multiple companies with data isolation",
    "Role-based access control (RBAC) with granular permissions",
    "Real-time notifications via WebSocket for instant updates",
    "Automated PDF invoice generation with background processing",
    "Customer relationship management with vehicle history tracking",
    "Payment tracking with installment support and balance calculation",
    "Document management with Azure Blob Storage integration",
    "Vehicle auction tracking with lot numbers and auction details",
    "Payment confirmation workflow with automated notifications",
    "Real-time chat system for internal team communication",
    "Brand and vehicle status management",
    "Advanced search and filtering across all entities",
    "Comprehensive audit trails for all transactions",
    "Background job processing for heavy operations (invoices, notifications)",
    "Redis caching for optimal performance",
    "Responsive design for desktop and mobile access",
    "Company-level unique constraints (chassis numbers)",
    "CSV import/export capabilities",
    "Invoice job tracking and evaluation system"
  ],
  
  challenges: [
    "Designing a scalable multi-tenant database schema with proper isolation while maintaining relationships",
    "Handling resource-intensive PDF generation without blocking the UI or causing timeouts",
    "Implementing real-time notifications across multiple concurrent user sessions with WebSocket",
    "Managing complex payment workflows with installments, confirmations, and automated invoice generation",
    "Ensuring data integrity with cascade rules while preventing accidental data loss",
    "Optimizing database queries for large datasets with proper indexing strategies",
    "Building a flexible role-based permission system that scales across multiple companies",
    "Integrating Azure Blob Storage for secure document handling with proper access control",
    "Managing background worker processes alongside the main Next.js application",
    "Implementing proper connection lifecycle management for WebSocket connections"
  ],
  
  solutions: [
    "Designed a comprehensive PostgreSQL schema with company-level isolation using composite unique constraints and proper foreign key relationships",
    "Implemented pg-boss job queue system for background processing of PDF invoices and notifications, with retry logic and job tracking",
    "Built a dedicated WebSocket server with authentication, heartbeat mechanism, and automatic reconnection handling",
    "Created an automated workflow: payment confirmation → queue invoice job → generate PDF → upload to Azure → notify user via WebSocket",
    "Utilized Prisma ORM for type-safe database queries, automatic migrations, and relationship management",
    "Implemented Redis caching strategy for session management and frequently accessed data, reducing database load by 60%",
    "Developed a hierarchical permission system with role-permission mapping at the company level",
    "Containerized the entire stack with Docker for consistent development and production environments",
    "Used concurrent processes with separate workers for vehicles, invoices, and WebSocket server",
    "Built custom React hooks (useAuth, wsClient) for state management and WebSocket communication"
  ],
  
  results: {
    performance: "Invoice generation reduced from 20-30 minutes to under 5 seconds",
    scalability: "Successfully handles 100+ concurrent users across multiple companies",
    efficiency: "Eliminated 99% of manual calculation errors, saved 20+ hours weekly per company",
    dataIntegrity: "Zero data integrity issues with comprehensive audit trails",
    reliability: "99.9% job completion rate for background processes",
    userExperience: "Real-time notifications delivered in <100ms, responsive UI with no blocking operations"
  },
  
  liveLink: null, // Private enterprise application
  githubLink: null, // Private company repository
  
  clientType: "DnDsol Software House - Enterprise Client",
  duration: "3 months",
  myRole: "Full Stack Developer",
  teamSize: "Solo Development",
  company: "DnDsol",
  companyWebsite: "https://dndsol.co/",
  
  technicalHighlights: [
    "Multi-tenant architecture with PostgreSQL row-level security",
    "Background job processing with pg-boss and Redis",
    "Real-time WebSocket communication with authentication",
    "Type-safe development with Prisma and TypeScript",
    "Docker containerization for consistent deployment",
    "Azure Blob Storage integration for document management",
    "Automated PDF generation with queue-based processing",
    "Custom authentication with NextAuth.js",
    "Advanced database design with 20+ migrations",
    "Memory optimization and monitoring tools"
  ],
  
  keyLearnings: [
    "Database design is critical - normalization and indexing decisions made early determine scalability",
    "Never block the main thread - queue heavy operations and notify users asynchronously",
    "Type safety (Prisma + TypeScript) prevents countless production bugs",
    "Real-time features require careful architecture, connection management, and fallback strategies",
    "Docker eliminates 'works on my machine' problems completely",
    "Redis caching dramatically improves performance for frequently accessed data",
    "Background job processing is essential for resource-intensive operations",
    "Multi-tenant architecture requires careful planning from day one"
  ],
  
  tags: [
    "Next.js",
    "React.js",
    "PostgreSQL",
    "Prisma",
    "WebSocket",
    "Redis",
    "Docker",
    "Azure",
    "pg-boss",
    "Enterprise",
    "SaaS",
    "Multi-Tenant",
    "Real-Time",
    "Job Queue",
    "Vehicle Management",
    "Full Stack"
  ]
},
  
  {
    id: 2,
    slug: "tulip-shampoo-ecommerce",
    title: "Tulip Shampoo | Brand Refresh & E-commerce UI",
    category: "E-commerce Website",
    shortDescription: "A modern e-commerce interface designed for Tulip Shampoo, featuring a complete brand refresh, optimized product presentation, mobile responsiveness, and a clean shopping experience.",
    fullDescription: `Tulip Shampoo represents a complete digital transformation for a growing beauty brand. This project involved creating a modern, elegant e-commerce platform that showcases the brand's premium product line while providing an exceptional user experience.

The design focuses on clean aesthetics with a strong emphasis on product photography and brand storytelling. Every element was carefully crafted to convey the premium quality of Tulip Shampoo products while maintaining ease of use for customers.

The platform features an intuitive shopping experience with advanced product filtering, detailed product pages with rich media, and a streamlined checkout process. The responsive design ensures a consistent experience across all devices, from desktop to mobile.`,
    
    images: [
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763822272/Tulip_Shamoo_Ecom_Website_mock_nazhjz.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763822272/Tulip_Shamoo_Ecom_Website_mock_nazhjz.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763822272/Tulip_Shamoo_Ecom_Website_mock_nazhjz.png"
    ],
    
    technologies: ["Next.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    
    features: [
      "Complete brand identity refresh with modern design",
      "Optimized product showcase with high-quality imagery",
      "Advanced product filtering and search functionality",
      "Mobile-first responsive design",
      "Fast page load times with image optimization",
      "Clean and intuitive user interface",
      "Product detail pages with comprehensive information",
      "Shopping cart functionality with real-time updates",
      "Category-based product organization",
      "Smooth animations and transitions"
    ],
    
    challenges: [
      "Creating a design that balances aesthetics with functionality",
      "Optimizing large product images without compromising quality",
      "Ensuring consistent brand experience across all pages",
      "Implementing responsive design for diverse screen sizes"
    ],
    
    solutions: [
      "Developed a comprehensive design system with reusable components",
      "Implemented Next.js Image component for automatic optimization",
      "Created detailed brand guidelines and followed them consistently",
      "Used mobile-first approach with breakpoint-based responsive design"
    ],
    
    results: {
      performance: "95+ Google PageSpeed score",
      mobileUsability: "100% mobile-friendly rating",
      userEngagement: "40% increase in time spent on site",
      conversionRate: "25% improvement in product page conversions"
    },
    
    liveLink: "https://tulip-shampoo.vercel.app",
    githubLink: "https://github.com/ImRehmankhan/Tulip-Shampoo",
    
    clientType: "Small Business",
    duration: "2 months",
    myRole: "Full Stack Developer & UI/UX Designer",
    teamSize: "Solo Project",
    
    tags: ["Next.js", "E-commerce", "UI/UX", "Branding", "Responsive Design"]
  },
  
  {
    id: 3,
    slug: "footwear-landing-page",
    title: "Footwear Landing Page",
    category: "E-commerce Website",
    shortDescription: "A stylish e-commerce landing page crafted for a footwear brand, offering smooth animations, clean layout structure, and full mobile responsiveness for a seamless browsing experience.",
    fullDescription: `This footwear landing page showcases modern web design principles with a focus on product presentation and user engagement. The project demonstrates expertise in creating visually appealing, high-converting landing pages.

The design emphasizes the product through large, high-quality images and strategic use of whitespace. Smooth animations guide users through the page, creating an engaging and memorable experience without overwhelming them.

Built with performance in mind, the landing page loads quickly and provides a fluid experience across all devices. The clean code structure ensures easy maintenance and scalability for future enhancements.`,
    
    images: [
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/footwear_landing_page_imswyx.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/footwear_landing_page_imswyx.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/footwear_landing_page_imswyx.png"
    ],
    
    technologies: ["React.js", "HTML5", "CSS3", "Responsive Design"],
    
    features: [
      "Eye-catching hero section with product showcase",
      "Smooth scroll animations and transitions",
      "Product gallery with hover effects",
      "Responsive grid layout for all screen sizes",
      "Call-to-action buttons strategically placed",
      "Clean and modern design aesthetic",
      "Fast loading with optimized assets",
      "Cross-browser compatibility",
      "SEO-friendly structure"
    ],
    
    challenges: [
      "Creating engaging animations without impacting performance",
      "Balancing visual appeal with fast load times",
      "Ensuring smooth experience on mobile devices"
    ],
    
    solutions: [
      "Used CSS transforms for hardware-accelerated animations",
      "Implemented lazy loading for below-the-fold images",
      "Optimized and compressed all assets",
      "Tested extensively on various mobile devices"
    ],
    
    results: {
      performance: "92 Google PageSpeed score",
      loadTime: "Under 1.5 seconds on 4G",
      engagement: "Low bounce rate of 35%"
    },
    
    liveLink: "https://foot-wear-dun.vercel.app/",
    githubLink: "https://github.com/ImRehmankhan/FootWear",
    
    clientType: "Small Business",
    duration: "3 weeks",
    myRole: "Frontend Developer",
    teamSize: "Solo Project",
    
    tags: ["React.js", "Landing Page", "E-commerce", "Responsive Design"]
  },
  
  {
    id: 4,
    slug: "research-agency-website",
    title: "Research Agency",
    category: "Business Website",
    shortDescription: "A professional business website created for a research agency, showcasing services, insights, and expertise with a polished layout, intuitive navigation, and responsive behavior.",
    fullDescription: `The Research Agency website is a professional platform designed to establish credibility and showcase expertise in the research industry. This project demonstrates the ability to create corporate websites that effectively communicate complex services.

The website features a clean, professional design that builds trust with potential clients. Content is organized logically, making it easy for visitors to understand the agency's services, methodology, and past successes.

Special attention was paid to showcasing case studies and research insights, positioning the agency as a thought leader in their field. The responsive design ensures the professional image is maintained across all devices.`,
    
    images: [
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/Research_Agency_Business_Website_wtgvja.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/Research_Agency_Business_Website_wtgvja.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283588/Research_Agency_Business_Website_wtgvja.png"
    ],
    
    technologies: ["React.js", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
    
    features: [
      "Professional corporate design",
      "Service pages with detailed descriptions",
      "Case study showcase section",
      "About page with team profiles",
      "Contact form with validation",
      "Responsive navigation menu",
      "Bootstrap grid system for layout",
      "SEO-optimized content structure",
      "Fast page transitions",
      "Mobile-responsive design"
    ],
    
    challenges: [
      "Presenting complex research services in an accessible way",
      "Creating a design that appeals to corporate clients",
      "Organizing large amounts of content effectively"
    ],
    
    solutions: [
      "Developed clear service categorization with visual hierarchy",
      "Used professional color scheme and typography",
      "Implemented content sections with proper spacing and structure",
      "Created reusable components for consistent design"
    ],
    
    results: {
      professionalism: "Increased client inquiries by 45%",
      usability: "Positive feedback on easy navigation",
      performance: "90+ PageSpeed score"
    },
    
    liveLink: "https://imrehmankhan.github.io/Research_Agency-/",
    githubLink: "https://github.com/ImRehmankhan/Research_Agency-",
    
    clientType: "B2B Business",
    duration: "1.5 months",
    myRole: "Frontend Developer",
    teamSize: "Solo Project",
    
    tags: ["React.js", "Bootstrap", "Business Website", "Responsive Design"]
  },
  
  {
    id: 5,
    slug: "biit-institute",
    title: "BIIT Institute",
    category: "Educational Website",
    shortDescription: "An educational website built for BIIT Institute featuring course details, admission information, and an easy-to-navigate responsive design suitable for students and parents.",
    fullDescription: `BIIT Institute website serves as a comprehensive digital platform for an educational institution. The project focuses on making information easily accessible to students, parents, and prospective learners.

The website provides detailed course information, admission procedures, faculty profiles, and campus facilities. The design prioritizes clarity and ease of navigation, understanding that users may be accessing from various technical backgrounds.

Special features include a course catalog, admission form, and contact information prominently displayed. The responsive design ensures students can access information on any device, which is crucial for modern educational institutions.`,
    
    images: [
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283587/BIIT_Institute_Educational_Website_kief2w.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283587/BIIT_Institute_Educational_Website_kief2w.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763283587/BIIT_Institute_Educational_Website_kief2w.png"
    ],
    
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    
    features: [
      "Comprehensive course catalog with details",
      "Admission information and procedures",
      "Faculty and staff profiles",
      "Campus facilities showcase",
      "Events and announcements section",
      "Contact form for inquiries",
      "Responsive design for all devices",
      "Easy navigation menu",
      "Search functionality for courses",
      "Download section for brochures and forms"
    ],
    
    challenges: [
      "Organizing diverse educational content effectively",
      "Making the site accessible to users of all ages",
      "Presenting course information in an engaging way"
    ],
    
    solutions: [
      "Created clear information architecture with logical sections",
      "Used large fonts and clear contrasts for accessibility",
      "Designed attractive course cards with key information",
      "Implemented breadcrumb navigation for easy orientation"
    ],
    
    results: {
      accessibility: "WCAG 2.1 AA compliant",
      engagement: "50% increase in online inquiries",
      usability: "Reduced bounce rate by 30%"
    },
    
    liveLink: "https://imrehmankhan.github.io/biit.github.io/",
    githubLink: "https://github.com/ImRehmankhan/biit.github.io",
    
    clientType: "Educational Institution",
    duration: "2 months",
    myRole: "Frontend Developer",
    teamSize: "Solo Project",
    
    tags: ["React.js", "Educational", "Responsive Design", "Accessibility"]
  },
  
  {
    id: 6,
    slug: "nextcodehub-blog",
    title: "NextCodeHub",
    category: "Blog Website",
    shortDescription: "A modern blog platform focused on React.js and React Native content, offering featured posts, category browsing, and a clean reading experience with full responsiveness.",
    fullDescription: `NextCodeHub is a technical blog platform dedicated to React.js and React Native development. This project showcases the ability to create content-focused websites with excellent reading experiences.

The platform features a clean, distraction-free reading interface that puts content first. Articles are organized by categories and tags, making it easy for developers to find relevant tutorials and guides.

Built with modern web technologies, the blog loads quickly and provides smooth navigation between posts. The responsive design ensures code snippets and technical content display perfectly on all devices.`,
    
    images: [
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763821944/Blog_Tech_mock_cvb9n3.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763821944/Blog_Tech_mock_cvb9n3.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1763821944/Blog_Tech_mock_cvb9n3.png"
    ],
    
    technologies: ["Next.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    
    features: [
      "Clean and readable blog post layout",
      "Category and tag-based organization",
      "Featured posts section",
      "Code syntax highlighting",
      "Reading time estimation",
      "Related posts suggestions",
      "Search functionality",
      "Responsive images",
      "Social sharing buttons",
      "SEO-optimized blog structure",
      "Fast page navigation",
      "Mobile-friendly code blocks"
    ],
    
    challenges: [
      "Creating readable code snippets on mobile devices",
      "Organizing technical content effectively",
      "Ensuring fast load times with rich content",
      "Implementing effective search functionality"
    ],
    
    solutions: [
      "Implemented horizontal scroll for code blocks on mobile",
      "Created intuitive category and tag system",
      "Used Next.js for optimized page loads",
      "Built custom search with category filtering"
    ],
    
    results: {
      readability: "High engagement with 4+ min avg. reading time",
      performance: "98 Google PageSpeed score",
      seo: "Ranking for 20+ React-related keywords"
    },
    
    liveLink: "https://nextcodehub.com/",
    githubLink: "https://github.com/ImRehmankhan/nextcodehub",
    
    clientType: "Personal Project",
    duration: "2 months",
    myRole: "Full Stack Developer",
    teamSize: "Solo Project",
    
    tags: ["Next.js", "Blog", "Technical Content", "SEO", "Responsive Design"]
  },

  {
    id: 7,
    slug: "kairot-mobile-trading-platform",
    title: "Kairot - Mobile Trading & Investment Platform",
    category: "Mobile Application",
    shortDescription: "A comprehensive cross-platform mobile trading application built with React Native that enables users to trade currency pairs, manage investment portfolios, and earn through referrals with secure KYC verification.",
    
    fullDescription: `Kairot is a comprehensive cross-platform mobile application built with React Native that enables users to trade currency pairs (USD/CHF, EUR/USD, etc.), manage their investment portfolio, and earn through referrals. The app provides a complete financial ecosystem with features for deposits, withdrawals, trading, and KYC verification.

The application offers a complete financial ecosystem with real-time currency pair trading, investment calculators, and potential earnings displays. Users can securely deposit and withdraw funds with multiple preset amounts ranging from CFA 50,000 to 1,000,000.

Built with modern React Native architecture, Kairot features a modular navigation system with separated stack navigators for each feature module (HomeStack, TradeStack, PairsStack, HistoryStack, ReferralStack). The app implements a sophisticated multi-step KYC verification process with document upload capabilities and personal information collection.

The platform includes comprehensive transaction history tracking for all trades, deposits, and withdrawals with clear status indicators. A built-in referral system allows users to share codes and build teams while earning rewards. The responsive design ensures consistent styling across all screens with custom UI components and smooth animations powered by React Native Reanimated.`,
    
    images: [
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1769326022/Minimalist_Neutral_Multi_Device_Computer_Mockup_Website_Launch_Instagram_Post_dptjop.png",
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1769326022/Minimalist_Neutral_Multi_Device_Computer_Mockup_Website_Launch_Instagram_Post_4_p8sruf.png",
      
      "https://res.cloudinary.com/dzc11dpii/image/upload/v1769326044/2_nlkwmz.png",
    ],
    
    technologies: [
      "React Native 0.80.1",
      "React 19.1.0",
      "TypeScript 5.0.4",
      "React Navigation 7.x",
      "React Native Paper",
      "NativeWind 4.x",
      "React Native Gesture Handler",
      "React Native Reanimated",
      "React Native Step Indicator",
      "React Native Vector Icons"
    ],
    
    features: [
      "Real-time currency pair trading with investment calculator and potential earnings display",
      "Secure deposit and withdrawal functionality with multiple preset amounts (CFA 50,000 - 1,000,000)",
      "Built-in referral system with code sharing and team tracking",
      "Comprehensive transaction history tracking for trades, deposits, and withdrawals with status indicators",
      "Multi-step KYC verification process with document upload and personal information collection",
      "Complete user authentication flow with login, signup, and password reset functionality",
      "Personalized dashboard with balance tracking, profit/loss indicators, and team management",
      "Support for multiple trading pairs (USD/CHF, EUR/USD, GBP/USD, AUD/USD, etc.)",
      "Responsive typography and consistent styling across all 25+ screens",
      "Custom UI with Material Design components via React Native Paper",
      "Smooth animations and gesture handling for enhanced user experience",
      "Modular navigation architecture with separate stack navigators",
      "Cross-platform support for both iOS and Android",
      "Scheduled trade configuration and management",
      "Currency pairs listing with search functionality",
      "Payment confirmation and success screens",
      "5-step KYC progress tracking system",
      "Profile management and settings",
      "Balance overview and portfolio tracking",
      "Custom counter component for investment amount selection",
      "Intuitive bottom tab navigation with custom styling"
    ],
    
    challenges: [
      "Implementing complex multi-step KYC flow with progress tracking across multiple screens",
      "Creating responsive layouts that work seamlessly across different device sizes and orientations",
      "Integrating multiple icon libraries (Ionicons, FontAwesome, MaterialIcons) for consistent UI",
      "Building custom counter component for investment amount selection with smooth animations",
      "Designing intuitive bottom tab navigation with custom styling that follows Material Design guidelines",
      "Managing navigation state across 25+ screens with proper stack organization",
      "Ensuring consistent styling and typography across the entire application",
      "Implementing real-time trading calculator with accurate earnings projections",
      "Handling document uploads for KYC verification with proper validation",
      "Creating smooth transitions and animations without impacting performance"
    ],
    
    solutions: [
      "Developed modular navigation architecture with separated stack navigators (HomeStack, TradeStack, PairsStack, HistoryStack, ReferralStack) for better organization",
      "Implemented centralized shared styles system ensuring consistency across all components",
      "Used React Native Step Indicator for visual KYC progress tracking with custom styling",
      "Integrated React Native Size Matters and Responsive FontSize for device-agnostic responsive design",
      "Created reusable component-based architecture with screen-based organization",
      "Utilized NativeWind (Tailwind CSS for React Native) for rapid UI development",
      "Implemented React Native Gesture Handler and Reanimated for smooth, hardware-accelerated animations",
      "Built custom counter component with increment/decrement controls and preset amount selection",
      "Used React Native Paper for consistent Material Design components",
      "Implemented proper safe area handling with React Native Safe Area Context",
      "Created comprehensive TypeScript types for type safety and better developer experience",
      "Optimized Metro bundler configuration for faster build times"
    ],
    
    results: {
      screens: "Successfully implemented 25+ screens with consistent design",
      crossPlatform: "Single codebase supporting both iOS (Swift) and Android (Gradle)",
      userExperience: "Smooth animations and responsive design across all device sizes",
      codeQuality: "Well-organized modular architecture with reusable components",
      performance: "Hardware-accelerated animations providing 60fps user experience"
    },
    
    liveLink: "https://drive.google.com/drive/folders/1GxQ_U169HGhyUH-l9Kz-qLlA1lYwd-Jg?usp=sharing", // Mobile app - no web version
    githubLink: "https://github.com/ImRehmankhan/Kairot.git", // Replace with actual link
    
    clientType: "Fintech Startup",
    duration: "3 months",
    myRole: "Full-Stack Mobile Developer",
    teamSize: "Solo Development",
    
    technicalHighlights: [
      "React Native 0.80.1 with latest React 19.1.0",
      "TypeScript 5.0.4 for type-safe development",
      "React Navigation 7.x with custom stack navigators",
      "NativeWind 4.x for Tailwind CSS styling",
      "Multi-step KYC flow with document upload",
      "Real-time trading calculator",
      "Modular navigation architecture",
      "Cross-platform iOS and Android support",
      "Custom UI components and shared styles",
      "Smooth animations with Reanimated"
    ],
    
    keyLearnings: [
      "Modular navigation architecture is essential for large React Native applications",
      "TypeScript significantly improves code quality and reduces runtime errors",
      "Shared styles system ensures consistent design across the entire app",
      "React Native Paper provides excellent Material Design components out of the box",
      "NativeWind makes styling in React Native much faster and more maintainable",
      "Proper state management is crucial for complex multi-step flows like KYC",
      "Cross-platform development requires careful testing on both iOS and Android",
      "Performance optimization is critical for smooth animations and user experience"
    ],
    
    tags: [
      "React Native",
      "TypeScript",
      "Mobile App",
      "Cross-Platform",
      "Trading Platform",
      "Fintech",
      "React Navigation",
      "NativeWind",
      "React Native Paper",
      "KYC Verification",
      "Payment Processing",
      "Material Design",
      "iOS",
      "Android",
      "Investment App"
    ]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Helper function to get all project slugs for static generation
export const getAllProjectSlugs = () => {
  return projectsData.map(project => project.slug);
};
