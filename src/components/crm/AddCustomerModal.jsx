"use client";

import { useState, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Select from "react-select";

const salesPersonOptions = [
  { value: "0", label: "Main" },
  { value: "1", label: "Sara Khan" },
  { value: "2", label: "Jacob Jones" },
  { value: "3", label: "Albert Flores" },
];

const companyTypeOptions = [
  { value: "DMC", label: "DMC" },
  { value: "OTA", label: "OTA" },
  { value: "Retail Agency", label: "Retail Agency" },
  { value: "Corporate Travel", label: "Corporate Travel" },
  { value: "Influencer", label: "Influencer" },
];

const partnerCompanyOptions = [
  { value: "travel-hub", label: "Travel Hub" },
  { value: "wanderlust", label: "Wanderlust Inc." },
  { value: "coastal-journeys", label: "Coastal Journeys" },
];

// Country, State, City data structure
const locationData = [
  {
    id: "india",
    name: "India",
    states: [
      {
        id: "delhi",
        name: "Delhi",
        cities: [
          { id: "new-delhi", name: "New Delhi" },
          { id: "noida", name: "Noida" },
        ],
      },
      {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        cities: [
          { id: "lucknow", name: "Lucknow" },
          { id: "agra", name: "Agra" },
        ],
      },
      {
        id: "maharashtra",
        name: "Maharashtra",
        cities: [
          { id: "mumbai", name: "Mumbai" },
          { id: "pune", name: "Pune" },
        ],
      },
    ],
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    states: [
      {
        id: "dubai-emirate",
        name: "Dubai",
        cities: [
          { id: "dubai-city", name: "Dubai" },
          { id: "jebel-ali", name: "Jebel Ali" },
        ],
      },
      {
        id: "abu-dhabi-emirate",
        name: "Abu Dhabi",
        cities: [
          { id: "abu-dhabi-city", name: "Abu Dhabi" },
          { id: "al-ain", name: "Al Ain" },
        ],
      },
    ],
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    states: [
      {
        id: "riyadh-province",
        name: "Riyadh",
        cities: [
          { id: "riyadh-city", name: "Riyadh" },
        ],
      },
    ],
  },
];

const getOptionByValue = (options, value) =>
  options.find((opt) => opt.value === value) || null;

const AddCustomerModal = ({ isOpen, onClose }) => {
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [leadType, setLeadType] = useState("B2C");

  // Common Fields
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [assignedSales, setAssignedSales] = useState("");

  // Address Fields
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  // B2B Only Fields
  const [companySelection, setCompanySelection] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [leadCategoryType, setLeadCategoryType] = useState("");

  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  const salesPersonSelectOptions = useMemo(() => salesPersonOptions, []);
  const companyTypeSelectOptions = useMemo(() => companyTypeOptions, []);
  const partnerCompanySelectOptions = useMemo(() => partnerCompanyOptions, []);

  // Country options
  const countryOptions = useMemo(
    () => locationData.map((country) => ({ value: country.id, label: country.name })),
    []
  );

  // State options based on selected country
  const stateOptions = useMemo(() => {
    if (!country) return [];
    const selectedCountry = locationData.find((c) => c.id === country);
    if (!selectedCountry) return [];
    return selectedCountry.states.map((state) => ({
      value: state.id,
      label: state.name,
    }));
  }, [country]);

  // City options based on selected state
  const cityOptions = useMemo(() => {
    if (!country || !state) return [];
    const selectedCountry = locationData.find((c) => c.id === country);
    if (!selectedCountry) return [];
    const selectedState = selectedCountry.states.find((s) => s.id === state);
    if (!selectedState) return [];
    return selectedState.cities.map((city) => ({
      value: city.id,
      label: city.name,
    }));
  }, [country, state]);

  // Reset state when country changes
  useEffect(() => {
    if (country) {
      setState("");
      setCity("");
    }
  }, [country]);

  // Reset city when state changes
  useEffect(() => {
    if (state) {
      setCity("");
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className='modal fade show d-block'
        role='dialog'
        aria-modal='true'
        aria-labelledby='addCustomerModalLabel'
        id="addCustomerModal"
        style={{ zIndex: 1055, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <div className='modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addCustomerModalLabel'>
                Add New Customer
              </h1>
              <button
                type='button'
                className='btn-close'
                onClick={onClose}
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form id="addCustomerForm" className="row gy-3" onSubmit={handleSubmit}>
                {/* Lead Type - B2C/B2B Radio */}
                <div className="col-md-4">
                  <label className="form-label">Lead Type*</label>
                  <div className="d-flex flex-wrap gap-3">
                    <div
                      className={`bg-neutral-100 px-20 py-6 radius-8 ${
                        leadType === "B2C" ? "border border-primary" : "border border-transparent"
                      }`}
                    >
                      <span className="form-check checked-success d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="leadType"
                          id="customerLeadTypeB2C"
                          value="B2C"
                          checked={leadType === "B2C"}
                          onChange={() => setLeadType("B2C")}
                        />
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="customerLeadTypeB2C"
                        >
                          B2C Lead
                        </label>
                      </span>
                    </div>
                    <div
                      className={`bg-neutral-100 px-20 py-6 radius-8 ${
                        leadType === "B2B" ? "border border-primary" : "border border-transparent"
                      }`}
                    >
                      <span className="form-check checked-success d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="leadType"
                          id="customerLeadTypeB2B"
                          value="B2B"
                          checked={leadType === "B2B"}
                          onChange={() => setLeadType("B2B")}
                        />
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="customerLeadTypeB2B"
                        >
                          B2B Lead
                        </label>
                      </span>
                    </div>
                  </div>
                </div>

                {/* B2B Only Fields - Company Name, Lead Category, Company Email, Company Phone */}
                {leadType === "B2B" && (
                  <>
                    <div className="col-md-4">
                      <label className="form-label" htmlFor="CompanyName">
                        Company Name <sup>*</sup>
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
                            menuPortalTarget={menuPortalTarget}
                            menuPosition="fixed"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label" htmlFor="leadCategoryType">
                        Lead Category <sup>*</sup>
                      </label>
                      <div className="icon-field">
                        <span className="icon">
                          <Icon icon="mdi:tag-outline" />
                        </span>
                        <div className="form-control p-0 border-0">
                          <Select
                            inputId="leadCategoryType"
                            options={companyTypeSelectOptions}
                            placeholder="Select Lead Category"
                            isClearable
                            isSearchable
                            value={getOptionByValue(companyTypeSelectOptions, leadCategoryType)}
                            onChange={(selected) => setLeadCategoryType(selected ? selected.value : "")}
                            menuPortalTarget={menuPortalTarget}
                            menuPosition="fixed"
                            classNamePrefix="select"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label" htmlFor="companyEmail">
                        Company Email <sup>*</sup>
                      </label>
                      <div className="icon-field">
                        <span className="icon">
                          <Icon icon="mage:email" />
                        </span>
                        <input
                          type="email"
                          id="companyEmail"
                          name="companyEmail"
                          className="form-control"
                          placeholder="Enter Company Email"
                          value={companyEmail}
                          onChange={(e) => setCompanyEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <label className="form-label" htmlFor="companyPhone">
                        Company Phone <sup>*</sup>
                      </label>
                      <div className="icon-field">
                        <span className="icon">
                          <Icon icon="solar:phone-calling-linear" />
                        </span>
                        <input
                          type="text"
                          id="companyPhone"
                          name="companyPhone"
                          className="form-control"
                          placeholder="Enter Company Phone"
                          value={companyPhone}
                          onChange={(e) => setCompanyPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Customer Name */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="CustomerName">
                    Customer Name <sup>*</sup>
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
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Customer Email */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="CustomerEmail">
                    Customer Email <sup>*</sup>
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mage:email" />
                    </span>
                    <input
                      type="email"
                      id="CustomerEmail"
                      name="CustomerEmail"
                      className="form-control"
                      placeholder="Enter Customer Email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Customer Phone */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="CustomerPhone">
                    Customer Phone <sup>*</sup>
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="solar:phone-calling-linear" />
                    </span>
                    <input
                      type="text"
                      id="CustomerPhone"
                      name="CustomerPhone"
                      className="form-control"
                      placeholder="Enter Customer Phone"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="Country">
                    Country
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:earth" />
                    </span>
                    <div className="form-control p-0 border-0">
                      <Select
                        inputId="Country"
                        options={countryOptions}
                        placeholder="Select Country"
                        isClearable
                        isSearchable
                        value={getOptionByValue(countryOptions, country)}
                        onChange={(selected) => setCountry(selected ? selected.value : "")}
                          menuPortalTarget={menuPortalTarget}
                          menuPosition="fixed"
                          classNamePrefix="select"
                      />
                    </div>
                  </div>
                </div>

                {/* State */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="State">
                    State
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:map-marker-outline" />
                    </span>
                    <div className="form-control p-0 border-0">
                      <Select
                        inputId="State"
                        options={stateOptions}
                        placeholder="Select State"
                        isClearable
                        isSearchable
                        isDisabled={!country}
                        value={getOptionByValue(stateOptions, state)}
                        onChange={(selected) => setState(selected ? selected.value : "")}
                          menuPortalTarget={menuPortalTarget}
                          menuPosition="fixed"
                          classNamePrefix="select"
                      />
                    </div>
                  </div>
                </div>

                {/* City */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="City">
                    City
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:city" />
                    </span>
                    <div className="form-control p-0 border-0">
                      <Select
                        inputId="City"
                        options={cityOptions}
                        placeholder="Select City"
                        isClearable
                        isSearchable
                        isDisabled={!state}
                        value={getOptionByValue(cityOptions, city)}
                        onChange={(selected) => setCity(selected ? selected.value : "")}
                          menuPortalTarget={menuPortalTarget}
                          menuPosition="fixed"
                          classNamePrefix="select"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="Address">
                    Address
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:map-marker" />
                    </span>
                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      className="form-control"
                      placeholder="Enter Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                {/* Zipcode */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="Zipcode">
                    Zipcode
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:postage-stamp" />
                    </span>
                    <input
                      type="text"
                      id="Zipcode"
                      name="Zipcode"
                      className="form-control"
                      placeholder="Enter Zipcode"
                      value={zipcode}
                      onChange={(e) => setZipcode(e.target.value)}
                    />
                  </div>
                </div>

                {/* Assigned to Sales */}
                <div className="col-md-4">
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
                          menuPortalTarget={menuPortalTarget}
                          menuPosition="fixed"
                          classNamePrefix="select"
                      />
                    </div>
                  </div>
                </div>
              </form>
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
                onClick={handleSubmit}
              >
                Save Customer
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

export default AddCustomerModal;
