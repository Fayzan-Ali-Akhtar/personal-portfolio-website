"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

// Project categories
const categories = ["All", "Web Development", "Data Science & ML", "Research"]

// Project data
const projects = [
  {
    title: "IntelliLearn",
    category: "Web Development",
    period: "Jan. 2024 – May 2024",
    description:
      "AI-powered ed-tech platform enabling course exploration, enrollment, community engagement, and personalized learning with GPT-3.5 chatbot and text summarization. Features timed quiz system with concept feedback and comprehensive dashboards.",
    technologies: ["MERN", "Redux", "AI Integration", "WebSockets"],
    link: "#", // Replace with actual link
    github: null, // Add if available
  },
  {
    title: "AI-Powered Cover Letter Generator",
    category: "Web Development",
    period: "Mar. 2025 – Apr. 2025",
    description:
      "Developed and deployed an AI-powered cover letter generator using AWS Lambda for serverless execution, API Gateway for RESTful communication, and Cognito for secure authentication. Used Textract for resume parsing and Vector DB for efficient searching.",
    technologies: ["AWS", "Lambda", "DynamoDB", "Textract", "Vector DB", "React.js"],
    link: null,
    github: null,
  },
  {
    title: "AI Chef Assistant",
    category: "Web Development",
    period: "March 2024 – May 2024",
    description:
      "Developed and deployed an AI-powered cooking assistant that generates personalized recipes with step-by-step cooking instructions and corresponding images using Llama 3 and DALL-E 2. React.js frontend on Netlify, Python Flask backend on Hugging Face Spaces.",
    technologies: ["Flask", "React.js", "Llama 3", "DALL-E 2", "Hugging Face"],
    link: "#", // Replace with actual link
    github: null,
  },
  {
    title: "Mosaic Vision Web App",
    category: "Web Development",
    period: "Ongoing",
    description:
      "Developed a production-ready quota system app (Paid Project) integrating RESTful APIs, React Redux, and JWT authentication. Implemented multi-role access and a quote request system for streamlined operations.",
    technologies: ["MERN", "Redux", "JWT", "RESTful API"],
    link: "#", // Replace with actual link
    github: null,
  },
  {
    title: "Content Moderation System",
    category: "Data Science & ML",
    period: "Ongoing",
    description:
      "Developed a content moderation system using Naive Bayes, RNN, and BERT models with an 88.29% recall. Optimized performance by addressing class imbalances.",
    technologies: ["Naive Bayes", "RNN", "BERT", "Python", "NLP"],
    link: null,
    github: "#", // Replace with actual link
  },
  {
    title: "T20 Cricket Data Analysis",
    category: "Data Science & ML",
    period: "Ongoing",
    description:
      "Analyzed cricket data using Python and PyTorch to forecast match outcomes. Applied logistic regression and neural networks for prediction.",
    technologies: ["Python", "PyTorch", "Logistic Regression", "Neural Networks", "Data Analysis"],
    link: null,
    github: "#", // Replace with actual link
  },
  {
    title: "Federated Learning (FedDCA)",
    category: "Research",
    period: "Ongoing",
    description:
      "Federated learning trains a global model from decentralized, non-IID data while preserving privacy. Developed FedDCA to boost model convergence and fairness in heterogeneous settings.",
    technologies: ["Python", "Federated Learning", "Deep Learning", "Privacy Preservation"],
    link: null,
    github: "#", // Replace with actual link
  },
  {
    title: "Enhanced Layout & Quantity Handling for Stable Diffusion",
    category: "Research",
    period: "Ongoing",
    description:
      "Developed a framework addressing layout and quantity issues in Stable Diffusion 1.5 using bounding box prediction, object placement, and contextual attention maps. Achieved improved alignment between prompts and generated outputs.",
    technologies: ["Stable Diffusion", "Computer Vision", "Deep Learning", "Python"],
    link: null,
    github: null,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

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
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of web development, data science, machine learning, and research projects.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex justify-between items-start flex-wrap gap-y-2 mb-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <Badge variant="outline">{project.period}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
                      <div className="flex gap-3">
                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            className="text-primary hover:text-primary/80 inline-flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Live Demo
                          </Link>
                        )}
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary inline-flex items-center"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            GitHub
                          </Link>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

