import { useState, useEffect } from 'react'
import Header from './components/Layout/Header'
import VisualsGenerator from './components/Generators/VisualsGenerator'
import CaptionGenerator from './components/Generators/CaptionGenerator'
import PreviewPanel from './components/Preview/PreviewPanel'

interface ProcessedImage {
  original: string;
  processed: string;
}

export default function App() {
  const [currentImage, setCurrentImage] = useState<ProcessedImage | null>(null)
  const [currentCaption, setCurrentCaption] = useState<string>('')
  const [brandName, setBrandName] = useState<string>('')
  const [isMobilePreview, setIsMobilePreview] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit')
    if (!isFirstVisit) {
      setShowWelcome(true)
      localStorage.setItem('isFirstVisit', 'false')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed inset-x-0 top-0 z-50 transform translate-y-16 transition-transform duration-300">
          <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 shadow-lg">
            <div className="container mx-auto max-w-7xl">
              <p className="font-bold">Welcome to Chromapost!</p>
              <p className="text-sm">Upload a photo to get started with creating stunning visuals and captions.</p>
              <button 
                onClick={() => setShowWelcome(false)}
                className="text-blue-500 hover:text-blue-700 underline mt-2 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Editor Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <VisualsGenerator 
                onImageProcess={setCurrentImage} 
                isMobilePreview={isMobilePreview}
              />
            </div>
            
            {currentImage && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <CaptionGenerator 
                  onCaptionSelect={setCurrentCaption}
                  brandName={brandName}
                />
              </div>
            )}
          </div>
          
          {/* Preview Section */}
          <div className="lg:sticky lg:top-6 h-fit">
            <PreviewPanel
              originalImage={currentImage?.original}
              processedImage={currentImage?.processed}
              caption={currentCaption}
              brandName={brandName}
              setBrandName={setBrandName}
              isMobilePreview={isMobilePreview}
              setIsMobilePreview={setIsMobilePreview}
            />
          </div>
        </div>
      </main>
    </div>
  )
}