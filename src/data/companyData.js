// Official Maviq Global Consulting FZC Company Data Source
// Extracted strictly from official Company Profile PDF

export const companyDetails = {
  name: "Maviq Global Consulting FZC",
  shortName: "Maviq Global",
  legalEntity: "Maviq Global Consulting FZC",
  tagline: "Empowering Technology Partners with Exceptional Talent & Strategic Workforce Solutions",
  brandMessage: "The Right Talent. The Right Time. The Right Impact.",
  mission: "To connect business challenges with the right technology and talent.",
  website: "https://www.maviqglobal.com",
  displayWebsite: "www.maviqglobal.com",
  email: "info@maviqglobal.com",
  postalAddress: "United Arab Emirates, PO BOX: 73111",
  regionsSummary: "UAE · Qatar · Saudi Arabia",
  regions: [
    {
      country: "United Arab Emirates",
      code: "UAE",
      phone: "+971 52372 5262",
      phoneRaw: "+971523725262",
      flag: "🇦🇪",
      description: "Regional headquarters and strategic workforce solutions for Dubai, Abu Dhabi, and Northern Emirates enterprises.",
    },
    {
      country: "Qatar",
      code: "QATAR",
      phone: "+974 5044 8731",
      phoneRaw: "+97450448731",
      flag: "🇶🇦",
      description: "Specialized technology staffing and consulting solutions supporting Qatar's growing enterprise sector.",
    },
    {
      country: "Saudi Arabia",
      code: "SAUDI ARABIA",
      phone: "+966 55165 4252",
      phoneRaw: "+966551654252",
      flag: "🇸🇦",
      description: "Strategic talent augmentation and digital consulting driving mission-critical projects across the Kingdom.",
    },
  ],
};

export const coreServices = [
  {
    id: "staff-augmentation",
    title: "Technology Staff Augmentation",
    shortTitle: "Staff Augmentation",
    description: "Provide skilled technology professionals to supplement internal teams and support changing project or workforce requirements.",
    iconName: "Users",
    scopePoints: [
      "Rapid integration into internal engineering teams",
      "Flexible short-term and multi-year engagements",
      "Vetted specialists matched to client tech stacks",
    ],
  },
  {
    id: "it-recruitment",
    title: "IT Recruitment & Executive Search",
    shortTitle: "Executive Search",
    description: "Support organizations in identifying and recruiting technology professionals and relevant leadership talent.",
    iconName: "Search",
    scopePoints: [
      "Rigorous technical vetting and leadership screening",
      "Confidential senior executive recruitment",
      "Extensive regional and international candidate pipelines",
    ],
  },
  {
    id: "project-outsourcing",
    title: "Project-Based IT Outsourcing",
    shortTitle: "Project Outsourcing",
    description: "Help businesses access technology expertise for project-based delivery and defined business requirements.",
    iconName: "FolderKanban",
    scopePoints: [
      "Milestone-based delivery governance",
      "Dedicated agile delivery squads",
      "Outcome-aligned technology execution",
    ],
  },
  {
    id: "tech-consulting",
    title: "Digital & Technology Consulting",
    shortTitle: "Technology Consulting",
    description: "Support technology initiatives through consulting aligned with business and technology objectives.",
    iconName: "Compass",
    scopePoints: [
      "Strategic digital roadmap formulation",
      "Enterprise architecture advisory",
      "Technology evaluation and modernization strategies",
    ],
  },
  {
    id: "managed-services",
    title: "Managed IT Services & Application Support",
    shortTitle: "Managed IT Services",
    description: "Support the ongoing management of IT operations, applications, and technology environments.",
    iconName: "Server",
    scopePoints: [
      "Proactive infrastructure and application upkeep",
      "Standardized operational runbooks",
      "Continuity across cloud and on-premise environments",
    ],
  },
  {
    id: "contract-staffing",
    title: "Contract Staffing & Workforce Solutions",
    shortTitle: "Contract Staffing",
    description: "Offer flexible workforce arrangements for short-term, long-term, and contractual requirements.",
    iconName: "Briefcase",
    scopePoints: [
      "Scalable contracts aligned with project cycles",
      "Transparent contractual structures",
      "Seamless talent transition and onboarding",
    ],
  },
  {
    id: "hr-payroll",
    title: "HR Provisioning & Payroll Services",
    shortTitle: "HR & Payroll",
    description: "Include HR provisioning and payroll management among the company's workforce support services.",
    iconName: "BadgeDollarSign",
    scopePoints: [
      "Regional payroll administration and statutory compliance",
      "Comprehensive workforce onboarding management",
      "Contractor benefits and records governance",
    ],
  },
  {
    id: "talent-sourcing",
    title: "Local & International Talent Sourcing",
    shortTitle: "Global Sourcing",
    description: "Support talent sourcing across local and international markets.",
    iconName: "Globe",
    scopePoints: [
      "Cross-border technology talent acquisition",
      "Local market intelligence and compliance alignment",
      "Global recruitment networks spanning key tech hubs",
    ],
  },
];

