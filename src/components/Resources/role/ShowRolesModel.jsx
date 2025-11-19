import React from 'react'
import styles from './ShowRolesModel.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ShowRolesModal({ showRolesModal, setShowRolesModal, departmentsList, jobRolesList, permissionsList }) {

    if (!showRolesModal) return null;

    const handleClose = () => {
        setShowRolesModal(false);
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
                    className={styles.modalContent}
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
                                <div className='col-4 mb-20'>
                                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                                        Department
                                    </label>
                                    <select
                                        className="form-control radius-8 form-select"
                                        id="department"
                                        disabled
                                        defaultValue="1"
                                    >
                                        {departmentsList.map((department) => (
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
                                        disabled
                                        defaultValue="Admin"
                                    >
                                        {jobRolesList.map((jobRole) => (
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
                                        disabled
                                        defaultValue="Marketing"
                                    />
                                </div>

                                <div className='col-12 mb-20'>
                                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                                        Permissions
                                    </label>
                                    <div className='row g-3'>
                                        {permissionsList && permissionsList.length > 0 ? (() => {
                                            // Finance modules to group together
                                            const financeModules = ['Cost Sheet', 'Quotes', 'Invoices'];
                                            
                                            // Group permissions: parent modules first, then their children
                                            const allParentModules = permissionsList.filter(p => p.parent_id === 0 && p.features !== 'Dashboard').sort((a, b) => a.menu_order - b.menu_order);
                                            
                                            // Separate finance modules from other modules
                                            const financeParentModules = allParentModules.filter(p => financeModules.includes(p.features));
                                            const otherParentModules = allParentModules.filter(p => !financeModules.includes(p.features));
                                            
                                            const childModules = permissionsList.filter(p => p.parent_id !== 0);

                                            // Create Finance card if finance modules exist
                                            const financeCard = financeParentModules.length > 0 ? (
                                                <div key="finance" className='col-12 col-md-6 col-lg-4'>
                                                    <div className='card border radius-8 h-100'>
                                                        <div className='card-body p-16'>
                                                            {/* Finance Header */}
                                                            <div className='d-flex align-items-center justify-content-between mb-3 border-bottom pb-12'>
                                                                <h6 className='fw-bold text-primary-light text-sm mb-0'>
                                                                    Finance
                                                                </h6>
                                                            </div>
                                                            
                                                            {/* Finance Modules as Children */}
                                                            <div className='d-flex flex-column gap-2 mt-3' style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                                                {financeParentModules.map((financeModule) => (
                                                                    <div key={financeModule.id} className='d-flex align-items-center justify-content-between py-8 px-12 bg-neutral-50 radius-8'>
                                                                        <span className='text-sm text-secondary-light'>
                                                                            {financeModule.features}
                                                                        </span>
                                                                        <div className='d-flex align-items-center gap-2'>
                                                                            <div className='d-flex align-items-center gap-1'>
                                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                                    <Icon 
                                                                                        icon="solar:check-circle-bold" 
                                                                                        className="text-primary-600"
                                                                                        width="14"
                                                                                        height="14"
                                                                                    />
                                                                                </div>
                                                                                <span className='text-xs text-secondary-light'>R</span>
                                                                            </div>
                                                                            <div className='d-flex align-items-center gap-1'>
                                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                                    <Icon 
                                                                                        icon="solar:check-circle-bold" 
                                                                                        className="text-primary-600"
                                                                                        width="14"
                                                                                        height="14"
                                                                                    />
                                                                                </div>
                                                                                <span className='text-xs text-secondary-light'>W</span>
                                                                            </div>
                                                                            <div className='d-flex align-items-center gap-1'>
                                                                                <div className='d-flex justify-content-center align-items-center'>
                                                                                    <Icon 
                                                                                        icon="solar:check-circle-bold" 
                                                                                        className="text-primary-600"
                                                                                        width="14"
                                                                                        height="14"
                                                                                    />
                                                                                </div>
                                                                                <span className='text-xs text-secondary-light'>B</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null;

                                            // Map other parent modules
                                            const otherCards = otherParentModules.map((parent) => {
                                                const children = childModules
                                                    .filter(child => child.parent_id === parent.id)
                                                    .sort((a, b) => a.menu_order - b.menu_order);

                                                // Cards that should not have scrolling
                                                const noScrollCards = ['Masters', 'Setting'];
                                                const shouldHaveScroll = !noScrollCards.includes(parent.features);

                                                return (
                                                    <div key={parent.id} className='col-12 col-md-6 col-lg-4'>
                                                        <div className='card border radius-8 h-100'>
                                                            <div className='card-body p-16'>
                                                                {/* Parent Module Header */}
                                                                <div className={`d-flex align-items-center justify-content-between mb-3 ${children.length > 0 ? 'border-bottom pb-12' : ''}`}>
                                                                    <h6 className='fw-bold text-primary-light text-sm mb-0'>
                                                                        {parent.features}
                                                                    </h6>
                                                                </div>
                                                                
                                                                {/* Child Modules */}
                                                                {children.length > 0 && (
                                                                    <div className='d-flex flex-column gap-2 mt-3' style={shouldHaveScroll ? { maxHeight: '300px', overflowY: 'auto' } : {}}>
                                                                        {children.map((child) => (
                                                                            <div key={child.id} className='d-flex align-items-center justify-content-between py-8 px-12 bg-neutral-50 radius-8'>
                                                                                <span className='text-sm text-secondary-light'>
                                                                                    {child.features}
                                                                                </span>
                                                                                <div className='d-flex align-items-center gap-2'>
                                                                                    <div className='d-flex align-items-center gap-1'>
                                                                                        <div className='d-flex justify-content-center align-items-center'>
                                                                                            <Icon 
                                                                                                icon="solar:check-circle-bold" 
                                                                                                className="text-primary-600"
                                                                                                width="14"
                                                                                                height="14"
                                                                                            />
                                                                                        </div>
                                                                                        <span className='text-xs text-secondary-light'>R</span>
                                                                                    </div>
                                                                                    <div className='d-flex align-items-center gap-1'>
                                                                                        <div className='d-flex justify-content-center align-items-center'>
                                                                                            <Icon 
                                                                                                icon="solar:check-circle-bold" 
                                                                                                className="text-primary-600"
                                                                                                width="14"
                                                                                                height="14"
                                                                                            />
                                                                                        </div>
                                                                                        <span className='text-xs text-secondary-light'>W</span>
                                                                                    </div>
                                                                                    <div className='d-flex align-items-center gap-1'>
                                                                                        <div className='d-flex justify-content-center align-items-center'>
                                                                                            <Icon 
                                                                                                icon="solar:check-circle-bold" 
                                                                                                className="text-primary-600"
                                                                                                width="14"
                                                                                                height="14"
                                                                                            />
                                                                                        </div>
                                                                                        <span className='text-xs text-secondary-light'>B</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            });

                                            return (
                                                <>
                                                    {financeCard}
                                                    {otherCards}
                                                </>
                                            );
                                        })() : (
                                            <div className='col-12'>
                                                <div className='card border radius-8'>
                                                    <div className='card-body p-24 text-center'>
                                                        <span className='text-secondary-light'>No permissions available</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                                    <button
                                        type='reset'
                                        className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8'
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </button>
                                    {/* <button
                                type='submit'
                                className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                            >
                                Save
                            </button> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}