import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  )
}

