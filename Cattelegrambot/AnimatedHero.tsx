"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function AnimatedHero() {
  return (
    <motion.div
      className="relative w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Unlock Your Potential
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover premium eBooks to transform your life and career
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="/browse"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-lg hover:bg-blue-50 transition duration-300"
          >
            Explore eBooks
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

