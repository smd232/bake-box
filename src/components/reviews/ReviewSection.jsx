import ReviewCard from './ReviewCard'

function ReviewSection() {
  return (
    <section id="reviews">
      <h2 className="section-title">What students say</h2>
      <div className="row">
        <ReviewCard name="Sara A." comment="Best brownies on campus. I ordered twice in one week!" />
        <ReviewCard name="Hira M." comment="The nankhatai tasted just like my grandmother's." />
      </div>
    </section>
  )
}

export default ReviewSection