"use client"

import Link from "next/link"
import { Instagram, TwitterIcon, Twitter } from "lucide-react"

interface ClientSideButtonProps {
  href: string
  icon?: "Instagram" | "TikTok" | "Twitter"
  large?: boolean
}

export default function ClientSideButton({ href, icon, large }: ClientSideButtonProps) {
  if (icon) {
    const IconComponent = icon === "Instagram" ? Instagram : icon === "TikTok" ? TwitterIcon : Twitter
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

