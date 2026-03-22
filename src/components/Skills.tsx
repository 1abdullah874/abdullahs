const skillGroups = [
  { title: "LANGUAGES", items: ["Python", "C", "Bash/Shell", "SQL"] },
  { title: "SECURITY TOOLS", items: ["Burp Suite", "Metasploit", "tcpdump", "Wireshark"] },
  { title: "DEV ENVIRONMENT", items: ["VMware", "VirtualBox", "Linux", "VS Code"] },
  { title: "CONCEPTS", items: ["Computer Vision", "Password Hashing", "Network Security", "Multi-Factor Auth", "Penetration Testing"] },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="section-label mb-4 reveal">{"// skills"}</p>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-12 reveal">
        What I Work With
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((g, i) => (
          <div key={i} className="p-6 rounded-lg bg-card border border-border reveal">
            <h3 className="text-primary font-mono text-sm mb-4 tracking-wider">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map(item => (
                <span key={item} className="text-sm px-3 py-1.5 rounded bg-secondary text-foreground font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
