import React from "react";

export default function AddInvoiceModal() {
  return (
    <div
      className='modal fade'
      id='addInvoiceModal'
      tabIndex='-1'
      aria-labelledby='addInvoiceModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='addInvoiceModalLabel'>
              Add Invoice
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
                <label className='form-label text-sm fw-medium'>Invoice No</label>
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
                <label className='form-label text-sm fw-medium'>Status</label>
                <select className='form-select'>
                  <option value='paid'>Paid</option>
                  <option value='pending'>Pending</option>
                  <option value='overdue'>Overdue</option>
                </select>
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
              Save Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


