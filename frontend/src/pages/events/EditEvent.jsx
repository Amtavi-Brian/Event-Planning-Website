import { Link, useNavigate, useParams } from 'react-router-dom'
import EventForm from '../../components/events/EventForm'
import { mockEvents } from './mockEvents'

function EditEvent() {
  const navigate = useNavigate()
  const { id } = useParams()
  const existingEvent = mockEvents.find((event) => String(event.id) === id)

  const initialValues = existingEvent
    ? {
        title: existingEvent.title,
        description: existingEvent.description,
        date: existingEvent.rawDate,
        time: existingEvent.rawTime,
        location: existingEvent.location,
        maxGuests: existingEvent.maxGuests,
      }
    : undefined

  const handleSubmit = (formData) => {
    // TODO: wire up to eventService once backend integration begins
    console.log('Update event', id, formData)
    navigate(`/dashboard/events/${id}`)
  }

  const handleCancel = () => {
    navigate(`/dashboard/events/${id}`)
  }

  return (
    <div>
      <Link to={`/dashboard/events/${id}`} className="back-link">
        ← Back to Event
      </Link>

      <h1 className="page-title-standalone">Edit Event</h1>

      {existingEvent ? (
        <EventForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          submitLabel="Save Changes"
        />
      ) : (
        <p className="empty-state">Event not found.</p>
      )}
    </div>
  )
}

export default EditEvent
