import Badge from './Badge'

function ProductCard(props) {
  return (
    <div className="card">
      <Badge text={props.badge} />
      <img className="card-img" src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="desc">{props.description}</p>
      <p className="price">Rs {props.price}</p>
    </div>
  )
}

export default ProductCard