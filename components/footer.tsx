import styles from "../components/module.css/footer-section.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 PUMPMONEY MERCH. All rights reserved.</p>
        <nav className={styles.footerNav}>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
    </footer>
  )
}

