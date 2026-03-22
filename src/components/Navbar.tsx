import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(n => document.getElementById(n.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 150) {
          setActive(navItems[i].id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-primary font-heading font-bold text-lg">{"<AS />"}</a>
        <div className="flex gap-6">
          {navItems.map(n => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-sm transition-colors duration-200 hover:text-primary ${active === n.id ? "nav-link-active" : "text-muted-foreground"}`}
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
