import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, GraduationCap, TrendingUp, Users, Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/portfolio/Navbar";
import Footer from "../components/portfolio/Footer";

const CERT_IMAGE = `${import.meta.env.BASE_URL}images/fef53bf8b_image.png`;
const SLIDE_IMAGE_1 = `${import.meta.env.BASE_URL}images/26b0f2dda_image.png`;
const SLIDE_IMAGE_2 = `${import.meta.env.BASE_URL}images/df43aa411_image.png`;

const metrics = [
  { label: "R²", value: "0.92", desc: "Variance explained" },
  { label: "MAE", value: "4.45", desc: "WPM avg error" },
  { label: "MAPE", value: "6.71%", desc: "Relative accuracy" },
];

const authors = [
  { name: "Modhawi Alotaibi", linkedin: "https://www.linkedin.com/in/modhawi-alotaibi-3b23a813b/" },
  { name: "Afnan Jadidi", linkedin: "https://www.linkedin.com/in/afnan-jadidi-536b44159" },
  { name: "Ebtehal Eshaq", linkedin: "https://www.linkedin.com/in/ebtehal-al-hatmi-b1a262396/" },
  { name: "Furat Alraddadi", linkedin: "https://www.linkedin.com/in/furat-alraddadi/" },
  { name: "Shahad Alzayed", linkedin: "https://www.linkedin.com/in/shahad-alzayed-22b8a430b/" },
  { name: "Youmna Sharaf", linkedin: "https://www.linkedin.com/in/youmna-sharaf/" },
];

const contributions = [
  "Applied regression-based ML to touch typing education — a domain where predictive tools were previously absent",
  "Engineered 11 behavior-based features from raw typing session data",
  "Demonstrated that gradient boosting significantly outperforms deep learning (LSTM/GRU) for user progression data",
  "Built a system applicable beyond typing — to any skill-learning domain where personalized, data-driven feedback matters",
];

export default function PublicationDetail() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 border-b border-border/50 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <Link to="/#publications" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold font-body rounded-full border border-primary/20">IEEE ICMI 2026</span>
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-body rounded-full">June 2026</span>
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-body rounded-full">Taibah University</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3 leading-snug">
            A Regression-based Machine Learning for Typing Speed Prediction Using Historical User Data
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-6">
            IEEE 5th International Conference on Computing and Machine Intelligence (ICMI 2026) · King Faisal University, Saudi Arabia
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/11539957"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-body font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            <BookOpen size={15} /> Read on IEEE Xplore <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-14">

          {/* Overview */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" /> Overview
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              This paper proposes a machine learning approach to predict users' future typing speed based on their historical performance data. While most typing platforms focus only on real-time feedback, this system offers forward-looking, personalized speed predictions — motivating users to practice consistently by showing them where they're headed.
            </p>
          </div>

          {/* What We Built */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" /> What We Built
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              We trained and evaluated 7 regression models on a real-world dataset of over <strong className="text-foreground">3.8 million records</strong> from <strong className="text-foreground">142,356 anonymous users</strong> sourced from MonkeyType. After extensive feature engineering, <strong className="text-foreground">LightGBM (LGBMRegressor)</strong> emerged as the best choice — outperforming XGBoost, Linear Regression, LSTM, BiLSTM, and GRU models, while also being faster and more memory-efficient.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-border/50 bg-muted/30 p-4 text-center">
                  <div className="font-heading text-2xl font-bold text-primary mb-1">{m.value}</div>
                  <div className="font-body text-xs font-semibold text-foreground mb-0.5">{m.label}</div>
                  <div className="font-body text-xs text-muted-foreground">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Contributions */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" /> Key Contributions
            </h2>
            <ul className="space-y-3">
              {contributions.map((c, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span className="font-body text-muted-foreground leading-relaxed">{c}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Conference Materials */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award size={20} className="text-primary" /> Conference Materials
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[CERT_IMAGE, SLIDE_IMAGE_1, SLIDE_IMAGE_2].map((src, i) => (
                <div key={i} className="h-52 rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={src} alt={`Publication material ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Authors */}
          <div className="pt-2 border-t border-border/50">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users size={20} className="text-primary" /> Authors
            </h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {authors.map((a) => (
                <a
                  key={a.name}
                  href={a.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View LinkedIn Profile"
                  className="group/author relative inline-flex items-center gap-1.5 px-3 py-1 text-xs font-body rounded-full border bg-muted text-muted-foreground border-border/50 hover:border-primary/30 hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                >
                  {a.name}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background text-[10px] font-medium px-2 py-1 rounded-md opacity-0 group-hover/author:opacity-100 transition-opacity pointer-events-none z-10">
                    View LinkedIn ↗
                  </span>
                </a>
              ))}
            </div>
            <p className="font-body text-xs text-muted-foreground">
              Faculty of Computer Science and Engineering, Taibah University, Saudi Arabia
            </p>
          </div>

        </motion.div>
      </div>

      <Footer />
    </div>
  );
}