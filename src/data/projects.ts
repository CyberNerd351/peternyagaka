import { projectImages } from './images'

/**
 * projects.ts
 * -----------------------------------------------------------------------------
 * The project register. Add, remove or reorder entries here and the homepage,
 * the case-study routes and the sitemap update themselves.
 *
 * Every repository URL below was checked against the live GitHub profile
 * (@CyberNerd351) on 8 November 2026. `liveUrl` is only filled in when the
 * deployment actually responded at that time — otherwise it is null and the UI
 * says so instead of linking to something broken.
 */

export type ProjectStatus = 'Live' | 'Complete' | 'Active' | 'Paused' | 'Practice'

export type ArchitectureLayer = {
  label: string
  description: string
}

export type Project = {
  slug: string
  name: string
  category: string
  tagline: string
  year: string
  status: ProjectStatus
  /** Honest, specific sentence about where the project stands right now. */
  statusNote: string
  featured: boolean
  shortDescription: string
  problem: string
  solution: string
  howItWorks: string[]
  architecture: ArchitectureLayer[]
  features: string[]
  technologies: string[]
  contribution: string
  /** Engineering decisions actually visible in the code. */
  decisions: string[]
  /** Trade-offs, limitations and known issues. Nothing is glossed over. */
  challenges: string[]
  /** What I would do next. Useful signal in an interview. */
  next: string[]
  /** Small factual evidence chips shown on the case-study page. */
  evidence: { label: string; value: string }[]
  repoUrl: string
  liveUrl: string | null
  /** Shown instead of a demo link when there is no verified deployment. */
  liveNote?: string
  image: (typeof projectImages)[keyof typeof projectImages]
}

