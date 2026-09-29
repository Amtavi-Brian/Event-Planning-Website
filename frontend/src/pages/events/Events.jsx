import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import EventGridCard from '../../components/events/EventGridCard'

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Events</h1>
        <Link
          to="/dashboard/events/new"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          + Create Event
        </Link>
      </div>

      <div className="relative max-w-md mb-6">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔍
        </span>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <EventGridCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 text-center py-12">
          No events match your search.
        </p>
      )}
    </div>
  )
}

export default Events
