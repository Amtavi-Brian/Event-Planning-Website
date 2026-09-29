import { Link } from 'react-router-dom'
import EventStatus from '../events/EventStatus'

function GuestItem({ guest, onDelete }) {
  return (
    <tr className="border-b border-gray-100 last:border-b-0">
      <td className="py-3 pr-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
            {guest.name.charAt(0)}
          </span>
          <span className="text-sm font-medium text-gray-900">
            {guest.name}
          </span>
        </div>
      </td>
      <td className="py-3 pr-4 text-sm text-gray-500">{guest.email}</td>
      <td className="py-3 pr-4 text-sm text-gray-500">{guest.phone}</td>
      <td className="py-3 pr-4">
        <EventStatus status={guest.status} />
      </td>
      <td className="py-3 text-right">
        <div className="flex items-center justify-end gap-2">
          <Link
            to={`/dashboard/guests/${guest.id}/edit`}
            className="text-gray-400 hover:text-blue-600"
            aria-label={`Edit ${guest.name}`}
          >
            ✎
          </Link>
          <button
            type="button"
            onClick={() => onDelete?.(guest.id)}
            className="text-gray-400 hover:text-red-600"
            aria-label={`Delete ${guest.name}`}
          >
            🗑
          </button>
        </div>
      </td>
    </tr>
  )
}

export default GuestItem
