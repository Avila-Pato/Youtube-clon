import { formatDuration } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface VideoThumbailProps {
  title: string
  duration: number
  imageUrl?: string | null
  previewUrl?: string | null
}

const VideoThumbail = ({ imageUrl, title, previewUrl, duration }: VideoThumbailProps) => {
  return (
    <div className='relative group'>
      {/* thumbail wrapper */}
      <div className='relative overflow-hidden rounded-xl aspect-video'>
        <Image
          src={imageUrl ?? "/placeholder.svg"}
          alt={title}
          fill
          className='size-full object-cover group-hover:opacity-0 '
        />
        <Image
        unoptimized={!!previewUrl}
          src={previewUrl ?? "/placeholder.svg"}
          alt={title}
          fill
          className='size-full object-cover opacity-0 group-hover:opacity-100'
        />
      </div>

      {/* Video dutayion box */}
      <div className='absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-xs font-medium'>
        {formatDuration(duration)}
      </div>
      {/* Todo add video duration box */}
    </div>
  )
}

export default VideoThumbail