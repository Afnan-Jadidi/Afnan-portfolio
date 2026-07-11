import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowDown } from "lucide-react";

const AVATAR_URL = `${import.meta.env.BASE_URL}images/3d3428a1b_generated_8585f5e1.png`;

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Top meta row — editorial masthead */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-b border-border pb-4 mb-14">
          <span className="eyebrow">Portfolio — 2026</span>
          <span className="eyebrow hidden sm:block">Madinah, Saudi Arabia</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Left — the name, set large and editorial */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="eyebrow mb-6">
              Data Analyst
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-heading font-light text-foreground leading-[0.92] tracking-[-0.02em] text-6xl sm:text-7xl md:text-8xl">
              Afnan Jadidi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl mt-8">
              Turning raw data into insights that drive decisions — building
              dashboards, managing portfolios, and applying machine learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 text-sm font-body text-muted-foreground">
              <a href="mailto:afnanjadidi@gmail.com" className="group inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={15} /> afnanjadidi@gmail.com
              </a>
              <a href="https://linkedin.com/in/afnan-jadidi-536b44159" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin size={15} /> LinkedIn
              </a>
              <a href="https://github.com/Afnan-Jadidi" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Github size={15} /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Right — portrait, framed square not a bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="lg:col-span-4">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-[280px] mx-auto lg:ml-auto overflow-hidden rounded-sm border border-border">
                <img src={AVATAR_URL} alt="Afnan Jadidi — Data Analyst" className="w-full h-full object-cover grayscale-[15%]" />
              </div>
              <div className="absolute -bottom-3 -left-3 hidden lg:block eyebrow bg-background px-2 py-1 border border-border">
                CS · First Class Honors
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={scrollToAbout}
        className="mt-16 mx-auto flex items-center gap-2 eyebrow hover:text-primary transition-colors">
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </motion.button>
    </section>);
}