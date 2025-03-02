import { Instagram, Twitter, Facebook } from "lucide-react"
import styles from "../components/module.css/contact-section.module.css"

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Connect With Us</h2>
        <div className={styles.socialLinks}>
          <a
            href="https://instagram.com/pumpmoney_"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Instagram size={32} />
            <span>Instagram</span>
          </a>
          <a
            href="https://twitter.com/pumpmoney_"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Twitter size={32} />
            <span>Twitter</span>
          </a>
          <a
            href="https://facebook.com/pumpmoney"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Facebook size={32} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  )
}

