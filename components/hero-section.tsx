import Image from "next/image"
import styles from "../components/module.css/hero-section.module.css"

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <Image src="/hero-logo.svg" alt="PUMPMONEY MERCH" width={900} height={300} priority />
      </div>
    </div>
  )
}

