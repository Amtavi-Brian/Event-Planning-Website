import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import Navbar from '../components/common/Navbar'
import BottomNav from '../components/common/BottomNav'
import '../styles/layouts/DashboardLayout.css'

function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="dashboard-layout">
      {/* Desktop sidebar */}
      <div className="dashboard-layout__sidebar">
        <Sidebar />
      </div>

      {/* Mobile sidebar drawer */}
      {mobileMenuOpen && (
        <div className="dashboard-layout__drawer">
          <div
            className="dashboard-layout__drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="dashboard-layout__drawer-panel">
            <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      <div className="dashboard-layout__main">
        {/* Mobile top bar */}
        <header className="dashboard-layout__mobile-header">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="dashboard-layout__menu-btn"
            aria-label="Open menu"
          >
            ☰
          </button>
          <div className="dashboard-layout__mobile-brand">
            <span className="dashboard-layout__mobile-icon">📅</span>
            <span className="dashboard-layout__mobile-title">EventPlan</span>
          </div>
          <div className="dashboard-layout__mobile-actions">
            <button
              type="button"
              className="dashboard-layout__mobile-bell"
              aria-label="Notifications"
            >
              🔔
            </button>
            <span className="dashboard-layout__mobile-avatar">B</span>
          </div>
        </header>

        {/* Desktop top bar */}
        <Navbar />

        <main className="dashboard-layout__content">
          <Outlet />
        </main>

        <BottomNav />
      </div>
    </div>
  )
}

export default DashboardLayout
