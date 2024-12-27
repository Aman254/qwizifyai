"use client"
import { Upload } from 'lucide-react'
import { useState } from 'react'

export default function UploadSection() {
  const [fileName , setFileName] = useState<string|null>(null)
  return (
    <div className="border-2 border-dashed rounded-xl p-12 text-center bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Upload className="h-12 w-12 text-purple-600" />
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Upload your PDF file</h3>
          <p className="text-sm text-gray-500">Drag and drop or click to select a file</p>
        </div>
        <div className="flex items-center justify-around mt-2">
          <input type="file" className="rounded-lg absolute bg-gradient-to-r text-sm py-2 px-4 from-purple-600 cursor-pointer to-indigo-600 text-white"/>
          </div>
      </div>
    </div>
  )
}

