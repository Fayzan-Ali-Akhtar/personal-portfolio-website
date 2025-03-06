"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "Devsinc",
    location: "Lahore, Pakistan",
    period: "July 2023 – Sept 2023",
    projects: [
      {
        name: "Social Networking App",
        description:
          "Developed an interactive social media platform using React.js, integrating RESTful APIs for seamless functionality and improving UI/UX with responsive design.",
        link: "#", // Replace with actual link
      },
      {
        name: "Bug Tracking System",
        description:
          "Engineered a MERN stack based bug-reporting platform, incorporating JWT authentication for secure user access and optimized MongoDB for performance.",
        link: "#", // Replace with actual link
      },
    ],
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="mb-8 overflow-hidden">
                <div className="bg-primary/10 py-4 px-6 border-b">
                  <div className="flex justify-between items-start flex-wrap gap-y-2">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{exp.period}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h4 className="text-lg font-medium mb-4">Projects</h4>
                  <div className="space-y-6">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="border-l-4 border-primary/30 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h5 className="font-medium">{project.name}</h5>
                          {project.link && (
                            <Link
                              href={project.link}
                              target="_blank"
                              className="text-primary hover:text-primary/80 inline-flex items-center"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="sr-only">Live Site</span>
                            </Link>
                          )}
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

