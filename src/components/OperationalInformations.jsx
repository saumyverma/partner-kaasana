"use client";

import { Icon } from "@iconify/react";
import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

const countryOptions = ["India", "United Arab Emirates", "Saudi Arabia"];

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

const mapToOptions = (values) =>
  values.map((value) => ({ value, label: value }));

const getOptionsByValues = (options, values) =>
  options.filter((option) => values.includes(option.value));

const OperationalInformations = ({ setVisible, operationalInfo }) => {
  const [companySizes, setCompanySizes] = useState([]);
  const [operationsCountries, setOperationsCountries] = useState([]);
  const [operationsCities, setOperationsCities] = useState([]);
  const [productsServices, setProductsServices] = useState([]);
  const [bookingMethods, setBookingMethods] = useState([]);

  const countrySelectOptions = useMemo(() => mapToOptions(countryOptions), []);
  const citySelectOptions = useMemo(() => mapToOptions(cityOptions), []);
  const companySizeSelectOptions = useMemo(
    () => mapToOptions(companySizeOptions),
    []
  );
  const productServiceSelectOptions = useMemo(
    () => mapToOptions(productServiceOptions),
    []
  );
  const bookingMethodSelectOptions = useMemo(
    () => mapToOptions(bookingMethodOptions),
    []
  );

  useEffect(() => {
    if (operationalInfo) {
      setCompanySizes(operationalInfo.company_size);
      setOperationsCountries(operationalInfo.location_of_operations_country);
      setOperationsCities(operationalInfo.location_of_operations);
      setProductsServices(operationalInfo.products_and_services);
      setBookingMethods(operationalInfo.booking_methods);
    }
  }, [operationalInfo]);

  return (
    <div
      className="modal fade show d-block"
      role="dialog"
      aria-modal="true"
      aria-labelledby="OperationalInformationsSection"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl z-index-2">
        <div className="modal-content radius-16 bg-base">
          <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
            <div className="d-flex justify-content-between w-100 align-items-center">
              <h1
                className="modal-title fs-5 mb-0"
                id="OperationalInformationsSection"
              >
                Operational Information
              </h1>
              <Icon
                className="cursor-pointer text-red"
                onClick={() =>
                  setVisible((prev) => ({
                    ...prev,
                    editOperationalInfo: !prev.editOperationalInfo,
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
                              Company Size{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="companySize"
                              isMulti
                              isClearable
                              isSearchable
                              options={companySizeSelectOptions}
                              placeholder="Select Company Size"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                companySizeSelectOptions,
                                companySizes
                              )}
                              onChange={(selected) =>
                                setCompanySizes(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
                                )
                              }
                            />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              Location of Operations Country{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="operationsCountry"
                              isMulti
                              isClearable
                              isSearchable
                              options={countrySelectOptions}
                              placeholder="Select Countries"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                countrySelectOptions,
                                operationsCountries
                              )}
                              onChange={(selected) =>
                                setOperationsCountries(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
                                )
                              }
                            />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label">
                              Location of Operations City
                            </label>
                            <Select
                              inputId="operationsCity"
                              isMulti
                              isClearable
                              isSearchable
                              options={citySelectOptions}
                              placeholder="Select Cities"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                citySelectOptions,
                                operationsCities
                              )}
                              onChange={(selected) =>
                                setOperationsCities(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
                                )
                              }
                            />
                          </div>
                        </div>

                        <div className="row gy-3 mt-2">
                          <div className="col-md-6">
                            <label className="form-label">
                              Products / Services{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="productServices"
                              isMulti
                              isClearable
                              isSearchable
                              options={productServiceSelectOptions}
                              placeholder="Select Products / Services"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                productServiceSelectOptions,
                                productsServices
                              )}
                              onChange={(selected) =>
                                setProductsServices(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
                                )
                              }
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="form-label">
                              Booking Methods{" "}
                              <span className="text-danger-600">*</span>
                            </label>
                            <Select
                              inputId="bookingMethods"
                              isMulti
                              isClearable
                              isSearchable
                              options={bookingMethodSelectOptions}
                              placeholder="Select Booking Methods"
                              closeMenuOnSelect={false}
                              value={getOptionsByValues(
                                bookingMethodSelectOptions,
                                bookingMethods
                              )}
                              onChange={(selected) =>
                                setBookingMethods(
                                  selected
                                    ? selected.map((opt) => opt.value)
                                    : []
                                )
                              }
                            />
                          </div>
                        </div>

                        <div className="form-group d-flex align-items-center justify-content-end gap-8 mt-3">
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

export default OperationalInformations;
