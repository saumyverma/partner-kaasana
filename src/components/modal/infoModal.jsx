"use client"
import React from 'react'

export default function InfoModal() {
  return (
    
    <div
    className='modal fade'
    id='exampleModal'
    tabIndex={-1}
    aria-labelledby='exampleModalLabel'
    aria-hidden='true'
  >
    <div className='modal-dialog modal-lg modal-dialog modal-dialog-centered'>
      <div className='modal-content radius-16 bg-base'>
        <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
          <h1 className='modal-title fs-5' id='exampleModalLabel'>
            Add New Role
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
                  Role Name
                </label>
                <input
                  type='text'
                  className='form-control radius-8'
                  placeholder='Enter Role  Name'
                />
              </div>
              <div className='col-12 mb-20'>
                <label
                  htmlFor='desc'
                  className='form-label fw-semibold text-primary-light text-sm mb-8'
                >
                  Description
                </label>
                <textarea
                  className='form-control'
                  id='desc'
                  rows={4}
                  cols={50}
                  placeholder='Write some text'
                  defaultValue={""}
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
 
  )
}