import { useState } from 'react'
import { SkeletonText } from '../UI/Skeleton'

interface CaptionGeneratorProps {
  onCaptionSelect: (caption: string) => void;
  brandName : string
}

export default function CaptionGenerator({ onCaptionSelect }: CaptionGeneratorProps) {
  const [loading, setLoading] = useState(false)
  const [brandContext, setBrandContext] = useState('')
  const [captions, setCaptions] = useState<string[]>([
    "✨ Transform your brand with stunning visuals",
    "🚀 Elevate your social media presence",
    "💫 Stand out from the crowd with unique designs",
    "🎯 Make your content pop with professional edits"
  ])
  const [error, setError] = useState<string | null>(null)

  const generateCaptions = async () => {
    if (!brandContext.trim()) {
      setError('Please provide some context about your brand')
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      // Here you'll integrate with Gemini API
      // For now using mock data based on brand context
      const newCaptions = [
        `✨ ${brandContext} - Leading the way in innovation`,
        `🚀 Experience the difference with ${brandContext}`,
        `💫 ${brandContext} - Where quality meets excellence`,
        `🎯 Choose ${brandContext} for unmatched quality`
      ]
      
      setCaptions(newCaptions)
    } catch (error) {
      console.error('Error generating captions:', error)
      setError('Failed to generate captions')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Caption Generator</h2>
        
        {/* Brand Context Input */}
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="brandContext" className="block text-sm font-medium text-gray-700 mb-1">
              Tell us about your brand
            </label>
            <textarea
              id="brandContext"
              value={brandContext}
              onChange={(e) => setBrandContext(e.target.value)}
              placeholder="Describe your brand, target audience, tone of voice, and key messages..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 
                focus:border-purple-500 min-h-[100px] resize-y"
            />
            <p className="mt-1 text-sm text-gray-500">
              This helps us generate more relevant captions for your content
            </p>
          </div>

          <button
            onClick={generateCaptions}
            disabled={loading || !brandContext.trim()}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg 
              hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Generating...' : 'Generate Captions'}
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Generated Captions */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          {captions.length > 0 ? 'Generated Captions' : 'No captions generated yet'}
        </h3>
        
        {loading ? (
          // Loading skeleton
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-3">
              <SkeletonText />
            </div>
          ))
        ) : (
          // Caption list
          captions.map((caption, index) => (
            <button
              key={index}
              onClick={() => onCaptionSelect(caption)}
              className="w-full p-3 text-left bg-white hover:bg-gray-50 rounded-lg border 
                border-gray-200 transition-colors duration-200"
            >
              {caption}
            </button>
          ))
        )}
      </div>
    </div>
  )
} 