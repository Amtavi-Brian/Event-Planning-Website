import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import BottomNav from '../components/common/BottomNav'

function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative h-full w-64">
            <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile top bar */}
        <header className="md:hidden flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-xl text-gray-600"
            aria-label="Open menu"
          >
            ☰
          </button>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-blue-600 text-white text-sm">
              📅
            </span>
            <span className="font-bold text-gray-900">EventPlan</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="text-gray-500"
              aria-label="Notifications"
            >
              🔔
            </button>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
              B
            </span>
          </div>
        </header>

        {/* Desktop top bar */}
        <Navbar />

        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-8 pb-20 md:pb-8">
          <Outlet />
        </main>

        <BottomNav />
      </div>
    </div>
  )
}

export default DashboardLayout
