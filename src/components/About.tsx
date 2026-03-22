const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="section-label mb-4 reveal">{"// about"}</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 reveal">
          <p className="text-foreground leading-relaxed">
            I build security-focused tools that make systems harder to break. My work spans biometric authentication, computer vision, and offline-first technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With an offensive security mindset, I design and engineer solutions by understanding how systems fail—then improving them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Focused on practical, real-world security, I create tools that stay reliable even without cloud dependency.
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
              {"  "}<span className="text-primary">"location"</span>: <span className="text-foreground">"Helsinki, Finland"</span>,{"\n"}
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
