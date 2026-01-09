import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, Sparkles, Zap } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'SmartMenuQR',
    subtitle: 'Digital Menu Platform',
    description: 'A comprehensive full-stack QR-based digital menu platform that revolutionizes how local shops manage and display their menus.',
    longDesc: 'Built with the MERN stack, this platform allows vendors to create digital menus accessible via QR codes, eliminating the need for physical menus.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'QR Codes', 'JWT'],
    features: [
      'Vendor authentication and shop setup',
      'Category-wise product management',
      'Dynamic QR code generation',
      'Mobile-optimized menu pages',
      'Real-time menu updates',
      'No-login customer access',
    ],
    link: 'https://barcoder1.vercel.app',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    icon: '🍽️',
  },
  {
    title: 'Web Scraping Tool',
    subtitle: 'Data Automation Engine',
    description: 'An intelligent automation tool for extracting and managing structured data from OEM websites with real-time updates.',
    longDesc: 'Powered by Node.js and Playwright, this tool automates data extraction, parsing, and storage with scheduled updates.',
    tech: ['Node.js', 'Playwright', 'MongoDB', 'REST API', 'Cron Jobs'],
    features: [
      'Automated data extraction',
      'Intelligent data parsing',
      'MongoDB data storage',
      'RESTful API endpoints',
      'Scheduled scraping tasks',
      'Admin dashboard ready',
    ],
    github: 'https://github.com/ShivamAgrawal04',
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    icon: '🤖',
  },
  {
    title: 'Bulk Email Utility',
    subtitle: 'Email Service Platform',
    description: 'A powerful Node.js utility for sending bulk emails with advanced features like multiple sender accounts and BCC delivery.',
    longDesc: 'Built with Nodemailer, this tool provides a complete solution for managing bulk email campaigns while maintaining recipient privacy.',
    tech: ['Node.js', 'Nodemailer', 'Express.js', 'File Upload'],
    features: [
      'Bulk email delivery',
      'Multiple sender accounts',
      'Import recipient lists',
      'BCC privacy protection',
      'Custom email templates',
      'Delivery tracking',
    ],
    gradient: 'from-pink-400 via-purple-500 to-indigo-500',
    icon: '📧',
  },
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[128px]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-[128px]"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4"
          >
            <Code2 className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Featured Work</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-mono">
            Turning ideas into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-purple-400/50 rounded-2xl overflow-hidden transition-all duration-300">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>

                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="text-5xl"
                    >
                      {project.icon}
                    </motion.div>
                    <div className="flex gap-3">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 flex items-center justify-center bg-slate-700/50 hover:bg-cyan-500/20 border border-slate-600 hover:border-cyan-400/50 rounded-lg transition-all"
                        >
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 flex items-center justify-center bg-slate-700/50 hover:bg-purple-500/20 border border-slate-600 hover:border-purple-400/50 rounded-lg transition-all"
                        >
                          <Github className="w-4 h-4 text-slate-400 group-hover:text-purple-400" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-mono">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-semibold text-slate-300">Key Features</span>
                    </div>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                          <Zap className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-mono bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/ShivamAgrawal04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
