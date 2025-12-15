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
    imageUrl: "/images/industry-image.png",
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
    imageUrl: "/images/industry-image.png",
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
    imageUrl: "/images/industry-image.png",
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
    imageUrl: "/images/industry-image.png",
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
    imageUrl: "/images/industry-image.png",
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
    imageUrl: "/images/industry-image.png",
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
    imageUrl: "/images/industry-image.png",
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

export const contactDetails = {
  address: "1401 21st ST #13807 Sacramento, CA, 95811, US",
  email: "info@mimedcarellc.com",
  phone: "+1 916-252-1833",
};
