import { NavLink } from 'react-router-dom'
import '../../styles/common/Sidebar.css'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊', end: true },
  { to: '/dashboard/events', label: 'My Events', icon: '📅' },
  { to: '/dashboard/tasks', label: 'Tasks', icon: '✅' },
  { to: '/dashboard/guests', label: 'Guests', icon: '👥' },
  { to: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
]

function Sidebar({ onNavigate }) {
  const handleLogout = () => {
    // TODO: wire up to authService once backend integration begins
    console.log('Log out clicked')
  }

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar__brand">
          <span className="sidebar__brand-icon">📅</span>
          <span className="sidebar__brand-text">EventPlan</span>
        </div>

        <nav className="sidebar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
              }
            >
              <span className="sidebar__link-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="sidebar__logout"
      >
        <span className="sidebar__link-icon">⏻</span>
        Log Out
      </button>
    </div>
  )
}

export default Sidebar
