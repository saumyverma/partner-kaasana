"use client";
import React, { useState } from "react";
import Select from "react-select";
import CKEditorComponent from "../../common/CKEditor";
import UploadWithImagePreview from "../../common/UploadWithImagePreview";

const AddPackageForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  
  // Tab 1 - Package Information
  const [packageName, setPackageName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedPackageType, setSelectedPackageType] = useState(null);
  const [packageDuration, setPackageDuration] = useState("");
  const [selectedDestinationCountry, setSelectedDestinationCountry] = useState(null);
  const [destinationCovered, setDestinationCovered] = useState("");
  const [selectedPriceApplicableTo, setSelectedPriceApplicableTo] = useState(null);
  const [selectedBookingType, setSelectedBookingType] = useState(null);
  const [packageOverview, setPackageOverview] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  
  // Tab 2 - Day Wise Itinerary
  const [daySections, setDaySections] = useState([
    {
      id: 1,
      arrival: "", // Text field
      arrivalCountry: null,
      city: null,
      transfer: null,
      transferType: null,
      hotelCategory: null,
      hotelName: "",
      typeOfStay: null,
      meal: null,
      isActivity: null, // Yes/No dropdown
      activityTiming: "",
      selectedActivity: null,
      packageOverview: "",
      images: [],
    },
  ]);
  
  // Tab 3 - Price
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedFlightInclude, setSelectedFlightInclude] = useState(null);
  const [priceSections, setPriceSections] = useState([
    {
      id: 1,
      priceType: null,
      amount: "",
    },
  ]);
  const [packageValidity, setPackageValidity] = useState("");
  const [blackoutDays, setBlackoutDays] = useState("");

  // Tab 4 - Other Important Info
  const [importantNotes, setImportantNotes] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [terms, setTerms] = useState("");
  const [refund, setRefund] = useState("");
  const [packageInclusion, setPackageInclusion] = useState("");
  const [exclusion, setExclusion] = useState("");
  const [visaInformation, setVisaInformation] = useState("");
  const [destinationInfo, setDestinationInfo] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");

  // Set menu portal target on client side
  React.useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Helper function to check if HTML content has meaningful text
  const hasContent = (htmlString) => {
    if (!htmlString) return false;
    const text = htmlString.replace(/<[^>]*>/g, "").trim();
    return text.length > 0;
  };

  // Dummy data for dropdowns
  const dummyCountries = [
    { id: 1, name: "United States" },
    { id: 2, name: "United Kingdom" },
    { id: 3, name: "India" },
    { id: 4, name: "United Arab Emirates" },
    { id: 5, name: "Saudi Arabia" },
  ];

  // Package Theme options
  const themeOptions = [
    { value: "beach", label: "Beach" },
    { value: "mountain", label: "Mountain" },
    { value: "desert", label: "Desert" },
    { value: "city", label: "City" },
    { value: "adventure", label: "Adventure" },
    { value: "cultural", label: "Cultural" },
    { value: "wildlife", label: "Wildlife" },
  ];

  // Package Type options
  const packageTypeOptions = [
    { value: "tour", label: "Tour" },
    { value: "vacation", label: "Vacation" },
    { value: "adventure", label: "Adventure" },
    { value: "honeymoon", label: "Honeymoon" },
    { value: "family", label: "Family" },
    { value: "business", label: "Business" },
  ];

  // Price Applicable To options
  const priceApplicableToOptions = [
    { value: "adult", label: "Adult" },
    { value: "child", label: "Child" },
    { value: "infant", label: "Infant" },
    { value: "all", label: "All" },
  ];

  // Package Booking Type options
  const bookingTypeOptions = [
    { value: "per_person", label: "Per Person" },
    { value: "per_package", label: "Per Package" },
    { value: "per_room", label: "Per Room" },
    { value: "per_group", label: "Per Group" },
  ];

  // Convert countries to react-select format
  const countryOptions = dummyCountries.map((country) => ({
    value: country.id,
    label: country.name,
  }));

  // Handle images change
  const handleImagesChange = (files) => {
    setUploadedImages(files);
  };

  // Functions to manage day sections
  const addDaySection = () => {
    const newId = daySections.length > 0 ? Math.max(...daySections.map((s) => s.id)) + 1 : 1;
    setDaySections([
      ...daySections,
      {
        id: newId,
        arrivalCountry: null,
        city: null,
        transfer: null,
        transferType: null,
        hotelCategory: null,
        hotelName: "",
        typeOfStay: null,
        meal: null,
        arrival: "",
        isActivity: null,
        activityTiming: "",
        selectedActivity: null,
        packageOverview: "",
        images: [],
      },
    ]);
  };

  const removeDaySection = (id) => {
    if (daySections.length > 1) {
      setDaySections(daySections.filter((section) => section.id !== id));
    }
  };

  const updateDaySection = (id, field, value) => {
    setDaySections(
      daySections.map((section) => {
        if (section.id === id) {
          const updatedSection = { ...section, [field]: value };
          // If isActivity is changed to "no", clear activity fields
          if (field === 'isActivity' && value?.value === 'no') {
            updatedSection.activityTiming = "";
            updatedSection.selectedActivity = null;
          }
          return updatedSection;
        }
        return section;
      })
    );
  };

  const handleDayImagesChange = (dayId, files) => {
    setDaySections(
      daySections.map((section) =>
        section.id === dayId ? { ...section, images: files } : section
      )
    );
  };

  // Additional options for day sections
  const transferOptions = [
    { value: "airport", label: "Airport Transfer" },
    { value: "hotel", label: "Hotel Transfer" },
    { value: "station", label: "Station Transfer" },
    { value: "none", label: "No Transfer" },
  ];

  const transferTypeOptions = [
    { value: "private", label: "Private" },
    { value: "shared", label: "Shared" },
    { value: "scheduled", label: "Scheduled" },
  ];

  const hotelCategoryOptions = [
    { value: "3 Star", label: "3 Star" },
    { value: "4 Star", label: "4 Star" },
    { value: "5 Star", label: "5 Star" },
    { value: "7 Star", label: "7 Star" },
  ];

  const typeOfStayOptions = [
    { value: "single", label: "Single" },
    { value: "double", label: "Double" },
    { value: "twin", label: "Twin" },
    { value: "triple", label: "Triple" },
    { value: "suite", label: "Suite" },
  ];

  const mealOptions = [
    { value: "room_only", label: "Room Only" },
    { value: "breakfast", label: "Breakfast" },
    { value: "half_board", label: "Half Board" },
    { value: "full_board", label: "Full Board" },
    { value: "all_inclusive", label: "All Inclusive" },
  ];

  const dummyCities = [
    { id: 1, name: "Los Angeles" },
    { id: 2, name: "New York City" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Dubai" },
    { id: 5, name: "Abu Dhabi" },
    { id: 6, name: "Riyadh" },
  ];

  const cityOptions = dummyCities.map((city) => ({
    value: city.id,
    label: city.name,
  }));

  // Arrival Yes/No options
  const arrivalOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  // Activity list options
  const activityListOptions = [
    { value: "sightseeing", label: "Sightseeing" },
    { value: "adventure", label: "Adventure Sports" },
    { value: "cultural", label: "Cultural Tour" },
    { value: "shopping", label: "Shopping" },
    { value: "dining", label: "Dining" },
    { value: "entertainment", label: "Entertainment" },
    { value: "relaxation", label: "Relaxation" },
    { value: "wildlife", label: "Wildlife Safari" },
    { value: "beach", label: "Beach Activities" },
    { value: "hiking", label: "Hiking" },
  ];

  // Tab 3 - Price options
  const nationalityOptions = [
    { value: "indian", label: "Indian" },
    { value: "american", label: "American" },
    { value: "british", label: "British" },
    { value: "canadian", label: "Canadian" },
    { value: "australian", label: "Australian" },
    { value: "uae", label: "UAE" },
    { value: "saudi", label: "Saudi" },
  ];

  const currencyOptions = [
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
    { value: "inr", label: "INR" },
    { value: "aed", label: "AED" },
    { value: "sar", label: "SAR" },
  ];

  const flightIncludeOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const priceTypeOptions = [
    { value: "adult", label: "Adult" },
    { value: "child", label: "Child" },
    { value: "infant", label: "Infant" },
    { value: "single_occupancy", label: "Single Occupancy" },
    { value: "double_occupancy", label: "Double Occupancy" },
    { value: "triple_occupancy", label: "Triple Occupancy" },
  ];

  // Functions to manage price sections
  const addPriceSection = () => {
    const newId = priceSections.length > 0 ? Math.max(...priceSections.map((s) => s.id)) + 1 : 1;
    setPriceSections([
      ...priceSections,
      {
        id: newId,
        priceType: null,
        amount: "",
      },
    ]);
  };

  const removePriceSection = (id) => {
    if (priceSections.length > 1) {
      setPriceSections(priceSections.filter((section) => section.id !== id));
    }
  };

  const updatePriceSection = (id, field, value) => {
    setPriceSections(
      priceSections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };
  return (
      <div className='card'>
        <div className='card-body'>
          <p className='text-neutral-500'>
            Fill up your details and proceed next steps.
          </p>
          {/* Form Wizard Start */}
          <div className='form-wizard'>
            <form action='#' method='post'>
              <div className='form-wizard-header overflow-x-auto scroll-sm pb-8 my-32'>
                <ul className='list-unstyled form-wizard-list style-two'>
                  <li
                    className={`form-wizard-list__item
                      ${[2, 3, 4, 5].includes(currentStep) && "activated"}
                    ${currentStep === 1 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>1</span>
                    </div>
                    <span className='text text-xs fw-semibold'>
                      Package Information
                    </span>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[3, 4, 5].includes(currentStep) && "activated"}
                    ${currentStep === 2 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>2</span>
                    </div>
                    <span className='text text-xs fw-semibold'>
                      Day Wise Itinerary
                    </span>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[4, 5].includes(currentStep) && "activated"}
                    ${currentStep === 3 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>3</span>
                    </div>
                    <span className='text text-xs fw-semibold'>Price</span>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[5].includes(currentStep) && "activated"}
                    ${currentStep === 4 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>4</span>
                    </div>
                    <span className='text text-xs fw-semibold'>Other Important Info</span>
                  </li>
                  <li
                    className={`form-wizard-list__item
                    ${currentStep === 5 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>5</span>
                    </div>
                    <span className='text text-xs fw-semibold'>Complete</span>
                  </li>
                </ul>
              </div>
              <fieldset
                className={`wizard-fieldset ${currentStep === 1 && "show"} `}
              >
                <h6 className='text-md text-neutral-500 mb-24'>
                  Package Information
                </h6>
                <div className='row gy-3'>
                  {/* Package Name */}
                  <div className='col-sm-8'>
                    <label className='form-label'>Package Name*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Package Name'
                        value={packageName}
                        onChange={(e) => setPackageName(e.target.value)}
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Package Theme */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Package Theme*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedTheme}
                        onChange={setSelectedTheme}
                        options={themeOptions}
                        placeholder="Select Package Theme"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Package Type */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Package Type*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedPackageType}
                        onChange={setSelectedPackageType}
                        options={packageTypeOptions}
                        placeholder="Select Package Type"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Package Duration */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Package Duration (Days)*</label>
                    <div className='position-relative'>
                      <input
                        type='number'
                        min='1'
                        className='form-control wizard-required'
                        placeholder='Enter Duration in Days'
                        value={packageDuration}
                        onChange={(e) => setPackageDuration(e.target.value)}
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Destination Country */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Destination Country*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedDestinationCountry}
                        onChange={setSelectedDestinationCountry}
                        options={countryOptions}
                        placeholder="Select Destination Country"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Destination Covered */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Destination Covered*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Destinations Covered'
                        value={destinationCovered}
                        onChange={(e) => setDestinationCovered(e.target.value)}
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Price Applicable To */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Price Applicable To*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedPriceApplicableTo}
                        onChange={setSelectedPriceApplicableTo}
                        options={priceApplicableToOptions}
                        placeholder="Select Price Applicable To"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Package Booking Type */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Package Booking Type*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedBookingType}
                        onChange={setSelectedBookingType}
                        options={bookingTypeOptions}
                        placeholder="Select Booking Type"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Package Overview Editor */}
                  <div className='col-12'>
                    <label className='form-label'>Package Overview*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={packageOverview}
                        onChange={setPackageOverview}
                        placeholder='Enter Package Overview'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Upload Images */}
                  <div className='col-12'>
                    <label className='form-label mb-16'>Upload Images</label>
                    <UploadWithImagePreview onImagesChange={handleImagesChange} />
                  </div>

                  <div className='form-group text-end mt-24'>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                      disabled={
                        !packageName ||
                        !selectedTheme ||
                        !selectedPackageType ||
                        !packageDuration ||
                        !selectedDestinationCountry ||
                        !destinationCovered ||
                        !selectedPriceApplicableTo ||
                        !selectedBookingType ||
                        !hasContent(packageOverview)
                      }
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 2 && "show"} `}
              >
                <h6 className='text-md text-neutral-500 mb-24'>
                  Day Wise Itinerary
                </h6>
                
                {daySections.map((section, index) => (
                  <div key={section.id} className={`mb-24 ${index > 0 ? 'mt-24' : ''}`}>
                    <div className='card border radius-12'>
                      <div className='card-header border-bottom bg-primary-50 py-16 px-24'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <h6 className='text-md text-primary-light fw-semibold mb-0'>
                            Day {index + 1}
                          </h6>
                          {daySections.length > 1 && (
                            <button
                              type='button'
                              onClick={() => removeDaySection(section.id)}
                              className='btn btn-sm btn-danger-600'
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                      <div className='card-body p-24'>
                        <div className='row gy-3'>
                          {/* Arrival - Text Field - BEFORE Arrival in Country */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Arrival*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='Enter Arrival'
                                value={section.arrival}
                                onChange={(e) => updateDaySection(section.id, 'arrival', e.target.value)}
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Arrival in Country */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Arrival in Country*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.arrivalCountry}
                                onChange={(selected) => updateDaySection(section.id, 'arrivalCountry', selected)}
                                options={countryOptions}
                                placeholder="Select Country"
                                isClearable
                                isSearchable
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* City */}
                          <div className='col-sm-4'>
                            <label className='form-label'>City*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.city}
                                onChange={(selected) => updateDaySection(section.id, 'city', selected)}
                                options={cityOptions}
                                placeholder="Select City"
                                isClearable
                                isSearchable
                                isDisabled={!section.arrivalCountry}
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Transfer */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Transfer*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.transfer}
                                onChange={(selected) => updateDaySection(section.id, 'transfer', selected)}
                                options={transferOptions}
                                placeholder="Select Transfer"
                                isClearable
                                isSearchable
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Transfer Type */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Transfer Type*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.transferType}
                                onChange={(selected) => updateDaySection(section.id, 'transferType', selected)}
                                options={transferTypeOptions}
                                placeholder="Select Transfer Type"
                                isClearable
                                isSearchable
                                isDisabled={!section.transfer}
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Hotel Category */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Hotel Category*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.hotelCategory}
                                onChange={(selected) => updateDaySection(section.id, 'hotelCategory', selected)}
                                options={hotelCategoryOptions}
                                placeholder="Select Hotel Category"
                                isClearable
                                isSearchable
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Hotel Name */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Hotel Name*</label>
                            <div className='position-relative'>
                              <input
                                type='text'
                                className='form-control wizard-required'
                                placeholder='Enter Hotel Name'
                                value={section.hotelName}
                                onChange={(e) => updateDaySection(section.id, 'hotelName', e.target.value)}
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Type of Stay */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Type of Stay*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.typeOfStay}
                                onChange={(selected) => updateDaySection(section.id, 'typeOfStay', selected)}
                                options={typeOfStayOptions}
                                placeholder="Select Type of Stay"
                                isClearable
                                isSearchable
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Select Meal */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Select Meal*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.meal}
                                onChange={(selected) => updateDaySection(section.id, 'meal', selected)}
                                options={mealOptions}
                                placeholder="Select Meal"
                                isClearable
                                isSearchable
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Is Activity - Yes/No Dropdown */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Is Activity*</label>
                            <div className='position-relative'>
                              <Select
                                value={section.isActivity}
                                onChange={(selected) => updateDaySection(section.id, 'isActivity', selected)}
                                options={arrivalOptions}
                                placeholder="Select Yes or No"
                                isClearable
                                isSearchable
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Activity Timing - Show only if Is Activity is Yes */}
                          {section.isActivity?.value === 'yes' && (
                            <div className='col-sm-4'>
                              <label className='form-label'>Activity Timing*</label>
                              <div className='position-relative'>
                                <input
                                  type='text'
                                  className='form-control wizard-required'
                                  placeholder='Enter Activity Timing (e.g., 09:00 AM)'
                                  value={section.activityTiming}
                                  onChange={(e) => updateDaySection(section.id, 'activityTiming', e.target.value)}
                                  required
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

                          {/* Activity List - Show only if Is Activity is Yes */}
                          {section.isActivity?.value === 'yes' && (
                            <div className='col-sm-4'>
                              <label className='form-label'>Activity*</label>
                              <div className='position-relative'>
                                <Select
                                  value={section.selectedActivity}
                                  onChange={(selected) => updateDaySection(section.id, 'selectedActivity', selected)}
                                  options={activityListOptions}
                                  placeholder="Select Activity"
                                  isClearable
                                  isSearchable
                                  className="wizard-required"
                                  classNamePrefix="select"
                                  menuPortalTarget={menuPortalTarget}
                                  menuPosition="fixed"
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

                          {/* Package Overview */}
                          <div className='col-12'>
                            <label className='form-label'>Package Overview*</label>
                            <div className='position-relative'>
                              <CKEditorComponent
                                value={section.packageOverview}
                                onChange={(value) => updateDaySection(section.id, 'packageOverview', value)}
                                placeholder='Enter Package Overview for this day'
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Upload Images */}
                          <div className='col-12'>
                            <label className='form-label mb-16'>Upload Images</label>
                            <UploadWithImagePreview 
                              onImagesChange={(files) => handleDayImagesChange(section.id, files)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className='form-group mt-24'>
                  <button
                    type='button'
                    onClick={addDaySection}
                    className='btn btn-outline-primary-600 px-32'
                  >
                    + Add More Day
                  </button>
                </div>

                <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-24'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    type='button'
                    className='form-wizard-next-btn btn btn-primary-600 px-32'
                    disabled={
                      daySections.length === 0 ||
                      daySections.some(section => 
                        !section.arrival ||
                        !section.isActivity ||
                        (section.isActivity?.value === 'yes' && (!section.activityTiming || !section.selectedActivity)) ||
                        !section.arrivalCountry ||
                        !section.city ||
                        !section.transfer ||
                        !section.transferType ||
                        !section.hotelCategory ||
                        !section.hotelName ||
                        !section.typeOfStay ||
                        !section.meal ||
                        !hasContent(section.packageOverview)
                      )
                    }
                  >
                    Next
                  </button>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 3 && "show"} `}
              >
                <h6 className='text-md text-neutral-500 mb-24'>Price</h6>
                <div className='row gy-3'>
                  {/* First Row: Nationality, Currency, Flight Include */}
                  <div className='col-sm-4'>
                    <label className='form-label'>Nationality*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedNationality}
                        onChange={setSelectedNationality}
                        options={nationalityOptions}
                        placeholder="Select Nationality"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  <div className='col-sm-4'>
                    <label className='form-label'>Currency*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedCurrency}
                        onChange={setSelectedCurrency}
                        options={currencyOptions}
                        placeholder="Select Currency"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  <div className='col-sm-4'>
                    <label className='form-label'>Flight Include*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedFlightInclude}
                        onChange={setSelectedFlightInclude}
                        options={flightIncludeOptions}
                        placeholder="Select Yes or No"
                        isClearable
                        isSearchable
                        className="wizard-required"
                        classNamePrefix="select"
                        menuPortalTarget={menuPortalTarget}
                        menuPosition="fixed"
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  {/* Second Row: Price Type Sections */}
                  <div className='col-12'>
                    <label className='form-label mb-16'>Price Type*</label>
                    {priceSections.map((priceSection, index) => (
                      <div key={priceSection.id} className={`mb-16 ${index > 0 ? 'mt-16' : ''}`}>
                        <div className='row gy-3 align-items-end'>
                          <div className='col-sm-5'>
                            <label className='form-label'>Price Type*</label>
                            <div className='position-relative'>
                              <Select
                                value={priceSection.priceType}
                                onChange={(selected) => updatePriceSection(priceSection.id, 'priceType', selected)}
                                options={priceTypeOptions}
                                placeholder="Select Price Type"
                                isClearable
                                isSearchable
                                className="wizard-required"
                                classNamePrefix="select"
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>
                          <div className='col-sm-5'>
                            <label className='form-label'>Amount*</label>
                            <div className='position-relative'>
                              <input
                                type='number'
                                min='0'
                                step='0.01'
                                className='form-control wizard-required'
                                placeholder='Enter Amount'
                                value={priceSection.amount}
                                onChange={(e) => updatePriceSection(priceSection.id, 'amount', e.target.value)}
                                required
                              />
                              <div className='wizard-form-error' />
                            </div>
                          </div>
                          <div className='col-sm-2'>
                            {priceSections.length > 1 && (
                              <button
                                type='button'
                                onClick={() => removePriceSection(priceSection.id)}
                                className='btn btn-sm btn-danger-600 w-100'
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className='form-group mt-16'>
                      <button
                        type='button'
                        onClick={addPriceSection}
                        className='btn btn-outline-primary-600 px-32'
                      >
                        + Add More Price
                      </button>
                    </div>
                  </div>

                  {/* Third Row: Package Validity and Blackout Days */}
                  <div className='col-sm-6'>
                    <label className='form-label'>Package Validity*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Package Validity (e.g., 30 days)'
                        value={packageValidity}
                        onChange={(e) => setPackageValidity(e.target.value)}
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  <div className='col-sm-6'>
                    <label className='form-label'>Blackout Days*</label>
                    <div className='position-relative'>
                      <input
                        type='text'
                        className='form-control wizard-required'
                        placeholder='Enter Blackout Days'
                        value={blackoutDays}
                        onChange={(e) => setBlackoutDays(e.target.value)}
                        required
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>

                  <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-24'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                      disabled={
                        !selectedNationality ||
                        !selectedCurrency ||
                        !selectedFlightInclude ||
                        priceSections.length === 0 ||
                        priceSections.some(section => !section.priceType || !section.amount) ||
                        !packageValidity ||
                        !blackoutDays
                      }
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 4 && "show"} `}
              >
                <h6 className='text-md text-neutral-500 mb-24'>
                  Other Important Info
                </h6>
                <div className='row gy-3'>
                  <div className='col-12'>
                    <label className='form-label'>Important Notes*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={importantNotes}
                        onChange={setImportantNotes}
                        placeholder='Enter Important Notes'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Additional Info*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={additionalInfo}
                        onChange={setAdditionalInfo}
                        placeholder='Enter Additional Information'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Terms*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={terms}
                        onChange={setTerms}
                        placeholder='Enter Terms'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Refund*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={refund}
                        onChange={setRefund}
                        placeholder='Enter Refund Policy'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Package Inclusion*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={packageInclusion}
                        onChange={setPackageInclusion}
                        placeholder='Enter Package Inclusion'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Exclusion*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={exclusion}
                        onChange={setExclusion}
                        placeholder='Enter Exclusion'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Visa Information*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={visaInformation}
                        onChange={setVisaInformation}
                        placeholder='Enter Visa Information'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Destination Info*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={destinationInfo}
                        onChange={setDestinationInfo}
                        placeholder='Enter Destination Information'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Cancellation Policy*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={cancellationPolicy}
                        onChange={setCancellationPolicy}
                        placeholder='Enter Cancellation Policy'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-24'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                    >
                      Back
                    </button>
                    <button
                      onClick={nextStep}
                      type='button'
                      className='form-wizard-next-btn btn btn-primary-600 px-32'
                      disabled={
                        !hasContent(importantNotes) ||
                        !hasContent(additionalInfo) ||
                        !hasContent(terms) ||
                        !hasContent(refund) ||
                        !hasContent(packageInclusion) ||
                        !hasContent(exclusion) ||
                        !hasContent(visaInformation) ||
                        !hasContent(destinationInfo) ||
                        !hasContent(cancellationPolicy)
                      }
                    >
                      Next
                    </button>
                  </div>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 5 && "show"} `}
              >
                <div className='text-center mb-40'>
                  <div className='mb-32'>
                    <div className='d-inline-flex align-items-center justify-content-center bg-success-50 rounded-circle' style={{ width: '120px', height: '120px' }}>
                      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" className="text-success-600"/>
                      </svg>
                    </div>
                  </div>
                  <h4 className='text-lg text-neutral-600 fw-bold mb-16'>Success!</h4>
                  <p className='text-neutral-400 text-md mb-0'>
                    Your package has been successfully added to the inventory.
                  </p>
                  <p className='text-neutral-400 text-sm mt-8 mb-0'>
                    You can now view and manage it from the packages list.
                  </p>
                </div>
                <div className='form-group d-flex align-items-center justify-content-center gap-8'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                  >
                    Back
                  </button>
                  <button
                    type='button'
                    className='form-wizard-submit btn btn-primary-600 px-32'
                  >
                    Publish
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          {/* Form Wizard End */}
        </div>
      </div>
    
  );
};

export default AddPackageForm;
