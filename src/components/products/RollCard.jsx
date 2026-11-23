import Badge from './Badge'

function RollCard() {
  const price = 500

  return (
    <div className="card">
      <Badge text="Bestseller" />
      <h3>🥐 Cinnamon Rolls</h3>
      <p className="desc">Box of 4, with cream cheese</p>
      <p className="price">Rs {price}</p>
    </div>
  )
}

export default RollCard