import {
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
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
    "ISY Sistemas",
    "Jan/2024 - atual",
    "experienceSeniorText",
    "Atuação full-stack na plataforma de e-commerce Sublimity, participando da evolução de funcionalidades, correção de bugs, análise de regras de negócio e manutenção de integrações. Trabalho com PHP, Laravel, JavaScript e SQL em rotinas que envolvem suporte a usuários reais, investigação de dados, melhorias de performance e entrega contínua de ajustes para operação comercial.",
  ],
  [
    "Programador PHP Junior",
    "ISY Sistemas",
    "Set/2021 - Dez/2023",
    "experienceJuniorText",
    "Desenvolvimento e manutenção de módulos web, criação de consultas SQL, ajustes em telas, apoio ao suporte técnico e análise de incidentes em produção. Ganhei base forte em sustentação de sistemas, leitura de código legado, depuração de fluxos críticos e comunicação com áreas de negócio para transformar problemas operacionais em correções objetivas.",
  ],
  [
    "Instrutor de Informática",
    "Go Think Educação Profissional",
    "Set/2020 - Jul/2021",
    "experienceInstructorText",
    "Responsável por aulas de informática, redes, hardware e fundamentos de tecnologia para turmas com diferentes níveis de conhecimento. A experiência fortaleceu minha didática, organização de conteúdo, comunicação técnica e capacidade de explicar problemas complexos de forma simples.",
  ],
  [
    "Suporte de TI",
    "GZ Sistemas Automação Comercial",
    "Nov/2019 - Set/2020",
    "experienceSupportText",
    "Atendimento e diagnóstico de incidentes em ambiente de automação comercial, auxiliando usuários na resolução de problemas operacionais, configuração de sistemas e identificação de falhas recorrentes. Foi uma base importante para entender urgência de negócio, suporte em produção e impacto real de software no dia a dia das empresas.",
  ],
  [
    "Estagiário de TI",
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
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
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
      { name: "REST APIs", fallback: "API" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
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
      { name: "SQL Queries", fallback: "SQL" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    titleKey: "skillDevops",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "S3", fallback: "S3" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
      { name: "CI/CD", fallback: "CI" },
    ],
  },
  {
    icon: Wrench,
    title: "AI & Tools",
    titleKey: "skillAi",
    skills: [
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "ChatGPT", fallback: "GPT" },
      { name: "Codex", fallback: "CX" },
      { name: "AI-assisted workflow", fallback: "AI" },
    ],
  },
];

const projects = [
  ["Sublimity Commerce", "projectOneKind", "Case profissional", "projectOneText", "E-commerce real, manutenção, queries e evolução de produto."],
  ["SQL Investigation", "projectTwoKind", "Case em montagem", "projectTwoText", "Queries, modelagem e diagnóstico de inconsistências."],
  ["Full-stack Lab", "projectThreeKind", "Projeto autoral", "projectThreeText", "Espaço para demos públicas com API, front-end e deploy."],
];

