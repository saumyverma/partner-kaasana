'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from './AddAndUpdateRoles.module.css';
import AddDepartmentAndRoleModal from './AddDepartmentAndRole';

export default function AddAndUpdateRolesModal({ showAddAndUpdateRolesModal, setShowAddAndUpdateRolesModal, departments, jobRoles, permissionsList }) {
    const [showAddDepartmentAndRoleModal, setShowAddDepartmentAndRoleModal] = useState(false);
    const [type, setType] = useState('Department');
    const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);
    const [departmentSearchTerm, setDepartmentSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const departmentDropdownRef = useRef(null);
    const [isJobRoleDropdownOpen, setIsJobRoleDropdownOpen] = useState(false);
    const [jobRoleSearchTerm, setJobRoleSearchTerm] = useState('');
    const [selectedJobRole, setSelectedJobRole] = useState(null);
    const jobRoleDropdownRef = useRef(null);


    if (!showAddAndUpdateRolesModal) return null;

     const handleClose = () => {
        setShowAddAndUpdateRolesModal(false);
     };
     const handleBackdropClick = (e) => {
        // Only close if the child modal is not open
        if (e.target === e.currentTarget && !showAddDepartmentAndRoleModal) {
            handleClose();
        }
    };

    // Handle click outside department dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Don't close dropdown if child modal is open
            if (showAddDepartmentAndRoleModal) return;
            
            if (departmentDropdownRef.current && !departmentDropdownRef.current.contains(event.target)) {
                setIsDepartmentDropdownOpen(false);
                setDepartmentSearchTerm('');
            }
            
            if (jobRoleDropdownRef.current && !jobRoleDropdownRef.current.contains(event.target)) {
                setIsJobRoleDropdownOpen(false);
                setJobRoleSearchTerm('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showAddDepartmentAndRoleModal]);

    // Filter departments based on search term
    const filteredDepartments = departments?.filter((department) =>
        department.label.toLowerCase().includes(departmentSearchTerm.toLowerCase())
    ) || [];

    // Filter job roles based on search term
    const filteredJobRoles = jobRoles?.filter((jobRole) =>
        jobRole.label.toLowerCase().includes(jobRoleSearchTerm.toLowerCase())
    ) || [];

    const handleDepartmentSelect = (department) => {
        setSelectedDepartment(department);
        setIsDepartmentDropdownOpen(false);
        setDepartmentSearchTerm('');
    };

    const handleJobRoleSelect = (jobRole) => {
        setSelectedJobRole(jobRole);
        setIsJobRoleDropdownOpen(false);
        setJobRoleSearchTerm('');
    };

    const handleAddNewDepartment = () => {
        setType('Department');
        setIsDepartmentDropdownOpen(false);
        setDepartmentSearchTerm('');
        setShowAddDepartmentAndRoleModal(true);
    };

    const handleAddNewJobRole = () => {
        setType('Job Role');
        setIsJobRoleDropdownOpen(false);
        setJobRoleSearchTerm('');
        setShowAddDepartmentAndRoleModal(true);
    };

    return (
        <>
        {showAddDepartmentAndRoleModal && 
        <AddDepartmentAndRoleModal type={type} showAddDepartmentAndRoleModal={showAddDepartmentAndRoleModal} setShowAddDepartmentAndRoleModal={setShowAddDepartmentAndRoleModal} />}
       
        <div
            className={styles.modalOverlay}
            onClick={(e) => {
                // Prevent closing parent modal when child modal is open
                if (!showAddDepartmentAndRoleModal) {
                    handleBackdropClick(e);
                }
            }}
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
                                <div className={styles.dropdownContainer} ref={departmentDropdownRef}>
                                    <button
                                        type="button"
                                        className={`form-control radius-8 ${styles.dropdownButton}`}
                                        onClick={() => setIsDepartmentDropdownOpen(!isDepartmentDropdownOpen)}
                                    >
                                        <span className={selectedDepartment ? '' : 'text-secondary-light'}>
                                            {selectedDepartment ? selectedDepartment.label : 'Select Department'}
                                        </span>
                                        <Icon 
                                            icon={isDepartmentDropdownOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'} 
                                            className="text-secondary-light"
                                        />
                                    </button>
                                    {isDepartmentDropdownOpen && (
                                        <div className={styles.dropdownMenu}>
                                            <input
                                                type="text"
                                                className={styles.dropdownSearch}
                                                placeholder="Search departments..."
                                                value={departmentSearchTerm}
                                                onChange={(e) => setDepartmentSearchTerm(e.target.value)}
                                                autoFocus
                                            />
                                            <div className={styles.dropdownList}>
                                                {filteredDepartments.length > 0 ? (
                                                    filteredDepartments.map((department) => (
                                                        <div
                                                            key={department.value}
                                                            className={styles.dropdownItem}
                                                            onClick={() => handleDepartmentSelect(department)}
                                                        >
                                                            {department.label}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className={styles.dropdownNoResults}>
                                                        No departments found
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className={styles.dropdownAddNew}
                                                onClick={handleAddNewDepartment}
                                            >
                                                <Icon icon="ic:baseline-plus" className={styles.addIcon} />
                                                Add new department
                                            </div>
                                        </div>
                                    )}
                                    <input
                                        type="hidden"
                                        name="department"
                                        value={selectedDepartment?.value || ''}
                                    />
                                </div>
                            </div>
                            <div className='col-4 mb-20'>
                                <label
                                    htmlFor='desc'
                                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                                >
                                    Job Roles
                                </label>
                                <div className={styles.dropdownContainer} ref={jobRoleDropdownRef}>
                                    <button
                                        type="button"
                                        className={`form-control radius-8 ${styles.dropdownButton}`}
                                        onClick={() => setIsJobRoleDropdownOpen(!isJobRoleDropdownOpen)}
                                    >
                                        <span className={selectedJobRole ? '' : 'text-secondary-light'}>
                                            {selectedJobRole ? selectedJobRole.label : 'Select Job Role'}
                                        </span>
                                        <Icon 
                                            icon={isJobRoleDropdownOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'} 
                                            className="text-secondary-light"
                                        />
                                    </button>
                                    {isJobRoleDropdownOpen && (
                                        <div className={styles.dropdownMenu}>
                                            <input
                                                type="text"
                                                className={styles.dropdownSearch}
                                                placeholder="Search job roles..."
                                                value={jobRoleSearchTerm}
                                                onChange={(e) => setJobRoleSearchTerm(e.target.value)}
                                                autoFocus
                                            />
                                            <div className={styles.dropdownList}>
                                                {filteredJobRoles.length > 0 ? (
                                                    filteredJobRoles.map((jobRole) => (
                                                        <div
                                                            key={jobRole.value}
                                                            className={styles.dropdownItem}
                                                            onClick={() => handleJobRoleSelect(jobRole)}
                                                        >
                                                            {jobRole.label}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className={styles.dropdownNoResults}>
                                                        No job roles found
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className={styles.dropdownAddNew}
                                                onClick={handleAddNewJobRole}
                                            >
                                                <Icon icon="ic:baseline-plus" className={styles.addIcon} />
                                                Add new job role
                                            </div>
                                        </div>
                                    )}
                                    <input
                                        type="hidden"
                                        name="jobRole"
                                        value={selectedJobRole?.value || ''}
                                    />
                                </div>
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
        </> 
    );
}