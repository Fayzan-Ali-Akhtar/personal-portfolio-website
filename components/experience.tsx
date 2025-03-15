"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-pink-purple bg-pattern-grid">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/90 to-indigo-50/90 dark:from-gray-800/90 dark:to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-900/30"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full mr-4 shadow-md">
                <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-indigo-300 dark:border-indigo-700">
                <div className="absolute w-4 h-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -left-[9px] top-1 shadow-md"></div>
                <h4 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300">
                  Full-Stack Developer Intern
                </h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                  July 2023 – Sept 2023, Lahore, Pakistan
                </p>
                <p className="text-indigo-950 dark:text-indigo-200">
                  Developed a social networking application using React.js and engineered a bug tracking system with the
                  MERN stack, focusing on responsive design and security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Teaching Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/90 to-purple-50/90 dark:from-gray-800/90 dark:to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100 dark:border-purple-900/30"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-full mr-4 shadow-md">
                <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">Teaching Experience</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-purple-300 dark:border-purple-700">
                <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -left-[9px] top-1 shadow-md"></div>
                <h4 className="text-xl font-semibold text-purple-800 dark:text-purple-300">
                  Teaching Assistant at LUMS
                </h4>
                <p className="text-purple-950 dark:text-purple-200">
                Supported over 150 students in each of the following courses: Data Structures, Object-Oriented Programming, Algorithms, Software Engineering, and Advanced Programming.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Data Structures", "OOP", "Algorithms", "Software Engineering", "Advanced Programming"].map(
                    (course, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs rounded-full shadow-sm"
                      >
                        {course}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

