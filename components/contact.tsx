"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import validator from "email-validator"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email format using email-validator
    if (!validator.validate(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please provide a valid email address.",
      })
      return
    }

    setIsSubmitting(true)
    // console.log("Form data:", formData)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        // console.log("Failed to send message")
        throw new Error("Failed to send message")
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
      })
    } finally {
      // console.log("Message sent / failed")
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-purple-900/40 dark:to-indigo-900/40 bg-pattern-grid"
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
            Let&apos;s Connect
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-indigo-950 dark:text-indigo-200 mb-8">
            Have a project idea or just want to chat? Reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-indigo-100 dark:border-indigo-900/30"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-950 dark:text-indigo-200">Let&apos;s Talk</h3>
                <p className="text-indigo-700 dark:text-indigo-300">
                  I&apos;m always open to discussing new projects, ideas, or opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-950 dark:text-indigo-200">Email</h3>
                <p className="text-indigo-700 dark:text-indigo-300">fayzan585@gmail.com</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/Fayzan-Ali-Akhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full shadow-md hover:from-gray-700 hover:to-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="http://www.linkedin.com/in/fayzan-ali-akhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md hover:from-blue-700 hover:to-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-900/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-indigo-950 dark:text-indigo-200 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-indigo-950 dark:text-indigo-200 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-indigo-950 dark:text-indigo-200 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className="border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg shadow-indigo-500/20"
              >
                {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
