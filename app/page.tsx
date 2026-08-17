import {
  BriefcaseBusiness,
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
  { icon: Mail, label: "Email", value: "felipecmarchetti@gmail.com", href: "mailto:felipecmarchetti@gmail.com" },
  { icon: Phone, label: "Telefone", value: "+55 11 96866-0968", href: "tel:+5511968660968" },
  { icon: MapPin, label: "Localizacao", value: "Campo Limpo Paulista, SP" },
];

const highlights = [
  { icon: ShoppingCart, title: "E-commerce", text: "Sistemas web, regras de negocio e suporte a usuarios reais." },
  { icon: ServerCog, title: "Full-stack", text: "PHP/Laravel, JavaScript, React, Vue.js e Node.js." },
  { icon: Database, title: "Dados", text: "SQL Server, MySQL, MariaDB, MongoDB e investigacao de dados." },
  { icon: Wrench, title: "Manutencao", text: "Bugs, evolucao, troubleshooting e melhoria continua." },
];

const experiences = [
  ["Programador PHP Pleno", "ISY Sistemas", "Jan/2024 - atual", "Full-stack na plataforma de e-commerce Sublimity."],
  ["Programador PHP Junior", "ISY Sistemas", "Set/2021 - Dez/2023", "Features, suporte, manutencao evolutiva e SQL."],
  ["Instrutor de Informatica", "Go Think Educacao Profissional", "Set/2020 - Jul/2021", "Informatica, redes, hardware e comunicacao tecnica."],
  ["Suporte de TI", "GZ Sistemas Automacao Comercial", "Nov/2019 - Set/2020", "Diagnostico de incidentes e suporte operacional."],
];

const skills = [
  "PHP",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Node.js",
  "SQL Server",
  "MySQL",
  "MariaDB",
  "MongoDB",
  "Docker",
  "Git",
  "C#",
  "Java",
  "Go",
];

const projects = [
  ["Sublimity Commerce", "Case profissional", "E-commerce real, manutencao, queries e evolucao de produto."],
  ["SQL Investigation", "Case em montagem", "Queries, modelagem e diagnostico de inconsistencias."],
  ["Full-stack Lab", "Projeto autoral", "Espaco para demos publicas com API, front-end e deploy."],
];

export default function Home() {
  return (
    <main className="page-shell">
      <aside className="sidebar" data-spotlight>
        <div className="avatar" aria-hidden="true">FM</div>
        <p className="status">Open to work</p>
        <h1>Felipe Cunha Marchetti</h1>
        <p className="role">Full-Stack PHP Developer</p>

        <div className="contact-list">
          {contacts.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="contact-icon"><Icon size={17} /></span>
                <span>
                  <small>{label}</small>
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

        <div className="download-row">
          <a href="/cv/felipe-marchetti-curriculo-fullstack-pt.pdf">
            <Download size={16} /> CV PT
          </a>
          <a href="/cv/felipe-marchetti-fullstack-resume-en.pdf">
            <Download size={16} /> EN
          </a>
        </div>
      </aside>

      <section className="main-card" data-spotlight>
        <nav className="nav" aria-label="Portfolio">
          <a href="#about">Sobre</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>

        <section className="section intro" id="about">
          <p className="eyebrow">Web developer</p>
          <h2>Full-stack focado em e-commerce, sistemas web e dados.</h2>
          <p>
            Desenvolvo e mantenho produtos web com PHP, Laravel, JavaScript e SQL,
            equilibrando entrega, suporte e qualidade tecnica.
          </p>

          <div className="highlight-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article className="highlight-card" data-spotlight key={title}>
                <Icon size={22} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="resume">
          <div className="section-title">
            <BriefcaseBusiness size={24} />
            <h2>Experiencia</h2>
          </div>
          <div className="timeline">
            {experiences.map(([role, company, period, text]) => (
              <article className="timeline-item" data-spotlight key={`${role}-${period}`}>
                <span>{period}</span>
                <h3>{role}</h3>
                <strong>{company}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <Database size={24} />
            <h2>Stack</h2>
          </div>
          <div className="skill-list">
            {skills.map((skill) => <span data-spotlight key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title">
            <ShoppingCart size={24} />
            <h2>Projetos</h2>
          </div>
          <div className="project-grid">
            {projects.map(([name, kind, text]) => (
              <article className="project-card" data-spotlight key={name}>
                <small>{kind}</small>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" data-spotlight id="contact">
          <h2>Vamos conversar?</h2>
          <p>Disponivel para oportunidades full-stack no Brasil e exterior.</p>
          <a className="primary-action" href="mailto:felipecmarchetti@gmail.com">
            <Mail size={18} /> Enviar email
          </a>
        </section>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
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
