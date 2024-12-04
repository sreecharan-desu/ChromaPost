import { useState, useEffect } from 'react'
import ImageUploader from '../UI/ImageUploader'
import LoadingPreview from '../UI/LoadingPreview'
import { imageService, backgroundService } from '../../services/api'
import { Background } from '../../types'

interface VisualsGeneratorProps {
  onImageProcess: (image: { original: string, processed: string }) => void;
}

export default function VisualsGenerator({ onImageProcess }: VisualsGeneratorProps) {
  const [loading, setLoading] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [backgrounds, setBackgrounds] = useState<Background[]>([])
  const [selectedBackground, setSelectedBackground] = useState<Background | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState(BACKGROUND_CATEGORIES[0])
  const [isMobileView, setIsMobileView] = useState(true)

  useEffect(() => {
    const loadInitialBackgrounds = async () => {
      try {
        setLoading(true)
        setError(null)
        const initialBackgrounds = await backgroundService.getRandomBackgrounds(selectedCategory.query)
        setBackgrounds(initialBackgrounds)
      } catch (error) {
        console.error('Error loading backgrounds:', error)
        setError('Failed to load backgrounds. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadInitialBackgrounds()
  }, [selectedCategory])

  const handleImageUpload = (file: File) => {
    const originalImageUrl = URL.createObjectURL(file)
    setUploadedImage(originalImageUrl)
    onImageProcess({ original: originalImageUrl, processed: originalImageUrl })
    setSelectedBackground(null)
    setProcessedImage(null) // Reset processed image when new image is uploaded
  }

  const handleBackgroundSelect = async (background: Background) => {
    if (!uploadedImage) return

    try {
      setLoading(true)
      setError(null)
      setSelectedBackground(background)

      // Remove background only if not already processed
      let currentProcessedImage = processedImage
      if (!currentProcessedImage) {
        currentProcessedImage = await imageService.removeBackground(uploadedImage)
        setProcessedImage(currentProcessedImage)
      }

      // Combine with selected background
      const combinedImage = await imageService.combineWithBackground(
        currentProcessedImage,
        background.url
      )

      onImageProcess({
        original: uploadedImage,
        processed: combinedImage
      })
    } catch (error) {
      console.error('Error applying background:', error)
      setError('Failed to apply background. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const loadMoreBackgrounds = async () => {
    try {
      setLoading(true)
      setError(null)
      const newBackgrounds = await backgroundService.getRandomBackgrounds(selectedCategory.query)
      setBackgrounds(prev => [...prev, ...newBackgrounds])
    } catch (error) {
      console.error('Error loading more backgrounds:', error)
      setError('Failed to load more backgrounds. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Upload your image</h2>
        <ImageUploader onUpload={handleImageUpload} />
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {uploadedImage && (
        <div className="space-y-4">
          <div className="sticky top-0 bg-white z-10 py-4">
            <h3 className="text-lg font-semibold mb-4">Choose a background</h3>
            
            {/* View Toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {BACKGROUND_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category)
                      setBackgrounds([]) // Clear existing backgrounds
                    }}
                    className={`flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                      ${selectedCategory.id === category.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Mobile/Desktop Toggle */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 whitespace-nowrap">Mobile View</span>
                <button
                  onClick={() => setIsMobileView(!isMobileView)}
                  className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isMobileView ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Background Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {backgrounds.map((background) => (
              <button
                key={background.id}
                onClick={() => handleBackgroundSelect(background)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 
                  ${selectedBackground?.id === background.id
                    ? 'border-purple-500 ring-2 ring-purple-500'
                    : 'border-transparent hover:border-gray-300'
                  }`}
              >
                {loading && selectedBackground?.id === background.id && (
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10">
                    <LoadingPreview />
                  </div>
                )}
                <img 
                  src={background.thumb} 
                  alt={background.credit}
                  className={`w-full h-full object-cover transition-opacity duration-300 
                    ${loading && selectedBackground?.id === background.id ? 'opacity-50' : 'opacity-100'}`}
                />
              </button>
            ))}
          </div>
          
          <button
            onClick={loadMoreBackgrounds}
            disabled={loading}
            className="w-full mt-4 py-2 text-sm text-purple-600 hover:text-purple-700 
              disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? 'Loading...' : 'Load more backgrounds'}
          </button>
        </div>
      )}

      {loading && !uploadedImage && (
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          <LoadingPreview />
        </div>
      )}
    </div>
  )
}

const BACKGROUND_CATEGORIES = [
  { id: 'all', name: 'All', query: 'background texture' },
  { id: 'abstract', name: 'Abstract', query: 'abstract background pattern' },
  { id: 'nature', name: 'Nature', query: 'nature landscape background' },
  { id: 'gradient', name: 'Gradient', query: 'gradient background' },
  { id: 'texture', name: 'Texture', query: 'texture pattern background' },
  { id: 'minimal', name: 'Minimal', query: 'minimal clean background' },
  { id: 'geometric', name: 'Geometric', query: 'geometric pattern background' },
  { id: 'studio', name: 'Studio', query: 'studio backdrop background' }
]