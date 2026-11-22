import ReviewSara from './ReviewSara'
import ReviewHira from './ReviewHira'

function ReviewSection() {
  return (
    <section id="reviews">
      <h2 className="section-title">What students say</h2>
      <div className="row">
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  )
}

export default ReviewSection