import dynamic from "next/dynamic"
import EbookCarousel from "./components/EbookCarousel"
import { books } from "./data/books"
import { Mail, Send, BookOpen, Users, Star } from "lucide-react"
import Link from "next/link"

const AnimatedHero = dynamic(() => import("./components/AnimatedHero"), { ssr: false })
const AnimatedSection = dynamic(() => import("./components/AnimatedSection"), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen pb-6">
      <AnimatedHero />

      <AnimatedSection>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Featured eBooks</h2>
            <EbookCarousel books={books} />
            <div className="text-center mt-12">
              <Link href="/all-books" className="btn-primary inline-block text-sm md:text-base">
                View All eBooks
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Our eBooks?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <BookOpen className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Curated Content</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Handpicked selections to ensure quality and relevance
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Expert Authors</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Learn from industry professionals and thought leaders
                </p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Lifetime Access</h3>
                <p className="text-sm md:text-base text-gray-600">Buy once, access forever with free updates</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">What Our Readers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  "The eBooks I've purchased have been transformative. The content is top-notch and easy to follow."
                </p>
                <p className="font-semibold text-sm md:text-base">- Sarah J.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  "I've grown my Instagram following significantly thanks to the strategies in these eBooks. Highly
                  recommended!"
                </p>
                <p className="font-semibold text-sm md:text-base">- Mike T.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-12 md:py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <a
                href="https://t.me/smartstoriesyt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-blue-200 transition duration-300"
              >
                <Send className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                <span className="text-base md:text-lg">Join us on Telegram</span>
              </a>
              <a
                href="mailto:smartstoriesig@gmail.com"
                className="flex items-center text-white hover:text-blue-200 transition duration-300"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                <span className="text-base md:text-lg">Email Us</span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

