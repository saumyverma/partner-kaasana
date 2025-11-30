"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useMemo, useEffect } from "react";
import Select from "react-select";

const salesPersonOptions = [
  { value: "0", label: "Main" },
  { value: "1", label: "Sara Khan" },
  { value: "2", label: "Jacob Jones" },
  { value: "3", label: "Albert Flores" },
];

// Hierarchical destination structure
const destinationData = [
  {
    id: "india",
    name: "India",
    type: "country",
    states: [
      {
        id: "delhi",
        name: "Delhi",
        type: "state",
        cities: [
          { id: "new-delhi", name: "New Delhi", type: "city" },
          { id: "noida", name: "Noida", type: "city" },
        ],
      },
      {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        type: "state",
        cities: [
          { id: "lucknow", name: "Lucknow", type: "city" },
          { id: "agra", name: "Agra", type: "city" },
        ],
      },
      {
        id: "maharashtra",
        name: "Maharashtra",
        type: "state",
        cities: [
          { id: "mumbai", name: "Mumbai", type: "city" },
          { id: "pune", name: "Pune", type: "city" },
        ],
      },
    ],
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    type: "country",
    states: [
      {
        id: "dubai-emirate",
        name: "Dubai",
        type: "state",
        cities: [
          { id: "dubai-city", name: "Dubai", type: "city" },
          { id: "jebel-ali", name: "Jebel Ali", type: "city" },
        ],
      },
      {
        id: "abu-dhabi-emirate",
        name: "Abu Dhabi",
        type: "state",
        cities: [
          { id: "abu-dhabi-city", name: "Abu Dhabi", type: "city" },
          { id: "al-ain", name: "Al Ain", type: "city" },
        ],
      },
    ],
  },
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    type: "country",
    states: [
      {
        id: "riyadh-province",
        name: "Riyadh",
        type: "state",
        cities: [
          { id: "riyadh-city", name: "Riyadh", type: "city" },
        ],
      },
    ],
  },
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
  { value: "online", label: "online" },
  { value: "offline", label: "offline" },
  { value: "event", label: "event" },
  { value: "referral", label: "referral" },
];

