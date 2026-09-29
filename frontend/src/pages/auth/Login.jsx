import { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div className="min-h-screen flex bg-white">
      {/* Left branding panel */}
      <div className="hidden md:flex md:w-1/2 lg:w-2/5 bg-[#0f1f3d] text-white flex-col justify-between px-10 py-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10">
              📅
            </span>
            <span className="text-2xl font-bold">EventPlan</span>
          </div>
          <p className="text-sm text-white/60 tracking-wide">
            Plan &bull; Organize &bull; Make it Happen
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-2">
            Your perfect events, well planned.
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="text-white/20 text-[140px] leading-none">📅</div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-8 md:py-12">
        {/* Mobile-only compact header (replaces the dark branding panel below md) */}
        <div className="md:hidden w-full max-w-sm mb-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-2xl text-gray-400 hover:text-gray-600 mb-4"
            aria-label="Go back"
          >
            ‹
          </button>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white mb-2">
              📅
            </span>
            <span className="text-xl font-bold text-gray-900">EventPlan</span>
            <p className="text-xs text-gray-400 tracking-wide mt-1">
              Plan &bull; Organize &bull; Make it Happen
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome Back
          </h2>
          <p className="text-gray-500 mb-8">
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
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
                className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
