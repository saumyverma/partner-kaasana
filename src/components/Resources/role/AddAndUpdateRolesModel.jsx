'use client'
import React, { useEffect } from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from './AddAndUpdateRoles.module.css';

export default function AddAndUpdateRolesModal({ showAddAndUpdateRolesModal, setShowAddAndUpdateRolesModal, departments, jobRoles }) {
    
    if (!showAddAndUpdateRolesModal) return null;

     const handleClose = () => {
        setShowAddAndUpdateRolesModal(false);
     };
     const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className={styles.modalOverlay}
            onClick={handleBackdropClick}
        >
            {/* Modal Content */}
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h1  className="modal-title fs-5" id='AddAndUpdateRoles'>
                        Add New Role
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
                            <div className='col-4 mb-20'>
                                <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                                    Department
                                </label>
                                <select
                                    className="form-control radius-8 form-select"
                                    id="department"
                                  defaultValue="1"
                                >
                                    {departments && departments.map((department) => (
                                        <option key={department.value} value={department.value}>{department.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='col-4 mb-20'>
                                <label
                                    htmlFor='desc'
                                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                                >
                                    Job Roles
                                </label>
                                <select
                                    className="form-control radius-8 form-select"
                                    id="jobRoles"
                                    defaultValue="Admin"
                                >
                                    {jobRoles && jobRoles.map((jobRole) => (
                                        <option key={jobRole.value} value={jobRole.value}>{jobRole.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='col-4 mb-20'>
                                <label
                                    htmlFor='jobTitle'
                                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                                >
                                    Job Title
                                </label>
                                <input
                                    type='text'
                                    className='form-control radius-8'
                                    placeholder='Enter Job Title'
                                    defaultValue="Marketing"
                                />
                            </div>
                            <div className='col-12 mb-20'>
                                <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                                    Status{" "}
                                </label>
                                <div className='d-flex align-items-center flex-wrap gap-28'>
                                    <div className='form-check checked-success d-flex align-items-center gap-2'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='label'
                                            id='Personal'
                                        />
                                        <label
                                            className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                                            htmlFor='Personal'
                                        >
                                            <span className='w-8-px h-8-px bg-success-600 rounded-circle' />
                                            Active
                                        </label>
                                    </div>
                                    <div className='form-check checked-danger d-flex align-items-center gap-2'>
                                        <input
                                            className='form-check-input'
                                            type='radio'
                                            name='label'
                                            id='Holiday'
                                        />
                                        <label
                                            className='form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1'
                                            htmlFor='Holiday'
                                        >
                                            <span className='w-8-px h-8-px bg-danger-600 rounded-circle' />
                                            Inactive
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                                <button
                                    type='button'
                                    onClick={handleClose}
                                    className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}