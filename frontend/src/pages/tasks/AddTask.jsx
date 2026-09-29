import { Link, useNavigate, useParams } from 'react-router-dom'
import TaskForm from '../../components/tasks/TaskForm'
import { mockTasks } from './mockTasks'

function AddTask() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = Boolean(id)
  const existingTask = isEditing
    ? mockTasks.find((task) => String(task.id) === id)
    : null

  const handleSubmit = (formData) => {
    // TODO: wire up to taskService once backend integration begins
    console.log(isEditing ? 'Update task' : 'Add task', formData)
    navigate('/dashboard/tasks')
  }

  const handleCancel = () => {
    navigate('/dashboard/tasks')
  }

  return (
    <div>
      <Link
        to="/dashboard/tasks"
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
      >
        ← Back to Tasks
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {isEditing ? 'Edit Task' : 'Add Task'}
      </h1>

      <TaskForm
        initialValues={existingTask || undefined}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitLabel={isEditing ? 'Save Changes' : 'Save Task'}
      />
    </div>
  )
}

export default AddTask
