"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  gradient: string
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Responsive UIs with React and Tailwind CSS",
      excerpt:
        "Learn how to create beautiful, responsive user interfaces using React and Tailwind CSS with practical examples.",
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Getting Started with PyTorch for Deep Learning",
      excerpt:
        "A beginner-friendly guide to PyTorch, covering tensors, neural networks, and training your first model.",
      date: "February 22, 2024",
      readTime: "12 min read",
      image: "/placeholder.svg?height=200&width=400",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "Optimizing Next.js Applications for Performance",
      excerpt: "Practical tips and techniques to improve the performance of your Next.js applications in production.",
      date: "January 15, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=400",
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/40 bg-pattern-dots"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Insights & Blog
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-indigo-950 dark:text-indigo-200 mb-8">
            Thoughts, tutorials, and insights on technology and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-indigo-100 dark:border-indigo-900/30 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-indigo-950 dark:text-indigo-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-indigo-950 dark:text-indigo-200 mb-4">{post.excerpt}</p>
                <Button
                  variant="ghost"
                  className={`group/btn text-${post.gradient.split("-")[1].split(" ")[0]} hover:text-${post.gradient.split("-")[2]} dark:text-${post.gradient.split("-")[1].split(" ")[0]}-400 dark:hover:text-${post.gradient.split("-")[2]}-400 p-0`}
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

