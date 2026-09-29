import { NavLink } from 'react-router-dom'

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
    <div className="flex h-full w-64 flex-col justify-between bg-[#0f1f3d] text-white px-4 py-6">
      <div>
        <div className="flex items-center gap-2 px-2 mb-8">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
            📅
          </span>
          <span className="text-xl font-bold">EventPlan</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white transition-colors"
      >
        <span className="text-base">⏻</span>
        Log Out
      </button>
    </div>
  )
}

export default Sidebar
