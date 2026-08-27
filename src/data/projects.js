export const projects = [
  {
    id: "cyber-inventory",
    title: "Cyber Inventory Management System",
    tagline: "Transaction-Based Business Inventory & POS Architecture",
    category: "Business Systems",
    filterCategories: ["business", "web", "databases"],
    featured: true,
    badge: "Featured System",
    technologies: [
      "React.js",
      "SQLite",
      "SQL",
      "JavaScript (ES6+)",
      "Database Modeling",
      "REST Architecture",
      "Audit Logging"
    ],
    shortDescription: "A comprehensive business operations and inventory management system engineered for a Kenyan cyber shop, featuring transaction-based stock tracking, sales POS, expenses, stock valuation, and immutable audit logging.",
    overview: "Built to solve the operational chaos of small retail and cyber businesses in Kenya. Instead of treating inventory as arbitrary number fields that can simply be overwritten, the system implements strict transaction-based accounting for every unit entering or leaving the premise.",
    problem: "Small cyber cafes and electronics shops frequently face stock shrinkage, unrecorded cash transactions, inaccurate inventory counts, and zero visibility into true profit margins after operational expenses (printing paper, ink, accessories, utility bills).",
    solution: "Designed a relational, transaction-driven system that couples every stock adjustment to an explicit ledger event (Stock-In, Sale, Damaged/Lost, Supplier Return). The system automatically tracks running valuation, issues real-time low-stock alerts, generates itemized customer receipts, and preserves immutable audit logs.",
    architecture: {
      client: "Responsive React frontend with real-time state management and printable receipt rendering",
      businessLogic: "Transaction ledger engine enforcing atomic stock decrements, profit calculation, and expense balancing",
      dataLayer: "Structured SQLite relational schema with foreign key constraints, indexation on SKU/barcode, and automated backup/restore routines"
    },
    keyFeatures: [
      "Transaction-based Stock-In & Stock-Out with automated SKU generation",
      "Point of Sale (POS) checkout with instant receipt generation",
      "Supplier & Customer ledger management with payment tracking",
      "Operating Expense tracker with gross vs. net profit reconciliation",
      "Stock valuation engine (FIFO / weighted average cost analysis)",
      "Low-stock warning thresholds and automated reorder alerts",
      "Damaged & Lost stock write-off records with reason categorization",
      "System database backup & restore routines with audit trails"
    ],
    engineeringChallenges: [
      "Ensuring inventory numbers are never arbitrarily modified: engineered an event-driven stock ledger where current stock is calculated from verified transaction history.",
      "Handling offline resilience and reliable local database backups without requiring expensive server infrastructure.",
      "Designing clean data structures to handle diverse cyber services (printing, laminating, scanning) alongside physical retail stock (cables, flash drives, stationery)."
    ],
    whatILearned: [
      "Practical understanding of double-entry ledger concepts in retail software engineering.",
      "Designing relational schemas with strict data integrity rules and relational constraints in SQLite/SQL.",
      "Translating non-technical merchant workflows into intuitive, resilient software interfaces."
    ],
    github: "https://github.com/CyberNerd351",
    liveDemo: null,
    metrics: [
      { label: "Core Modules", value: "8 Modules" },
      { label: "Data Integrity", value: "Transaction-Driven" },
      { label: "Architecture", value: "Relational Ledger" }
    ]
  },
  {
    id: "smart-helbwallet",
    title: "Smart HelbWallet",
    tagline: "Multi-Tier Student Financial Allocation & Wallet Platform",
    category: "Financial / Student Support",
    filterCategories: ["mobile", "backend", "student"],
    featured: false,
    badge: "Mobile + Backend API",
    technologies: [
      "Kotlin",
      "Android Studio",
      "Python",
      "Flask",
      "MySQL",
      "REST APIs",
      "JWT Authentication"
    ],
    shortDescription: "A multi-platform student financial management application built to help higher education students budget, allocate, and safeguard HELB disbursements across tuition, emergency reserves, and living expenses.",
    overview: "Smart HelbWallet was conceptualized to address the prevalent issue of rapid student loan depletion upon semester disbursement. It provides an automated financial allocation engine that partitions incoming funds into designated purpose-driven sub-wallets.",
    problem: "When students receive their semester HELB (Higher Education Loans Board) disbursements in lump sums, lack of structured budgeting tools often leads to early-semester overspending, leaving critical expenses like exams, accommodation, and emergency medical needs unfunded.",
    solution: "Engineered an Android mobile application backed by a Flask REST API and MySQL database. The system allows students to configure automated allocation rules, segment money into locked emergency funds, tuition reserves, and weekly allowance envelopes, with deposit tracking concepts.",
    architecture: {
      client: "Native Android application written in Kotlin with clean activity workflows and reactive UI components",
      backend: "Modular Flask RESTful API delivering JWT-secured endpoints for user authentication, ledger queries, and allocation updates",
      database: "MySQL relational database modeling student profiles, wallet partitions, transaction categories, and semester disbursement cycles"
    },
    keyFeatures: [
      "Semester disbursement tracking and multi-tier wallet allocation",
      "Dedicated Investment and Emergency reserve partitions",
      "Allowance budgeting with daily/weekly spending limits",
      "M-Pesa and bank deposit concept tracking and reconciliation",
      "JWT-authenticated secure API endpoints",
      "Real-time expense categorization and financial health visualizer",
      "Native Android user interface built with Kotlin in Android Studio"
    ],
    engineeringChallenges: [
      "Architecting a clean separation between the native Kotlin mobile frontend and the Python Flask backend API.",
      "Designing strict database transaction constraints to prevent wallet overdrafts and race conditions during rapid multi-category allocations.",
      "Implementing secure JWT token storage and lifecycle management on Android devices."
    ],
    whatILearned: [
      "End-to-end mobile-to-backend API communication and error-handling patterns in Kotlin.",
      "Designing robust RESTful API contracts consumed by native mobile clients.",
      "Financial data modeling principles ensuring mathematical consistency across multiple balances."
    ],
    github: "https://github.com/CyberNerd351",
    liveDemo: null,
    metrics: [
      { label: "Platform", value: "Android + Flask API" },
      { label: "Security", value: "JWT Auth" },
      { label: "Data Store", value: "MySQL" }
    ]
  },
  {
    id: "busa-election",
    title: "BUSA Election System",
    tagline: "Multi-Seat Student Association Ballot & Governance System",
    category: "Election Management",
    filterCategories: ["backend", "web", "student"],
    featured: false,
    badge: "Governance & Security",
    technologies: [
      "Python",
      "Flask",
      "SQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Database Modeling"
    ],
    shortDescription: "A web-based election management platform developed to manage university student association voting across 8 executive leadership positions with candidate validation and single-vote enforcement.",
    overview: "Designed to replace cumbersome paper-based ballots with a verifiable, real-time election platform tailored for student associations. The system manages candidate registries, voter validation, and concurrent multi-seat balloting.",
    problem: "Manual university elections suffer from long queues, ballot tampering risks, tedious vote tallying, and delayed outcome announcements across complex executive ballots.",
    solution: "Developed a Flask-powered web platform with an underlying SQL database that securely authenticates voters, serves dynamic ballots across all 8 executive seats, enforces strict single-vote rules per student ID, and tallies results instantly upon poll closure.",
    architecture: {
      server: "Flask backend orchestrating route authentication, CSRF protection, and ballot validation logic",
      dataLayer: "Relational SQL database enforcing foreign keys across voters, candidates, positions, and encrypted vote tokens",
      frontend: "Responsive web interface presenting intuitive candidate profiles, interactive ballot selectors, and real-time administrative status boards"
    },
    keyFeatures: [
      "Multi-seat ballot management covering 8 distinct student leadership positions",
      "Candidate registration, bio presentation, and manifesto catalog",
      "Strict voter authentication ensuring each student votes exactly once",
      "Real-time administrative dashboard for monitoring voter turnout",
      "Automated tallying algorithm with instantaneous final tally computation",
      "Exportable audit logs for post-election transparency verification"
    ],
    engineeringChallenges: [
      "Enforcing atomic single-vote constraints so a voter cannot submit multiple times or tamper with individual seat selections mid-submission.",
      "Preventing voter re-identification while maintaining verifiable tally integrity.",
      "Structuring dynamic SQL queries to aggregate votes across 8 distinct positions efficiently under concurrent student traffic."
    ],
    whatILearned: [
      "Backend state management and session security in Flask applications.",
      "Practical database normalization for complex relational hierarchies (Elections -> Positions -> Candidates -> Votes).",
      "Handling high concurrency spikes common during time-limited voting windows."
    ],
    github: "https://github.com/CyberNerd351/Busa-Election-System",
    liveDemo: null,
    metrics: [
      { label: "Electoral Seats", value: "8 Positions" },
      { label: "Stack", value: "Python Flask & SQL" },
      { label: "Auditability", value: "Immutable Logs" }
    ]
  },
  {
    id: "grab-hub",
    title: "Grab Hub",
    tagline: "Food Discovery, Cart Engine & Checkout Workflow",
    category: "E-Commerce",
    filterCategories: ["ecommerce", "web"],
    featured: false,
    badge: "E-Commerce",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "M-Pesa Integration Concept",
      "State Management"
    ],
    shortDescription: "A food e-commerce and meal ordering application engineered around real-time product discovery, persistent cart state, responsive checkout workflows, and local mobile payment concepts.",
    overview: "Grab Hub is an online food ordering platform designed to provide an effortless ordering experience from menu discovery to final order confirmation, optimized for fast mobile browsing.",
    problem: "Traditional restaurant ordering interfaces are frequently sluggish on mobile devices, lose cart state on page refreshes, and lack seamless alignment with local mobile payment options like M-Pesa.",
    solution: "Engineered a fast React web application featuring dynamic category filtering, instant cart calculations with tax/delivery modifiers, responsive mobile-first checkout forms, and simulated M-Pesa STK push payment triggers.",
    architecture: {
      frontend: "Component-based React application utilizing Context API for cart persistence and active order states",
      styling: "Custom responsive CSS ensuring fluid navigation on small-screen smartphones and desktop screens",
      integration: "Asynchronous payment checkout workflow designed to interface with M-Pesa Daraja API triggers"
    },
    keyFeatures: [
      "Dynamic menu exploration with dietary and category filtering",
      "Interactive cart with real-time quantity modifiers and price calculation",
      "Structured checkout flow capturing delivery details and special instructions",
      "M-Pesa payment integration concept with phone-based STK push workflow",
      "Responsive, touch-friendly UI optimized for fast mobile loading"
    ],
    engineeringChallenges: [
      "Managing synchronized cart state across multiple viewports without unintended re-renders.",
      "Designing a clean checkout UX that minimizes user drop-off during payment initiation.",
      "Handling edge-case cart behaviors (clearing expired sessions, modifying out-of-stock items)."
    ],
    whatILearned: [
      "Advanced React state management patterns using Context and custom hooks.",
      "E-commerce funnel optimization and payment intent lifecycle design.",
      "Building accessible, touch-optimized input forms on mobile browsers."
    ],
    github: "https://github.com/CyberNerd351",
    liveDemo: null,
    metrics: [
      { label: "UI Framework", value: "React.js" },
      { label: "Payment Concept", value: "M-Pesa STK" },
      { label: "State", value: "Context API" }
    ]
  },
  {
    id: "hofistis",
    title: "Hofistis",
    tagline: "Interactive Field Hockey Gear & Stick Matcher Platform",
    category: "Sports E-Commerce",
    filterCategories: ["ecommerce", "web"],
    featured: false,
    badge: "Interactive Commerce",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS / CSS3",
      "Interactive Recommendation Engine",
      "Voice Chatbot Concept"
    ],
    shortDescription: "A specialized field hockey e-commerce platform combining structured equipment catalogs with an interactive 'Stick Matcher' diagnostic engine and conversational assistant concept.",
    overview: "Field hockey players have highly particular equipment requirements based on player position, bow profile (low bow, mid bow, pro bow), carbon percentage, and player height. Hofistis simplifies this technical selection process through guided matching.",
    problem: "Athletes frequently purchase the wrong stick curvature or carbon stiffness when shopping online due to overwhelming, jargon-heavy specification sheets without personalized guidance.",
    solution: "Created an intuitive e-commerce experience featuring an interactive 'Stick Matcher' wizard that evaluates player height, playing position, and skill level to calculate the ideal stick profile, complemented by an exploratory voice chatbot concept.",
    architecture: {
      client: "Modular React frontend with dynamic query filtering and responsive product grid displays",
      recommendationEngine: "Rule-based scoring algorithm evaluating user inputs against hockey stick geometry specifications",
      assistant: "Interactive conversational voice assistant prototype assisting users in technical gear selection"
    },
    keyFeatures: [
      "Interactive 'Stick Matcher' questionnaire matching players to optimal gear",
      "Multi-facet filtering by bow profile, carbon content, brand, and weight",
      "Detailed equipment spec breakdowns with technical explanations",
      "Conversational voice chatbot concept for hands-free queries",
      "Clean product gallery with high-resolution visual previews"
    ],
    engineeringChallenges: [
      "Translating complex sports biomechanics and stick specifications into simple, algorithmic matching rules.",
      "Creating smooth, multi-step interactive wizard transitions on mobile viewports.",
      "Structuring modular component hierarchies to enable easy catalog expansion."
    ],
    whatILearned: [
      "Building interactive decision-tree recommendation workflows in React.",
      "User-centric product discovery UX for niche technical sports equipment.",
      "State persistence across multi-step questionnaire flows."
    ],
    github: "https://github.com/CyberNerd351",
    liveDemo: null,
    metrics: [
      { label: "Experience", value: "Interactive Matcher" },
      { label: "Domain", value: "Field Hockey" },
      { label: "Stack", value: "React & JS" }
    ]
  }
];

export const projectFilterTabs = [
  { id: "all", label: "All Projects" },
  { id: "business", label: "Business Systems" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "backend", label: "Backend & APIs" },
  { id: "web", label: "Web Applications" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "student", label: "Academic / Governance" },
];
