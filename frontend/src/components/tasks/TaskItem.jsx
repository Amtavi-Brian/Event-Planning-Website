import EventStatus from '../events/EventStatus'
import '../../styles/tasks/TaskItem.css'

function TaskItem({ task, onToggle }) {
  const { title, deadline, completed, status } = task

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle?.(task.id)}
        className="task-item__checkbox"
      />

      <div className="task-item__body">
        <p
          className={`task-item__title${completed ? ' task-item__title--done' : ''}`}
        >
          {title}
        </p>
        {deadline && <p className="task-item__deadline">{deadline}</p>}
      </div>

      <EventStatus status={status} />

      <button type="button" className="task-item__menu" aria-label="Task options">
        ⋮
      </button>
    </div>
  )
}

export default TaskItem
