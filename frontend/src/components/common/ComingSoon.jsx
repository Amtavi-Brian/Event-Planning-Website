function ComingSoon({ title = 'This page' }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <span className="text-4xl mb-4">🚧</span>
      <h2 className="text-lg font-semibold text-gray-900">
        {title} is coming soon
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        We&apos;re building this next, step by step.
      </p>
    </div>
  )
}

export default ComingSoon
