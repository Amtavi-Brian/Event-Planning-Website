import '../../styles/common/ComingSoon.css'

function ComingSoon({ title = 'This page' }) {
  return (
    <div className="coming-soon">
      <span className="coming-soon__icon">🚧</span>
      <h2 className="coming-soon__title">{title} is coming soon</h2>
      <p className="coming-soon__subtitle">
        We&apos;re building this next, step by step.
      </p>
    </div>
  )
}

export default ComingSoon
