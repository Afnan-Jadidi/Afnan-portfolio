import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Users, X } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/portfolio/Navbar";
import Footer from "../components/portfolio/Footer";

const techIcons = {
  "Power BI": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Excel": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  "XGBoost": "https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "SharePoint": "https://img.icons8.com/color/48/microsoft-sharepoint-2019--v1.png",
  "DAX": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "SQL": "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  "MySQL": "https://www.svgrepo.com/show/303251/mysql-logo.svg",
  "Power Query": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Data Modeling": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "Pivot Tables": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "PivotTables": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Slicers": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Map Visualization": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Dashboard Design": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Pareto Analysis": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Conditional Formatting": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Pivot Charts": "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png",
  "Data Visualization": "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  "LLAMA": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
};

const projectData = {
  "sets-consultant": {
    title: "Five-Year Portfolio Management",
    subtitle: "Madinah Municipality — Five-Year Strategic Portfolio",
    location: "P3O — Saudi Arabia Engineering Consultants",
    image: `${import.meta.env.BASE_URL}images/77972a801_generated_d051e815.png`,
    description:
      "A comprehensive portfolio management system integrating data from 4 sources across 1500+ projects for Madinah Municipality's five-year strategic plan.",
    details: [
      "Integrated data from 4 different sources spanning 1500+ municipality projects into a unified reporting system.",
      "Built interactive Power BI dashboards providing real-time visibility into project status, timelines, and KPIs.",
      "Automated data pipelines using Excel and SharePoint to reduce manual reporting effort.",
      "Delivered executive-level insights to support strategic decision-making for Madinah Municipality leadership.",
    ],
    technologies: ["Power BI", "Excel", "SharePoint", "DAX", "SQL"],
    supervisor: { name: "م. عادل جمعة الحمدي", linkedin: null },
    members: [
      { name: "أمنان وليد جديدي", linkedin: null },
    ],
    gallery: [
      `${import.meta.env.BASE_URL}images/67a2afb5a_image.png`,
      `${import.meta.env.BASE_URL}images/3034b4baf_image.png`,
      `${import.meta.env.BASE_URL}images/b9dc6848b_image.png`,
      `${import.meta.env.BASE_URL}images/dae44dee8_image.png`,
    ],
  },
  "maven-careers": {
    title: "Maven Careers",
    subtitle: "U.S. Wage & Employment Excel Dashboard",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/f143f4ee4_generated_image.png`,
    description:
      "An interactive Excel dashboard created to analyze wage and employment statistics across U.S. industries and states, transforming labor statistics into clear and interactive insights using Excel formulas, charts, slicers, and map visualizations.",
    details: [
      "Average Annual Wage horizontal bar chart comparing wages across industries — Business Services leads at $74.71K — with dynamic highlighting of the selected industry.",
      "Share of Employees donut chart displaying the selected industry's workforce share (e.g., 17% for Business Services) relative to total U.S. employment.",
      "Wage & Employee Trends dual-axis chart tracking average wage growth ($65K → $75K) and total employee count (20M+) from 2017 to 2020.",
      "Interactive U.S. map choropleth visualizing average wage and employee density per 1,000 workers by state, enabling geographic workforce comparisons.",
      "Industry slicer filter dynamically updating all visualizations for targeted analysis of any selected sector.",
    ],
    technologies: ["Excel", "Pivot Tables", "Slicers", "Map Visualization", "Data Visualization"],
    gallery: [
      `${import.meta.env.BASE_URL}images/f63da3442_image.png`,
    ],
  },
  "coffee-shop-dashboard": {
    title: "Coffee Shop Dashboard",
    subtitle: "Excel Business Performance Dashboard",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/7d7cc9401_generated_image.png`,
    description:
      "An interactive Coffee Shop Dashboard developed using Excel to analyze and visualize business performance, providing insights into monthly revenue trends, daily and hourly transaction patterns, and product category performance across multiple store locations.",
    details: [
      "Revenue by Months line chart tracking total sales growth from January through June, revealing a consistent upward trend peaking at over $50,000.",
      "Transactions by Day bar chart identifying peak days (Monday and Friday) to support staffing and inventory planning decisions.",
      "Transactions by Hour bar chart pinpointing the busiest hours (8–10 AM) for operational optimization and resource allocation.",
      "Transactions by Product Category horizontal bar chart comparing Coffee, Tea, Bakery, and other categories to surface best-selling segments.",
      "Detailed product pivot table listing top products by transaction count and revenue — Barista Espresso leads with 5,320 transactions and $31,051 in revenue.",
      "Store location filter (Astoria, Hell's Kitchen, Lower Manhattan) enabling location-specific performance analysis.",
    ],
    technologies: ["Excel", "Power Query", "Pivot Tables", "Data Visualization"],
    gallery: [
      `${import.meta.env.BASE_URL}images/ebddc037b_image.png`,
    ],
  },
  "maven-cycles": {
    title: "Maven Cycles",
    subtitle: "End-to-End Sales Analytics Power BI Dashboard",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/3bcf1f69a_generated_image.png`,
    description:
      "An end-to-end Power BI sales analytics dashboard for Maven Cycles, providing a comprehensive view of business performance by tracking key KPIs such as total revenue, profit, profit margin, and quantity sold across products, categories, and regions.",
    details: [
      "KPI cards tracking total revenue (0.38M), profit (0.24M), profit margin (63.50%), and quantity sold — each with goal comparisons and sparkline trend indicators.",
      "Product Detail table listing top-performing items with total orders, total revenue, and profit margin — enabling granular product-level analysis.",
      "Geographic map visualizing revenue, profit, and quantity sold by country, with region filters for Europe, North America, and Pacific.",
      "Product by Category donut chart breaking down sales into Accessories (51.9%), Bikes (44.15%), and Clothing (3.95%).",
      "Profit by Period line chart tracking quarterly profit trends to identify growth patterns and performance fluctuations.",
      "Dynamic filters for transaction date range, subcategory, and region enable flexible exploration of the data from multiple perspectives.",
    ],
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    gallery: [
      `${import.meta.env.BASE_URL}images/0fc87fe9b_image.png`,
    ],
  },
  "maven-inspectional-services": {
    title: "Maven Inspectional Services",
    subtitle: "Food Inspection Analytics Power BI Dashboard",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/afe57efff_generated_image.png`,
    description:
      "An interactive Power BI dashboard designed to analyze food inspection data for restaurants across multiple regions, providing insights into inspection volumes, violation trends, sanitation grades, and geographic patterns.",
    details: [
      "KPI cards displaying current month inspections (1,328) and average sanitary grade (93), with sparkline trend indicators for at-a-glance performance monitoring.",
      "Inspection volume breakdown by county and restaurant name, highlighting high-activity regions such as Los Angeles, San Gabriel Valley, and San Fernando Valley.",
      "Violations trending bar chart by quarter reveals patterns over time from 2021 to 2023, supporting proactive inspection planning.",
      "Sanitation grade distribution donut chart showing Grade A (88.57%) vs Grade B (10.63%) breakdown across all inspected facilities.",
      "Geographic bubble map by ZIP code and violations by region & type enable spatial analysis to identify high-risk areas and optimize inspector assignments.",
      "Dynamic filters for date range, inspector name, and facility region allow users to explore data from multiple perspectives.",
    ],
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    gallery: [
      `${import.meta.env.BASE_URL}images/ce7102b21_image.png`,
      `${import.meta.env.BASE_URL}images/bd48876f0_image.png`,
    ],
  },
  "manufacturing-downtime": {
    title: "Manufacturing Downtime Analysis",
    subtitle: "Production Efficiency Excel Dashboard",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/7a9cbd2b1_generated_image.png`,
    description:
      "An Excel-based operational performance dashboard designed to analyze production line efficiency and identify the major causes of downtime across multiple sites and operators. The dashboard transforms raw operational data into meaningful business insights using charts, conditional formatting, and the Pareto principle.",
    details: [
      "Overall line efficiency benchmark at 64% with operator-level breakdown — Charlie leads at 66.8%, while Mac underperforms at 60.9% requiring special focus.",
      "Pareto chart identifying the top 5 downtime factors (Machine Adjustment, Machine Failure, Inventory Shortage, Batch Change, Batch Coding Error) that account for 80% of total production downtime.",
      "Operator vs. downtime factor heatmap matrix revealing that 3 of the 5 main downtime causes stem from operator error, with machine adjustment and batch change being the most critical.",
      "Conditional formatting highlights outlier cells — Mac's batch change downtime (130 mins) and Dennis's machine adjustment (120 mins) are flagged for priority action.",
      "Actionable recommendations: machine adjustment training for all operators, dedicated batch change training for Mac, and preventive maintenance combined with inventory management improvements.",
    ],
    technologies: ["Excel", "PivotTables", "Pareto Analysis", "Conditional Formatting", "Data Visualization"],
    gallery: [
      `${import.meta.env.BASE_URL}images/83e4a8340_image.png`,
    ],
  },
  "maven-hotel-group": {
    title: "Maven Hotel Group",
    subtitle: "Hotel Booking Analysis Excel Dashboard",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/26338926d_generated_image.png`,
    description:
      "An interactive hotel booking analysis dashboard built in Microsoft Excel using formulas, PivotTables, Pivot Charts, and data visualization techniques. The dashboard analyzes over 119,000 hotel booking records to uncover trends in reservations, cancellations, revenue, average daily rates (ADR), guest behavior, and booking channels.",
    details: [
      "Combo bar and line chart tracking monthly cancellation rates and average daily rates — revealing that cancellations spike to 35–39% during summer months (July & August) while ADR peaks simultaneously.",
      "Revenue vs Revenue Loss stacked bar chart showing monthly revenue alongside cancellation-driven losses — summer 2016 alone saw ~$1M in lost revenue from cancelled bookings.",
      "Lead time segmentation analysis comparing bookings made within 30 days vs. 30+ days, showing same-month bookings have lower cancellation rates (20%) and higher ADR ($191) despite making up only 17% of total bookings.",
      "Booking channel and customer segment breakdowns identifying which distribution channels contribute most to high-risk cancellations vs. stable revenue.",
      "Actionable insight: overbooking same-month resort reservations during July & August can offset advance cancellations with lower-risk, higher-rate bookings.",
    ],
    technologies: ["Excel", "PivotTables", "Pivot Charts", "Data Visualization"],
    gallery: [
      `${import.meta.env.BASE_URL}images/0333e57bd_image.png`,
    ],
  },
  "maven-toys": {
    title: "Maven Toys",
    subtitle: "Regional Revenue Excel Dashboard",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/452d29f49_generated_image.png`,
    description:
      "An Excel-based regional revenue dashboard built for Maven Toys to analyze store performance across regions and periods. The dashboard supports decision-making through KPI cards, year-over-year trend charts, store rankings, and product-level gain/loss tables — and is structured as a reusable reporting tool refreshable with new monthly data.",
    details: [
      "KPI cards displaying total revenue ($50,618), vs Last Month (+1.6%), and vs Last Year (+45.3%) for at-a-glance performance monitoring.",
      "2021 vs 2020 monthly revenue trend line chart tracking seasonal patterns and year-over-year performance across all months.",
      "Store ranking bar chart comparing regional stores by revenue and MoM% change — identifying top performers (Times Square: $20,484, +102%) and underperformers.",
      "Product gain table highlighting top revenue-driving products and their month-over-month contribution (e.g., Dinosaur Figures: +$989 MoM).",
      "Product loss table surfacing underperforming products causing revenue decline (e.g., Rubik's Cube: -$1,359 MoM).",
      "Workbook structured with separate sheets for Data, Data Prep, Dashboard, and monthly update tabs (New Data Aug/Sep 2021) — enabling recurring refreshes without rebuilding.",
    ],
    technologies: ["Excel", "Pivot Tables", "Data Visualization", "Dashboard Design"],
    gallery: [
      `${import.meta.env.BASE_URL}images/b35a8281c_image.png`,
    ],
  },
  "adventureworks-bi": {
    title: "AdventureWorks BI Report",
    subtitle: "Interactive Power BI Sales & Analytics System",
    location: "Personal Project",
    image: `${import.meta.env.BASE_URL}images/1f0d2e83d_generated_image.png`,
    description:
      "A fully interactive Power BI reporting system providing business stakeholders with actionable insights into sales, product profitability, customer demographics, and geographic distribution — built across four integrated dashboards.",
    details: [
      "Sales & Product Performance Dashboard: Displays high-level KPIs (revenue, profit, orders, return rate), weekly/monthly trends, top-selling products, and category-level comparisons across Accessories, Bikes, and Clothing.",
      "Product Deep-Dive & Price Simulation Dashboard: Enables product-level analysis with a Price Adjustment Simulator to model profit changes, side-by-side actual vs. adjusted profit trends, and an auto-generated written Report Summary.",
      "Customer Insights Dashboard: Analyzes customer distribution by income level and occupation, tracks acquisition over time, lists Top 100 Customers by orders and revenue, and highlights the top customer each year.",
      "Geographic Sales Dashboard: Visualizes global sales distribution via an interactive map, supports drill-down by continent, and helps identify strong markets and expansion opportunities.",
    ],
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    gallery: [
      `${import.meta.env.BASE_URL}images/93e315684_image.png`,
      `${import.meta.env.BASE_URL}images/ed9649228_image.png`,
      `${import.meta.env.BASE_URL}images/6848ecec1_image.png`,
      `${import.meta.env.BASE_URL}images/6b0228d91_image.png`,
    ],
  },
  javajet: {
    title: "JavaJet",
    subtitle: "An AI-Enhanced Touch-Typing Website for Java Coding",
    location: "Taibah University",
    image: `${import.meta.env.BASE_URL}images/b73b103bd_generated_b1f0419c.png`,
    description:
      "A web-based platform designed to help students improve their typing speed and accuracy in Java code.",
    details: [
      "Students practice by typing real Java exercises and receive real-time feedback on their performance.",
      "The system uses an XGBoost model to predict the user's typing speed (R² = 0.92, RMSE = 6.42), giving them a motivating target to work toward.",
      "Java exercises are generated dynamically using a fine-tuned LLAMA model — the user provides Java reserved words, and the model produces relevant code snippets containing them.",
      "Keeps practice personalized and varied for each student.",
    ],
    technologies: ["Python", "XGBoost", "LLAMA", "JavaScript", "HTML", "CSS"],
    members: [
      { name: "Ebtehal Fakhruleslam Eshaq", linkedin: "https://www.linkedin.com/in/ebtehal-al-hatmi-b1a262396/" },
      { name: "Furat Sami Alraddadi", linkedin: "https://www.linkedin.com/in/furat-alraddadi/" },
      { name: "Shahad Ismail Alzayed", linkedin: "https://www.linkedin.com/in/shahad-alzayed-22b8a430b/" },
      { name: "Youmna Tawfiq Sharaf", linkedin: "https://www.linkedin.com/in/youmna-sharaf/" },
    ],
    supervisor: { name: "Dr. Modhawi Alotaibi", linkedin: "https://www.linkedin.com/in/modhawi-alotaibi-3b23a813b/" },
    gallery: [
      `${import.meta.env.BASE_URL}images/f0371e31f_image.png`,
      `${import.meta.env.BASE_URL}images/fa49ddbdd_image.png`,
      `${import.meta.env.BASE_URL}images/0a8f01ac6_image.png`,
      `${import.meta.env.BASE_URL}images/18afb8686_image.png`,
      `${import.meta.env.BASE_URL}images/cacfb4333_image.png`,
      `${import.meta.env.BASE_URL}images/d7f9e490f_image.png`,
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];
  const [lightbox, setLightbox] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-body">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Not Found</h2>
          <Link to="/" className="text-primary hover:underline">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar solid />

      {/* Hero */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-24 -mt-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {project.location}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            {project.title}
          </h1>
          <p className="font-body text-lg text-primary/80 font-medium mb-8">{project.subtitle}</p>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>

          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Key Features</h3>
          <ul className="space-y-4 mb-10">
            {project.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <p className="font-body text-muted-foreground leading-relaxed">{detail}</p>
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-3 mb-12">
            {project.technologies.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-body font-medium rounded-full border border-border/50">
                {techIcons[tech] && (
                  <img src={techIcons[tech]} alt={tech} className="w-4 h-4 object-contain" />
                )}
                {tech}
              </span>
            ))}
          </div>

          {/* Team Members */}
          {(project.members || project.supervisor) && (
            <div className="mb-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Team</h3>
              <div className="flex flex-wrap gap-2">
                {project.supervisor && (
                  <a
                    href={project.supervisor.linkedin || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.supervisor.linkedin ? "View LinkedIn Profile" : undefined}
                    className={`group/sup relative inline-flex items-center gap-1.5 px-3 py-1 text-xs font-body rounded-full border transition-colors ${project.supervisor.linkedin ? "cursor-pointer hover:border-primary/30 hover:text-primary hover:bg-primary/10" : "cursor-default"} bg-muted text-muted-foreground border-border/50`}
                  >
                    <Users size={12} className="shrink-0" />
                    {project.supervisor.name}
                    <span className="ml-1 bg-primary/20 text-primary px-1.5 py-0.5 rounded-full text-[10px] font-semibold">Supervisor</span>
                    {project.supervisor.linkedin && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background text-[10px] font-medium px-2 py-1 rounded-md opacity-0 group-hover/sup:opacity-100 transition-opacity pointer-events-none z-10">
                        View LinkedIn ↗
                      </span>
                    )}
                  </a>
                )}
                {project.members?.map((member) => (
                  <a
                    key={member.name}
                    href={member.linkedin || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={member.linkedin ? "View LinkedIn Profile" : undefined}
                    className={`group/mem relative inline-flex items-center gap-1.5 px-3 py-1 text-xs font-body rounded-full border transition-colors ${member.linkedin ? "cursor-pointer hover:border-primary/30 hover:text-primary hover:bg-primary/10" : "cursor-default"} bg-muted text-muted-foreground border-border/50`}
                  >
                    <Users size={12} className="shrink-0" />
                    {member.name}
                    {member.linkedin && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background text-[10px] font-medium px-2 py-1 rounded-md opacity-0 group-hover/mem:opacity-100 transition-opacity pointer-events-none z-10">
                        View LinkedIn ↗
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Gallery */}
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery?.map((src, i) => (
              <div key={i} className="aspect-video rounded-xl overflow-hidden border border-border/50 shadow-sm cursor-pointer" onClick={() => setLightbox(src)}>
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

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
    </div>
  );
}