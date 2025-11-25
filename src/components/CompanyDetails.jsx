"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

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

const mapToOptions = (values) =>
  values.map((value) => ({ value, label: value }));

const getOptionsByValues = (options, values) =>
  options.filter((option) => values.includes(option.value));

const CompanyDetails = ({ setVisible, companyDetails }) => {
  const [companyTypes, setCompanyTypes] = useState([]);
  const [registeredCountries, setRegisteredCountries] = useState([]);
  const [registeredStates, setRegisteredStates] = useState([]);
  const [registeredCities, setRegisteredCities] = useState([]);

  const companyTypeSelectOptions = useMemo(
    () => mapToOptions(companyTypeOptions),
    []
  );
  const countrySelectOptions = useMemo(() => mapToOptions(countryOptions), []);
  const stateSelectOptions = useMemo(() => mapToOptions(stateOptions), []);
  const citySelectOptions = useMemo(() => mapToOptions(cityOptions), []);

  useEffect(() => {
    if (companyDetails) {
      setCompanyTypes(companyDetails.company_type);
      setRegisteredCountries(companyDetails.country);
      setRegisteredStates(companyDetails.state);
      setRegisteredCities(companyDetails.city);
    }
  }, [companyDetails]);

  return (
    <div
      className="modal fade show d-block"
      role="dialog"
      aria-modal="true"
      aria-labelledby="companyDetailsSection"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl z-index-2">
        <div className="modal-content radius-16 bg-base">
          <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <h1 className="modal-title fs-5 mb-0" id="companyDetailsSection">
                Company Details
              </h1>
              <Icon
                className="cursor-pointer text-red"
                onClick={() =>
                  setVisible((prev) => ({
                    ...prev,
                    editCompanyDetails: !prev.editCompanyDetails,
                  }))
                }
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
                              Company Type
                              <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="companyType"
                              isMulti
                              isClearable
                              isSearchable
                              options={companyTypeSelectOptions}
                              placeholder="Select Company Types"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                companyTypeSelectOptions,
                                companyTypes
                              )}
                              onChange={(selected) =>
                                setCompanyTypes(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
                                )
                              }
                            />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              Company Name{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Company Name"
                              defaultValue={companyDetails.company_name}
                            />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              Tax / Trade Licence Number{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Tax / Licence Number"
                              defaultValue={
                                companyDetails.tax_or_trade_licence_number
                              }
                            />
                          </div>
                        </div>

                        <div className="row gy-3 mt-2">
                          <div className="col-md-4">
                            <label className="form-label">
                              Country <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="registeredCountries"
                              isMulti
                              isClearable
                              isSearchable
                              options={countrySelectOptions}
                              placeholder="Select Countries"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                countrySelectOptions,
                                registeredCountries
                              )}
                              onChange={(selected) =>
                                setRegisteredCountries(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
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
                              isMulti
                              isClearable
                              isSearchable
                              options={stateSelectOptions}
                              placeholder="Select States"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                stateSelectOptions,
                                registeredStates
                              )}
                              onChange={(selected) =>
                                setRegisteredStates(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
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
                              isMulti
                              isClearable
                              isSearchable
                              options={citySelectOptions}
                              placeholder="Select Cities"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                citySelectOptions,
                                registeredCities
                              )}
                              onChange={(selected) =>
                                setRegisteredCities(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
                                )
                              }
                            />
                          </div>
                        </div>

                        <div className="row gy-3 mt-2">
                          <div className="col-md-4">
                            <label className="form-label">
                              Pin Code / Zip Code{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Zip Code"
                              defaultValue={companyDetails.pin_or_zip_code}
                            />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label">
                              Address <span className="text-danger-600">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Address"
                              defaultValue={companyDetails.address}
                            />
                          </div>
                        </div>

                        <div className="form-group text-end mt-3">
                          <button
                            type="button"
                            className="form-wizard-next-btn btn btn-primary-600 px-32"
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

export default CompanyDetails;
