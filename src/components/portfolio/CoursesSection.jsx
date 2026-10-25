import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const MAVEN_LOGO = `${import.meta.env.BASE_URL}images/79fe31baf_9B202CCF-9CBC-FF5D-27CA5E9A37D2EDC7-logo.jpg`;
const KAUST_LOGO = `${import.meta.env.BASE_URL}images/ebd310ba5_q-1.jpg`;
const UMICH_LOGO = `${import.meta.env.BASE_URL}images/3c3aa1fd6_University-Of-Michigan-Emblem-logo.png`;

const TOOL_LOGOS = {
  "Microsoft Excel": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Microsoft Copilot": "https://img.icons8.com/color/48/microsoft-copilot.png",
  "Power Query / DAX": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "MySQL": "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  "Data Analytics": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "AI / Ethics": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  "AI": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
};

const courses = [
  // Excel
  { id: "microsoft-excel-foundations", title: "Microsoft Excel Foundations", provider: "Maven Analytics", date: "Feb 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Microsoft Excel" },
  { id: "excel-pivottables", title: "Excel PivotTables", provider: "Maven Analytics", date: "Apr 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Microsoft Excel" },
  { id: "advanced-excel-dashboard-design", title: "Advanced Excel Dashboard Design", provider: "Maven Analytics", date: "May 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Microsoft Excel" },
  { id: "microsoft-copilot-for-excel", title: "Microsoft Copilot for Excel", provider: "Maven Analytics", date: "Jun 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Microsoft Excel" },
  // Power Query / Power Pivot / DAX
  { id: "power-query-power-pivot-dax", title: "Power Query, Power Pivot & DAX", provider: "Maven Analytics", date: "May 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Power Query / DAX" },
  // Power BI
  { id: "power-bi-desktop", title: "Power BI Desktop", provider: "Maven Analytics", date: "Dec 2025", logo: MAVEN_LOGO, mavenLogo: true, tool: "Power BI" },
  { id: "power-bi-service", title: "Power BI Service", provider: "Maven Analytics", date: "Dec 2025", logo: MAVEN_LOGO, mavenLogo: true, tool: "Power BI" },
  { id: "microsoft-pl300-exam-prep", title: "Microsoft PL-300 Exam Prep", provider: "Maven Analytics", date: "Jan 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Power BI" },
  // SQL
  { id: "mysql-data-analysis", title: "MySQL Data Analysis", provider: "Maven Analytics", date: "Jun 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "MySQL" },
  { id: "mysql-database-administration", title: "MySQL Database Administration", provider: "Maven Analytics", date: "Jun 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "MySQL" },
  { id: "advanced-sql-querying", title: "Advanced SQL Querying", provider: "Maven Analytics", date: "Jul 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "MySQL" },
  // Data & AI
  { id: "data-literacy-foundations", title: "Data Literacy Foundations", provider: "Maven Analytics", date: "Feb 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Data Analytics" },
  { id: "data-ai-ethics", title: "Data & AI Ethics", provider: "Maven Analytics", date: "Apr 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "AI / Ethics" },
  { id: "introduction-to-ai", title: "Introduction to AI", provider: "KAUST", date: "Feb 2024", logo: KAUST_LOGO, tool: "AI" },
  // Python
  { id: "python-foundations-for-data-analysis", title: "Python Foundations for Data Analysis", provider: "Maven Analytics", date: "Aug 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Python" },
  { id: "data-analysis-with-python-pandas", title: "Data Analysis with Python & Pandas", provider: "Maven Analytics", date: "Sep 2026", logo: MAVEN_LOGO, mavenLogo: true, tool: "Python" },
  { id: "python-basics", title: "Python Basics", provider: "University of Michigan", date: "Oct 2023", logo: UMICH_LOGO, tool: "Python" },
  { id: "python-classes-inheritance", title: "Python Classes and Inheritance", provider: "University of Michigan", date: "Oct 2023", logo: UMICH_LOGO, tool: "Python" },
];


// Filter groups shown above the grid. Each group lists the course "tool" tags it covers.
const FILTERS = [
  { label: "All", tools: null },
  { label: "Excel", tools: ["Microsoft Excel"] },
  { label: "Power BI & DAX", tools: ["Power BI", "Power Query / DAX"] },
  { label: "SQL", tools: ["MySQL"] },
  { label: "Python", tools: ["Python"] },
  { label: "Data & AI", tools: ["Data Analytics", "AI / Ethics", "AI"] },
];

const matches = (filter, course) => !filter.tools || filter.tools.includes(course.tool);

export default function CoursesSection() {
  const [active, setActive] = useState("All");
  const filter = FILTERS.find((f) => f.label === active) || FILTERS[0];
  const visible = courses.filter((c) => matches(filter, c));

  return (
    <section id="courses" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="07" label="Courses" title="Continuous learning" />

        <div role="group" aria-label="Filter courses by topic" className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => {
            const count = courses.filter((c) => matches(f, c)).length;
            const isActive = f.label === active;
            return (
              <button
                key={f.label}
                type="button"
                onClick={() => setActive(f.label)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-body text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {f.label}
                <span className={`text-xs tabular-nums ${isActive ? "text-primary-foreground/80" : "text-muted-foreground/70"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
          {visible.map((course, i) => (
            <motion.div
              key={course.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.05 }}
              className="rounded-sm p-6 border border-border bg-card hover:border-primary/40 transition-colors duration-300"
            >
              <Link to={`/course/${course.id}`} className="group block">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${course.mavenLogo ? "bg-black" : "bg-white"} rounded-xl flex items-center justify-center shadow-sm p-2 shrink-0`}>
                    <img src={course.logo} alt={course.provider} className="w-8 h-8 object-contain" />
                  </div>
                  <span className="font-body text-xs text-muted-foreground">{course.date}</span>
                </div>
                <h3 className="font-body text-sm font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="font-body text-xs text-muted-foreground mb-3">{course.provider}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-primary/8 text-primary text-xs font-medium font-body rounded-full border border-primary/20">
                    {TOOL_LOGOS[course.tool] && (
                      <img src={TOOL_LOGOS[course.tool]} alt={course.tool} className="w-3.5 h-3.5 object-contain" />
                    )}
                    {course.tool}
                  </span>
                  <span className="inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
