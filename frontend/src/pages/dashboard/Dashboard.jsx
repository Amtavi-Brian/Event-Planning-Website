import { Link } from 'react-router-dom'
import EventCard from '../../components/events/EventCard'

const stats = [
  { label: 'Total Events', value: 5, icon: '📅', color: 'bg-purple-100 text-purple-700' },
  { label: 'Pending Tasks', value: 12, icon: '✅', color: 'bg-green-100 text-green-700' },
  { label: 'Total Guests', value: 3, icon: '👥', color: 'bg-blue-100 text-blue-700' },
  { label: 'This Week', value: 2, icon: '🗓️', color: 'bg-orange-100 text-orange-700' },
]

const upcomingEvents = [
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
]

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">
        Welcome back, Brian 👋
      </h1>
      <p className="text-gray-500 mt-1">
        Here&apos;s what&apos;s happening with your events
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <span
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-lg ${stat.color}`}
            >
              {stat.icon}
            </span>
            <p className="mt-3 text-2xl font-bold text-gray-900">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Events
          </h2>
          <Link
            to="/dashboard/events"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
