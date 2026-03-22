const projects = [
  {
    icon: "🔐",
    title: "MFA Face Authentication",
    desc: "A multi-factor authentication system requiring both password and live face scan to grant access. Runs 100% offline with bcrypt-hashed passwords and 128-point face encodings. Full access log dashboard.",
    tags: ["Python", "face_recognition", "dlib", "PySide6", "bcrypt", "OpenCV"],
    link: "https://github.com/1abdullah874/MFA-Face-Authentication",
  },
  {
    icon: "✋",
    title: "Sign Language Translator",
    desc: "Real-time ASL finger-spelling translator using webcam and MediaPipe hand landmark detection. Detects 21+ signs and common words offline. Includes a sentence builder to compose words letter by letter.",
    tags: ["Python", "MediaPipe", "OpenCV", "PyQt5", "Computer Vision"],
    link: "https://github.com/1abdullah874/Sign_Language",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="section-label mb-4 reveal">{"// projects"}</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 reveal">
        Things I've Built
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card block p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 reveal"
          >
            <span className="text-3xl">{p.icon}</span>
            <h3 className="font-heading font-bold text-xl text-foreground mt-4 mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded border border-border text-primary font-mono">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
