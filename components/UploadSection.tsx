"use client"
import { Upload } from 'lucide-react'
import { useRef, useState } from 'react'
import { Button } from './ui/button'

export default function UploadSection() {
  const [fileName , setFileName] = useState<string|null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)


  

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
     const file = event.target.files?.[0]
     setFileName(file ? file?.name : null)
    
  }

  const handleButtonClick = ()=>{
    fileInputRef.current?.click()
  }

  return (
    <div className="border-2 border-dashed rounded-xl p-12 text-center bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Upload className="h-12 w-12 text-purple-600" />
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Upload your PDF file</h3>
          <p className="text-sm text-gray-500">Drag and drop or click to select a file</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-8">
          <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} aria-label='File Upload'/>
          <Button onClick={handleButtonClick} className='text-sm font-medium text-white transition-all duration-200 ease-in-out rounded-lg bg-gradient-to-r from-purple-600 
          to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full'>
            <Upload className='w-5 h-5 mr-2'/>
            Choose a file
          </Button>
           {fileName && (
        <p className="mt-2 text-sm text-gray-600 truncate max-w-full">
          Selected: {fileName}
        </p>
      )}
        </div>
      </div>
    </div>
  )
}

