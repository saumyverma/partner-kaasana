"use client";
import React, { useState } from "react";

export default function AddNotificationModal() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    message: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className='modal fade'
      id='addNotificationModal'
      tabIndex='-1'
      aria-labelledby='addNotificationModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered modal-lg'>
        <div className='modal-content'>
          <div className='modal-header border-bottom'>
            <h5 className='modal-title' id='addNotificationModalLabel'>
              Create Notification
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='modal-body'>
              <div className='row gy-3'>
                <div className='col-md-12'>
                  <label className='form-label text-sm fw-medium'>
                    Title <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    name='title'
                    className='form-control form-control-sm'
                    placeholder='Enter notification title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Type <span className='text-danger'>*</span>
                  </label>
                  <select
                    name='type'
                    className='form-select form-select-sm'
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Type</option>
                    <option value='email'>Email</option>
                    <option value='sms'>SMS</option>
                    <option value='push'>Push Notification</option>
                    <option value='in-app'>In-App</option>
                  </select>
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Status <span className='text-danger'>*</span>
                  </label>
                  <select
                    name='status'
                    className='form-select form-select-sm'
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </select>
                </div>
                <div className='col-md-12'>
                  <label className='form-label text-sm fw-medium'>
                    Message <span className='text-danger'>*</span>
                  </label>
                  <textarea
                    name='message'
                    className='form-control'
                    rows='10'
                    placeholder='Enter notification message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className='modal-footer border-top'>
              <button
                type='button'
                className='btn btn-sm btn-outline-light'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button type='submit' className='btn btn-sm btn-primary-600'>
                Create Notification
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

