import React from "react";

export default function AddQuotesModal() {
  return (
    <div
      className='modal fade'
      id='addQuotesModal'
      tabIndex='-1'
      aria-labelledby='addQuotesModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='addQuotesModalLabel'>
              Add Quotes
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body'>  
            <div className='row g-3'>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Quotes No</label>
                <input type='text' className='form-control' placeholder='#000000' />
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Customer Name</label>
                <input type='text' className='form-control' placeholder='Customer Name' />
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Issued Date</label>
                <input type='date' className='form-control' />
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Amount</label>
                <input type='number' className='form-control' placeholder='0.00' />
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Quote Date</label>
                <input type='date' className='form-control' />
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Customer Type</label>
                <select className='form-select'>
                  <option value='B2B'>B2B</option>
                  <option value='B2C'>B2C</option>
                </select>
              </div>
                <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Trip Duration</label>
                <select className='form-select'>
                  <option value='2 Nights'>2 Nights</option>
                  <option value='3 Nights'>3 Nights</option>
                  <option value='4 Nights'>4 Nights</option>
                  <option value='5 Nights'>5 Nights</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Quote Created By</label>
                <select className='form-select'>
                  <option value='Manish'>Manish</option>
                  <option value='John Doe'>John Doe</option>
                </select>
              </div>
              <div className='col-md-6'>
                <label className='form-label text-sm fw-medium'>Travel Date</label>
                <input type='date' className='form-control' />
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-sm btn-light'
              data-bs-dismiss='modal'
            >
              Cancel
            </button>
            <button type='button' className='btn btn-sm btn-primary-600'>
              Save Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


