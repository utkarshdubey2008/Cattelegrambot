import Image from "next/image"

export default function HeroBanner() {
  return (
    <div className="relative bg-blue-600 text-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
          Welcome to the Ultimate Free eBook Store!
        </h1>
        <p className="text-xl md:text-2xl animate-fade-in-delay max-w-2xl">
          Get Premium Knowledge for ₹0! Expand your mind with our curated collection of free eBooks.
        </p>
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/hero-background.jpg" alt="Books background" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

