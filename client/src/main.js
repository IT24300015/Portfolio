const skillCategories = [
  {
    category: 'PROGRAMMING LANGUAGES',
    skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Python'],
  },
  {
    category: 'FRAMEWORKS & LIBRARIES',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Java Spring Boot', 'FastAPI', 'React.js', 'SQLAlchemy', 'Tailwind CSS'],
  },
  {
    category: 'DATABASES',
    skills: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'CONCEPTS & PRACTICES',
    skills: [
      'CRUD Operations',
      'Object-Oriented Programming (OOP)',
      'RESTful API Design',
      'REST API Development',
      'Database Design',
      'Agile Methodology',
      'Version Control (Git/GitHub)',
      'Software Development Life Cycle (SDLC)',
      'Cybersecurity Fundamentals',
      'JWT Authentication',
      'Vulnerability Scanning',
      'AI Integration',
      'Database Migrations',
      'Containerization',
      'Cloud Deployment',
      'OWASP Security Standards',
    ],
  },
  {
    category: 'TOOLS',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Microsoft SQL Server Management Studio', 'Docker', 'Railway', 'Vercel'],
  },
  {
    category: 'SOFT SKILLS',
    skills: ['Team Leadership', 'Communication & Presentation', 'Time Management', 'Self-Learning & Adaptability', 'Customer Service Orientation'],
  },
]

const securityProjects = [
  {
    title: 'AI-Powered Web Vulnerability Scanner',
    subtitle: '2026',
    category: 'Security Project',
    image: 'public/project photo.png',
    alt: 'AI Vulnerability Scanner project photo',
    description: 'A full-stack web application that automatically scans websites for security vulnerabilities and generates professional AI-powered reports. The scanner detects SQL injection, cross-site scripting, missing security headers, exposed sensitive files, and open redirects. After each scan the Groq AI model analyzes all findings and writes a detailed remediation report with step by step fix instructions for each vulnerability found.',
    highlights: [
      'Automated detection for SQL injection, XSS, missing security headers and exposed files',
      'AI-generated remediation reports with step-by-step fixes using Groq AI',
      'Secure API with JWT authentication and scan scheduling',
      'Containerised deployment with Docker and CI/CD to Railway/Vercel',
    ],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Groq AI', 'JWT Auth', 'Railway', 'Vercel'],
    github: 'https://github.com/IT24300015/ai-vuln-scanner-v2',
    live: 'https://ai-vuln-scanner-v2.vercel.app',
    gallery: [
      { src: 'public/Home Page.png', label: 'Home Page' },
      { src: 'public/Login Page.png', label: 'Login Page' },
      { src: 'public/Register page.png', label: 'Register Page' },
      { src: 'public/Dashboard.png', label: 'Dashboard' },
      { src: 'public/New Scan Page.png', label: 'New Scan Page' },
      { src: 'public/Scan Results.png', label: 'Scan Results' },
      { src: 'public/AI Security Report.png', label: 'AI Security Report' },
    ],
  },
]

const webProjects = [
  {
    title: 'Library Management System',
    subtitle: 'Library System Management(Bomiriya Central College) | 2026',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80',
    alt: 'Library shelves and books',
    description: 'A full-stack digital library platform built to streamline book circulation, member administration, fine tracking, and reporting for Bomiriya Central College.',
    highlights: [
      'Responsive frontend interfaces for books, members, and transactions using HTML, CSS, and JavaScript',
      'Node.js and Express.js REST API connected to a normalized Microsoft SQL Server database',
      'Book issuing and return workflows with automatic overdue fine calculation',
      'PDF reporting for inventory, member records, and transaction history',
    ],
    tech: ['HTML/CSS/JS', 'Node.js', 'Express.js', 'Microsoft SQL Server'],
    github: 'https://github.com/IT24300015',
  },
  {
    title: 'Web-Based Bidding System',
    subtitle: 'Admin Management Module | 2025',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional team reviewing bidding system dashboard',
    description: 'A secure Spring Boot admin module for a team-built online bidding platform, focused on oversight, reporting, and operational control.',
    highlights: [
      'Role-based administration for user accounts, suspension, and audit trail logging',
      'Report generation and export support for bidding activity monitoring',
      'Secure input validation and SQL parameterisation to reduce injection risk',
      'Built with Java Spring Boot and SQL in a collaborative team environment',
    ],
    tech: ['Java Spring Boot', 'SQL', 'Role-Based Access', 'Reporting'],
    github: 'https://github.com/IT24300015',
  },
  {
    title: 'Online Grocery System',
    subtitle: 'Order Management Module | 2024',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Online grocery shopping and order management',
    description: 'A collaborative Java-based grocery ordering module designed to manage customer orders, processing, and delivery tracking within a broader web application.',
    highlights: [
      'CRUD-driven order lifecycle with create, confirm, cancel, and delivery tracking flows',
      'Object-oriented design with modular entity classes and service layers',
      'Integrated cleanly with inventory and user management modules developed by teammates',
      'Maintained through GitHub collaboration and peer-reviewed development practices',
    ],
    tech: ['Java', 'OOP', 'CRUD Operations', 'Order Management'],
    github: 'https://github.com/IT24300015',
  },
]

