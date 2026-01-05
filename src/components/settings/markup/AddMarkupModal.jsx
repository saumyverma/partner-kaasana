"use client";
import React, { useState } from "react";

export default function AddMarkupModal() {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    type: "",
    value: "",
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
      id='addMarkupModal'
      tabIndex='-1'
      aria-labelledby='addMarkupModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered modal-lg'>
        <div className='modal-content'>
          <div className='modal-header border-bottom'>
            <h5 className='modal-title' id='addMarkupModalLabel'>
              Create Markup
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
                    Name <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    name='name'
                    className='form-control form-control-sm'
                    placeholder='Enter markup name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Product <span className='text-danger'>*</span>
                  </label>
                  <select
                    name='product'
                    className='form-select form-select-sm'
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value=''>Select Product</option>
                    <option value='hotel'>Hotel</option>
                    <option value='flight'>Flight</option>
                    <option value='package'>Package</option>
                    <option value='transport'>Transport</option>
                    <option value='activity'>Activity</option>
                    <option value='visa'>Visa</option>
                  </select>
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
                    <option value='percentage'>Percentage</option>
                    <option value='fixed'>Fixed Amount</option>
                    <option value='tiered'>Tiered</option>
                  </select>
                </div>
                <div className='col-md-6'>
                  <label className='form-label text-sm fw-medium'>
                    Value <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    name='value'
                    className='form-control form-control-sm'
                    placeholder='Enter value'
                    value={formData.value}
                    onChange={handleChange}
                    required
                  />
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
                Create Markup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

