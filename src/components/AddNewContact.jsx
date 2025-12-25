  "use client";

  import { Icon } from "@iconify/react";
  import React, { useEffect, useMemo, useState } from "react";
  import Select from "react-select";

  const designationOptions = [
    "Founder",
    "Director",
    "Manager",
    "Sales Lead",
    "Support",
  ];

  const mapToOptions = (values) =>
    values.map((value) => ({ value, label: value }));

  const getOptionsByValues = (options, values) =>
    options.filter((option) => values.includes(option.value));

  const ContactDetails = ({ setVisible, contactDetails }) => {
    const [designationSelections, setDesignationSelections] = useState([]);
    const [contacts, setContacts] = useState([
      { fullName: "", email: "", contact: "", whatsapp: "", designation: "" },
    ]);

    const designationSelectOptions = useMemo(
      () => mapToOptions(designationOptions),
      []
    );

    const addContact = () => {
      setContacts([
        ...contacts,
        { fullName: "", email: "", contact: "", whatsapp: "", designation: "" },
      ]);
    };

    useEffect(() => {
      if (contactDetails) {
        setDesignationSelections(contactDetails.designation);
      }
    }, [contactDetails]);

    return (
      <div
        className="modal fade show d-block"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contactDetailsSection"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-xl z-index-2">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
              <div className="d-flex justify-content-between w-100 align-items-center">
                <h1 className="modal-title fs-5 mb-0" id="contactDetailsSection">
                  Contact Details
                </h1>
                <Icon
                  className="cursor-pointer text-red"
                  onClick={() => {
                    setVisible((prev) => ({
                      ...prev,
                      editContactDetails: !prev.editContactDetails,
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
                            <div className="col-md-6">
                              <label className="form-label">
                                Full Name{" "}
                                <span className="text-danger-600">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Contact Name"
                                defaultValue={contactDetails?.full_name}
                              />
                            </div>
                            <div className="col-md-6">
                              <label className="form-label">
                                Email <span className="text-danger-600">*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Contact Email"
                                defaultValue={contactDetails?.email}
                              />
                            </div>

                            <div className="col-md-4">
                              <label className="form-label">
                                Contact Number{" "}
                                <span className="text-danger-600">*</span>
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Phone Number"
                                defaultValue={contactDetails?.contact_number}
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">
                                WhatsApp Number{" "}
                                <span className="text-danger-600">*</span>
                              </label>
                              <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter WhatsApp Number"
                                defaultValue={contactDetails?.whatsapp_number}
                              />
                            </div>
                            <div className="col-md-4">
                              <label className="form-label">Designation</label>
                              <Select
                                inputId="designation"
                                isClearable
                                isSearchable
                                options={designationSelectOptions}
                                placeholder="Select Designations"
                                closeMenuOnSelect={false}
                                value={
                                  designationSelectOptions.find(
                                    (option) =>
                                      option.value === designationSelections
                                  ) || null
                                }
                                onChange={(selected) =>
                                  setDesignationSelections(
                                    selected ? selected.value : ""
                                  )
                                }
                              />
                            </div>
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

  export default ContactDetails;

  {
    /**
       {visible.editContactDetails && (
            <div
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex 
              justify-content-center align-items-start custom-z-index p-3 pt-5"
              style={{ overflowY: "auto" }}
            >
              <div className="col-11 col-md-10 col-xl-8">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <h5 className="card-title mb-0">Company Details</h5>
                    <Icon
                      className="cursor-pointer text-red"
                      onClick={() =>
                        setVisible((prev) => ({
                          ...prev,
                          editContactDetails: !prev.editContactDetails,
                        }))
                      }
                      icon="hugeicons:cancel-circle"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div
                    className="d-flex justify-content-end pt-3"
                    style={{ paddingRight: "25px" }}
                  >
                    <button
                      className="d-flex gap-1 align-items-center bg-light p-1 rounded"
                      onClick={addContact}
                    >
                      <Icon
                        className="text-primary"
                        icon="hugeicons:plus-sign-circle"
                        width="24"
                        height="24"
                      />
                      Add New Contact
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="container">
                      <div className="row gy-3">
                        {contacts.map((contact, index) => (
                          <div key={index} className="border rounded p-3 mb-3">
                            <div className="row g-3">
                              <div className="col-12">
                                <div className="d-flex justify-content-between">
                                  <h5 className="card-title mb-0">
                                    Contact Details <span>#{index + 1}</span>
                                  </h5>
                                  <span
                                    onClick={() =>
                                      handleRemoveContactDetails(index)
                                    }
                                    className="d-flex gap-1 bg-danger bg-opacity-25 p-1 rounded text-danger cursor-pointer"
                                  >
                                    <Icon
                                      className="cursor-pointer text-red"
                                      icon="hugeicons:cancel-circle"
                                      width="24"
                                      height="24"
                                    />
                                    Remove
                                  </span>
                                </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-4">
                                <label className="form-label text-uppercase">
                                  Full Name{" "}
                                  <span className="text-danger-600">*</span>
                                </label>
                                <div className="icon-field">
                                  <span className="icon">
                                    <Icon icon="solar:city-outline" />
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Name"
                                    value={contact.fullName}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "fullName",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-md-6 col-lg-4">
                                <label className="form-label text-uppercase">
                                  Email <span className="text-danger-600">*</span>
                                </label>
                                <div className="icon-field">
                                  <span className="icon">
                                    <Icon icon="solar:city-outline" />
                                  </span>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Email Address"
                                    value={contact.email}
                                    onChange={(e) =>
                                      handleChange(index, "email", e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-md-6 col-lg-4">
                                <label className="form-label text-uppercase">
                                  Contact Number
                                  <span className="text-danger-600">*</span>
                                </label>

                                <div className="icon-field d-flex">
                                  <span className="icon">
                                    <Icon icon="solar:city-outline" />
                                  </span>

                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="+91 1234567890"
                                    value={contact.contact}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "contact",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-md-6 col-lg-4">
                                <label className="form-label text-uppercase">
                                  WhatsApp Number
                                  <span className="text-danger-600">*</span>
                                </label>
                                <div className="icon-field">
                                  <span className="icon">
                                    <Icon icon="solar:city-outline" />
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="+91 1234567890"
                                    value={contact.whatsapp}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "whatsapp",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-md-6 col-lg-4">
                                <label className="form-label text-uppercase">
                                  Designation
                                  <span className="text-danger-600">*</span>
                                </label>
                                <div className="icon-field">
                                  <span className="icon">
                                    <Icon icon="solar:city-outline" />
                                  </span>
                                  <select
                                    className="form-control pe-5"
                                    value={contact.designation}
                                    onChange={(e) =>
                                      handleChange(
                                        index,
                                        "designation",
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="">Select Designation</option>
                                    <option value="los-angeles">
                                      Los Angeles
                                    </option>
                                    <option value="san-francisco">
                                      San Francisco
                                    </option>
                                    <option value="houston">Houston</option>
                                    <option value="miami">Miami</option>
                                    <option value="orlando">Orlando</option>
                                    <option value="new-york-city">
                                      New York City
                                    </option>
                                    <option value="buffalo">Buffalo</option>
                                  </select>
                                  <span
                                    style={{
                                      right: "12px",
                                      top: "50%",
                                      transform: "translateY(-50%)",
                                    }}
                                    className="position-absolute"
                                  >
                                    <Icon
                                      icon="hugeicons:arrow-down-01"
                                      width="24"
                                      height="24"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="col-12 d-flex justify-content-end mt-3">
                        <button
                          className={`btn btn-primary-600 ${
                            contacts.length === 0
                              ? "disabled bg-secondary text-white"
                              : ""
                          }`}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )} */
  }
