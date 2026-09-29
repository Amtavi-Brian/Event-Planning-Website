import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import ComingSoon from './components/common/ComingSoon'
import Events from './pages/events/Events'
import CreateEvent from './pages/events/CreateEvent'
import EventDetails from './pages/events/EventDetails'
import Guests from './pages/guests/Guests'
import AddGuest from './pages/guests/AddGuest'
import Tasks from './pages/tasks/Tasks'
import AddTask from './pages/tasks/AddTask'
import Settings from './pages/profile/Settings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="events" element={<Events />} />
        <Route path="events/new" element={<CreateEvent />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="events/:id/edit" element={<ComingSoon title="Edit Event" />} />
        <Route path="events/:id/tasks/new" element={<ComingSoon title="Add Task" />} />
        <Route path="events/:id/guests/new" element={<ComingSoon title="Add Guest" />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="tasks/new" element={<AddTask />} />
        <Route path="tasks/:id/edit" element={<AddTask />} />
        <Route path="guests" element={<Guests />} />
        <Route path="guests/new" element={<AddGuest />} />
        <Route path="guests/:id/edit" element={<AddGuest />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<ComingSoon title="Page" />} />
    </Routes>
  )
}

export default App
