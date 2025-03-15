"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

// Import the image from the public/images folder
import profilePic from "@/public/images/profile.jpg"

export default function About() {
  // Image position control - adjust these values to reposition the image focus
  // Values range from 0% to 100% for both horizontal and vertical positioning
  const imagePosition = {
    horizontal: "50%", // 0% (left) to 100% (right)
    vertical: "30%", // 0% (top) to 100% (bottom) - adjusted to show more of the top
  }

  // State to track if the component is being hovered
  const [isHovered, setIsHovered] = useState(false)

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
          </motion.div>

          {/* Profile Picture with Animation - Replacing Key Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Base Image using Next.js Image component */}
              <Image
                src={profilePic}
                alt="Fayzan Ali Akhtar"
                fill
                className="object-cover"
                style={{
                  objectPosition: `${imagePosition.horizontal} ${imagePosition.vertical}`,
                }}
              />

              {/* Improved Subtle Overlay - using a vignette effect instead of full gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Animated Border */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.9,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-4 border-white/30 rounded-2xl"
              />

              {/* Animated Corner Accents */}
              <motion.div
                animate={{
                  width: isHovered ? 40 : 0,
                  height: isHovered ? 40 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 border-t-4 border-l-4 border-white/70 rounded-tl-lg"
              />
              <motion.div
                animate={{
                  width: isHovered ? 40 : 0,
                  height: isHovered ? 40 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 right-0 border-t-4 border-r-4 border-white/70 rounded-tr-lg"
              />
              <motion.div
                animate={{
                  width: isHovered ? 40 : 0,
                  height: isHovered ? 40 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 border-b-4 border-l-4 border-white/70 rounded-bl-lg"
              />
              <motion.div
                animate={{
                  width: isHovered ? 40 : 0,
                  height: isHovered ? 40 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 right-0 border-b-4 border-r-4 border-white/70 rounded-br-lg"
              />

              {/* Animated Text Overlay - now using animate instead of initial/whileHover */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20,
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
              >
                <h3 className="text-xl font-bold text-white">Fayzan Ali Akhtar</h3>
                <p className="text-white/80">Full-Stack Developer & AI Enthusiast</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

