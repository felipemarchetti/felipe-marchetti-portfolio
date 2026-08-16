import {
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Database,
  Download,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShoppingCart,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const profile = {
  name: "Felipe Cunha Marchetti",
  headline: "Full-Stack PHP Developer",
  location: "Campo Limpo Paulista, SP",
  email: "felipecmarchetti@gmail.com",
  phone: "+55 11 96866-0968",
};

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce platforms",
    body:
      "Evolucao, manutencao e troubleshooting em produto real usado por clientes, com visao de negocio e suporte.",
  },
  {
    icon: ServerCog,
    title: "Back-end confiavel",
    body:
      "PHP, Laravel, Node.js e integracoes com foco em regras claras, manutencao saudavel e entrega incremental.",
  },
  {
    icon: Layers3,
    title: "Front-end pratico",
    body:
      "Interfaces com JavaScript, React, Vue.js, jQuery e Ajax, equilibrando usabilidade, velocidade e contexto legado.",
  },
  {
    icon: Database,
    title: "SQL & data analysis",
    body:
      "Consultas, modelagem relacional, investigacao de inconsistencias e leitura de dados para decisao tecnica.",
  },
];

const stackGroups = [
  ["PHP", "Laravel", "Node.js", "Java", "C#", "Go"],
  ["JavaScript", "TypeScript", "React", "Vue.js", "Angular", "jQuery"],
  ["SQL Server", "MySQL", "MariaDB", "MongoDB", "Docker", "Git"],
];

const experience = [
  {
    role: "Programador PHP Pleno",
    company: "ISY Sistemas",
    period: "Jan/2024 - atual",
    body:
      "Full-stack na plataforma de e-commerce Sublimity, contribuindo em back-end, front-end, dados, suporte tecnico e melhoria continua.",
    tags: ["PHP", "Laravel", "Vue.js", "React", "SQL"],
  },
  {
    role: "Programador PHP Junior",
    company: "ISY Sistemas",
    period: "Set/2021 - Dez/2023",
    body:
      "Desenvolvimento e suporte em e-commerce com PHP, JavaScript, Ajax, jQuery, manutencao evolutiva e investigacao de dados.",
    tags: ["PHP", "JavaScript", "Ajax", "jQuery"],
  },
  {
    role: "Instrutor de Informatica",
    company: "Go Think Educacao Profissional",
    period: "Set/2020 - Jul/2021",
    body:
      "Aulas de informatica, hardware, redes e infraestrutura, fortalecendo comunicacao didatica e resolucao de problemas.",
    tags: ["Teaching", "Networks", "Support"],
  },
  {
    role: "Suporte de TI",
    company: "GZ Sistemas Automacao Comercial",
    period: "Nov/2019 - Set/2020",
    body:
      "Diagnostico de incidentes, suporte a usuarios, manutencao preventiva e apoio ao ambiente tecnico da empresa.",
    tags: ["IT Support", "Troubleshooting"],
  },
];

