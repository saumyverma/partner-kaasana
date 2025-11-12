"use client";

import React, { useState } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";

const companyTypeOptions = [
  "Private Limited",
  "Public Limited",
  "Partnership",
  "Proprietorship",
];

const countryOptions = ["India", "United Arab Emirates", "Saudi Arabia"];

const stateOptions = [
  "Maharashtra",
  "Karnataka",
  "Dubai Emirate",
  "Abu Dhabi Emirate",
  "Riyadh Province",
];

const cityOptions = ["Dubai", "Abu Dhabi", "Riyadh", "Mumbai", "Delhi"];

const companySizeOptions = ["0-10", "10-20", "20-50", "50-100", "100+"];

const productServiceOptions = [
  "Flights",
  "Hotels",
  "Activities",
  "Transfers",
  "Visas",
];

const bookingMethodOptions = ["Online", "Offline", "Hybrid"];

const designationOptions = [
  "Founder",
  "Director",
  "Manager",
  "Sales Lead",
  "Support",
];

const OnboardingPopupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const TOTAL_STEPS = 4;

  const [companyTypes, setCompanyTypes] = useState([]);
  const [registeredCountries, setRegisteredCountries] = useState([]);
  const [registeredStates, setRegisteredStates] = useState([]);
  const [registeredCities, setRegisteredCities] = useState([]);
  const [companySizes, setCompanySizes] = useState([]);
  const [operationsCountries, setOperationsCountries] = useState([]);
  const [operationsCities, setOperationsCities] = useState([]);
  const [productsServices, setProductsServices] = useState([]);
  const [bookingMethods, setBookingMethods] = useState([]);
  const [designationSelections, setDesignationSelections] = useState([]);

  const stepClass = (step) => {
    if (currentStep === step) return "form-wizard-list__item active";
    if (currentStep > step) return "form-wizard-list__item activated";
    return "form-wizard-list__item";
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
          <p className="text-neutral-500">
            Complete your company profile to continue onboarding.
          </p>

          <div className="form-wizard">
            <form action="#">
              <div className="form-wizard-header overflow-x-auto scroll-sm pb-8 my-32">
                <ul className="list-unstyled form-wizard-list style-two">
                  <li className={stepClass(1)}>
                    <div className="form-wizard-list__line">
                      <span className="count">1</span>
                    </div>
                    <span className="text text-xs fw-semibold">
                      Company Details
                    </span>
                  </li>
                  <li className={stepClass(2)}>
                    <div className="form-wizard-list__line">
                      <span className="count">2</span>
                    </div>
                    <span className="text text-xs fw-semibold">
                      Operational Info
                    </span>
                  </li>
                  <li className={stepClass(3)}>
                    <div className="form-wizard-list__line">
                      <span className="count">3</span>
                    </div>
                    <span className="text text-xs fw-semibold">
                      Contact Details
                    </span>
                  </li>
                  <li className={stepClass(4)}>
                    <div className="form-wizard-list__line">
                      <span className="count">4</span>
                    </div>
                    <span className="text text-xs fw-semibold">
                      Completed
                    </span>
                  </li>
                </ul>
              </div>

              <fieldset
                className={`wizard-fieldset ${currentStep === 1 ? "show" : ""}`}
              >
                <h6 className="text-md text-neutral-500 mb-24">
                  Company Details
                </h6>

                <div className="row gy-3">
                  <div className="col-md-4">
                    <label className="form-label">
                      Company Type <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={companyTypeOptions}
                      placeholder="Select Company Types"
                      selected={companyTypes}
                      onChange={setCompanyTypes}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">
                      Company Name <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Company Name"
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">
                      Tax / Trade Licence Number <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Tax / Licence Number"
                    />
                  </div>
                </div>

                <div className="row gy-3 mt-2">
                  <div className="col-md-4">
                    <label className="form-label">
                      Country <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={countryOptions}
                      placeholder="Select Countries"
                      selected={registeredCountries}
                      onChange={setRegisteredCountries}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">
                      State <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={stateOptions}
                      placeholder="Select States"
                      selected={registeredStates}
                      onChange={setRegisteredStates}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">
                      City <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={cityOptions}
                      placeholder="Select Cities"
                      selected={registeredCities}
                      onChange={setRegisteredCities}
                    />
                  </div>
                </div>

                <div className="row gy-3 mt-2">
                  <div className="col-md-4">
                    <label className="form-label">
                      Pin Code / Zip Code <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Zip Code"
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">
                      Address <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>

                <div className="form-group text-end mt-4">
                  <button
                    type="button"
                    className="form-wizard-next-btn btn btn-primary-600 px-32"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </fieldset>

              <fieldset
                className={`wizard-fieldset ${currentStep === 2 ? "show" : ""}`}
              >
                <h6 className="text-md text-neutral-500 mb-24">
                  Operational Information
                </h6>

                <div className="row gy-3">
                  <div className="col-md-4">
                    <label className="form-label">
                      Company Size <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={companySizeOptions}
                      placeholder="Select Company Size"
                      selected={companySizes}
                      onChange={setCompanySizes}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">
                      Location of Operations Country <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={countryOptions}
                      placeholder="Select Countries"
                      selected={operationsCountries}
                      onChange={setOperationsCountries}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">
                      Location of Operations City
                    </label>
                    <MultiSelectDropdown
                      options={cityOptions}
                      placeholder="Select Cities"
                      selected={operationsCities}
                      onChange={setOperationsCities}
                    />
                  </div>
                </div>

                <div className="row gy-3 mt-2">
                  <div className="col-md-6">
                    <label className="form-label">
                      Products / Services <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={productServiceOptions}
                      placeholder="Select Products / Services"
                      selected={productsServices}
                      onChange={setProductsServices}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Booking Methods <sup>*</sup>
                    </label>
                    <MultiSelectDropdown
                      options={bookingMethodOptions}
                      placeholder="Select Booking Methods"
                      selected={bookingMethods}
                      onChange={setBookingMethods}
                    />
                  </div>
                </div>

                <div className="form-group d-flex align-items-center justify-content-end gap-8 mt-4">
                  <button
                    type="button"
                    className="form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="form-wizard-next-btn btn btn-primary-600 px-32"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              </fieldset>

              <fieldset
                className={`wizard-fieldset ${currentStep === 3 ? "show" : ""}`}
              >
                <h6 className="text-md text-neutral-500 mb-24">
                  Contact Details
                </h6>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label className="form-label">
                      Full Name <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Contact Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Email <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Contact Email"
                    />
                  </div>
                </div>

                <div className="row gy-3 mt-2">
                  <div className="col-md-4">
                    <label className="form-label">
                      Contact Number <sup>*</sup>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">
                      WhatsApp Number <sup>*</sup>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter WhatsApp Number"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Designation</label>
                    <MultiSelectDropdown
                      options={designationOptions}
                      placeholder="Select Designations"
                      selected={designationSelections}
                      onChange={setDesignationSelections}
                    />
                  </div>
                </div>

                <div className="form-group d-flex align-items-center justify-content-end gap-8 mt-4">
                  <button
                    type="button"
                    className="form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="form-wizard-submit btn btn-primary-600 px-32"
                    onClick={nextStep}
                  >
                    Save
                  </button>
                </div>
              </fieldset>

              <fieldset
                className={`wizard-fieldset ${currentStep === 4 ? "show" : ""}`}
              >
                <div className="text-center mb-40">
                  <img
                    src="assets/images/gif/success-img3.gif"
                    alt="Success"
                    className="gif-image mb-24"
                  />
                  <h6 className="text-md text-neutral-600">
                    Congratulations!
                  </h6>
                  <p className="text-neutral-400 text-sm mb-24">
                    Your company profile submission is complete. Our team will
                    review the details and reach out if anything else is needed.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary-600 px-32"
                    onClick={() => setCurrentStep(1)}
                  >
                    Close
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPopupForm;

