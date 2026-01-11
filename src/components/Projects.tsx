import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code2,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const projects = [
  {
    title: "SmartMenuQR",
    subtitle: "Digital Menu Platform",
    description:
      "A full-stack QR-based digital menu platform that revolutionizes shop management.",
    tech: ["MERN Stack", "QR Codes", "JWT"],
    link: "https://barcoder1.vercel.app",
    github: "#",
    gradient: "from-orange-500/20 to-amber-500/20",
    accent: "text-orange-400",
    border: "group-hover:border-orange-500/50",
    icon: "🍽️",
  },
  {
    title: "Web Scraping Tool",
    subtitle: "Data Automation Engine",
    description:
      "Intelligent automation tool for extracting data from OEM websites with real-time updates.",
    tech: ["Node.js", "Playwright", "MongoDB"],
    github: "https://github.com/ShivamAgrawal04",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    icon: "🤖",
  },
  {
    title: "Bulk Email Utility",
    subtitle: "Email Service Platform",
    description:
      "Advanced Node.js utility for mass mailing with multi-account support and privacy.",
    tech: ["Nodemailer", "Express", "Node.js"],
    github: "https://github.com/ShivamAgrawal04",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
    border: "group-hover:border-purple-500/50",
    icon: "📧",
  },
];

export function Projects() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section className="py-24 px-4 relative  overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-amber-500 font-mono text-sm mb-4"
            >
              <Code2 size={18} />
              <span className="tracking-widest uppercase">Featured Work</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                Digital
              </span>{" "}
              Experiences
            </h2>

            {/* <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2> */}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="p-4 rounded-full border border-slate-800 bg-slate-900/50 text-white hover:bg-slate-800 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef?.slideNext()}
              className="p-4 rounded-full border border-slate-800 bg-slate-900/50 text-white hover:bg-slate-800 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Projects Carousel */}
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000 }}
          loop={projects.length > 3}
          className="!pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[450px]"
              >
                {/* Main Card */}
                <div
                  className={`h-full flex flex-col p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800/50 transition-all duration-500 ${project.border} hover:translate-y-[-8px]`}
                >
                  {/* Subtle Gradient Hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-4xl bg-slate-800/50 p-3 rounded-2xl">
                        {project.icon}
                      </span>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className={`text-sm font-medium mb-4 ${project.accent}`}>
                      {project.subtitle}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider px-3 py-1 bg-slate-800/80 text-slate-300 rounded-full border border-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button className="flex items-center gap-2 text-white font-semibold text-sm group/btn">
                        View Project
                        <ArrowUpRight
                          size={16}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Footer Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/ShivamAgrawal04"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-orange-400 hover:text-white transition-all duration-300 shadow-xl shadow-orange-500/10"
          >
            <Github size={20} />
            Explore Full Archive
          </a>
        </motion.div>
      </div>
    </section>
  );
}
