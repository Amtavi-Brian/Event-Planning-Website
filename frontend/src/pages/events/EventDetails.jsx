import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskItem from '../../components/tasks/TaskItem'
import EventStatus from '../../components/events/EventStatus'

const mockEvent = {
  title: 'Birthday Party',
  date: 'October 12, 2026',
  time: '2:00 PM',
  location: 'Nairobi',
  maxGuests: 50,
  description: 'A birthday celebration with friends and family.',
  emoji: '🎈',
}

const initialTasks = [
  { id: 1, title: 'Book venue', deadline: 'Oct 5, 2026', completed: true, status: 'Completed' },
  { id: 2, title: 'Send invitations', deadline: 'Oct 7, 2026', completed: true, status: 'Completed' },
  { id: 3, title: 'Buy decorations', deadline: 'Oct 10, 2026', completed: false, status: 'Pending' },
  { id: 4, title: 'Order cake', deadline: 'Oct 11, 2026', completed: false, status: 'Pending' },
]

const mockGuests = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Going' },
  { id: 2, name: 'Mary Wanjiku', email: 'mary@example.com', status: 'Pending' },
  { id: 3, name: 'David Kimani', email: 'david@example.com', status: 'Not Going' },
]

const tabs = ['Tasks', 'Guests', 'Details']

function EventDetails() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('Tasks')
  const [tasks, setTasks] = useState(initialTasks)

  const handleToggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              status: !task.completed ? 'Completed' : 'Pending',
            }
          : task
      )
    )
  }

  const handleDelete = () => {
    // TODO: wire up to eventService once backend integration begins
    if (window.confirm('Are you sure you want to delete this event?')) {
      console.log('Delete event', id)
    }
  }

  return (
    <div>
      <Link
        to="/dashboard/events"
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700 mb-4"
      >
        ← Back to My Events
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-3xl">
            {mockEvent.emoji}
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {mockEvent.title}
            </h1>
            <p className="text-sm text-gray-500">
              {mockEvent.date} &bull; {mockEvent.time}
            </p>
            <p className="text-sm text-gray-500">📍 {mockEvent.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/dashboard/events/${id}/edit`}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ✎ Edit Event
          </Link>
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 transition-colors"
          >
            Delete Event
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-6">{mockEvent.description}</p>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Tasks' && (
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-900">Planning Tasks</h2>
            <Link
              to={`/dashboard/events/${id}/tasks/new`}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              + Add Task
            </Link>
          </div>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={handleToggleTask} />
          ))}
        </div>
      )}

      {activeTab === 'Guests' && (
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-gray-900">Guest List</h2>
            <Link
              to={`/dashboard/events/${id}/guests/new`}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              + Add Guest
            </Link>
          </div>
          {mockGuests.map((guest) => (
            <div
              key={guest.id}
              className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-b-0"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                {guest.name.charAt(0)}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {guest.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {guest.email}
                </p>
              </div>
              <EventStatus status={guest.status} />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Details' && (
        <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3 text-sm">
          <div>
            <p className="text-gray-400">Description</p>
            <p className="text-gray-900">{mockEvent.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Date</p>
              <p className="text-gray-900">{mockEvent.date}</p>
            </div>
            <div>
              <p className="text-gray-400">Time</p>
              <p className="text-gray-900">{mockEvent.time}</p>
            </div>
            <div>
              <p className="text-gray-400">Location</p>
              <p className="text-gray-900">{mockEvent.location}</p>
            </div>
            <div>
              <p className="text-gray-400">Maximum Guests</p>
              <p className="text-gray-900">{mockEvent.maxGuests}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventDetails
