import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import GuestItem from '../../components/guests/GuestItem'
import { mockGuests } from './mockGuests'

function Guests() {
  const [guests, setGuests] = useState(mockGuests)
  const [search, setSearch] = useState('')

  const filteredGuests = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return guests
    return guests.filter(
      (guest) =>
        guest.name.toLowerCase().includes(query) ||
        guest.email.toLowerCase().includes(query)
    )
  }, [guests, search])

  const handleDelete = (id) => {
    if (window.confirm('Remove this guest?')) {
      setGuests((prev) => prev.filter((guest) => guest.id !== id))
    }
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Guests</h1>
        <Link to="/dashboard/guests/new" className="btn btn-primary">
          + Add Guest
        </Link>
      </div>

      <div className="search-field search-field--spaced">
        <span className="search-field__icon">🔍</span>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search guests..."
          className="search-field__input"
        />
      </div>

      <div className="table-card">
        {filteredGuests.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>RSVP Status</th>
                <th className="table-cell--right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuests.map((guest) => (
                <GuestItem
                  key={guest.id}
                  guest={guest}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="empty-state">No guests match your search.</p>
        )}
      </div>
    </div>
  )
}

export default Guests
