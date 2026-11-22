import Badge from './Badge'

function BrownieCard() {
  const price = 450

  return (
    <div className="card">
      <Badge />
      <h3>🍫 Chocolate Brownies</h3>
      <p className="desc">Box of 6, fudgy and warm</p>
      <p className="price">Rs {price}</p>
    </div>
  )
}

export default BrownieCard