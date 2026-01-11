import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion"; // motion/react se switch karna behtar hai performance ke liye

/* =======================
   DATA
======================= */

const experiences = [
  {
    role: "Web Designer",
    company: "Mono Infotech",
    period: "Aug 2025 – Nov 2025",
    location: "Indore",
    responsibilities: [
      "Designed and developed responsive website layouts using HTML5, CSS3, JavaScript, and Tailwind CSS.",
      "Converted Figma and design mockups into pixel-perfect, mobile-first web interfaces.",
      "Improved website responsiveness, UI consistency, and cross-browser compatibility.",
      "Collaborated with developers to integrate frontend designs with backend functionality.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Figma"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Alphawizz Technologies Pvt. Ltd.",
    period: "Nov 2024 – Apr 2025",
    location: "Indore",
    responsibilities: [
      "Designed and developed a responsive SPA using React.js, Tailwind CSS, and Vite.",
      "Built reusable UI components for product listings, authentication, and cart.",
      "Integrated frontend with RESTful APIs and JWT authentication.",
      "Improved UI performance and responsiveness.",
    ],
    tech: ["React.js", "Tailwind CSS", "Vite", "REST APIs", "JWT"],
  },
];

/* =======================
   VARIANTS (Optimized)
======================= */
const cardVariants: Variants = {
  hiddenLeft: { opacity: 0, x: -30, y: 20 },
  hiddenRight: { opacity: 0, x: 30, y: 20 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3,
      velocity: 2,
    },
  },
};

/* =======================
   MAIN COMPONENT
======================= */

export function Experience() {
  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4"
          >
            <Briefcase className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              Career Journey
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <p className="text-slate-400 text-sm md:text-lg font-mono">
            Building the future, one line at a time
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Main Vertical Line - Adjusted for mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 via-amber-500 to-transparent"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* DOT - Adjusted positioning for mobile */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 border-[3px] md:border-4 border-[#0a0a0a] z-20 shadow-[0_0_15px_rgba(251,146,60,0.5)]" />

                  {/* CARD CONTAINER */}
                  <div
                    className={`w-full md:w-[calc(50%-3rem)] ml-10 md:ml-0 ${
                      isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <motion.div
                      variants={cardVariants}
                      initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }} // optimized trigger point
                      style={{ willChange: "transform, opacity" }} // tells browser to optimize
                      className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-orange-400/50 rounded-2xl p-5 md:p-8 transition-colors duration-300 shadow-xl"
                    >
                      {/* ROLE & COMPANY */}
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-1 flex items-center gap-2">
                        {exp.role}
                        <ArrowRight className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden md:block" />
                      </h3>

                      <p className="text-base md:text-xl bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-semibold mb-3">
                        {exp.company}
                      </p>

                      {/* META INFO (Mobile Friendly) */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[12px] md:text-sm text-slate-400 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                          {exp.location}
                        </div>
                      </div>

                      {/* RESPONSIBILITIES */}
                      <ul className="space-y-2 mb-5 text-slate-300 text-sm md:text-base">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-orange-400 shrink-0">▹</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>

                      {/* TECH STACK */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-[10px] md:text-xs font-mono bg-slate-900/50 text-orange-300/90 rounded-md border border-slate-700/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
