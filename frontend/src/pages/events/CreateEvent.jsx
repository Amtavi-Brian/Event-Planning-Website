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
      <Link to="/dashboard/events" className="back-link">
        ← Back to My Events
      </Link>

      <h1 className="page-title-standalone">Create New Event</h1>

      <EventForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  )
}

export default CreateEvent
