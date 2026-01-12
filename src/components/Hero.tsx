import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Web Designer",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)]
        md:min-h-[calc(100vh-8rem)]
        lg:min-h-[calc(100vh-10rem)] flex items-center justify-center py-6 md:py-0 px-4 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      {/* <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full filter blur-[128px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/30 rounded-full filter blur-[128px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/20 rounded-full filter blur-[128px]"
        ></motion.div>
      </div> */}

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent inline-block mt-2">
                Shivam
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                Agrawal
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <div className="text-2xl md:text-3xl text-slate-300 h-12 flex items-center">
                <span className="mr-2">{"<"}</span>
                <span className="text-orange-400 font-mono">{text}</span>
                <span className="animate-pulse ml-1">|</span>
                <span className="ml-2">{"/>"}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              I craft responsive and scalable web applications with modern
              technologies. Passionate about creating seamless user experiences
              and clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="mailto:shivamagrawal0455@gmail.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-white font-medium">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
              </a>

              <a
                href="/my_resume.pdf"
                download
                className="group px-8 py-4 bg-slate-800/50 border border-slate-700 hover:border-orange-400/50 rounded-full transition-all duration-300"
              >
                <span className="flex items-center gap-2 text-white font-medium">
                  <Download className="w-5 h-5 group-hover:text-orange-400 transition-colors" />
                  Download CV
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/ShivamAgrawal04",
                  color: "orange",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/shivam-agrawal0",
                  color: "amber",
                },
                {
                  icon: Mail,
                  href: "mailto:shivamagrawal0455@gmail.com",
                  color: "yellow",
                },
                { icon: Phone, href: "tel:+919399739395", color: "orange" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 flex items-center justify-center bg-slate-800/50 border border-slate-700 hover:border-orange-400/50 rounded-xl transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right side - Code visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Floating code snippets */}
              <motion.div
                animate={{ y: [-30, -50, -30] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-slate-800/80 backdrop-blur-xl border border-orange-500/30 rounded-xl p-4 shadow-lg shadow-orange-500/20"
              >
                <code className="text-orange-400 text-sm font-mono">
                  const dev = "Shivam";
                </code>
              </motion.div>

              <motion.div
                animate={{ y: [30, 50, 30] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-slate-800/80 backdrop-blur-xl border border-amber-500/30 rounded-xl p-4 shadow-lg shadow-amber-500/20"
              >
                <code className="text-amber-400 text-sm font-mono">
                  {"{ MERN Stack }"}
                </code>
              </motion.div>

              <motion.div
                animate={{ x: [-20, -65, -20] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -left-8 bg-slate-800/80 backdrop-blur-xl border border-yellow-500/30 rounded-xl p-4 shadow-lg shadow-yellow-500/20"
              >
                <code className="text-yellow-400 text-sm font-mono">
                  React.js ⚛️
                </code>
              </motion.div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5"></div>

                <div className="relative space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="font-mono text-sm space-y-2">
                    <div className="text-amber-400">
                      class <span className="text-orange-400">Developer</span>{" "}
                      {"{"}
                    </div>
                    <div className="pl-4">
                      <div className="text-slate-400">constructor() {"{"}</div>
                      <div className="pl-4 space-y-1">
                        <div>
                          <span className="text-yellow-400">this</span>.name ={" "}
                          <span className="text-green-400">
                            "Shivam Agrawal"
                          </span>
                          ;
                        </div>
                        <div>
                          <span className="text-yellow-400">this</span>.role ={" "}
                          <span className="text-green-400">"Full Stack"</span>;
                        </div>
                        <div>
                          <span className="text-yellow-400">this</span>.location
                          = <span className="text-green-400">"India"</span>;
                        </div>
                        <div>
                          <span className="text-yellow-400">this</span>.skills =
                          [
                        </div>
                        <div className="pl-4">
                          <div>
                            <span className="text-green-400">"React"</span>,
                          </div>
                          <div>
                            <span className="text-green-400">"Node.js"</span>,
                          </div>
                          <div>
                            <span className="text-green-400">"MongoDB"</span>,
                          </div>
                          <div>
                            <span className="text-green-400">"TypeScript"</span>
                          </div>
                        </div>
                        <div>];</div>
                      </div>
                      <div className="text-slate-400">{"}"}</div>
                    </div>
                    <div className="text-amber-400">{"}"}</div>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Status:</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-green-400">
                          Available for work
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm font-mono">Scroll down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
