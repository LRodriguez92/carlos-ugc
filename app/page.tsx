import Image from "next/image"
import { IPhoneVideoPlayer } from "@/components/iphone-video-player"
import ClientSideButton from "@/components/client-side-button"

const dummyVideos = {
  audio: "https://example.com/audio-video.mp4",
  plaidAi: "https://example.com/plaid-ai-video.mp4",
  quantis: "https://example.com/quantis-video.mp4",
  poitech: "https://example.com/poitech-video.mp4",
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-10 sm:pt-20 pb-16 sm:pb-32">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC04675-2-no-bg.png-nUPaybjtA2W3fsDN7VDQsYF3C6YdvW.jpeg"
              alt="Carlos Vessup"
              width={500}
              height={750}
              className="mx-auto object-cover w-full h-[400px] sm:h-auto"
              priority
            />
          </div>
          <div className="space-y-2 sm:space-y-4 md:space-y-6 text-center mt-[55px] sm:mt-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mt-4 sm:mt-28 whitespace-nowrap">
              CARLOS VESSUP
            </h1>
            <p
              className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[55px] font-bold tracking-[-1px] text-black text-outline-white whitespace-nowrap"
              style={{ marginTop: "-24px", marginBottom: "20px" }}
            >
              INTRODUCTION
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-[22px] font-light uppercase tracking-wider">
              UGC CREATOR & CONTENT PARTNER
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-[22px] uppercase tracking-[-1px] text-white font-bold">
              HELPING BRANDS INCREASE SALES THROUGH
              <br className="hidden sm:inline" />
              PROFESSIONAL RELATABLE CONTENT & PARTNERSHIP
            </p>
            <div className="flex justify-center">
              <ClientSideButton href="mailto:carlos@vessupvisuals.com" />
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-[22px] leading-relaxed w-full">
              As a professional content creator, I specialize in capturing high-quality, relatable content for brands
              looking to increase their sales and engagement through UGC, videography and photography. I produce
              authentic, engaging media that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">EXAMPLE</h2>
        <p className="text-[45px] font-bold tracking-[-1px] -mt-6 text-black text-outline-white mb-16">VIDEOS</p>
        <div className="grid grid-cols-2 custom930:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          <div>
            <IPhoneVideoPlayer videoUrl={dummyVideos.audio} label="AUDIIO" />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={dummyVideos.plaidAi} label="PLAID AI" />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={dummyVideos.quantis} label="QUANTIS" />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={dummyVideos.poitech} label="PGYTECH" />
          </div>
        </div>
      </section>

      {/* Examples Keeper AI Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">EXAMPLES</h2>
        <p className="text-[45px] font-bold tracking-[-1px] -mt-6 text-black text-outline-white mb-16">KEEPER AI</p>
        <div className="grid grid-cols-2 custom930:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <IPhoneVideoPlayer videoUrl={dummyVideos.audio} />
            </div>
          ))}
        </div>
      </section>

      {/* Examples Suction Cup Content Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">EXAMPLES</h2>
        <p className="text-[45px] font-bold tracking-[-1px] -mt-6 text-black text-outline-white mb-16">
          SUCTION CUP CONTENT
        </p>
        <div className="grid grid-cols-2 custom930:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <IPhoneVideoPlayer videoUrl={dummyVideos.audio} />
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo1.jpg-dYALterLGugWdCITc3vfUukWRV91D5.jpeg"
            alt="Audiio"
            width={120}
            height={120}
            className="opacity-90"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo2.jpg-9Ew3xdufLUuei4T5qtuqWBJ3F44Mrr.jpeg"
            alt="Ulanzi Video Accessories"
            width={300}
            height={80}
            className="opacity-90"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo3-cropped.jpg-5RtELkdcXL0r8ljbdBnU7jeX7EzqgV.jpeg"
            alt="PGYTECH"
            width={300}
            height={50}
            className="opacity-90"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo4-cropped.jpg-cUCYhUj4fYZShEgLTcCD057QigeDIo.jpeg"
            alt="Keeper"
            width={300}
            height={60}
            className="opacity-90"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 flex flex-col items-center text-center">
            <h2 className="font-bold tracking-tighter">
              <span className="text-responsive-large block">LETS WORK TOGETHER</span>
              <span className="text-responsive-medium font-bold tracking-[-1px] text-black text-outline-white block text-center -mt-2 sm:-mt-4 md:-mt-6">
                GET IN TOUCH
              </span>
            </h2>
            <p className="text-xl">CARLOS@VESSUPVISUALS.COM</p>
            <div className="flex gap-8">
              <ClientSideButton href="#" icon="Instagram" />
              <ClientSideButton href="#" icon="TikTok" />
              <ClientSideButton href="#" icon="Twitter" />
            </div>
            <ClientSideButton href="mailto:carlos@vessupvisuals.com" large />
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC04618.png-i8WxMkQH6zt7VIm30WyBaUjcddA6fi.jpeg"
              alt="Carlos Vessup Portrait"
              width={500}
              height={750}
              className="mx-auto"
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}

