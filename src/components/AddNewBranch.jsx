"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

const countryOptions = ["India", "United Arab Emirates", "Saudi Arabia"];

const stateOptions = [
  "Maharashtra",
  "Karnataka",
  "Dubai Emirate",
  "Abu Dhabi Emirate",
  "Riyadh Province",
];

const cityOptions = [
  "Dubai",
  "Abu Dhabi",
  "Riyadh",
  "Mumbai",
  "Delhi",
  "Bengaluru",
];

const mapToOptions = (values) =>
  values.map((value) => ({ value, label: value }));

const AddNewBranchForm = ({ setVisible, branchDetails }) => {
  const [registeredCountries, setRegisteredCountries] = useState([]);
  const [registeredStates, setRegisteredStates] = useState([]);
  const [registeredCities, setRegisteredCities] = useState([]);
  const [isHeadquarter, setIsHeadquarter] = useState(false);

  const countrySelectOptions = useMemo(() => mapToOptions(countryOptions), []);
  const stateSelectOptions = useMemo(() => mapToOptions(stateOptions), []);
  const citySelectOptions = useMemo(() => mapToOptions(cityOptions), []);

  useEffect(() => {
    if (branchDetails) {
      setRegisteredCountries(branchDetails.country);
      setRegisteredStates(branchDetails.state);
      setRegisteredCities(branchDetails.city);
      setIsHeadquarter(branchDetails.headqueater);
    }
  }, [branchDetails]);

  return (
    <div
      className="modal fade show d-block"
      role="dialog"
      aria-modal="true"
      aria-labelledby="branchDetailsSection"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl z-index-2">
        <div className="modal-content radius-16 bg-base">
          <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <h1 className="modal-title fs-5 mb-0" id="branchDetailsSection">
                Branch Details
              </h1>
              <Icon
                className="cursor-pointer text-red"
                onClick={() => {
                  setVisible((prev) => ({
                    ...prev,
                    editBranchDetails: !prev.editBranchDetails,
                  }));
                }}
                icon="hugeicons:cancel-circle"
                width="24"
                height="24"
              />
            </div>
          </div>
          <div className="modal-body p-24">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="form-wizard">
                    <form action="#">
                      <fieldset>
                        <div className="row gy-3">
                          <div className="col-md-4">
                            <label className="form-label">
                              Branch Name
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Contact Name"
                              defaultValue={branchDetails?.full_name}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Branch Email{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Contact Email"
                              defaultValue={branchDetails?.email}
                            />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              Branch Phone
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Enter Phone Number"
                              defaultValue={branchDetails?.contact_number}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Tax / Trade Licence Number
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter WhatsApp Number"
                              defaultValue={branchDetails?.whatsapp_number}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Country <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="registeredCountries"
                              isClearable
                              isSearchable
                              options={countrySelectOptions}
                              placeholder="Select Country"
                              closeMenuOnSelect={true}
                              value={
                                countrySelectOptions.find(
                                  (option) =>
                                    option.value === registeredCountries
                                ) || null
                              }
                              onChange={(selected) =>
                                setRegisteredCountries(
                                  selected ? selected.value : ""
                                )
                              }
                            />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              State <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="registeredStates"
                              isClearable
                              isSearchable
                              options={stateSelectOptions}
                              placeholder="Select States"
                              closeMenuOnSelect={false}
                              value={
                                stateSelectOptions.find(
                                  (option) => option.value === registeredStates
                                ) || null
                              }
                              onChange={(selected) =>
                                setRegisteredStates(
                                  selected ? selected.value : ""
                                )
                              }
                            />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              City <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="registeredCities"
                              isClearable
                              isSearchable
                              options={citySelectOptions}
                              placeholder="Select Cities"
                              closeMenuOnSelect={false}
                              value={
                                citySelectOptions.find(
                                  (option) => option.value === registeredCities
                                ) || null
                              }
                              onChange={(selected) =>
                                setRegisteredCities(
                                  selected ? selected.value : ""
                                )
                              }
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Pin Code/ Zip Code
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Pin Code/ Zip Code"
                              defaultValue={branchDetails?.whatsapp_number}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Address
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Branch Address"
                              defaultValue={branchDetails?.whatsapp_number}
                            />
                          </div>
                          <div className="col-md-4 d-flex align-items-center mt-3">
                            <label className="form-label me-3 mb-0">
                              Headquarter
                            </label>

                            <label className="toggle-switch">
                              <input
                                type="checkbox"
                                checked={isHeadquarter}
                                onChange={(e) =>
                                  setIsHeadquarter(e.target.checked)
                                }
                              />
                              <span className="slider"></span>
                            </label>
                          </div>
                          <style jsx>
                            {`
                              .toggle-switch {
                                position: relative;
                                width: 46px;
                                height: 24px;
                              }

                              .toggle-switch input {
                                opacity: 0;
                                width: 0;
                                height: 0;
                              }

                              .toggle-switch .slider {
                                position: absolute;
                                cursor: pointer;
                                background-color: #ccc;
                                border-radius: 34px;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                transition: 0.3s;
                              }

                              .toggle-switch .slider::before {
                                position: absolute;
                                content: "";
                                height: 18px;
                                width: 18px;
                                left: 3px;
                                top: 3px;
                                background: white;
                                border-radius: 50%;
                                transition: 0.3s;
                              }

                              .toggle-switch input:checked + .slider {
                                background-color: #0d6efd;
                              }

                              .toggle-switch input:checked + .slider:before {
                                transform: translateX(22px);
                              }
                            `}
                          </style>
                        </div>

                        <div className="form-group d-flex align-items-center justify-content-end gap-8 mt-3">
                          <button
                            type="button"
                            className="form-wizard-submit btn btn-primary-600 px-32"
                          >
                            Save
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBranchForm;
