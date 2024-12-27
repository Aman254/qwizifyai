import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, ChromeIcon as Google, Github } from 'lucide-react'
import Link from "next/link"

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-100 opacity-20 blur-[100px]"></div>
        <div className="absolute left-60 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-100 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8 rounded-2xl bg-white/50 p-8 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-2">
            <Brain className="h-12 w-12 text-purple-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Qwizify AI
            </h1>
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="text-gray-600">Please enter your details to sign in</p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                required
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <Button variant="link" className="text-purple-600 p-0">
                Forgot password?
              </Button>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              Sign In
            </Button>
          </form>
          
          <p className="text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <Link href="/auth/register" className="text-purple-600 font-medium hover:underline">
              Register
            </Link>
          </p>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="w-full" variant="outline">
              <Google className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button className="w-full" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

