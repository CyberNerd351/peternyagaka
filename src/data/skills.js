export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    subtitle: "Interactive interfaces & state management",
    skills: [
      {
        name: "React.js",
        description: "Component architecture, custom hooks, context state management",
        level: "Core",
        tag: "UI Library"
      },
      {
        name: "JavaScript (ES6+)",
        description: "Asynchronous programming, DOM manipulation, modern modular syntax",
        level: "Core",
        tag: "Language"
      },
      {
        name: "HTML5 & Semantic Markup",
        description: "Accessible document structure, semantic elements, modern web APIs",
        level: "Core",
        tag: "Web Standards"
      },
      {
        name: "CSS3 & Modern Styling",
        description: "Flexbox, Grid systems, responsive design, animations, Tailwind CSS",
        level: "Core",
        tag: "Styling"
      },
      {
        name: "Bootstrap",
        description: "Rapid responsive prototyping, grid systems, UI components",
        level: "Familiar",
        tag: "Framework"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    subtitle: "Server architecture, APIs & application logic",
    skills: [
      {
        name: "Python",
        description: "Backend scripting, automation, data processing, object-oriented design",
        level: "Core",
        tag: "Language"
      },
      {
        name: "Flask",
        description: "Lightweight REST APIs, blueprints, request handling, middleware",
        level: "Core",
        tag: "Framework"
      },
      {
        name: "Django",
        description: "MVC/MVT web architecture, ORM, authentication, admin tooling",
        level: "Familiar",
        tag: "Framework"
      },
      {
        name: "Node.js",
        description: "Server-side JavaScript runtime, event-driven I/O, npm ecosystem",
        level: "Familiar",
        tag: "Runtime"
      },
      {
        name: "REST APIs & Security",
        description: "HTTP verbs, endpoint design, JWT authentication, Flask-CORS, Flask-Limiter",
        level: "Core",
        tag: "API Design"
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    subtitle: "Relational schemas, queries & data integrity",
    skills: [
      {
        name: "MySQL",
        description: "Relational database design, foreign keys, indexing, normalized schemas",
        level: "Core",
        tag: "RDBMS"
      },
      {
        name: "SQLite",
        description: "Embedded zero-config SQL database, local transaction management",
        level: "Core",
        tag: "Embedded DB"
      },
      {
        name: "SQL & Relational Queries",
        description: "Complex joins, aggregations, transactions, schema constraints, views",
        level: "Core",
        tag: "Query Language"
      },
      {
        name: "SQLAlchemy",
        description: "Python ORM, declarative models, relationship mappings, migrations",
        level: "Core",
        tag: "ORM"
      }
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    subtitle: "Native Android apps & mobile architecture",
    skills: [
      {
        name: "Kotlin",
        description: "Modern Android development, coroutines, null safety, OOP paradigms",
        level: "Core",
        tag: "Language"
      },
      {
        name: "Android Studio & SDK",
        description: "Activity lifecycle, ViewBinding, fragments, intent routing, UI layouts",
        level: "Core",
        tag: "Mobile IDE"
      },
      {
        name: "Mobile API Integration",
        description: "REST client consumption, JSON parsing, asynchronous background operations",
        level: "Core",
        tag: "Networking"
      }
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Workflow",
    subtitle: "Version control, tooling & developer environments",
    skills: [
      {
        name: "Git & GitHub",
        description: "Version control, branching workflows, pull requests, repository management",
        level: "Core",
        tag: "VCS"
      },
      {
        name: "VS Code",
        description: "Primary development environment, extensions, debugging, linting",
        level: "Core",
        tag: "Editor"
      },
      {
        name: "Postman",
        description: "API testing, endpoint validation, header inspection, mock responses",
        level: "Core",
        tag: "Testing"
      },
      {
        name: "Linux / Bash",
        description: "Command line operations, environment variables, script execution",
        level: "Familiar",
        tag: "OS & Shell"
      }
    ]
  }
];

export const stackOverview = [
  { category: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { category: "Backend", items: ["Python", "Flask", "Django", "Node.js", "REST APIs", "JWT"] },
  { category: "Databases", items: ["MySQL", "SQLite", "SQL", "SQLAlchemy"] },
  { category: "Mobile", items: ["Kotlin", "Android Studio", "Android SDK"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Linux"] },
];
