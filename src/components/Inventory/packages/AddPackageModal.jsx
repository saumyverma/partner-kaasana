"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import AddPackageForm from "./addPackageForm";

const AddPackageModal = () => {
  const [formData, setFormData] = useState({
    packageName: "",
    packageCode: "",
    packageType: "",
    duration: "",
    price: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    description: "",
    rating: "",
    supplierId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // Reset form after submission
    setFormData({
      packageName: "",
      packageCode: "",
      packageType: "",
      duration: "",
      price: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      description: "",
      rating: "",
      supplierId: "",
    });
  };

  return (
    <div
      className='modal fade'
      id='addPackageModal'
      tabIndex={-1}
      aria-labelledby='addPackageModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable'>
        <div className='modal-content border radius-16 bg-base'>
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addPackageModalLabel'>
              Add New Package
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <AddPackageForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackageModal;