const leadMediumOptions = [
  { value: "website", label: "Website" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "email", label: "Email Campaign" },
  { value: "walk-in", label: "Walk-in" },
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

const getOptionByValue = (options, value) =>
  options.find((opt) => opt.value === value) || null;

const getOptionsByValues = (options, values) =>
  options.filter((opt) => values.includes(opt.value));

const AddLeadModal = () => {
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  const [leadType, setLeadType] = useState("B2C");
  
  // B2C & B2B Common Fields
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [holidayTypeSelection, setHolidayTypeSelection] = useState("");
  const [paxSelection, setPaxSelection] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [durationSelection, setDurationSelection] = useState("");
  const [origin, setOrigin] = useState("");
  const [leadSourceSelection, setLeadSourceSelection] = useState("");
  const [leadMediumSelection, setLeadMediumSelection] = useState("");
  const [assignedSales, setAssignedSales] = useState("");

  // B2B Only Fields
  const [companySelection, setCompanySelection] = useState("");
  const [leadCategoryType, setLeadCategoryType] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");

  // Add Destination Modal State
  const [showAddDestinationModal, setShowAddDestinationModal] = useState(false);
  const [newDestinationType, setNewDestinationType] = useState("country");
  const [newDestinationName, setNewDestinationName] = useState("");
  const [newDestinationParent, setNewDestinationParent] = useState("");
  const [destinationList, setDestinationList] = useState(destinationData);

  useEffect(() => {
    setMenuPortalTarget(document.body);
    
    // Close any open Select dropdowns when nested modal opens
    if (showAddDestinationModal) {
      // Close all react-select menus in main modal
      const selectMenus = document.querySelectorAll('.select__menu-portal, .select__menu');
      selectMenus.forEach(menu => {
        if (menu.closest('#addLeadModal')) {
          menu.style.display = 'none';
        }
      });
      
      // Blur all select inputs in main modal
      const selectInputs = document.querySelectorAll('#addLeadModal .select__control input');
      selectInputs.forEach(input => {
        input.blur();
      });
    }
  }, [showAddDestinationModal]);

  const nightsOptions = useMemo(
    () => Array.from({ length: 15 }, (_, index) => `${index + 1} Nights`),
    []
  );

  const salesPersonSelectOptions = useMemo(() => salesPersonOptions, []);
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
  const leadSourceSelectOptions = useMemo(() => leadSourceOptions, []);
  const leadMediumSelectOptions = useMemo(() => leadMediumOptions, []);
  const companyTypeSelectOptions = useMemo(() => companyTypeOptions, []);
  const partnerCompanySelectOptions = useMemo(() => partnerCompanyOptions, []);

  // Flatten hierarchical destination data into options
  const destinationOptions = useMemo(() => {
    const options = [];
    const addOption = (item, parentPath = "") => {
      const displayName = `${item.name} - ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}`;
      const fullPath = parentPath ? `${parentPath} > ${item.name}` : item.name;
      
      options.push({
        value: `${item.id}_${item.type}`,
        label: displayName,
        type: item.type,
        name: item.name,
        id: item.id,
        fullPath: fullPath,
      });

      if (item.states) {
        item.states.forEach((state) => {
          addOption(state, fullPath);
          if (state.cities) {
            state.cities.forEach((city) => {
              addOption(city, `${fullPath} > ${state.name}`);
            });
          }
        });
      }
    };

    destinationList.forEach((country) => {
      addOption(country);
    });

    // Add "Add Destination" option at the end
    options.push({
      value: "__add_destination__",
      label: "Add Destination",
      isAddOption: true,
    });

    return options;
  }, [destinationList]);

  // Handle destination selection
  const handleDestinationChange = (selected) => {
    const filtered = selected ? selected.filter(opt => !opt.isAddOption) : [];
    setDestinations(filtered.map((opt) => opt.value));
  };

  // Handle opening Add Destination modal - close all dropdowns first
  const handleOpenAddDestinationModal = () => {
    // Close all react-select dropdowns
    document.querySelectorAll('.select__menu-portal, .select__menu').forEach(menu => {
      if (menu.closest('#addLeadModal')) {
        menu.style.display = 'none';
      }
    });
    
    // Blur all select inputs
    document.querySelectorAll('#addLeadModal .select__control input').forEach(input => {
      input.blur();
    });
    
    // Small delay to ensure dropdowns are closed
    setTimeout(() => {
      setShowAddDestinationModal(true);
    }, 100);
  };

  // Handle adding new destination
  const handleAddDestination = () => {
    if (!newDestinationName.trim()) return;

    const newDestination = {
      id: newDestinationName.toLowerCase().replace(/\s+/g, "-"),
      name: newDestinationName,
      type: newDestinationType,
    };

    if (newDestinationType === "country") {
      setDestinationList([...destinationList, { ...newDestination, states: [] }]);
    } else if (newDestinationType === "state") {
      const countryId = newDestinationParent.split("_")[0];
      const updatedList = destinationList.map((country) => {
        if (country.id === countryId) {
          return {
            ...country,
            states: [...(country.states || []), { ...newDestination, cities: [] }],
          };
        }
        return country;
      });
      setDestinationList(updatedList);
    } else if (newDestinationType === "city") {
      const [countryId, stateId] = newDestinationParent.split("_");
      const updatedList = destinationList.map((country) => {
        if (country.id === countryId) {
          return {
            ...country,
            states: (country.states || []).map((state) => {
              if (state.id === stateId) {
                return {
                  ...state,
                  cities: [...(state.cities || []), newDestination],
                };
              }
              return state;
            }),
          };
        }
        return country;
      });
      setDestinationList(updatedList);
    }

    // Reset form
    setNewDestinationName("");
    setNewDestinationParent("");
    setShowAddDestinationModal(false);
  };

  // Get parent options for state/city
  const getParentOptions = () => {
    if (newDestinationType === "state") {
      return destinationList.map((country) => ({
        value: `${country.id}_country`,
        label: `${country.name} - Country`,
      }));
    } else if (newDestinationType === "city") {
      const options = [];
      destinationList.forEach((country) => {
        (country.states || []).forEach((state) => {
          options.push({
            value: `${country.id}_${state.id}`,
            label: `${country.name} > ${state.name} - State`,
          });
        });
      });
      return options;
    }
    return [];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <div
        className='modal fade'
        id='addLeadModal'
        tabIndex={-1}
        aria-labelledby='addLeadModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable'>
          <div className='modal-content border radius-16 bg-base' style={{ position: 'relative' }}>
            {showAddDestinationModal && (
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  zIndex: 1069,
                  backgroundColor: 'transparent'
                }} 
              />
            )}
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addLeadModalLabel'>
                Add Lead
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form id="addLeadForm" className="row gy-3" onSubmit={handleSubmit}>
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
                          id="leadTypeB2C"
                          value="B2C"
                          checked={leadType === "B2C"}
                          onChange={() => setLeadType("B2C")}
                        />
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="leadTypeB2C"
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
                          id="leadTypeB2B"
                          value="B2B"
                          checked={leadType === "B2B"}
                          onChange={() => setLeadType("B2B")}
                        />
                        <label
                          className="form-check-label line-height-1 fw-medium text-secondary-light"
                          htmlFor="leadTypeB2B"
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
                      {companySelection && (
                        <input type="hidden" name="CompanyName" value={companySelection} />
                      )}
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
                      {leadCategoryType && (
                        <input type="hidden" name="leadCategoryType" value={leadCategoryType} />
                      )}
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
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Customer Number */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="CustomercontactNumber">
                    Customer Number <sup>*</sup>
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
                      value={customerNumber}
                      onChange={(e) => setCustomerNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Customer Email */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="Customeremail">
                    Customer Email ID
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mage:email" />
                    </span>
                    <input
                      type="email"
                      id="Customeremail"
                      name="Customeremail"
                      className="form-control"
                      placeholder="Enter Customer Email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Travel Date */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="TravelDate">
                    Travel Date
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="solar:calendar-linear" />
                    </span>
                    <input
                      type="date"
                      id="TravelDate"
                      name="TravelDate"
                      className="form-control"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* Holiday Type */}
                <div className="col-md-4">
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
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  {holidayTypeSelection && (
                    <input type="hidden" name="HolidayType" value={holidayTypeSelection} />
                  )}
                </div>

                {/* No of Pax */}
                <div className="col-md-4">
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
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  {paxSelection && (
                    <input type="hidden" name="NoofPax" value={paxSelection} />
                  )}
                </div>

                {/* Destination */}
                <div className="col-md-4">
                  <label className="form-label" htmlFor="Destinations">
                    Destination <sup>*</sup>
                  </label>
                  <div className="icon-field">
                    <span className="icon">
                      <Icon icon="mdi:earth" />
                    </span>
                    <div className="form-control p-0 border-0">
                      <Select
                        inputId="Destinations"
                        options={destinationOptions}
                        placeholder="Select Destination"
                        isMulti
                        isClearable
                        isSearchable
                        closeMenuOnSelect={false}
                        value={getOptionsByValues(destinationOptions.filter(opt => !opt.isAddOption), destinations)}
                        onChange={handleDestinationChange}
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                        classNamePrefix="select"
                        components={{
                          Option: ({ innerProps, data, isSelected, isFocused }) => {
                            if (data.isAddOption) {
                              return (
                                <div
                                  {...innerProps}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleOpenAddDestinationModal();
                                  }}
                                  className={`px-3 py-2 d-flex align-items-center gap-2 text-primary ${
                                    isFocused ? "bg-primary-50" : ""
                                  }`}
                                  style={{ cursor: "pointer" }}
                                >
                                  <Icon icon="mdi:plus-circle" />
                                  <span className="fw-medium">{data.label}</span>
                                </div>
                              );
                            }
                            return (
                              <div
                                {...innerProps}
                                className={`px-3 py-2 ${
                                  isSelected ? "bg-primary-100" : isFocused ? "bg-neutral-50" : ""
                                }`}
                                style={{ cursor: "pointer" }}
                              >
                                <div className="d-flex align-items-center gap-2">
                                  {isSelected && <Icon icon="mdi:check" className="text-primary" />}
                                  <span className={isSelected ? "fw-medium" : ""}>{data.label}</span>
                                </div>
                              </div>
                            );
                          },
                        }}
                      />
                    </div>
                  </div>
                  {destinations.map((value) => (
                    <input key={`Destinations-${value}`} type="hidden" name="Destinations[]" value={value} />
                  ))}
                </div>

                {/* Duration */}
                <div className="col-md-4">
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
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  {durationSelection && (
                    <input type="hidden" name="Duration" value={durationSelection} />
                  )}
                </div>

                {/* Origin */}
                <div className="col-md-4">
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
                      placeholder="Enter Origin"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    />
                  </div>
                </div>

                {/* Lead Source */}
                <div className="col-md-4">
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
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  {leadSourceSelection && (
                    <input type="hidden" name="LeadSource" value={leadSourceSelection} />
                  )}
                </div>

                {/* Lead Medium */}
                <div className="col-md-4">
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
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  {leadMediumSelection && (
                    <input type="hidden" name="LeadMedium" value={leadMediumSelection} />
                  )}
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
                  {assignedSales && (
                    <input type="hidden" name="AssignedSales" value={assignedSales} />
                  )}
                </div>
              </form>
            </div>
            <div className='modal-footer py-16 px-24 border border-bottom-0 border-start-0 border-end-0'>
              <button
                type='button'
                className='btn btn-neutral-500 border-neutral-100 px-32'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-primary-600 px-32'
                onClick={handleSubmit}
              >
                Save Lead
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Destination Modal */}
      {showAddDestinationModal && (
        <>
          <div
            className="modal fade show d-block"
            role="dialog"
            aria-modal="true"
            data-nested="true"
            style={{ zIndex: 1070, position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            <div className="modal-dialog modal-dialog-centered" style={{ zIndex: 1071 }}>
              <div className="modal-content border radius-16 bg-base" style={{ zIndex: 1071 }}>
                <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                  <h5 className="modal-title fs-5 text-primary-light fw-semibold">
                    Add New Destination
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setShowAddDestinationModal(false);
                      setNewDestinationName("");
                      setNewDestinationParent("");
                    }}
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body p-24">
                  <div className="row gy-3">
                    <div className="col-12">
                      <label className="form-label">
                        Destination Type <sup>*</sup>
                      </label>
                      <div className="d-flex flex-wrap gap-3">
                        <div
                          className={`bg-neutral-100 px-20 py-6 radius-8 ${
                            newDestinationType === "country"
                              ? "border border-primary"
                              : "border border-transparent"
                          }`}
                        >
                          <span className="form-check checked-success d-flex align-items-center gap-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="destinationType"
                              id="destTypeCountry"
                              value="country"
                              checked={newDestinationType === "country"}
                              onChange={(e) => {
                                setNewDestinationType(e.target.value);
                                setNewDestinationParent("");
                              }}
                            />
                            <label
                              className="form-check-label line-height-1 fw-medium text-secondary-light"
                              htmlFor="destTypeCountry"
                            >
                              Country
                            </label>
                          </span>
                        </div>
                        <div
                          className={`bg-neutral-100 px-20 py-6 radius-8 ${
                            newDestinationType === "state"
                              ? "border border-primary"
                              : "border border-transparent"
                          }`}
                        >
                          <span className="form-check checked-success d-flex align-items-center gap-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="destinationType"
                              id="destTypeState"
                              value="state"
                              checked={newDestinationType === "state"}
                              onChange={(e) => {
                                setNewDestinationType(e.target.value);
                                setNewDestinationParent("");
                              }}
                            />
                            <label
                              className="form-check-label line-height-1 fw-medium text-secondary-light"
                              htmlFor="destTypeState"
                            >
                              State
                            </label>
                          </span>
                        </div>
                        <div
                          className={`bg-neutral-100 px-20 py-6 radius-8 ${
                            newDestinationType === "city"
                              ? "border border-primary"
                              : "border border-transparent"
                          }`}
                        >
                          <span className="form-check checked-success d-flex align-items-center gap-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="destinationType"
                              id="destTypeCity"
                              value="city"
                              checked={newDestinationType === "city"}
                              onChange={(e) => {
                                setNewDestinationType(e.target.value);
                                setNewDestinationParent("");
                              }}
                            />
                            <label
                              className="form-check-label line-height-1 fw-medium text-secondary-light"
                              htmlFor="destTypeCity"
                            >
                              City
                            </label>
                          </span>
                        </div>
                      </div>
                    </div>

                    {(newDestinationType === "state" || newDestinationType === "city") && (
                      <div className="col-12">
                        <label className="form-label">
                          {newDestinationType === "state" ? "Country" : "State"} <sup>*</sup>
                        </label>
                        <div className="icon-field">
                          <span className="icon">
                            <Icon icon="mdi:earth" />
                          </span>
                          <div className="form-control p-0 border-0">
                            <Select
                              options={getParentOptions()}
                              placeholder={`Select ${newDestinationType === "state" ? "Country" : "State"}`}
                              isClearable
                              isSearchable
                              value={getOptionByValue(getParentOptions(), newDestinationParent)}
                              onChange={(selected) =>
                                setNewDestinationParent(selected ? selected.value : "")
                              }
                              menuPortalTarget={menuPortalTarget}
                              menuPosition="fixed"
                              classNamePrefix="select"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <label className="form-label">
                        {newDestinationType === "country"
                          ? "Country"
                          : newDestinationType === "state"
                          ? "State"
                          : "City"}{" "}
                        Name <sup>*</sup>
                      </label>
                      <div className="icon-field">
                        <span className="icon">
                          <Icon icon="mdi:map-marker" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={`Enter ${newDestinationType === "country" ? "Country" : newDestinationType === "state" ? "State" : "City"} Name`}
                          value={newDestinationName}
                          onChange={(e) => setNewDestinationName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer py-16 px-24 border border-bottom-0 border-start-0 border-end-0">
                  <button
                    type="button"
                    className="btn btn-neutral-500 border-neutral-100 px-32"
                    onClick={() => {
                      setShowAddDestinationModal(false);
                      setNewDestinationName("");
                      setNewDestinationParent("");
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-600 px-32"
                    onClick={handleAddDestination}
                    disabled={!newDestinationName.trim() || (newDestinationType !== "country" && !newDestinationParent)}
                  >
                    Add Destination
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
            className="modal-backdrop fade show"
            style={{ backgroundColor: "rgba(15, 23, 42, 0.65)", zIndex: 1065 }}
            onClick={() => {
              setShowAddDestinationModal(false);
              setNewDestinationName("");
              setNewDestinationParent("");
            }}
          />
        </>
      )}
    </>
  );
};

export default AddLeadModal;
