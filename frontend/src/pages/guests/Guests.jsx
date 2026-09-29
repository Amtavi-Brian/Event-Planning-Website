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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Guests</h1>
        <Link
          to="/dashboard/guests/new"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          + Add Guest
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
          placeholder="Search guests..."
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-4 overflow-x-auto">
        {filteredGuests.length > 0 ? (
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-gray-200 text-xs uppercase text-gray-400">
                <th className="pb-2 font-medium">Name</th>
                <th className="pb-2 font-medium">Email</th>
                <th className="pb-2 font-medium">Phone</th>
                <th className="pb-2 font-medium">RSVP Status</th>
                <th className="pb-2 font-medium text-right">Actions</th>
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
          <p className="text-sm text-gray-500 text-center py-8">
            No guests match your search.
          </p>
        )}
      </div>
    </div>
  )
}

export default Guests
