"use client";

const EditOperationalInfoModal = () => {
  return (
    <div
      className='modal fade'
      id='editOperationalInfoModal'
      tabIndex={-1}
      aria-labelledby='editOperationalInfoModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editOperationalInfoModalLabel'>
              Edit Operational Information
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
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Product and Services <span className='text-danger-600'>*</span>
                  </label>
                  <textarea
                    className='form-control radius-8'
                    rows={3}
                    placeholder='Enter Products and Services'
                    defaultValue='Hotels, Flights, Packages, Transportation, Visa Services'
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Company Size <span className='text-danger-600'>*</span>
                  </label>
                  <select className='form-control radius-8 form-select' defaultValue='50-100'>
                    <option value='1-10'>1-10 Employees</option>
                    <option value='11-50'>11-50 Employees</option>
                    <option value='50-100'>50-100 Employees</option>
                    <option value='100-500'>100-500 Employees</option>
                    <option value='500+'>500+ Employees</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Booking Method <span className='text-danger-600'>*</span>
                  </label>
                  <select className='form-control radius-8 form-select' defaultValue='Online & Offline'>
                    <option value='Online'>Online Only</option>
                    <option value='Offline'>Offline Only</option>
                    <option value='Online & Offline'>Online & Offline</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Country <span className='text-danger-600'>*</span>
                  </label>
                  <select className='form-control radius-8 form-select' defaultValue='United States'>
                    <option value='United States'>United States</option>
                    <option value='Canada'>Canada</option>
                    <option value='United Kingdom'>United Kingdom</option>
                    <option value='Australia'>Australia</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    City <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter City'
                    defaultValue='New York'
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

export default EditOperationalInfoModal;

