import axios from 'axios'
import { Background } from '../types'

const REMOVEBG_API_KEY = import.meta.env.VITE_REMOVEBG_API_KEY
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY

export const imageService = {
  async removeBackground(imageUrl: string): Promise<string> {
    try {
      // Convert URL to Blob
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      
      const formData = new FormData()
      formData.append('image_file', blob)
      formData.append('size', 'auto')

      const removeBgResponse = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
        headers: {
          'X-Api-Key': REMOVEBG_API_KEY,
        },
        responseType: 'blob'
      })

      return URL.createObjectURL(removeBgResponse.data)
    } catch (error) {
      console.error('Error removing background:', error)
      throw new Error('Failed to remove background')
    }
  },

  async combineWithBackground(foregroundUrl: string, backgroundUrl: string): Promise<string> {
    try {
      // Create a promise that resolves when both images are loaded
      const loadImage = (url: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.crossOrigin = 'anonymous'  // Important for CORS
          img.onload = () => resolve(img)
          img.onerror = () => reject(new Error(`Failed to load image: ${url}`))
          img.src = url
        })
      }

      // Load both images
      const [foreground, background] = await Promise.all([
        loadImage(foregroundUrl),
        loadImage(backgroundUrl)
      ])

      // Create canvas with background dimensions
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('Failed to get canvas context')

      // Set canvas size to background size
      canvas.width = background.width
      canvas.height = background.height

      // Draw background
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

      // Calculate dimensions for foreground image to maintain aspect ratio
      const scale = Math.min(
        canvas.width / foreground.width,
        canvas.height / foreground.height
      ) * 0.8  // Scale down slightly to leave some padding

      const newWidth = foreground.width * scale
      const newHeight = foreground.height * scale

      // Center the foreground image
      const x = (canvas.width - newWidth) / 2
      const y = (canvas.height - newHeight) / 2

      // Draw foreground
      ctx.drawImage(foreground, x, y, newWidth, newHeight)

      // Convert to data URL
      return canvas.toDataURL('image/png')
    } catch (error) {
      console.error('Error combining images:', error)
      throw new Error('Failed to combine images')
    }
  }
}

export const backgroundService = {
  async getRandomBackgrounds(query: string = 'background texture'): Promise<Background[]> {
    try {
      // Try Unsplash first
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          headers: {
            'Authorization': `Client-ID ${UNSPLASH_API_KEY}`
          },
          params: {
            query,
            count: 12,
            orientation: 'squarish'
          }
        })

        return response.data.map((photo: any) => ({
          id: photo.id,
          url: photo.urls.regular,
          thumb: photo.urls.thumb,
          credit: `Photo by ${photo.user.name} on Unsplash`
        }))
      } catch (unsplashError: any) {
        // Check if it's a rate limit error (429) or other Unsplash-specific error
        if (unsplashError.response?.status === 429 || unsplashError.response?.status === 403) {
          console.log('Unsplash rate limit reached, falling back to Pixabay')
          
          // Fall back to Pixabay
          const pixabayResponse = await axios.get(`https://pixabay.com/api/`, {
            params: {
              key: PIXABAY_API_KEY,
              q: query,
              per_page: 12,
              image_type: 'photo',
              orientation: 'horizontal',
              safesearch: true,
              order: 'popular'
            }
          })

          return pixabayResponse.data.hits.map((photo: any) => ({
            id: photo.id.toString(),
            url: photo.largeImageURL,
            thumb: photo.previewURL,
            credit: `Photo by ${photo.user} on Pixabay`
          }))
        } else {
          // If it's not a rate limit error, throw it
          throw unsplashError
        }
      }
    } catch (error) {
      console.error('Error fetching backgrounds:', error)
      throw new Error('Failed to fetch backgrounds')
    }
  }
}

export const captionService = {
  async generateCaptions(brandContext: string): Promise<string[]> {
    try {
      // Here you'll add the Gemini API integration
      // For now, returning mock data based on brand context
      // const prompt = `Generate 4 engaging social media captions for ${brandContext}. 
      //   Include emojis and make them attention-grabbing.`
      
      // Mock response for now
      return [
        `✨ ${brandContext} - Leading the way in innovation`,
        `🚀 Experience the difference with ${brandContext}`,
        `💫 ${brandContext} - Where quality meets excellence`,
        `🎯 Choose ${brandContext} for unmatched quality`
      ]
    } catch (error) {
      console.error('Error generating captions:', error)
      throw new Error('Failed to generate captions')
    }
  }
}

// ... rest of the previous api.ts code ... 