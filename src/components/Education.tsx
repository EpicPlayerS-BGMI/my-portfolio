import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Medi-Caps University',
    location: 'Indore, Madhya Pradesh',
    period: 'Aug 2023 – Jun 2025',
    grade: '8.1',
    gradeType: 'CGPA',
    maxGrade: '10',
    current: true,
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Jiwaji University',
    location: 'Gwalior, Madhya Pradesh',
    period: 'Aug 2020 – 2023',
    grade: '73.61',
    gradeType: 'Percentage',
    maxGrade: '100',
    current: false,
    gradient: 'from-purple-400 to-pink-500',
  },
];

export function Education() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[128px]"></div>
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
          >
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Academic Journey</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-mono">
            Building a strong foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-purple-400/50 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Header with gradient */}
                <div className={`relative p-8 bg-gradient-to-br ${edu.gradient} bg-opacity-10`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-10`}></div>
                  
                  <div className="relative">
                    {/* Icon and status */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <GraduationCap className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {edu.current && (
                        <motion.span
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-xs font-medium"
                        >
                          In Progress
                        </motion.span>
                      )}
                    </div>

                    {/* Degree */}
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {edu.short}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">{edu.degree}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Institution */}
                  <div className="mb-6">
                    <p className={`text-xl font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-2`}>
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${edu.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                        <Calendar className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Duration</p>
                        <p className="text-white font-mono">{edu.period}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${edu.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                        <Trophy className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-1">{edu.gradeType}</p>
                        <p className="text-white font-mono text-xl font-bold">
                          {edu.grade}
                          <span className="text-slate-500 text-base font-normal">/{edu.maxGrade}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress bar for current education */}
                  {edu.current && (
                    <div className="mt-6 pt-6 border-t border-slate-700">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-400">Progress</span>
                        <span className="text-sm text-cyan-400 font-mono">~75%</span>
                      </div>
                      <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '75%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${edu.gradient} rounded-full`}
                        >
                          <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
