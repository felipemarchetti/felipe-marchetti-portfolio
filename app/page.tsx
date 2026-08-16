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

const experience = [
  {
    role: "Programador PHP Pleno",
    company: "ISY Sistemas",
    period: "Jan/2024 - atual",
    body:
      "Atuacao full-stack na plataforma de e-commerce Sublimity, conectando back-end, front-end, bancos de dados, suporte tecnico e melhoria continua do produto.",
  },
  {
    role: "Programador PHP Junior",
    company: "ISY Sistemas",
    period: "Set/2021 - Dez/2023",
    body:
      "Desenvolvimento, suporte, correcao de bugs e manutencao evolutiva em PHP, JavaScript, Ajax, jQuery e consultas SQL para demandas de clientes.",
  },
  {
    role: "Instrutor de Informatica",
    company: "Go Think Educacao Profissional",
    period: "Set/2020 - Jul/2021",
    body:
      "Ensino de informatica, manutencao de computadores, redes e fundamentos de infraestrutura com foco em comunicacao clara e resolucao de problemas.",
  },
  {
    role: "Suporte de TI",
    company: "GZ Sistemas Automacao Comercial",
    period: "Nov/2019 - Set/2020",
    body:
      "Diagnostico de incidentes, suporte a usuarios, manutencao preventiva e apoio em ambiente tecnico corporativo.",
  },
];

const projectPlaceholders = [
  {
    title: "Sublimity E-commerce Platform",
    type: "Experiencia profissional",
    body:
      "Atuacao em funcionalidades, manutencao evolutiva, investigacao de dados e suporte para uma plataforma real de e-commerce.",
    stack: ["PHP", "Laravel", "JavaScript", "SQL"],
  },
  {
    title: "SQL & Data Investigation",
    type: "Case em preparacao",
    body:
      "Espaco reservado para demonstrar consultas, modelagem relacional e diagnosticos de inconsistencias com dados anonimizados.",
    stack: ["SQL Server", "MySQL", "Data Analysis"],
  },
  {
    title: "Full-Stack Lab",
    type: "Projeto futuro",
    body:
      "Area pronta para receber um projeto autoral com front-end moderno, API, autenticacao e deploy documentado.",
    stack: ["React", "Node.js", "Docker"],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Principal">
          <a className="brand" href="#home" aria-label="Inicio">
            FM
          </a>
          <div className="nav-links">
            <a href="#experience">Experiencia</a>
            <a href="#skills">Stack</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack PHP Developer</p>
            <h1>Felipe Cunha Marchetti</h1>
            <p className="lead">
              Desenvolvedor full-stack com 5+ anos em plataformas web e
              e-commerce, combinando PHP/Laravel, JavaScript, front-end moderno
              e forte base em SQL e investigacao de dados.
            </p>

            <div className="actions" aria-label="Acoes principais">
              <a className="button primary" href="mailto:felipecmarchetti@gmail.com">
                Falar comigo
              </a>
              <a
                className="button secondary"
                href="/cv/felipe-marchetti-curriculo-fullstack-pt.pdf"
              >
                CV PT
              </a>
              <a
                className="button secondary"
                href="/cv/felipe-marchetti-fullstack-resume-en.pdf"
              >
                Resume EN
              </a>
            </div>
          </div>

          <figure className="hero-visual">
            <img
              src="/assets/felipe-marchetti-portfolio.png"
              alt="Identidade visual do portfolio de Felipe Marchetti com elementos de e-commerce, codigo e analise SQL"
            />
          </figure>
        </div>

        <div className="stats" aria-label="Resumo profissional">
          <div>
            <strong>5+ anos</strong>
            <span>desenvolvimento web</span>
          </div>
          <div>
            <strong>E-commerce</strong>
            <span>produto, suporte e evolucao</span>
          </div>
          <div>
            <strong>SQL forte</strong>
            <span>modelagem e analise de dados</span>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="section-kicker">Perfil</p>
          <h2>Software confiavel, escalavel e orientado a valor de negocio.</h2>
        </div>
        <p>
          Minha experiencia junta desenvolvimento de features, manutencao
          evolutiva, troubleshooting, suporte a usuarios e melhoria de sistemas
          usados por clientes reais. Gosto de atuar perto do problema de negocio,
          entender dados e transformar demanda confusa em entrega utilizavel.
        </p>
      </section>

      <section className="section split" id="experience">
        <div className="section-heading">
          <p className="section-kicker">Experiencia</p>
          <h2>Trajetoria construida em produto real.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.period}`}>
              <p className="period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading compact">
          <p className="section-kicker">Stack</p>
          <h2>Base full-stack com foco pratico.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Projetos</p>
          <h2>Primeiros cards prontos para virar estudos de caso.</h2>
        </div>
        <div className="project-grid">
          {projectPlaceholders.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="section-kicker">Contato</p>
          <h2>Disponivel para conversas sobre produto, web e dados.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:felipecmarchetti@gmail.com">felipecmarchetti@gmail.com</a>
          <a href="tel:+5511968660968">+55 11 96866-0968</a>
          <span>Campo Limpo Paulista, Sao Paulo, Brasil</span>
        </div>
      </section>
    </main>
  );
}
