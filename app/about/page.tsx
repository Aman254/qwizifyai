import { Sparkles, Book, FileCheck, Zap, Users, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              About QuizPDF AI
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Revolutionizing Quiz Creation
          </h1>
          <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
            QuizPDF AI is transforming the way educators and learners create and use quizzes. 
            Our cutting-edge AI technology converts your content into engaging, customized PDF quizzes in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FeatureCard 
            icon={<Zap className="w-8 h-8 text-purple-600" />}
            title="Lightning Fast"
            description="Generate comprehensive quizzes in seconds, saving you hours of manual work."
          />
          <FeatureCard 
            icon={<Book className="w-8 h-8 text-purple-600" />}
            title="Customizable Content"
            description="Tailor quizzes to your specific needs, from topic selection to difficulty levels."
          />
          <FeatureCard 
            icon={<FileCheck className="w-8 h-8 text-purple-600" />}
            title="PDF Format"
            description="Receive your quizzes in universally compatible PDF format for easy sharing and printing."
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-purple-600" />}
            title="For Everyone"
            description="Perfect for teachers, students, trainers, and anyone looking to reinforce learning."
          />
        </div>

        <div className="bg-white bg-opacity-80 p-8 rounded-lg mb-16 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At QuizPDF AI, we're passionate about making education more accessible and engaging. 
            Our team of AI experts and educators work tirelessly to develop tools that empower 
            learners and teachers alike. We believe that with the right resources, everyone can 
            unlock their full learning potential.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Ready to transform your learning experience?</h2>
          <Link href='/'>
          <Button size="lg" className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
            Try QuizPDF AI Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
  
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3 text-purple-700">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

