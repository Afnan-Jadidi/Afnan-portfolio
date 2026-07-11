import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const milestones = [
  { year: "2025", label: "Graduated — Computer Science", sub: "Taibah University · First Class Honors" },
  { year: "2025", label: "Data Analyst — Tamheer", sub: "Madinah Health Cluster" },
  { year: "Now", label: "Data Analyst — P3O", sub: "SETS Engineering Consultants" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" label="About" title="A passion for data-driven solutions" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Lede — set in serif, larger, editorial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7">
            <p className="font-serif text-2xl md:text-[1.75rem] leading-[1.5] text-foreground">
              Computer Science graduate transforming raw data into decisions
              that matter.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mt-6 max-w-xl">
              A certified Power BI analyst with hands-on experience building
              interactive dashboards, managing large-scale project portfolios,
              and applying machine learning — always in pursuit of insight that
              moves an organization forward.
            </p>
          </motion.div>

          {/* Vertical timeline — clean, no fragile absolute positioning */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5">
            <div className="border-l border-border pl-6 space-y-8">
              {milestones.map((m) => (
                <div key={m.label} className="relative">
                  <span className="absolute -left-[1.72rem] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-serif text-sm text-primary mb-1">{m.year}</p>
                  <p className="font-body font-semibold text-foreground text-sm">{m.label}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
}