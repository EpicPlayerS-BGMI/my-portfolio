import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
   VARIANTS
======================= */

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

/* =======================
   ANIMATED WRAPPER
======================= */

function AnimatedCard({
  children,
  isLeft,
}: {
  children: React.ReactNode;
  isLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial={isLeft ? "hiddenLeft" : "hiddenRight"}
      animate={inView ? "visible" : isLeft ? "hiddenLeft" : "hiddenRight"}
    >
      {children}
    </motion.div>
  );
}

/* =======================
   MAIN COMPONENT
======================= */

export function Experience() {
  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              Career Journey
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <p className="text-slate-400 text-lg font-mono">
            Building the future, one line at a time
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* DOT */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 border-4 border-[#0a0a0a] z-10" />

                  {/* CARD */}
                  <div
                    className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                      isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <AnimatedCard isLeft={isLeft}>
                      <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-orange-400/50 rounded-2xl p-8 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                          {exp.role}
                          <ArrowRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-all" />
                        </h3>

                        <p className="text-xl bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-semibold mb-4">
                          {exp.company}
                        </p>

                        <div className="flex gap-4 text-sm text-slate-400 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-400" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-yellow-400" />
                            {exp.location}
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6 text-slate-300">
                          {exp.responsibilities.map((r, i) => (
                            <li key={i}>▹ {r}</li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-mono bg-slate-700/50 text-orange-300 rounded-lg border border-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AnimatedCard>
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
