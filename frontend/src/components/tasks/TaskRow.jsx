import { Link } from 'react-router-dom'
import EventStatus from '../events/EventStatus'

function TaskRow({ task, onToggle, onDelete }) {
  return (
    <tr className="border-b border-gray-100 last:border-b-0">
      <td className="py-3 pr-4 w-8">
        <input
          type="checkbox"
          checked={task.status === 'Completed'}
          onChange={() => onToggle?.(task.id)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </td>
      <td className="py-3 pr-4">
        <span
          className={`text-sm font-medium ${
            task.status === 'Completed'
              ? 'text-gray-400 line-through'
              : 'text-gray-900'
          }`}
        >
          {task.title}
        </span>
      </td>
      <td className="py-3 pr-4 text-sm text-gray-500">{task.deadline}</td>
      <td className="py-3 pr-4">
        <EventStatus status={task.status} />
      </td>
      <td className="py-3 text-right">
        <div className="flex items-center justify-end gap-2">
          <Link
            to={`/dashboard/tasks/${task.id}/edit`}
            className="text-gray-400 hover:text-blue-600"
            aria-label={`Edit ${task.title}`}
          >
            ✎
          </Link>
          <button
            type="button"
            onClick={() => onDelete?.(task.id)}
            className="text-gray-400 hover:text-red-600"
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
