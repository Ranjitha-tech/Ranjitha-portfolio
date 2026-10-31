
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Ranjitha N <span></span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>

        {/* 1. HOME SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="welcome">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Ranjitha N</span>
            </h1>

            <h2>Java Full Stack Developer</h2>

            <p className="hero-description">
              I am a Computer Science graduate passionate about
              developing modern web applications and solving
              real-world problems through technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work →
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Ranjitha-tech"
                target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href="https://linkedin.com/in/ranjitha-n-3638b8310"
                target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="code-card">

              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
                <p>developer.java</p>
              </div>

              <div className="code-content">
                <p><span className="purple">public class</span> Developer {'{'}</p>
                <p>&nbsp;&nbsp;String name = <span className="green">"Ranjitha N"</span>;</p>
                <p>&nbsp;&nbsp;String role = <span className="green">"Java Full Stack Developer"</span>;</p>
                <p>&nbsp;&nbsp;String[] skills = {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"Java"</span>, <span className="green">"React"</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"Spring Boot"</span>, <span className="green">"SQL"</span></p>
                <p>&nbsp;&nbsp;{'}'};</p>
                <p>{'}'}</p>
              </div>

              <div className="code-footer">
                ● Available for opportunities
              </div>

            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section className="about-section" id="about">

          <div className="about-image">
            <div className="image-frame">
              <img
                src="/profile.jpeg"
                alt="Ranjitha N - Java Full Stack Developer"
              />
            </div>
            <div className="image-decoration"></div>
          </div>

          <div className="about-content">
            <p className="section-subtitle">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>

            <p>
              Hello! I'm Ranjitha N, a Computer Science Engineering
              graduate passionate about software development and
              building meaningful web applications.
            </p>

            <p>
              I have hands-on knowledge of Java, Spring Boot,
              Hibernate, React.js, JavaScript and SQL. I have also
              completed Java Full Stack training at VSTAND4U Solutions.
            </p>

            <p>
              I enjoy learning new technologies, strengthening my
              problem-solving skills and developing applications
              that solve real-world problems. I am currently looking
              for entry-level opportunities where I can contribute
              and grow as a software developer.
            </p>

            <div className="about-details">
              <div>
                <strong>Education</strong>
                <span>BE Computer Science</span>
              </div>

              <div>
                <strong>Graduation</strong>
                <span>2026</span>
              </div>

              <div>
                <strong>CGPA</strong>
                <span>8.6 / 10</span>
              </div>

              <div>
                <strong>Location</strong>
                <span>Mysore, Karnataka</span>
              </div>
            </div>

            <a href="#contact" className="primary-btn">
              Let's Connect →
            </a>
          </div>
        </section>

        {/* 3. EXPERIENCE SECTION */}
        <section className="experience-section" id="experience">

          <div className="section-heading">
            <p className="section-subtitle">MY JOURNEY</p>
            <h2>My <span>Experience</span></h2>
          </div>

          <div className="experience-card">
            <div className="experience-icon">✦</div>

            <div className="experience-info">
              <span className="experience-date">
                February 2026 – August 2026
              </span>

              <h3>Java Full Stack Developer Trainee</h3>
              <h4>VSTAND4U Solutions</h4>

              <p>
                Completed Java Full Stack training with practical
                exposure to frontend and backend web development.
                Gained hands-on knowledge of Java, Spring Boot,
                Hibernate, React.js, JavaScript, HTML, CSS and SQL.
              </p>

              <div className="experience-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Hibernate</span>
                <span>React.js</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </section>

        

