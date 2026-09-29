import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import EventGridCard from '../../components/events/EventGridCard'
import '../../styles/events/Events.css'

const allEvents = [
  {
    id: 1,
    title: 'Birthday Party',
    date: 'Oct 12, 2026',
    time: '2:00 PM',
    location: 'Nairobi',
    tasksRemaining: 8,
    guests: 25,
    emoji: '🎈',
    color: 'purple',
  },
  {
    id: 2,
    title: 'Tech Meetup',
    date: 'Oct 20, 2026',
    time: '10:00 AM',
    location: 'Campus',
    tasksRemaining: 3,
    guests: 42,
    emoji: '💻',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Team Building',
    date: 'Nov 5, 2026',
    time: '9:00 AM',
    location: 'Karen',
    tasksRemaining: 5,
    guests: 18,
    emoji: '🤝',
    color: 'green',
  },
  {
    id: 4,
    title: 'Workshop',
    date: 'Nov 15, 2026',
    time: '1:00 PM',
    location: 'Nairobi',
    tasksRemaining: 4,
    guests: 12,
    emoji: '🛠️',
    color: 'orange',
  },
]

function Events() {
  const [search, setSearch] = useState('')

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return allEvents
    return allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
    )
  }, [search])

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">My Events</h1>
        <Link to="/dashboard/events/new" className="btn btn-primary">
          + Create Event
        </Link>
      </div>

      <div className="search-field search-field--spaced">
        <span className="search-field__icon">🔍</span>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events..."
          className="search-field__input"
        />
      </div>

      {filteredEvents.length > 0 ? (
        <div className="events-page__grid">
          {filteredEvents.map((event) => (
            <EventGridCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No events match your search.</p>
      )}
    </div>
  )
}

export default Events
