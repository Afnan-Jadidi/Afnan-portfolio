import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, GraduationCap, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/portfolio/Navbar";
import Footer from "../components/portfolio/Footer";

const MAVEN_LOGO = `${import.meta.env.BASE_URL}images/79fe31baf_9B202CCF-9CBC-FF5D-27CA5E9A37D2EDC7-logo.jpg`;
const KAUST_LOGO = `${import.meta.env.BASE_URL}images/ebd310ba5_q-1.jpg`;
const UMICH_LOGO = `${import.meta.env.BASE_URL}images/3c3aa1fd6_University-Of-Michigan-Emblem-logo.png`;

const courseData = {
  "microsoft-excel-foundations": {
    title: "Microsoft Excel Foundations",
    provider: "Maven Analytics",
    date: "February 21, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/0ac78074c_MicrosoftExcelFoundations.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/5228c99eb_image.png`,
    ],
    summary:
      "A foundational course covering the core skills needed to manage, explore, analyze, and visualize data in Microsoft Excel using real-world datasets. Topics progressed from spreadsheet fundamentals through formulas and functions to pivot tables and data visualization, all applied to practical scenarios like flight delays and sales pipelines.",
    details: [
      "Excel interface, table structures, data types, and formatting",
      "Sorting, filtering, and data organization techniques",
      "Formula syntax, reference types, and error handling",
      "Aggregation functions (COUNT, SUM, AVERAGE) and logical functions (IF)",
      "Lookup functions for joining data across tables (VLOOKUP, XLOOKUP)",
      "Text and date manipulation functions",
      "Building and customizing pivot tables and pivot charts",
      "Designing charts and graphs to visualize and communicate data",
    ],
    skills: ["Microsoft Excel", "Formulas & Functions", "Pivot Tables", "Data Visualization", "Data Cleaning", "Sorting & Filtering", "Charts & Graphs", "Spreadsheet Analysis"],
  },
  "excel-pivottables": {
    title: "Excel PivotTables",
    provider: "Maven Analytics",
    date: "April 5, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/c47bb7308_ExcelPivotTables.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/510665b49_image.png`,
    ],
    summary:
      "A comprehensive course on one of Excel's most powerful analytical tools. The course moved from PivotTable fundamentals through advanced techniques, then applied those skills across real-world case studies in various industries — from retail sales to sports statistics — to build deep, practical proficiency.",
    details: [
      "Structuring and preparing raw data for PivotTable analysis",
      "Building, formatting, and customizing PivotTables",
      "Applying slicers, timelines, and advanced filtering options",
      "Using calculated fields and calculated items",
      "Grouping values and defining custom sort lists",
      "Creating Pivot Charts for visual data exploration",
      "Applying PivotTables to real-world business scenarios and datasets",
    ],
    skills: ["Microsoft Excel", "PivotTables", "Pivot Charts", "Slicers & Timelines", "Calculated Fields", "Data Exploration", "Exploratory Data Analysis", "Data Summarization"],
  },
  "advanced-excel-dashboard-design": {
    title: "Advanced Excel Dashboard Design",
    provider: "Maven Analytics",
    date: "May 21, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/5bc1d227a_AdvancedExcelDashboardDesign.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/5045b5c6b_image.png`,
    ],
    summary:
      "An advanced course focused on transforming raw data into professional, interactive Excel dashboards. The course introduced formula-based dashboard design principles and covered techniques for building dynamic, visually compelling reports that communicate data stories effectively.",
    details: [
      "Principles of effective dashboard design and data storytelling",
      "Formula-driven dynamic dashboard architecture",
      "Designing and customizing KPI metric cards",
      "Using form controls to add interactivity to dashboards",
      "Manipulating colors, charts, and layout for visual impact",
      "Advanced chart types and custom visualization techniques",
      "Building professional-quality Excel dashboards from scratch",
    ],
    skills: ["Microsoft Excel", "Dashboard Design", "Data Visualization", "KPI Cards", "Form Controls", "Dynamic Charts", "Data Storytelling", "Advanced Excel"],
  },
  "microsoft-copilot-for-excel": {
    title: "Microsoft Copilot for Excel",
    provider: "Maven Analytics",
    date: "June 4, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/6ce4a49e0_MicrosoftCopilotforExcel.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/1ad88ea6b_image.png`,
    ],
    summary:
      "A hands-on, project-based course focused on leveraging Microsoft Copilot's generative AI capabilities within Excel to solve real-world data analytics problems. The course covered Copilot's core features and limitations, compared it against other AI tools like ChatGPT, and walked through practical use cases including formula generation using natural language, conditional formatting, pivot tables, data visualization, and advanced analysis with dynamic array formulas and Python in Excel. Throughout the course, I took on the role of an HR Analyst at a simulated company, working with employee data to monitor performance metrics and deliver data-driven recommendations.",
    details: [
      "How Microsoft Copilot works within Excel and how it compares to other generative AI tools (e.g., ChatGPT)",
      "Setting up and enabling Copilot for Microsoft 365",
      "Writing natural language prompts to generate formula columns automatically",
      "Applying AI-assisted conditional formatting to highlight key data points",
      "Using Copilot to generate pivot tables and charts for data exploration and insight discovery",
      "Leveraging Copilot's AI engine for advanced tasks including dynamic array formulas and Python code generation inside Excel",
      "Using Copilot as an expert advisor for Excel tips and techniques beyond its direct capabilities",
    ],
    skills: ["Microsoft Excel", "Microsoft Copilot", "Generative AI", "Natural Language Prompting", "Formula Automation", "Conditional Formatting", "Pivot Tables", "Data Visualization", "Python in Excel", "AI-Assisted Data Analysis"],
  },
  "power-query-power-pivot-dax": {
    title: "Power Query, Power Pivot & DAX",
    provider: "Maven Analytics",
    date: "May 2, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/63a5fbcc3_PowerQueryPowerPivotDAX.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/8623a9281_image.png`,
    ],
    summary:
      "A project-based course covering Excel's powerful trio of self-service BI tools. Using data from a fictional supermarket chain, the course walked through the full BI workflow — extracting and transforming raw CSV files with Power Query, building a relational data model from scratch, and exploring and analyzing it using Power Pivot and DAX expressions.",
    details: [
      "Extracting, transforming, and loading data from flat files using Power Query",
      "Database design fundamentals: normalization, table relationships, cardinality, and hierarchies",
      "Building relational data models using Excel's Data Model",
      "Writing DAX expressions including CALCULATE, FILTER, SUMX, and time intelligence functions",
      "Difference between calculated columns and measures",
      "Using Power Pivot to analyze data across multiple tables at scale",
    ],
    skills: ["Power Query", "Power Pivot", "DAX", "Data Modeling", "ETL", "Relational Databases", "Business Intelligence", "Microsoft Excel"],
  },
  "power-bi-desktop": {
    title: "Power BI Desktop",
    provider: "Maven Analytics",
    date: "December 4, 2025",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/23e36f452_PowerBIDesktop.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/7597a29c3_image.png`,
    ],
    summary:
      "A comprehensive, project-based course following the full BI workflow using Power BI Desktop. Playing the role of a BI Analyst for AdventureWorks Cycles, the course covered data preparation through Power Query, relational data modeling, DAX calculations, and professional dashboard design — resulting in an end-to-end business intelligence solution.",
    details: [
      "Connecting to data sources and transforming data using Power Query",
      "Building relational data models with star schema, cardinality, and filter flow",
      "Writing DAX calculated columns and measures including filter functions, iterators, and time intelligence patterns",
      "Designing interactive reports with bookmarks, slicers, tooltips, parameters, and navigation",
      "Formatting and customizing visuals for clarity and impact",
      "Tracking KPIs, regional performance, product-level trends, and customer segmentation",
      "Optimizing Power BI report performance",
    ],
    skills: ["Power BI Desktop", "Power Query", "DAX", "Data Modeling", "Dashboard Design", "Data Visualization", "KPI Reporting", "Business Intelligence"],
  },
  "power-bi-service": {
    title: "Power BI Service",
    provider: "Maven Analytics",
    date: "December 20, 2025",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/fcc74f15b_PowerBIService.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/4f7c0807b_image.png`,
    ],
    summary:
      "A cloud-focused, project-based course on Microsoft Power BI Service. Playing the role of a data analyst for a restaurant health inspection agency, the course covered publishing reports to the cloud, setting up workspaces and data connections, automating workflows, collaborating with teams, and securing data access.",
    details: [
      "Navigating the Power BI Service interface and workspace types",
      "Connecting to multiple data sources and setting up personal and enterprise gateways",
      "Creating and scheduling dataflows for automated data refresh",
      "Building reports and dashboards in the cloud environment",
      "Using AI-powered tools like natural language Q&A, quick insights, and data-driven alerts",
      "Publishing and sharing workspaces and apps across an organization",
      "Configuring static and dynamic row-level security (RLS)",
      "Managing user roles, tenant settings, and administration options",
    ],
    skills: ["Power BI Service", "Workspaces & Apps", "Gateways & Dataflows", "Row-Level Security", "Data-Driven Alerts", "Cloud BI", "Report Publishing", "Power BI Mobile"],
  },
  "microsoft-pl300-exam-prep": {
    title: "Microsoft PL-300 Exam Prep",
    provider: "Maven Analytics",
    date: "January 31, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/244bd4473_MicrosoftPL-300ExamPrep.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/e8a6f4d36_image.png`,
    ],
    summary:
      "A dedicated exam preparation course for the Microsoft Power BI Data Analyst Associate (PL-300) certification. Playing the role of Lead BI Analyst for Maven Cycles, the course built an end-to-end BI solution covering all exam domains, then walked through the exam structure, question types, and strategies before concluding with a full-length practice exam.",
    details: [
      "All four PL-300 exam domains: data prep, data modeling, visualization & analysis, and deployment & maintenance",
      "Exam structure, topic weightings, question types, and test-taking strategies",
      "End-to-end Power BI workflow from raw data to published reports",
      "Row-level security, workspace management, and report distribution",
      "Full-length practice exam with knowledge-based and case study questions",
    ],
    skills: ["Power BI", "PL-300 Certification", "Data Preparation", "Data Modeling", "DAX", "Report Design", "Power BI Service", "BI Deployment"],
  },
  "mysql-data-analysis": {
    title: "MySQL Data Analysis",
    provider: "Maven Analytics",
    date: "June 10, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/ad259eba9_MySQLDataAnalysis.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/f450688b1_image.png`,
    ],
    summary:
      "A hands-on course on analyzing relational databases using MySQL Workbench. The course covered the foundational querying techniques every analyst needs — from selecting and filtering data to joining multiple tables and applying aggregations — all through practical, real-world case studies.",
    details: [
      "Writing and structuring SQL queries using the core clauses (SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY)",
      "Filtering and sorting data with conditional logic and CASE statements",
      "Aggregating data with functions like COUNT, SUM, AVG, MIN, and MAX",
      "Joining multiple tables using INNER, LEFT, and other JOIN types",
      "Using UNION to combine results across tables",
      "Understanding database normalization and relational schema design",
      "Applying SQL to solve real business analytics problems",
    ],
    skills: ["MySQL", "SQL", "Data Querying", "Table Joins", "Aggregation Functions", "Relational Databases", "MySQL Workbench", "Data Analysis"],
  },
  "data-literacy-foundations": {
    title: "Data Literacy Foundations",
    provider: "Maven Analytics",
    date: "February 6, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/a9d5dbc42_DataLiteracyFoundations.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/fe78b2f6e_image.png`,
    ],
    summary:
      "A foundational course building the essential skills to interpret, manage, analyze, and communicate with data. The course covered what data literacy means in today's world, introduced key elements of the data ecosystem, and provided frameworks for analytical thinking and data-driven decision-making — without requiring any prior technical experience.",
    details: [
      "What data literacy means and why it matters in modern organizations",
      "Key data ecosystem concepts: democratization, strategy, architecture, and governance",
      "Frameworks for strategic thinking and measurement planning",
      "Best practices for data preparation and exploratory analysis",
      "Principles of data visualization and storytelling",
      "How to use Generative AI tools (e.g. ChatGPT) in data work",
      "Reading and interpreting common chart types and data summaries",
    ],
    skills: ["Data Literacy", "Analytical Thinking", "Data Communication", "Data Visualization", "Data Storytelling", "Data Governance", "Exploratory Analysis"],
  },
  "data-ai-ethics": {
    title: "Data & AI Ethics",
    provider: "Maven Analytics",
    date: "April 12, 2026",
    logo: MAVEN_LOGO,
    badge: `${import.meta.env.BASE_URL}images/74b104f5e_DataAIEthics.png`,
    certificates: [
      `${import.meta.env.BASE_URL}images/344ce367c_image.png`,
    ],
    summary:
      "A course exploring the ethical responsibilities of data and AI professionals. It covered the foundations of data ethics, the nature and risks of bias in data and algorithms, and the unique ethical challenges posed by modern AI systems — equipping analysts with a framework for responsible and ethical data practice.",
    details: [
      "Definitions of data ethics vs. AI ethics vs. legal frameworks",
      "What it means to be an ethical steward of data",
      "Types of data bias: sampling bias, selection bias, algorithmic bias, and confirmation bias",
      "How bias propagates through analysis and machine learning pipelines",
      "Ethical challenges unique to AI: data collection, societal harm, and accountability",
      "Frameworks for preventing and mitigating ethical lapses in data work",
    ],
    skills: ["Data Ethics", "AI Ethics", "Bias Detection & Mitigation", "Responsible AI", "Ethical Data Stewardship", "Algorithmic Fairness"],
  },
  "introduction-to-ai": {
    title: "Introduction to AI",
    provider: "KAUST",
    date: "February 2024",
    logo: KAUST_LOGO,
    certificates: [
      `${import.meta.env.BASE_URL}images/d730e5439_image.png`,
    ],
    summary:
      "An introductory course by King Abdullah University of Science and Technology (KAUST) covering the core concepts of Artificial Intelligence. The course explores machine learning, neural networks, and real-world AI applications.",
    details: [
      "Fundamentals of Artificial Intelligence",
      "Overview of Machine Learning concepts",
      "Neural networks and deep learning basics",
      "AI applications in industry",
      "Ethical considerations in AI",
    ],
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Deep Learning", "AI Ethics"],
  },
  "python-basics": {
    title: "Python Basics",
    provider: "University of Michigan",
    date: "October 2023",
    logo: UMICH_LOGO,
    certificates: [
      `${import.meta.env.BASE_URL}images/561037eff_image.png`,
    ],
    summary:
      "A foundational Python programming course by the University of Michigan. Covers the core building blocks of Python programming and equips learners with the skills to write basic programs and automate simple tasks.",
    details: [
      "Variables, data types, and operators",
      "Conditional statements and loops",
      "Functions and modules",
      "Lists, tuples, and dictionaries",
      "File I/O basics",
      "Error handling",
    ],
    skills: ["Python", "Programming Fundamentals", "Data Structures", "Functions", "File I/O", "Error Handling"],
  },
  "python-classes-inheritance": {
    title: "Python Classes and Inheritance",
    provider: "University of Michigan",
    date: "October 2023",
    logo: UMICH_LOGO,
    certificates: [
      `${import.meta.env.BASE_URL}images/bb41902ee_image.png`,
    ],
    summary:
      "A course by the University of Michigan covering object-oriented programming in Python. Builds on Python fundamentals to introduce classes, objects, and inheritance as core tools for writing reusable and structured code.",
    details: [
      "Defining classes and creating objects in Python",
      "Instance variables, class variables, and methods",
      "Constructor methods (__init__) and special methods",
      "Inheritance and method overriding",
      "Using super() to extend parent class behavior",
      "Understanding class hierarchies and polymorphism",
    ],
    skills: ["Python", "Object-Oriented Programming", "Classes & Objects", "Inheritance", "Polymorphism", "Programming Fundamentals"],
  },
};

