import { Link } from 'react-router-dom'
import '../../styles/events/EventGridCard.css'

function EventGridCard({ event }) {
  const {
    id,
    title,
    date,
    time,
    location,
    tasksRemaining,
    guests,
    emoji = '🎉',
    color = 'purple',
  } = event

  return (
    <div className="event-grid-card">
      <div
        className={`event-grid-card__thumbnail event-grid-card__thumbnail--${color}`}
      >
        {emoji}
      </div>

      <div className="event-grid-card__body">
        <h3 className="event-grid-card__title">{title}</h3>
        <p className="event-grid-card__meta">
          {date} &bull; {time}
        </p>
        <p className="event-grid-card__meta">📍 {location}</p>

        <div className="event-grid-card__stats">
          <span>✅ {tasksRemaining} tasks</span>
          <span>👥 {guests} guests</span>
        </div>

        <Link
          to={`/dashboard/events/${id}`}
          className="btn btn-primary event-grid-card__view"
        >
          View →
        </Link>
      </div>
    </div>
  )
}

export default EventGridCard