export const talentCategories = [
  {
    id: "software-dev",
    role: "Software Developers",
    discipline: "Application Engineering",
    description: "Full-stack, backend, and frontend engineers proficient in modern architectures and frameworks.",
    techTokens: ["Java", "Python", ".NET", "Node.js", "React", "Mobile"],
  },
  {
    id: "devops-eng",
    role: "DevOps Engineers",
    discipline: "Infrastructure & CI/CD",
    description: "Specialists in CI/CD pipeline automation, containerization, and infrastructure-as-code.",
    techTokens: ["Kubernetes", "Docker", "Terraform", "Jenkins", "GitLab CI"],
  },
  {
    id: "cloud-eng",
    role: "Cloud Engineers",
    discipline: "Cloud Architecture",
    description: "Engineers experienced in cloud migration, multi-cloud management, and scalable cloud solutions.",
    techTokens: ["AWS", "Microsoft Azure", "Google Cloud", "Hybrid Cloud"],
  },
  {
    id: "ai-ml",
    role: "AI / ML Specialists",
    discipline: "Applied Intelligence",
    description: "Data scientists and engineers focused on machine learning models, predictive intelligence, and AI systems.",
    techTokens: ["Machine Learning", "NLP", "Computer Vision", "LLMs", "PyTorch"],
  },
  {
    id: "erp-consultants",
    role: "ERP Consultants",
    discipline: "Enterprise Systems",
    description: "Functional and technical consultants guiding enterprise resource planning deployments and upgrades.",
    techTokens: ["SAP S/4HANA", "Oracle Cloud ERP", "Microsoft Dynamics 365"],
  },
  {
    id: "data-eng",
    role: "Data Engineers",
    discipline: "Data Platforms",
    description: "Architects of resilient data pipelines, warehouses, and big data processing ecosystems.",
    techTokens: ["Snowflake", "Spark", "SQL", "Databricks", "Kafka"],
  },
  {
    id: "project-managers",
    role: "Project Managers",
    discipline: "Delivery Leadership",
    description: "Technical project and program managers steering agile methodologies, budgets, and milestones.",
    techTokens: ["Agile / Scrum", "PMP", "Technical Delivery", "Governance"],
  },
  {
    id: "testing-eng",
    role: "Testing Engineers",
    discipline: "Quality Assurance",
    description: "QA engineers leading automated testing frameworks, load testing, and rigorous release validation.",
    techTokens: ["Selenium", "Cypress", "Test Automation", "Performance QA"],
  },
  {
    id: "noc-soc",
    role: "NOC/SOC Consultants",
    discipline: "Security & Operations",
    description: "Network and security analysts providing vigilant infrastructure monitoring, triage, and threat mitigation.",
    techTokens: ["SIEM", "Incident Triage", "Firewalls", "Network Monitoring"],
  },
];

export const managedServiceAreas = [
  {
    id: "infra-ops",
    title: "IT Infrastructure & Operation Management",
    description: "Comprehensive administration, monitoring, and ongoing maintenance of servers, storage, and operational IT environments.",
    iconName: "HardDrive",
  },
  {
    id: "app-mgmt",
    title: "Application Management",
    description: "End-to-end support for business applications, covering patch deployment, performance tuning, and operational continuity.",
    iconName: "Layers",
  },
  {
    id: "cloud-managed",
    title: "Cloud Managed Services",
    description: "Day-to-day oversight of public, private, and hybrid cloud resources with focus on efficiency, uptime, and governance.",
    iconName: "CloudCog",
  },
  {
    id: "service-desk",
    title: "IT Service Desk & End-User Support",
    description: "Responsive support channels for workplace systems, ticket management, user provisioning, and issue resolution.",
    iconName: "Headphones",
  },
  {
    id: "network-sec",
    title: "Network & Security Management",
    description: "Network configuration, perimeter protection, firewall maintenance, access governance, and security controls.",
    iconName: "ShieldCheck",
  },
  {
    id: "devops-auto",
    title: "DevOps & Automation Services",
    description: "Automated configuration management, container orchestrations, and deployment pipeline maintenance.",
    iconName: "Workflow",
  },
];

