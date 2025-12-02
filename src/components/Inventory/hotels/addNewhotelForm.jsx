"use client";
import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import CKEditorComponent from "../../common/CKEditor";
import AddOurHotelModal from "./AddOurHotelModal";

const AddNewHotelForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPropertyType, setSelectedPropertyType] = useState(null);
  const [priceSections, setPriceSections] = useState([
    {
      id: 1,
      roomType: null,
      numberOfRooms: "",
      bedOptions: null,
      numberOfBeds: "",
      singlePricing: "",
      sharingPricing: "",
      twinPricing: "",
      triplePricing: "",
      childWithBed: "",
      childWithoutBed: "",
      extraBed: "",
      discountMultipleOccupancy: "",
      mealPlan: null,
      hotelPrice: "",
      blackoutDay: null,
      validity: null,
    },
  ]);
  const [selectedHotelCountry, setSelectedHotelCountry] = useState(null);
  const [selectedHotelState, setSelectedHotelState] = useState(null);
  const [selectedHotelCity, setSelectedHotelCity] = useState(null);
  const [selectedCheckIn, setSelectedCheckIn] = useState(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");
  const [refundPolicy, setRefundPolicy] = useState("");
  const [isAddHotelModalOpen, setIsAddHotelModalOpen] = useState(false);
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

  const dummyHotels = [
    { id: 1, name: "Grand Hotel, Los Angeles, California, United States" },
    { id: 2, name: "Luxury Resort, New York City, New York, United States" },
    { id: 3, name: "Ocean View Hotel, Mumbai, Maharashtra, India" },
    { id: 4, name: "Desert Palace, Dubai, Dubai, United Arab Emirates" },
    { id: 5, name: "Royal Suites, Abu Dhabi, Abu Dhabi, United Arab Emirates" },
    { id: 6, name: "City Center Hotel, Riyadh, Riyadh, Saudi Arabia" },
  ];

  // Hotel details data
  const hotelDetails = {
    1: {
      name: "Grand Hotel",
      category: "5 Star",
      rating: 4.8,
      propertyType: "Luxury Hotel",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      address: "123 Sunset Boulevard, Los Angeles, CA 90028",
      checkIn: "15:00",
      checkOut: "11:00",
    },
    2: {
      name: "Luxury Resort",
      category: "5 Star",
      rating: 4.9,
      propertyType: "Resort",
      country: "United States",
      state: "New York",
      city: "New York City",
      address: "456 Fifth Avenue, New York, NY 10001",
      checkIn: "14:00",
      checkOut: "12:00",
    },
    3: {
      name: "Ocean View Hotel",
      category: "4 Star",
      rating: 4.5,
      propertyType: "Beach Hotel",
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      address: "789 Marine Drive, Mumbai, Maharashtra 400001",
      checkIn: "15:00",
      checkOut: "11:00",
    },
    4: {
      name: "Desert Palace",
      category: "5 Star",
      rating: 4.7,
      propertyType: "Luxury Hotel",
      country: "United Arab Emirates",
      state: "Dubai",
      city: "Dubai",
      address: "321 Sheikh Zayed Road, Dubai, UAE",
      checkIn: "15:00",
      checkOut: "12:00",
    },
    5: {
      name: "Royal Suites",
      category: "5 Star",
      rating: 4.9,
      propertyType: "Luxury Suites",
      country: "United Arab Emirates",
      state: "Abu Dhabi",
      city: "Abu Dhabi",
      address: "654 Corniche Road, Abu Dhabi, UAE",
      checkIn: "14:00",
      checkOut: "11:00",
    },
    6: {
      name: "City Center Hotel",
      category: "4 Star",
      rating: 4.6,
      propertyType: "Business Hotel",
      country: "Saudi Arabia",
      state: "Riyadh",
      city: "Riyadh",
      address: "987 King Fahd Road, Riyadh, Saudi Arabia",
      checkIn: "15:00",
      checkOut: "12:00",
    },
  };

  // Dummy suppliers
  const dummySuppliers = [
    { id: 1, name: "Global Travel Solutions" },
    { id: 2, name: "Premium Hotels Network" },
    { id: 3, name: "Luxury Accommodations Ltd" },
    { id: 4, name: "Worldwide Hotel Partners" },
    { id: 5, name: "Elite Travel Services" },
  ];

  // Category options
  const categoryOptions = [
    { value: "3 Star", label: "3 Star" },
    { value: "4 Star", label: "4 Star" },
    { value: "5 Star", label: "5 Star" },
    { value: "7 Star", label: "7 Star" },
  ];

  // Room type options
  const roomTypeOptions = [
    { value: "Single Room", label: "Single Room" },
    { value: "Double Room", label: "Double Room" },
    { value: "Twin Room", label: "Twin Room" },
    { value: "Triple Room", label: "Triple Room" },
    { value: "Suite", label: "Suite" },
    { value: "Deluxe Room", label: "Deluxe Room" },
    { value: "Executive Room", label: "Executive Room" },
  ];

  // Bed options
  const bedOptions = [
    { value: "Single Bed", label: "Single Bed" },
    { value: "Double Bed", label: "Double Bed" },
    { value: "Queen Bed", label: "Queen Bed" },
    { value: "King Bed", label: "King Bed" },
    { value: "Twin Beds", label: "Twin Beds" },
  ];

  // Meal plan options
  const mealPlanOptions = [
    { value: "Room Only", label: "Room Only" },
    { value: "Breakfast", label: "Breakfast" },
    { value: "Half Board", label: "Half Board" },
    { value: "Full Board", label: "Full Board" },
    { value: "All Inclusive", label: "All Inclusive" },
  ];

  // Blackout day options
  const blackoutDayOptions = [
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
    { value: "Sunday", label: "Sunday" },
  ];

  // Validity options (date range)
  const validityOptions = [
    { value: "1 Month", label: "1 Month" },
    { value: "3 Months", label: "3 Months" },
    { value: "6 Months", label: "6 Months" },
    { value: "1 Year", label: "1 Year" },
    { value: "Custom", label: "Custom" },
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

  const hotelOptions = [
    ...dummyHotels.map((hotel) => ({
      value: hotel.id,
      label: hotel.name,
    })),
    {
      value: 'add_hotel',
      label: '+ Add Our Hotel',
      isAddOption: true,
    },
  ];

  const supplierOptions = dummySuppliers.map((supplier) => ({
    value: supplier.id,
    label: supplier.name,
  }));

  // Get selected hotel details
  const selectedHotelDetails = selectedHotel ? hotelDetails[selectedHotel.value] : null;

  // Initialize hotel info fields when hotel is selected
  useEffect(() => {
    if (selectedHotelDetails) {
      setSelectedCategory(categoryOptions.find(opt => opt.value === selectedHotelDetails.category) || null);
      setSelectedPropertyType(propertyTypeOptions.find(opt => opt.value === selectedHotelDetails.propertyType) || null);
      setSelectedHotelCountry(countryOptions.find(opt => opt.label === selectedHotelDetails.country) || null);
      setSelectedHotelState(stateOptions.find(opt => opt.label === selectedHotelDetails.state) || null);
      setSelectedHotelCity(cityOptions.find(opt => opt.label === selectedHotelDetails.city) || null);
      setSelectedCheckIn(checkInOptions.find(opt => opt.value === selectedHotelDetails.checkIn) || null);
      setSelectedCheckOut(checkOutOptions.find(opt => opt.value === selectedHotelDetails.checkOut) || null);
    } else {
      // Reset all fields when hotel is deselected
      setSelectedCategory(null);
      setSelectedPropertyType(null);
      setSelectedHotelCountry(null);
      setSelectedHotelState(null);
      setSelectedHotelCity(null);
      setSelectedCheckIn(null);
      setSelectedCheckOut(null);
    }
  }, [selectedHotel]);

  // Functions to manage price sections
  const addPriceSection = () => {
    const newId = priceSections.length > 0 ? Math.max(...priceSections.map((s) => s.id)) + 1 : 1;
    setPriceSections([
      ...priceSections,
      {
        id: newId,
        roomType: null,
        numberOfRooms: "",
        bedOptions: null,
        numberOfBeds: "",
        singlePricing: "",
        sharingPricing: "",
        twinPricing: "",
        triplePricing: "",
        childWithBed: "",
        childWithoutBed: "",
        extraBed: "",
        discountMultipleOccupancy: "",
        mealPlan: null,
        hotelPrice: "",
        blackoutDay: null,
        validity: null,
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

  const nextStep = () => {
    if (currentStep < 4) {
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
    // Strip HTML tags and check for meaningful content
    const text = htmlString.replace(/<[^>]*>/g, "").trim();
    return text.length > 0;
  };

  // Custom Option component with Bootstrap classes (only for hotel select)
  const CustomHotelOption = (props) => {
    const { data, innerProps } = props;
    const className = data.isAddOption 
      ? `${props.className || ''} select__option--add-hotel`.trim()
      : props.className;
    
    if (data.isAddOption) {
      return (
        <div
          {...innerProps}
          className={className}
          style={{
            padding: '12px 16px',
            fontWeight: 600,
            color: '#0d6efd',
            backgroundColor: props.isFocused ? '#e7f1ff' : '#f8f9fa',
            borderTop: '1px solid #dee2e6',
            cursor: 'pointer',
            position: 'sticky',
            bottom: 0,
            zIndex: 10,
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsAddHotelModalOpen(true);
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>+</span>
            <span>Add Our Hotel</span>
          </span>
        </div>
      );
    }
    
    return (
      <components.Option
        {...props}
        className={className}
      >
        {props.children}
      </components.Option>
    );
  };

  // Custom MenuList to fix "Add Our Hotel" at bottom
  const CustomMenuList = (props) => {
    return (
      <components.MenuList 
        {...props} 
        className="select__menu-list--custom"
        style={{
          paddingBottom: '0',
        }}
      >
        {props.children}
      </components.MenuList>
    );
  };

  // Custom filter function to always show "Add Our Hotel" option
  const filterHotelOptions = (option, inputValue) => {
    // Always show the "Add Our Hotel" option
    if (option.data.isAddOption) {
      return true;
    }
    // Filter other options normally
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
  };

  return (
    <>
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
                      ${[2, 3, 4].includes(currentStep) && "activated"}
                    ${currentStep === 1 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>1</span>
                    </div>
                    <span className='text text-xs fw-semibold'>
                      Search Hotels
                    </span>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[3, 4].includes(currentStep) && "activated"}
                    ${currentStep === 2 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>2</span>
                    </div>
                    <span className='text text-xs fw-semibold'>
                      Room and Prices
                    </span>
                  </li>
                  <li
                    className={`form-wizard-list__item
                      ${[4].includes(currentStep) && "activated"}
                    ${currentStep === 3 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>3</span>
                    </div>
                    <span className='text text-xs fw-semibold'>Other Important Info</span>
                  </li>
                  <li
                    className={`form-wizard-list__item

                    ${currentStep === 4 && "active"} `}
                  >
                    <div className='form-wizard-list__line'>
                      <span className='count'>4</span>
                    </div>
                    <span className='text text-xs fw-semibold'>Complete and Success</span>
                  </li>
                </ul>
              </div>
              <fieldset
                className={`wizard-fieldset ${currentStep === 1 && "show"} `}
              >
                <div className='card border radius-12 bg-primary-50 mb-24'>
                  <div className='card-body p-24'>
                    <h6 className='text-md text-primary-light fw-semibold mb-20'>
                      Search Hotels
                    </h6>
                    <div className='row gy-3'>
                      <div className='col-sm-4'>
                        <label className='form-label'>Country*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedCountry}
                            onChange={(selected) => {
                              setSelectedCountry(selected);
                              setSelectedState(null);
                              setSelectedCity(null);
                              setSelectedHotel(null);
                              setSelectedSupplier(null);
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
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <label className='form-label'>State*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedState}
                            onChange={(selected) => {
                              setSelectedState(selected);
                              setSelectedCity(null);
                              setSelectedHotel(null);
                              setSelectedSupplier(null);
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
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-4'>
                        <label className='form-label'>City*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedCity}
                            onChange={(selected) => {
                              setSelectedCity(selected);
                              setSelectedHotel(null);
                              setSelectedSupplier(null);
                            }}
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
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-12'>
                        <label className='form-label'>Hotel*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedHotel}
                            onChange={(selected) => {
                              if (selected && selected.value === 'add_hotel') {
                                setIsAddHotelModalOpen(true);
                                setSelectedHotel(null);
                              } else {
                                setSelectedHotel(selected);
                                setSelectedSupplier(null);
                              }
                            }}
                            options={hotelOptions}
                            placeholder="Select Hotel"
                            isClearable
                            isSearchable
                            isDisabled={!selectedCity}
                            className="wizard-required"
                            classNamePrefix="select"
                            components={{ 
                              Option: CustomHotelOption,
                              MenuList: CustomMenuList
                            }}
                            filterOption={filterHotelOptions}
                            menuPortalTarget={menuPortalTarget}
                            menuPosition="fixed"
                            styles={{
                              control: (base) => ({
                                ...base,
                                minHeight: '38px',
                              }),
                              menuList: (base) => ({
                                ...base,
                                maxHeight: '300px',
                                paddingBottom: '0',
                              }),
                            }}
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hotel Information Section - Appears when hotel is selected */}
                {selectedHotelDetails && (
                  <div className='mt-32 pt-24 border-top'>
                    <h6 className='text-md text-neutral-500 mb-24'>
                      Hotel Information
                    </h6>
                    <div className='row gy-3'>
                      <div className='col-sm-6'>
                        <label className='form-label'>Hotel Name</label>
                        <div className='position-relative'>
                          <input
                            type='text'
                            className='form-control'
                            value={selectedHotelDetails.name}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Category*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedCategory}
                            onChange={(selected) => setSelectedCategory(selected)}
                            options={categoryOptions}
                            placeholder="Select Category"
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
                      <div className='col-sm-3'>
                        <label className='form-label'>Property Type*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedPropertyType}
                            onChange={(selected) => setSelectedPropertyType(selected)}
                            options={propertyTypeOptions}
                            placeholder="Select Property Type"
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
                        <label className='form-label'>Check In Time*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedCheckIn}
                            onChange={(selected) => setSelectedCheckIn(selected)}
                            options={checkInOptions}
                            placeholder="Select Check In Time"
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
                        <label className='form-label'>Check Out Time*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedCheckOut}
                            onChange={(selected) => setSelectedCheckOut(selected)}
                            options={checkOutOptions}
                            placeholder="Select Check Out Time"
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
                        <label className='form-label'>Supplier*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedSupplier}
                            onChange={(selected) => setSelectedSupplier(selected)}
                            options={supplierOptions}
                            placeholder="Select Supplier"
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
                        <label className='form-label'>Country*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedHotelCountry}
                            onChange={(selected) => setSelectedHotelCountry(selected)}
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
                      <div className='col-sm-4'>
                        <label className='form-label'>State*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedHotelState}
                            onChange={(selected) => setSelectedHotelState(selected)}
                            options={stateOptions}
                            placeholder="Select State"
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
                        <label className='form-label'>City*</label>
                        <div className='position-relative'>
                          <Select
                            value={selectedHotelCity}
                            onChange={(selected) => setSelectedHotelCity(selected)}
                            options={cityOptions}
                            placeholder="Select City"
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
                      <div className='col-12'>
                        <label className='form-label'>Address</label>
                        <div className='position-relative'>
                          <input
                            type='text'
                            className='form-control'
                            value={selectedHotelDetails.address}
                            readOnly
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                <div className='form-group text-end mt-24'>
                  <button
                    onClick={nextStep}
                    type='button'
                    className='form-wizard-next-btn btn btn-primary-600 px-32'
                    disabled={
                      !selectedCountry || 
                      !selectedState || 
                      !selectedCity || 
                      !selectedHotel || 
                      !selectedCategory ||
                      !selectedPropertyType ||
                      !selectedHotelCountry ||
                      !selectedHotelState ||
                      !selectedHotelCity ||
                      !selectedCheckIn ||
                      !selectedCheckOut ||
                      !selectedSupplier
                    }
                  >
                    Next
                  </button>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 2 && "show"} `}
              >
                <h6 className='text-md text-neutral-500 mb-24'>
                  Room and Prices
                </h6>
                
                {priceSections.map((section, index) => (
                  <div key={section.id} className={`mb-24 ${index > 0 ? 'mt-24' : ''}`}>
                    <div className='card border radius-12'>
                      <div className='card-header border-bottom bg-primary-50 py-16 px-24'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <h6 className='text-md text-primary-light fw-semibold mb-0'>
                            Price Type {index + 1}
                          </h6>
                          {priceSections.length > 1 && (
                            <button
                              type='button'
                              onClick={() => removePriceSection(section.id)}
                              className='btn btn-sm btn-danger-600'
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                      <div className='card-body p-24'>
                        <div className='row gy-3'>
                      <div className='col-sm-3'>
                        <label className='form-label'>Room Type*</label>
                        <div className='position-relative'>
                          <Select
                            value={section.roomType}
                            onChange={(selected) => updatePriceSection(section.id, 'roomType', selected)}
                            options={roomTypeOptions}
                            placeholder="Select Room Type"
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
                      <div className='col-sm-3'>
                        <label className='form-label'>Number of Rooms*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Number of Rooms'
                            value={section.numberOfRooms}
                            onChange={(e) => updatePriceSection(section.id, 'numberOfRooms', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Bed Options*</label>
                        <div className='position-relative'>
                          <Select
                            value={section.bedOptions}
                            onChange={(selected) => updatePriceSection(section.id, 'bedOptions', selected)}
                            options={bedOptions}
                            placeholder="Select Bed Options"
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
                      <div className='col-sm-3'>
                        <label className='form-label'>Number of Beds*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Number of Beds'
                            value={section.numberOfBeds}
                            onChange={(e) => updatePriceSection(section.id, 'numberOfBeds', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      
                      <div className='col-12'>
                        <h6 className='text-sm text-neutral-600 mb-16 mt-8'>Pricing</h6>
                      </div>
                      
                      <div className='col-sm-3'>
                        <label className='form-label'>Single Pricing*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Single Pricing'
                            value={section.singlePricing}
                            onChange={(e) => updatePriceSection(section.id, 'singlePricing', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Sharing Pricing*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Sharing Pricing'
                            value={section.sharingPricing}
                            onChange={(e) => updatePriceSection(section.id, 'sharingPricing', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Twin Pricing*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Twin Pricing'
                            value={section.twinPricing}
                            onChange={(e) => updatePriceSection(section.id, 'twinPricing', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Triple Pricing*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Triple Pricing'
                            value={section.triplePricing}
                            onChange={(e) => updatePriceSection(section.id, 'triplePricing', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Child With Bed*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Child With Bed Pricing'
                            value={section.childWithBed}
                            onChange={(e) => updatePriceSection(section.id, 'childWithBed', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Child Without Bed*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Child Without Bed Pricing'
                            value={section.childWithoutBed}
                            onChange={(e) => updatePriceSection(section.id, 'childWithoutBed', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Extra Bed*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Extra Bed Pricing'
                            value={section.extraBed}
                            onChange={(e) => updatePriceSection(section.id, 'extraBed', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Multi-Occupancy Discount*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Discount %'
                            value={section.discountMultipleOccupancy}
                            onChange={(e) => updatePriceSection(section.id, 'discountMultipleOccupancy', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Meal Plan*</label>
                        <div className='position-relative'>
                          <Select
                            value={section.mealPlan}
                            onChange={(selected) => updatePriceSection(section.id, 'mealPlan', selected)}
                            options={mealPlanOptions}
                            placeholder="Select Meal Plan"
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
                      <div className='col-sm-3'>
                        <label className='form-label'>Hotel Price*</label>
                        <div className='position-relative'>
                          <input
                            type='number'
                            className='form-control wizard-required'
                            placeholder='Enter Hotel Price'
                            value={section.hotelPrice}
                            onChange={(e) => updatePriceSection(section.id, 'hotelPrice', e.target.value)}
                            required
                          />
                          <div className='wizard-form-error' />
                        </div>
                      </div>
                      <div className='col-sm-3'>
                        <label className='form-label'>Blackout Day*</label>
                        <div className='position-relative'>
                          <Select
                            value={section.blackoutDay}
                            onChange={(selected) => updatePriceSection(section.id, 'blackoutDay', selected)}
                            options={blackoutDayOptions}
                            placeholder="Select Blackout Day"
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
                      <div className='col-sm-3'>
                        <label className='form-label'>Validity*</label>
                        <div className='position-relative'>
                          <Select
                            value={section.validity}
                            onChange={(selected) => updatePriceSection(section.id, 'validity', selected)}
                            options={validityOptions}
                            placeholder="Select Validity"
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
                    </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className='form-group mt-24'>
                  <button
                    type='button'
                    onClick={addPriceSection}
                    className='btn btn-outline-primary-600 px-32'
                  >
                    + Add More Price Type
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
                  >
                    Next
                  </button>
                </div>
              </fieldset>
              <fieldset
                className={`wizard-fieldset ${currentStep === 3 && "show"} `}
              >
                <h6 className='text-md text-neutral-500 mb-24'>Other Important Info</h6>
                <div className='row gy-3'>
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
                    <label className='form-label'>Terms and Conditions*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={termsAndConditions}
                        onChange={setTermsAndConditions}
                        placeholder='Enter Terms and Conditions'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Privacy Policy*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={privacyPolicy}
                        onChange={setPrivacyPolicy}
                        placeholder='Enter Privacy Policy'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <label className='form-label'>Refund Policy*</label>
                    <div className='position-relative'>
                      <CKEditorComponent
                        value={refundPolicy}
                        onChange={setRefundPolicy}
                        placeholder='Enter Refund Policy'
                      />
                      <div className='wizard-form-error' />
                    </div>
                  </div>
                  <div className='form-group d-flex align-items-center justify-content-end gap-8'>
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
                        !hasContent(additionalInfo) || 
                        !hasContent(termsAndConditions) || 
                        !hasContent(privacyPolicy) || 
                        !hasContent(refundPolicy)
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
                    Your hotel has been successfully added to the inventory.
                  </p>
                  <p className='text-neutral-400 text-sm mt-8 mb-0'>
                    You can now view and manage it from the hotels list.
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

      {/* Add Hotel Modal */}
      <AddOurHotelModal
        isOpen={isAddHotelModalOpen}
        onClose={() => setIsAddHotelModalOpen(false)}
      />
    </>
  );
};

export default AddNewHotelForm;
