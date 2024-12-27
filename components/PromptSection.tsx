import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from 'lucide-react'
import { useState } from "react"

export default function PromptSection() {
  return (
    <div className="space-y-4">
      <Textarea 
        placeholder="Enter your prompt (e.g., 'Generate 10 MCQs from Chapter 1 focusing on key concepts')"
        className="min-h-[300px] bg-white/50 backdrop-blur-sm"
      />
      <div className="flex justify-end">
        <Button className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <Send className="h-4 w-4" />
          Generate MCQs
        </Button>
      </div>
    </div>
  )
}

