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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
        <Link
          to="/dashboard/tasks/new"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          + Add Task
        </Link>
      </div>

      <div className="relative max-w-md mb-6">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔍
        </span>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 overflow-x-auto">
        {filteredTasks.length > 0 ? (
          <table className="w-full min-w-[520px] text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase text-gray-400">
                <th className="pb-2 font-medium w-8"></th>
                <th className="pb-2 font-medium">Task</th>
                <th className="pb-2 font-medium">Deadline</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium text-right">Actions</th>
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
          <p className="text-sm text-gray-500 text-center py-8">
            No tasks match your search.
          </p>
        )}
      </div>
    </div>
  )
}

export default Tasks
