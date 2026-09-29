import { Link } from 'react-router-dom'

const thumbnailColors = {
  purple: 'bg-purple-100',
  blue: 'bg-blue-100',
  green: 'bg-green-100',
  orange: 'bg-orange-100',
}

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
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-3">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-2xl ${thumbnailColors[color]}`}
      >
        {emoji}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">
          {date} &bull; {time}
        </p>
        <p className="text-sm text-gray-500">📍 {location}</p>
        <p className="mt-1 text-xs text-gray-400">
          {tasksRemaining} tasks remaining
          {typeof guests === 'number' ? ` \u2022 ${guests} guests` : ''}
        </p>
      </div>

      <Link
        to={`/dashboard/events/${id}`}
        className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        View →
      </Link>
    </div>
  )
}

export default EventCard
