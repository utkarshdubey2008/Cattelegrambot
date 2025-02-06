"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Book } from "../types/book"

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const discountPercentage = Math.round(((book.originalPrice - book.currentPrice) / book.originalPrice) * 100)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col mx-auto p-4"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/ebook/${book.id}`} className="block relative aspect-[3/4] h-64 mb-4">
        <Image
          src={book.image || "/placeholder.svg"}
          alt={book.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 60vw, 40vw"
        />
        <motion.div
          className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {book.type}
        </motion.div>
      </Link>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2 line-clamp-2">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{book.author}</p>
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">{book.description}</p>
        </div>
        <div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-bold text-blue-600">₹{book.currentPrice}</span>
            <span className="text-sm line-through text-gray-500">₹{book.originalPrice}</span>
            <span className="text-sm text-green-600 font-semibold">({discountPercentage}% OFF)</span>
          </div>
          <Link
            href={`/ebook/${book.id}`}
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 text-sm"
          >
            Quick Enroll <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

