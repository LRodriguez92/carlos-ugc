import Image from "next/image"
import { IPhoneVideoPlayer } from "@/components/iphone-video-player"
import ClientSideButton from "@/components/client-side-button"
import { TikTokWebViewHandler } from "@/components/tiktok-webview-handler"

const videos = {
  audiio: "https://ugcvessup-cf4fe.web.app/videos/audiio.mp4",
  car1: "https://ugcvessup-cf4fe.web.app/videos/car1.mov",
  car2: "https://ugcvessup-cf4fe.web.app/videos/car2.mov",
  car3: "https://ugcvessup-cf4fe.web.app/videos/car3.mov",
  car4: "https://ugcvessup-cf4fe.web.app/videos/car4.mov",
  keeper1: "https://ugcvessup-cf4fe.web.app/videos/keeper1.mp4",
  keeper2: "https://ugcvessup-cf4fe.web.app/videos/keeper2.mp4",
  keeper3: "https://ugcvessup-cf4fe.web.app/videos/keeper3.mp4",
  keeper4: "https://ugcvessup-cf4fe.web.app/videos/keeper4.mp4",
  pgytech: "https://ugcvessup-cf4fe.web.app/videos/phytech.mov",
  plaudAi: "https://ugcvessup-cf4fe.web.app/videos/plaud.mov",
  quantis: "https://ugcvessup-cf4fe.web.app/videos/quantis.mov"
}

const thumbnails = {
  audiio: "/images/thumbnails/audiio.jpg",
  car1: "/images/thumbnails/car1.jpg",
  car2: "/images/thumbnails/car2.jpg",
  car3: "/images/thumbnails/car3.jpg",
  car4: "/images/thumbnails/car4.jpg",
  keeper1: "/images/thumbnails/keeper1.jpg",
  keeper2: "/images/thumbnails/keeper2.jpg",
  keeper3: "/images/thumbnails/keeper3.jpg",
  keeper4: "/images/thumbnails/keeper4.jpg",
  pgytech: "/images/thumbnails/phytech.jpg",
  plaudAi: "/images/thumbnails/plaud.jpg",
  quantis: "/images/thumbnails/quantis.jpg"
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-10 sm:pt-20 pb-16 sm:pb-32">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">
          <div className="relative">
            <Image
              src="/images/hero.png"
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
            <TikTokWebViewHandler email="carlos@vessupvisuals.com"/>
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
            <IPhoneVideoPlayer videoUrl={videos.audiio} thumbnailUrl={thumbnails.audiio} label="AUDIIO" lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.plaudAi} thumbnailUrl={thumbnails.plaudAi} label="PLAUD AI" lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.quantis} thumbnailUrl={thumbnails.quantis} label="QUANTIS" lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.pgytech} thumbnailUrl={thumbnails.pgytech} label="PGYTECH" lazyLoad />
          </div>
        </div>
      </section>

      {/* Examples Keeper AI Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">EXAMPLES</h2>
        <p className="text-[45px] font-bold tracking-[-1px] -mt-6 text-black text-outline-white mb-16">KEEPER AI</p>
        <div className="grid grid-cols-2 custom930:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          <div>
            <IPhoneVideoPlayer videoUrl={videos.keeper1} thumbnailUrl={thumbnails.keeper1} lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.keeper2} thumbnailUrl={thumbnails.keeper2} lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.keeper3} thumbnailUrl={thumbnails.keeper3} lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.keeper4} thumbnailUrl={thumbnails.keeper4} lazyLoad />
          </div>
        </div>
      </section>

      {/* Examples Suction Cup Content Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">EXAMPLES</h2>
        <p className="text-[45px] font-bold tracking-[-1px] -mt-6 text-black text-outline-white mb-16">
          SUCTION CUP CONTENT
        </p>
        <div className="grid grid-cols-2 custom930:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          <div>
            <IPhoneVideoPlayer videoUrl={videos.car1} thumbnailUrl={thumbnails.car1} lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.car2} thumbnailUrl={thumbnails.car2} lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.car3} thumbnailUrl={thumbnails.car3} lazyLoad />
          </div>
          <div>
            <IPhoneVideoPlayer videoUrl={videos.car4} thumbnailUrl={thumbnails.car4} lazyLoad />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center">
          <Image
            src="/images/logo1.jpg"
            alt="Audiio"
            width={120}
            height={120}
            className="opacity-90"
          />
          <Image
            src="/images/logo2.jpg"
            alt="Ulanzi Video Accessories"
            width={300}
            height={80}
            className="opacity-90"
          />
          <Image
            src="/images/logo3.jpg"
            alt="PGYTECH"
            width={300}
            height={50}
            className="opacity-90"
          />
          <Image
            src="/images/logo4.jpg"
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
              <ClientSideButton href="https://www.instagram.com/carlosalfredovessup/" icon="Instagram" />
              <ClientSideButton href="https://www.tiktok.com/@ugcvessup3" icon="TikTok" />
              <ClientSideButton href="https://x.com/ugcvessup" icon="Twitter" />
            </div>
            <TikTokWebViewHandler email="carlos@vessupvisuals.com"/>
          </div>
          <div className="relative">
            <Image
              src="/images/footer.png"
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

