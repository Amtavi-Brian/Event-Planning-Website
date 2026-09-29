import { useState } from 'react'
import '../../styles/profile/Settings.css'

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
      <h1 className="page-title-standalone">Profile Settings</h1>

      <div className="settings-card">
        <div className="settings-card__profile">
          <span className="settings-card__avatar">
            {formData.fullName
              .split(' ')
              .map((part) => part.charAt(0))
              .join('')}
          </span>
          <div>
            <p className="settings-card__name">{formData.fullName}</p>
            <p className="settings-card__email">{formData.email}</p>
            <button
              type="button"
              onClick={handleChangePhoto}
              className="settings-card__change-photo"
            >
              Change Photo
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio" className="form-label">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            {saved && <span className="settings-card__saved">Saved!</span>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Settings
