"use client";
import React, { useState, useEffect } from "react";

const AddCustomerModal = ({ isOpen, onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setCustomerName("");
      setEmail("");
      setPhone("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic can be added here
    onClose();
  };

  return (
    <>
      <div
        className='modal fade show d-block'
        role='dialog'
        aria-modal='true'
        aria-labelledby='addCustomerModalLabel'
        data-nested='true'
        style={{ zIndex: 1070, position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        <div className='modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable' style={{ zIndex: 1071 }}>
          <div className='modal-content border radius-16 bg-base' style={{ zIndex: 1071 }}>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addCustomerModalLabel'>
                Add New Customer
              </h1>
              <button
                type='button'
                className='btn-close'
                onClick={onClose}
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form onSubmit={handleSubmit}>
                <div className='row g-3'>
                  <div className='col-12'>
                    <label className='form-label text-sm fw-medium'>Customer Name</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Customer Name'
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <label className='form-label text-sm fw-medium'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='email@example.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='col-12'>
                    <label className='form-label text-sm fw-medium'>Phone</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Phone Number'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className='modal-footer px-24 pb-24 border-0'>
              <button
                type='button'
                className='btn btn-neutral-500 border-neutral-100 px-32'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-primary-600 px-32'
                onClick={handleSubmit}
              >
                Save Customer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal-backdrop fade show'
        style={{ backgroundColor: "rgba(15, 23, 42, 0.65)", zIndex: 1065 }}
        onClick={onClose}
      />
    </>
  );
};

export default AddCustomerModal;

