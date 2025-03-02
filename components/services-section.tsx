import styles from "../components/module.css/services-section.module.css"

export default function ServicesSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <p className={styles.description}>
          We turn your crypto or tech brand into merchandise. As a premier merch house, we offer physical products
          paired with exclusive NFTs.
        </p>
        <ul className={styles.servicesList}>
          <li>Custom Merchandise Design</li>
          <li>NFT Creation for Each Product</li>
          <li>Blockchain Integration</li>
          <li>Limited Edition Drops</li>
        </ul>
      </div>
    </section>
  )
}

