import { Link, useNavigate } from 'react-router-dom'
import EventForm from '../../components/events/EventForm'

function CreateEvent() {
  const navigate = useNavigate()

  const handleSubmit = (formData) => {
    // TODO: wire up to eventService once backend integration begins
    console.log('Create event submit', formData)
    navigate('/dashboard/events')
  }

  const handleCancel = () => {
    navigate('/dashboard/events')
  }

  return (
    <div>
      <Link
        to="/dashboard/events"
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
      >
        ← Back to My Events
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Create New Event
      </h1>

      <EventForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  )
}

export default CreateEvent