export default function Home() {
  return (
    <main className="page-shell">
      <aside className="sidebar" data-spotlight>
        <div className="avatar" aria-hidden="true">FM</div>
        <p className="status" data-i18n="status">Open to work</p>
        <h1>Felipe Cunha Marchetti</h1>
        <p className="role">Full-Stack PHP Developer</p>

        <div className="language-toggle" aria-label="Language selector">
          <button className="active" type="button" data-lang-switch="pt">🇧🇷 PT</button>
          <button type="button" data-lang-switch="en">🇺🇸 EN</button>
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
        <nav className="nav" aria-label="Portfolio">
          <a href="#about" data-i18n="navAbout">Sobre</a>
          <a href="#resume" data-i18n="navResume">Resumo</a>
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
        </section>

        <section className="section" id="resume">
          <div className="section-title">
            <BriefcaseBusiness size={24} />
            <h2 data-i18n="experienceTitle">Experiência</h2>
          </div>
          <div className="timeline">
            {experiences.map(([role, company, period, textKey, text]) => (
              <article className="timeline-item" data-spotlight key={`${role}-${period}`}>
                <span>{period}</span>
                <h3>{role}</h3>
                <strong>{company}</strong>
                <p data-i18n={textKey}>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
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
                  {skills.map((skill) => (
                    <span className="tech-item" data-spotlight key={`${title}-${skill.name}`}>
                      {skill.icon ? (
                        <img src={skill.icon} alt="" loading="lazy" />
                      ) : (
                        <span className="tech-fallback" aria-hidden="true">{skill.fallback}</span>
                      )}
                      {skill.name}
                    </span>
                  ))}
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
          <div className="project-grid">
            {projects.map(([name, kindKey, kind, textKey, text]) => (
              <article className="project-card" data-spotlight key={name}>
                <small data-i18n={kindKey}>{kind}</small>
                <h3>{name}</h3>
                <p data-i18n={textKey}>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" data-spotlight id="contact">
          <h2 data-i18n="contactTitle">Vamos conversar?</h2>
          <p data-i18n="contactText">Disponível para oportunidades full-stack no Brasil e exterior.</p>
          <a className="primary-action" href="mailto:felipecmarchetti@gmail.com">
            <Mail size={18} /> <span data-i18n="emailButton">Enviar email</span>
          </a>
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
                  navResume: "Resumo",
                  navProjects: "Projetos",
                  navContact: "Contato",
                  heroTitle: "Full-stack focado em e-commerce, sistemas web e dados.",
                  heroText: "Desenvolvo e mantenho produtos web com PHP, Laravel, JavaScript e SQL, equilibrando entrega, suporte e qualidade técnica.",
                  experienceTitle: "Experiência",
                  projectsTitle: "Projetos",
                  contactTitle: "Vamos conversar?",
                  contactText: "Disponível para oportunidades full-stack no Brasil e exterior.",
                  emailButton: "Enviar email",
                  resumeButton: "Currículo",
                  resumeHref: "/cv/felipe-marchetti-curriculo-fullstack-pt.pdf",
                  htmlLang: "pt-BR",
                  contactEmail: "Email",
                  contactPhone: "Telefone",
                  contactLocation: "Localização",
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
                  projectOneKind: "Case profissional",
                  projectOneText: "E-commerce real, manutenção, queries e evolução de produto.",
                  projectTwoKind: "Case em montagem",
                  projectTwoText: "Queries, modelagem e diagnóstico de inconsistências.",
                  projectThreeKind: "Projeto autoral",
                  projectThreeText: "Espaço para demos públicas com API, front-end e deploy."
                },
                en: {
                  status: "Open to work",
                  navAbout: "About",
                  navResume: "Resume",
                  navProjects: "Projects",
                  navContact: "Contact",
                  heroTitle: "Full-stack focused on e-commerce, web systems and data.",
                  heroText: "I build and maintain web products with PHP, Laravel, JavaScript and SQL, balancing delivery, support and technical quality.",
                  experienceTitle: "Experience",
                  projectsTitle: "Projects",
                  contactTitle: "Let's talk?",
                  contactText: "Available for full-stack opportunities in Brazil and abroad.",
                  emailButton: "Send email",
                  resumeButton: "Resume",
                  resumeHref: "/cv/felipe-marchetti-fullstack-resume-en.pdf",
                  htmlLang: "en",
                  contactEmail: "Email",
                  contactPhone: "Phone",
                  contactLocation: "Location",
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
                  projectOneKind: "Professional case",
                  projectOneText: "Real e-commerce platform, maintenance, queries and product evolution.",
                  projectTwoKind: "Case in progress",
                  projectTwoText: "Queries, modeling and diagnosis of data inconsistencies.",
                  projectThreeKind: "Personal project",
                  projectThreeText: "Space for public demos with API, front-end and deployment."
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
