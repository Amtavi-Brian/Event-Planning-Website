import { NavLink } from 'react-router-dom'
import '../../styles/common/BottomNav.css'

const navItems = [
  { to: '/dashboard', label: 'Home', icon: '🏠', end: true },
  { to: '/dashboard/events', label: 'Events', icon: '📅' },
  { to: '/dashboard/tasks', label: 'Tasks', icon: '✅' },
  { to: '/dashboard/guests', label: 'Guests', icon: '👥' },
  { to: '/dashboard/settings', label: 'Profile', icon: '👤' },
]

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `bottom-nav__link${isActive ? ' bottom-nav__link--active' : ''}`
          }
        >
          <span className="bottom-nav__icon">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
