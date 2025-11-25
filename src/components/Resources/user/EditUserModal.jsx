import React from 'react'
import styles from '../../CommonModel.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function EditUserModal({ showEditUserModal, setShowEditUserModal, departmentsList, jobRolesList, permissionsList }) {

    if (!showEditUserModal) return null;

    const handleClose = () => {
        setShowEditUserModal(false);
    };
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <>
            <div
                className={styles.modalOverlay}
                onClick={handleBackdropClick}
            >
                {/* Modal Content */}
                <div
                    className={styles.editUserModalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.modalHeader}>
                        <h1 className="modal-title fs-5">
                            Role Details
                        </h1>
                        <button
                            type='button'
                            className={styles.closeButton}
                            onClick={handleClose}
                            aria-label='Close'
                        >
                            <Icon icon='mdi:close' className={`text-secondary-light ${styles.closeIcon}`} />
                        </button>
                    </div>
                    <div className={styles.modalBody}>
                    <form action='#' onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
              <div className='row'>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Name <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Full Name'
                    
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
                    
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Reporting Manager
                  </label>
                  <select
                    className='form-select radius-8'
                    
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
        </>
    );
}