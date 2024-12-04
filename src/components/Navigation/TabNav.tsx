interface TabNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <div className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-2 scrollbar-hide">
      <button 
        onClick={() => onTabChange('visuals')}
        className={`px-2 py-1 whitespace-nowrap text-sm sm:text-base ${
          activeTab === 'visuals' 
            ? 'text-black border-b-2 border-black' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Generate visuals
      </button>
      <button 
        onClick={() => onTabChange('caption')}
        className={`px-2 py-1 whitespace-nowrap text-sm sm:text-base ${
          activeTab === 'caption' 
            ? 'text-black border-b-2 border-black' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        Generate caption
      </button>
    </div>
  )
} 