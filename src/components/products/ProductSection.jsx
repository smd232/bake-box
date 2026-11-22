import BrownieCard from './BrownieCard'
import NankhataiCard from './NankhataiCard'
import RollCard from './RollCard'

function ProductSection() {
  return (
    <section id="shop">
      <h2 className="section-title">Fresh from the oven</h2>
      <div className="row">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  )
}

export default ProductSection