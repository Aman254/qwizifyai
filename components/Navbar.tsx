import { Brain } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/50 backdrop-blur-sm supports-[backdrop-filter]:bg-white/50">
    <div className=" flex h-16 items-center justify-between px-10">
      <Link href="/" className="flex items-center gap-2">
        <Brain className="h-6 w-6 text-purple-600" />
        <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Qwizify AI
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-6 px-6">
        <Link href="/features" className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Features
        </Link>
        <Link href="/pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900">
          Pricing
        </Link>
        <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900">
          About
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/auth/login">
          <Button variant="ghost">Sign In</Button>
        </Link>
        <Link href="/auth/register">
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  </nav>
  )
}
