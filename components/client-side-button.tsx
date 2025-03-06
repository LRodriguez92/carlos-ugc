"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

// Custom TikTok icon component
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

// Custom X (Twitter) icon component
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

interface ClientSideButtonProps {
  href: string
  icon?: "Instagram" | "TikTok" | "Twitter"
  large?: boolean
}

export default function ClientSideButton({ href, icon, large }: ClientSideButtonProps) {
  if (icon) {
    const IconComponent = icon === "Instagram" ? Instagram : icon === "TikTok" ? TikTokIcon : XIcon
    return (
      <Link href={href} className="opacity-75 hover:opacity-100">
        <IconComponent className="w-12 h-12" />
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={`inline-block rounded-[999px] uppercase bg-[#232325] relative group 
        py-[10px] px-[30px] ${large ? "my-4 text-lg" : "my-2 sm:my-4 text-xs sm:text-base"}`}
    >
      <span className="underline">Get in touch !</span>
      <span
        className={`absolute inset-y-0 left-0 ${
          large ? "w-8" : "w-4 sm:w-8"
        } bg-gradient-to-r from-black to-transparent`}
      ></span>
      <span
        className={`absolute inset-y-0 right-0 ${
          large ? "w-8" : "w-4 sm:w-8"
        } bg-gradient-to-l from-black to-transparent`}
      ></span>
    </a>
  )
}

