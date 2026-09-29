import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Home', icon: '🏠', end: true },
  { to: '/dashboard/events', label: 'Events', icon: '📅' },
  { to: '/dashboard/tasks', label: 'Tasks', icon: '✅' },
  { to: '/dashboard/guests', label: 'Guests', icon: '👥' },
  { to: '/dashboard/settings', label: 'Profile', icon: '👤' },
]

function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 flex justify-around border-t border-gray-200 bg-white py-2">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 px-2 text-xs ${
              isActive ? 'text-blue-600' : 'text-gray-400'
            }`
          }
        >
          <span className="text-lg">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
