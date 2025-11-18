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
                                        <label
                                            htmlFor='jobTitle'
                                            className='form-label fw-semibold text-primary-light text-sm mb-8'
                                        >
                                            Permissions
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control radius-8'
                                            placeholder='Enter Job Title'
                                            disabled
                                            defaultValue="Marketing"
                                        />
                                    </div>


                                    <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
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
                                    </div>
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