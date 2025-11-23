"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const AddTransportationModal = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleCode: "",
    capacity: "",
    price: "",
    country: "",
    state: "",
    city: "",
    description: "",
    supplierId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // Reset form after submission
    setFormData({
      vehicleType: "",
      vehicleCode: "",
      capacity: "",
      price: "",
      country: "",
      state: "",
      city: "",
      description: "",
      supplierId: "",
    });
  };

  return (
    <div
      className='modal fade'
      id='addTransportationModal'
      tabIndex={-1}
      aria-labelledby='addTransportationModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addTransportationModalLabel'>
              Add New Transportation
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Vehicle Type <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    required
                  >
                    <option value=''>Select Vehicle Type</option>
                    <option value='car'>Car</option>
                    <option value='bus'>Bus</option>
                    <option value='van'>Van</option>
                    <option value='suv'>SUV</option>
                    <option value='limousine'>Limousine</option>
                    <option value='airport-shuttle'>Airport Shuttle</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Vehicle Code <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Vehicle Code'
                    value={formData.vehicleCode}
                    onChange={(e) => setFormData({ ...formData, vehicleCode: e.target.value })}
                    required
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Capacity (Seats) <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='number'
                    min='1'
                    className='form-control radius-8'
                    placeholder='Enter Capacity'
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    required
                  />
                </div>
                <div className='col-4 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Country <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  >
                    <option value=''>Select Country</option>
                    <option value='usa'>USA</option>
                    <option value='uk'>UK</option>
                    <option value='india'>India</option>
                    <option value='canada'>Canada</option>
                  </select>
                </div>
                <div className='col-4 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    State <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                  >
                    <option value=''>Select State</option>
                    <option value='state1'>State 1</option>
                    <option value='state2'>State 2</option>
                    <option value='state3'>State 3</option>
                  </select>
                </div>
                <div className='col-4 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    City <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  >
                    <option value=''>Select City</option>
                    <option value='city1'>City 1</option>
                    <option value='city2'>City 2</option>
                    <option value='city3'>City 3</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Price <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='number'
                    min='0'
                    step='0.01'
                    className='form-control radius-8'
                    placeholder='Enter Price'
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Supplier
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.supplierId}
                    onChange={(e) => setFormData({ ...formData, supplierId: e.target.value })}
                  >
                    <option value=''>Select Supplier</option>
                    <option value='supplier1'>Supplier 1</option>
                    <option value='supplier2'>Supplier 2</option>
                    <option value='supplier3'>Supplier 3</option>
                  </select>
                </div>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Description <span className='text-danger-600'>*</span>
                  </label>
                  <textarea
                    className='form-control radius-8'
                    placeholder='Enter Transportation Description'
                    rows='4'
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                <button
                  type='button'
                  className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                  data-bs-dismiss='modal'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                >
                  Add Transportation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTransportationModal;

