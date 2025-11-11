import { MoreVertical } from "lucide-react"

interface Video {
  id: number
  title: string
  creator: string
  timeAgo: string
  requestedBy: string
  duration: string
  thumbnail: string
  isRequested: boolean
}

interface VideoCardProps {
  video: Video
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Thumbnail Container */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden h-40">
        <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs font-bold px-2 py-1 rounded">
          {video.duration}
        </div>

        {/* Requested Badge */}
        {video.isRequested && (
          <div className="absolute top-2 right-2 bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            📌 Requested
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-3">
        <h3 className="font-semibold text-sm text-black line-clamp-2 mb-2">{video.title}</h3>

        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className="text-xs text-amber-600 font-semibold">by {video.creator}</p>
            <p className="text-xs text-gray-500">
              {video.timeAgo} • Requested by <span className="font-medium">{video.requestedBy}</span>
            </p>
          </div>
          <button className="p-1 hover:bg-gray-100 rounded-lg flex-shrink-0">
            <MoreVertical size={16} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}