function CertificateCarousel({ certificates, title }) {
  const [current, setCurrent] = useState(0);
  if (!certificates || certificates.length === 0) return null;

  return (
    <div>
      <h2 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Award size={20} className="text-primary" /> Certificate{certificates.length > 1 ? "s" : ""}
      </h2>
      <div className="relative">
        {/* Stacked background effect */}
        {certificates.length > 1 && (
          <>
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-border/30 bg-card/50" />
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl border border-border/40 bg-card/70" />
          </>
        )}
        <div className="relative">
          <img
            src={certificates[current]}
            alt={`${title} certificate ${current + 1}`}
            className="w-full rounded-2xl border border-border/50 shadow-md object-contain"
          />
          {certificates.length > 1 && (
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
                className="p-2 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-30 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="font-body text-sm text-muted-foreground">
                {current + 1} / {certificates.length}
              </span>
              <button
                onClick={() => setCurrent((c) => Math.min(certificates.length - 1, c + 1))}
                disabled={current === certificates.length - 1}
                className="p-2 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-30 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
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
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 border-b border-border/50 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <Link to="/#courses" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-start gap-6">
            <div className={`w-20 h-20 ${course.provider === "Maven Analytics" ? "bg-black" : "bg-white"} rounded-2xl flex items-center justify-center shadow-md p-3 shrink-0`}>
              <img src={course.logo} alt={course.provider} className="w-14 h-14 object-contain" />
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-primary mb-1">{course.provider}</p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">{course.title}</h1>
              <p className="font-body text-sm text-muted-foreground">Completed: {course.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-14">

          {/* Summary */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" /> Course Overview
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-base">{course.summary}</p>
          </div>

          {/* What I Learned */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" /> What I Learned
            </h2>
            <ul className="space-y-3">
              {course.details.map((detail, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span className="font-body text-muted-foreground leading-relaxed">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-primary/8 text-primary text-sm font-body font-medium rounded-full border border-primary/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Badge */}
          {course.badge && (
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award size={20} className="text-primary" /> Course Badge
              </h2>
              <div className="flex items-center justify-center">
                <img
                  src={course.badge}
                  alt={`${course.title} badge`}
                  className="w-48 h-48 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          )}

          {/* Certificates */}
          <CertificateCarousel certificates={course.certificates} title={course.title} />

        </motion.div>
      </div>

      <Footer />
    </div>
  );
}