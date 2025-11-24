"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import CKEditorComponent from "../../common/CKEditor";
import UploadWithImagePreview from "../../common/UploadWithImagePreview";

const AddOurHotelModal = ({ isOpen, onClose }) => {
  const [hotelName, setHotelName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCheckIn, setSelectedCheckIn] = useState(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedDMC, setSelectedDMC] = useState(null);
  const [hotelDescription, setHotelDescription] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);

  // Set menu portal target on client side
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  // Dummy data
  const dummyCountries = [
    { id: 1, name: "United States" },
    { id: 2, name: "United Kingdom" },
    { id: 3, name: "India" },
    { id: 4, name: "United Arab Emirates" },
    { id: 5, name: "Saudi Arabia" },
  ];

  const dummyStates = [
    { id: 1, name: "California" },
    { id: 2, name: "New York" },
    { id: 3, name: "Texas" },
    { id: 4, name: "Florida" },
    { id: 5, name: "Maharashtra" },
    { id: 6, name: "Karnataka" },
  ];

  const dummyCities = [
    { id: 1, name: "Los Angeles" },
    { id: 2, name: "New York City" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Dubai" },
    { id: 5, name: "Abu Dhabi" },
    { id: 6, name: "Riyadh" },
  ];

  const dummySuppliers = [
    { id: 1, name: "Global Travel Solutions" },
    { id: 2, name: "Premium Hotels Network" },
    { id: 3, name: "Luxury Accommodations Ltd" },
    { id: 4, name: "Worldwide Hotel Partners" },
    { id: 5, name: "Elite Travel Services" },
  ];

  const dummyDMCs = [
    { id: 1, name: "Destination Management Co. 1" },
    { id: 2, name: "Destination Management Co. 2" },
    { id: 3, name: "Destination Management Co. 3" },
    { id: 4, name: "Destination Management Co. 4" },
    { id: 5, name: "Destination Management Co. 5" },
  ];

  // Category options
  const categoryOptions = [
    { value: "3 Star", label: "3 Star" },
    { value: "4 Star", label: "4 Star" },
    { value: "5 Star", label: "5 Star" },
    { value: "7 Star", label: "7 Star" },
  ];

  // Property type options
  const propertyTypeOptions = [
    { value: "Luxury Hotel", label: "Luxury Hotel" },
    { value: "Resort", label: "Resort" },
    { value: "Beach Hotel", label: "Beach Hotel" },
    { value: "Business Hotel", label: "Business Hotel" },
    { value: "Luxury Suites", label: "Luxury Suites" },
    { value: "Boutique Hotel", label: "Boutique Hotel" },
    { value: "Apartment", label: "Apartment" },
  ];

  // Check-in time options
  const checkInOptions = [
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
  ];

  // Check-out time options
  const checkOutOptions = [
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
  ];

  // Convert all data to react-select format
  const countryOptions = dummyCountries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  const stateOptions = dummyStates.map((state) => ({
    value: state.id,
    label: state.name,
  }));

  const cityOptions = dummyCities.map((city) => ({
    value: city.id,
    label: city.name,
  }));

  const supplierOptions = dummySuppliers.map((supplier) => ({
    value: supplier.id,
    label: supplier.name,
  }));

  const dmcOptions = dummyDMCs.map((dmc) => ({
    value: dmc.id,
    label: dmc.name,
  }));

  // Handle file upload from UploadWithImagePreview component
  const handleImagesChange = (files) => {
    setUploadedFiles(files);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented here
    console.log({
      hotelName,
      selectedCategory,
      selectedPropertyType,
      selectedCountry,
      selectedState,
      selectedCity,
      selectedCheckIn,
      selectedCheckOut,
      selectedSupplier,
      selectedDMC,
      hotelDescription,
      uploadedFiles,
    });
    // Close modal after submission
    onClose();
  };

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setHotelName("");
      setSelectedCategory(null);
      setSelectedPropertyType(null);
      setSelectedCountry(null);
      setSelectedState(null);
      setSelectedCity(null);
      setSelectedCheckIn(null);
      setSelectedCheckOut(null);
      setSelectedSupplier(null);
      setSelectedDMC(null);
      setHotelDescription("");
      setUploadedFiles([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className='modal fade show d-block'
        role='dialog'
        aria-modal='true'
        aria-labelledby='addOurHotelModalLabel'
        style={{ zIndex: 1055 }}
      >
        <div className='modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addOurHotelModalLabel'>
                Add Our Hotel
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
                  {/* Hotel Name */}
                  <div className='col-12'>
                    <label className='form-label'>Hotel Name*</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Hotel Name'
                      value={hotelName}
                      onChange={(e) => setHotelName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Star Category */}
                  <div className='col-sm-6'>
                    <label className='form-label'>Star Category*</label>
                    <Select
                      value={selectedCategory}
                      onChange={setSelectedCategory}
                      options={categoryOptions}
                      placeholder="Select Star Category"
                      isClearable
                      isSearchable
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* Property Type */}
                  <div className='col-sm-6'>
                    <label className='form-label'>Property Type*</label>
                    <Select
                      value={selectedPropertyType}
                      onChange={setSelectedPropertyType}
                      options={propertyTypeOptions}
                      placeholder="Select Property Type"
                      isClearable
                      isSearchable
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* Country */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Country*</label>
                    <Select
                      value={selectedCountry}
                      onChange={(selected) => {
                        setSelectedCountry(selected);
                        setSelectedState(null);
                        setSelectedCity(null);
                      }}
                      options={countryOptions}
                      placeholder="Select Country"
                      isClearable
                      isSearchable
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* State */}
                  <div className='col-sm-4'>
                    <label className='form-label'>State*</label>
                    <Select
                      value={selectedState}
                      onChange={(selected) => {
                        setSelectedState(selected);
                        setSelectedCity(null);
                      }}
                      options={stateOptions}
                      placeholder="Select State"
                      isClearable
                      isSearchable
                      isDisabled={!selectedCountry}
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* City */}
                  <div className='col-sm-4'>
                    <label className='form-label'>City*</label>
                    <Select
                      value={selectedCity}
                      onChange={setSelectedCity}
                      options={cityOptions}
                      placeholder="Select City"
                      isClearable
                      isSearchable
                      isDisabled={!selectedState}
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* Check In Time */}
                  <div className='col-sm-6'>
                    <label className='form-label'>Check In Time*</label>
                    <Select
                      value={selectedCheckIn}
                      onChange={setSelectedCheckIn}
                      options={checkInOptions}
                      placeholder="Select Check In Time"
                      isClearable
                      isSearchable
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* Check Out Time */}
                  <div className='col-sm-6'>
                    <label className='form-label'>Check Out Time*</label>
                    <Select
                      value={selectedCheckOut}
                      onChange={setSelectedCheckOut}
                      options={checkOutOptions}
                      placeholder="Select Check Out Time"
                      isClearable
                      isSearchable
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* Supplier */}
                  <div className='col-sm-6'>
                    <label className='form-label'>Supplier*</label>
                    <Select
                      value={selectedSupplier}
                      onChange={setSelectedSupplier}
                      options={supplierOptions}
                      placeholder="Select Supplier"
                      isClearable
                      isSearchable
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* DMC */}
                  <div className='col-sm-6'>
                    <label className='form-label'>DMC*</label>
                    <Select
                      value={selectedDMC}
                      onChange={setSelectedDMC}
                      options={dmcOptions}
                      placeholder="Select DMC"
                      isClearable
                      isSearchable
                      className="wizard-required"
                      classNamePrefix="select"
                      menuPortalTarget={menuPortalTarget}
                      menuPosition="fixed"
                    />
                  </div>

                  {/* Hotel Description */}
                  <div className='col-12'>
                    <label className='form-label'>Hotel Description*</label>
                    <CKEditorComponent
                      value={hotelDescription}
                      onChange={setHotelDescription}
                      placeholder='Enter Hotel Description'
                    />
                  </div>

                  {/* File Upload with Image Preview */}
                  <div className='col-12'>
                    <label className='form-label mb-16'>Upload Hotel Images</label>
                    <UploadWithImagePreview onImagesChange={handleImagesChange} />
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
                Save Hotel
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

export default AddOurHotelModal;

