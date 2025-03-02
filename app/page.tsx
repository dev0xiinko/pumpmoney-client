import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MarqueeText from "@/components/marquee-text"
import ProductSection from "@/components/product-section"
import ContactSection from "@/components/contact-section"
import styles from "./page.module.css"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <MarqueeText />
      <ProductSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

