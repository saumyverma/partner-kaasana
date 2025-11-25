"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import MasterLayout from "@/masterLayout/MasterLayout";
import React, { useState } from "react";
import BranchesLayer from "@/components/BranchesLayer";
import CompanyDetails from "@/components/CompanyDetails";
import ContactDetails from "@/components/AddNewContact";
import OperationalInformations from "@/components/OperationalInformations";
import ContactsLayer from "@/components/ContactsLayer";
import AddNewBranchForm from "@/components/AddNewBranch";

const companyDetails = {
  id: 1,
  company_name: "The Article Guru",
  company_type: "Private Limited",
  country: "India",
  state: "Maharashtra",
  headqueater: false,
  city: "Mumbai",
  tax_or_trade_licence_number: "asdfghklwertyuiop",
  pin_or_zip_code: 226021,
  address:
    "Plot 12, near Rajeshwari lawn, janki vihar colony, Baghlan, Baglan, Afghanistan",
};

const operationalInfo = {
  products_and_services: ["Flights", "Hotels"],
  company_size: ["10-20"],
  booking_methods: ["Online"],
  location_of_operations_country: ["India"],
  location_of_operations: ["Mumbai", "Delhi"],
};

const branches = [
  {
    branch_code: "#KT2025113106B1",
    company_name: "abcd",
    address:
      "Plot 12, near Rajeshwari lawn, janki vihar colony, Garacharma, Andaman and Nicobar Islands, India - 226021",
    branch_email: "anshrajgkp8765@gmail.com",
    branch_phone: "+9109936396851",
    year_of_incorporation: 12345,
    tax_trade_licence_number: "JKHIUFUT089EN",
    city: "Mumbai",
    country: "India",
    state: "Maharashtra",
    headqueater: true,
  },
  {
    branch_code: "#KT2025113106B2",
    company_name: "abcd",
    address:
      "Plot 12, near Rajeshwari lawn, janki vihar colony, Garacharma, Andaman and Nicobar Islands, India - 226021",
    branch_email: "anshrajgkp8765@gmail.com",
    branch_phone: "+9109936396851",
    year_of_incorporation: 12345,
    tax_trade_licence_number: "JKHIUFUT089EN",
    city: "Bengaluru",
    country: "India",
    state: "Karnataka",
    headqueater: false,
  },
  {
    branch_code: "#KT2025113106B3",
    company_name: "abcd",
    address:
      "Plot 12, near Rajeshwari lawn, janki vihar colony, Garacharma, Andaman and Nicobar Islands, India - 226021",
    branch_email: "anshrajgkp8765@gmail.com",
    branch_phone: "+9109936396851",
    year_of_incorporation: 12345,
    tax_trade_licence_number: "JKHIUFUT089EN",
    city: "Dubai",
    country: "United Arab Emirates",
    state: "Dubai Emirate",
    headqueater: false,
  },
  {
    branch_code: "#KT2025113106B4",
    company_name: "abcd",
    address:
      "Plot 12, near Rajeshwari lawn, janki vihar colony, Garacharma, Andaman and Nicobar Islands, India - 226021",
    branch_email: "anshrajgkp8765@gmail.com",
    branch_phone: "+9109936396851",
    year_of_incorporation: 12345,
    tax_trade_licence_number: "JKHIUFUT089EN",
    city: "Abu Dhabi",
    country: "India",
    state: "Dubai Emirate",
    headqueater: false,
  },
];

const contacts = [
  {
    full_name: "Travel Agent",
    email: "imerzeeshan@gmail.com",
    designation: "Founder",
    contact_number: 9876543210,
    whatsapp_number: 9876543210,
  },
  {
    full_name: "Travel Agent",
    email: "abcdef@gmail.com",
    designation: "Manager",
    contact_number: 9876543210,
    whatsapp_number: 9876543210,
  },
  {
    full_name: "Travel Agent",
    email: "abcdef@gmail.com",
    designation: "Support",
    contact_number: 9876543210,
    whatsapp_number: 9876543210,
  },
  {
    full_name: "Travel Agent",
    email: "abcdef@gmail.com",
    designation: "Sales Lead",
    contact_number: 9876543210,
    whatsapp_number: 9876543210,
  },
  {
    full_name: "Travel Agent",
    email: "abcdef@gmail.com",
    designation: "Director",
    contact_number: 9876543210,
    whatsapp_number: 9876543210,
  },
];

