import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function PublicationSection() {
  return (
    <section id="publications" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="05" label="Publications" title="Research work" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/publication/typing-speed-prediction"
            className="group flex rounded-sm border border-border bg-card hover:border-primary/40 transition-all duration-300 overflow-hidden"
          >
            {/* Cover Image */}
            <div className="w-64 shrink-0 overflow-hidden hidden md:block">
              <img
                src={`${import.meta.env.BASE_URL}images/fc9c38246_generated_image.png`}
                alt="Typing Speed Prediction Research"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-7">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold font-body rounded-sm border border-primary/20">IEEE ICMI 2026</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-body rounded-sm">June 2026</span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-body rounded-sm">Taibah University</span>
                </div>
                <span className="inline-flex items-center gap-1 text-primary text-xs font-medium shrink-0 group-hover:gap-2 transition-all mt-1">
                  View Details <ArrowRight size={12} />
                </span>
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-normal text-foreground leading-snug tracking-[-0.01em] mb-3 group-hover:text-primary transition-colors">
                A Regression-based Machine Learning for Typing Speed Prediction Using Historical User Data
              </h3>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                A machine learning system to predict users' future typing speed from historical performance data — trained on 3.8M+ records from 142,356 users. LightGBM achieved R² = 0.92 and MAE = 4.45 WPM, outperforming LSTM, BiLSTM, and GRU models.
              </p>

              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-muted-foreground" />
                <span className="font-body text-xs text-muted-foreground">
                  Modhawi Alotaibi, <span className="text-primary font-semibold">Afnan Jadidi</span>, Ebtehal Eshaq, Furat Alraddadi, Shahad Alzayed, Youmna Sharaf
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}