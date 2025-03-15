"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-800/70 transition-colors cursor-pointer"
      aria-label="Toggle theme"
      type="button"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-indigo-600" />}
      </motion.div>
    </button>
  )
}