const projects = [
  {
    title: "Sublimity commerce core",
    eyebrow: "case profissional",
    body:
      "Contribuicoes em uma plataforma de e-commerce real: features, ajustes, suporte, queries e manutencao evolutiva. Sem expor codigo privado.",
    stack: ["PHP", "Laravel", "SQL", "JavaScript"],
  },
  {
    title: "Data investigation playbook",
    eyebrow: "case em montagem",
    body:
      "Espaco para um estudo anonimo mostrando modelagem, queries e diagnostico de inconsistencias em ambiente relacional.",
    stack: ["SQL Server", "MySQL", "Modelagem"],
  },
  {
    title: "Full-stack lab",
    eyebrow: "proximo projeto",
    body:
      "Projeto autoral preparado para receber API, front-end moderno, autenticacao, testes, Docker e deploy publico.",
    stack: ["React", "Node.js", "Docker"],
  },
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="profile-card" aria-label="Perfil">
        <div className="avatar" aria-hidden="true">
          <span>FM</span>
          <div className="avatar-ring" />
        </div>
        <div>
          <p className="availability">
            <Sparkles size={14} />
            Open to work
          </p>
          <h1>{profile.name}</h1>
          <p className="role">{profile.headline}</p>
        </div>

        <div className="contact-list">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} />
            <span>{profile.email}</span>
          </a>
          <a href="tel:+5511968660968">
            <Phone size={18} />
            <span>{profile.phone}</span>
          </a>
          <span>
            <MapPin size={18} />
            <span>{profile.location}</span>
          </span>
        </div>

        <div className="side-actions">
          <a
            className="icon-button"
            href="/cv/felipe-marchetti-curriculo-fullstack-pt.pdf"
            aria-label="Baixar curriculo em portugues"
            title="CV PT"
          >
            <Download size={18} />
            PT
          </a>
          <a
            className="icon-button"
            href="/cv/felipe-marchetti-fullstack-resume-en.pdf"
            aria-label="Download English resume"
            title="Resume EN"
          >
            <Download size={18} />
            EN
          </a>
          <a
            className="icon-button ghost"
            href="https://github.com/"
            aria-label="GitHub"
            title="GitHub"
          >
            <Globe2 size={18} />
          </a>
        </div>
      </aside>

      <section className="content-panel">
        <nav className="top-nav" aria-label="Secoes">
          <a href="#about">Sobre</a>
          <a href="#stack">Stack</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>

        <section className="hero" id="about">
          <div className="hero-copy">
            <p className="kicker">
              <TerminalSquare size={18} />
              Web developer com perfil full-stack
            </p>
            <h2>
              Construo e evoluo sistemas web com base forte em produto,
              e-commerce e dados.
            </h2>
            <p>
              Tenho 5+ anos de experiencia em desenvolvimento web, especialmente
              em plataformas de e-commerce. Meu ponto forte e conectar feature,
              banco de dados, suporte e regra de negocio sem perder clareza no
              codigo.
            </p>
            <div className="hero-actions">
              <a className="cta" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Falar comigo
              </a>
              <a className="cta secondary" href="#projects">
                Ver projetos
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          <div className="code-window" aria-label="Resumo tecnico">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <strong>felipe.profile.ts</strong>
            </div>
            <pre>
              <code>{`const felipe = {
  role: "Full-Stack Developer",
  focus: ["e-commerce", "web systems", "data"],
  backend: ["PHP", "Laravel", "Node.js"],
  frontend: ["React", "Vue.js", "JavaScript"],
  databases: ["SQL Server", "MySQL", "MongoDB"],
  mindset: "solve real business problems"
};`}</code>
            </pre>
          </div>
        </section>

        <section className="metrics" aria-label="Destaques">
          <div>
            <strong>5+</strong>
            <span>anos em desenvolvimento web</span>
          </div>
          <div>
            <strong>Full-stack</strong>
            <span>back, front, dados e suporte</span>
          </div>
          <div>
            <strong>SQL</strong>
            <span>investigacao e modelagem</span>
          </div>
        </section>

        <section className="section">
          <div className="section-title">
            <p>O que eu entrego</p>
            <h2>Mais que tela bonita: sistema que continua funcionando depois do deploy.</h2>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, body }) => (
              <article className="service-card" key={title}>
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-title inline">
            <div>
              <p>Stack</p>
              <h2>Tecnologias que uso para tirar ideia do papel.</h2>
            </div>
            <Braces size={42} />
          </div>
          <div className="stack-board">
            {stackGroups.map((group, index) => (
              <div className="stack-row" key={index}>
                {group.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-title">
            <p>Experiencia</p>
            <h2>Trajetoria em ambiente real, com demanda real.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.period}`}>
                <div className="timeline-dot" />
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.body}</p>
                <div className="mini-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-title inline">
            <div>
              <p>Projetos</p>
              <h2>Uma vitrine pronta para receber repos, demos e cases.</h2>
            </div>
            <Globe2 size={42} />
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.body}</span>
                <div className="mini-tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-title">
            <p>Contato</p>
            <h2>Vamos conversar sobre web, produto ou dados.</h2>
          </div>
          <div className="contact-panel">
            <BriefcaseBusiness size={24} />
            <div>
              <strong>Disponivel para oportunidades full-stack</strong>
              <span>
                Portugues nativo, ingles avancado e espanhol basico. Aberto a
                conversas com empresas do Brasil e de fora.
              </span>
            </div>
            <a href={`mailto:${profile.email}`}>
              Enviar email
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
