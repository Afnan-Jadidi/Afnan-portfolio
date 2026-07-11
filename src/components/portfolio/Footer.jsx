import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="pt-10 pb-6 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-background/50">Get in touch</p>
        <h2 className="font-heading font-light text-5xl md:text-7xl tracking-[-0.02em] leading-[0.95] mt-6 max-w-3xl hidden">
          Let's build something with <span className="italic">data</span>.
        </h2>
        <p className="font-serif text-background/70 max-w-lg mt-5 text-base">Always open to discussing data analytics, new projects, and opportunities.


        </p>

        <div className="grid sm:grid-cols-3 gap-px bg-background/15 mt-6 border-y border-background/15">
          <a href="mailto:afnanjadidi@gmail.com"
          className="group flex items-center justify-between gap-4 bg-foreground px-6 py-6 hover:bg-primary transition-colors">
            <span className="flex items-center gap-3 font-body text-sm">
              <Mail size={16} /> Email
            </span>
            <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://linkedin.com/in/afnan-jadidi-536b44159" target="_blank" rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 bg-foreground px-6 py-6 hover:bg-primary transition-colors">
            <span className="flex items-center gap-3 font-body text-sm">
              <Linkedin size={16} /> LinkedIn
            </span>
            <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://github.com/Afnan-Jadidi" target="_blank" rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 bg-foreground px-6 py-6 hover:bg-primary transition-colors">
            <span className="flex items-center gap-3 font-body text-sm">
              <Github size={16} /> GitHub
            </span>
            <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <div className="flex items-center justify-between mt-6 pt-4">
          <span className="font-heading text-lg">A<span className="text-primary">.</span>J</span>
          <p className="font-body text-xs text-background/50">
            © {new Date().getFullYear()} Afnan Jadidi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);
}