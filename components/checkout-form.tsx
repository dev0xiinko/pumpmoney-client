"use client"

import type React from "react"

import { useState } from "react"
import styles from "../components/module.css/checkout-form.module.css"

type CheckoutFormProps = {
  productName: string
  productPrice: number
  onClose: () => void
}

export default function CheckoutForm({ productName, productPrice, onClose }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    solanaWallet: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // For now, we'll just close the form
    onClose()
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.checkoutForm}>
        <h2>Checkout: {productName}</h2>
        <p>Price: ${productPrice.toFixed(2)}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="solanaWallet"
            placeholder="Solana Wallet Address"
            value={formData.solanaWallet}
            onChange={handleChange}
            required
          />
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>
              Complete Purchase
            </button>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

