"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BookCard from "./BookCard"
import type { Book } from "../types/book"

interface EbookCarouselProps {
  books: Book[]
}

export default function EbookCarousel({ books }: EbookCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length)
  }

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <motion.div className="flex" animate={{ x: `-${currentIndex * 100}%` }} transition={{ duration: 0.5 }}>
          {books.map((book, index) => (
            <div key={book.id} className="w-full flex-shrink-0">
              <BookCard book={book} />
            </div>
          ))}
        </motion.div>
      </div>
      <button
        onClick={prevBook}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Previous book"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextBook}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        aria-label="Next book"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {books.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            aria-label={`Go to book ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

