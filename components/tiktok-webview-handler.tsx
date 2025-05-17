'use client'

import { useState, useEffect } from 'react'
import ClientSideButton from "@/components/client-side-button"

interface TikTokWebViewHandlerProps {
  email: string
  forceShow?: boolean
}

export function TikTokWebViewHandler({ email, forceShow = false }: TikTokWebViewHandlerProps) {
  const [isTikTokWebView, setIsTikTokWebView] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    setIsTikTokWebView(
      forceShow ||
      userAgent.includes('tiktok') ||
      userAgent.includes('musical_ly') ||
      userAgent.includes('bytedance')
    )
  }, [forceShow])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  if (isTikTokWebView) {
    return (
      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center gap-2 bg-gradient-to-r from-black to-gray-400 rounded-lg px-5 py-3 shadow-lg">
          <span className="text-lg font-bold tracking-wide text-white select-all">{email}</span>
          <button
            onClick={copyEmail}
            className={`ml-2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-all duration-150 ${
              copySuccess ? 'scale-110 bg-green-500' : ''
            }`}
            title="Copy email address"
          >
            {copySuccess ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
              </svg>
            )}
          </button>
        </div>
        <span className="mt-2 text-sm text-white/80">Tap to copy email address</span>
      </div>
    )
  }

  // Show regular button in all other cases
  return <ClientSideButton href={`mailto:${email}`} large />
} 