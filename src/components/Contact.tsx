import { motion, type Variants } from "motion/react";
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
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("service_zc9tbq3", "template_4iqv078", form.current, {
        publicKey: "qHRXIsPsFwNUYt92W",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ name: "", subject: "", email: "", message: "" });
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.success("Something went wrong. Please try again.");
        }
      );
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
      href: "https://github.com/ShivamAgrawal04",
      gradient: "from-slate-400 to-slate-600",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shivam-agrawal0",
      gradient: "from-amber-400 to-orange-600",
    },
  ];

  return (
    <section className="relative py-12 pb-10 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] will-change-opacity"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] will-change-opacity"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* =======================
            Heading
        ======================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-slate-400 text-lg font-mono max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I’m always open to
            new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* =======================
              Left Side
          ======================= */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="
                    
                    group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700 hover:border-orange-400/50 rounded-2xl transition-all duration-300
                    
                    "
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5 sm:h-6 text-white" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-xs sm:text-sm text-slate-400 mb-0.5 sm:mb-1 truncate">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base text-white font-medium truncate">
                        {item.value}
                      </p>
                    </div>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* Social */}
            <div>
              <p className="flex items-center gap-2 text-slate-400 mb-4 font-mono text-sm">
                <Sparkles className="w-4 h-4 text-yellow-400" /> Find me on
              </p>
              <div className="flex gap-4">
                {socialLinks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      className="w-14 h-14 flex items-center justify-center bg-slate-800/50 border border-slate-700 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:border-orange-400/50"
                    >
                      <Icon className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-orange-500/10 border border-green-500/30">
              <div className="flex gap-4">
                <span className="w-4 h-4 rounded-full bg-green-400 animate-pulse mt-1" />
                <div>
                  <p className="text-white font-semibold">
                    Available for Opportunities
                  </p>
                  <p className="text-slate-400 text-sm">
                    Open to full-time roles & freelance projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =======================
              Right Side (Form)
          ======================= */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white outline-none focus:border-orange-400/50"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white outline-none focus:border-orange-400/50"
                />

                <input
                  type="text"
                  placeholder="Your subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white outline-none focus:border-orange-400/50"
                />

                <textarea
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white outline-none resize-none focus:border-orange-400/50"
                />

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/40"
                >
                  Send Message <Send className="w-5 h-5" />
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
            © 2026 All rights reserved. Made with ❤️ using React, Tailwind CSS &
            Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
