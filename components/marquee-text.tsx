"use client"

import styles from "../components/module.css/marquee-text.module.css"

export default function MarqueeText() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <div className={styles.marqueeItems}>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
          <span className={styles.separator}>•</span>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
          <span className={styles.separator}>•</span>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
          <span className={styles.separator}>•</span>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
        </div>
        <div className={styles.marqueeItems}>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
          <span className={styles.separator}>•</span>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
          <span className={styles.separator}>•</span>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
          <span className={styles.separator}>•</span>
          <span>YOUR #1 CRYPTO MERCH HOUSE</span>
        </div>
      </div>
    </div>
  )
}
