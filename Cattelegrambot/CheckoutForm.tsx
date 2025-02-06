"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function CheckoutForm({ bookId }) {
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [telegram, setTelegram] = useState("")
  const [instagram, setInstagram] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For this example, we'll just redirect to the confirmation page
    router.push("/confirmation")
  }

  return (
    <motion.form
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email (Required)
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-lg"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">
          Mobile Number (Optional)
        </label>
        <input
          type="tel"
          id="mobile"
          className="w-full px-3 py-2 border rounded-lg"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="telegram" className="block text-gray-700 font-bold mb-2">
          Telegram Username (Optional)
        </label>
        <input
          type="text"
          id="telegram"
          className="w-full px-3 py-2 border rounded-lg"
          value={telegram}
          onChange={(e) => setTelegram(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="instagram" className="block text-gray-700 font-bold mb-2">
          Instagram Username (Optional)
        </label>
        <input
          type="text"
          id="instagram"
          className="w-full px-3 py-2 border rounded-lg"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </div>
      <motion.button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit Order
      </motion.button>
      <p className="mt-4 text-sm text-gray-600 text-center">
        We respect your privacy. Your information is safe with us.
      </p>
    </motion.form>
  )
}

