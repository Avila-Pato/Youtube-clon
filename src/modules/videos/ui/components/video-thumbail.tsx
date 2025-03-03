import Image from 'next/image'
import React from 'react'

interface VideoThumbailProps {
    title: string 
    imageUrl?: string | null
    previewUrl?: string | null
}

const VideoThumbail = ({imageUrl, title, previewUrl}: VideoThumbailProps) => {
  return (
    <div className='relative group'>
        {/* thumbail wrapper */}
        <div className='relative overflow-hidden rounded-xl aspect-video'>
            <Image
             src={imageUrl ?? "/placeholder.svg"}
              alt='Thumbail'
               fill 
               className='size-full object-cover group-hover:opacity-0 '
                />
                 <Image
             src={previewUrl ?? "/placeholder.svg"}
              alt='Thumbail'
               fill 
               className='size-full object-cover opacity-0 group-hover:opacity-100'
                />

            {/* Video dutayion box */}
            {/* Todo add video duration box */}
        </div>
    </div>
  )
}

export default VideoThumbail