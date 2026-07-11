import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const EDUCATION_IMG = `${import.meta.env.BASE_URL}images/aa6bbbe39_Gemini_Generated_Image_1rxnk81rxnk81rxn.png`;

const highlights = [
  "4.97 / 5 GPA",
  "First Class Honors — Top 10 in college",
  "Bachelor of Computer Science",
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" label="Education" title="Academic background" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-border">
              <img src={EDUCATION_IMG} alt="Taibah University" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7">
            <h3 className="font-heading font-normal text-3xl text-foreground tracking-[-0.01em]">
              Computer Science
            </h3>
            <p className="font-serif text-lg text-muted-foreground mt-2">
              Taibah University · Al Madinah, Saudi Arabia
            </p>
            <p className="eyebrow mt-3">Jul 2020 — May 2025</p>

            <div className="mt-8 border-t border-border">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 py-3 border-b border-border">
                  <Award size={16} className="text-primary shrink-0" />
                  <span className="font-body text-sm text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
}