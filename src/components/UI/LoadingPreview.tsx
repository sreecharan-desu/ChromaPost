export default function LoadingPreview() {
  return (
    <div className="absolute inset-0 bg-gray-900/10 backdrop-blur-sm flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          {/* Outer circle */}
          <div className="absolute inset-0 border-4 border-purple-200 rounded-full"></div>
          {/* Spinning circle */}
          <div className="absolute inset-0 border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-sm font-medium text-gray-700">Processing image...</p>
        <p className="text-xs text-gray-500">This may take a few seconds</p>
      </div>
    </div>
  )
} 