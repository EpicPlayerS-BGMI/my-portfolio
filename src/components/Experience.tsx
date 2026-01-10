import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    role: "Web Designer",
    company: "Mono Infotech",
    period: "Aug 2025 – Nov 2025",
    location: "Indore",
    current: false,
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
    current: false,
    responsibilities: [
      "Designed and developed a responsive Single Page Application for SharpFit – The Men's Fashion Store using React.js, Tailwind CSS, and Vite.",
      "Built reusable and scalable UI components for product listings, authentication, cart, and filters.",
      "Integrated frontend with RESTful APIs and implemented JWT-based authentication.",
      "Improved UI performance, responsiveness, and ensured cross-browser compatibility.",
    ],
    tech: ["React.js", "Tailwind CSS", "Vite", "RESTful APIs", "JWT"],
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-12 px-4 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full filter blur-[128px]"
      ></motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4"
          >
            <Briefcase className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              Career Journey
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-mono">
            Building the future, one line at a time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 border-4 border-[#0a0a0a] z-10"
                >
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-orange-400/30"
                    ></motion.div>
                  )}
                </motion.div>

                {/* Content card */}
                <div
                  className={`w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-orange-400/50 rounded-2xl p-8 transition-all duration-300"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-amber-500/0 to-yellow-500/0 group-hover:from-orange-500/5 group-hover:via-amber-500/5 group-hover:to-yellow-500/5 rounded-2xl transition-all duration-300"></div>

                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          {exp.current && (
                            <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-medium mb-2">
                              Current
                            </span>
                          )}
                          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                            {exp.role}
                            <ArrowRight className="w-5 h-5 text-orange-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </h3>
                          <p className="text-xl text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-amber-400" />
                          <span className="font-mono">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-yellow-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-3 text-slate-300"
                          >
                            <span className="text-orange-400 mt-1.5 flex-shrink-0">
                              ▹
                            </span>
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="px-3 py-1 text-xs font-mono bg-slate-700/50 text-orange-300 rounded-lg border border-slate-600 hover:border-orange-400/50 hover:bg-slate-700 transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