let activeProjectTopic = 'security'

function scrollToSection(selector) {
  const section = document.querySelector(selector)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}

function renderSkills() {
  const grid = document.getElementById('skills-grid')
  if (!grid) return

  grid.innerHTML = skillCategories
    .map(
      (cat) => `
      <div class="skill-card">
        <h3>${cat.category}</h3>
        <div class="tag-list">
          ${cat.skills
            .map(
              (skill) =>
                `<span class="tag">${skill}</span>`
            )
            .join('')}
        </div>
      </div>
    `
    )
    .join('')
}

function renderProjects() {
  const grid = document.getElementById('projects-grid')
  if (!grid) return

  // Security Projects (render first)
  const securityHtml = securityProjects
    .map((project) => `
      <article class="project-card security-project-card">
        <div class="project-body security-project-body">
          <div class="project-head">
            <div class="project-title-wrap">
              <h3>${project.title}</h3>
            </div>
            <div class="project-badge">${project.category}</div>
          </div>

          <div class="project-header-visual">
            <img src="${project.image}" alt="${project.alt}" loading="lazy" onerror="this.onerror=null;this.src='profile.jpeg'" class="project-header-photo" />
            <span class="project-header-year">${project.subtitle}</span>
          </div>

          <p class="project-description">${project.description}</p>

          <div class="tag-list">
            ${project.tech.map((t) => `<span class="tag">${t}</span>`).join('')}
          </div>

          <div class="project-gallery security-gallery" id="security-gallery">
            ${project.gallery
              .map((img, index) => `
                  <figure class="gallery-card ${index === 0 ? 'featured-photo' : ''}" ${index === 0 ? 'id="security-project-photo"' : ''}>
                    <img src="${img.src}" alt="${img.label}" loading="lazy" onerror="this.onerror=null;this.src='profile.jpeg'" />
                    <figcaption>${img.label}</figcaption>
                  </figure>
                `)
              .join('')}
          </div>

          <div class="project-actions">
            <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View Live Demo</a>
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">View on GitHub</a>
          </div>
        </div>
      </article>
    `)
    .join('')

  // Web Projects (render second)
  const webHtml = webProjects
    .map(
      (project) => `
      <article class="project-card">
        <img src="${project.image}" alt="${project.alt}" class="project-image" />
        <div class="project-body">
          <h3>${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
          <p>${project.description}</p>
          <div class="tag-list">
            ${project.tech
              .map((tech) => `<span class="tag">${tech}</span>`)
              .join('')}
          </div>
          <ul class="bullet-list">
            ${project.highlights
              .map((highlight) => `<li>${highlight}</li>`)
              .join('')}
          </ul>
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary full">SOURCE</a>
        </div>
      </article>
    `
    )
    .join('')

  grid.innerHTML = `
    <div class="projects-topic-switch">
      <button type="button" class="project-topic-btn ${activeProjectTopic === 'security' ? 'active' : ''}" data-project-topic="security">Security Related Projects</button>
      <button type="button" class="project-topic-btn ${activeProjectTopic === 'web' ? 'active' : ''}" data-project-topic="web">Web Design Projects</button>
    </div>

    <section class="security-section ${activeProjectTopic === 'security' ? '' : 'hidden'}" data-project-topic-panel="security">
      <h3 class="subsection-title">Security Projects</h3>
      <div class="projects-grid">${securityHtml}</div>
    </section>
    <section class="web-section ${activeProjectTopic === 'web' ? '' : 'hidden'}" data-project-topic-panel="web" style="margin-top:1.6rem;">
      <h3 class="subsection-title">Web Projects</h3>
      <div class="projects-grid">${webHtml}</div>
    </section>
  `

  grid.querySelectorAll('[data-project-topic]').forEach((button) => {
    button.addEventListener('click', () => {
      activeProjectTopic = button.getAttribute('data-project-topic') || 'security'
      renderProjects()
    })
  })

  // run lightbox setup after projects render
  setTimeout(() => setupGalleryLightbox(), 120)
}

