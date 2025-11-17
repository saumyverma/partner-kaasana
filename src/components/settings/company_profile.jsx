"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const ViewCompanyProfileLayer = () => {
  const [imagePreview, setImagePreview] = useState(
    "/assets/images/user-grid/user-grid-img13.png"
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [contactSections, setContactSections] = useState([
    { id: 1, fullName: 'The Article Guru', email: 'anshrajgkp8765@gmail.com', designation: 'Customer Service Representative', contactNumber: '+918765867589', whatsappNumber: '+919936396851' },
    { id: 2, fullName: 'John Smith', email: 'john.smith@example.com', designation: 'Sales Manager', contactNumber: '+919876543210', whatsappNumber: '+919876543210' },
    { id: 3, fullName: 'Sarah Johnson', email: 'sarah.johnson@example.com', designation: 'Operations Manager', contactNumber: '+919988776655', whatsappNumber: '+919988776655' },
  ]);

  // Toggle function for password field
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Toggle function for confirm password field
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const readURL = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  // Add new contact section
  const addContactSection = () => {
    const newId = contactSections.length > 0 ? Math.max(...contactSections.map(c => c.id)) + 1 : 1;
    setContactSections([
      ...contactSections,
      { id: newId, fullName: '', email: '', designation: '', contactNumber: '', whatsappNumber: '' }
    ]);
  };

  // Remove contact section
  const removeContactSection = (id) => {
    if (contactSections.length > 1) {
      setContactSections(contactSections.filter(contact => contact.id !== id));
    }
  };
  return (
    <div className='row gy-4'>
    {/* company profile section  */}
      <div className='col-lg-4'>
        <div className='user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100'>
          <img
            src='/assets/img/coverimages.jpg'
            alt=''
            className='w-100 object-fit-cover'
          />
          <div className='pb-24 ms-16 mb-24 me-16  mt--100'>
            <div className='text-center border border-top-0 border-start-0 border-end-0'>
              <img
                src='/assets/img/user.png'
                alt=''
                className='border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover'
              />
              <h6 className='mb-0 mt-16'>Travel Agency Inc.</h6>
              <span className='text-secondary-light mb-16'>
                Agency Code : KT2025118243C
              </span>
            </div>
            <div className='mt-24'>
              <div className='d-flex align-items-center justify-content-between mb-16'>
                <h6 className='text-xl mb-0'>Company Info</h6>
                <button
                  type='button'
                  className='btn p-0 border-0 bg-transparent'
                  data-bs-toggle='modal'
                  data-bs-target='#editCompanyInfoModal'
                  aria-label='Edit Company Info'
                >
                  <Icon icon='solar:pen-bold' className='text-primary-600 text-lg cursor-pointer' />
                </button>
              </div>
              <ul>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Name
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    Travel Agency Inc.
                  </span>
                </li>
                <li className='d-flex align-items-start mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Address
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <div className='flex-grow-1'>
                    <div className='d-flex align-items-start gap-2 flex-wrap'>
                      <span className='text-secondary-light fw-medium'>
                        123 Business Street, Suite 100, New York, NY 10001
                      </span>
                      <span className='badge bg-primary-50 text-primary-600 fw-medium'>
                        <Icon icon='solar:home-bold' className='text-xs me-1' />
                        Headquarter
                      </span>
                    </div>
                  </div>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Company Type
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    Travel Agency
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Tax Trade Number
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    TAX-2024-123456
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-24 border-top pt-24'>
              <div className='d-flex align-items-center justify-content-between mb-16'>
                <h6 className='text-xl mb-0'>Operational Information</h6>
                <button
                  type='button'
                  className='btn p-0 border-0 bg-transparent'
                  data-bs-toggle='modal'
                  data-bs-target='#editOperationalInfoModal'
                  aria-label='Edit Operational Information'
                >
                  <Icon icon='solar:pen-bold' className='text-primary-600 text-lg cursor-pointer' />
                </button>
              </div>
              <ul>
                <li className='d-flex align-items-start mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Product and Services
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    Hotels, Flights, Packages, Transportation, Visa Services
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Company Size
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    50-100 Employees
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Booking Method
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    Online & Offline
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-190-px flex-shrink-0'>
                    Location of Operation
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-3 flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    United States, New York
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    {/* company branches section  */}
    <div className='col-lg-4'>
      <div className='card border radius-16 bg-base h-100'>
        <div className='card-body p-24 d-flex flex-column'>
          <div className='d-flex align-items-center justify-content-between mb-20'>
            <h6 className='text-xl mb-0'>Branches</h6>
            <button
              type='button'
              className='btn p-0 border-0 bg-transparent'
              data-bs-toggle='modal'
              data-bs-target='#addBranchModal'
              aria-label='Add New Branch'
            >
              <Icon icon='solar:add-circle-bold' className='text-primary-600 text-2xl cursor-pointer' />
            </button>
          </div>
          <div className='flex-grow-1 overflow-y-auto'>
            {/* Branch 1 */}
            <div className='border radius-8 p-16 mb-16'>
              <div className='d-flex align-items-center justify-content-between mb-16'>
                <div>
                  <h6 className='text-lg mb-0 text-primary-light'>
                    BR001 - New York Branch
                  </h6>
                </div>
                <button
                  type='button'
                  className='btn p-0 border-0 bg-transparent'
                  data-bs-toggle='modal'
                  data-bs-target='#editBranchModal'
                  aria-label='Edit Branch'
                >
                  <Icon icon='solar:pen-bold' className='text-primary-600 text-md cursor-pointer' />
                </button>
              </div>
              <ul className='list-unstyled mb-0'>
                <li className='d-flex align-items-start mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Address
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    456 Branch Avenue, New York, NY 10002
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Email
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    ny.branch@travelagency.com
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Phone
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    +1 (212) 555-1234
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Year of Corporation
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    2015
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Tax & Trade Number
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    TAX-NY-2015-789012
                  </span>
                </li>
                <li className='d-flex align-items-center mb-0'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Created On
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    January 15, 2015
                  </span>
                </li>
              </ul>
            </div>
            {/* Branch 2 */}
            <div className='border radius-8 p-16 mb-16'>
              <div className='d-flex align-items-center justify-content-between mb-16'>
                <div>
                  <h6 className='text-lg mb-0 text-primary-light'>
                    BR002 - Los Angeles Branch
                  </h6>
                </div>
                <button
                  type='button'
                  className='btn p-0 border-0 bg-transparent'
                  data-bs-toggle='modal'
                  data-bs-target='#editBranchModal'
                  aria-label='Edit Branch'
                >
                  <Icon icon='solar:pen-bold' className='text-primary-600 text-md cursor-pointer' />
                </button>
              </div>
              <ul className='list-unstyled mb-0'>
                <li className='d-flex align-items-start mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Address
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    789 Sunset Boulevard, Los Angeles, CA 90028
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Email
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    la.branch@travelagency.com
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Phone
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    +1 (323) 555-5678
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Year of Corporation
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    2018
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Tax & Trade Number
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    TAX-LA-2018-345678
                  </span>
                </li>
                <li className='d-flex align-items-center mb-0'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                    Created On
                  </span>
                  <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                    March 22, 2018
                  </span>
                </li>
              </ul>
            </div>
            {/* View All Branches CTA */}
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-primary border border-primary-600 text-sm px-24 py-10 radius-8'
                data-bs-toggle='modal'
                data-bs-target='#viewAllBranchesModal'
              >
                View All Branches (3)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* company contact details section  */}
      <div className='col-lg-4'>
        <div className='card border radius-16 bg-base h-100'>
          <div className='card-body p-24 d-flex flex-column'>
            <div className='d-flex align-items-center justify-content-between mb-20'>
              <h6 className='text-xl mb-0'>Contact Details</h6>
              <button
                type='button'
                className='btn p-0 border-0 bg-transparent'
                data-bs-toggle='modal'
                data-bs-target='#updateContactDetailsModal'
                aria-label='Edit Contact Details'
              >
                <Icon icon='solar:pen-bold' className='text-primary-600 text-lg cursor-pointer' />
              </button>
            </div>
            <div className='flex-grow-1 overflow-y-auto'>
              {/* Contact 1 */}
              <div className='border radius-8 p-16 mb-16'>
                <ul className='list-unstyled mb-0'>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Full Name
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      The Article Guru
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Email
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      anshrajgkp8765@gmail.com
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Designation
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      Customer Service Representative
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Contact Number
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      +918765867589
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-0'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap                                                                      flex-shrink-0'>
                      WhatsApp Number
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      +919936396851
                    </span>
                  </li>
                </ul>
              </div>
              {/* Contact 2 */}
              <div className='border radius-8 p-16 mb-16'>
                <ul className='list-unstyled mb-0'>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Full Name
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      John Smith
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Email
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      john.smith@example.com
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Designation
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      Sales Manager
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Contact Number
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      +919876543210
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-0'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      WhatsApp Number
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      +919876543210
                    </span>
                  </li>
                </ul>
              </div>
              {/* Contact 3 */}
              <div className='border radius-8 p-16 mb-16'>
                <ul className='list-unstyled mb-0'>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Full Name
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      Sarah Johnson
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Email
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      sarah.johnson@example.com
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Designation
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      Operations Manager
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-12'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      Contact Number
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      +919988776655
                    </span>
                  </li>
                  <li className='d-flex align-items-center mb-0'>
                    <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                      WhatsApp Number
                    </span>
                    <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                      :
                    </span>
                    <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                      +919988776655
                    </span>
                  </li>
                </ul>
              </div>
              {/* View All Contact Details CTA */}
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-primary border border-primary-600 text-sm px-24 py-10 radius-8'
                  data-bs-toggle='modal'
                  data-bs-target='#viewAllContactDetailsModal'
                >
                  View All Contact Details (4)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Company Info Modal */}
      <div
        className='modal fade'
        id='editCompanyInfoModal'
        tabIndex={-1}
        aria-labelledby='editCompanyInfoModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editCompanyInfoModalLabel'>
                Edit Company Info
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form action='#'>
                <div className='row'>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Name <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Company Name'
                      defaultValue='Travel Agency Inc.'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Company Type <span className='text-danger-600'>*</span>
                    </label>
                    <select className='form-control radius-8 form-select' defaultValue='Travel Agency'>
                      <option value='Travel Agency'>Travel Agency</option>
                      <option value='Tour Operator'>Tour Operator</option>
                      <option value='Hotel Chain'>Hotel Chain</option>
                      <option value='Transportation'>Transportation</option>
                    </select>
                  </div>
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Address <span className='text-danger-600'>*</span>
                    </label>
                    <textarea
                      className='form-control radius-8'
                      rows={3}
                      placeholder='Enter Company Address'
                      defaultValue='123 Business Street, Suite 100, New York, NY 10001'
                    />
                  </div>
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Tax Trade Number <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Tax Trade Number'
                      defaultValue='TAX-2024-123456'
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                  <button
                    type='button'
                    className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Operational Information Modal */}
      <div
        className='modal fade'
        id='editOperationalInfoModal'
        tabIndex={-1}
        aria-labelledby='editOperationalInfoModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editOperationalInfoModalLabel'>
                Edit Operational Information
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form action='#'>
                <div className='row'>
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Product and Services <span className='text-danger-600'>*</span>
                    </label>
                    <textarea
                      className='form-control radius-8'
                      rows={3}
                      placeholder='Enter Products and Services'
                      defaultValue='Hotels, Flights, Packages, Transportation, Visa Services'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Company Size <span className='text-danger-600'>*</span>
                    </label>
                    <select className='form-control radius-8 form-select' defaultValue='50-100'>
                      <option value='1-10'>1-10 Employees</option>
                      <option value='11-50'>11-50 Employees</option>
                      <option value='50-100'>50-100 Employees</option>
                      <option value='100-500'>100-500 Employees</option>
                      <option value='500+'>500+ Employees</option>
                    </select>
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Booking Method <span className='text-danger-600'>*</span>
                    </label>
                    <select className='form-control radius-8 form-select' defaultValue='Online & Offline'>
                      <option value='Online'>Online Only</option>
                      <option value='Offline'>Offline Only</option>
                      <option value='Online & Offline'>Online & Offline</option>
                    </select>
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Country <span className='text-danger-600'>*</span>
                    </label>
                    <select className='form-control radius-8 form-select' defaultValue='United States'>
                      <option value='United States'>United States</option>
                      <option value='Canada'>Canada</option>
                      <option value='United Kingdom'>United Kingdom</option>
                      <option value='Australia'>Australia</option>
                    </select>
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      City <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter City'
                      defaultValue='New York'
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                  <button
                    type='button'
                    className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Update Contact Details Modal */}
      <div
        className='modal fade'
        id='updateContactDetailsModal'
        tabIndex={-1}
        aria-labelledby='updateContactDetailsModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='updateContactDetailsModalLabel'>
                Update Contact Details
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form action='#'>
                <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
                  {contactSections.map((contact, index) => (
                    <div key={contact.id} className='border radius-8 p-16 mb-16'>
                      <div className='d-flex align-items-center justify-content-between mb-16'>
                        <h6 className='text-lg mb-0 text-primary-light'>Contact Details {index + 1}</h6>
                        <button
                          type='button'
                          className='btn p-0 border-0 bg-transparent'
                          onClick={() => removeContactSection(contact.id)}
                          aria-label='Remove Contact'
                        >
                          <Icon icon='solar:trash-bin-trash-bold' className='text-danger-600 text-md cursor-pointer' />
                        </button>
                      </div>
                      <div className='row'>
                        <div className='col-6 mb-20'>
                          <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                            Full Name <span className='text-danger-600'>*</span>
                          </label>
                          <input
                            type='text'
                            className='form-control radius-8'
                            placeholder='Enter Full Name'
                            defaultValue={contact.fullName}
                          />
                        </div>
                        <div className='col-6 mb-20'>
                          <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                            Email <span className='text-danger-600'>*</span>
                          </label>
                          <input
                            type='email'
                            className='form-control radius-8'
                            placeholder='Enter Email'
                            defaultValue={contact.email}
                          />
                        </div>
                        <div className='col-6 mb-20'>
                          <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                            Designation <span className='text-danger-600'>*</span>
                          </label>
                          <input
                            type='text'
                            className='form-control radius-8'
                            placeholder='Enter Designation'
                            defaultValue={contact.designation}
                          />
                        </div>
                        <div className='col-6 mb-20'>
                          <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                            Contact Number <span className='text-danger-600'>*</span>
                          </label>
                          <input
                            type='tel'
                            className='form-control radius-8'
                            placeholder='Enter Contact Number'
                            defaultValue={contact.contactNumber}
                          />
                        </div>
                        <div className='col-6 mb-20'>
                          <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                            WhatsApp Number <span className='text-danger-600'>*</span>
                          </label>
                          <input
                            type='tel'
                            className='form-control radius-8'
                            placeholder='Enter WhatsApp Number'
                            defaultValue={contact.whatsappNumber}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Add New Contact Button */}
                  <div className='text-center mb-16'>
                    <button
                      type='button'
                      className='btn btn-outline-primary border border-primary-600 text-primary-600 text-sm px-24 py-10 radius-8 d-inline-flex align-items-center gap-2'
                      onClick={addContactSection}
                    >
                      <Icon icon='solar:add-circle-bold' className='text-primary-600 text-lg' />
                      Add Another Contact
                    </button>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                  <button
                    type='button'
                    className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Add Branch Modal */}
      <div
        className='modal fade'
        id='addBranchModal'
        tabIndex={-1}
        aria-labelledby='addBranchModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='addBranchModalLabel'>
                Add New Branch
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form action='#'>
                <div className='row'>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Branch Code <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Branch Code'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Branch Name <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Branch Name'
                    />
                  </div>
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Address <span className='text-danger-600'>*</span>
                    </label>
                    <textarea
                      className='form-control radius-8'
                      rows={3}
                      placeholder='Enter Branch Address'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Email <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='email'
                      className='form-control radius-8'
                      placeholder='Enter Branch Email'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Phone <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='tel'
                      className='form-control radius-8'
                      placeholder='Enter Phone Number'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Year of Corporation <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='number'
                      className='form-control radius-8'
                      placeholder='Enter Year'
                      min='1900'
                      max={new Date().getFullYear()}
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Tax & Trade Number <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Tax & Trade Number'
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                  <button
                    type='button'
                    className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                  >
                    Add Branch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Branch Modal */}
      <div
        className='modal fade'
        id='editBranchModal'
        tabIndex={-1}
        aria-labelledby='editBranchModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editBranchModalLabel'>
                Edit Branch
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <form action='#'>
                <div className='row'>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Branch Code <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Branch Code'
                      defaultValue='BR001'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Branch Name <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Branch Name'
                      defaultValue='New York Branch'
                    />
                  </div>
                  <div className='col-12 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Address <span className='text-danger-600'>*</span>
                    </label>
                    <textarea
                      className='form-control radius-8'
                      rows={3}
                      placeholder='Enter Branch Address'
                      defaultValue='456 Branch Avenue, New York, NY 10002'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Email <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='email'
                      className='form-control radius-8'
                      placeholder='Enter Branch Email'
                      defaultValue='ny.branch@travelagency.com'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Phone <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='tel'
                      className='form-control radius-8'
                      placeholder='Enter Phone Number'
                      defaultValue='+1 (212) 555-1234'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Year of Corporation <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='number'
                      className='form-control radius-8'
                      placeholder='Enter Year'
                      min='1900'
                      max={new Date().getFullYear()}
                      defaultValue='2015'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Tax & Trade Number <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Tax & Trade Number'
                      defaultValue='TAX-NY-2015-789012'
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                  <button
                    type='button'
                    className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* View All Branches Modal */}
      <div
        className='modal fade'
        id='viewAllBranchesModal'
        tabIndex={-1}
        aria-labelledby='viewAllBranchesModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='viewAllBranchesModalLabel'>
                All Branches
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
                {/* Branch 1 */}
                <div className='border radius-8 p-16 mb-16'>
                  <div className='d-flex align-items-center justify-content-between mb-16'>
                    <div>
                      <h6 className='text-lg mb-0 text-primary-light'>
                        BR001 - New York Branch
                      </h6>
                    </div>
                    <button
                      type='button'
                      className='btn p-0 border-0 bg-transparent'
                      data-bs-toggle='modal'
                      data-bs-target='#editBranchModal'
                      aria-label='Edit Branch'
                    >
                      <Icon icon='solar:pen-bold' className='text-primary-600 text-md cursor-pointer' />
                    </button>
                  </div>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-start mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Address
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        456 Branch Avenue, New York, NY 10002
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        ny.branch@travelagency.com
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Phone
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +1 (212) 555-1234
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Year of Corporation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        2015
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Tax & Trade Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        TAX-NY-2015-789012
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Created On
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        January 15, 2015
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Branch 2 */}
                <div className='border radius-8 p-16 mb-16'>
                  <div className='d-flex align-items-center justify-content-between mb-16'>
                    <div>
                      <h6 className='text-lg mb-0 text-primary-light'>
                        BR002 - Los Angeles Branch
                      </h6>
                    </div>
                    <button
                      type='button'
                      className='btn p-0 border-0 bg-transparent'
                      data-bs-toggle='modal'
                      data-bs-target='#editBranchModal'
                      aria-label='Edit Branch'
                    >
                      <Icon icon='solar:pen-bold' className='text-primary-600 text-md cursor-pointer' />
                    </button>
                  </div>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-start mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Address
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        789 Sunset Boulevard, Los Angeles, CA 90028
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        la.branch@travelagency.com
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Phone
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +1 (323) 555-5678
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Year of Corporation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        2018
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Tax & Trade Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        TAX-LA-2018-345678
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Created On
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        March 22, 2018
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Branch 3 */}
                <div className='border radius-8 p-16 mb-0'>
                  <div className='d-flex align-items-center justify-content-between mb-16'>
                    <div>
                      <h6 className='text-lg mb-0 text-primary-light'>
                        BR003 - Chicago Branch
                      </h6>
                    </div>
                    <button
                      type='button'
                      className='btn p-0 border-0 bg-transparent'
                      data-bs-toggle='modal'
                      data-bs-target='#editBranchModal'
                      aria-label='Edit Branch'
                    >
                      <Icon icon='solar:pen-bold' className='text-primary-600 text-md cursor-pointer' />
                    </button>
                  </div>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-start mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Address
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        321 Michigan Avenue, Chicago, IL 60601
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        chicago.branch@travelagency.com
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Phone
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +1 (312) 555-9012
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Year of Corporation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        2020
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Tax & Trade Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        TAX-CH-2020-456789
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Created On
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        June 10, 2020
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Contact Details Modal */}
      <div
        className='modal fade'
        id='viewAllContactDetailsModal'
        tabIndex={-1}
        aria-labelledby='viewAllContactDetailsModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='viewAllContactDetailsModalLabel'>
                All Contact Details
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body p-24'>
              <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
                {/* Contact 1 */}
                <div className='border radius-8 p-16 mb-16'>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Full Name
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        The Article Guru
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        anshrajgkp8765@gmail.com
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Designation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        Customer Service Representative
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Contact Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +918765867589
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        WhatsApp Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +919936396851
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Contact 2 */}
                <div className='border radius-8 p-16 mb-16'>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Full Name
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        John Smith
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        john.smith@example.com
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Designation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        Sales Manager
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Contact Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +919876543210
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        WhatsApp Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +919876543210
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Contact 3 */}
                <div className='border radius-8 p-16 mb-16'>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Full Name
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        Sarah Johnson
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        sarah.johnson@example.com
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Designation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        Operations Manager
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Contact Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +919988776655
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        WhatsApp Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +919988776655
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Contact 4 - Additional */}
                <div className='border radius-8 p-16 mb-0'>
                  <ul className='list-unstyled mb-0'>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Full Name
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        Michael Brown
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Email
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        michael.brown@example.com
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Designation
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        Finance Manager
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-12'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        Contact Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +919988776644
                      </span>
                    </li>
                    <li className='d-flex align-items-center mb-0'>
                      <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px flex-shrink-0'>
                        WhatsApp Number
                      </span>
                      <span className='text-md fw-semibold text-primary-light flex-shrink-0'>
                        :
                      </span>
                      <span className='text-secondary-light fw-medium flex-grow-1 ps-2'>
                        +919988776644
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
  );
};

export default ViewCompanyProfileLayer;
