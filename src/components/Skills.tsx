import { motion } from "motion/react";
import {
  Code,
  Database,
  Wrench,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

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
    color: "orange",
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
    color: "amber",
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
    ],
    color: "yellow",
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
    color: "orange",
    gradient: "from-orange-400 to-red-500",
  },
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-[128px]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            <Layers className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-mono">
            Technologies I work with
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === index
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {selectedCategory === index && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Skills display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories[selectedCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
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
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skillCategories[selectedCategory].gradient} rounded-full`}
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* All skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-slate-400">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="font-mono text-sm">All Technologies</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((category) =>
              category.skills.map((skill, index) => (
                <motion.div
                  key={`${category.title}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 hover:border-orange-400/50 rounded-lg text-slate-300 hover:text-orange-400 transition-all cursor-default"
                >
                  <span className="font-mono text-sm">{skill.name}</span>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
