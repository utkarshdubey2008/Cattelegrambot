"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={fadeIn} initial="initial" animate="animate">
      {children}
    </motion.div>
  )
}

