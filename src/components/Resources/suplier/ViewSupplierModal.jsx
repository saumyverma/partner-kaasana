"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const ViewSupplierModal = ({ supplier, onEdit }) => {
  const [supplierData, setSupplierData] = useState({
    companyName: "ABC Company",
    country: "USA",
    state: "California",
    city: "Los Angeles",
    zipcode: "90001",
    address: "123 Main Street, Los Angeles, CA 90001",
    bookingMethod: "Online",
    productServices: "Product A, Product B",
    locationOfOperation: "Location 1",
    locationOperationCity: "City 1",
    contactDetails: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        designation: "Manager",
        whatsappPhone: "+1234567890",
      },
    ],
  });

  useEffect(() => {
    if (supplier) {
      setSupplierData(supplier);
    }
  }, [supplier]);

  const handleClose = () => {
    const modalElement = document.getElementById('viewSupplierModal');
    if (modalElement) {
      if (typeof window !== 'undefined' && window.bootstrap && window.bootstrap.Modal) {
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      } else {
        // Manual cleanup
        modalElement.classList.remove('show');
        modalElement.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrop = document.getElementById('modalBackdrop');
        if (backdrop) {
          backdrop.remove();
        }
      }
    }
  };

  return (
    <div
      className='modal fade'
      id='viewSupplierModal'
      tabIndex={-1}
      aria-labelledby='viewSupplierModalLabel'
      aria-hidden='true'
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target.id === 'viewSupplierModal') {
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
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='viewSupplierModalLabel'>
              Supplier Details
            </h1>
            <button
              type='button'
              className='btn-close'
              onClick={handleClose}
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <div className='row gy-3'>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Company Name:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.companyName}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Country:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.country}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>State:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.state}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>City:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.city}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Zipcode:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.zipcode}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Booking Method:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.bookingMethod}</span>
                </div>
              </div>
              <div className='col-12'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Address:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.address}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Product Services:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.productServices}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Location of Operation:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.locationOfOperation}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Location Operation City:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{supplierData.locationOperationCity}</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className='mt-24 pt-24 border-top'>
              <h6 className='text-lg fw-semibold text-primary-light mb-16'>Contact Details</h6>
              <div className='row gy-3'>
                {supplierData.contactDetails?.map((contact, index) => (
                  <div key={contact.id || index} className='col-12 border radius-8 p-16'>
                    <h6 className='text-md fw-semibold text-primary-light mb-12'>Contact {index + 1}</h6>
                    <div className='row gy-2'>
                      <div className='col-6'>
                        <div className='d-flex align-items-start gap-2'>
                          <span className='text-secondary-light text-sm w-120-px text-nowrap'>Name:</span>
                          <span className='text-primary-light text-sm flex-grow-1'>{contact.name}</span>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='d-flex align-items-start gap-2'>
                          <span className='text-secondary-light text-sm w-120-px text-nowrap'>Email:</span>
                          <span className='text-primary-light text-sm flex-grow-1 text-break'>{contact.email}</span>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='d-flex align-items-start gap-2'>
                          <span className='text-secondary-light text-sm w-120-px text-nowrap'>Phone:</span>
                          <span className='text-primary-light text-sm flex-grow-1'>{contact.phone}</span>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='d-flex align-items-start gap-2'>
                          <span className='text-secondary-light text-sm w-120-px text-nowrap'>Designation:</span>
                          <span className='text-primary-light text-sm flex-grow-1'>{contact.designation}</span>
                        </div>
                      </div>
                      {contact.whatsappPhone && (
                        <div className='col-6'>
                          <div className='d-flex align-items-start gap-2'>
                            <span className='text-secondary-light text-sm w-120-px text-nowrap'>WhatsApp:</span>
                            <span className='text-primary-light text-sm flex-grow-1'>{contact.whatsappPhone}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
              <button
                type='button'
                className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                onClick={() => {
                  handleClose();
                  if (onEdit && supplierData) {
                    setTimeout(() => {
                      onEdit(supplierData);
                    }, 300);
                  }
                }}
              >
                Edit Supplier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSupplierModal;

