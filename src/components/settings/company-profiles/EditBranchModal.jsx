"use client";

const EditBranchModal = () => {
  return (
    <div
      className='modal fade'
      id='editBranchModal'
      tabIndex={-1}
      aria-labelledby='editBranchModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editBranchModalLabel'>
              Edit Branch
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
                    Branch Code <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Branch Code'
                    defaultValue='BR001'
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Branch Name <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Branch Name'
                    defaultValue='New York Branch'
                  />
                </div>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Address <span className='text-danger-600'>*</span>
                  </label>
                  <textarea
                    className='form-control radius-8'
                    rows={3}
                    placeholder='Enter Branch Address'
                    defaultValue='456 Branch Avenue, New York, NY 10002'
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Email <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='email'
                    className='form-control radius-8'
                    placeholder='Enter Branch Email'
                    defaultValue='ny.branch@travelagency.com'
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Phone <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='tel'
                    className='form-control radius-8'
                    placeholder='Enter Phone Number'
                    defaultValue='+1 (212) 555-1234'
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Year of Corporation <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='number'
                    className='form-control radius-8'
                    placeholder='Enter Year'
                    min='1900'
                    max={new Date().getFullYear()}
                    defaultValue='2015'
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Tax & Trade Number <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Tax & Trade Number'
                    defaultValue='TAX-NY-2015-789012'
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBranchModal;