export const industriesList = [
  {
    id: "banking",
    title: "Banking & Financial Services",
    description: "Technology talent for secure core banking, fintech platforms, regulatory compliance, and risk systems.",
    iconName: "Landmark",
  },
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Specialists driving omnichannel digital storefronts, supply chain visibility, and consumer payment portals.",
    iconName: "ShoppingBag",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "IT professionals supporting clinical records, digital diagnostic systems, and healthcare operational technology.",
    iconName: "Activity",
  },
  {
    id: "logistics",
    title: "Logistics & Transportation",
    description: "Systems talent for automated routing, fleet telematics, freight management, and warehouse ERPs.",
    iconName: "Truck",
  },
  {
    id: "government",
    title: "Government & Public Sector",
    description: "Compliant technical expertise for digital citizen services, sovereign infrastructure, and public administration portals.",
    iconName: "Building2",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Infrastructure",
    description: "Consultants for industrial automation, connected asset monitoring, SCADA systems, and facility management.",
    iconName: "Factory",
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description: "Critical technology staffing for upstream and downstream software, field data acquisition, and operational safety.",
    iconName: "Flame",
  },
  {
    id: "it-telecom",
    title: "Information Technology",
    description: "Direct talent augmentation for technology providers, systems integrators, and software product engineering studios.",
    iconName: "Cpu",
  },
];

export const engagementModels = [
  {
    id: "model-staff-aug",
    title: "Staff Augmentation",
    badge: "Flexible Staffing",
    description: "Provide skilled professionals for your team on long term, short term, contractual and temporary hiring models.",
    details: "Seamlessly integrate specialized individual contributors or entire pods into your existing technical workflows.",
    keyCharacteristics: [
      "Direct technical management by client",
      "Rapid talent ramp-up and ramp-down",
      "Immediate capability injection without overhead",
    ],
  },
  {
    id: "model-project",
    title: "Project Outsourcing",
    badge: "Milestone-Based",
    description: "End-to-end project technology delivery managed by Maviq Global Consulting.",
    details: "Deliver well-scoped digital initiatives with clear deliverables, defined milestones, and accountable governance.",
    keyCharacteristics: [
      "Defined milestone deliverables and milestones",
      "Autonomous project delivery teams",
      "Structured reporting and governance reviews",
    ],
  },
  {
    id: "model-managed",
    title: "Managed Services",
    badge: "Long-Term Operations",
    description: "Long-term technology operations management by Maviq Global Consulting specialists.",
    details: "Ensure operational stability and continuous technical improvement with dedicated support infrastructure.",
    keyCharacteristics: [
      "Consistent operational oversight",
      "Standardized maintenance procedures",
      "Continuous optimization of IT assets",
    ],
  },
  {
    id: "model-exec-search",
    title: "Executive Search",
    badge: "Leadership Search",
    description: "Targeted talent acquisition for senior technology leadership, directors, and critical architects.",
    details: "Precision recruitment methodology identifying leaders who combine technical mastery with strategic executive presence.",
    keyCharacteristics: [
      "In-depth market mapping and headhunting",
      "Rigorous technical and cultural appraisal",
      "Discreet and confidential outreach",
    ],
  },
  {
    id: "model-hr-payroll",
    title: "HR Provisioning & Payroll Management",
    badge: "Workforce Administration",
    description: "Workforce administration and payroll management across local and regional jurisdictions.",
    details: "Compliant personnel onboarding, regional payroll administration, and employment records governance.",
    keyCharacteristics: [
      "Statutory compliance across UAE, Qatar, and KSA",
      "Timely and accurate salary disbursement",
      "Complete contractor lifecycle documentation",
    ],
  },
  {
    id: "model-bulk-hiring",
    title: "Mass Recruitment & Bulk Hiring",
    badge: "Large-Scale Scaling",
    description: "Support larger-scale recruitment requirements for rapid organizational expansion or major projects.",
    details: "Coordinated hiring campaigns to assemble substantial technology teams under aggressive project timelines.",
    keyCharacteristics: [
      "High-throughput candidate screening",
      "Standardized assessment frameworks",
      "Simultaneous onboarding workflows",
    ],
  },
];

export const differentiators = [
  {
    number: "01",
    title: "Access to Highly Skilled Global Talent",
    description: "Connect businesses with vetted technology professionals from extensive local and international talent pools.",
    iconName: "Globe2",
  },
  {
    number: "02",
    title: "Rapid Deployment of IT Professionals",
    description: "Support timely talent matching and onboarding based on immediate project requirements and availability.",
    iconName: "Zap",
  },
  {
    number: "03",
    title: "Cost-Effective Outsourcing Solutions",
    description: "Offer tailored staffing and workforce options designed around client budgetary and operational frameworks.",
    iconName: "TrendingUp",
  },
  {
    number: "04",
    title: "Regional Expertise",
    subtitle: "Deep understanding of local market and compliance",
    description: "Grounded in Middle Eastern markets with nuanced understanding of regional compliance and operating environments.",
    iconName: "MapPin",
  },
  {
    number: "05",
    title: "Strong Industry Expertise",
    description: "Extensive cross-sector experience spanning banking, government, energy, logistics, healthcare, and retail.",
    iconName: "Award",
  },
  {
    number: "06",
    title: "Flexible Engagement Models",
    description: "Support varied staffing, recruitment, outsourcing, and managed services models customized to client needs.",
    iconName: "Sliders",
  },
];

