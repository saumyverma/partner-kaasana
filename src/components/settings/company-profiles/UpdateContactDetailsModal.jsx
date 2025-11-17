"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

const UpdateContactDetailsModal = ({ contactSections, addContactSection, removeContactSection }) => {
  return (
    <div
      className='modal fade'
      id='updateContactDetailsModal'
      tabIndex={-1}
      aria-labelledby='updateContactDetailsModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='updateContactDetailsModalLabel'>
              Update Contact Details
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
              <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
                {contactSections.map((contact, index) => (
                  <div key={contact.id} className='border radius-8 p-16 mb-16'>
                    <div className='d-flex align-items-center justify-content-between mb-16'>
                      <h6 className='text-lg mb-0 text-primary-light'>Contact Details {index + 1}</h6>
                      <button
                        type='button'
                        className='btn p-0 border-0 bg-transparent'
                        onClick={() => removeContactSection(contact.id)}
                        aria-label='Remove Contact'
                      >
                        <Icon icon='solar:trash-bin-trash-bold' className='text-danger-600 text-md cursor-pointer' />
                      </button>
                    </div>
                    <div className='row'>
                      <div className='col-6 mb-20'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          Full Name <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          placeholder='Enter Full Name'
                          defaultValue={contact.fullName}
                        />
                      </div>
                      <div className='col-6 mb-20'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          Email <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='email'
                          className='form-control radius-8'
                          placeholder='Enter Email'
                          defaultValue={contact.email}
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
                          defaultValue={contact.designation}
                        />
                      </div>
                      <div className='col-6 mb-20'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          Contact Number <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='tel'
                          className='form-control radius-8'
                          placeholder='Enter Contact Number'
                          defaultValue={contact.contactNumber}
                        />
                      </div>
                      <div className='col-6 mb-20'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          WhatsApp Number <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='tel'
                          className='form-control radius-8'
                          placeholder='Enter WhatsApp Number'
                          defaultValue={contact.whatsappNumber}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add New Contact Button */}
                <div className='text-center mb-16'>
                  <button
                    type='button'
                    className='btn btn-outline-primary border border-primary-600 text-primary-600 text-sm px-24 py-10 radius-8 d-inline-flex align-items-center gap-2'
                    onClick={addContactSection}
                  >
                    <Icon icon='solar:add-circle-bold' className='text-primary-600 text-lg' />
                    Add Another Contact
                  </button>
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

export default UpdateContactDetailsModal;

