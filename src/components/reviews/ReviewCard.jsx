import Avatar from './Avatar'
import Rating from './Rating'

function ReviewCard(props) {
  return (
    <div className="card review">
      <Avatar />
      <div>
        <p className="reviewer">
          {props.name} <Rating />
        </p>
        <p className="desc">{props.comment}</p>
      </div>
    </div>
  )
}

export default ReviewCard