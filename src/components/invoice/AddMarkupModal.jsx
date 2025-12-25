"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";

const AddMarkupModal = ({ isOpen, onClose, onSave, currentMarkup, menuPortalTarget }) => {
  const [markupType, setMarkupType] = useState(currentMarkup?.type ? { value: currentMarkup.type, label: currentMarkup.type === "fixed" ? "Fixed" : "Percentage" } : null);
  const [markupValue, setMarkupValue] = useState(currentMarkup?.value || "");

  const markupTypeOptions = [
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
  ];

  useEffect(() => {
    if (isOpen && currentMarkup) {
      setMarkupType(currentMarkup.type ? { value: currentMarkup.type, label: currentMarkup.type === "fixed" ? "Fixed" : "Percentage" } : null);
      setMarkupValue(currentMarkup.value || "");
    } else if (!isOpen) {
      setMarkupType(null);
      setMarkupValue("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (markupType && markupValue) {
      if (onSave) {
        onSave({
          type: markupType.value,
          value: parseFloat(markupValue) || 0,
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
        aria-labelledby='addMarkupModalLabel'
        data-nested='true'
        style={{ zIndex: 1080, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <div className='modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable' style={{ zIndex: 1081 }}>
          <div className='modal-content border radius-16 bg-base' style={{ zIndex: 1081 }}>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addMarkupModalLabel'>
                Add Markup
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
                    <label className='form-label'>Markup Type*</label>
                    <Select
                      value={markupType}
                      onChange={setMarkupType}
                      options={markupTypeOptions}
                      placeholder='Select markup type'
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
                    <label className='form-label'>Markup Value*</label>
                    <input
                      type='number'
                      className='form-control'
                      placeholder={markupType?.value === "percentage" ? "0" : "0.00"}
                      min='0'
                      step={markupType?.value === "percentage" ? "0.01" : "0.01"}
                      max={markupType?.value === "percentage" ? "100" : undefined}
                      value={markupValue}
                      onChange={(e) => setMarkupValue(e.target.value)}
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
                disabled={!markupType || !markupValue}
              >
                Apply Markup
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

export default AddMarkupModal;