const Page = () => {
  const breadcrumbs = [{ label: "Company Profile", href: "#" }];
  const [logoImagePreview, setLogoImagePreview] = useState(
    "/assets/images/user-grid/user-grid-img13.png"
  );
  const [bannerImagePreview, setBannerImagePreview] = useState(
    "/assets/images/user-grid/user-grid-bg1.png"
  );

  const [visible, setVisible] = useState({
    editCompanyDetails: false,
    editOperationalInfo: false,
    editContactDetails: false,
    editBranchDetails: false,
  });
  const [contactDetails, setContactDetails] = useState([
    { fullName: "", email: "", contact: "", whatsapp: "", designation: "" },
  ]);
  const [showBranches, setShowBranches] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (index, field, value) => {
    const updated = [...contacts];
    updated[index][field] = value;
    setContactDetails(updated);
  };

  const addContact = () => {
    setContactDetails([
      ...contacts,
      { fullName: "", email: "", contact: "", whatsapp: "", designation: "" },
    ]);
  };

  const handleRemoveContactDetails = (index) => {
    const remainContacts = contacts.filter((_, idx) => idx !== index);
    setContacts(remainContacts);
  };

  const readLogoURL = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  const readBannerURL = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBannerImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  const handleEditContacts = (idx = null) => {
    setEditIndex(idx);
    setVisible((prev) => ({
      ...prev,
      editContactDetails: !prev.editContactDetails,
    }));
  };

  const handleEditBranches = (idx = null) => {
    setEditIndex(idx);
    setVisible((prev) => ({
      ...prev,
      editBranchDetails: !prev.editBranchDetails,
    }));
  };

  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb title="Company Profile" breadcrumbs={breadcrumbs} />
        <div className="row gy-3 position-relative modal-body">
          <div className="col-md-6 col-lg-4">
            <div className="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
              <div className="position-relative d-inline-block w-100">
                <div
                  className="position-absolute bottom-0 end-0"
                  style={{ cursor: "pointer", zIndex: 1 }}
                >
                  <input
                    type="file"
                    id="imageUpload"
                    accept=".png, .jpg, .jpeg"
                    hidden
                    onChange={readBannerURL}
                  />
                  <label
                    htmlFor="imageUpload"
                    className="w-32-px h-32-px d-flex justify-content-center align-items-center bg-primary-50 text-primary-600 border border-primary-600 bg-hover-primary-100 text-lg rounded-circle"
                  >
                    <Icon icon="solar:camera-outline" className="icon"></Icon>
                  </label>
                </div>

                <div className="text-center w-100">
                  <div
                    id="imagePreview"
                    style={{
                      width: "100%",
                      height: "120px",
                      borderRadius: "0",
                      backgroundImage: `url(${bannerImagePreview})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </div>

              <div className="pb-24 ms-16 mb-24 me-16">
                <div className="text-center border border-top-0 border-start-0 border-end-0">
                  <div className="mb-24 mt-16 d-flex justify-content-center align-items-center">
                    <div className="avatar-upload">
                      <div className="avatar-edit position-absolute bottom-0 end-0 me-24 mt-16 z-1 cursor-pointer">
                        <input
                          type="file"
                          id="logoImageUpload"
                          accept=".png, .jpg, .jpeg"
                          hidden
                          onChange={readLogoURL}
                        />
                        <label
                          htmlFor="logoImageUpload"
                          className="w-32-px h-32-px d-flex justify-content-center align-items-center bg-primary-50 text-primary-600 border border-primary-600 bg-hover-primary-100 text-lg rounded-circle"
                        >
                          <Icon
                            icon="solar:camera-outline"
                            className="icon"
                          ></Icon>
                        </label>
                      </div>
                      <div className="avatar-preview text-center">
                        <div
                          id="logoImageUpload"
                          style={{
                            backgroundImage: `url(${logoImagePreview})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-0 mt-16">Agency Code</h6>
                    <span className="text-secondary-light mb-16">
                      #ABDCSJHFDSJK
                    </span>
                  </div>
                </div>
                <div className="mt-24">
                  <div className="radius-16 bg-base mb-3">
                    <div className="modal-body">
                      <div className="card">
                        <div className="d-flex justify-content-between w-100 align-items-center border-bottom mb-1 p-3">
                          <h6 className="text-xl mb-0">Company Details</h6>
                          <button
                            onClick={() =>
                              setVisible((prev) => ({
                                ...prev,
                                editCompanyDetails: !prev.editCompanyDetails,
                              }))
                            }
                            type="button"
                            className="text-warning-600 border-0"
                          >
                            <Icon
                              icon="hugeicons:pencil-edit-02"
                              width="24"
                              height="24"
                            />
                          </button>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled">
                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                Company Name
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : {companyDetails.company_name}
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                company type
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : {companyDetails.company_type}
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                Country
                              </span>
                              <span className="text-secondary-light fw-medium text-lowercase">
                                : {companyDetails.country}
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                state
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : {companyDetails.state}
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                city
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : {companyDetails.city}
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                Tax / trade licence number
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : {companyDetails.tax_or_trade_licence_number}
                              </span>
                            </li>

                            <li
                              className="d-flex gap-1 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-30 fw-semibold text-primary-light">
                                Address
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : {companyDetails.address} -{" "}
                                {companyDetails.pin_or_zip_code}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-24">
                  <div className="radius-16 bg-base mb-3">
                    <div className="modal-body">
                      <div className="card">
                        <div className="d-flex justify-content-between w-100 align-items-center border-bottom mb-1 p-3">
                          <h6 className="text-xl mb-0">
                            Operational Information
                          </h6>
                          <button
                            onClick={() =>
                              setVisible((prev) => ({
                                ...prev,
                                editOperationalInfo: !prev.editOperationalInfo,
                              }))
                            }
                            type="button"
                            className="text-warning-600 border-0"
                          >
                            <Icon
                              icon="hugeicons:pencil-edit-02"
                              width="24"
                              height="24"
                            />
                          </button>
                        </div>
                        <div className="card-body">
                          <ul className="list-unstyled">
                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                products/ services
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : Travel Agent
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                company size
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : Afganistan
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                booking methods
                              </span>
                              <span className="text-secondary-light fw-medium text-lowercase">
                                : Baglan
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-5 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                Location of operations Country
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : Baghlan
                              </span>
                            </li>

                            <li
                              className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                              style={{ fontSize: "12px" }}
                            >
                              <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                Location of operations
                              </span>
                              <span className="text-secondary-light fw-medium">
                                : asdfghklwertyuiop
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
              <div className="p-3 border-bottom d-flex justify-content-between">
                <h6 className="text-xl mb-0">Branches</h6>
                <button
                  className="d-flex gap-1 align-items-center justify-content-center p-1 rounded"
                  onClick={() =>
                    setVisible((prev) => ({
                      ...prev,
                      editBranchDetails: !prev.editBranchDetails,
                    }))
                  }
                >
                  <Icon
                    className="text-primary"
                    icon="hugeicons:plus-sign-circle"
                    width="24"
                    height="24"
                  />
                </button>
              </div>
              <div className="pb-24 ms-16 mb-24 me-16">
                <div className="mt-3">
                  <>
                    {branches.slice(0, 3).map((branch, index) => (
                      <div className="radius-16 bg-base mb-3" key={index}>
                        <div className="modal-body">
                          <div className="card">
                            <div className="d-flex justify-content-between w-100 align-items-center border-bottom mb-1 p-3">
                              <h5 className="fs-6 mb-0">
                                Branch Details #{index + 1}
                              </h5>

                              <button
                                onClick={() => handleEditBranches(index)}
                                type="button"
                                className="text-warning-600 border-0"
                              >
                                <Icon
                                  icon="hugeicons:pencil-edit-02"
                                  width="24"
                                  height="24"
                                />
                              </button>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Branch Code
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {branch.branch_code}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Branch Name
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {branch.company_name}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light text-nowrap">
                                    Branch Email
                                  </span>
                                  <span className="text-secondary-light text-nowrap fw-medium text-lowercase">
                                    : {branch.branch_email}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Branch Phone
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {branch.branch_phone}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Year of Incorporation
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {branch.year_of_incorporation}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Tax / Trade Licence Number
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {branch.tax_trade_licence_number}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    city
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {branch.city}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    state
                                  </span>
                                  <span className="text-secondary-light fw-medium text-nowrap">
                                    : {branch.state}
                                  </span>
                                </li>
                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    country
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {branch.country}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                  {branches.length > 3 && (
                    <button
                      onClick={() => setShowBranches(true)}
                      className="text-primary text-decoration-underline fs-6"
                      style={{
                        textDecorationThickness: "2px",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      Show All Branches
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
              <div className="p-3 border-bottom d-flex justify-content-between">
                <h6 className="text-xl mb-0">Contacts</h6>
                <button
                  className="d-flex gap-1 align-items-center justify-content-center p-1 rounded"
                  onClick={() =>
                    setVisible((prev) => ({
                      ...prev,
                      editContactDetails: !prev.editContactDetails,
                    }))
                  }
                >
                  <Icon
                    className="text-primary"
                    icon="hugeicons:plus-sign-circle"
                    width="24"
                    height="24"
                  />
                </button>
              </div>
              <div className="pb-24 ms-16 mb-24 me-16">
                <div className="mt-3">
                  <>
                    {contacts.slice(0, 4).map((contact, index) => (
                      <div className="radius-16 bg-base mb-3" key={index}>
                        <div className="modal-body">
                          <div className="card">
                            <div className="d-flex justify-content-between w-100 align-items-center border-bottom mb-1 p-3">
                              <h5 className="fs-6 mb-0">
                                Contact Details #{index + 1}
                              </h5>

                              <button
                                onClick={() => handleEditContacts(index)}
                                type="button"
                                className="text-warning-600 border-0"
                              >
                                <Icon
                                  icon="hugeicons:pencil-edit-02"
                                  width="24"
                                  height="24"
                                />
                              </button>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Full name
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {contact?.full_name}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 w-100 text-capitalize"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Email
                                  </span>
                                  <span className="text-nowrap text-secondary-light fw-medium text-lowercase">
                                    : {contact?.email}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Designation
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {contact?.designation}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    Contact number
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {contact?.contact_number}
                                  </span>
                                </li>

                                <li
                                  className="d-flex align-items-center gap-3 my-1 text-capitalize w-100"
                                  style={{ fontSize: "12px" }}
                                >
                                  <span className="w-50 text-nowrap fw-semibold text-primary-light">
                                    whatsapp number
                                  </span>
                                  <span className="text-secondary-light fw-medium">
                                    : {contact?.whatsapp_number}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                  {contacts.length > 4 && (
                    <button
                      onClick={() => setShowContacts(true)}
                      className="text-primary text-decoration-underline fs-6"
                      style={{
                        textDecorationThickness: "2px",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      Show All Contacts
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {visible.editCompanyDetails && (
          <CompanyDetails
            setVisible={setVisible}
            companyDetails={companyDetails}
          />
        )}
        {visible.editContactDetails && (
          <ContactDetails
            setVisible={setVisible}
            contactDetails={contacts[editIndex]}
          />
        )}
        {visible.editOperationalInfo && (
          <OperationalInformations
            setVisible={setVisible}
            operationalInfo={operationalInfo}
          />
        )}
        {visible.editBranchDetails && (
          <AddNewBranchForm
            setVisible={setVisible}
            branchDetails={branches[editIndex]}
          />
        )}
        {showBranches && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex 
            justify-content-center align-items-start p-3"
            style={{ zIndex: 10 }}
          >
            <div className="col-11 col-md-10 col-xl-8 mt-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5 className="card-title mb-0">All Branches</h5>
                  <Icon
                    className="cursor-pointer text-red"
                    onClick={() => setShowBranches(false)}
                    icon="hugeicons:cancel-circle"
                    width="24"
                    height="24"
                  />
                </div>

                <div
                  className="card-body overflow-y-auto"
                  style={{
                    maxHeight: "88vh",
                  }}
                >
                  <div className="container">
                    <button
                      onClick={() => handleEditBranches()}
                      className="d-flex gap-1 align-items-center bg-light p-1 rounded mb-3"
                    >
                      <Icon
                        className="text-primary"
                        icon="hugeicons:plus-sign-circle"
                        width="24"
                        height="24"
                      />
                      Add New Branch
                    </button>
                    <BranchesLayer
                      branches={branches}
                      handleEditBranches={handleEditBranches}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {showContacts && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex 
            justify-content-center align-items-start p-3"
            style={{ zIndex: 10 }}
          >
            <div className="col-11 col-md-10 col-xl-8 mt-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5 className="card-title mb-0">All Contacts</h5>
                  <Icon
                    className="cursor-pointer text-red"
                    onClick={() => setShowContacts(false)}
                    icon="hugeicons:cancel-circle"
                    width="24"
                    height="24"
                  />
                </div>

                <div
                  className="card-body overflow-y-auto"
                  style={{
                    maxHeight: "88vh",
                  }}
                >
                  <div className="container">
                    <button
                      onClick={() => handleEditContacts()}
                      className="d-flex gap-1 align-items-center bg-light p-1 rounded mb-3"
                    >
                      <Icon
                        className="text-primary"
                        icon="hugeicons:plus-sign-circle"
                        width="24"
                        height="24"
                      />
                      Add New Contact
                    </button>
                    <ContactsLayer
                      contacts={contacts}
                      handleEditContacts={handleEditContacts}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </MasterLayout>
    </ProtectedRoute>
  );
};

export default Page;
