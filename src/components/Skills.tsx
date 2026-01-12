import { AnimatePresence, motion } from "motion/react";
import {
  Code,
  Database,
  Wrench,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import { useState, useMemo } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Angular", level: 75 },
      { name: "Redux", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
    gradient: "from-orange-400 to-amber-500",
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 85 },
    ],
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
    ],
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Java", level: 70 },
    ],
    gradient: "from-orange-400 to-red-500",
  },
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  // 🔥 Detect low-end devices
  const isLowEnd = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 || navigator.hardwareConcurrency <= 4;
  }, []);

  const activeCategory = skillCategories[selectedCategory];

  return (
    <section className="py-16 lg:py-32 px-4 relative overflow-hidden">
      {/* Background glow (disabled on low-end) */}
      {!isLowEnd && (
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
            <Layers className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              Tech Stack
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-mono">
            Technologies I work with
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="
  flex gap-3 mb-12
  overflow-x-auto scrollbar-hide
  md:flex-wrap md:justify-center
"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap mb-3 ${
                  selectedCategory === index
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {selectedCategory === index && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl`}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {category.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: isLowEnd ? 0.2 : 0.35,
              ease: "easeOut",
            }}
            className={`
      max-w-4xl mx-auto
      bg-gradient-to-br from-slate-800/50 to-slate-900/50
      ${isLowEnd ? "" : "backdrop-blur-xl"}
      border border-slate-700
      rounded-2xl p-8 md:p-12
    `}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {activeCategory.skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-orange-400 font-mono text-sm">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: isLowEnd ? 0.25 : 0.9,
                        delay: isLowEnd ? 0 : index * 0.06,
                      }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${activeCategory.gradient} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Skills */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-slate-400">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="font-mono text-sm">All Technologies</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((category) =>
              category.skills.map((skill) => (
                <motion.div
                  key={`${category.title}-${skill.name}`}
                  whileHover={{
                    scale: 1.12,
                    y: -4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className={`
            px-4 py-2 rounded-lg cursor-default
            bg-slate-800/50
            border border-slate-700
            text-slate-300 font-mono text-sm
            hover:text-orange-400
            hover:border-orange-400/50
            hover:shadow-md hover:shadow-orange-500/20
            transition-colors
          `}
                >
                  {skill.name}
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
