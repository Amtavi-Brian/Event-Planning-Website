import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import ComingSoon from './components/common/ComingSoon'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="events" element={<ComingSoon title="My Events" />} />
        <Route path="tasks" element={<ComingSoon title="Tasks" />} />
        <Route path="guests" element={<ComingSoon title="Guests" />} />
        <Route path="settings" element={<ComingSoon title="Settings" />} />
      </Route>

      <Route path="*" element={<ComingSoon title="Page" />} />
    </Routes>
  )
}

export default App
