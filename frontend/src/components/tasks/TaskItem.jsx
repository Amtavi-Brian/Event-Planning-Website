import EventStatus from '../events/EventStatus'

function TaskItem({ task, onToggle }) {
  const { title, deadline, completed, status } = task

  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle?.(task.id)}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />

      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium ${
            completed ? 'text-gray-400 line-through' : 'text-gray-900'
          }`}
        >
          {title}
        </p>
        {deadline && <p className="text-xs text-gray-400">{deadline}</p>}
      </div>

      <EventStatus status={status} />

      <button
        type="button"
        className="text-gray-400 hover:text-gray-600 px-1"
        aria-label="Task options"
      >
        ⋮
      </button>
    </div>
  )
}

export default TaskItem
