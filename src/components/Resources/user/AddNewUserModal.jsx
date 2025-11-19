"use client";

const AddNewUserModal = () => {
  return (
    <div
      className='modal fade'
      id='addNewUserModal'
      tabIndex={-1}
      aria-labelledby='addNewUserModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addNewUserModalLabel'>
              Add New User
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
                  <select className='form-select radius-8'>
                    <option value=''>Select Reporting Manager</option>
                    <option value='manager1'>Manager 1</option>
                    <option value='manager2'>Manager 2</option>
                    <option value='manager3'>Manager 3</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Branch <span className='text-danger-600'>*</span>
                  </label>
                  <select className='form-select radius-8'>
                    <option value=''>Select Branch</option>
                    <option value='branch1'>Branch 1</option>
                    <option value='branch2'>Branch 2</option>
                    <option value='branch3'>Branch 3</option>
                  </select>
                </div>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Assignment Roles <span className='text-danger-600'>*</span>
                  </label>
                  <select className='form-select radius-8'>
                    <option value=''>Select Role</option>
                    <option value='role1'>Role 1</option>
                    <option value='role2'>Role 2</option>
                    <option value='role3'>Role 3</option>
                    <option value='role4'>Role 4</option>
                  </select>
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
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUserModal;

