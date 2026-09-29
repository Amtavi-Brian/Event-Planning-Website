function Navbar({ userName = 'Brian' }) {
  return (
    <header className="hidden md:flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <div className="relative w-full max-w-sm">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔍
        </span>
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="relative text-gray-500 hover:text-gray-700"
          aria-label="Notifications"
        >
          🔔
        </button>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            {userName.charAt(0)}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {userName}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
