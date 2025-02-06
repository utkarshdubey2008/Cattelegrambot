"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { Book } from "../types/book"

interface CheckoutStepsProps {
  book: Book
}

export default function CheckoutSteps({ book }: CheckoutStepsProps) {
  const [step, setStep] = useState(1)

  useEffect(() => {
    if (step === 2) {
      const script = document.createElement("script")
      script.src = "https://form.jotform.com/jsform/250331432976052"
      script.type = "text/javascript"
      script.async = true
      document.getElementById("jotform-container")?.appendChild(script)
    }
  }, [step])

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Scan QR Code to Pay</h2>
            <div className="flex flex-col items-center gap-6">
              <Image
                src="https://envs.sh/XNz.jpg"
                alt="Payment QR Code"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="text-center space-y-2">
                <p className="font-semibold text-lg">Amount: ₹{book.currentPrice}</p>
                <p className="text-gray-600">Scan the QR code using any UPI app to make the payment</p>
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full max-w-md bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors"
              >
                Next
              </button>
            </div>
          </motion.div>
        )
      case 2:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete Your Order</h2>
            <div id="jotform-container" className="min-h-[500px]"></div>
          </motion.div>
        )
      case 3:
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Order Submitted Successfully!</h2>
            <p className="text-gray-600">Your request has been sent. You will receive the eBook soon!</p>
          </motion.div>
        )
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((number) => (
          <div key={number} className={`flex items-center ${number !== 3 ? "flex-1" : ""}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= number ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {step > number ? <Check className="w-5 h-5" /> : number}
            </div>
            {number !== 3 && <div className={`flex-1 h-1 ${step > number ? "bg-black" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">{renderStep()}</div>
    </div>
  )
}

