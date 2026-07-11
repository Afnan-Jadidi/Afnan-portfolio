import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Keyboard, Zap, BarChart2, Globe, Users, ShoppingCart, TrendingUp, Filter, MapPin, AlertTriangle, ClipboardList, Bike, DollarSign, PieChart, Coffee, Clock, Store, GraduationCap, Briefcase, Map } from "lucide-react";
import SectionHeader from "./SectionHeader";

const JAVAJET_LOGO = `${import.meta.env.BASE_URL}images/b66e1e3da_BlackLogo.png`;

const TAG_ICONS = {
  "Excel": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  "DAX": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Power Query": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "SQL": "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  "MySQL": "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "XGBoost": "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png",
};

const projects = [
{
  id: "javajet",
  title: "JavaJet",
  subtitle: "An AI-Enhanced Touch-Typing Website for Java Coding",
  summary: "A web-based platform helping students improve typing speed and accuracy in Java code using XGBoost and fine-tuned LLAMA models.",
  tags: ["Machine Learning", "XGBoost", "LLAMA", "Python", "Web"],
  image: `${import.meta.env.BASE_URL}images/455e12a1b_Gemini_Generated_Image_szi89qszi89qszi8.png`,
  logo: JAVAJET_LOGO,
  highlights: [
    { icon: Keyboard, text: "Touch-typing engine" },
    { icon: Brain, text: "AI-powered feedback" },
    { icon: Zap, text: "Real-time analysis" },
  ],
},
{
  id: "adventureworks-bi",
  title: "AdventureWorks BI Report",
  subtitle: "Interactive Power BI Sales & Analytics System",
  summary: "A four-dashboard Power BI reporting system covering sales performance, product deep-dive, customer insights, and geographic distribution for a global bike retailer.",
  tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  image: `${import.meta.env.BASE_URL}images/1f0d2e83d_generated_image.png`,
  logo: null,
  highlights: [
    { icon: BarChart2, text: "Sales & product KPI dashboards" },
    { icon: Users, text: "Customer segmentation & top 100" },
    { icon: Globe, text: "Geographic sales map view" },
  ],
},
{
  id: "maven-careers",
  title: "Maven Careers",
  subtitle: "U.S. Wage & Employment Excel Dashboard",
  summary: "An interactive Excel dashboard analyzing U.S. wage and employment statistics across industries and states, with dynamic filters, map visualizations, and trend analysis.",
  tags: ["Excel", "Pivot Tables", "Slicers", "Data Visualization"],
  image: `${import.meta.env.BASE_URL}images/f143f4ee4_generated_image.png`,
  logo: null,
  highlights: [
    { icon: DollarSign, text: "Average annual wage by industry" },
    { icon: Map, text: "U.S. choropleth map by state" },
    { icon: TrendingUp, text: "Wage & employment trends 2017–2020" },
  ],
},
{
  id: "coffee-shop-dashboard",
  title: "Coffee Shop Dashboard",
  subtitle: "Excel Business Performance Dashboard",
  summary: "An interactive Excel dashboard analyzing coffee shop performance across revenue trends, daily/hourly transactions, and product categories for three store locations.",
  tags: ["Excel", "Power Query", "Pivot Tables", "Data Visualization"],
  image: `${import.meta.env.BASE_URL}images/7d7cc9401_generated_image.png`,
  logo: null,
  highlights: [
    { icon: Coffee, text: "Product category & revenue breakdown" },
    { icon: Clock, text: "Peak hour & daily transaction analysis" },
    { icon: Store, text: "Multi-location store filtering" },
  ],
},
{
  id: "maven-cycles",
  title: "Maven Cycles",
  subtitle: "End-to-End Sales Analytics Power BI Dashboard",
  summary: "A comprehensive Power BI sales dashboard for Maven Cycles tracking revenue, profit, profit margin, and quantity sold across products, categories, and global regions.",
  tags: ["Power BI", "DAX", "Sales Analytics", "Data Visualization"],
  image: `${import.meta.env.BASE_URL}images/3bcf1f69a_generated_image.png`,
  logo: null,
  highlights: [
    { icon: Bike, text: "Product detail & top-performer analysis" },
    { icon: DollarSign, text: "Revenue, profit & margin KPIs" },
    { icon: PieChart, text: "Category & geographic breakdown" },
  ],
},
{
  id: "maven-inspectional-services",
  title: "Maven Inspectional Services",
  subtitle: "Food Inspection Analytics Power BI Dashboard",
  summary: "An interactive Power BI dashboard analyzing food inspection data across regions, covering violation trends, sanitation grades, and geographic patterns by ZIP code.",
  tags: ["Power BI", "DAX", "Public Health", "Data Visualization"],
  image: `${import.meta.env.BASE_URL}images/afe57efff_generated_image.png`,
  logo: null,
  highlights: [
    { icon: ClipboardList, text: "Inspection volume by county & restaurant" },
    { icon: AlertTriangle, text: "Violations trending & sanitation grades" },
    { icon: MapPin, text: "Geographic bubble map by ZIP code" },
  ],
},
{
  id: "manufacturing-downtime",
  title: "Manufacturing Downtime Analysis",
  subtitle: "Production Efficiency Excel Dashboard",
  summary: "An Excel operational performance dashboard analyzing production line efficiency and top downtime causes across operators — applying the Pareto principle to identify the critical 20% of factors driving 80% of production losses.",
  tags: ["Excel", "Pareto Analysis", "Operations Analytics", "Data Visualization"],
  image: `${import.meta.env.BASE_URL}images/7a9cbd2b1_generated_image.png`,
  logo: null,
  highlights: [
    { icon: BarChart2, text: "Pareto chart of top 5 downtime factors" },
    { icon: Users, text: "Operator efficiency & performance comparison" },
    { icon: ClipboardList, text: "Actionable recommendations for improvement" },
  ],
},
{
  id: "maven-hotel-group",
  title: "Maven Hotel Group",
  subtitle: "Hotel Booking Analysis Excel Dashboard",
  summary: "An interactive Excel dashboard analyzing 119,000+ hotel booking records to uncover cancellation trends, revenue loss, ADR patterns, and booking channel behavior — supporting data-driven occupancy and revenue management strategies.",
  tags: ["Excel", "Pivot Tables", "Data Visualization", "Business Analytics"],
  image: `${import.meta.env.BASE_URL}images/26338926d_generated_image.png`,
  logo: null,
  highlights: [
    { icon: TrendingUp, text: "Cancellation rate & ADR trends over time" },
    { icon: DollarSign, text: "Revenue vs revenue loss by month" },
    { icon: Filter, text: "Lead time & booking channel analysis" },
  ],
},
{
  id: "maven-toys",
  title: "Maven Toys",
  subtitle: "Regional Revenue Excel Dashboard",
  summary: "An Excel-based regional revenue dashboard for Maven Toys analyzing store performance, monthly trends, and product-level gain/loss across regions — built as a reusable reporting tool refreshable with new sales data.",
  tags: ["Excel", "Data Visualization", "Sales Analytics", "Dashboard Design"],
  image: `${import.meta.env.BASE_URL}images/452d29f49_generated_image.png`,
  logo: null,
  highlights: [
    { icon: ShoppingCart, text: "Store ranking & regional comparison" },
    { icon: TrendingUp, text: "2021 vs 2020 monthly revenue trends" },
    { icon: DollarSign, text: "Product-level gain/loss analysis" },
  ],
},
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" label="Projects" title="Featured work" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="h-full"
            >
              <Link to={`/project/${project.id}`} className="group flex flex-col h-full">
                <div className="bg-card rounded-sm overflow-hidden transition-all duration-300 border border-border hover:border-primary/40 flex flex-col h-full">

                  {/* Image */}
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {project.logo && (
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md">
                        <img src={project.logo} alt={project.title} className="h-6 object-contain" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-heading text-xl font-normal text-foreground mb-1 group-hover:text-primary transition-colors leading-snug tracking-[-0.01em]">
                      {project.title}
                    </h3>
                    <p className="font-serif text-sm text-muted-foreground mb-4">{project.subtitle}</p>

                    {/* Highlights */}
                    <div className="flex flex-col gap-1.5 mb-4">
                      {project.highlights.map((h) => (
                        <div key={h.text} className="flex items-center gap-2 text-xs text-muted-foreground font-body">
                          <h.icon size={12} className="text-primary shrink-0" />
                          {h.text}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-secondary text-muted-foreground text-xs font-body rounded-sm">
                          {TAG_ICONS[tag] && <img src={TAG_ICONS[tag]} alt={tag} className="w-3 h-3 object-contain" />}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>);

}