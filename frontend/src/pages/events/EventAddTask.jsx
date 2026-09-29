import { Link, useNavigate, useParams } from 'react-router-dom'
import TaskForm from '../../components/tasks/TaskForm'
import { mockEvents } from './mockEvents'

function EventAddTask() {
  const navigate = useNavigate()
  const { id } = useParams()
  const event = mockEvents.find((item) => String(item.id) === id)

  const handleSubmit = (formData) => {
    // TODO: wire up to taskService (scoped to this event) once backend integration begins
    console.log('Add task for event', id, formData)
    navigate(`/dashboard/events/${id}`, { state: { activeTab: 'Tasks' } })
  }

  const handleCancel = () => {
    navigate(`/dashboard/events/${id}`, { state: { activeTab: 'Tasks' } })
  }

  return (
    <div>
      <Link to={`/dashboard/events/${id}`} className="back-link">
        ← Back to {event ? event.title : 'Event'}
      </Link>

      <h1 className="page-title-standalone">Add Task</h1>
      {event && <p className="page-subtitle">For {event.title}</p>}

      <TaskForm onSubmit={handleSubmit} onCancel={handleCancel} submitLabel="Save Task" />
    </div>
  )
}

export default EventAddTask
