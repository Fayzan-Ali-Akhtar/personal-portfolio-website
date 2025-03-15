"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12 border-t border-indigo-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
              Fayzan Ali Akhtar
            </h3>
            <p className="text-indigo-200 mb-4 max-w-md">Crafting digital experiences one line of code at a time.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Fayzan-Ali-Akhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/fayzan-ali-akhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:fayzan585@gmail.com"
                className="text-indigo-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-indigo-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-indigo-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-indigo-300 hover:text-white transition-colors">
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-indigo-200">More</h4>
            <ul className="space-y-2">
              <li>
                <a href="#blog" className="text-indigo-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-indigo-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300"
        >
          <p>© {currentYear} Fayzan Ali Akhtar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

