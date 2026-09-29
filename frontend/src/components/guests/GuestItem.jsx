import { Link } from 'react-router-dom'
import EventStatus from '../events/EventStatus'

function GuestItem({ guest, onDelete }) {
  return (
    <tr>
      <td>
        <div className="data-table__name-cell">
          <span className="data-table__avatar">{guest.name.charAt(0)}</span>
          <span className="data-table__primary-text">{guest.name}</span>
        </div>
      </td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
      <td>
        <EventStatus status={guest.status} />
      </td>
      <td className="table-cell--right">
        <div className="data-table__actions">
          <Link
            to={`/dashboard/guests/${guest.id}/edit`}
            className="data-table__action"
            aria-label={`Edit ${guest.name}`}
          >
            ✎
          </Link>
          <button
            type="button"
            onClick={() => onDelete?.(guest.id)}
            className="data-table__action data-table__action--danger"
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
