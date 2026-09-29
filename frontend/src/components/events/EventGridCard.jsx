import { Link } from 'react-router-dom'

const thumbnailColors = {
  purple: 'bg-purple-100',
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  orange: 'bg-orange-100',
}

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
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden">
      <div
        className={`flex h-32 items-center justify-center text-5xl ${thumbnailColors[color]}`}
      >
        {emoji}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {date} &bull; {time}
        </p>
        <p className="text-sm text-gray-500">📍 {location}</p>

        <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
          <span>✅ {tasksRemaining} tasks</span>
          <span>👥 {guests} guests</span>
        </div>

        <Link
          to={`/dashboard/events/${id}`}
          className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          View →
        </Link>
      </div>
    </div>
  )
}

export default EventGridCard
