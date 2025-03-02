import Navbar from "@/components/navbar"
import MarqueeText from "@/components/marquee-text"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-8 sm:py-12 md:py-16 px-4">
        <div className="text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-8">CONTACT US</h1>
          <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
            Have questions? Reach out to us at contact@pumpmoney-merch.com
          </p>
        </div>
      </div>
      <MarqueeText />
    </main>
  )
}

