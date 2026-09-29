const statusStyles = {
  Completed: 'bg-green-100 text-green-700',
  Pending: 'bg-orange-100 text-orange-700',
  Going: 'bg-green-100 text-green-700',
  'Not Going': 'bg-red-100 text-red-700',
}

function EventStatus({ status }) {
  const classes = statusStyles[status] || 'bg-gray-100 text-gray-600'

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${classes}`}
    >
      {status}
    </span>
  )
}

export default EventStatus
