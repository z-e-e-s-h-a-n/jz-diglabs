export const servicesMenu = [
  {
    label: "Web Development",
    href: "/services/web-development",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    label: "UI/UX Design",
    href: "/services/ui-ux-design",
  },
  {
    label: "Cloud & DevOps",
    href: "/services/cloud-devops",
  },
  {
    label: "MVP Development",
    href: "/services/mvp-development",
  },
  {
    label: "Maintenance & Support",
    href: "/services/maintenance-support",
  },
];

export const industriesMenu = [
  { label: "FinTech", href: "/industries/fintech" },
  { label: "HealthTech", href: "/industries/healthtech" },
  { label: "E-commerce", href: "/industries/ecommerce" },
  { label: "EdTech", href: "/industries/edtech" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Logistics", href: "/industries/logistics" },
  { label: "SaaS & Startups", href: "/industries/saas" },
];

export const caseStudyMenu = [
  {
    label: "FinTech Mobile App",
    href: "/case-study/fintech-mobile-app",
  },
  {
    label: "E-commerce Platform",
    href: "/case-study/ecommerce-platform",
  },
  {
    label: "SaaS Analytics Dashboard",
    href: "/case-study/saas-dashboard",
  },
];

export const mainMenu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    subMenu: servicesMenu,
  },
  {
    label: "Industries",
    href: "/industries",
    subMenu: industriesMenu,
  },
  {
    label: "Case Studies",
    href: "/case-study",
    subMenu: caseStudyMenu,
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const servicesDetails = [
  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "High-performance, scalable web solutions",
    description:
      "We build fast, secure, and scalable web applications tailored to your business goals using modern technologies and best practices.",
    features: [
      "Custom Web Applications",
      "Frontend (React, Next.js)",
      "Backend & REST/GraphQL APIs",
      "Performance Optimization",
      "SEO-friendly Architecture",
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    deliverables: [
      "Responsive Website",
      "Admin Dashboard",
      "API Integration",
      "Deployment & Documentation",
    ],
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Native & cross-platform mobile apps",
    description:
      "We design and develop high-quality mobile applications that deliver seamless performance and exceptional user experiences.",
    features: [
      "iOS & Android Apps",
      "Cross-platform Development",
      "App Store & Play Store Deployment",
      "Push Notifications",
      "Secure Authentication",
    ],
    techStack: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin"],
    deliverables: [
      "Mobile App (iOS & Android)",
      "Source Code",
      "App Store Submission",
      "Technical Documentation",
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Designs that convert and engage",
    description:
      "We create intuitive, user-focused designs that improve usability, engagement, and brand consistency across digital products.",
    features: [
      "User Research & Personas",
      "Wireframes & Prototypes",
      "UI Design & Design Systems",
      "Usability Testing",
      "Interaction Design",
    ],
    techStack: ["Figma", "Adobe XD", "Sketch"],
    deliverables: [
      "Wireframes",
      "High-fidelity UI Designs",
      "Design System",
      "Clickable Prototypes",
    ],
  },

  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Reliable, secure, and scalable infrastructure",
    description:
      "We help you deploy, scale, and manage cloud infrastructure with automation, security, and performance at the core.",
    features: [
      "Cloud Architecture Design",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security & Compliance",
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    deliverables: [
      "Cloud Infrastructure Setup",
      "CI/CD Pipelines",
      "Monitoring Dashboards",
      "Deployment Documentation",
    ],
  },

  {
    slug: "mvp-development",
    title: "MVP Development",
    subtitle: "Launch fast, validate faster",
    description:
      "We build MVPs that help startups and businesses validate ideas quickly with minimal cost and maximum impact.",
    features: [
      "Product Strategy & Planning",
      "Rapid Prototyping",
      "Core Feature Development",
      "User Feedback Integration",
      "Scalable Architecture",
    ],
    techStack: ["React", "Next.js", "Node.js", "Firebase"],
    deliverables: [
      "Working MVP",
      "Source Code",
      "Deployment",
      "Product Roadmap",
    ],
  },

  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    subtitle: "Keep your product running smoothly",
    description:
      "We provide ongoing maintenance, monitoring, and support to ensure your applications stay secure, stable, and up to date.",
    features: [
      "Bug Fixes",
      "Performance Monitoring",
      "Security Updates",
      "Feature Enhancements",
      "24/7 Support",
    ],
    techStack: ["AWS", "New Relic", "Sentry", "Jira"],
    deliverables: [
      "Regular Updates",
      "Performance Reports",
      "Security Patches",
      "Support Documentation",
    ],
  },
];

export const industriesDetails = [
  {
    slug: "fintech",
    title: "FinTech",
    subtitle: "Secure, scalable financial technology solutions",
    imageUrl: "/images/industry-image-1.png",
    description:
      "We build robust FinTech solutions that prioritize security, compliance, and performance while delivering seamless digital financial experiences.",
    solutions: [
      "Digital Wallets",
      "Payment Gateways",
      "Banking & Finance Platforms",
      "Fraud Detection Systems",
      "Blockchain-based Applications",
    ],
    challengesWeSolve: [
      "Data Security & Compliance",
      "High Transaction Volumes",
      "Scalability & Performance",
      "Regulatory Requirements",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Blockchain"],
    deliverables: [
      "Secure Financial Platform",
      "Admin & Analytics Dashboard",
      "API Integrations",
      "Compliance-ready Architecture",
    ],
  },

  {
    slug: "healthtech",
    title: "HealthTech",
    subtitle: "Technology that improves healthcare delivery",
    imageUrl: "/images/industry-image-2.png",
    description:
      "We develop HealthTech solutions that streamline healthcare operations and enhance patient engagement while ensuring data privacy.",
    solutions: [
      "Telemedicine Platforms",
      "Electronic Health Records (EHR)",
      "Appointment Scheduling Systems",
      "Remote Patient Monitoring",
    ],
    challengesWeSolve: [
      "HIPAA & Data Privacy",
      "System Interoperability",
      "Patient Engagement",
      "Secure Data Storage",
    ],
    techStack: ["React", "Node.js", "FHIR", "AWS", "PostgreSQL"],
    deliverables: [
      "HIPAA-compliant Application",
      "Patient & Doctor Portals",
      "Reporting & Analytics",
      "System Documentation",
    ],
  },

  {
    slug: "ecommerce",
    title: "E-commerce",
    subtitle: "High-converting online shopping experiences",
    imageUrl: "/images/industry-image-3.png",
    description:
      "We create scalable e-commerce platforms designed to boost conversions, streamline operations, and enhance customer experiences.",
    solutions: [
      "Custom E-commerce Platforms",
      "Marketplace Development",
      "Payment & Shipping Integrations",
      "Inventory Management Systems",
    ],
    challengesWeSolve: [
      "Cart Abandonment",
      "Scalability During Sales",
      "Payment Security",
      "Order Management",
    ],
    techStack: ["Next.js", "Shopify", "Stripe", "Node.js", "PostgreSQL"],
    deliverables: [
      "E-commerce Website",
      "Admin Panel",
      "Payment & Shipping Setup",
      "Analytics & Reports",
    ],
  },

  {
    slug: "edtech",
    title: "EdTech",
    subtitle: "Engaging digital learning platforms",
    imageUrl: "/images/industry-image-1.png",
    description:
      "We build EdTech platforms that empower educators and engage learners through interactive and scalable digital solutions.",
    solutions: [
      "Learning Management Systems (LMS)",
      "Virtual Classrooms",
      "Course & Content Platforms",
      "Student Progress Tracking",
    ],
    challengesWeSolve: [
      "User Engagement",
      "Scalable Content Delivery",
      "Assessment & Analytics",
      "Multi-device Accessibility",
    ],
    techStack: ["React", "Next.js", "Node.js", "AWS", "Video Streaming APIs"],
    deliverables: [
      "Learning Platform",
      "Teacher & Student Dashboards",
      "Content Management System",
      "Analytics & Reports",
    ],
  },

  {
    slug: "real-estate",
    title: "Real Estate",
    subtitle: "Digital solutions for modern real estate businesses",
    imageUrl: "/images/industry-image-2.png",
    description:
      "We develop real estate platforms that simplify property management, enhance customer experience, and drive smarter decisions.",
    solutions: [
      "Property Listing Platforms",
      "CRM for Real Estate",
      "Virtual Tours",
      "Booking & Inquiry Systems",
    ],
    challengesWeSolve: [
      "Property Data Management",
      "Lead Tracking",
      "User Experience",
      "System Integration",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Maps APIs"],
    deliverables: [
      "Property Management Platform",
      "Admin Dashboard",
      "Customer Portals",
      "Analytics & Reporting",
    ],
  },

  {
    slug: "logistics",
    title: "Logistics",
    subtitle: "Smart logistics & supply chain solutions",
    imageUrl: "/images/industry-image-3.png",
    description:
      "We build logistics platforms that optimize supply chains, improve visibility, and increase operational efficiency.",
    solutions: [
      "Fleet Management Systems",
      "Shipment Tracking Platforms",
      "Warehouse Management Systems",
      "Route Optimization",
    ],
    challengesWeSolve: [
      "Real-time Tracking",
      "Operational Efficiency",
      "Data Integration",
      "Scalability",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "IoT", "AWS"],
    deliverables: [
      "Logistics Management Platform",
      "Real-time Tracking Dashboard",
      "Reporting Tools",
      "System Documentation",
    ],
  },

  {
    slug: "saas",
    title: "SaaS & Startups",
    subtitle: "Build, scale, and grow SaaS products",
    imageUrl: "/images/industry-image-1.png",
    description:
      "We partner with startups and SaaS companies to build scalable, secure, and growth-ready software products.",
    solutions: [
      "SaaS Product Development",
      "Multi-tenant Architecture",
      "Subscription & Billing Systems",
      "MVP to Scale",
    ],
    challengesWeSolve: [
      "Rapid Time-to-Market",
      "Scalability",
      "User Retention",
      "Cost Optimization",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    deliverables: [
      "SaaS Platform",
      "Subscription & Billing Setup",
      "Admin Dashboard",
      "Product Documentation",
    ],
  },
];

export const caseStudyDetails = [
  {
    slug: "fintech-mobile-app",
    title: "FinTech Mobile App",
    subtitle: "Secure and intuitive mobile banking solution",
    imageUrl: "/images/case-study-image.png",
    description:
      "We developed a high-performance FinTech mobile app enabling users to manage accounts, transfer funds, and track expenses securely on the go.",
    challenges: [
      "Ensuring end-to-end security and compliance",
      "Handling high transaction volumes with low latency",
      "Creating intuitive UX for complex financial operations",
    ],
    solutions: [
      "Secure authentication and encryption",
      "Real-time transaction tracking",
      "Smart notifications and analytics dashboard",
      "Seamless cross-platform mobile experience",
    ],
    techStack: ["React Native", "Flutter", "Firebase", "Node.js", "AWS"],
    deliverables: [
      "iOS & Android Mobile App",
      "Admin Dashboard",
      "API Integrations",
      "Technical Documentation",
    ],
  },

  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    subtitle: "Scalable marketplace for modern online shopping",
    imageUrl: "/images/case-study-image.png",
    description:
      "We built a robust e-commerce platform that enables businesses to sell products, manage inventory, and track customer behavior efficiently.",
    challenges: [
      "High traffic handling during sales",
      "Smooth and secure payment integrations",
      "User-friendly product discovery and checkout",
    ],
    solutions: [
      "Custom product catalog and inventory management",
      "Payment gateway integrations (Stripe, PayPal)",
      "Advanced search and filtering",
      "Analytics and reporting dashboards",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    deliverables: [
      "Responsive E-commerce Website",
      "Admin Panel",
      "Payment & Shipping Setup",
      "Analytics Dashboard",
    ],
  },

  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    subtitle: "Data-driven insights for SaaS product managers",
    imageUrl: "/images/case-study-image.png",
    description:
      "We designed and developed a SaaS analytics dashboard that provides actionable insights to help businesses track KPIs and improve user engagement.",
    challenges: [
      "Visualizing large datasets efficiently",
      "Providing real-time analytics updates",
      "Ensuring multi-tenant security",
    ],
    solutions: [
      "Custom dashboard with interactive charts",
      "Role-based access control",
      "Real-time data pipelines and updates",
      "Exportable reports and analytics alerts",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Chart.js"],
    deliverables: [
      "Interactive Web Dashboard",
      "Admin Panel for Data Management",
      "API Integrations",
      "Documentation and Training Materials",
    ],
  },
];

export const experiences = [
  {
    count: 12,
    title: "Years Experience",
    separator: "+",
  },
  {
    count: 2554,
    title: "Projects Delivered",
    separator: "+",
  },
  {
    count: 180,
    title: "Happy Clients",
    separator: "+",
  },
  {
    count: 99,
    title: "Client Satisfaction",
    separator: "%",
  },
];

export const toolsStack = {
  title: "Building With the Best Tools",
  description:
    "We use modern, reliable technologies to build scalable, secure, and high-performance digital products.",

  categories: [
    {
      title: "Web Platforms",
      tools: {
        frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
        backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL"],
      },
    },

    {
      title: "Mobile Development",
      tools: {
        frameworks: ["React Native", "Flutter", "Swift", "Kotlin"],
        services: ["Firebase", "Push Notifications", "In-App Purchases"],
      },
    },

    {
      title: "Cloud & DevOps",
      tools: {
        cloudProviders: ["AWS", "Google Cloud", "Azure"],
        devops: [
          "Docker",
          "Kubernetes",
          "CI/CD Pipelines",
          "GitHub Actions",
          "Terraform",
        ],
        monitoring: ["New Relic", "Sentry", "Prometheus"],
      },
    },

    {
      title: "Databases",
      tools: {
        sql: ["PostgreSQL", "MySQL", "SQL Server"],
        nosql: ["MongoDB", "Firebase Firestore", "Redis"],
      },
    },
  ],
};

export const teams = [
  {
    name: "James Carter",
    title: "Software Architect",
    imageUrl: "/images/member-4.png",
  },
  {
    name: "Michael Thompson",
    title: "Front-End Developer",
    imageUrl: "/images/member-5.png",
  },
  {
    name: "Daniel Wilson",
    title: "Back-End Developer",
    imageUrl: "/images/member-6.png",
  },
];

export const faqs = [
  {
    question: "What services does your software agency provide?",
    answer:
      "We offer end-to-end software development services including web development, mobile app development, UI/UX design, cloud & DevOps, MVP development, and ongoing maintenance & support.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "We work with FinTech, HealthTech, E-commerce, EdTech, Real Estate, Logistics, and SaaS & startups, delivering solutions tailored to industry-specific challenges.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Yes. We collaborate with early-stage startups to build MVPs and validate ideas, and with established companies to scale, optimize, and modernize their digital products.",
  },
  {
    question: "How do you approach MVP development?",
    answer:
      "Our MVP approach focuses on rapid development, core feature prioritization, and scalability. We help you launch quickly, gather user feedback, and iterate efficiently.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We use modern technologies such as React, Next.js, Node.js, React Native, Flutter, AWS, Docker, Kubernetes, PostgreSQL, and other proven tools based on project needs.",
  },
  {
    question: "Do you provide UI/UX design services?",
    answer:
      "Yes. We provide complete UI/UX services including user research, wireframes, prototypes, design systems, and high-fidelity designs focused on usability and conversion.",
  },
  {
    question: "How do you ensure code quality and security?",
    answer:
      "We follow best practices like code reviews, automated testing, secure authentication, cloud security standards, and compliance requirements—especially for FinTech and HealthTech projects.",
  },
  {
    question: "Will my application be scalable in the future?",
    answer:
      "Absolutely. We design cloud-ready, scalable architectures that grow with your business, ensuring performance, reliability, and flexibility as demand increases.",
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Yes. We provide ongoing maintenance, performance monitoring, security updates, feature enhancements, and optional 24/7 support plans.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary by scope. MVPs typically take 6–10 weeks, while larger platforms may take several months. We provide clear timelines after requirement analysis.",
  },
  {
    question: "How do you communicate project progress?",
    answer:
      "We maintain transparent communication through regular updates, milestone reviews, and collaboration tools like Slack, Jira, and scheduled calls.",
  },
  {
    question: "Can you work with existing systems or teams?",
    answer:
      "Yes. We can integrate with existing systems, APIs, or internal teams and help modernize legacy platforms or extend current functionality.",
  },
  {
    question: "Do you sign NDAs and protect intellectual property?",
    answer:
      "Yes. We are happy to sign NDAs, and all intellectual property and source code belong to you upon project completion.",
  },
  {
    question: "How can we start a project with your team?",
    answer:
      "You can get started by contacting us through our website. We’ll schedule a discovery call to understand your goals and recommend the best solution.",
  },
];

export const contactDetails = {
  address: "1401 21st ST #13807 Sacramento, CA, 95811, US",
  email: "info@mimedcarellc.com",
  phone: "+1 916-252-1833",
};

export const testimonials = [
  {
    name: "David Anderson",
    title: "“Profesional”",
    imageUrl: "/images/testimonial-1.png",
  },
  {
    name: "Robert Lewis",
    title: "“Impressive”",
    imageUrl: "/images/testimonial-2.png",
  },
  {
    name: "John Mitchell",
    title: "“Good Quality”",
    imageUrl: "/images/testimonial-3.png",
  },
];
