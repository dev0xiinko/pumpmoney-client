"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "../components/module.css/product-section.module.css"
import CheckoutForm from "./checkout-form"

type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: "PumpMoney Hoodie",
    description: "Stay cozy while HODLing with our premium crypto-themed hoodie.",
    price: 29,
    image: "/hoodie.png",
  },
  {
    id: 2,
    name: "PumpMoney T-shirt",
    description: "A stylish tee that lets everyone know you're all about that crypto life.",
    price: 19,
    image: "/tshirt.png",
  },
  {
    id: 3,
    name: "WAGMI Hat",
    description: "Cap off your look with this 'We're All Gonna Make It' crypto-inspired hat.",
    price: 14,
    image: "/wagmi.png",
  },
]

export default function ProductSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const openCheckout = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeCheckout = () => {
    setSelectedProduct(null)
  }

  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button className={styles.buyButton} onClick={() => openCheckout(product)}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <CheckoutForm
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
          onClose={closeCheckout}
        />
      )}
    </section>
  )
}
