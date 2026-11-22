import Avatar from './Avatar'
import Rating from './Rating'

function ReviewSara() {
  return (
    <div className="card review">
      <Avatar />
      <div>
        <p className="reviewer">
          Sara A. <Rating />
        </p>
        <p className="desc">Best brownies on campus. I ordered twice in one week!</p>
      </div>
    </div>
  )
}

export default ReviewSara