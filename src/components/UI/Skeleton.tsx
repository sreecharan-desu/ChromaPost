interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
  )
}

export function SkeletonText({ width = '100%' }: { width?: string }) {
  return <div className="skeleton-text" style={{ width }}></div>
}

export function SkeletonImage() {
  return <div className="skeleton-image"></div>
} 