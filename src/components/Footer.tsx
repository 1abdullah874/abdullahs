import ViewCounter from "./ViewCounter";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="flex flex-col items-center gap-2">
      <ViewCounter />
      <p className="text-center text-muted-foreground text-xs font-mono">
        built by Abdullah Ali Saleem — no frameworks, no cloud, no nonsense.
      </p>
    </div>
  </footer>
);

export default Footer;
