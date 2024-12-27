import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import UploadSection from "@/components/UploadSection"
import PromptSection from "@/components/PromptSection"
import ResultsSection from "@/components/ResultsSection"
import { SiteFooter } from "@/components/SiteFooter"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 ">
    
      <Navbar/>

      <main className="container mx-auto px-4 py-16">
        <HeroSection/>

        <div className="max-w-3xl mx-auto space-y-8">
          <UploadSection />
          <PromptSection />
          <ResultsSection />
        </div>
      </main>
      <SiteFooter/>
    </div>
  )
}

