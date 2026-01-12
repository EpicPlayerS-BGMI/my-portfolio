import { useState, useEffect, lazy, Suspense } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { ThreeBackground } from "./components/ThreeBackground";
import { Contact } from "./components/Contact";
import { Toaster } from "react-hot-toast";

const SignatureCursor = lazy(() => import("./components/SignatureCursor"));

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white ">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(15, 23, 42, 0.9)", // slate-900
            color: "#fff",
            border: "1px solid rgba(251, 146, 60, 0.4)", // orange-400
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 25px rgba(251, 146, 60, 0.25)",
            borderRadius: "14px",
            padding: "14px 16px",
            fontSize: "14px",
          },

          success: {
            iconTheme: {
              primary: "#fb923c", // orange-400
              secondary: "#0f172a",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#0f172a",
            },
          },
        }}
      />

      {!isTouchDevice && (
        <Suspense fallback={null}>
          <SignatureCursor />
        </Suspense>
      )}

      <ThreeBackground />
      <Navigation activeSection={activeSection} />

      <div className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}
