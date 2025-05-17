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
    console.log('forceShow:', forceShow)
    console.log('userAgent:', navigator.userAgent)
    
    if (!forceShow) {
      const userAgent = navigator.userAgent
      const isTikTok = userAgent.includes('TikTok')
      console.log('isTikTok:', isTikTok)
      setIsTikTokWebView(isTikTok)
    } else {
      console.log('forceShow is true, setting isTikTokWebView to true')
      setIsTikTokWebView(true)
    }
  }, [forceShow])

  console.log('Current isTikTokWebView state:', isTikTokWebView)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  // Show email with copy icon only in TikTok WebView
  if (isTikTokWebView) {
    console.log('Rendering TikTok WebView version')
    return (
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl">{email}</span>
          <button
            onClick={copyEmail}
            className="text-white hover:text-gray-300 transition-colors"
            title="Copy email address"
          >
            {copySuccess ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    )
  }

  console.log('Rendering regular button version')
  return <ClientSideButton href={`mailto:${email}`} large />
} 