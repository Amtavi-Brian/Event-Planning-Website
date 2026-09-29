import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskItem from '../../components/tasks/TaskItem'
import EventStatus from '../../components/events/EventStatus'
import { mockEvents } from './mockEvents'
import '../../styles/events/EventDetails.css'

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

  const mockEvent =
    mockEvents.find((event) => String(event.id) === id) || mockEvents[0]

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
      <Link to="/dashboard/events" className="back-link">
        ← Back to My Events
      </Link>

      {/* Header */}
      <div className="event-details__header">
        <div className="event-details__title-block">
          <div className="event-details__thumbnail">{mockEvent.emoji}</div>
          <div>
            <h1 className="event-details__title">{mockEvent.title}</h1>
            <p className="event-details__meta">
              {mockEvent.date} &bull; {mockEvent.time}
            </p>
            <p className="event-details__meta">📍 {mockEvent.location}</p>
          </div>
        </div>

        <div className="event-details__actions">
          <Link
            to={`/dashboard/events/${id}/edit`}
            className="btn btn-secondary"
          >
            ✎ Edit Event
          </Link>
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-danger"
          >
            Delete Event
          </button>
        </div>
      </div>

      <p className="event-details__description">{mockEvent.description}</p>

      {/* Tabs */}
      <div className="event-details__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`event-details__tab${
              activeTab === tab ? ' event-details__tab--active' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Tasks' && (
        <div className="event-details__panel">
          <div className="event-details__panel-header">
            <h2 className="event-details__panel-title">Planning Tasks</h2>
            <Link
              to={`/dashboard/events/${id}/tasks/new`}
              className="btn btn-primary"
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
        <div className="event-details__panel">
          <div className="event-details__panel-header">
            <h2 className="event-details__panel-title">Guest List</h2>
            <Link
              to={`/dashboard/events/${id}/guests/new`}
              className="btn btn-primary"
            >
              + Add Guest
            </Link>
          </div>
          {mockGuests.map((guest) => (
            <div key={guest.id} className="event-details__guest-row">
              <span className="event-details__guest-avatar">
                {guest.name.charAt(0)}
              </span>
              <div className="event-details__guest-body">
                <p className="event-details__guest-name">{guest.name}</p>
                <p className="event-details__guest-email">{guest.email}</p>
              </div>
              <EventStatus status={guest.status} />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Details' && (
        <div className="event-details__panel event-details__info">
          <div>
            <p className="event-details__info-label">Description</p>
            <p className="event-details__info-value">
              {mockEvent.description}
            </p>
          </div>
          <div className="event-details__info-grid">
            <div>
              <p className="event-details__info-label">Date</p>
              <p className="event-details__info-value">{mockEvent.date}</p>
            </div>
            <div>
              <p className="event-details__info-label">Time</p>
              <p className="event-details__info-value">{mockEvent.time}</p>
            </div>
            <div>
              <p className="event-details__info-label">Location</p>
              <p className="event-details__info-value">
                {mockEvent.location}
              </p>
            </div>
            <div>
              <p className="event-details__info-label">Maximum Guests</p>
              <p className="event-details__info-value">
                {mockEvent.maxGuests}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventDetails
