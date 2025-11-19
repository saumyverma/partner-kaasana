"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const ViewUserDetailsModal = ({ user, onEdit }) => {
  const [userData, setUserData] = useState({
    name: "Jacob Jones",
    email: "ifrandom@gmail.com",
    contact: "+1234567890",
    designation: "UI UX Designer",
    department: "Design",
    reportingManager: "John Doe",
    branch: "Main Branch",
    roles: ["Designer", "Developer"],
    profileImage: "/assets/img/user.png",
    coverImage: "/assets/img/coverimages.jpg",
  });

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const handleClose = () => {
    const modalElement = document.getElementById('viewUserDetailsModal');
    if (modalElement) {
      if (typeof window !== 'undefined' && window.bootstrap) {
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
      } else if (typeof window !== 'undefined' && window.$) {
        window.$(modalElement).modal('hide');
      } else {
        // Manual cleanup
        modalElement.classList.remove('show');
        modalElement.style.display = 'none';
        document.body.classList.remove('modal-open');
        const backdrop = document.getElementById('modalBackdrop');
        if (backdrop) {
          backdrop.remove();
        }
      }
    }
  };

  // Listen for modal show event to update data and handle cleanup
  useEffect(() => {
    const modalElement = document.getElementById('viewUserDetailsModal');
    if (modalElement) {
      const handleShow = () => {
        if (user) {
          setUserData(user);
        }
      };
      
      const handleHide = () => {
        // Clean up backdrop if manually added
        const backdrop = document.getElementById('modalBackdrop');
        if (backdrop) {
          backdrop.remove();
        }
        document.body.classList.remove('modal-open');
      };

      modalElement.addEventListener('show.bs.modal', handleShow);
      modalElement.addEventListener('hide.bs.modal', handleHide);
      modalElement.addEventListener('hidden.bs.modal', handleHide);
      
      return () => {
        modalElement.removeEventListener('show.bs.modal', handleShow);
        modalElement.removeEventListener('hide.bs.modal', handleHide);
        modalElement.removeEventListener('hidden.bs.modal', handleHide);
      };
    }
  }, [user]);

  return (
    <div
      className='modal fade'
      id='viewUserDetailsModal'
      tabIndex={-1}
      aria-labelledby='viewUserDetailsModalLabel'
      aria-hidden='true'
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target.id === 'viewUserDetailsModal') {
          handleClose();
        }
      }}
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div 
          className='modal-content border radius-16 bg-base'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
            <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='viewUserDetailsModalLabel'>
              User Details
            </h1>
            <button
              type='button'
              className='btn-close'
              onClick={handleClose}
              aria-label='Close'
            />
          </div>
          <div className='modal-body p-24'>
            <div className='position-relative mb-24'>
              <img
                src={userData.coverImage}
                alt='Cover'
                className='w-100 h-200-px object-fit-cover radius-12'
              />
              <div className='text-center mt--50'>
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className='border br-white border-width-2-px w-100-px h-100-px rounded-circle object-fit-cover'
                />
                <h5 className='text-lg mb-0 mt-4'>{userData.name}</h5>
                <span className='text-secondary-light'>{userData.email}</span>
              </div>
            </div>

            <div className='row gy-3'>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Name:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{userData.name}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Email:</span>
                  <span className='text-primary-light text-sm flex-grow-1 text-break'>{userData.email}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Contact:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{userData.contact}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Designation:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{userData.designation}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Department:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{userData.department}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Reporting Manager:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{userData.reportingManager}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Branch:</span>
                  <span className='text-primary-light text-sm flex-grow-1'>{userData.branch}</span>
                </div>
              </div>
              <div className='col-6'>
                <div className='d-flex align-items-start gap-2'>
                  <span className='text-secondary-light text-sm w-160-px text-nowrap'>Assignment Roles:</span>
                  <div className='flex-grow-1 d-flex flex-wrap gap-2'>
                    {userData.roles?.map((role, index) => (
                      <span
                        key={index}
                        className='badge bg-primary-50 text-primary-600 px-8 py-4 radius-8 text-xs'
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
              <button
                type='button'
                className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type='button'
                className='btn btn-primary border border-primary-600 text-md px-48 py-12 radius-8'
                onClick={() => {
                  handleClose();
                  if (onEdit && userData) {
                    setTimeout(() => {
                      onEdit(userData);
                    }, 300);
                  }
                }}
              >
                Edit User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserDetailsModal;

