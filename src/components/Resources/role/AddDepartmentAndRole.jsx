'use client'
import React, { useEffect } from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from './AddAndUpdateRoles.module.css';

export default function AddDepartmentAndRoleModal({ type, showAddDepartmentAndRoleModal, setShowAddDepartmentAndRoleModal }) {
    
    if (!showAddDepartmentAndRoleModal) return null;

     const handleClose = () => {
        setShowAddDepartmentAndRoleModal(false);
     };
     const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div
            className={styles.modalOverlayNested}
            onClick={(e) => {
                e.stopPropagation();
                handleBackdropClick(e);
            }}
        >
            {/* Modal Content */}
            <div
                className={styles.modalContentChild}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h1  className="modal-title fs-5" id='AddDepartmentAndRole'>
                        Add Department and Role
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
                            {type === 'Department' && (
                            <div className='col-4 mb-20'>
                                <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                                    Department
                                </label>
                                <input
                                    type='text'
                                    className='form-control radius-8'
                                    placeholder='Enter Department'
                                    defaultValue="Marketing"
                                />
                            </div>
                            )}
                            {type === 'Job Role' && (
                            <div className='col-4 mb-20'>
                                <label
                                    htmlFor='desc'
                                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                                >
                                    Job Roles
                                </label>
                                <input
                                    type='text'
                                    className='form-control radius-8'
                                    placeholder='Enter Job Roles'
                                    defaultValue="Admin"
                                />
                            </div>
                            )}
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
                                    {type === 'Department' ? 'Add Department' : 'Add Job Role'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}