export const projects: Project[] = [
  {
    slug: 'cyber-inventory-system',
    name: 'Cyber Inventory System',
    category: 'Offline-first business software',
    tagline:
      'Inventory, sales, expenses and reporting for a small cyber shop that has to keep working when the internet does not.',
    year: '2026',
    status: 'Complete',
    statusNote:
      'Version 1 is feature-complete. It installs on one Windows PC, runs with the network switched off, and is ready for daily shop use.',
    featured: true,
    shortDescription:
      'A Flask and SQLite application for a Kenyan cyber and computer accessories shop: a stock ledger, purchasing, point of sale with cash, M-Pesa and credit, expenses, reports, CSV exports, database backup and an audit trail.',
    problem:
      'A small cyber shop sells physical stock — flash disks, mice, paper, ink — alongside services like printing. Stock goes missing, cash and M-Pesa sales are not always written down, nobody can say what the month actually earned after expenses, and the internet is not reliable enough for a cloud tool. Whatever I built had to work on one Windows computer, offline, and be simple enough for a cashier to run.',
    solution:
      'A local-first web application served by Flask from the shop computer and opened in a normal browser. Every unit of stock that enters or leaves is recorded as a ledger movement rather than a number that gets overwritten, so the current quantity is always the result of a traceable history. Sales, purchases, expenses and reports all read from that same history.',
    howItWorks: [
      'On first launch the owner creates the administrator account. There is no default password. From then on staff sign in as administrator or cashier.',
      'Products are created with a category, unit, buying price, selling price and a minimum stock level for low-stock warnings. SKUs are entered by hand or generated automatically.',
      'A purchase from a supplier raises stock, writes a PURCHASE movement and updates the product’s current buying price to the latest cost while keeping the old price in history.',
      'At the point of sale the cashier scans or types a SKU, adjusts quantities, applies a discount within their limit and takes payment as cash (with change calculated), M-Pesa (reference captured) or credit for a registered customer.',
      'Completing a sale lowers stock, stores a receipt number and opens a printable receipt.',
      'Damage, loss and stock-count adjustments are recorded with a reason, so shrinkage has an explanation attached to it.',
      'Reports filter by today, yesterday, this week, this month or a custom range, and separate revenue, cost of goods sold, gross profit and operating expenses. Any report can be exported to CSV.',
      'Backups are written to a folder as timestamped database files, and a restore takes a safety copy of the live database before replacing it.',
    ],
    architecture: [
      {
        label: 'routes/',
        description:
          'Thin Flask blueprints for auth, products, categories, inventory, purchases, suppliers, customers, sales, expenses, reports, backup, audit, users and settings.',
      },
      {
        label: 'services/',
        description:
          'The business logic: sales_service, purchase_service, inventory_service, report_service and backup_service. Routes validate input; services own the rules.',
      },
      {
        label: 'database/schema.sql',
        description:
          'A normalised SQLite schema created with PRAGMA foreign_keys = ON, covering products, stock movements, purchases, sales, payments, customers, expenses and audit logs.',
      },
      {
        label: 'templates/ and static/',
        description:
          'Jinja2 templates with Bootstrap, Bootstrap Icons, Chart.js and Inter bundled locally, so nothing is fetched from a CDN at runtime.',
      },
      {
        label: 'tests/test_system.py',
        description:
          'Fifteen unittest cases covering the schema, permissions, stock consistency, payment methods, backup, restore and CSV export.',
      },
    ],
    features: [
      'Stock ledger where every change is recorded with reason, reference, user and balances before and after',
      'Point of sale with cash, M-Pesa and customer credit, with discounts capped by role',
      'Purchases and suppliers, including partly paid deliveries',
      'Customers with a credit ledger, credit limits and payment recording',
      'Damage, loss and stock-count adjustments with reason codes',
      'Expenses and profit reports that separate revenue, cost of goods, gross profit and operating costs',
      'CSV export on the reporting screens',
      'Database backup and restore with an automatic pre-restore safety copy',
      'Audit log of who did what',
      'Administrator and cashier roles with different permissions',
      'Runs entirely offline from a double-click launcher that builds its own virtual environment',
    ],
    technologies: ['Python', 'Flask', 'Jinja2', 'SQLite', 'JavaScript', 'Chart.js', 'Bootstrap', 'unittest'],
    contribution:
      'Sole developer. I gathered the requirements from how the shop actually operates, designed the schema, wrote the Flask application and its tests, and produced the README and troubleshooting guide written for a non-technical shop owner.',
    decisions: [
      'SQLite on the same machine instead of a hosted database: no accounts, no network dependency, and a backup is a file copy the owner can put on a flash disk.',
      'Stock is never edited directly. Every change goes through one movement path that records the previous balance, the new balance, a reason, a reference and the user, which makes the ledger auditable rather than merely current.',
      'Each sale line stores its cost price at the moment of sale, so historical profit does not move when a supplier changes their price.',
      'A sale that would push a product below zero is rejected server-side and nothing at all is written — the check is not left to the browser.',
      'Multi-table writes (sale header, lines, payment, stock movements, receipt, audit entry) run in one transaction and roll back together.',
      'M-Pesa is recorded by transaction reference only. Version 1 deliberately does not call the Safaricom API, so there is nothing to misconfigure and no dependency on connectivity.',
      'Bootstrap, icons, fonts and Chart.js are vendored into the repository so the interface survives a dead connection.',
    ],
    challenges: [
      'Restore is the dangerous operation: replacing the live database can destroy the only record of a day’s sales. It is administrator-only, validates the file first and writes a timestamped safety copy before swapping.',
      'Inventory valuation is estimated as current stock multiplied by current cost. FIFO is not implemented in Version 1, so the figure is honest but approximate.',
      'Passwords are stored as pbkdf2:sha256 hashes, and there is no reset path by design — recovering an account means restoring a backup.',
      'Sample products are seeded once and labelled SAMPLE DATA in their notes so demo stock cannot be mistaken for real inventory.',
    ],
    next: [
      'FIFO costing for accurate valuation and margin by batch',
      'A Daraja integration so M-Pesa references are captured automatically instead of typed in',
      'Packaging the application with PyInstaller so the shop never has to install Python',
    ],
    evidence: [
      { label: 'Automated tests', value: '15 passing' },
      { label: 'Data layer', value: 'SQLite, foreign keys on' },
      { label: 'Auth', value: 'pbkdf2:sha256 + CSRF' },
      { label: 'Runtime', value: 'Fully offline' },
    ],
    repoUrl: 'https://github.com/CyberNerd351/CyberInventorySystem',
    liveUrl: null,
    liveNote: 'No public demo — the application is designed to run on the shop’s own computer.',
    image: projectImages.cyberInventory,
  },

  {
    slug: 'butchery-management-system',
    name: 'Butchery Management System',
    category: 'Point of sale and stock control',
    tagline:
      'A deliberately small butchery system: weight-based selling, three roles, and stock that cannot be oversold.',
    year: '2026',
    status: 'Complete',
    statusNote:
      'The streamlined edition is complete and documented: 18 automated tests pass, and the repository includes an architecture note and a signed-off test report.',
    featured: true,
    shortDescription:
      'A local-first Flask application for a butchery: role-based access for administrators, managers and cashiers, a point of sale that sells by weight, purchasing, expenses, reports, printable receipts and validated database backups.',
    problem:
      'Butcheries sell by weight, not by unit, and the person behind the counter is often not the owner. That combination breaks naive inventory software: 0.65 kg of beef at KSh 750 per kilo has to come out to KSh 487.50, a cashier must not be able to change prices or restore the database, and the stock figure has to survive dozens of small sales a day without drifting.',
    solution:
      'A Flask application with a strict split between routes and services. Routes validate input and enforce permissions; a single service function owns every stock change. Money is stored as integer cents, quantities as fixed-point decimals, and a completed sale writes the header, lines, payment, stock movements, receipt and audit entry inside one transaction.',
    howItWorks: [
      'A clean install has no users. Opening the app redirects to a setup screen where the owner creates the first administrator, after which setup closes permanently.',
      'The administrator adds categories, then products with a SKU, unit (kg, g or pieces), selling price, cost price and a low-stock threshold.',
      'Stock arrives through a purchase, which is marked Paid or Due. A due purchase appears in the supplier ledger.',
      'At the point of sale the cashier searches or taps a category, edits the weight — 0.65 kg is a normal quantity — applies an optional discount and picks Cash or M-Pesa. M-Pesa requires a transaction reference.',
      'Completing the sale opens a printable receipt showing the business logo, receipt number, cashier, weights, totals, payment method and M-Pesa reference.',
      'Wastage and adjustments are recorded as movements, so a physical count can be reconciled against the ledger.',
      'Reports separate revenue, cost of goods, gross profit, operating expenses and the net result, and each one can be printed.',
      'From Settings an administrator can create a checksummed backup, or validate and restore one with a safety copy taken first.',
    ],
    architecture: [
      {
        label: 'app/__init__.py',
        description: 'Application factory with template filters, request context, security headers and error pages.',
      },
      {
        label: 'app/db.py',
        description:
          'A request-scoped SQLite connection with foreign keys enforced, WAL enabled, and a transaction context manager.',
      },
      {
        label: 'app/auth.py, security.py, decorators.py',
        description:
          'Hashed passwords, first-run setup, session identity, CSRF tokens and role or permission guards for ADMIN, MANAGER and CASHIER.',
      },
      {
        label: 'app/routes/',
        description: 'Thin blueprints for auth, dashboard, sales, inventory, purchasing, expenses, reports and administration.',
      },
      {
        label: 'app/services/',
        description:
          'inventory.change_stock() is the only code path that mutates stock. Sales, purchases, expenses, reports and backup logic each live in their own module.',
      },
      {
        label: 'tests/ with pytest',
        description:
          'Business-logic tests and HTTP tests covering roles, CSRF, decimal weight sales, negative stock, costing, backup and restore.',
      },
    ],
    features: [
      'Three roles with permission guards enforced on the server, not just hidden in the navigation',
      'Point of sale with product search, category tabs, editable decimal weights, discounts and keyboard-friendly shortcuts',
      'Cash and M-Pesa payments, where M-Pesa always requires a reference',
      'Receipt preview and print flow carrying the business logo, cashier and line detail',
      'Movement-based stock: opening balance, purchases, sales, wastage, damage and adjustments',
      'Weighted-average costing with a cost snapshot stored on every sale line',
      'Safe delete: unused records are removed, records with history are archived so reports stay intact',
      'Reports for sales, inventory, financials, suppliers and expenses, each printable',
      'Backup and restore with SHA-256 checksums, integrity validation and a pre-restore safety copy',
      'Audit history, password change, user management and business settings',
      'Dark mode, live clock, empty states, pagination and confirmation dialogs',
    ],
    technologies: ['Python', 'Flask', 'SQLite', 'Jinja2', 'Bootstrap', 'JavaScript', 'pytest'],
    contribution:
      'Sole developer. I scoped the features down on purpose, wrote the service layer and its tests, and documented both the architecture and the test results in the repository.',
    decisions: [
      'Money is stored as integer cents and quantities as four-decimal Decimal values. 0.65 kg at KSh 750/kg is asserted in the tests as exactly 48750 cents.',
      'Only one function, services.inventory.change_stock(), may move stock. It reads the product inside the write transaction, computes the new balance, rejects a negative result, updates the cached balance and inserts a movement row.',
      'The browser calculates subtotals to keep the screen responsive, but the server recalculates every line and the final total from current database prices. The server is authoritative.',
      'Products sold by piece reject fractional quantities server-side.',
      'Purchases blend incoming cost with existing stock using a weighted average, and each sale stores the cost at that moment so historical gross profit stays stable when prices change.',
      'Operational rows carry a local business date from the configured timezone (Africa/Nairobi by default), so reports do not drift with the browser’s clock.',
      'Delete is safe by design: a product with any history is archived, not removed, so foreign keys and historical reports stay valid.',
      'I cut returns, customer credit and cash reconciliation from this edition. A smaller surface is easier to operate and easier to keep correct.',
    ],
    challenges: [
      'Overselling is the failure mode that matters most. A sale is rejected inside the transaction and rolls back entirely — the test suite asserts that both the sales count and the stock level are unchanged.',
      'Reports must not call revenue profit. The financial report keeps revenue, cost of goods sold, gross profit, operating expenses and the net result as distinct figures.',
      'Restore has to survive a bad upload: empty, corrupt or incompatible SQLite files are rejected before anything is replaced.',
      'Known cleanup: the virtual environment and instance directories are committed to the repository. They should be gitignored, and the secret key and database path should come from environment variables only.',
    ],
    next: [
      'Thermal printer and barcode scanner support',
      'Move to PostgreSQL for multi-station sites',
      'A live M-Pesa adapter behind the existing service layer',
      'Remove the committed virtual environment and tighten secret handling',
    ],
    evidence: [
      { label: 'Automated tests', value: '18 passing' },
      { label: 'Roles', value: 'Admin, manager, cashier' },
      { label: 'Money', value: 'Integer cents, Decimal weights' },
      { label: 'Integrity', value: 'Transactional writes + CSRF' },
    ],
    repoUrl: 'https://github.com/CyberNerd351/ButcherySystem',
    liveUrl: null,
    liveNote: 'Runs locally with one command; there is no hosted demo because it is designed for a shop computer.',
    image: projectImages.butcherySystem,
  },

  {
    slug: 'busa-election-system',
    name: 'BUSA Election System',
    category: 'Full-stack web application',
    tagline:
      'A student association ballot with a controlled voting window, one vote per position, and results that stay sealed until the polls are closed.',
    year: '2026',
    status: 'Live',
    statusNote:
      'Deployed and reachable: the React client is on Vercel and the Flask API is hosted on PythonAnywhere against a MySQL database. Checked 8 November 2026.',
    featured: true,
    shortDescription:
      'A React front end backed by a Flask REST API and MySQL. Administrators define the election window and manage positions and candidates; voters authenticate, cast one vote per position, and see results only after polls close.',
    problem:
      'Student association elections are usually run on paper: long queues, manual tallying, arguments about who voted twice, and results leaking before the polls close. An online ballot has to solve three specific things — one vote per person per seat, a window that actually opens and closes, and tallies that cannot be read while voting is still open.',
    solution:
      'A single-page React client that talks to a Flask REST API. The election window lives on the server and every vote is checked against it. The database carries a unique constraint on voter and position, so a second attempt is rejected by the data layer rather than by the interface. Candidate counts are masked until the results are released.',
    howItWorks: [
      'An administrator signs in and configures the election: name, start time and end time. Candidates are added per position, with an image.',
      'The API reports the election as pending, active or ended, and the client shows a live countdown to the opening or closing moment.',
      'A voter signs in with an email and password. Their session is kept in browser storage so a refresh does not lose the ballot.',
      'The ballot lists each position. The voter picks one candidate per position and submits.',
      'The server re-checks the window, confirms the user exists, confirms the candidate belongs to that position, and inserts the vote. A duplicate is caught as a database integrity error and returned as a clear message.',
      'While voting is open, candidate counts are returned as zero unless the request comes from an administrator, so nobody can watch the race.',
      'Results are held for thirty minutes after the polls close, then published per position and visualised with Chart.js.',
      'The administrator dashboard can add or remove candidates, adjust a vote count when a correction is needed, and reset the election data for a fresh run.',
    ],
    architecture: [
      {
        label: 'React client (Vercel)',
        description:
          'React 19 with React Router 7, Bootstrap and React Bootstrap for layout, and Chart.js through react-chartjs-2 for results. Screens for login, home, ballot, results, FAQ, contact and the admin dashboard.',
      },
      {
        label: 'Flask REST API (PythonAnywhere)',
        description:
          'A Flask application using PyMySQL with dictionary cursors. Endpoints for voter and admin sign-in, election status, positions, candidates, voting, per-user votes, results and administration.',
      },
      {
        label: 'MySQL database',
        description:
          'Tables for elections, positions, candidates, users, votes and administrators, with a unique constraint on (user_id, position_id) enforcing one vote per position.',
      },
      {
        label: 'Cross-origin setup',
        description: 'CORS is enabled so the Vercel-hosted client can call the separately hosted API.',
      },
    ],
    features: [
      'Election window with pending, active and ended states and live countdowns',
      'Positions and candidates managed from an administrator dashboard',
      'One vote per voter per position, enforced in the database',
      'Vote counts hidden while the election is open, even from the API response',
      'Results released thirty minutes after polls close, then charted per position',
      'Administrative controls: add and remove candidates, adjust a count, set the window, reset election data',
      'Voters can review the positions they have already voted on',
      'Voter session persisted so a refresh does not interrupt the ballot',
      'FAQ and contact screens for election support',
    ],
    technologies: [
      'React',
      'React Router',
      'Chart.js',
      'Bootstrap',
      'JavaScript',
      'Flask',
      'REST API',
      'MySQL',
      'PyMySQL',
      'Python',
    ],
    contribution:
      'I built both halves: the React client and its routing and results visualisation, and the Flask API, database queries and election-rule enforcement.',
    decisions: [
      'The unique constraint on voter and position is the real enforcement. A duplicate vote raises an integrity error, which the API turns into a clear 409 response — the interface check is only a convenience.',
      'Candidate counts are returned as zero unless the caller is an administrator or the results are released. The tally cannot leak from an endpoint that never sends it.',
      'The results embargo was lengthened from five minutes to thirty to leave room for a verification pass before anything is published.',
      'Voting is rejected server-side when the election is pending or ended, so a stale tab cannot cast a late vote.',
      'The election window is stored once on the server rather than in client configuration, so every voter sees the same clock.',
      'The API serves the React build as static files, so the Flask app can host the client by itself if the Vercel deployment is unavailable.',
    ],
    challenges: [
      'The admin endpoints compare a username and password on each call and the database password sits in the Flask source. It works for a campus pilot, but the next version needs hashed passwords, real sessions and secrets from environment variables.',
      'Votes are stored against a user identifier, so the ballot is pseudonymous rather than anonymous. Separating the voter record from the ballot record would close that gap.',
      'The server compares times in UTC while the client counts down in local time. A single timezone-aware election clock would remove an entire class of off-by-hours bugs.',
      'The API opens a fresh database connection per request, which is fine at this scale but would need pooling before a large election.',
    ],
    next: [
      'Hashed passwords with session tokens instead of credential re-checks',
      'Move all secrets to environment variables',
      'Anonymous ballot tokens so a vote cannot be traced back to a voter',
      'Turnout reporting and exportable, signed results',
    ],
    evidence: [
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'API', value: 'Flask on PythonAnywhere' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Ballot rule', value: 'One vote per position' },
    ],
    repoUrl: 'https://github.com/CyberNerd351/Busa-Election-System',
    liveUrl: 'https://busa-election-system.vercel.app/',
    image: projectImages.busaElection,
  },

  {
    slug: 'grab-hub',
    name: 'Grab Hub',
    category: 'Food ordering web app',
    tagline: 'A React storefront for food orders, wired to a live product API and an M-Pesa payment flow.',
    year: '2025',
    status: 'Paused',
    statusNote:
      'The code is public and runs locally, but the Vercel deployment is no longer resolvable (checked 8 November 2026). Redeploying is the only thing standing between this and a live demo.',
    featured: true,
    shortDescription:
      'A React single-page application for browsing food, searching the menu, ordering and paying by M-Pesa, with a support form, a chat assistant route and the usual account screens.',
    problem:
      'Ordering from a food menu online should not feel like filling in a form. The catalogue has to load quickly, be searchable, look like food rather than a spreadsheet, and end in a payment step that works with how people in Kenya actually pay.',
    solution:
      'A React front end that pulls its catalogue from a hosted REST API over Axios, filters it instantly on the client, and carries the chosen item through to a payment screen that posts the phone number and amount to the API’s M-Pesa endpoint.',
    howItWorks: [
      'The storefront fetches its products from the API on load and shows them as cards with a photo, description and price.',
      'Search filters the loaded catalogue by name or description, and the filter resets itself after ten seconds so the grid never gets stuck in a filtered state.',
      'Choosing Purchase routes to the payment screen with the selected product passed along in router state.',
      'The payment screen confirms the item, collects a phone number in 254XXXXXXXXX format and posts the number and amount to the M-Pesa endpoint.',
      'Customers can rate a product out of five and like it, both captured alongside the payment request.',
      'Support questions are sent by email through EmailJS, and the app ships with about us, terms, FAQ and chat assistant screens.',
    ],
    architecture: [
      {
        label: 'React 19 with React Router 7',
        description: 'Client-side routing across storefront, account, payment, support and policy screens.',
      },
      {
        label: 'Bootstrap and React Bootstrap',
        description: 'Layout, cards, forms and the responsive grid.',
      },
      {
        label: 'Axios data layer',
        description: 'Product retrieval from the hosted API, with images served from the same host.',
      },
      {
        label: 'External services',
        description: 'EmailJS for the support form, and react-slick with slick-carousel for the promotional carousel.',
      },
    ],
    features: [
      'Product catalogue fetched from a live REST API with per-card image fallback',
      'Client-side search across product names and descriptions with automatic reset',
      'Purchase flow that carries the selected product into the payment screen',
      'M-Pesa payment request by phone number and amount',
      'Five-star product rating and a like toggle',
      'Promotional carousel on the storefront',
      'Sign in, sign up, about, terms, FAQ, contact support and chat assistant screens',
      'Framer Motion transitions on the interface elements',
    ],
    technologies: ['React', 'React Router', 'Bootstrap', 'Axios', 'JavaScript', 'Framer Motion', 'EmailJS'],
    contribution:
      'I designed and built the React front end and integrated it with the product and payment API. The API itself runs as a separate hosted service.',
    decisions: [
      'Products and images are served from the same host as the API, so there is only one backend to keep in sync and no separate asset pipeline.',
      'Search runs against the already-loaded catalogue rather than hitting the API per keystroke: instant for the user, and cheap for the server.',
      'Each product card carries an image fallback so a missing photo cannot break the grid.',
      'Payment is collected as a phone number and amount and handed to the API, keeping any provider credential on the server rather than in the browser.',
    ],
    challenges: [
      'The cart holds a single product passed through router state. There is no quantity selection, no persistent cart and no order history yet, which is the clear gap between this and a production storefront.',
      'The Vercel deployment has expired, so I currently have no hosted demo to point at. That is a deployment task, not a code problem.',
      'Rating and like state are local to the screen and are not persisted anywhere.',
    ],
    next: [
      'A real cart with quantities and an order summary',
      'Persist orders and show order history',
      'Handle the M-Pesa callback so the interface shows confirmed payment, not just a submitted request',
      'Redeploy and keep the demo link alive',
    ],
    evidence: [
      { label: 'Interface', value: 'React 19 SPA' },
      { label: 'Data', value: 'REST API via Axios' },
      { label: 'Payments', value: 'M-Pesa request flow' },
      { label: 'Demo', value: 'Redeployment needed' },
    ],
    repoUrl: 'https://github.com/CyberNerd351/Grab_Hub',
    liveUrl: null,
    liveNote: 'The previous Vercel deployment returned “deployment not found” when last checked on 8 November 2026.',
    image: projectImages.grabHub,
  },

  {
    slug: 'richwrld-fashion-collections',
    name: 'Richwrld Fashion Collections',
    category: 'Responsive catalogue site',
    tagline: 'A static fashion catalogue that loads fast, scales to any screen and needs no build step.',
    year: '2025',
    status: 'Live',
    statusNote: 'Deployed and reachable on Vercel (checked 8 November 2026).',
    featured: false,
    shortDescription:
      'A four-page clothing catalogue built with HTML, CSS and Bootstrap: separate menswear, womenswear and children’s ranges, a promotional carousel and a responsive image grid.',
    problem:
      'A clothing retailer needs a catalogue that can be browsed on a phone, split by range, updated without a developer, and hosted for nothing. Much of the audience is on mobile data, so page weight matters more than cleverness.',
    solution:
      'Plain pages and assets. Bootstrap’s grid handles the responsive layout, the stylesheet and scripts are vendored into the repository, and the whole thing deploys as static files with no bundler, no framework and no runtime dependency on a CDN.',
    howItWorks: [
      'The home page introduces the brand and carries the promotional carousel.',
      'Menswear, womenswear and children’s ranges each have their own page built on the same twelve-column grid.',
      'Product images sit in tiles that scale with the viewport and zoom slightly on hover.',
      'Footer links point to the shop’s social profiles.',
      'Deployment is a static upload: there is no build step and nothing to install.',
    ],
    architecture: [
      {
        label: 'Static pages',
        description: 'index.html plus male.html, female.html and children.html, sharing one vendored Bootstrap build.',
      },
      {
        label: 'Bootstrap grid',
        description: 'Responsive columns and utility classes, with the CSS bundled locally rather than loaded from a CDN.',
      },
      {
        label: 'Image catalogue',
        description: 'Product photography organised by range and served directly from the deployment.',
      },
    ],
    features: [
      'Four responsive pages: home, menswear, womenswear and children',
      'Product grid that reflows from a single column on a phone to multiple columns on a desktop',
      'Promotional carousel for campaigns',
      'Subtle hover zoom on product imagery',
      'Vendored Bootstrap and JavaScript, so the site works without a CDN',
      'Social links in the footer',
      'Zero build step — deploy the folder as it is',
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Vercel'],
    contribution:
      'Sole developer: page structure, the responsive grid, image preparation, the styling details and the deployment.',
    decisions: [
      'No framework and no bundler. For a catalogue that changes rarely, static files are faster to load, cheaper to host and simpler to hand over.',
      'Bootstrap is vendored rather than loaded from a CDN so the site stays usable on a slow or filtered connection.',
      'Ranges are split across pages instead of filtered on one page, which keeps each page light and makes a deep link to a range possible.',
    ],
    challenges: [
      'Every product is hard-coded in HTML, so adding stock means editing a page. Moving the catalogue into a data file and generating the tiles would remove that friction.',
      'Several stylesheet link tags point at HTML pages instead of CSS files. They do no damage, but they should be removed.',
      'With no build step there is no image optimisation in the pipeline, so photography has to be prepared before it is committed.',
    ],
    next: [
      'Move product data into JSON and render the tiles from it',
      'Add a cart or an enquiry form connected to a real backend',
      'Generate responsive image sizes automatically',
    ],
    evidence: [
      { label: 'Deployment', value: 'Live on Vercel' },
      { label: 'Build step', value: 'None' },
      { label: 'Dependencies', value: 'Vendored Bootstrap' },
      { label: 'Layout', value: 'Mobile-first grid' },
    ],
    repoUrl: 'https://github.com/CyberNerd351/RichwrldFashionCollections',
    liveUrl: 'https://richwrld-fashion-collections.vercel.app/',
    image: projectImages.richwrldFashion,
  },

  {
    slug: 'applied-data-science-notebooks',
    name: 'Applied Data Science Notebooks',
    category: 'Data analysis and machine learning',
    tagline: 'Working through real datasets from first look to an honestly scored baseline model.',
    year: '2025',
    status: 'Practice',
    statusNote:
      'A learning repository, kept public on purpose. It is practice work, not production modelling, and it is labelled that way.',
    featured: false,
    shortDescription:
      'Five Jupyter notebooks and six datasets: exploratory analysis with pandas, Matplotlib and Seaborn, then classification baselines with scikit-learn on loan approval, diabetes and general classification datasets.',
    problem:
      'Reading about a technique and being able to use it are different things. I wanted a record of doing the whole loop myself — load a dataset, look at it properly, find what is wrong with it, visualise what matters, fit a model and then judge the result honestly instead of quoting a single number.',
    solution:
      'One notebook per dataset, each readable on its own: an exploratory notebook working across several datasets, and four modelling notebooks that follow the same shape — load, split, fit a k-nearest-neighbours classifier, score it.',
    howItWorks: [
      'The exploratory notebook loads a bank dataset, a supermarket sales dataset and a recipe dataset, then works through summary statistics and distributions.',
      'Visualisations are built with Seaborn and Matplotlib: count plots, bar plots, a payment-method breakdown, and a time series of sales formatted by month.',
      'Each modelling notebook loads a CSV, separates features from the target, splits into training and test sets with train_test_split, fits a k-nearest-neighbours classifier and reports accuracy.',
      'The datasets — bank, supermarket, recipe, family suitability, loan approval and Pima Indians diabetes — are committed alongside the notebooks so every result can be reproduced.',
    ],
    architecture: [
      {
        label: 'Exploratory analysis',
        description:
          'EDA.ipynb with pandas for loading and summary statistics, and Seaborn and Matplotlib for distributions, comparisons and time series.',
      },
      {
        label: 'Modelling notebooks',
        description:
          'Classification.ipynb, MachineLearning.ipynb, LoanApproval.ipynb and PimaIndians.ipynb, each fitting a scikit-learn k-nearest-neighbours classifier and scoring it with accuracy_score.',
      },
      {
        label: 'Datasets',
        description: 'Six CSVs committed to the repository so the notebooks run without any external download.',
      },
    ],
    features: [
      'Exploratory analysis across bank, supermarket and recipe datasets',
      'Distribution, comparison, composition and time-series visualisations',
      'Four classification notebooks following a consistent train, fit, score pattern',
      'Train and test splitting with scikit-learn',
      'Datasets committed so results are reproducible',
    ],
    technologies: ['Python', 'Jupyter Notebook', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn'],
    contribution: 'Sole author. The analysis, the code and the write-ups are mine.',
    decisions: [
      'One notebook per dataset, so each analysis can be read on its own without scrolling past someone else’s work.',
      'The same simple model across every dataset, which makes the scores comparable and stops the notebooks from becoming a model zoo.',
      'Datasets are committed rather than downloaded, so a notebook opened months later still runs.',
      'Time series formatted with Matplotlib date locators so monthly labels stay readable instead of overlapping.',
    ],
    challenges: [
      'Accuracy alone is a weak way to judge a classifier, especially on the imbalanced diabetes and loan datasets. Cross-validation, per-class metrics and a look at the confusion matrix are the obvious next steps.',
      'k-nearest-neighbours is used as a first baseline, not as the answer. It needs feature scaling to be meaningful and there is no preprocessing pipeline yet.',
      'The exploratory notebook mixes several datasets in one file, which is convenient while exploring but makes it harder to follow as a document.',
    ],
    next: [
      'Add cross-validation and compare against a regularised linear model',
      'Report precision, recall and confusion matrices alongside accuracy',
      'Wrap preprocessing in a scikit-learn pipeline',
      'Write up the findings as short notes next to each notebook',
    ],
    evidence: [
      { label: 'Notebooks', value: '5' },
      { label: 'Datasets', value: '6 committed' },
      { label: 'Focus', value: 'EDA and classification' },
      { label: 'Stage', value: 'Practice' },
    ],
    repoUrl: 'https://github.com/CyberNerd351/TaiDataScience',
    liveUrl: null,
    liveNote: 'Notebooks are meant to be run locally; there is no hosted demo.',
    image: projectImages.dataScience,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProject(slug: string | undefined): Project | undefined {
  if (!slug) return undefined
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }
  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  }
}
