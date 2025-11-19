"use client";

const EditCompanyInfoModal = () => {
  return (
    <div
      className='modal fade'
      id='editCompanyInfoModal'
      tabIndex={-1}
      aria-labelledby='editCompanyInfoModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editCompanyInfoModalLabel'>
              Edit Company Info
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
                    placeholder='Enter Company Name'
                    defaultValue='Travel Agency Inc.'
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Company Type <span className='text-danger-600'>*</span>
                  </label>
                  <select className='form-control radius-8 form-select' defaultValue='Travel Agency'>
                    <option value='Travel Agency'>Travel Agency</option>
                    <option value='Tour Operator'>Tour Operator</option>
                    <option value='Hotel Chain'>Hotel Chain</option>
                    <option value='Transportation'>Transportation</option>
                  </select>
                </div>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Address <span className='text-danger-600'>*</span>
                  </label>
                  <textarea
                    className='form-control radius-8'
                    rows={3}
                    placeholder='Enter Company Address'
                    defaultValue='123 Business Street, Suite 100, New York, NY 10001'
                  />
                </div>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Tax Trade Number <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Tax Trade Number'
                    defaultValue='TAX-2024-123456'
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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompanyInfoModal;

