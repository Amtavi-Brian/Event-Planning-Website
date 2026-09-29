import { Link, useNavigate, useParams } from 'react-router-dom'
import GuestForm from '../../components/guests/GuestForm'
import { mockGuests } from './mockGuests'

function AddGuest() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = Boolean(id)
  const existingGuest = isEditing
    ? mockGuests.find((guest) => String(guest.id) === id)
    : null

  const handleSubmit = (formData) => {
    // TODO: wire up to guestService once backend integration begins
    console.log(isEditing ? 'Update guest' : 'Add guest', formData)
    navigate('/dashboard/guests')
  }

  const handleCancel = () => {
    navigate('/dashboard/guests')
  }

  return (
    <div>
      <Link to="/dashboard/guests" className="back-link">
        ← Back to Guests
      </Link>

      <h1 className="page-title-standalone">
        {isEditing ? 'Edit Guest' : 'Add Guest'}
      </h1>

      <GuestForm
        initialValues={existingGuest || undefined}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitLabel={isEditing ? 'Save Changes' : 'Save Guest'}
      />
    </div>
  )
}

export default AddGuest
