"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface CoverDisplayProps {
  frontCover: string
  backCover: string
  title: string
}

export default function CoverDisplay({ frontCover, backCover, title }: CoverDisplayProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: isHovered ? 0 : 1 }}>
        <Image
          src={frontCover || "/placeholder.svg"}
          alt={`${title} front cover`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute inset-0 transition-opacity duration-300" style={{ opacity: isHovered ? 1 : 0 }}>
        <Image
          src={backCover || "/placeholder.svg"}
          alt={`${title} back cover`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-center bg-black bg-opacity-50 text-white py-2 px-4 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100">
        Hover to see back cover
      </div>
    </motion.div>
  )
}

