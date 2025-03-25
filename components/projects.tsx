"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image, { StaticImageData } from "next/image"

// Import local project images
import intelliLearnImg from "@/public/images/intellilearn.png"
import cricketImg from "@/public/images/cricket.png"
import aiChefAssistantImg from "@/public/images/ai-chef-assistant.png"
import mosaicVisionImg from "@/public/images/mosaic-vision.png"
import contentModerationImg from "@/public/images/content-moderation.png"
import coverLetterImg from "@/public/images/cover-letter.png"
import federatedLearningImg from "@/public/images/federated-learning.png"
import stableDiffusionImg from "@/public/images/stable-diffusion.png"
import socialNetworkingAppImg from "@/public/images/social-networking-app.png";
import bugTrackingSystemImg from "@/public/images/bug-tracking-system.png";

type Project = {
  id: number
  title: string
  description: string
  category: "web" | "ai"
  image: string | StaticImageData
  link: string
  github?: string
  tags: string[]
  color: string
  dateRange: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "IntelliLearn",
      description:
        "An AI-powered ed-tech platform built using the MERN stack, featuring a AI chatbot and timed quiz system.",
      category: "web",
      image: intelliLearnImg,
      link: "https://intellilearn-gamma.vercel.app/",
      github: "https://github.com/Fayzan-Ali-Akhtar/GPT-EdTech",
      tags: ["MERN Stack", "AI", "EdTech"],
      color: "from-blue-500 to-indigo-600",
      dateRange: "Jan 2024 – May 2024",
    },
    {
      id: 2,
      title: "T20 Cricket Data Analysis",
      description:
        "A data science project using Python and PyTorch to analyze ESPNcricinfo cricket data and forecast match outcomes.",
      category: "ai",
      image: cricketImg,
      link: "https://medium.com/@mustafaaplus52/batting-through-numbers-a-data-driven-analysis-of-cricket-d450423c4fa9",
      github: "https://github.com/Fayzan-Ali-Akhtar/T20-Cricket-Data-Analysis",
      tags: ["Python", "PyTorch", "Data Science"],
      color: "from-cyan-500 to-blue-600",
      dateRange: "Nov 2023 – Dec 2023",
    },
    {
      id: 3,
      title: "AI Chef Assistant",
      description:
        "An AI-powered cooking assistant developed with Flask and React.js, integrating Llama 3 and DALL-E 2 to generate personalized recipes with step-by-step instructions.",
      category: "ai",
      image: aiChefAssistantImg,
      link: "https://ai-chef-assistant.netlify.app/",
      github: "https://github.com/Fayzan-Ali-Akhtar/AI-Chef-Assistant",
      tags: ["Flask", "React.js", "Llama 3", "DALL-E 2"],
      color: "from-green-500 to-emerald-600",
      dateRange: "Mar 2024 – May 2024",
    },
    {
      id: 4,
      title: "Mosaic Vision Web App",
      description:
        "A production-ready application built with MERN that offers multi-role access and a quote request system.",
      category: "web",
      image: mosaicVisionImg,
      link: "https://mosaic-vision.netlify.app/",
      github: "https://github.com/Zaimr49/Mosaic-Vision",
      tags: ["MERN Stack", "Multi-role", "Production"],
      color: "from-purple-500 to-indigo-600",
      dateRange: "Jun 2024 – Aug 2024",
    },
    {
      id: 5,
      title: "Content Moderation System",
      description:
        "A machine learning-based solution using Naïve Bayes, RNN, and BERT to moderate content with high recall accuracy.",
      category: "ai",
      image: contentModerationImg,
      link: "https://github.com/Fayzan-Ali-Akhtar/Content-Moderation-and-Toxicity-Classification",
      github: "https://github.com/Fayzan-Ali-Akhtar/Content-Moderation-and-Toxicity-Classification",
      tags: ["ML", "BERT", "RNN", "NLP"],
      color: "from-red-500 to-pink-600",
      dateRange: "Nov 2023 – Dec 2023",
    },
    {
      id: 6,
      title: "AI-Powered Cover Letter Generator",
      description:
        "A tool leveraging AWS Lambda, DynamoDB, Textract, and Terraform to generate personalized cover letters by parsing resumes.",
      category: "web",
      image: coverLetterImg,
      link: "#",
      github: "#",
      tags: ["AWS", "Terraform", "NLP"],
      color: "from-amber-500 to-orange-600",
      dateRange: "Mar 2025 – Present",
    }, 
    
    {
      id: 7,
      title: "Federated Learning (FedDCA)",
      description:
        "An advanced ML project that trains a global model from decentralized, non-IID data, enhancing convergence and fairness.",
      category: "ai",
      image: federatedLearningImg,
      link: "https://github.com/Fayzan-Ali-Akhtar/FedDCA",
      github: "https://github.com/Fayzan-Ali-Akhtar/FedDCA",
      tags: ["Federated Learning", "ML", "Research"],
      color: "from-violet-500 to-purple-600",
      dateRange: "Nov 2024 – Present",
    },
    {
      id: 8,
      title: "Enhanced Layout & Quantity Handling for Stable Diffusion",
      description:
      "A framework that improves image generation with Stable Diffusion 1.5 using bounding box prediction, object placement, and contextual attention maps.",
      category: "ai",
      image: stableDiffusionImg,
      link: "#",
      github: "#",
      tags: ["Stable Diffusion", "Computer Vision", "AI"],
      color: "from-pink-500 to-rose-600",
      dateRange: "Sept 2024 – Present",
    },
    {
      id: 9, // Ensure this ID is unique
      title: "Bug Tracking System",
      description:
        "Engineered a MERN stack-based bug-reporting platform, incorporating JWT authentication for secure user access and optimized MongoDB for performance.",
      category: "web",
      image: bugTrackingSystemImg,
      link: "http://bugzilla.vercel.app",
      github: "", // Add GitHub link if available
      tags: ["MERN Stack", "JWT Authentication", "MongoDB"],
      color: "from-red-500 to-orange-600",
      dateRange: "Jul 2023 – Sept 2023",
    },
    {
      id: 10, // Ensure this ID is unique
      title: "Social Networking App",
      description:
        "Developed an interactive social media platform using React.js, integrating RESTful APIs for seamless functionality and enhancing UI/UX with responsive design.",
      category: "web",
      image: socialNetworkingAppImg,
      link: "https://connect-react.netlify.app/",
      github: "", // Add GitHub link if available
      tags: ["React.js", "RESTful APIs", "Responsive Design"],
      color: "from-teal-500 to-blue-600",
      dateRange: "Jul 2023 – Sept 2023",
    },
  ]

  const [filter, setFilter] = useState<"all" | "web" | "ai">("all")

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    return project.category === filter
  })

  return (
    <section id="projects" className="py-20 bg-gradient-blue-cyan">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-indigo-950 dark:text-indigo-200 mb-8">
            Explore my latest projects spanning web development and AI/ML solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={
                filter === "all"
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/20"
                  : "border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300"
              }
            >
              All Projects
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className={
                filter === "web"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                  : "border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"
              }
            >
              Web Development
            </Button>
            <Button
              variant={filter === "ai" ? "default" : "outline"}
              onClick={() => setFilter("ai")}
              className={
                filter === "ai"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300"
              }
            >
              AI/ML & Data Science
            </Button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-indigo-100 dark:border-indigo-900/30 group"
              >
                <div className="relative overflow-hidden h-48">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-indigo-950 dark:text-indigo-200">{project.title}</h3>
                    <Badge
                      variant="outline"
                      className={
                        project.category === "web"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800/50"
                          : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800/50"
                      }
                    >
                      {project.category === "web" ? "Web Dev" : "AI/ML"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.dateRange}</p>
                  <p className="text-indigo-950 dark:text-indigo-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-md ${
                          project.category === "web"
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                            : "bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

