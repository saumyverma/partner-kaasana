import React from 'react'

export default function ShowRoles({ departmentsList, jobRolesList, permissionsList }) {
    return (
        <>
            {/* Modal Start */}
            <div
                className='modal fade'
                id='ShowRoles'
                tabIndex={-1}
                aria-labelledby='ShowRoles'
                aria-hidden='true'
            >
                <div className='modal-dialog modal-xl modal-dialog modal-dialog-centered'>
                    <div className='modal-content radius-16 bg-base'>
                        <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
                            <h1 className='modal-title fs-5' id='ShowRoles'>
                                Role Details
                            </h1>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            />
                        </div>
                        <div className='modal-body p-24'>
                            <form action='#'>
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
                                        <div className='card border radius-8'>
                                            <div className='card-body p-0'>
                                                <div className='table-responsive'>
                                                    <table className='table table-hover mb-0'>
                                                        <thead className='bg-neutral-100'>
                                                            <tr>
                                                                <th className='fw-semibold text-primary-light text-sm py-12 px-16 border-bottom'>
                                                                    Module
                                                                </th>
                                                                <th className='fw-semibold text-primary-light text-sm py-12 px-16 border-bottom text-center'>
                                                                    <div className='d-flex align-items-center justify-content-center gap-2'>
                                                                        <div className='form-check d-flex justify-content-center align-items-center'>
                                                                            <input
                                                                                className='form-check-input'
                                                                                type='checkbox'
                                                                                id='select-all-read'
                                                                                disabled
                                                                            />
                                                                        </div>
                                                                        <span className='fw-semibold'>Read</span>
                                                                    </div>
                                                                </th>
                                                                <th className='fw-semibold text-primary-light text-sm py-12 px-16 border-bottom text-center'>
                                                                    <div className='d-flex align-items-center justify-content-center gap-2'>
                                                                        <div className='form-check d-flex justify-content-center align-items-center'>
                                                                            <input
                                                                                className='form-check-input'
                                                                                type='checkbox'
                                                                                id='select-all-write'
                                                                                disabled
                                                                            />
                                                                        </div>
                                                                        <span className='fw-semibold'>Write</span>
                                                                    </div>
                                                                </th>
                                                                <th className='fw-semibold text-primary-light text-sm py-12 px-16 border-bottom text-center'>
                                                                    <div className='d-flex align-items-center justify-content-center gap-2'>
                                                                        <div className='form-check d-flex justify-content-center align-items-center'>
                                                                            <input
                                                                                className='form-check-input'
                                                                                type='checkbox'
                                                                                id='select-all-both'
                                                                                disabled
                                                                            />
                                                                        </div>
                                                                        <span className='fw-semibold'>Both</span>
                                                                    </div>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {permissionsList && permissionsList.length > 0 ? (() => {
                                                                // Group permissions: parent modules first, then their children
                                                                const parentModules = permissionsList.filter(p => p.parent_id === 0).sort((a, b) => a.menu_order - b.menu_order);
                                                                const childModules = permissionsList.filter(p => p.parent_id !== 0);

                                                                // Create a flat list: parent followed by its children
                                                                const orderedList = [];
                                                                parentModules.forEach(parent => {
                                                                    orderedList.push(parent);
                                                                    const children = childModules
                                                                        .filter(child => child.parent_id === parent.id)
                                                                        .sort((a, b) => a.menu_order - b.menu_order);
                                                                    orderedList.push(...children);
                                                                });

                                                                return orderedList.map((permission) => {
                                                                    const isParentModule = permission.parent_id === 0;
                                                                    // Modules that should have checkboxes even if they are parent modules
                                                                    const modulesWithCheckboxes = ['Dashboard', 'Cost Sheet', 'Quotes', 'Invoices'];
                                                                    const shouldShowCheckboxes = !isParentModule || modulesWithCheckboxes.includes(permission.features);

                                                                    return (
                                                                        <tr key={permission.id} className='border-bottom'>
                                                                            <td className='py-12 px-16'>
                                                                                <span className={`text-sm ${isParentModule ? 'fw-bold text-primary-light' : 'text-secondary-light'}`} style={!isParentModule ? { paddingLeft: '16px' } : {}}>
                                                                                    {permission.features}
                                                                                </span>
                                                                            </td>
                                                                            {shouldShowCheckboxes ? (
                                                                                <>
                                                                                    <td className='py-12 px-16 text-center'>
                                                                                        <div className='form-check d-flex justify-content-center align-items-center'>
                                                                                            <input
                                                                                                className='form-check-input'
                                                                                                type='checkbox'
                                                                                                id={`read-${permission.id}`}
                                                                                                disabled
                                                                                            />
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className='py-12 px-16 text-center'>
                                                                                        <div className='form-check d-flex justify-content-center align-items-center'>
                                                                                            <input
                                                                                                className='form-check-input'
                                                                                                type='checkbox'
                                                                                                id={`write-${permission.id}`}
                                                                                                disabled
                                                                                            />
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className='py-12 px-16 text-center'>
                                                                                        <div className='form-check d-flex justify-content-center align-items-center'>
                                                                                            <input
                                                                                                className='form-check-input'
                                                                                                type='checkbox'
                                                                                                id={`both-${permission.id}`}
                                                                                                disabled
                                                                                            />
                                                                                        </div>
                                                                                    </td>
                                                                                </>
                                                                            ) : (
                                                                                <td colSpan={3} className='py-12 px-16'></td>
                                                                            )}
                                                                        </tr>
                                                                    );
                                                                });
                                                            })() : (
                                                                <tr>
                                                                    <td colSpan={4} className='py-12 px-16 text-center text-secondary-light'>
                                                                        No permissions available
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                                        <button
                                            type='reset'
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
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal End */}
        </>
    );
}