function setupForm() {
  const form = document.getElementById('contact-form')
  const status = document.getElementById('form-status')
  if (!form || !status) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !message) {
      status.className = 'field-status error'
      status.textContent = 'Please fill all fields'
      status.classList.remove('hidden')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      status.className = 'field-status error'
      status.textContent = 'Please enter a valid email'
      status.classList.remove('hidden')
      return
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nimeshnilakshan858@gmail.com&su=${subject}&body=${body}`

    status.className = 'field-status success'
    status.textContent = 'Opening Gmail compose window...'
    status.classList.remove('hidden')

    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    form.reset()

    setTimeout(() => {
      status.classList.add('hidden')
    }, 3000)
  })
}

function setupNav() {
  const menuToggle = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden')
      mobileMenu.classList.toggle('hidden')
      menuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true')
    })
  }

  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = el.getAttribute('data-scroll')
      if (!target) return
      scrollToSection(target)
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden')
        menuToggle?.setAttribute('aria-expanded', 'false')
      }
    })
  })
}

function setupProfileImageFallback() {
  const img = document.getElementById('profile-image')
  if (!img) return

  img.addEventListener('error', () => {
    const fallbackSvg = encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800'><rect width='100%' height='100%' fill='#f0f9ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#1a3a52' font-family='Segoe UI, Arial, sans-serif' font-size='160' font-weight='bold'>N</text></svg>"
    )
    img.src = `data:image/svg+xml;utf8,${fallbackSvg}`
  })
}

function setupGalleryLightbox() {
  // create lightbox element
  if (document.getElementById('lightbox-overlay')) return
  const overlay = document.createElement('div')
  overlay.id = 'lightbox-overlay'
  overlay.style = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.8);z-index:9999;padding:24px;'
  overlay.innerHTML = `
    <div style="max-width:1100px;width:100%;">
      <button id="lightbox-close" style="float:right;background:transparent;border:none;color:#fff;font-size:18px;cursor:pointer;margin-bottom:8px;">✕</button>
      <img id="lightbox-image" src="" alt="" style="width:100%;height:auto;border-radius:8px;display:block;" />
      <div id="lightbox-caption" style="color:#dfe; margin-top:8px;text-align:left;font-weight:600"></div>
    </div>
  `
  document.body.appendChild(overlay)

  const imgEl = overlay.querySelector('#lightbox-image')
  const capEl = overlay.querySelector('#lightbox-caption')
  const closeBtn = overlay.querySelector('#lightbox-close')

  function openLightbox(src, label) {
    imgEl.src = src
    capEl.textContent = label || ''
    overlay.style.display = 'flex'
  }

  function closeLightbox() {
    overlay.style.display = 'none'
    imgEl.src = ''
  }

  closeBtn.addEventListener('click', closeLightbox)
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox() })

  // bind thumbnail buttons
  document.querySelectorAll('.thumb-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src')
      const label = btn.getAttribute('data-label')
      // set main visual too
      const parent = btn.closest('.project-visual')
      if (parent) parent.querySelector('.visual-main img').src = src
      openLightbox(src, label)
    })
  })
}

document.getElementById('current-year').textContent = String(new Date().getFullYear())
setupNav()
renderSkills()
renderProjects()
setupForm()
setupProfileImageFallback()
