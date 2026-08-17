import {
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  Link2,
  Lock,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShoppingCart,
  Wrench,
} from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", labelKey: "contactEmail", value: "felipecmarchetti@gmail.com", href: "mailto:felipecmarchetti@gmail.com" },
  { icon: Phone, label: "Telefone", labelKey: "contactPhone", value: "+55 11 96866-0968", href: "tel:+5511968660968" },
  { icon: MapPin, label: "Localização", labelKey: "contactLocation", value: "Campo Limpo Paulista, SP" },
  { icon: Link2, label: "LinkedIn", labelKey: "contactLinkedin", value: "felipe-cunha-marchetti", href: "https://www.linkedin.com/in/felipe-cunha-marchetti/" },
];

const highlights = [
  { icon: ShoppingCart, title: "E-commerce", titleKey: "highlightEcommerceTitle", textKey: "highlightEcommerceText", text: "Sistemas web, regras de negócio e suporte a usuários reais." },
  { icon: ServerCog, title: "Full-stack", titleKey: "highlightFullstackTitle", textKey: "highlightFullstackText", text: "PHP/Laravel, JavaScript, React, Vue.js e Node.js." },
  { icon: Database, title: "Dados", titleKey: "highlightDataTitle", textKey: "highlightDataText", text: "SQL Server, MySQL, MariaDB, MongoDB e investigação de dados." },
  { icon: Wrench, title: "Manutenção", titleKey: "highlightMaintenanceTitle", textKey: "highlightMaintenanceText", text: "Bugs, evolução, troubleshooting e melhoria contínua." },
];

const experiences = [
  [
    "Programador PHP Pleno",
    "roleMidPhp",
    "ISY Sistemas",
    "Jan/2024 - atual",
    "experienceSeniorText",
    "Atuação full-stack na plataforma de e-commerce Sublimity, participando da evolução de funcionalidades, correção de bugs, análise de regras de negócio e manutenção de integrações. Trabalho com PHP, Laravel, JavaScript e SQL em rotinas que envolvem suporte a usuários reais, investigação de dados, melhorias de performance e entrega contínua de ajustes para operação comercial.",
  ],
  [
    "Programador PHP Junior",
    "roleJuniorPhp",
    "ISY Sistemas",
    "Set/2021 - Dez/2023",
    "experienceJuniorText",
    "Desenvolvimento e manutenção de módulos web, criação de consultas SQL, ajustes em telas, apoio ao suporte técnico e análise de incidentes em produção. Ganhei base forte em sustentação de sistemas, leitura de código legado, depuração de fluxos críticos e comunicação com áreas de negócio para transformar problemas operacionais em correções objetivas.",
  ],
  [
    "Instrutor de Informática",
    "roleInstructor",
    "Go Think Educação Profissional",
    "Set/2020 - Jul/2021",
    "experienceInstructorText",
    "Responsável por aulas de informática, redes, hardware e fundamentos de tecnologia para turmas com diferentes níveis de conhecimento. A experiência fortaleceu minha didática, organização de conteúdo, comunicação técnica e capacidade de explicar problemas complexos de forma simples.",
  ],
  [
    "Suporte de TI",
    "roleSupport",
    "GZ Sistemas Automação Comercial",
    "Nov/2019 - Set/2020",
    "experienceSupportText",
    "Atendimento e diagnóstico de incidentes em ambiente de automação comercial, auxiliando usuários na resolução de problemas operacionais, configuração de sistemas e identificação de falhas recorrentes. Foi uma base importante para entender urgência de negócio, suporte em produção e impacto real de software no dia a dia das empresas.",
  ],
  [
    "Estagiário de TI",
    "roleIntern",
    "Secretaria de Educação de Francisco Morato",
    "Mar/2018 - Out/2019",
    "experienceInternText",
    "Atuação generalista em TI, apoiando infraestrutura, redes, servidores, manutenção preventiva e corretiva, suporte a usuários, montagem e manutenção de computadores e padronização de sistemas. A experiência deu uma base prática forte em operação, diagnóstico, organização de ambientes e resolução de problemas técnicos em diferentes frentes.",
  ],
];

