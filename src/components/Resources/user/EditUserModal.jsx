"use client";

import { useEffect, useState } from "react";

const EditUserModal = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    designation: "",
    reportingManager: "",
    branch: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        contact: user.contact || "",
        designation: user.designation || "",
        reportingManager: user.reportingManager || "",
        branch: user.branch || "",
        role: user.roles?.[0] || "",
      });
    }
  }, [user]);

  const handleClose = () => {
    const modalElement = document.getElementById('editUserModal');
    if (modalElement) {
      if (typeof window !== 'undefined' && window.bootstrap) {
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      } else if (typeof window !== 'undefined' && window.$) {
        window.$(modalElement).modal('hide');
      } else {
        // Manual cleanup
        modalElement.classList.remove('show');
        modalElement.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrop = document.getElementById('editModalBackdrop');
        if (backdrop) {
          backdrop.remove();
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    handleClose();
  };

  return (
    <div
      className='modal fade'
      id='editUserModal'
      tabIndex={-1}
      aria-labelledby='editUserModalLabel'
      aria-hidden='true'
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target.id === 'editUserModal') {
          handleClose();
        }
      }}
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div
          className='modal-content border radius-16 bg-base'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editUserModalLabel'>
              Edit User
            </h1>
            <button
              type='button'
              className='btn-close'
              onClick={handleClose}
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Name <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Full Name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Email <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='email'
                    className='form-control radius-8'
                    placeholder='Enter Email Address'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Contact <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='tel'
                    className='form-control radius-8'
                    placeholder='Enter Contact Number'
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Designation <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Designation'
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Reporting Manager
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.reportingManager}
                    onChange={(e) => setFormData({ ...formData, reportingManager: e.target.value })}
                  >
                    <option value=''>Select Reporting Manager</option>
                    <option value='John Doe'>John Doe</option>
                    <option value='Jane Smith'>Jane Smith</option>
                    <option value='Manager 3'>Manager 3</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Branch <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  >
                    <option value=''>Select Branch</option>
                    <option value='Main Branch'>Main Branch</option>
                    <option value='Branch 2'>Branch 2</option>
                    <option value='Branch 3'>Branch 3</option>
                  </select>
                </div>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Assignment Roles <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value=''>Select Role</option>
                    <option value='Role 1'>Role 1</option>
                    <option value='Role 2'>Role 2</option>
                    <option value='Role 3'>Role 3</option>
                    <option value='Role 4'>Role 4</option>
                  </select>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                <button
                  type='button'
                  className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                >
                  Update User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;

