import { Sparkles } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="text-center space-y-6 mb-16">
    <div className="flex justify-center mb-4">
      <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded-full inline-flex items-center gap-1.5">
        <Sparkles className="h-4 w-4" />
        Transform PDFs into Interactive MCQs
      </span>
    </div>
    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      AI-Powered MCQ Generation
    </h1>
    <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
      Upload your PDF and let our AI create engaging multiple choice questions instantly.
      Perfect for educators, students, and learning professionals.
    </p>
  </div>
  )
}
