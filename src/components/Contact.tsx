import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shivamagrawal0455@gmail.com",
      href: "mailto:shivamagrawal0455@gmail.com",
      gradient: "from-orange-400 to-amber-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9399739395",
      href: "tel:+919399739395",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, India",
      href: "#",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ShivamAgrawal04",
      gradient: "from-slate-400 to-slate-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shivam-agrawal0",
      gradient: "from-amber-400 to-orange-600",
    },
  ];

  return (
    <section className="py-12 pb-10 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500/20 rounded-full filter blur-[128px]"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-500/20 rounded-full filter blur-[128px]"
        ></motion.div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4"
          >
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-mono max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {/* Contact methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    /* Adjusted padding for small screens (p-4 instead of p-6) */
                    className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-orange-400/50 rounded-2xl transition-all duration-300"
                  >
                    {/* Adjusted icon box size for small screens */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-grow min-w-0">
                      {" "}
                      {/* added min-w-0 to prevent text push */}
                      <p className="text-xs sm:text-sm text-slate-400 mb-0.5 sm:mb-1 truncate">
                        {method.label}
                      </p>
                      <p className="text-sm sm:text-base text-white font-medium truncate">
                        {method.value}
                      </p>
                    </div>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </motion.a>
                );
              })}
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="font-mono text-sm">Find me on</span>
              </p>
              {/* flex-wrap added to ensure icons don't go off-screen */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="group relative"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity`}
                      ></div>
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-slate-800/50 border border-slate-700 hover:border-orange-400/50 rounded-xl transition-all">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-white transition-colors" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-gradient-to-br from-green-500/10 to-orange-500/10 border border-green-500/30 rounded-2xl"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-400 flex-shrink-0 mt-1"
                ></motion.div>
                <div>
                  <p className="text-white text-sm sm:text-base font-semibold mb-1">
                    Available for Opportunities
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Currently open to full-time positions and freelance
                    projects. Let's build something amazing!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
            {/* Reduced padding from p-8 to p-5 for mobile */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-orange-400/50 rounded-xl text-white text-sm placeholder-slate-500 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-orange-400/50 rounded-xl text-white text-sm placeholder-slate-500 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 focus:border-orange-400/50 rounded-xl text-white text-sm placeholder-slate-500 outline-none resize-none transition-all"
                    placeholder="Your message here..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 sm:w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-500 font-mono text-sm mb-2">
            Designed & Built by Shivam Agrawal
          </p>
          <p className="text-slate-600 text-xs">
            © 2025 All rights reserved. Made with ❤️ using React, Tailwind CSS &
            Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
