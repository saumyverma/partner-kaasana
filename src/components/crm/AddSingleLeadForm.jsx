"use client";

import React, { useMemo, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Select from "react-select";

const companyTypeOptions = [
  { value: "", label: "Select Your Agent Type" },
  { value: "DMC", label: "DMC" },
  { value: "OTA", label: "OTA" },
  { value: "Retail Agency", label: "Retail Agency" },
  { value: "Corporate Travel", label: "Corporate Travel" },
  { value: "Influencer", label: "Influencer" },
];

const salesPersonOptions = [
  { value: "", label: "Select Your Sales Person" },
  { value: "0", label: "Main" },
  { value: "1", label: "Sara Khan" },
  { value: "2", label: "Jacob Jones" },
  { value: "3", label: "Albert Flores" },
];

const partnerCompanyOptions = [
  { value: "", label: "Select Your Company Name" },
  { value: "travel-hub", label: "Travel Hub" },
  { value: "wanderlust", label: "Wanderlust Inc." },
  { value: "coastal-journeys", label: "Coastal Journeys" },
];

const destinationCountryOptions = [
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "India", label: "India" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Qatar", label: "Qatar" },
  { value: "Oman", label: "Oman" },
  { value: "Bahrain", label: "Bahrain" },
];

const destinationCityOptions = [
  { value: "Dubai", label: "Dubai" },
  { value: "Abu Dhabi", label: "Abu Dhabi" },
  { value: "Sharjah", label: "Sharjah" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Bengaluru", label: "Bengaluru" },
  { value: "Riyadh", label: "Riyadh" },
];

const paxRanges = ["0-10", "10-20", "20-30", "30-40", "40-50", "50+"];

const holidayTypeOptions = [
  "GIT",
  "FIT",
  "Land Only",
  "Flight Only",
  "Cruise",
  "Lifetime Experiences",
];

const leadSourceOptions = [
  { value: "", label: "Select Lead Source" },
  { value: "online", label: "online" },
  { value: "offline", label: "offline" },
  { value: "event", label: "event" },
  { value: "referral", label: "referral" },
];

const leadMediumOptions = [
  { value: "", label: "Select Lead Medium" },
  { value: "website", label: "Website" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "email", label: "Email Campaign" },
  { value: "walk-in", label: "Walk-in" },
];

const getOptionByValue = (options, value) =>
  options.find((opt) => opt.value === value) || null;

const getOptionsByValues = (options, values) =>
  options.filter((opt) => values.includes(opt.value));

const AddSingleLeadForm = () => {
  const [leadType, setLeadType] = useState("B2C");
  const [assignedSales, setAssignedSales] = useState("");
  const [companySelection, setCompanySelection] = useState("");
  const [leadCategoryType, setLeadCategoryType] = useState("");
  const [destinationsCountry, setDestinationsCountry] = useState([]);
  const [destinationsCity, setDestinationsCity] = useState([]);
  const [holidayTypeSelection, setHolidayTypeSelection] = useState("");
  const [paxSelection, setPaxSelection] = useState("");
  const [durationSelection, setDurationSelection] = useState("");
  const [leadSourceSelection, setLeadSourceSelection] = useState("");
  const [leadMediumSelection, setLeadMediumSelection] = useState("");

  const nightsOptions = useMemo(
    () => Array.from({ length: 15 }, (_, index) => `${index + 1} Nights`),
    []
  );

  const salesPersonSelectOptions = useMemo(
    () => salesPersonOptions.filter(({ value }) => value),
    []
  );

  const partnerCompanySelectOptions = useMemo(
    () => partnerCompanyOptions.filter(({ value }) => value),
    []
  );

  const companyTypeSelectOptions = useMemo(
    () => companyTypeOptions.filter(({ value }) => value),
    []
  );

  const holidayTypeSelectOptions = useMemo(
    () => holidayTypeOptions.map((value) => ({ value, label: value })),
    []
  );

  const paxSelectOptions = useMemo(
    () => paxRanges.map((value) => ({ value, label: value })),
    []
  );

  const durationSelectOptions = useMemo(
    () => nightsOptions.map((value) => ({ value, label: value })),
    [nightsOptions]
  );

  const leadSourceSelectOptions = useMemo(
    () => leadSourceOptions.filter(({ value }) => value),
    []
  );

  const leadMediumSelectOptions = useMemo(
    () => leadMediumOptions.filter(({ value }) => value),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="col-lg-12">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-2">
          <h5 className="card-title mb-0">Single Lead</h5>
          <button
            type="button"
            id="add_company_b2c"
            className={`btn btn-outline-danger btn-sm ${leadType === "B2B" ? "" : "d-none"}`}
          >
            Add Company
          </button>
        </div>
        <div className="card-body">
          <form id="addSingleLeadForm" className="row gy-3 needs-validation" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <div className="d-flex flex-wrap gap-3">
                <div
                  className={`bg-neutral-100 px-20 py-12 radius-8 ${
                    leadType === "B2C" ? "border border-primary" : "border border-transparent"
                  }`}
                >
                  <span className="form-check checked-success d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="default_radio"
                      id="leadTypeB2C"
                      value="B2C"
                      checked={leadType === "B2C"}
                      onChange={() => setLeadType("B2C")}
                    />
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="leadTypeB2C"
                    >
                      B2C
                    </label>
                  </span>
                </div>

                <div
                  className={`bg-neutral-100 px-20 py-12 radius-8 ${
                    leadType === "B2B" ? "border border-primary" : "border border-transparent"
                  }`}
                >
                  <span className="form-check checked-success d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="default_radio"
                      id="leadTypeB2B"
                      value="B2B"
                      checked={leadType === "B2B"}
                      onChange={() => setLeadType("B2B")}
                    />
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="leadTypeB2B"
                    >
                      B2B
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="AssignedSales">
                Assigned to Sales
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="solar:user-circle-line-duotone" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="AssignedSales"
                    options={salesPersonSelectOptions}
                    placeholder="Select Sales Person"
                    isClearable
                    isSearchable
                    value={getOptionByValue(salesPersonSelectOptions, assignedSales)}
                    onChange={(selected) => setAssignedSales(selected ? selected.value : "")}
                  />
                </div>
              </div>
              {assignedSales && (
                <input type="hidden" name="AssignedSales" value={assignedSales} />
              )}
            </div>

            <div className={`col-12 ${leadType === "B2B" ? "" : "d-none"}`}>
              <div className="row gy-3">
                <div className="col-md-3">
                  <label className="form-label" htmlFor="CompanyName">
                    Company name <sup>*</sup>
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:office-building-outline" />
                    </span>
                    <div className="form-control p-0 border-0">
                      <Select
                        inputId="CompanyName"
                        options={partnerCompanySelectOptions}
                        placeholder="Select Company"
                        isClearable
                        isSearchable
                        value={getOptionByValue(partnerCompanySelectOptions, companySelection)}
                        onChange={(selected) => setCompanySelection(selected ? selected.value : "")}
                      />
                    </div>
                  </div>
                  {companySelection && (
                    <input type="hidden" name="CompanyName" value={companySelection} />
                  )}
                </div>

                <div className="col-md-3">
                  <label className="form-label" htmlFor="leadCategoryType">
                    Lead Category Type <sup>*</sup>
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:tag-outline" />
                    </span>
                    <div className="form-control p-0 border-0">
                      <Select
                        inputId="leadCategoryType"
                        options={companyTypeSelectOptions}
                        placeholder="Select Agent Type"
                        isClearable
                        isSearchable
                        value={getOptionByValue(companyTypeSelectOptions, leadCategoryType)}
                        onChange={(selected) => setLeadCategoryType(selected ? selected.value : "")}
                      />
                    </div>
                  </div>
                  {leadCategoryType && (
                    <input type="hidden" name="leadCategoryType" value={leadCategoryType} />
                  )}
                </div>

                <div className="col-md-3">
                  <label className="form-label" htmlFor="email">
                    Email ID <sup>*</sup>
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mage:email" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email Address"
                      required
                    />
                  </div>
                  <p id="emailStatus" className="text-sm mt-1 mb-0"></p>
                </div>

                <div className="col-md-3">
                  <label className="form-label" htmlFor="contactNumber">
                    contact number <sup>*</sup>
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="solar:phone-calling-linear" />
                    </span>
                    <input
                      type="text"
                      id="contactNumber"
                      name="contactNumber"
                      className="form-control"
                      placeholder="Enter Your Number"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="CustomerName">
                Customer Name
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="f7:person" />
                </span>
                <input
                  type="text"
                  id="CustomerName"
                  name="CustomerName"
                  className="form-control"
                  placeholder="Enter Customer Name"
                />
              </div>
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="CustomercontactNumber">
                Customer Contact No. <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="solar:phone-calling-linear" />
                </span>
                <input
                  type="text"
                  id="CustomercontactNumber"
                  name="CustomercontactNumber"
                  className="form-control"
                  placeholder="Enter Customer Number"
                  required
                />
              </div>
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="Customeremail">
                Customer Email ID
              </label>
              <input type="hidden" name="customer_id" id="customer_id" value="0" />
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mage:email" />
                </span>
                <input
                  type="email"
                  id="Customeremail"
                  name="Customeremail"
                  className="form-control check_exist_email"
                  placeholder="Enter Customer Email"
                />
              </div>
              <small className="text-success d-block mt-1 show_email_status d-none">
                Email is available.
              </small>
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="TravelDate">
                Travel Date
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="solar:calendar-linear" />
                </span>
                <input type="date" id="TravelDate" name="TravelDate" className="form-control" />
              </div>
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="HolidayType">
                Holiday Type <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:calendar-month-outline" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="HolidayType"
                    options={holidayTypeSelectOptions}
                    placeholder="Select Holiday Type"
                    isClearable
                    isSearchable
                    value={getOptionByValue(holidayTypeSelectOptions, holidayTypeSelection)}
                    onChange={(selected) => setHolidayTypeSelection(selected ? selected.value : "")}
                  />
                </div>
              </div>
              {holidayTypeSelection && (
                <input type="hidden" name="HolidayType" value={holidayTypeSelection} />
              )}
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="NoofPax">
                No of Pax <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:account-group-outline" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="NoofPax"
                    options={paxSelectOptions}
                    placeholder="Select Pax"
                    isClearable
                    isSearchable
                    value={getOptionByValue(paxSelectOptions, paxSelection)}
                    onChange={(selected) => setPaxSelection(selected ? selected.value : "")}
                  />
                </div>
              </div>
              {paxSelection && (
                <input type="hidden" name="NoofPax" value={paxSelection} />
              )}
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="DestinationsCountry">
                Destinations Country <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:earth" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="DestinationsCountry"
                    options={destinationCountryOptions}
                    placeholder="Select Destinations Country"
                    isMulti
                    isClearable
                    isSearchable
                    closeMenuOnSelect={false}
                    value={getOptionsByValues(destinationCountryOptions, destinationsCountry)}
                    onChange={(selected) =>
                      setDestinationsCountry(selected ? selected.map((opt) => opt.value) : [])
                    }
                  />
                </div>
              </div>
              {destinationsCountry.map((value) => (
                <input key={`DestinationsCountry-${value}`} type="hidden" name="DestinationsCountry[]" value={value} />
              ))}
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="Destinations">
                Destinations City <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:city" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="Destinations"
                    options={destinationCityOptions}
                    placeholder="Select Destinations City"
                    isMulti
                    isClearable
                    isSearchable
                    closeMenuOnSelect={false}
                    value={getOptionsByValues(destinationCityOptions, destinationsCity)}
                    onChange={(selected) =>
                      setDestinationsCity(selected ? selected.map((opt) => opt.value) : [])
                    }
                  />
                </div>
              </div>
              {destinationsCity.map((value) => (
                <input key={`Destinations-${value}`} type="hidden" name="Destinations[]" value={value} />
              ))}
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="Duration">
                Duration <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:clock-outline" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="Duration"
                    options={durationSelectOptions}
                    placeholder="Select Duration"
                    isClearable
                    isSearchable
                    value={getOptionByValue(durationSelectOptions, durationSelection)}
                    onChange={(selected) => setDurationSelection(selected ? selected.value : "")}
                  />
                </div>
              </div>
              {durationSelection && (
                <input type="hidden" name="Duration" value={durationSelection} />
              )}
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="Origin">
                Origin
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:map-marker-outline" />
                </span>
                <input
                  type="text"
                  id="Origin"
                  name="Origin"
                  className="form-control"
                  placeholder="Enter Your Origin"
                />
              </div>
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="leadSource">
                Lead Source <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:compass-outline" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="leadSource"
                    options={leadSourceSelectOptions}
                    placeholder="Select Lead Source"
                    isClearable
                    isSearchable
                    value={getOptionByValue(leadSourceSelectOptions, leadSourceSelection)}
                    onChange={(selected) => setLeadSourceSelection(selected ? selected.value : "")}
                  />
                </div>
              </div>
              {leadSourceSelection && (
                <input type="hidden" name="LeadSource" value={leadSourceSelection} />
              )}
            </div>

            <div className="col-md-3">
              <label className="form-label" htmlFor="leadMedium">
                Lead Medium <sup>*</sup>
              </label>
              <div className="icon-field">
                <span className="icon">
                  <Icon icon="mdi:bullhorn-outline" />
                </span>
                <div className="form-control p-0 border-0">
                  <Select
                    inputId="leadMedium"
                    options={leadMediumSelectOptions}
                    placeholder="Select Lead Medium"
                    isClearable
                    isSearchable
                    value={getOptionByValue(leadMediumSelectOptions, leadMediumSelection)}
                    onChange={(selected) => setLeadMediumSelection(selected ? selected.value : "")}
                  />
                </div>
              </div>
              {leadMediumSelection && (
                <input type="hidden" name="LeadMedium" value={leadMediumSelection} />
              )}
            </div>

            <div className="col-12 d-flex justify-content-end mt-3">
              <button type="button" className="btn btn-outline-danger me-2">
                Cancel
              </button>
              <button type="submit" id="addSingleLead" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSingleLeadForm;