"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import styles from "../components/module.css/navbar.module.css"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/nav-logo.svg" alt="PUMPMONEY MERCH" width={600} height={50} priority />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <Menu size={32} />
        </button>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/">HOME</Link>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/contact">CONTACT US</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
          <X size={32} />
        </button>

        <nav>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)}>PRODUCTS</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
        </nav>
      </div>
    </header>
  )
}