{/* 4. SKILLS SECTION */}
<section className="skills-section" id="skills">

  <div className="section-heading">
    <p className="section-subtitle">WHAT I WORK WITH</p>
    <h2>My <span>Skills</span></h2>
    <p>Technologies and tools I use to build web applications.</p>
  </div>

  <div className="skills-slider">
    <div className="skills-track">

      {/* First set */}
      <div className="skill-card">
        <div className="skill-icon">☕</div>
        <h3>Java</h3>
        <p>Core Java, OOP, Collections</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">⚙️</div>
        <h3>Spring Boot</h3>
        <p>Backend Development, REST APIs</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🔧</div>
        <h3>Hibernate</h3>
        <p>ORM, Database Integration</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">⚛️</div>
        <h3>React.js</h3>
        <p>Components, Hooks, UI Development</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🌐</div>
        <h3>HTML & CSS</h3>
        <p>Responsive Web Design</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">💻</div>
        <h3>JavaScript</h3>
        <p>ES6+, DOM Manipulation</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🗄️</div>
        <h3>SQL / MySQL</h3>
        <p>Queries, Joins, Database Management</p>
      </div>

      <div className="skill-card">
        <div className="skill-icon">🔗</div>
        <h3>Git & GitHub</h3>
        <p>Version Control, Code Management</p>
      </div>

      {/* Duplicate set for seamless animation */}
      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">☕</div>
        <h3>Java</h3>
        <p>Core Java, OOP, Collections</p>
      </div>

      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">⚙️</div>
        <h3>Spring Boot</h3>
        <p>Backend Development, REST APIs</p>
      </div>

      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">🔧</div>
        <h3>Hibernate</h3>
        <p>ORM, Database Integration</p>
      </div>

      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">⚛️</div>
        <h3>React.js</h3>
        <p>Components, Hooks, UI Development</p>
      </div>

      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">🌐</div>
        <h3>HTML & CSS</h3>
        <p>Responsive Web Design</p>
      </div>

      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">💻</div>
        <h3>JavaScript</h3>
        <p>ES6+, DOM Manipulation</p>
      </div>

      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">🗄️</div>
        <h3>SQL / MySQL</h3>
        <p>Queries, Joins, Database Management</p>
      </div>

      <div className="skill-card" aria-hidden="true">
        <div className="skill-icon">🔗</div>
        <h3>Git & GitHub</h3>
        <p>Version Control, Code Management</p>
      </div>

    </div>
  </div>
</section>

       
{/* 5. PROJECTS SECTION */}
<section className="projects-section" id="projects">

  <div className="section-heading">
    <p className="section-subtitle">MY RECENT WORK</p>
    <h2>Featured <span>Projects</span></h2>
    <p>Some of the projects I have worked on.</p>
  </div>

  <div className="projects-container">

    {/* PROJECT 1 */}
    <div className="project-card">
      <div className="project-number">01</div>

      <div className="project-icon">🌱</div>

      <h3>AgriHealth AI</h3>

      <p className="project-category">
        Machine Learning & Web Application
      </p>

      <p className="project-description">
        A plant disease detection application that uses a
        deep learning model to identify diseases from uploaded
        leaf images and provide suggested pesticide information.
      </p>

      <div className="project-tags">
        <span>Python</span>
        <span>TensorFlow</span>
        <span>Streamlit</span>
        <span>Machine Learning</span>
      </div>
   <a
  href="https://github.com/Ranjitha-tech/AgriHealth-AI.git"
  target="_blank"
  rel="noreferrer"
  className="project-link"
>
  View on GitHub ↗
</a>
      
    </div>

    {/* PROJECT 2 */}
    <div className="project-card">
      <div className="project-number">02</div>

      <div className="project-icon">🛍️</div>

      <h3>E-commerce Frontend</h3>

      <p className="project-category">
        Frontend Development Assignment
      </p>

      <p className="project-description">
        A responsive e-commerce frontend application developed
        using Next.js and React. Focused on reusable components,
        responsive layouts and API-based product integration.
      </p>

      <div className="project-tags">
        <span>Next.js</span>
        <span>React</span>
        <span>TypeScript</span>
        <span>CSS</span>
      </div>

      <a
        href="https://github.com/Ranjitha-tech/appscrip-task-ranjitha"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View on GitHub ↗
      </a>
    </div>
  
    {/* PROJECT 3 */}
    <div className="project-card">
      <div className="project-number">03</div>

      <div className="project-icon">🍽️</div>

      <h3>Recipe Finder</h3>

      <p className="project-category">
        Frontend Web Application
      </p>

      <p className="project-description">
        A responsive food recipe finder application that
        allows users to explore recipes, view ingredients
        and discover step-by-step cooking instructions.
      </p>

      <div className="project-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>

      <div className="project-status">
        <a
          href="https://github.com/Ranjitha-tech/Food-recipe-finder"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View on GitHub ↗
        </a>

        <a
          href="https://ranjitha-tech.github.io/Food-recipe-finder/"
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Live Demo ↗
        </a>
      </div>
    </div>

  </div>
  
