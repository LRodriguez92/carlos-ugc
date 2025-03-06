"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Play } from "lucide-react"

interface IPhoneVideoPlayerProps {
  videoUrl: string
  label?: string
  lazyLoad?: boolean
}

export function IPhoneVideoPlayer({ videoUrl, label }: IPhoneVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = (e: React.MouseEvent<HTMLDivElement | HTMLVideoElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative mx-auto w-[180px] sm:w-[220px]">
        <div className="relative w-full aspect-[220/430] bg-black rounded-[38px] shadow-xl overflow-hidden p-[7px] sm:p-[9px] outline outline-1 outline-[#252120]">
          <div className="absolute top-[7px] sm:top-[9px] left-1/2 transform -translate-x-1/2 w-[51%] h-[4.9%] bg-black rounded-b-[11px] z-10 flex items-center justify-between px-3">
            <div className="w-[5%]"></div>
            <div className="w-[27%] h-[14%] bg-[#2A2625] rounded-full"></div>
            <div className="w-[5%] h-[29%] bg-[#2A2625] rounded-full"></div>
          </div>

          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover rounded-[30px]"
              preload="auto"
              onClickCapture={handlePlayPause}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={showControls}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              playsInline
              poster={`${videoUrl}#t=0.1`}
              controlsList="nodownload nofullscreen noremoteplayback"
            />
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClickCapture={handlePlayPause}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {label && <span className="text-xs font-medium tracking-wider uppercase">{label}</span>}
    </div>
  )
}

