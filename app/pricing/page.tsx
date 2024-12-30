import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PricingPage() {
     return (
        <>
        <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              Choose Your Plan
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto max-w-[700px]">
            Choose the perfect plan for your needs. Whether you're an individual educator or a large institution, we have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <PricingCard 
            title="Basic"
            price="$9.99"
            period="month"
            description="Perfect for individual educators and small study groups."
            features={[
              "100 AI-generated MCQs per month",
              "PDF export",
              "Basic customization options",
              "Email support"
            ]}
          />
          <PricingCard 
            title="Pro"
            price="$24.99"
            period="month"
            description="Ideal for schools and educational institutions."
            features={[
              "500 AI-generated MCQs per month",
              "PDF and editable format export",
              "Advanced customization options",
              "Priority email support",
              "Analytics dashboard"
            ]}
            highlighted={true}
          />
          <PricingCard 
            title="Enterprise"
            price="Custom"
            period="year"
            description="Tailored solutions for large organizations and universities."
            features={[
              "Unlimited AI-generated MCQs",
              "All export formats",
              "Full customization suite",
              "24/7 dedicated support",
              "Advanced analytics and integrations",
              "On-premise deployment option"
            ]}
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Not sure which plan is right for you?</h2>
          <Button size="lg" className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
            Contact Sales <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

function PricingCard({ title, price, period, description, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col ${
      highlighted ? 'ring-2 ring-purple-600 scale-105' : ''
    }`}>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-purple-700 mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-extrabold text-gray-900">{price}</span>
          <span className="ml-1 text-xl text-gray-500">/{period}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button className={`w-full mt-auto ${
        highlighted
          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
      }`}>
        Choose Plan
      </Button>
    </div>
  )
}

