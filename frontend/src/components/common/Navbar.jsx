import '../../styles/common/Navbar.css'

function Navbar({ userName = 'Brian' }) {
  return (
    <header className="navbar">
      <div className="navbar__search">
        <span className="navbar__search-icon">🔍</span>
        <input
          type="search"
          placeholder="Search..."
          className="navbar__search-input"
        />
      </div>

      <div className="navbar__actions">
        <button
          type="button"
          className="navbar__bell"
          aria-label="Notifications"
        >
          🔔
        </button>
        <div className="navbar__user">
          <span className="navbar__avatar">{userName.charAt(0)}</span>
          <span className="navbar__username">{userName}</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
