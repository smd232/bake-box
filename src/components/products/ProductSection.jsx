import ProductCard from './ProductCard'

function ProductSection() {
  return (
    <section id="shop">
      <h2 className="section-title">Fresh from the oven</h2>
      <div className="row">
        <ProductCard name="🍫 Chocolate Brownies" description="Box of 6, fudgy and warm" price={450} badge="Bestseller" />
        <ProductCard name="🍪 Nankhatai Box" description="Box of 12, cardamom flavour" price={350} badge="New" />
        <ProductCard name="🥐 Cinnamon Rolls" description="Box of 4, with cream cheese" price={500} badge="Bestseller" />
      </div>
    </section>
  )
}

export default ProductSection