</section>

       
{/* 6. EDUCATION SECTION */}
<section className="education-section" id="education">
  <div className="section-heading">
    <p className="section-subtitle">MY ACADEMIC BACKGROUND</p>
    <h2>My <span>Education</span></h2>
    <p>My educational journey and academic qualifications.</p>
  </div>

  <div className="education-timeline">
    <div className="education-card">
      <div className="education-dot"></div>
      <p className="education-year">December 2022 – May 2026</p>
      <h3>Bachelor of Engineering – Computer Science</h3>
      <h4>Karavali Institute of Technology, Mangalore</h4>
      <p className="education-description">
        Completed my BE in Computer Science and Engineering,
        building a strong foundation in programming, software
        development, databases and computer science concepts.
      </p>
      <div className="education-score">CGPA: 8.6 / 10</div>
    </div>

    <div className="education-card">
      <div className="education-dot"></div>
      <p className="education-year">September 2020 – March 2022</p>
      <h3>Pre-University Course (PUC) – PCMB</h3>
      <h4>Teresian PU College</h4>
      <p className="education-description">
        Completed Pre-University education with Physics,
        Chemistry, Mathematics and Biology as core subjects.
      </p>
    </div>

    <div className="education-card">
      <div className="education-dot"></div>
      <p className="education-year">June 2020</p>
      <h3>Secondary School Leaving Certificate(SSLC) – SSM</h3>
      <h4>Shree Gopika High School</h4>
      <p className="education-description">
        Completed SSLC under the Karnataka State Board with Kannada as the medium of instruction.
      </p>
      <div className="education-score">Percentage: 89%</div>
    </div>
    
  </div>


</section>

        

{/* 7. CONTACT SECTION */}
<section className="contact-section" id="contact">
  <div className="section-heading">
    <p className="section-subtitle">GET IN TOUCH</p>
    <h2>Let's <span>Connect</span></h2>
    <p>
      I'm actively looking for entry-level opportunities
      in Java Full Stack Development and Software Engineering.
      Feel free to connect with me!
    </p>
  </div>

  <div className="contact-container">

    <div className="contact-card">
      <div className="contact-icon">✉️</div>
      <h3>Email</h3>
      <p>Feel free to reach out to me.</p>
      <a href="mailto:ranjithanagaraj564@gmail.com">
        Send Email ↗
      </a>
    </div>

    <div className="contact-card">
      <div className="contact-icon">💼</div>
      <h3>LinkedIn</h3>
      <p>Let's connect professionally.</p>
      <a
        href="https://linkedin.com/in/ranjitha-n-3638b8310"
        target="_blank"
        rel="noreferrer"
      >
        Visit LinkedIn ↗
      </a>
    </div>

    <div className="contact-card">
      <div className="contact-icon">💻</div>
      <h3>GitHub</h3>
      <p>Explore my projects and code.</p>
      <a
        href="https://github.com/Ranjitha-tech"
        target="_blank"
        rel="noreferrer"
      >
        Visit GitHub ↗
      </a>
    </div>

  </div>
</section>



      </main>
      
{/* FOOTER */}
<footer className="portfolio-footer">
  <h3>Ranjitha N<span></span></h3>
  <p>Java Full Stack Developer</p>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <p className="footer-copyright">
    © 2026 Ranjitha N. All rights reserved.
  </p>
</footer>

    </div>
  )
}

export default App
