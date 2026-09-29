import '../../styles/events/EventStatus.css'

const statusModifiers = {
  Completed: 'status-badge--completed',
  Pending: 'status-badge--pending',
  Going: 'status-badge--going',
  'Not Going': 'status-badge--not-going',
}

function EventStatus({ status }) {
  const modifier = statusModifiers[status] || 'status-badge--default'

  return <span className={`status-badge ${modifier}`}>{status}</span>
}

export default EventStatus
