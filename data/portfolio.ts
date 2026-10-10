export type Experience = { title: string; organization: string; dates: string; description: string };

export const portfolio = {

  name: 'Akash', initials: 'A', role: 'AI / ML & Backend Developer',

  headline: 'Building intelligent applications and reliable backends.',

  bio: 'I’m a Computer Science undergraduate exploring machine learning, artificial intelligence, and backend development. I build ML applications, AI-powered systems, data pipelines, and APIs that turn complex ideas into useful products.',

  location: 'Bengaluru, India', email: 'akashbhusnoor7@gmail.com', github: 'https://github.com/akashpatil6294', linkedin: 'https://www.linkedin.com/in/akash-bhusanoor-702077338', x: 'https://x.com/akashbhusnoor18', avatar: '/avatar.webp', resume: '/resume.pdf',

  availability: 'Seeking an internship', navigation: ['Profile', 'About', 'Projects', 'Skills', 'Education', 'Terminal', 'Contact'] as const,

  labels: { about: 'About', aboutHeading: 'A little about me.', bio: 'BIO', location: 'Location', status: 'Status', degree: 'Degree', graduation: 'Education years', x: 'X', maximize: 'Expand panel', unmaximize: 'Restore panel size', profileLink: 'GitHub profile', dark: 'DARK', light: 'LIGHT', timezone: 'IST', pdf: 'PDF', cgpa: 'CGPA', nav: 'Main navigation', brand: 'Personal workspace', explore: 'Explore my work', contact: 'Let’s connect', download: 'Download CV', back: 'Back to workspace', projectHeading: 'Ideas, made real.', skillsHeading: 'My toolkit.', educationHeading: 'Always learning.', contactHeading: 'Let’s build something useful.', contactBody: 'Have an internship opportunity or a project to discuss? Send me an email.', projectNote: 'Project preview · screenshot coming soon', repoNote: 'Explore my GitHub profile', theme: 'Toggle color theme', skip: 'Skip to content', close: 'Close panel', minimize: 'Minimize panel', restore: 'Open profile', footer: 'Designed with intention. Built with curiosity.', localTime: 'INDIA / IST', interests: 'CURRENT FOCUS', selected: 'SELECTED PROJECTS', credentials: 'CERTIFICATIONS & PROGRAMS', achievements: 'MILESTONES', cv: 'Resume', github: 'GitHub', linkedin: 'LinkedIn', email: 'Email', workflow: 'HOW I BUILD', experience: 'Experience', experienceHeading: 'Work & experience.', overview: 'Overview', stack: 'Built with', visit: 'View live project', caseStudy: 'Explore project', year: '2026' },

  contactForm: {name: 'Name', email: 'Email', message: 'Message', namePlaceholder: 'Your name', emailPlaceholder: 'you@example.com', messagePlaceholder: 'Tell me about your idea or opportunity…', submit: 'Open email draft', subject: 'Portfolio message from', note: 'Opens your email app with your message filled in.', status: 'Your email draft is ready in your email app. Send it there to complete your message.'},
  terminal: {title: 'TERMINAL / INTERACTIVE', intro: 'Explore my portfolio with a command. Try help. Use ↑ and ↓ for command history.', prompt: 'akash@portfolio ~ %', input: 'Terminal command', placeholder: 'Type a command…', run: 'Run command', help: 'Available: whoami, about, skills, contact, projects, ls, education, resume, date, clear, help', unknown: 'Command not found. Type help for available commands.', noDemo: 'No public demo provided.'},
  focus: ['Machine learning', 'Backend systems', 'Workflow automation'],

  workflow: ['Understand', 'Design', 'Build', 'Validate', 'Deploy'],

  education: { school: 'Nitte Meenakshi Institute of Technology', degree: 'B.E. in Computer Science', dates: '2024 — 2028', grade: '9.25 CGPA', location: 'Bengaluru' },

  certifications: [{name: 'MongoDB Certified Associate Atlas Administrator', issuer: 'MongoDB · 2026', url: 'https://www.credly.com/go/10sulxnG'}, {name: 'Machine Learning Specialization', issuer: 'Coursera · Andrew Ng · 2025', url: ''}, {name: 'Samsung Innovation Campus', issuer: 'AI/ML Training · 2026', url: ''}],

  achievements: ['3rd place at SMVIT Hackathon · 500+ teams', '100+ competitive programming problems solved', 'Top 10% of the batch'],

  skills: [{group: 'Languages', items: ['Python', 'C++', 'JavaScript']}, {group: 'AI & Machine Learning', items: ['TensorFlow', 'Keras', 'CNN', 'NLP basics', 'ONNX Runtime']}, {group: 'Backend & Data', items: ['FastAPI', 'Flask', 'REST APIs', 'Pandas', 'NumPy', 'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase']}, {group: 'Frontend & Tools', items: ['React', 'Vite', 'Git', 'GitHub', 'Render', 'Vercel', 'Google Sheets API', 'PyAutoGUI', 'Tampermonkey']}, {group: 'Foundations', items: ['Data structures', 'OOP', 'DBMS', 'Operating systems']}],

  experience: [] as Experience[],

  projects: [

    {slug: 'investor-platform', title: 'Investor Platform', category: 'AI / FINANCIAL ANALYSIS', symbol: '01', description: 'AI-assisted financial insights, from document to decision.', details: ['Developed a platform for document processing, financial data extraction, and KPI analysis.', 'Integrated Gemini AI and backend APIs for financial insights and structured data processing.', 'Deployed on Render with database integration.'], stack: ['Gemini AI', 'Backend APIs', 'Render'], url: 'https://investor-platform-g1kf.onrender.com/', visual: 'finance', screenshot: '/projects/investor-platform.webp'},

    {slug: 'orchestration-platform', title: 'Orchestration Platform', category: 'FULL STACK / AUTOMATION', symbol: '02', description: 'Connected workflows. Clear execution. Less repetition.', details: ['Built a full-stack workflow orchestration platform with execution, monitoring, notifications, and artifact management.', 'Developed backend APIs and workflow components.', 'Integrated AI capabilities and deployed the frontend on Vercel.'], stack: ['React', 'FastAPI', 'PostgreSQL', 'Supabase'], url: 'https://orchestration-platform-snowy.vercel.app/', visual: 'workflow', screenshot: '/projects/orchestration-platform.webp'},

    {slug: 'neurovision', title: 'NeuroVision', category: 'DEEP LEARNING / COMPUTER VISION', symbol: '03', description: 'Brain MRI classification with accessible AI explanations.', details: ['Built a custom CNN to classify four brain MRI categories, achieving 93% validation accuracy.', 'Created an API and frontend with prediction confidence, history, and report generation.', 'Integrated Gemini AI for multilingual explanations, including Kannada. Validation accuracy is a project result, not clinical validation.'], stack: ['TensorFlow', 'Keras', 'Flask', 'React', 'Gemini AI'], url: 'https://akash-neurovision.vercel.app/', visual: 'neural', screenshot: '/projects/neurovision.webp'},

    {slug: 'data-automation', title: 'Data Automation Bot', category: 'PYTHON / DATA PIPELINES', symbol: '04', description: 'Automated vehicle data extraction from Looker Studio using Python, Flask, Tampermonkey, and PyAutoGUI, with results synchronized to Google Sheets.', details: ['Automated vehicle data extraction and synchronization between Looker Studio and Google Sheets.', 'Used Python data tools and browser automation to simplify repetitive operations.'], stack: ['Python', 'Pandas', 'NumPy', 'Flask', 'Google Sheets API', 'PyAutoGUI', 'Tampermonkey'], url: '', visual: 'data', screenshot: '/projects/data-automation.webp'},

  ],

};

