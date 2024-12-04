import { useState } from 'react'
import { InstagramIcon, FacebookIcon, WhatsappIcon } from '../UI/Icons'

interface PreviewLayout {
  id: string;
  name: string;
  aspectRatio: string;
  width: string;
  platform: string;
}

const PREVIEW_LAYOUTS: PreviewLayout[] = [
  { id: 'instagram-post', name: 'Instagram Post', aspectRatio: 'aspect-square', width: 'max-w-[375px]', platform: 'instagram' },
  { id: 'instagram-story', name: 'Instagram Story', aspectRatio: 'aspect-[9/16]', width: 'max-w-[350px]', platform: 'instagram' },
  { id: 'whatsapp-status', name: 'WhatsApp Status', aspectRatio: 'aspect-[9/16]', width: 'max-w-[350px]', platform: 'whatsapp' },
  { id: 'facebook-post', name: 'Facebook Post', aspectRatio: 'aspect-[1.91/1]', width: 'max-w-[500px]', platform: 'facebook' },
  { id: 'facebook-reel', name: 'Facebook Reel', aspectRatio: 'aspect-[9/16]', width: 'max-w-[350px]', platform: 'facebook' },
]

const EFFECTS = [
  { id: 'none', name: 'None' },
  { id: 'brightness', name: 'Bright', filter: 'brightness(1.2)' },
  { id: 'contrast', name: 'Contrast', filter: 'contrast(1.2)' },
  { id: 'warm', name: 'Warm', filter: 'sepia(0.3)' },
  { id: 'cool', name: 'Cool', filter: 'hue-rotate(30deg)' },
  { id: 'vintage', name: 'Vintage', filter: 'sepia(0.5) contrast(1.1)' },
]

interface PreviewPanelProps {
  originalImage: string | undefined;
  processedImage: string | undefined;
  caption: string;
  brandName: string;
  setBrandName: (name: string) => void;
  isMobilePreview: boolean;
  setIsMobilePreview: (isMobile: boolean) => void;
}

export default function PreviewPanel({
  originalImage,
  processedImage,
  caption,
  brandName,
  setBrandName,
  isMobilePreview,
  setIsMobilePreview
}: PreviewPanelProps) {
  const [selectedLayout, setSelectedLayout] = useState<PreviewLayout>(PREVIEW_LAYOUTS[0])
  const [selectedEffect, setSelectedEffect] = useState(EFFECTS[0])
  const [brandNameError, setBrandNameError] = useState<string>('')

  const handleDownload = () => {
    if (!brandName.trim()) {
      setBrandNameError('Please enter your brand name before downloading')
      return
    }
    setBrandNameError('')
    
    const formattedBrandName = brandName.toLowerCase().replace(/\s+/g, '-')
    const timestamp = new Date().toISOString().split('T')[0]
    const fileName = `${formattedBrandName}-${selectedLayout.platform}-${timestamp}.png`
    
    const link = document.createElement('a')
    link.href = processedImage || originalImage || ''
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!originalImage) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
        <h2 className="text-lg font-semibold mb-4">Preview</h2>
        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Upload an image to see preview</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-6">
      {/* Preview Content */}
      <div className="relative bg-gray-100 p-4">
        <div className={`mx-auto transition-all duration-300 ${
          isMobilePreview ? selectedLayout.width : 'max-w-full'
        }`}>
          <div className={`relative ${selectedLayout.aspectRatio} rounded-lg overflow-hidden bg-white shadow-md`}>
            {/* Image with Effect */}
            <img
              src={processedImage || originalImage}
              alt="Preview"
              className="w-full h-full object-cover"
              style={{ filter: selectedEffect.filter }}
            />
            
            {/* Caption Overlay */}
            {caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="space-y-2">
                  {brandName && (
                    <p className="text-white font-semibold">
                      @{brandName.toLowerCase().replace(/\s+/g, '_')}
                    </p>
                  )}
                  <p className="text-white text-sm">
                    {caption}
                  </p>
                </div>
              </div>
            )}

            {/* Platform Watermark */}
            <div className="absolute top-4 right-4 text-white">
              {selectedLayout.platform === 'instagram' && <InstagramIcon className="w-6 h-6" />}
              {selectedLayout.platform === 'facebook' && <FacebookIcon className="w-6 h-6" />}
              {selectedLayout.platform === 'whatsapp' && <WhatsappIcon className="w-6 h-6" />}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Controls */}
      <div className="p-4 border-t space-y-4">
        <h2 className="text-lg font-semibold">Options</h2>
        
        {/* Brand Name Input - Moved to top and made required */}
        <div className="space-y-2">
          <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
            Brand Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="brandName"
            value={brandName}
            onChange={(e) => {
              setBrandName(e.target.value)
              setBrandNameError('')
            }}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500
              ${brandNameError ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your brand name"
            required
          />
          {brandNameError && (
            <p className="text-red-500 text-sm">{brandNameError}</p>
          )}
        </div>

        {/* View Toggle - Made more visible */}
        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-sm font-medium text-gray-700">Preview Mode</span>
              <p className="text-xs text-gray-500">Switch between desktop and mobile view</p>
            </div>
            <button
              onClick={() => setIsMobilePreview(!isMobilePreview)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                ${isMobilePreview ? 'bg-purple-600' : 'bg-gray-200'}`}
            >
              <span className="sr-only">Toggle mobile preview</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out
                  ${isMobilePreview ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
        </div>

        {/* Layout Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Layout
          </label>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {PREVIEW_LAYOUTS.map((layout) => (
              <button
                key={layout.id}
                onClick={() => setSelectedLayout(layout)}
                className={`flex-none px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${selectedLayout.id === layout.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {layout.name}
              </button>
            ))}
          </div>
        </div>

        {/* Effects Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Effects
          </label>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {EFFECTS.map((effect) => (
              <button
                key={effect.id}
                onClick={() => setSelectedEffect(effect)}
                className={`flex-none px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                  ${selectedEffect.id === effect.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {effect.name}
              </button>
            ))}
          </div>
        </div>

        {/* Export Button */}
        <button
          onClick={handleDownload}
          className="w-full mt-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!brandName.trim()}
        >
          {brandName.trim() ? 'Download Image' : 'Enter Brand Name to Download'}
        </button>
      </div>
    </div>
  )
}