import { ChromapostIcon } from '../UI/ChromapostIcon'

export default function Header() {
  return (
    <header className="bg-purple-600">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ChromapostIcon className="w-8 h-8 text-white" />
          <h1 className="text-white text-2xl font-bold">Chromapost</h1>
        </div>
        {/* Add any additional navigation items here */}
      </div>
    </header>
  )
} 
