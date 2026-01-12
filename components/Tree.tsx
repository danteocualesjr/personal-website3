interface TreeProps {
  width?: number
  height?: number
  className?: string
}

export default function Tree({ width = 200, height = 300, className = '' }: TreeProps) {
  return (
    <div className={className} style={{ width, height }}>
      <img
        src="/tree.svg"
        alt="Tree illustration"
        className="w-full h-full object-contain"
      />
    </div>
  )
}
