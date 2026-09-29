import { Link } from 'react-router-dom'
import EventStatus from '../events/EventStatus'

function TaskRow({ task, onToggle, onDelete }) {
  return (
    <tr>
      <td style={{ width: '32px' }}>
        <input
          type="checkbox"
          checked={task.status === 'Completed'}
          onChange={() => onToggle?.(task.id)}
        />
      </td>
      <td>
        <span
          className={`data-table__primary-text${
            task.status === 'Completed' ? ' data-table__primary-text--done' : ''
          }`}
        >
          {task.title}
        </span>
      </td>
      <td>{task.deadline}</td>
      <td>
        <EventStatus status={task.status} />
      </td>
      <td className="table-cell--right">
        <div className="data-table__actions">
          <Link
            to={`/dashboard/tasks/${task.id}/edit`}
            className="data-table__action"
            aria-label={`Edit ${task.title}`}
          >
            ✎
          </Link>
          <button
            type="button"
            onClick={() => onDelete?.(task.id)}
            className="data-table__action data-table__action--danger"
            aria-label={`Delete ${task.title}`}
          >
            🗑
          </button>
        </div>
      </td>
    </tr>
  )
}

export default TaskRow
