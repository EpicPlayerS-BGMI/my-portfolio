import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  Code2,
  Sparkles,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const projects = [
  {
    title: "SmartMenuQR",
    subtitle: "Digital Menu Platform",
    description:
      "A comprehensive full-stack QR-based digital menu platform that revolutionizes how local shops manage and display their menus.",
    longDesc:
      "Built with the MERN stack, this platform allows vendors to create digital menus accessible via QR codes, eliminating the need for physical menus.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "QR Codes", "JWT"],
    features: [
      "Vendor authentication and shop setup",
      "Category-wise product management",
      "Dynamic QR code generation",
      "Mobile-optimized menu pages",
      "Real-time menu updates",
      "No-login customer access",
    ],
    link: "https://barcoder1.vercel.app",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    icon: "🍽️",
  },
  {
    title: "Web Scraping Tool",
    subtitle: "Data Automation Engine",
    description:
      "An intelligent automation tool for extracting and managing structured data from OEM websites with real-time updates.",
    longDesc:
      "Powered by Node.js and Playwright, this tool automates data extraction, parsing, and storage with scheduled updates.",
    tech: ["Node.js", "Playwright", "MongoDB", "REST API", "Cron Jobs"],
    features: [
      "Automated data extraction",
      "Intelligent data parsing",
      "MongoDB data storage",
      "RESTful API endpoints",
      "Scheduled scraping tasks",
      "Admin dashboard ready",
    ],
    github: "https://github.com/ShivamAgrawal04",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    icon: "🤖",
  },
  {
    title: "Bulk Email Utility",
    subtitle: "Email Service Platform",
    description:
      "A powerful Node.js utility for sending bulk emails with advanced features like multiple sender accounts and BCC delivery.",
    longDesc:
      "Built with Nodemailer, this tool provides a complete solution for managing bulk email campaigns while maintaining recipient privacy.",
    tech: ["Node.js", "Nodemailer", "Express.js", "File Upload"],
    features: [
      "Bulk email delivery",
      "Multiple sender accounts",
      "Import recipient lists",
      "BCC privacy protection",
      "Custom email templates",
      "Delivery tracking",
    ],
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
    icon: "📧",
  },
];

export function Projects() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full filter blur-[128px]"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-[128px]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4"
          >
            <Code2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-mono">
            Turning ideas into reality
          </p>
        </motion.div>

        {/* Swiper Container */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={setSwiperRef}
            className="!pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide
                key={index}
                className="!w-full md:!w-[600px] lg:!w-[700px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-full"
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-orange-400/50 rounded-2xl overflow-hidden transition-all duration-300">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    {/* Animated border */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl`}
                      animate={{
                        scale: [1, 1.05, 1],
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
                              className="w-10 h-10 flex items-center justify-center bg-slate-700/50 hover:bg-orange-500/20 border border-slate-600 hover:border-orange-400/50 rounded-lg transition-all"
                            >
                              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-orange-400" />
                            </motion.a>
                          )}
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 flex items-center justify-center bg-slate-700/50 hover:bg-amber-500/20 border border-slate-600 hover:border-amber-400/50 rounded-lg transition-all"
                            >
                              <Github className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all">
                          {project.title}
                        </h3>
                        <p className="text-sm text-orange-400 font-mono">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-semibold text-slate-300">
                            Key Features
                          </span>
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
                              <Zap className="w-3 h-3 text-orange-400 mt-0.5 flex-shrink-0" />
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
                            className="px-3 py-1 text-xs font-mono bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600 hover:border-orange-400/50 hover:text-orange-400 transition-all cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => swiperRef?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-orange-400/50 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-orange-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => swiperRef?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-orange-400/50 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6 text-orange-400" />
          </motion.button>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
