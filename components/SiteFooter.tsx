import { Brain, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t bg-white/50 backdrop-blur-sm ">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 flex items-center justify-around">
        <div className="md:w-1/4">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Qwizify AI
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Transform your PDFs into engaging multiple choice questions with the power of AI.
          </p>
        </div>
        
        <div className="mt-8 md:mt-0 md:w-3/4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/features" className="text-sm text-gray-600 hover:text-purple-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-gray-600 hover:text-purple-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-sm text-gray-600 hover:text-purple-600">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-purple-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-purple-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-600 hover:text-purple-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-purple-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
             */}
            {/* <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-purple-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-purple-600">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-sm text-gray-600 hover:text-purple-600">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="text-sm text-gray-600 hover:text-purple-600">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div> */}
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Connect</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="https://twitter.com" className="text-sm text-gray-600 hover:text-purple-600 inline-flex items-center gap-1">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="text-sm text-gray-600 hover:text-purple-600 inline-flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pb-6 border-t border-gray-900/10 pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-xs text-gray-500">
              © 2025 Qwizify AI. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <p className="text-xs text-gray-500">
                Made with ❤️ for educators and students by Aman
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

