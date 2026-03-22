import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="section-label mb-4 reveal">{"// contact"}</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 reveal">
        Get In Touch
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 reveal">
          <p className="text-foreground leading-relaxed">
            I'm always open to discussing new projects, security research, or collaboration opportunities. If you're working on something interesting — let's talk.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's a vulnerability you need help with, a tool idea, or just a conversation about cybersecurity — my inbox is open.
          </p>
        </div>
        <div className="space-y-4 reveal">
          <a
            href="mailto:abdullahsaleem874@gmail.com"
            className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
          >
            <Mail className="text-primary w-5 h-5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground font-mono">email</p>
              <p className="text-foreground text-sm">abdullahsaleem874@gmail.com</p>
            </div>
          </a>
          <a
            href="mailto:Abdullah.alisaleem@metropolia.fi"
            className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
          >
            <Mail className="text-primary w-5 h-5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground font-mono">email</p>
              <p className="text-foreground text-sm">Abdullah.alisaleem@metropolia.fi</p>
            </div>
          </a>
          <a
            href="https://github.com/1abdullah874"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
          >
            <Github className="text-primary w-5 h-5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground font-mono">github</p>
              <p className="text-foreground text-sm">github.com/1abdullah874</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-ali-saleem-5b8bab298/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
          >
            <Linkedin className="text-primary w-5 h-5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground font-mono">linkedin</p>
              <p className="text-foreground text-sm">Abdullah Ali Saleem</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
