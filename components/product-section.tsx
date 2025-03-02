import Image from "next/image"
import styles from "../components/module.css/product-section.module.css"

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
    description: "Start your day right with our sleek Bitcoin-inspired coffee mug.",
    price: 19,
    image: "/tshirt.png",
  },
  {
    id: 3,
    name: "WAGMI hat",
    description: "Carry your tech in style with our blockchain-patterned backpack.",
    price: 14,
    image: "/wagmi.png",
  },
]

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>{product.price.toFixed(2)} USDC</p>
              <button className={styles.buyButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

