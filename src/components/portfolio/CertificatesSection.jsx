import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="06" label="Certificates" title="Professional certifications" />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-sm overflow-hidden border border-border grid grid-cols-3 hover:border-primary/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-center p-6 bg-secondary/50">
              <img
                src={`${import.meta.env.BASE_URL}images/e32c7e58a_image.png`}
                alt="Microsoft Certified Associate Badge"
                className="w-24 h-24 object-contain drop-shadow-md"
              />
            </div>
            <div className="p-6 col-span-2 flex flex-col justify-center">
              <Award className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-heading text-lg font-normal text-foreground mb-1 tracking-[-0.01em]">
                Power BI Data Analyst Associate
              </h3>
              <p className="font-body text-muted-foreground text-xs mb-2">
                Microsoft Certification — PL-300
              </p>
              <p className="font-body text-muted-foreground text-xs leading-relaxed mb-3">
                Professional certification validating expertise in data analysis,
                visualization, and dashboard development using Microsoft Power BI.
              </p>
              <a
                href="https://learn.microsoft.com/ar-sa/users/afnanjadidi-8641/credentials/f139dbe87cc352a?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-xs font-body font-medium hover:gap-3 transition-all"
              >
                View Certification <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="bg-card rounded-sm overflow-hidden border border-border grid grid-cols-3 hover:border-primary/40 transition-colors duration-300"
          >
            <div className="flex items-center justify-center p-6 bg-secondary/50">
              <img
                src={`${import.meta.env.BASE_URL}images/66338fde1_ChatGPTImage15202612_26_14.png`}
                alt="Saudi Council of Engineers Logo"
                className="w-24 h-24 object-contain drop-shadow-md"
              />
            </div>
            <div className="p-6 col-span-2 flex flex-col justify-center">
              <Award className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-heading text-lg font-normal text-foreground mb-1 tracking-[-0.01em]">
                Saudi Council of Engineers
              </h3>
              <p className="font-body text-muted-foreground text-xs mb-2">
                SCE — Specialist Membership
              </p>
              <p className="font-body text-muted-foreground text-xs leading-relaxed mb-3">
                Registered specialist engineer with the Saudi Council of Engineers,
                the official regulatory body for engineering professionals in Saudi Arabia.
              </p>
              <a
                href="https://eservices.saudieng.sa/ar/accreditation/pages/validation.aspx?Membershipid=1252476"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary text-xs font-body font-medium hover:gap-3 transition-all"
              >
                Verify Accreditation <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}