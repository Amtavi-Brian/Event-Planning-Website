import { Link } from 'react-router-dom'
import '../../styles/events/EventCard.css'

function EventCard({ event }) {
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
    <div className="event-card">
      <div className={`event-card__thumbnail event-card__thumbnail--${color}`}>
        {emoji}
      </div>

      <div className="event-card__body">
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__meta">
          {date} &bull; {time}
        </p>
        <p className="event-card__meta">📍 {location}</p>
        <p className="event-card__footer">
          {tasksRemaining} tasks remaining
          {typeof guests === 'number' ? ` \u2022 ${guests} guests` : ''}
        </p>
      </div>

      <Link
        to={`/dashboard/events/${id}`}
        className="btn btn-primary event-card__view"
      >
        View →
      </Link>
    </div>
  )
}

export default EventCard
