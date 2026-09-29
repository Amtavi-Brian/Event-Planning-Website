import { useState } from 'react'
import '../../styles/guests/GuestForm.css'

const defaultValues = {
  name: '',
  email: '',
  phone: '',
  status: 'Pending',
}

function GuestForm({
  initialValues = defaultValues,
  onSubmit,
  onCancel,
  submitLabel = 'Save Guest',
}) {
  const [formData, setFormData] = useState({ ...defaultValues, ...initialValues })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="guest-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. John Doe"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. john@example.com"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +254 712 345678"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="status" className="form-label">
          RSVP Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-select"
        >
          <option value="Pending">Pending</option>
          <option value="Going">Going</option>
          <option value="Not Going">Not Going</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  )
}

export default GuestForm
