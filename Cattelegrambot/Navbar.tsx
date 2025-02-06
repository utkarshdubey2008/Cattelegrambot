"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Search, Book, Menu } from "lucide-react"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2 min-w-fit">
            <Book className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
            <span className="font-bold text-black text-xs sm:text-sm md:text-base truncate">
              TheSmartStoriesYT Store
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/all-books" className="text-sm font-medium hover:text-blue-600">
              All eBooks
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600">
              Contact
            </Link>
          </div>
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <form
            onSubmit={handleSearch}
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent p-4 md:p-0 md:flex-1 max-w-2xl md:ml-4`}
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for eBooks..."
                className="search-input pr-10 w-full rounded-lg text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </form>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/all-books" className="block text-sm font-medium hover:text-blue-600">
              All eBooks
            </Link>
            <Link href="/about" className="block text-sm font-medium hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-blue-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

