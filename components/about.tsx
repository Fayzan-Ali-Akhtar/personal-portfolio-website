"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C", "C++"] },
  { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "AWS", "Azure", "Jira", "Agile"] },
  { category: "ML/AI", items: ["PyTorch", "Machine Learning", "Deep Learning", "Big Data", "MLOps"] },
]

export default function About() {
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
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg leading-relaxed mb-6">
              I'm a Computer Science student at Lahore University of Management Sciences (LUMS), with a strong academic
              record and a spot on the Dean's Honour List. My focus is on full-stack development, machine learning, and
              data science.
            </p>
            <p className="text-lg leading-relaxed">
              With professional experience as a Full-Stack Developer Intern at Devsinc and a diverse portfolio of
              projects ranging from AI-powered platforms to data science applications, I'm constantly seeking to expand
              my knowledge and develop innovative solutions to real-world problems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <Card className="mb-10">
              <CardContent className="pt-6">
                <h4 className="text-xl font-medium">Lahore University of Management Sciences (LUMS)</h4>
                <p className="text-muted-foreground">B.S. Computer Science | CGPA: 3.65 | Dean's Honour List</p>
                <p className="text-sm text-muted-foreground mt-1">Sept 2021 – May 2025 | Lahore, Pakistan</p>

                <div className="mt-4">
                  <h5 className="text-base font-medium mb-2">Relevant Coursework</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Engineering",
                      "Databases",
                      "Generative AI",
                      "Cloud Development",
                      "Machine Learning",
                      "Deep Learning",
                      "Data Structures",
                      "Algorithms",
                      "Operating Systems",
                      "Artificial Intelligence",
                      "Big Data & MLOps",
                    ].map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-medium mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

