const Hero = () => (
  <section className="min-h-screen flex items-center justify-center px-6 relative">
    <div className="max-w-4xl">
      <p className="text-muted-foreground font-mono text-sm mb-6">{"> security engineer & tool builder"}</p>
      <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-4">
        <span className="glitch text-foreground" data-text="Abdullah">Abdullah</span>{" "}
        <span className="text-primary">Ali Saleem</span>
      </h1>
      <p className="font-heading text-xl md:text-2xl text-muted-foreground blink-cursor">
        Cybersecurity Engineer
      </p>
      <div className="flex gap-4 mt-10">
        <a
          href="#projects"
          className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded hover:brightness-110 transition-all"
        >
          view projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-all"
        >
          get in touch
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
