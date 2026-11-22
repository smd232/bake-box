import Avatar from './Avatar'
import Rating from './Rating'

function ReviewHira() {
  return (
    <div className="card review">
      <Avatar />
      <div>
        <p className="reviewer">
          Hira M. <Rating />
        </p>
        <p className="desc">The nankhatai tasted just like my grandmother's.</p>
      </div>
    </div>
  )
}

export default ReviewHira