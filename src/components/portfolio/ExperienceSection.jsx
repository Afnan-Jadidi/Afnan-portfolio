import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    id: "sets-consultant",
    title: "Data Analyst",
    company: "P3O — SETS Engineering Consultants",
    location: "Madinah",
    period: "Sep 2025 — Present",
    summary: "Five-Year Portfolio Management for Madinah Municipality — integrating data from 4 sources across 1,500+ projects.",
    logo: `${import.meta.env.BASE_URL}images/4d19e191e_Picture1.svg`,
  },
  {
    id: "madinah-health",
    title: "Data Analyst",
    company: "Madinah Health Cluster",
    location: "Madinah",
    period: "Jul 2025 — Aug 2025",
    summary: "Designed 6 interactive Power BI dashboards spanning 5.4M records across all primary healthcare centers.",
    logo: `${import.meta.env.BASE_URL}images/a7c0998ca_upscalemedia-transformed-removebg-preview.png`,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" label="Experience" title="Professional journey" />

        {/* Editorial ledger — each role is a full-width bordered row */}
        <div className="border-t border-border">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}>
              <Link
                to={`/experience/${exp.id}`}
                className="group grid md:grid-cols-12 gap-4 md:gap-8 items-start py-8 md:py-10 border-b border-border hover:bg-background transition-colors duration-300 -mx-4 px-4">
                {/* Period */}
                <div className="md:col-span-3">
                  <p className="font-serif text-sm text-primary">{exp.period}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{exp.location}</p>
                </div>

                {/* Company + role */}
                <div className="md:col-span-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading font-normal text-2xl md:text-3xl text-foreground leading-tight tracking-[-0.01em] group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                  </div>
                  <p className="eyebrow mt-2">{exp.title}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4 max-w-xl">
                    {exp.summary}
                  </p>
                </div>

                {/* Logo + arrow */}
                <div className="md:col-span-2 flex md:flex-col md:items-end items-center justify-between gap-4 md:h-full">
                  {exp.logo && (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-9 object-contain max-w-[110px] opacity-80" />
                  )}
                  <ArrowUpRight
                    size={22}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>);
}