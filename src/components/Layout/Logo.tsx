export default function Logo() {
  return (
    <div className="flex items-center">
      <svg width="32" height="32" viewBox="0 0 32 32" className="text-black">
        <rect width="32" height="32" rx="6" className="fill-current"/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-white font-bold text-xl">
          L
        </text>
      </svg>
      <span className="ml-2 text-xl font-bold">Admaker</span>
    </div>
  )
} 