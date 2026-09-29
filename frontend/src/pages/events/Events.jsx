import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import EventGridCard from '../../components/events/EventGridCard'
import { mockEvents as allEvents } from './mockEvents'
import '../../styles/events/Events.css'

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
