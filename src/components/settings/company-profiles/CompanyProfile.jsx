"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import EditCompanyInfoModal from "./EditCompanyInfoModal";
import EditOperationalInfoModal from "./EditOperationalInfoModal";
import UpdateContactDetailsModal from "./UpdateContactDetailsModal";
import AddBranchModal from "./AddBranchModal";
import EditBranchModal from "./EditBranchModal";
import ViewAllBranchesModal from "./ViewAllBranchesModal";
import ViewAllContactDetailsModal from "./ViewAllContactDetailsModal";

const CompanyProfile = () => {
  const [contactSections, setContactSections] = useState([
    { id: 1, fullName: 'The Article Guru', email: 'anshrajgkp8765@gmail.com', designation: 'Customer Service Representative', contactNumber: '+918765867589', whatsappNumber: '+919936396851' },
    { id: 2, fullName: 'John Smith', email: 'john.smith@example.com', designation: 'Sales Manager', contactNumber: '+919876543210', whatsappNumber: '+919876543210' },
    { id: 3, fullName: 'Sarah Johnson', email: 'sarah.johnson@example.com', designation: 'Operations Manager', contactNumber: '+919988776655', whatsappNumber: '+919988776655' },
  ]);

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

      {/* Modals */}
      <EditCompanyInfoModal />
      <EditOperationalInfoModal />
      <UpdateContactDetailsModal
        contactSections={contactSections}
        addContactSection={addContactSection}
        removeContactSection={removeContactSection}
      />
      <AddBranchModal />
      <EditBranchModal />
      <ViewAllBranchesModal />
      <ViewAllContactDetailsModal />
    </div>
  );
};

export default CompanyProfile;

