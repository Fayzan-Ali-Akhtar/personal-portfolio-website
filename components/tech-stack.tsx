"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Cloud, Cpu, Globe } from "lucide-react"

type Skill = {
  name: string
  icon?: React.ReactNode
  color: string
}

type SkillCategory = {
  name: string
  icon: React.ReactNode
  skills: Skill[]
  gradient: string
}

export default function TechStack() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      gradient: "from-blue-600 to-indigo-600",
      skills: [
        { name: "React.js", color: "bg-blue-500" },
        { name: "Next.js", color: "bg-indigo-500" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "Express", color: "bg-gray-500" },
        { name: "MongoDB", color: "bg-green-600" },
        { name: "MERN Stack", color: "bg-blue-600" },
        { name: "Flask", color: "bg-blue-400" },
        { name: "PostgreSQL", color: "bg-orange-500" },
        { name: "JavaScript", color: "bg-yellow-500" },
        { name: "TypeScript", color: "bg-blue-500" },
      ],
    },
    {
      name: "AI & Machine Learning",
      icon: <Cpu className="h-6 w-6" />,
      gradient: "from-purple-600 to-pink-600",
      skills: [
        { name: "PyTorch", color: "bg-orange-600" },
        { name: "Keras", color: "bg-red-500" },
        { name: "TensorFlow", color: "bg-orange-500" },
        { name: "Scikit-learn", color: "bg-blue-500" },
        { name: "OpenCV", color: "bg-green-500" },
        { name: "NLP", color: "bg-purple-500" },
        { name: "Computer Vision", color: "bg-indigo-500" },
        { name: "Deep Learning", color: "bg-pink-500" },
        { name: "Data Analysis", color: "bg-cyan-500" },
        { name: "Python", color: "bg-blue-600" },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6" />,
      gradient: "from-cyan-600 to-blue-600",
      skills: [
        { name: "AWS", color: "bg-orange-500" },
        { name: "Microsoft Azure", color: "bg-blue-500" },
        { name: "Terraform", color: "bg-purple-500" },
        { name: "Docker", color: "bg-blue-600" },
        { name: "CI/CD", color: "bg-green-500" },
        { name: "Serverless", color: "bg-red-500" },
        { name: "Lambda", color: "bg-orange-600" },
        { name: "DynamoDB", color: "bg-blue-500" },
        { name: "S3", color: "bg-cyan-500" },
        { name: "Cloud Functions", color: "bg-indigo-500" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-amber-pink">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Tech Stack & Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-indigo-950 dark:text-indigo-200 mb-8">
            My expertise spans across various technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-indigo-100 dark:border-indigo-900/30"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-full mr-4 shadow-md`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-indigo-950 dark:text-indigo-200">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * skillIndex,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className={`px-4 py-2 ${skill.color} bg-opacity-10 dark:bg-opacity-20 rounded-lg border border-opacity-20 flex items-center gap-2 shadow-sm`}
                  >
                    {skill.icon}
                    <span className="text-sm font-medium text-indigo-950 dark:text-indigo-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

