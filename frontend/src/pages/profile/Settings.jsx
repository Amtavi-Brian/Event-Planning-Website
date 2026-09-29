import { useState } from 'react'

const initialProfile = {
  fullName: 'Brian James',
  email: 'brian.james@example.com',
  phone: '+254 712 345678',
  bio: 'A passionate event planner.',
}

function Settings() {
  const [formData, setFormData] = useState(initialProfile)
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSaved(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to authService/profile API once backend integration begins
    console.log('Save profile', formData)
    setSaved(true)
  }

  const handleChangePhoto = () => {
    // TODO: wire up to file upload once backend integration begins
    console.log('Change photo clicked')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Profile Settings
      </h1>

      <div className="max-w-2xl rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-700">
            {formData.fullName
              .split(' ')
              .map((part) => part.charAt(0))
              .join('')}
          </span>
          <div>
            <p className="font-semibold text-gray-900">
              {formData.fullName}
            </p>
            <p className="text-sm text-gray-500">{formData.email}</p>
            <button
              type="button"
              onClick={handleChangePhoto}
              className="mt-1 text-sm font-medium text-blue-600 hover:underline"
            >
              Change Photo
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
            {saved && (
              <span className="text-sm font-medium text-green-600">
                Saved!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Settings
