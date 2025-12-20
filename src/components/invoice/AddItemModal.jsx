"use client";
import React, { useState, useEffect } from "react";

const AddItemModal = ({ isOpen, onClose, onSave, selectedService }) => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [tax, setTax] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setItemName("");
      setDescription("");
      setUnitPrice("");
      setTax("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({
        name: itemName,
        description,
        rate: parseFloat(unitPrice) || 0,
        tax: parseFloat(tax) || 0,
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className='modal fade show d-block'
        role='dialog'
        aria-modal='true'
        aria-labelledby='addItemModalLabel'
        data-nested='true'
        style={{ zIndex: 1070, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <div className='modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable' style={{ zIndex: 1071 }}>
          <div className='modal-content border radius-16 bg-base' style={{ zIndex: 1071 }}>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addItemModalLabel'>
                Add New Item{selectedService ? ` - ${selectedService.label}` : ""}
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
                <div className='row gy-3'>
                  <div className='col-12'>
                    <label className='form-label'>Item Name*</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter item name'
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Description</label>
                    <textarea
                      className='form-control'
                      rows={3}
                      placeholder='Enter item description'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className='col-md-6'>
                    <label className='form-label'>Unit Price*</label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder='0.00'
                      min='0'
                      step='0.01'
                      value={unitPrice}
                      onChange={(e) => setUnitPrice(e.target.value)}
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <label className='form-label'>Tax %</label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder='0'
                      min='0'
                      step='0.01'
                      value={tax}
                      onChange={(e) => setTax(e.target.value)}
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
                Save Item
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal-backdrop fade show'
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', zIndex: 1065 }}
        onClick={onClose}
      />
    </>
  );
};

export default AddItemModal;

