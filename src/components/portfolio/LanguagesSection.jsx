import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Proficient — STEP 90/100" },
];

export default function LanguagesSection() {
  return (
    <section id="languages" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="09" label="Languages" title="Language proficiency" />

        <div className="border-t border-border">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-baseline justify-between gap-6 py-6 border-b border-border">
              <h3 className="font-heading font-normal text-2xl md:text-3xl text-foreground tracking-[-0.01em]">
                {lang.name}
              </h3>
              <p className="font-serif text-base text-muted-foreground text-right">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>);
}