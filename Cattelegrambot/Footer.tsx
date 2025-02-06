import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">We provide high-quality free eBooks to help you learn and grow in various fields.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/all-books" className="text-sm hover:underline">
                  All eBooks
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm flex items-center mb-2">
              <Mail className="mr-2 h-4 w-4" />
              <a href="mailto:smartstoriesig@gmail.com" className="hover:underline">
                smartstoriesig@gmail.com
              </a>
            </p>
            <p className="text-sm flex items-center">
              <Send className="mr-2 h-4 w-4" />
              <a
                href="https://t.me/smartstoriesyt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                t.me/smartstoriesyt
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Twitter />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2023 TheSmartStories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

