"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import AddSingleLeadForm from "./AddSingleLeadForm";

const AddLeadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className='modal fade show d-block'
        role='dialog'
        aria-modal='true'
        aria-labelledby='addLeadModalLabel'
        style={{ zIndex: 1055, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <div className='modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addLeadModalLabel'>
                Add New Lead
              </h1>
              <button
                type='button'
                className='btn-close'
                onClick={onClose}
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <AddSingleLeadForm />
            </div>
            <div className='modal-footer py-16 px-24 border border-bottom-0 border-start-0 border-end-0'>
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
                onClick={onClose}
              >
                Save Lead
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal-backdrop fade show'
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', zIndex: 1050 }}
        onClick={onClose}
      />
    </>
  );
};

export default AddLeadModal;

