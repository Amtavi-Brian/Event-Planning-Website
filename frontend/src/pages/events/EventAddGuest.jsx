import { Link, useNavigate, useParams } from 'react-router-dom'
import GuestForm from '../../components/guests/GuestForm'
import { mockEvents } from './mockEvents'

function EventAddGuest() {
  const navigate = useNavigate()
  const { id } = useParams()
  const event = mockEvents.find((item) => String(item.id) === id)

  const handleSubmit = (formData) => {
    // TODO: wire up to guestService (scoped to this event) once backend integration begins
    console.log('Add guest for event', id, formData)
    navigate(`/dashboard/events/${id}`, { state: { activeTab: 'Guests' } })
  }

  const handleCancel = () => {
    navigate(`/dashboard/events/${id}`, { state: { activeTab: 'Guests' } })
  }

  return (
    <div>
      <Link to={`/dashboard/events/${id}`} className="back-link">
        ← Back to {event ? event.title : 'Event'}
      </Link>

      <h1 className="page-title-standalone">Add Guest</h1>
      {event && <p className="page-subtitle">For {event.title}</p>}

      <GuestForm onSubmit={handleSubmit} onCancel={handleCancel} submitLabel="Save Guest" />
    </div>
  )
}

export default EventAddGuest
