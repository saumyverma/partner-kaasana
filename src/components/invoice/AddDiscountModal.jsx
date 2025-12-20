"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";

const AddDiscountModal = ({ isOpen, onClose, onSave, currentDiscount, menuPortalTarget }) => {
  const [discountType, setDiscountType] = useState(currentDiscount?.type ? { value: currentDiscount.type, label: currentDiscount.type === "fixed" ? "Fixed" : "Percentage" } : null);
  const [discountValue, setDiscountValue] = useState(currentDiscount?.value || "");

  const discountTypeOptions = [
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
  ];

  useEffect(() => {
    if (isOpen && currentDiscount) {
      setDiscountType(currentDiscount.type ? { value: currentDiscount.type, label: currentDiscount.type === "fixed" ? "Fixed" : "Percentage" } : null);
      setDiscountValue(currentDiscount.value || "");
    } else if (!isOpen) {
      setDiscountType(null);
      setDiscountValue("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (discountType && discountValue) {
      if (onSave) {
        onSave({
          type: discountType.value,
          value: parseFloat(discountValue) || 0,
        });
      }
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className='modal fade show d-block'
        role='dialog'
        aria-modal='true'
        aria-labelledby='addDiscountModalLabel'
        data-nested='true'
        style={{ zIndex: 1080, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <div className='modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable' style={{ zIndex: 1081 }}>
          <div className='modal-content border radius-16 bg-base' style={{ zIndex: 1081 }}>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addDiscountModalLabel'>
                Add Discount
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
                    <label className='form-label'>Discount Type*</label>
                    <Select
                      value={discountType}
                      onChange={setDiscountType}
                      options={discountTypeOptions}
                      placeholder='Select discount type'
                      isClearable
                      classNamePrefix='select'
                      menuPortalTarget={menuPortalTarget}
                      menuPosition='fixed'
                      styles={{
                        control: (base) => ({
                          ...base,
                          minHeight: "38px",
                        }),
                      }}
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Discount Value*</label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder={discountType?.value === "percentage" ? "0" : "0.00"}
                      min='0'
                      step={discountType?.value === "percentage" ? "0.01" : "0.01"}
                      max={discountType?.value === "percentage" ? "100" : undefined}
                      value={discountValue}
                      onChange={(e) => setDiscountValue(e.target.value)}
                      required
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
                disabled={!discountType || !discountValue}
              >
                Apply Discount
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal-backdrop fade show'
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', zIndex: 1075 }}
        onClick={onClose}
      />
    </>
  );
};

export default AddDiscountModal;
