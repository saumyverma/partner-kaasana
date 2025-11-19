"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const EditSupplierModal = ({ supplier }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    address: "",
    bookingMethod: "",
    productServices: "",
    locationOfOperation: "",
    locationOperationCity: "",
  });

  const [contactSections, setContactSections] = useState([
    {
      id: 1,
      name: "",
      email: "",
      phone: "",
      designation: "",
      whatsappPhone: "",
    },
  ]);

  useEffect(() => {
    if (supplier) {
      setFormData({
        companyName: supplier.companyName || "",
        country: supplier.country || "",
        state: supplier.state || "",
        city: supplier.city || "",
        zipcode: supplier.zipcode || "",
        address: supplier.address || "",
        bookingMethod: supplier.bookingMethod || "",
        productServices: supplier.productServices || "",
        locationOfOperation: supplier.locationOfOperation || "",
        locationOperationCity: supplier.locationOperationCity || "",
      });
      if (supplier.contactDetails && supplier.contactDetails.length > 0) {
        setContactSections(
          supplier.contactDetails.map((contact, index) => ({
            id: contact.id || index + 1,
            name: contact.name || "",
            email: contact.email || "",
            phone: contact.phone || "",
            designation: contact.designation || "",
            whatsappPhone: contact.whatsappPhone || "",
          }))
        );
      }
    }
  }, [supplier]);

  const addContactSection = () => {
    const newId = contactSections.length > 0 ? Math.max(...contactSections.map((c) => c.id)) + 1 : 1;
    setContactSections([
      ...contactSections,
      {
        id: newId,
        name: "",
        email: "",
        phone: "",
        designation: "",
        whatsappPhone: "",
      },
    ]);
  };

  const removeContactSection = (id) => {
    if (contactSections.length > 1) {
      setContactSections(contactSections.filter((section) => section.id !== id));
    }
  };

  const updateContactSection = (id, field, value) => {
    setContactSections(
      contactSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const handleClose = () => {
    const modalElement = document.getElementById('editSupplierModal');
    if (modalElement) {
      if (typeof window !== 'undefined' && window.bootstrap) {
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        } else {
          const newModal = new window.bootstrap.Modal(modalElement);
          newModal.hide();
        }
      } else if (typeof window !== 'undefined' && window.$) {
        window.$(modalElement).modal('hide');
      } else {
        // Manual cleanup
        modalElement.classList.remove('show');
        modalElement.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach((backdrop) => backdrop.remove());
      }
    }
  };

  // Listen for Bootstrap modal events to handle cleanup
  useEffect(() => {
    const modalElement = document.getElementById('editSupplierModal');
    if (modalElement) {
      const cleanupBackdrop = () => {
        // Clean up all backdrops (handle multiple scenarios)
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach((backdrop) => backdrop.remove());
        
        // Remove modal-open class and restore body styles
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        
        // Also check for any backdrop with specific IDs
        const specificBackdrop = document.getElementById('editSupplierModalBackdrop');
        if (specificBackdrop) {
          specificBackdrop.remove();
        }
      };

      const handleHide = () => {
        cleanupBackdrop();
      };

      const handleHidden = () => {
        cleanupBackdrop();
      };

      modalElement.addEventListener('hide.bs.modal', handleHide);
      modalElement.addEventListener('hidden.bs.modal', handleHidden);

      return () => {
        modalElement.removeEventListener('hide.bs.modal', handleHide);
        modalElement.removeEventListener('hidden.bs.modal', handleHidden);
      };
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    handleClose();
  };

  return (
    <div
      className='modal fade'
      id='editSupplierModal'
      tabIndex={-1}
      aria-labelledby='editSupplierModalLabel'
      aria-hidden='true'
      onClick={(e) => {
        if (e.target.id === 'editSupplierModal') {
          handleClose();
        }
      }}
    >
      <div className='modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable'>
        <div
          className='modal-content border radius-16 bg-base'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editSupplierModalLabel'>
              Edit Supplier
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              onClick={handleClose}
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Company Name <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Company Name'
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Country <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                  >
                    <option value=''>Select Country</option>
                    <option value='usa'>USA</option>
                    <option value='uk'>UK</option>
                    <option value='india'>India</option>
                    <option value='canada'>Canada</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    State <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                  >
                    <option value=''>Select State</option>
                    <option value='state1'>State 1</option>
                    <option value='state2'>State 2</option>
                    <option value='state3'>State 3</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    City <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  >
                    <option value=''>Select City</option>
                    <option value='city1'>City 1</option>
                    <option value='city2'>City 2</option>
                    <option value='city3'>City 3</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Zipcode <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Zipcode'
                    value={formData.zipcode}
                    onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })}
                    required
                  />
                </div>
                <div className='col-12 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Address <span className='text-danger-600'>*</span>
                  </label>
                  <textarea
                    className='form-control radius-8'
                    placeholder='Enter Address'
                    rows='3'
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Booking Method <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.bookingMethod}
                    onChange={(e) => setFormData({ ...formData, bookingMethod: e.target.value })}
                    required
                  >
                    <option value=''>Select Booking Method</option>
                    <option value='online'>Online</option>
                    <option value='offline'>Offline</option>
                    <option value='both'>Both</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Product Services <span className='text-danger-600'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control radius-8'
                    placeholder='Enter Product Services'
                    value={formData.productServices}
                    onChange={(e) => setFormData({ ...formData, productServices: e.target.value })}
                    required
                  />
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Location of Operation <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.locationOfOperation}
                    onChange={(e) => setFormData({ ...formData, locationOfOperation: e.target.value })}
                    required
                  >
                    <option value=''>Select Location</option>
                    <option value='location1'>Location 1</option>
                    <option value='location2'>Location 2</option>
                    <option value='location3'>Location 3</option>
                  </select>
                </div>
                <div className='col-6 mb-20'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                    Location Operation City <span className='text-danger-600'>*</span>
                  </label>
                  <select
                    className='form-select radius-8'
                    value={formData.locationOperationCity}
                    onChange={(e) => setFormData({ ...formData, locationOperationCity: e.target.value })}
                    required
                  >
                    <option value=''>Select City</option>
                    <option value='city1'>City 1</option>
                    <option value='city2'>City 2</option>
                    <option value='city3'>City 3</option>
                  </select>
                </div>
              </div>

              {/* Contact Details Section */}
              <div className='mt-24 pt-24 border-top'>
                <div className='d-flex align-items-center justify-content-between mb-20'>
                  <h6 className='text-lg fw-semibold text-primary-light mb-0'>
                    Contact Details
                  </h6>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm px-12 py-8 radius-8 d-flex align-items-center gap-2'
                    onClick={addContactSection}
                  >
                    <Icon icon='ic:baseline-plus' className='text-lg' />
                    Add Contact
                  </button>
                </div>
                {contactSections.map((section, index) => (
                  <div key={section.id} className='border radius-8 p-16 mb-16'>
                    <div className='d-flex align-items-center justify-content-between mb-16'>
                      <span className='text-md fw-semibold text-primary-light'>
                        Contact {index + 1}
                      </span>
                      {contactSections.length > 1 && (
                        <button
                          type='button'
                          className='btn btn-outline-danger btn-sm px-12 py-8 radius-8 d-flex align-items-center gap-2'
                          onClick={() => removeContactSection(section.id)}
                        >
                          <Icon icon='mdi:delete-outline' className='text-lg' />
                          Remove
                        </button>
                      )}
                    </div>
                    <div className='row'>
                      <div className='col-6 mb-16'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          Name <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          placeholder='Enter Name'
                          value={section.name}
                          onChange={(e) => updateContactSection(section.id, 'name', e.target.value)}
                          required
                        />
                      </div>
                      <div className='col-6 mb-16'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          Email <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='email'
                          className='form-control radius-8'
                          placeholder='Enter Email'
                          value={section.email}
                          onChange={(e) => updateContactSection(section.id, 'email', e.target.value)}
                          required
                        />
                      </div>
                      <div className='col-6 mb-16'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          Phone <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='tel'
                          className='form-control radius-8'
                          placeholder='Enter Phone'
                          value={section.phone}
                          onChange={(e) => updateContactSection(section.id, 'phone', e.target.value)}
                          required
                        />
                      </div>
                      <div className='col-6 mb-16'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          Designation <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          placeholder='Enter Designation'
                          value={section.designation}
                          onChange={(e) => updateContactSection(section.id, 'designation', e.target.value)}
                          required
                        />
                      </div>
                      <div className='col-12 mb-16'>
                        <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                          WhatsApp Phone
                        </label>
                        <input
                          type='tel'
                          className='form-control radius-8'
                          placeholder='Enter WhatsApp Phone'
                          value={section.whatsappPhone}
                          onChange={(e) => updateContactSection(section.id, 'whatsappPhone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                <button
                  type='button'
                  className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                  data-bs-dismiss='modal'
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                >
                  Update Supplier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSupplierModal;

