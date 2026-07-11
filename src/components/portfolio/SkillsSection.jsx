import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const techSkills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Excel", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftexcel.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const competencies = [
  "Data Visualization",
  "Dashboard Development",
  "Data Preprocessing",
  "Machine Learning",
  "Portfolio Management",
  "Teamwork & Collaboration",
  "Problem Solving",
  "Time Management",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="08" label="Skills" title="Toolkit & competencies" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7">
            <p className="eyebrow mb-6">Technologies & Tools</p>
            <div className="grid grid-cols-4 gap-x-4 gap-y-8">
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex flex-col items-center gap-3 group">
                  <img src={skill.logo} alt={skill.name} className="w-9 h-9 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <span className="font-body text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Competencies — numbered editorial list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5">
            <p className="eyebrow mb-6">Core Competencies</p>
            <div className="border-t border-border">
              {competencies.map((c, i) => (
                <div key={c} className="flex items-baseline gap-4 py-3 border-b border-border group">
                  <span className="font-serif text-xs text-primary tabular-nums w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
}