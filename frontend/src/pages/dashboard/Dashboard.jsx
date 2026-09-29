import { Link } from 'react-router-dom'
import EventCard from '../../components/events/EventCard'
import '../../styles/dashboard/Dashboard.css'

const stats = [
  { label: 'Total Events', value: 5, icon: '📅', color: 'purple' },
  { label: 'Pending Tasks', value: 12, icon: '✅', color: 'green' },
  { label: 'Total Guests', value: 3, icon: '👥', color: 'blue' },
  { label: 'This Week', value: 2, icon: '🗓️', color: 'orange' },
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
      <h1 className="dashboard__greeting">Welcome back, Brian 👋</h1>
      <p className="dashboard__subtitle">
        Here&apos;s what&apos;s happening with your events
      </p>

      <div className="dashboard__stats">
        {stats.map((stat) => (
          <div key={stat.label} className="dashboard__stat-card">
            <span
              className={`dashboard__stat-icon dashboard__stat-icon--${stat.color}`}
            >
              {stat.icon}
            </span>
            <p className="dashboard__stat-value">{stat.value}</p>
            <p className="dashboard__stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="dashboard__section">
        <div className="dashboard__section-header">
          <h2 className="dashboard__section-title">Upcoming Events</h2>
          <Link to="/dashboard/events" className="btn-link">
            View all
          </Link>
        </div>

        <div className="dashboard__events-list">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
