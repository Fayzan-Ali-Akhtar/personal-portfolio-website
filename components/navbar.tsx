"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const { toast } = useToast()

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            >
              Fayzan Ali Akhtar
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:hidden text-indigo-700 dark:text-indigo-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900 z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-indigo-200 dark:border-indigo-800">
                <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Fayzan Ali Akhtar
                </div>
                <button onClick={toggleMenu} className="text-indigo-700 dark:text-indigo-300" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-lg text-indigo-700 dark:text-indigo-300 py-2 border-b border-indigo-200 dark:border-indigo-800"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

