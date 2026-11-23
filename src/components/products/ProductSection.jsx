import ProductCard from './ProductCard'

function ProductSection() {
  return (
    <section id="shop">
      <h2 className="section-title">Fresh from the oven</h2>
      <div className="row">
        <ProductCard name="🍫 Chocolate Brownies" description="Box of 6, fudgy and warm" price={450} badge="Bestseller" image="/images/brownies.svg" />
        <ProductCard name="🍪 Nankhatai Box" description="Box of 12, cardamom flavour" price={350} badge="New" image="/images/nankhatai.svg" />
        <ProductCard name="🍰 Lemon Tart" description="Box of 6, tangy and light" price={600} badge="New" image="/images/lemon-tart.svg" />
        <ProductCard name="🥐 Cinnamon Rolls" description="Box of 4, with cream cheese" price={500} badge="Bestseller" image="/images/rolls.svg" />
      </div>
    </section>
  )
}

export default ProductSection