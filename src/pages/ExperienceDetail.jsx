import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, X } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/portfolio/Navbar";
import Footer from "../components/portfolio/Footer";

const experienceData = {
  "sets-consultant": {
    title: "Data Analyst",
    company: "SETS Saudi Arabia Engineering Consultants (P3O)",
    location: "Madinah",
    period: "Sep 2025 — Present",
    image: `${import.meta.env.BASE_URL}images/77972a801_generated_d051e815.png`,
    description: "Five-Year Portfolio Management for Madinah Municipality.",
    details: [
    "Integrated project data from 4 different sources to produce a unified master file reflecting the actual status of 1500+ projects.",
    "Analyzing project data to extract insights that support decision-making.",
    "Conducted quarterly portfolio comparisons across 1000+ projects that represent the progress of updating the portfolio during the different quarters.",
    "Prioritized projects and focused efforts on high-priority items.",
    "Created and issued periodic portfolio reports using the dashboard, identifying delays and reallocating priorities."],
    gallery: [
      `${import.meta.env.BASE_URL}images/67a2afb5a_image.png`,
      `${import.meta.env.BASE_URL}images/3034b4baf_image.png`,
      `${import.meta.env.BASE_URL}images/b9dc6848b_image.png`,
      `${import.meta.env.BASE_URL}images/dae44dee8_image.png`,
    ],
  },
  "madinah-health": {
    title: "Data Analyst",
    company: "Madinah Health Cluster",
    location: "Madinah",
    period: "Jul 2025 — Aug 2025",
    image: `${import.meta.env.BASE_URL}images/083c31acd_generated_03b2445b.png`,
    description: "Designed and developed 6 interactive Power BI dashboards for Madinah Health Cluster.",
    details: [
    "Covering patient journeys, dental procedures, radiation, vaccines, PHC visits, and appointments.",
    "Spanning over 5.4M appointment records and 7.4M patient visits across all primary healthcare centers in Madinah."]

  }
};

export default function ExperienceDetail() {
  const { id } = useParams();
  const exp = experienceData[id];
  const [lightbox, setLightbox] = useState(null);

  if (!exp) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-body">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Not Found</h2>
          <Link to="/" className="text-primary hover:underline">Go Home</Link>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar solid />

      {/* Hero */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto">
          <Link to="/#experience" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 -mt-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
            {exp.title}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {exp.company}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {exp.period}</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> {exp.location}</span>
          </div>

          <p className="font-body text-lg text-foreground font-medium mb-8">{exp.description}</p>

          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Key Responsibilities</h3>
          <ul className="space-y-4">
            {exp.details.map((detail, i) =>
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-4">

                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <p className="font-body text-muted-foreground leading-relaxed">{detail}</p>
              </motion.li>
            )}
          </ul>

          {/* Photo Gallery */}
          {exp.gallery?.length > 0 && (
            <div className="mt-12">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {exp.gallery.map((src, i) => (
                  <div key={i} className="aspect-video rounded-xl overflow-hidden border border-border/50 shadow-sm cursor-pointer" onClick={() => setLightbox(src)}>
                    <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lightbox */}
          {lightbox && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
              <button className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
                <X size={24} />
              </button>
              <img src={lightbox} alt="Full size" className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl" onClick={(e) => e.stopPropagation()} />
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>);

}