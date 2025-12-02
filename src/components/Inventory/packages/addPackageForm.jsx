"use client";
import React, { useState, useMemo, useEffect } from "react";
import Select, { components } from "react-select";
import { Icon } from "@iconify/react/dist/iconify.js";
import CKEditorComponent from "../../common/CKEditor";
import UploadWithImagePreview from "../../common/UploadWithImagePreview";
import AddOurHotelModal from "../hotels/AddOurHotelModal";

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

const getOptionByValue = (options, value) =>
  options.find((opt) => opt.value === value) || null;

const getOptionsByValues = (options, values) =>
  options.filter((opt) => values.includes(opt.value));

const AddPackageForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [menuPortalTarget, setMenuPortalTarget] = useState(null);
  
  // Tab 1 - Package Information
  const [packageName, setPackageName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedPackageType, setSelectedPackageType] = useState(null);
  const [packageDuration, setPackageDuration] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [selectedPriceApplicableTo, setSelectedPriceApplicableTo] = useState(null);
  const [selectedBookingType, setSelectedBookingType] = useState(null);
  const [packageOverview, setPackageOverview] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);

  // Add Destination Modal State
  const [showAddDestinationModal, setShowAddDestinationModal] = useState(false);
  const [newDestinationType, setNewDestinationType] = useState("country");
  const [newDestinationName, setNewDestinationName] = useState("");
  const [newDestinationParent, setNewDestinationParent] = useState("");
  const [destinationList, setDestinationList] = useState(destinationData);
  
  // Tab 2 - Day Wise Itinerary
  const [daySections, setDaySections] = useState([
    {
      id: 1,
      arrival: "", // Text field
      destination: null,
      transfer: null,
      selectedHotel: null,
      hotelCategory: null,
      hotelRating: null,
      propertyType: null,
      hotelAddress: "",
      supplier: null,
      checkIn: null,
      checkOut: null,
      typeOfStay: null,
      meal: null,
      isActivity: null, // Yes/No dropdown
      activityTiming: "",
      selectedActivity: null,
      packageOverview: "",
      images: [],
    },
  ]);

  // Add Hotel Modal State
  const [isAddHotelModalOpen, setIsAddHotelModalOpen] = useState(false);
  
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
  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

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
      menu.style.display = 'none';
    });
    
    // Blur all select inputs
    document.querySelectorAll('.select__control input').forEach(input => {
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

    setNewDestinationName("");
    setNewDestinationParent("");
    setShowAddDestinationModal(false);
  };

  // Get parent options for state/city selection
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
        arrival: "",
        destination: null,
        transfer: null,
        selectedHotel: null,
        hotelCategory: null,
        hotelRating: null,
        propertyType: null,
        hotelAddress: "",
        supplier: null,
        checkIn: null,
        checkOut: null,
        typeOfStay: null,
        meal: null,
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
          // If hotel is selected, auto-fill hotel details
          if (field === 'selectedHotel' && value && !value.isAddOption) {
            const hotelDetail = hotelDetails[value.value];
            if (hotelDetail) {
              updatedSection.hotelCategory = categoryOptions.find(opt => opt.value === hotelDetail.category) || null;
              updatedSection.hotelRating = hotelDetail.rating;
              updatedSection.propertyType = propertyTypeOptions.find(opt => opt.value === hotelDetail.propertyType) || null;
              updatedSection.hotelAddress = hotelDetail.address;
              updatedSection.supplier = supplierOptions.find(opt => opt.value === hotelDetail.supplier) || null;
              updatedSection.checkIn = checkInOptions.find(opt => opt.value === hotelDetail.checkIn) || null;
              updatedSection.checkOut = checkOutOptions.find(opt => opt.value === hotelDetail.checkOut) || null;
            }
          } else if (field === 'selectedHotel' && (!value || value?.isAddOption)) {
            // Clear hotel details when hotel is deselected
            updatedSection.hotelCategory = null;
            updatedSection.hotelRating = null;
            updatedSection.propertyType = null;
            updatedSection.hotelAddress = "";
            updatedSection.supplier = null;
            updatedSection.checkIn = null;
            updatedSection.checkOut = null;
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

  // Combined transfer options (transfer + transfer type)
  const transferOptions = [
    { value: "airport_private", label: "Airport Transfer - Private" },
    { value: "airport_shared", label: "Airport Transfer - Shared" },
    { value: "airport_scheduled", label: "Airport Transfer - Scheduled" },
    { value: "hotel_private", label: "Hotel Transfer - Private" },
    { value: "hotel_shared", label: "Hotel Transfer - Shared" },
    { value: "hotel_scheduled", label: "Hotel Transfer - Scheduled" },
    { value: "station_private", label: "Station Transfer - Private" },
    { value: "station_shared", label: "Station Transfer - Shared" },
    { value: "station_scheduled", label: "Station Transfer - Scheduled" },
    { value: "none", label: "No Transfer" },
  ];

  // Dummy hotels data
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
      address: "123 Sunset Boulevard, Los Angeles, CA 90028",
      checkIn: "15:00",
      checkOut: "11:00",
      supplier: 1,
    },
    2: {
      name: "Luxury Resort",
      category: "5 Star",
      rating: 4.9,
      propertyType: "Resort",
      address: "456 Fifth Avenue, New York, NY 10001",
      checkIn: "14:00",
      checkOut: "12:00",
      supplier: 2,
    },
    3: {
      name: "Ocean View Hotel",
      category: "4 Star",
      rating: 4.5,
      propertyType: "Beach Hotel",
      address: "789 Marine Drive, Mumbai, Maharashtra 400001",
      checkIn: "15:00",
      checkOut: "11:00",
      supplier: 3,
    },
    4: {
      name: "Desert Palace",
      category: "5 Star",
      rating: 4.7,
      propertyType: "Luxury Hotel",
      address: "321 Sheikh Zayed Road, Dubai, UAE",
      checkIn: "15:00",
      checkOut: "12:00",
      supplier: 4,
    },
    5: {
      name: "Royal Suites",
      category: "5 Star",
      rating: 4.9,
      propertyType: "Luxury Suites",
      address: "654 Corniche Road, Abu Dhabi, UAE",
      checkIn: "14:00",
      checkOut: "11:00",
      supplier: 5,
    },
    6: {
      name: "City Center Hotel",
      category: "4 Star",
      rating: 4.6,
      propertyType: "Business Hotel",
      address: "987 King Fahd Road, Riyadh, Saudi Arabia",
      checkIn: "15:00",
      checkOut: "12:00",
      supplier: 1,
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

  const supplierOptions = dummySuppliers.map((supplier) => ({
    value: supplier.id,
    label: supplier.name,
  }));

  // Hotel options with Add Hotel option
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

  // Custom Hotel Option component for hotel dropdown
  const CustomHotelOption = ({ data, innerProps, isFocused }) => {
    const className = data.isAddOption 
      ? `select__option--add-hotel`.trim()
      : '';
    
    if (data.isAddOption) {
      return (
        <div
          {...innerProps}
          className={className}
          style={{
            padding: '12px 16px',
            fontWeight: 600,
            color: '#0d6efd',
            backgroundColor: isFocused ? '#e7f1ff' : '#f8f9fa',
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
            <Icon icon="mdi:plus-circle" />
            <span>Add Our Hotel</span>
          </span>
        </div>
      );
    }
    
    return (
      <div
        {...innerProps}
        className={className}
        style={{ cursor: 'pointer' }}
      >
        {data.label}
      </div>
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
                  <div className='col-sm-6'>
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
                  <div className='col-sm-3'>
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
                  <div className='col-sm-3'>
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
                  <div className='col-sm-3'>
                    <label className='form-label'>Package Duration (Nights)*</label>
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

                  {/* Destination */}
                  <div className='col-sm-3'>
                    <label className='form-label'>Destination*</label>
                    <div className='position-relative'>
                      <Select
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
                        className="wizard-required"
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
                      <div className='wizard-form-error' />
                    </div>
                    {destinations.map((value) => (
                      <input key={`Destinations-${value}`} type="hidden" name="Destinations[]" value={value} />
                    ))}
                  </div>

                  {/* Price Applicable To */}
                  <div className='col-sm-3'>
                    <label className='form-label'>Price Applicable To*</label>
                    <div className='position-relative'>
                      <Select
                        value={selectedPriceApplicableTo}
                        onChange={setSelectedPriceApplicableTo}
                        options={priceApplicableToOptions}
                        placeholder="Select Date Range"
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
                  <div className='col-sm-3'>
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
                        destinations.length === 0 ||
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
                          {/* Arrival - Text Field */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Arrived At*</label>
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

                          {/* Destination */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Destination*</label>
                            <div className='position-relative'>
                              <Select
                                options={destinationOptions}
                                placeholder="Select Destination"
                                isClearable
                                isSearchable
                                value={getOptionByValue(destinationOptions.filter(opt => !opt.isAddOption), section.destination)}
                                onChange={(selected) => updateDaySection(section.id, 'destination', selected ? selected.value : null)}
                                menuPortalTarget={menuPortalTarget}
                                menuPosition="fixed"
                                className="wizard-required"
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
                              <div className='wizard-form-error' />
                            </div>
                          </div>

                          {/* Transfer (Combined with Transfer Type) */}
                          <div className='col-sm-4'>
                            <label className='form-label'>Transfer*</label>
                            <div className='position-relative'>
                              <Select
                                value={getOptionByValue(transferOptions, section.transfer)}
                                onChange={(selected) => updateDaySection(section.id, 'transfer', selected ? selected.value : null)}
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

                          {/* Hotel */}
                          <div className='col-sm-6'>
                            <label className='form-label'>Hotel*</label>
                            <div className='position-relative'>
                              <Select
                                value={getOptionByValue(hotelOptions.filter(opt => !opt.isAddOption), section.selectedHotel)}
                                onChange={(selected) => {
                                  if (selected && selected.value === 'add_hotel') {
                                    setIsAddHotelModalOpen(true);
                                    updateDaySection(section.id, 'selectedHotel', null);
                                  } else {
                                    updateDaySection(section.id, 'selectedHotel', selected ? selected.value : null);
                                  }
                                }}
                                options={hotelOptions}
                                placeholder="Select Hotel"
                                isClearable
                                isSearchable
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

                          {/* Hotel Category (Auto-filled) */}
                          {section.selectedHotel && (
                            <div className='col-sm-3'>
                              <label className='form-label'>Hotel Category</label>
                              <div className='position-relative'>
                                <Select
                                  value={section.hotelCategory}
                                  onChange={(selected) => updateDaySection(section.id, 'hotelCategory', selected)}
                                  options={categoryOptions}
                                  placeholder="Select Category"
                                  isClearable
                                  isSearchable
                                  classNamePrefix="select"
                                  menuPortalTarget={menuPortalTarget}
                                  menuPosition="fixed"
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

                          {/* Property Type (Auto-filled) */}
                          {section.selectedHotel && (
                            <div className='col-sm-3'>
                              <label className='form-label'>Property Type</label>
                              <div className='position-relative'>
                                <Select
                                  value={section.propertyType}
                                  onChange={(selected) => updateDaySection(section.id, 'propertyType', selected)}
                                  options={propertyTypeOptions}
                                  placeholder="Select Property Type"
                                  isClearable
                                  isSearchable
                                  classNamePrefix="select"
                                  menuPortalTarget={menuPortalTarget}
                                  menuPosition="fixed"
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

                    

                          {/* Check In Time (Auto-filled) */}
                          {section.selectedHotel && (
                            <div className='col-sm-4'>
                              <label className='form-label'>Check In</label>
                              <div className='position-relative'>
                                <Select
                                  value={section.checkIn}
                                  onChange={(selected) => updateDaySection(section.id, 'checkIn', selected)}
                                  options={checkInOptions}
                                  placeholder="Check In"
                                  isClearable
                                  isSearchable
                                  classNamePrefix="select"
                                  menuPortalTarget={menuPortalTarget}
                                  menuPosition="fixed"
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

                          {/* Check Out Time (Auto-filled) */}
                          {section.selectedHotel && (
                            <div className='col-sm-4'>
                              <label className='form-label'>Check Out</label>
                              <div className='position-relative'>
                                <Select
                                  value={section.checkOut}
                                  onChange={(selected) => updateDaySection(section.id, 'checkOut', selected)}
                                  options={checkOutOptions}
                                  placeholder="Check Out"
                                  isClearable
                                  isSearchable
                                  classNamePrefix="select"
                                  menuPortalTarget={menuPortalTarget}
                                  menuPosition="fixed"
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

                          {/* Supplier (Auto-filled) */}
                          {section.selectedHotel && (
                            <div className='col-sm-4'>
                              <label className='form-label'>Supplier</label>
                              <div className='position-relative'>
                                <Select
                                  value={section.supplier}
                                  onChange={(selected) => updateDaySection(section.id, 'supplier', selected)}
                                  options={supplierOptions}
                                  placeholder="Supplier"
                                  isClearable
                                  isSearchable
                                  classNamePrefix="select"
                                  menuPortalTarget={menuPortalTarget}
                                  menuPosition="fixed"
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

                          {/* Hotel Address (Auto-filled) */}
                          {section.selectedHotel && (
                            <div className='col-12'>
                              <label className='form-label'>Hotel Address</label>
                              <div className='position-relative'>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='Hotel Address'
                                  value={section.hotelAddress}
                                  onChange={(e) => updateDaySection(section.id, 'hotelAddress', e.target.value)}
                                />
                                <div className='wizard-form-error' />
                              </div>
                            </div>
                          )}

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
                        !section.destination ||
                        !section.transfer ||
                        !section.selectedHotel ||
                        !section.isActivity ||
                        (section.isActivity?.value === 'yes' && (!section.activityTiming || !section.selectedActivity)) ||
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

      {/* Add Hotel Modal */}
      <AddOurHotelModal
        isOpen={isAddHotelModalOpen}
        onClose={() => setIsAddHotelModalOpen(false)}
      />
    </>
  );
};

export default AddPackageForm;