const skillGroups = [
  {
    icon: Code2,
    title: "Linguagens",
    titleKey: "skillLanguages",
    skills: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    ],
  },
  {
    icon: Cpu,
    title: "Front-end",
    titleKey: "skillFrontend",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    ],
  },
  {
    icon: ServerCog,
    title: "Back-end",
    titleKey: "skillBackend",
    skills: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "REST APIs", icon: "/assets/api-icon.svg" },
    ],
  },
  {
    icon: Database,
    title: "Databases & BaaS",
    titleKey: "skillDatabase",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    titleKey: "skillDevops",
    skills: [
      { name: "AWS / S3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
      { name: "CI/CD", icon: "/assets/cicd-icon.svg" },
    ],
  },
  {
    icon: Wrench,
    title: "AI & Tools",
    titleKey: "skillAi",
    skills: [
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "AI-assisted workflow", icon: "/assets/ai-workflow-icon.svg" },
    ],
  },
];

const projects = [
  {
    name: "Sublimity Ecommerce",
    kindKey: "projectSublimityKind",
    kind: "Projeto profissional",
    textKey: "projectSublimityText",
    text: "E-commerce real em produção, com evolução de funcionalidades, manutenção, suporte a usuários, análise de regras de negócio e investigação de dados.",
    tags: ["PHP", "Laravel", "JavaScript", "SQL"],
    logo: "/assets/project-sublimity-logo.svg",
    locked: true,
  },
  {
    name: "MamaEliza",
    kindKey: "projectMamaElizaKind",
    kind: "Projeto autoral",
    textKey: "projectMamaElizaText",
    text: "Cardápio online para pedidos no estilo delivery, com visão do cliente e painel administrativo completo para pedidos, produtos, ingredientes, caixa e relatórios.",
    tags: ["PHP", "Laravel", "JavaScript", "CSS"],
    logo: "/assets/project-mamaeliza-logo.png",
    locked: true,
  },
  {
    name: "PDV Online",
    kindKey: "projectPdvKind",
    kind: "Projeto autoral",
    textKey: "projectPdvText",
    text: "PDV web simplificado para vendas sem emissão fiscal, com estoque, faturamento, descontos por valor ou porcentagem e promoções progressivas.",
    tags: ["PHP", "JavaScript", "CSS"],
    logo: "/assets/project-pdv-logo.png",
    locked: true,
  },
  {
    name: "EasyFarma",
    kindKey: "projectEasyFarmaKind",
    kind: "Projeto offline",
    textKey: "projectEasyFarmaText",
    text: "Sistema desktop para farmácias, com venda, cadastro de produtos e controle de estoque em rede local, funcionando offline em múltiplos computadores.",
    tags: ["Java", "Rede local", "Banco offline"],
    logo: "/assets/project-easyfarma-logo.png",
    locked: true,
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <aside className="sidebar" data-spotlight>
        <div className="avatar" aria-hidden="true">
          <img src="/assets/felipe-marchetti-profile.png" alt="" />
        </div>
        <p className="status" data-i18n="status">Open to work</p>
        <h1>Felipe Cunha Marchetti</h1>
        <p className="role">Full-Stack Web Developer</p>

        <div className="language-toggle" aria-label="Language selector">
          <button className="active" type="button" data-lang-switch="pt">
            <img alt="" src="https://flagcdn.com/w20/br.png" /> PT
          </button>
          <button type="button" data-lang-switch="en">
            <img alt="" src="https://flagcdn.com/w20/us.png" /> EN
          </button>
        </div>

        <div className="contact-list">
          {contacts.map(({ icon: Icon, label, labelKey, value, href }) => {
            const content = (
              <>
                <span className="contact-icon"><Icon size={17} /></span>
                <span>
                  <small data-i18n={labelKey}>{label}</small>
                  {value}
                </span>
              </>
            );

            return href ? (
              <a href={href} key={label}>{content}</a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        <div className="download-row single">
          <a data-resume-link href="/cv/felipe-marchetti-curriculo-fullstack-pt.pdf">
            <Download size={16} /> <span data-i18n="resumeButton">Currículo</span>
          </a>
        </div>
      </aside>

      <section className="main-card" data-spotlight>
        <nav
          className="nav"
          style={{ left: 0, position: "fixed", right: 0, top: 0, zIndex: 50 }}
          aria-label="Portfolio"
        >
          <a href="#about" data-i18n="navAbout">Sobre</a>
          <a href="#resume" data-i18n="navResume">Experiências</a>
          <a href="#skills" data-i18n="navSkills">Skills</a>
          <a href="#projects" data-i18n="navProjects">Projetos</a>
          <a href="#contact" data-i18n="navContact">Contato</a>
        </nav>

        <section className="section intro" id="about">
          <p className="eyebrow">Web developer</p>
          <h2 data-i18n="heroTitle">Full-stack focado em e-commerce, sistemas web e dados.</h2>
          <p data-i18n="heroText">
            Desenvolvo e mantenho produtos web com PHP, Laravel, JavaScript e SQL,
            equilibrando entrega, suporte e qualidade técnica.
          </p>

          <div className="highlight-grid">
            {highlights.map(({ icon: Icon, title, titleKey, textKey, text }) => (
              <article className="highlight-card" data-spotlight key={title}>
                <Icon size={22} />
                <div>
                  <h3 data-i18n={titleKey}>{title}</h3>
                  <p data-i18n={textKey}>{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-panel" data-spotlight>
            <h3 data-i18n="aboutMeTitle">Sobre mim</h3>
            <p data-i18n="aboutMeText">
              Sou formado em Ciência da Computação, tenho mais de 5 anos de experiência codando
              e gosto de construir soluções web com visão prática de produto, suporte e operação.
            </p>
            <div className="about-facts">
              <div className="about-fact">
                <img src="/assets/degree-icon.svg" alt="" />
                <span data-i18n="degreeFact">Bacharel em Ciência da Computação</span>
              </div>
              <div className="about-fact">
                <img src="/assets/coding-icon.svg" alt="" />
                <span data-i18n="codingFact">5+ anos codando</span>
              </div>
              <div className="about-fact">
                <img src="/assets/portuguese-icon.svg" alt="" />
                <span data-i18n="portugueseFact">Português nativo</span>
              </div>
              <div className="about-fact">
                <img src="/assets/english-icon.svg" alt="" />
                <span data-i18n="englishFact">Inglês avançado</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resume">
          <div className="section-title">
            <BriefcaseBusiness size={24} />
            <h2 data-i18n="experienceTitle">Experiência</h2>
          </div>
          <div className="timeline">
            {experiences.map(([role, roleKey, company, period, textKey, text]) => (
              <article className="timeline-item" data-spotlight key={`${role}-${period}`}>
                <span>{period}</span>
                <h3 data-i18n={roleKey}>{role}</h3>
                <strong>{company}</strong>
                <p data-i18n={textKey}>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-title">
            <Database size={24} />
            <h2>Stack</h2>
          </div>
          <div className="skill-groups">
            {skillGroups.map(({ icon: Icon, title, titleKey, skills }) => (
              <article className="skill-group" data-spotlight key={title}>
                <div className="skill-group-title">
                  <Icon size={19} />
                  <h3 data-i18n={titleKey}>{title}</h3>
                </div>
                <div className="skill-list">
                  {skills.map((skill) => {
                    return (
                      <span className="tech-item" data-spotlight key={`${title}-${skill.name}`}>
                        {skill.icon ? (
                          <img src={skill.icon} alt="" loading="lazy" />
                        ) : (
                          <span className="tech-fallback" aria-hidden="true">{skill.fallback}</span>
                        )}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <ShoppingCart size={24} />
            <h2 data-i18n="projectsTitle">Projetos</h2>
          </div>
          <div className="project-carousel" data-project-carousel>
            <button className="carousel-control carousel-control-prev" type="button" aria-label="Projeto anterior" data-carousel-prev>
              <ChevronLeft size={19} />
            </button>
            <div className="project-stage">
              {projects.map(({ name, kindKey, kind, textKey, text, tags, logo, locked }, index) => (
                <article className="project-card" data-project-card={index} data-spotlight key={name}>
                  <div className="project-logo-wrap">
                    <img className="project-logo" src={logo} alt="" loading="lazy" />
                  </div>
                  <div className="project-card-body">
                    <div className="project-meta">
                      <small data-i18n={kindKey}>{kind}</small>
                      {locked ? (
                        <span className="private-badge">
                          <Lock size={13} /> <span data-i18n="privateLabel">Privado</span>
                        </span>
                      ) : null}
                    </div>
                    <h3>{name}</h3>
                    <p data-i18n={textKey}>{text}</p>
                    <div className="project-tags">
                      {tags.map((tag) => <span key={`${name}-${tag}`}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button className="carousel-control carousel-control-next" type="button" aria-label="Próximo projeto" data-carousel-next>
              <ChevronRight size={19} />
            </button>
            <div className="carousel-dots" aria-hidden="true">
              {projects.map((project, index) => <span data-carousel-dot={index} key={`${project.name}-dot`} />)}
            </div>
          </div>
        </section>

        <section className="section contact-section" data-spotlight id="contact">
          <h2 data-i18n="contactTitle">Vamos conversar?</h2>
          <p data-i18n="contactText">Disponível para oportunidades full-stack no Brasil e exterior.</p>
          <div className="contact-actions">
            <a className="primary-action" href="mailto:felipecmarchetti@gmail.com">
              <Mail size={18} /> <span data-i18n="emailButton">Enviar email</span>
            </a>
            <a className="primary-action whatsapp-action" href="https://wa.me/5511968660968" target="_blank" rel="noreferrer">
              <img src="/assets/whatsapp-icon.svg" alt="" /> WhatsApp
            </a>
          </div>
        </section>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const translations = {
                pt: {
                  status: "Open to work",
                  navAbout: "Sobre",
                  navResume: "Experiências",
                  navSkills: "Skills",
                  navProjects: "Projetos",
                  navContact: "Contato",
                  heroTitle: "Full-stack focado em e-commerce, sistemas web e dados.",
                  heroText: "Desenvolvo e mantenho produtos web com PHP, Laravel, JavaScript e SQL, equilibrando entrega, suporte e qualidade técnica.",
                  experienceTitle: "Experiência",
                  projectsTitle: "Projetos",
                  contactTitle: "Vamos conversar?",
                  contactText: "Disponível para oportunidades full-stack no Brasil e exterior.",
                  emailButton: "Enviar email",
                  resumeButton: "Currículo - PTBR",
                  resumeHref: "/cv/felipe-marchetti-curriculo-fullstack-pt.pdf",
                  htmlLang: "pt-BR",
                  contactEmail: "Email",
                  contactPhone: "Telefone",
                  contactLocation: "Localização",
                  contactLinkedin: "LinkedIn",
                  languagesTitle: "Idiomas",
                  portugueseLabel: "Português",
                  portugueseLevel: "Nativo",
                  englishLabel: "Inglês",
                  englishLevel: "Avançado",
                  aboutMeTitle: "Sobre mim",
                  aboutMeText: "Sou formado em Ciência da Computação, tenho mais de 5 anos de experiência codando e gosto de construir soluções web com visão prática de produto, suporte e operação.",
                  degreeFact: "Bacharel em Ciência da Computação",
                  codingFact: "5+ anos codando",
                  portugueseFact: "Português nativo",
                  englishFact: "Inglês avançado",
                  roleMidPhp: "Programador PHP Pleno",
                  roleJuniorPhp: "Programador PHP Junior",
                  roleInstructor: "Instrutor de Informática",
                  roleSupport: "Suporte de TI",
                  roleIntern: "Estagiário de TI",
                  highlightEcommerceTitle: "E-commerce",
                  highlightEcommerceText: "Sistemas web, regras de negócio e suporte a usuários reais.",
                  highlightFullstackTitle: "Full-stack",
                  highlightFullstackText: "PHP/Laravel, JavaScript, React, Vue.js e Node.js.",
                  highlightDataTitle: "Dados",
                  highlightDataText: "SQL Server, MySQL, MariaDB, MongoDB e investigação de dados.",
                  highlightMaintenanceTitle: "Manutenção",
                  highlightMaintenanceText: "Bugs, evolução, troubleshooting e melhoria contínua.",
                  experienceSeniorText: "Atuação full-stack na plataforma de e-commerce Sublimity, participando da evolução de funcionalidades, correção de bugs, análise de regras de negócio e manutenção de integrações. Trabalho com PHP, Laravel, JavaScript e SQL em rotinas que envolvem suporte a usuários reais, investigação de dados, melhorias de performance e entrega contínua de ajustes para operação comercial.",
                  experienceJuniorText: "Desenvolvimento e manutenção de módulos web, criação de consultas SQL, ajustes em telas, apoio ao suporte técnico e análise de incidentes em produção. Ganhei base forte em sustentação de sistemas, leitura de código legado, depuração de fluxos críticos e comunicação com áreas de negócio para transformar problemas operacionais em correções objetivas.",
                  experienceInstructorText: "Responsável por aulas de informática, redes, hardware e fundamentos de tecnologia para turmas com diferentes níveis de conhecimento. A experiência fortaleceu minha didática, organização de conteúdo, comunicação técnica e capacidade de explicar problemas complexos de forma simples.",
                  experienceSupportText: "Atendimento e diagnóstico de incidentes em ambiente de automação comercial, auxiliando usuários na resolução de problemas operacionais, configuração de sistemas e identificação de falhas recorrentes. Foi uma base importante para entender urgência de negócio, suporte em produção e impacto real de software no dia a dia das empresas.",
                  experienceInternText: "Atuação generalista em TI, apoiando infraestrutura, redes, servidores, manutenção preventiva e corretiva, suporte a usuários, montagem e manutenção de computadores e padronização de sistemas. A experiência deu uma base prática forte em operação, diagnóstico, organização de ambientes e resolução de problemas técnicos em diferentes frentes.",
                  skillLanguages: "Linguagens",
                  skillFrontend: "Front-end",
                  skillBackend: "Back-end",
                  skillDatabase: "Databases & BaaS",
                  skillDevops: "Cloud & DevOps",
                  skillAi: "AI & Tools",
                  privateLabel: "Privado",
                  projectSublimityKind: "Projeto profissional",
                  projectSublimityText: "E-commerce real em produção, com evolução de funcionalidades, manutenção, suporte a usuários, análise de regras de negócio e investigação de dados.",
                  projectMamaElizaKind: "Projeto autoral",
                  projectMamaElizaText: "Cardápio online para pedidos no estilo delivery, com visão do cliente e painel administrativo completo para pedidos, produtos, ingredientes, caixa e relatórios.",
                  projectPdvKind: "Projeto autoral",
                  projectPdvText: "PDV web simplificado para vendas sem emissão fiscal, com estoque, faturamento, descontos por valor ou porcentagem e promoções progressivas.",
                  projectEasyFarmaKind: "Projeto offline",
                  projectEasyFarmaText: "Sistema desktop para farmácias, com venda, cadastro de produtos e controle de estoque em rede local, funcionando offline em múltiplos computadores."
                },
                en: {
                  status: "Open to work",
                  navAbout: "About",
                  navResume: "Experience",
                  navSkills: "Skills",
                  navProjects: "Projects",
                  navContact: "Contact",
                  heroTitle: "Full-stack focused on e-commerce, web systems and data.",
                  heroText: "I build and maintain web products with PHP, Laravel, JavaScript and SQL, balancing delivery, support and technical quality.",
                  experienceTitle: "Experience",
                  projectsTitle: "Projects",
                  contactTitle: "Let's talk?",
                  contactText: "Available for full-stack opportunities in Brazil and abroad.",
                  emailButton: "Send email",
                  resumeButton: "Resume - EN",
                  resumeHref: "/cv/felipe-marchetti-fullstack-resume-en.pdf",
                  htmlLang: "en",
                  contactEmail: "Email",
                  contactPhone: "Phone",
                  contactLocation: "Location",
                  contactLinkedin: "LinkedIn",
                  languagesTitle: "Languages",
                  portugueseLabel: "Portuguese",
                  portugueseLevel: "Native",
                  englishLabel: "English",
                  englishLevel: "Advanced",
                  aboutMeTitle: "About me",
                  aboutMeText: "I hold a Bachelor's degree in Computer Science, have 5+ years of coding experience, and enjoy building web solutions with a practical understanding of product, support and operations.",
                  degreeFact: "B.Sc. in Computer Science",
                  codingFact: "5+ years coding",
                  portugueseFact: "Native Portuguese",
                  englishFact: "Advanced English",
                  roleMidPhp: "Mid-level PHP Developer",
                  roleJuniorPhp: "Junior PHP Developer",
                  roleInstructor: "IT Instructor",
                  roleSupport: "IT Support Technician",
                  roleIntern: "IT Intern",
                  highlightEcommerceTitle: "E-commerce",
                  highlightEcommerceText: "Web systems, business rules and support for real users.",
                  highlightFullstackTitle: "Full-stack",
                  highlightFullstackText: "PHP/Laravel, JavaScript, React, Vue.js and Node.js.",
                  highlightDataTitle: "Data",
                  highlightDataText: "SQL Server, MySQL, MariaDB, MongoDB and data investigation.",
                  highlightMaintenanceTitle: "Maintenance",
                  highlightMaintenanceText: "Bugs, evolution, troubleshooting and continuous improvement.",
                  experienceSeniorText: "Full-stack work on the Sublimity e-commerce platform, contributing to feature evolution, bug fixing, business-rule analysis and integration maintenance. I work with PHP, Laravel, JavaScript and SQL in routines involving support for real users, data investigation, performance improvements and continuous delivery of operational fixes.",
                  experienceJuniorText: "Development and maintenance of web modules, SQL query creation, screen adjustments, technical support and production incident analysis. This role gave me a strong foundation in system sustainment, legacy-code reading, critical-flow debugging and communication with business teams to turn operational problems into objective fixes.",
                  experienceInstructorText: "Responsible for teaching computer basics, networks, hardware and technology fundamentals to groups with different levels of experience. This strengthened my teaching skills, content organization, technical communication and ability to explain complex problems in a simple way.",
                  experienceSupportText: "Support and incident diagnosis in a commercial automation environment, helping users solve operational problems, configure systems and identify recurring failures. This was an important foundation for understanding business urgency, production support and the real impact of software in companies' daily routines.",
                  experienceInternText: "Generalist IT work supporting infrastructure, networks, servers, preventive and corrective maintenance, user support, computer assembly and maintenance, and system standardization. This experience gave me a strong practical foundation in operations, diagnosis, environment organization and technical problem solving across different areas.",
                  skillLanguages: "Languages",
                  skillFrontend: "Front-end",
                  skillBackend: "Back-end",
                  skillDatabase: "Databases & BaaS",
                  skillDevops: "Cloud & DevOps",
                  skillAi: "AI & Tools",
                  privateLabel: "Private",
                  projectSublimityKind: "Professional project",
                  projectSublimityText: "Production e-commerce platform with feature evolution, maintenance, user support, business-rule analysis and data investigation.",
                  projectMamaElizaKind: "Personal project",
                  projectMamaElizaText: "Online delivery menu with a customer ordering flow and a complete admin panel for orders, products, ingredients, cash closing and reports.",
                  projectPdvKind: "Personal project",
                  projectPdvText: "Simplified web POS for non-fiscal sales, with stock control, revenue view, flat or percentage discounts and progressive promotions.",
                  projectEasyFarmaKind: "Offline project",
                  projectEasyFarmaText: "Desktop system for pharmacies, with sales, product registration and stock control over a local network, running offline across multiple computers."
                }
              };

              const applyLanguage = (lang) => {
                const dictionary = translations[lang] || translations.pt;
                document.documentElement.lang = dictionary.htmlLang;
                document.querySelectorAll("[data-i18n]").forEach((node) => {
                  const key = node.dataset.i18n;
                  if (dictionary[key]) node.textContent = dictionary[key];
                });
                const resume = document.querySelector("[data-resume-link]");
                if (resume) resume.setAttribute("href", dictionary.resumeHref);
                document.querySelectorAll("[data-lang-switch]").forEach((button) => {
                  button.classList.toggle("active", button.dataset.langSwitch === lang);
                });
                localStorage.setItem("portfolioLanguage", lang);
              };

              document.querySelectorAll("[data-lang-switch]").forEach((button) => {
                button.addEventListener("click", () => applyLanguage(button.dataset.langSwitch));
              });
              applyLanguage(localStorage.getItem("portfolioLanguage") || "pt");

              const navLinks = Array.from(document.querySelectorAll(".nav a[href^='#']"));
              const sections = navLinks
                .map((link) => document.querySelector(link.getAttribute("href")))
                .filter(Boolean);
              let navFrame = 0;
              const setActiveNav = () => {
                const nav = document.querySelector(".nav");
                const navHeight = nav ? nav.getBoundingClientRect().height : 0;
                const activationLine = navHeight + 120;
                let activeId = sections[0]?.id;

                sections.forEach((section) => {
                  const triggerLine = section.id === "contact" ? window.innerHeight * 0.75 : activationLine;
                  if (section.getBoundingClientRect().top <= triggerLine) activeId = section.id;
                });

                navLinks.forEach((link) => {
                  const isActive = link.getAttribute("href") === "#" + activeId;
                  link.classList.toggle("active", isActive);
                  if (isActive) {
                    link.setAttribute("aria-current", "true");
                  } else {
                    link.removeAttribute("aria-current");
                  }
                });
              };
              const queueActiveNav = () => {
                if (navFrame) return;
                navFrame = requestAnimationFrame(() => {
                  setActiveNav();
                  navFrame = 0;
                });
              };
              window.addEventListener("scroll", queueActiveNav, { passive: true });
              window.addEventListener("resize", queueActiveNav);
              navLinks.forEach((link) => link.addEventListener("click", () => setTimeout(setActiveNav, 300)));
              setActiveNav();

              document.querySelectorAll("[data-project-carousel]").forEach((carousel) => {
                const cards = Array.from(carousel.querySelectorAll("[data-project-card]"));
                const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
                const prev = carousel.querySelector("[data-carousel-prev]");
                const next = carousel.querySelector("[data-carousel-next]");
                let activeIndex = 0;

                const sync = () => {
                  const lastIndex = cards.length - 1;
                  cards.forEach((card, index) => {
                    const isPrev = index === (activeIndex - 1 + cards.length) % cards.length;
                    const isNext = index === (activeIndex + 1) % cards.length;
                    card.dataset.carouselState =
                      index === activeIndex ? "active" :
                      isPrev ? "prev" :
                      isNext ? "next" :
                      index < activeIndex || (activeIndex === 0 && index === lastIndex) ? "before" : "after";
                  });
                  dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
                };

                const move = (direction) => {
                  activeIndex = (activeIndex + direction + cards.length) % cards.length;
                  sync();
                };

                prev?.addEventListener("click", () => move(-1));
                next?.addEventListener("click", () => move(1));
                let touchStartX = 0;
                let touchStartY = 0;
                carousel.addEventListener("touchstart", (event) => {
                  const touch = event.touches[0];
                  touchStartX = touch.clientX;
                  touchStartY = touch.clientY;
                }, { passive: true });
                carousel.addEventListener("touchend", (event) => {
                  const touch = event.changedTouches[0];
                  const deltaX = touch.clientX - touchStartX;
                  const deltaY = touch.clientY - touchStartY;
                  if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35) {
                    move(deltaX < 0 ? 1 : -1);
                  }
                }, { passive: true });
                dots.forEach((dot, index) => {
                  dot.addEventListener("click", () => {
                    activeIndex = index;
                    sync();
                  });
                });
                sync();
              });

              const surfaces = document.querySelectorAll("[data-spotlight]");
              surfaces.forEach((surface) => {
                let frame = 0;
                surface.addEventListener("pointermove", (event) => {
                  if (frame) cancelAnimationFrame(frame);
                  frame = requestAnimationFrame(() => {
                    const rect = surface.getBoundingClientRect();
                    surface.style.setProperty("--pointer-x", event.clientX - rect.left + "px");
                    surface.style.setProperty("--pointer-y", event.clientY - rect.top + "px");
                    frame = 0;
                  });
                }, { passive: true });
              });
            })();
          `,
        }}
      />
    </main>
  );
}
