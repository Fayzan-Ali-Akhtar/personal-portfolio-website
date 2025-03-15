"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function About() {
  const milestones = [
    { title: "Computer Science at LUMS", year: "2021-2025" },
    // { title: "First Teaching Assistant Role", year: "2021" },
    { title: "Internship at Devsinc", year: "2023" },
    // { title: "400+ Students Mentored", year: "2021-2024" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-purple-blue bg-pattern-dots">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
          >
            <p className="text-lg text-indigo-950 dark:text-indigo-200">
              I am a passionate developer and educator specializing in building innovative digital solutions. Studying
              Computer Science at LUMS and working on real-world projects has allowed me to blend technical expertise
              with creative problem-solving. I love transforming complex challenges into engaging, user-friendly
              applications.
            </p>
            {/* <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Teaching Experience</h3>
              <p className="text-lg text-indigo-950 dark:text-indigo-200">
                As a Teaching Assistant at LUMS, I supported over 400 students in courses such as Data Structures,
                Object-Oriented Programming, Algorithms, Software Engineering, and Advanced Programming. This role
                sharpened my ability to explain complex concepts in an accessible way.
              </p>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/90 to-indigo-50/90 dark:from-gray-800/90 dark:to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-900/30"
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-indigo-700 dark:text-indigo-300">
              Key Milestones
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-1.5 bg-white dark:bg-gray-800 rounded-full p-0.5 shadow-md">
                    <CheckCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h4 className="font-medium text-indigo-800 dark:text-indigo-300">{milestone.title}</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">{milestone.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

