import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TaskRow from '../../components/tasks/TaskRow'
import { mockTasks } from './mockTasks'

function Tasks() {
  const [tasks, setTasks] = useState(mockTasks)
  const [search, setSearch] = useState('')

  const filteredTasks = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return tasks
    return tasks.filter((task) => task.title.toLowerCase().includes(query))
  }, [tasks, search])

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'Completed' ? 'Pending' : 'Completed',
            }
          : task
      )
    )
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this task?')) {
      setTasks((prev) => prev.filter((task) => task.id !== id))
    }
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Tasks</h1>
        <Link to="/dashboard/tasks/new" className="btn btn-primary">
          + Add Task
        </Link>
      </div>

      <div className="search-field search-field--spaced">
        <span className="search-field__icon">🔍</span>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="search-field__input"
        />
      </div>

      <div className="table-card">
        {filteredTasks.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '32px' }}></th>
                <th>Task</th>
                <th>Deadline</th>
                <th>Status</th>
                <th className="table-cell--right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <TaskRow
                  key={task.id}
                  task={task}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="empty-state">No tasks match your search.</p>
        )}
      </div>
    </div>
  )
}

export default Tasks
