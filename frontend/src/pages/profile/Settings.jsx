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

  const initials = formData.fullName
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')

  return (
    <div className="settings-page">
      <h1 className="page-title-standalone">Profile Settings</h1>
      <p className="page-subtitle">
        Manage your personal information and how it appears across EventPlan.
      </p>

      <div className="settings-card">
        {/* Profile summary */}
        <section className="settings-section settings-section--profile">
          <div className="settings-avatar">
            <span className="settings-avatar__initials">{initials}</span>
            <button
              type="button"
              onClick={handleChangePhoto}
              className="settings-avatar__edit"
              aria-label="Change photo"
              title="Change photo"
            >
              📷
            </button>
          </div>
          <div className="settings-profile-info">
            <p className="settings-profile-info__name">{formData.fullName}</p>
            <p className="settings-profile-info__email">{formData.email}</p>
            <div className="settings-profile-info__actions">
              <button
                type="button"
                onClick={handleChangePhoto}
                className="btn btn-secondary btn-sm"
              >
                Change Photo
              </button>
              <button type="button" className="btn btn-link btn-sm">
                Remove
              </button>
            </div>
          </div>
        </section>

        <div className="settings-divider" />

        {/* Personal information */}
        <form onSubmit={handleSubmit}>
          <section className="settings-section">
            <h2 className="settings-section__title">Personal Information</h2>
            <p className="settings-section__hint">
              This information will be displayed on your profile and event invitations.
            </p>

            <div className="form-row form-group">
              <div>
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

              <div>
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
                placeholder="Tell others a little about yourself..."
                className="form-textarea"
              />
              <p className="settings-section__hint settings-section__hint--tight">
                Brief description for your profile. Maximum 160 characters.
              </p>
            </div>
          </section>

          <div className="settings-footer">
            {saved && (
              <span className="settings-saved">
                <span className="settings-saved__icon">✓</span>
                Changes saved
              </span>
            )}
            <div className="settings-footer__buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setFormData(initialProfile)}
              >
                Reset
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Settings
