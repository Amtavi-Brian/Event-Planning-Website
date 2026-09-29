import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth/AuthPage.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to auth service once backend integration begins
    console.log('Login submit', { ...formData, rememberMe })
  }

  return (
    <div className="auth-page">
      {/* Left branding panel (desktop) */}
      <div className="auth-page__branding">
        <div>
          <div className="auth-page__logo">
            <span className="auth-page__logo-icon">📅</span>
            <span className="auth-page__logo-text">EventPlan</span>
          </div>
          <p className="auth-page__tagline">
            Plan &bull; Organize &bull; Make it Happen
          </p>
        </div>

        <div>
          <h1 className="auth-page__headline">
            Your perfect events, well planned.
          </h1>
        </div>

        <div className="auth-page__illustration">📅</div>
      </div>

      {/* Right form panel */}
      <div className="auth-page__form-panel">
        {/* Mobile-only compact header (replaces the dark branding panel below md) */}
        <div className="auth-page__mobile-header">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="auth-page__back"
            aria-label="Go back"
          >
            ‹
          </button>
          <div className="auth-page__mobile-brand">
            <span className="auth-page__mobile-icon">📅</span>
            <span className="auth-page__mobile-title">EventPlan</span>
            <p className="auth-page__mobile-tagline">
              Plan &bull; Organize &bull; Make it Happen
            </p>
          </div>
        </div>

        <div className="auth-page__content">
          <h2 className="auth-page__title">Welcome Back</h2>
          <p className="auth-page__subtitle">
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="auth-page__password-field">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="form-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="auth-page__toggle-visibility"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="auth-page__row form-group">
              <label className="auth-page__remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="btn-link">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>

          <p className="auth-page__footer">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="btn-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
