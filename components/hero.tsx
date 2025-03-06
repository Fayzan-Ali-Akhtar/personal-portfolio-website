"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-4 flex justify-center">
            <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">Full-Stack Developer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Hi, I&apos;m <span className="text-primary">Fayzan Ali Akhtar</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
            A passionate full-stack developer and machine learning enthusiast specializing in creating innovative and
            user-friendly web applications. LUMS Computer Science student with experience in MERN stack and AI
            solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild>
              <Link href="#projects">
                View my work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild aria-label="GitHub" className="h-10 w-10 rounded-full">
              <Link href="https://github.com/your-github" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="LinkedIn" className="h-10 w-10 rounded-full">
              <Link href="https://www.linkedin.com/in/your-linkedin" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Email" className="h-10 w-10 rounded-full">
              <Link href="mailto:fayzan585@gmail.com">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="Resume" className="h-10 w-10 rounded-full">
              <Link href="https://drive.google.com/your-resume-link" target="_blank">
                <FileText className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  )
}

