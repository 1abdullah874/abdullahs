const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="section-label mb-4 reveal">{"// about"}</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 reveal">
          <p className="text-foreground leading-relaxed">
            I build security tools that make technology harder to break into. From face-based authentication systems to real-time computer vision — if it lives at the intersection of code and security, I'm building it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My approach combines offensive security thinking with practical engineering. I believe the best way to defend systems is to understand how they break — and then build something better.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently focused on biometric authentication, computer vision, and building tools that work offline-first — because security shouldn't depend on a cloud connection.
          </p>
        </div>
        <div className="reveal">
          <div className="terminal-card">
            <div className="terminal-dots">
              <div className="terminal-dot" style={{ background: "#ff5f57" }} />
              <div className="terminal-dot" style={{ background: "#febc2e" }} />
              <div className="terminal-dot" style={{ background: "#28c840" }} />
              <span className="ml-3 text-xs text-muted-foreground">whoami.sh</span>
            </div>
            <pre className="p-5 text-sm leading-relaxed font-mono overflow-x-auto">
              <span className="text-primary">$</span>{" "}
              <span className="text-foreground">cat whoami.json</span>{"\n\n"}
              <span className="text-muted-foreground">{"{"}</span>{"\n"}
              {"  "}<span className="text-primary">"name"</span>: <span className="text-foreground">"Abdullah Ali Saleem"</span>,{"\n"}
              {"  "}<span className="text-primary">"role"</span>: <span className="text-foreground">"Cybersecurity Engineer"</span>,{"\n"}
              {"  "}<span className="text-primary">"focus"</span>: <span className="text-foreground">"Security Tools & CV"</span>,{"\n"}
              {"  "}<span className="text-primary">"location"</span>: <span className="text-foreground">"Pakistan"</span>,{"\n"}
              {"  "}<span className="text-primary">"status"</span>: <span className="text-foreground">"Building & Breaking"</span>,{"\n"}
              {"  "}<span className="text-primary">"offline_first"</span>: <span className="text-primary">true</span>{"\n"}
              <span className="text-muted-foreground">{"}"}</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
