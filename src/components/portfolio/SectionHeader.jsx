import { motion } from "framer-motion";

/**
 * Editorial section header — numbered index label + serif title,
 * aligned to a baseline rule. Shared across all sections for consistency.
 */
export default function SectionHeader({ index, label, title, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${className}`}>
      <div className="flex items-baseline gap-4 border-b border-border pb-5">
        <span className="font-serif text-sm text-primary tabular-nums">
          {index}
        </span>
        <span className="eyebrow">{label}</span>
      </div>
      <h2 className="font-heading font-light text-4xl md:text-5xl tracking-[-0.02em] text-foreground mt-6">
        {title}
      </h2>
    </motion.div>
  );
}