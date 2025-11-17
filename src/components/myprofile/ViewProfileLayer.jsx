"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const ViewProfileLayer = () => {
  const [imagePreview, setImagePreview] = useState(
    "assets/images/user-grid/user-grid-img13.png"
  );
  const [coverImagePreview, setCoverImagePreview] = useState(
    "assets/img/coverimages.jpg"
  );
  const [profileImagePreview, setProfileImagePreview] = useState(
    "assets/img/user.png"
  );
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [modalCurrentPasswordVisible, setModalCurrentPasswordVisible] = useState(false);
  const [modalNewPasswordVisible, setModalNewPasswordVisible] = useState(false);
  const [modalConfirmPasswordVisible, setModalConfirmPasswordVisible] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const toggleModalCurrentPasswordVisibility = () => {
    setModalCurrentPasswordVisible(!modalCurrentPasswordVisible);
  };

  const toggleModalNewPasswordVisibility = () => {
    setModalNewPasswordVisible(!modalNewPasswordVisible);
  };

  const toggleModalConfirmPasswordVisibility = () => {
    setModalConfirmPasswordVisible(!modalConfirmPasswordVisible);
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

  const readCoverImage = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  const readProfileImage = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImagePreview(e.target.result);
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  return (
    <div className='row gy-4'>
      {/* user pofile section */}
      <div className='col-lg-4'>
        <div className='user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100'>
          <img
            src='assets/img/coverimages.jpg'
            alt=''
            className='w-100 object-fit-cover'
          />
          <div className='pb-24 ms-16 mb-24 me-16  mt--100'>
            <div className='text-center border border-top-0   border-start-0 border-end-0'>
              <img
                src='assets/img/user.png'
                alt=''
                className='border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover'
              />
              <h6 className='mb-0 mt-16'>Jacob Jones</h6>
              <span className='text-secondary-light mb-16'>
                ifrandom@gmail.com
              </span>
            </div>
            <div className='mt-24'>
              <div className='d-flex align-items-center justify-content-between mb-16'>
                <h6 className='text-xl mb-0'>Personal Info</h6>
                <button
                  type='button'
                  className='btn p-0 border-0 bg-transparent'
                  data-bs-toggle='modal'
                  data-bs-target='#editPersonalInfoModal'
                  aria-label='Edit Personal Info'
                >
                  <Icon icon='solar:pen-bold' className='text-primary-600 text-lg cursor-pointer' />
                </button>
              </div>
              <ul>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px'>
                    Name
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-2'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    Jacob Jones
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px'>
                    Email
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-2'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    ifrandom@gmail.com
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px'>
                    Phone
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-2'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    (1) 2536 2561 2365
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px'>
                    Designation
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-2'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    UI UX Designer
                  </span>
                </li>
                <li className='d-flex align-items-start mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px'>
                    Reporting Manager
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-2'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    John Smith
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px'>
                    Branch
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-2'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    New York Office
                  </span>
                </li>
                <li className='d-flex align-items-center mb-12'>
                  <span className='text-md fw-semibold text-primary-light text-nowrap w-160-px'>
                    Assigned Roles
                  </span>
                  <span className='text-md fw-semibold text-primary-light px-2'>
                    :
                  </span>
                  <span className='text-secondary-light fw-medium flex-grow-1'>
                    Admin, Manager
                  </span>
                </li>
              </ul>
              <div className='border-top pt-16 mt-16'>
                <h6 className='text-md text-primary-light mb-12 fw-semibold'>
                  Password Reset
                </h6>
                <button
                  type='button'
                  className='btn btn-primary border border-primary-600 text-sm px-24 py-10 radius-8 w-100'
                  data-bs-toggle='modal'
                  data-bs-target='#passwordResetModal'
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Roles and Access section */}
    <div className='col-lg-4'>
        <div className='card border radius-16 bg-base h-100'>
          <div className='card-body p-24 d-flex flex-column'>
            <h6 className='text-xl mb-20'>Roles and Access</h6>
            <div className='row g-3 mb-24'>
              <div className='col-12'>
                <div className='border radius-8 p-16 bg-primary-50'>
                  <div className='d-flex align-items-center gap-3'>
                    <div className='w-40-px h-40-px d-flex align-items-center justify-content-center bg-primary-600 rounded-circle'>
                      <Icon icon='solar:case-bold' className='text-white text-lg' />
                    </div>
                    <div className='flex-grow-1'>
                      <h6 className='text-xs text-secondary-light mb-2 fw-medium'>
                        Job Title
                      </h6>
                      <span className='text-md text-primary-light fw-semibold'>
                        UI UX Designer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='border radius-8 p-16 bg-base'>
                  <div className='text-center'>
                    <h6 className='text-xs text-secondary-light mb-8 fw-medium'>
                      Roles
                    </h6>
                    <span className='badge bg-primary-600 text-white fw-medium px-12 py-6'>
                      Admin
                    </span>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='border radius-8 p-16 bg-base'>
                  <div className='text-center'>
                    <h6 className='text-xs text-secondary-light mb-8 fw-medium'>
                      Department
                    </h6>
                    <span className='text-md text-primary-light fw-semibold'>
                      Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-grow-1 d-flex flex-column min-h-0'>
              <h6 className='text-md text-primary-light mb-16 fw-semibold'>
                Assigned Permissions
              </h6>
              <div className='overflow-y-auto flex-grow-1'>
                <ul className='list-unstyled mb-0'>
                  <li className='d-flex align-items-center justify-content-between py-12 px-16 border radius-8 mb-12'>
                    <span className='text-secondary-light fw-medium text-sm'>
                      Dashboard Access
                    </span>
                    <span className='d-flex align-items-center gap-2 text-success-600 fw-medium'>
                      <Icon icon='solar:check-circle-bold' className='text-lg' />
                      Enabled
                    </span>
                  </li>
                  <li className='d-flex align-items-center justify-content-between py-12 px-16 border radius-8 mb-12'>
                    <span className='text-secondary-light fw-medium text-sm'>
                      User Management
                    </span>
                    <span className='d-flex align-items-center gap-2 text-success-600 fw-medium'>
                      <Icon icon='solar:check-circle-bold' className='text-lg' />
                      Enabled
                    </span>
                  </li>
                  <li className='d-flex align-items-center justify-content-between py-12 px-16 border radius-8 mb-12'>
                    <span className='text-secondary-light fw-medium text-sm'>
                      Content Management
                    </span>
                    <span className='d-flex align-items-center gap-2 text-success-600 fw-medium'>
                      <Icon icon='solar:check-circle-bold' className='text-lg' />
                      Enabled
                    </span>
                  </li>
                  <li className='d-flex align-items-center justify-content-between py-12 px-16 border radius-8 mb-12'>
                    <span className='text-secondary-light fw-medium text-sm'>
                      Analytics Access
                    </span>
                    <span className='d-flex align-items-center gap-2 text-success-600 fw-medium'>
                      <Icon icon='solar:check-circle-bold' className='text-lg' />
                      Enabled
                    </span>
                  </li>
                  <li className='d-flex align-items-center justify-content-between py-12 px-16 border radius-8 mb-12'>
                    <span className='text-secondary-light fw-medium text-sm'>
                      Reports Access
                    </span>
                    <span className='d-flex align-items-center gap-2 text-success-600 fw-medium'>
                      <Icon icon='solar:check-circle-bold' className='text-lg' />
                      Enabled
                    </span>
                  </li>
                  <li className='d-flex align-items-center justify-content-between py-12 px-16 border radius-8 mb-12'>
                    <span className='text-secondary-light fw-medium text-sm'>
                      Settings Access
                    </span>
                    <span className='d-flex align-items-center gap-2 text-success-600 fw-medium'>
                      <Icon icon='solar:check-circle-bold' className='text-lg' />
                      Enabled
                    </span>
                  </li>
                  <li className='d-flex align-items-center justify-content-between py-12 px-16 border radius-8 mb-0'>
                    <span className='text-secondary-light fw-medium text-sm'>
                      API Access
                    </span>
                    <span className='d-flex align-items-center gap-2 text-success-600 fw-medium'>
                      <Icon icon='solar:check-circle-bold' className='text-lg' />
                      Enabled
                    </span>                                   
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* user system access info section */}
      <div className='col-lg-4'>
        <div className='card border radius-16 bg-base h-100'>
          <div className='card-body p-24 d-flex flex-column'>
            <h6 className='text-xl mb-20'>System Information</h6>
            <div className='mb-24'>
              <div className='row g-3'>
                <div className='col-12'>
                  <div className='border radius-8 p-16 bg-base'>
                    <div className='d-flex align-items-center gap-3'>
                      <div className='w-40-px h-40-px d-flex align-items-center justify-content-center bg-success-50 rounded-circle'>
                        <Icon icon='solar:server-path-bold' className='text-success-600 text-lg' />
                      </div>
                      <div className='flex-grow-1'>
                        <h6 className='text-xs text-secondary-light mb-2 fw-medium'>
                          System Version
                        </h6>
                        <span className='text-md text-primary-light fw-semibold'>
                          v2.1.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='border radius-8 p-16 bg-base'>
                    <div className='text-center'>
                      <h6 className='text-xs text-secondary-light mb-8 fw-medium'>
                        IP Address
                      </h6>
                      <span className='text-sm text-primary-light fw-semibold'>
                        192.168.1.105
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='border radius-8 p-16 bg-base'>
                    <div className='text-center'>
                      <h6 className='text-xs text-secondary-light mb-8 fw-medium'>
                        Timezone
                      </h6>
                      <span className='text-sm text-primary-light fw-semibold'>
                        UTC+5:30
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='border radius-8 p-16 bg-base'>
                    <div className='text-center'>
                      <h6 className='text-xs text-secondary-light mb-8 fw-medium'>
                        Browser
                      </h6>
                      <span className='text-sm text-primary-light fw-semibold'>
                        Chrome 120.0
                      </span>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='border radius-8 p-16 bg-base'>
                    <div className='text-center'>
                      <h6 className='text-xs text-secondary-light mb-8 fw-medium'>
                        Device
                      </h6>
                      <span className='text-sm text-primary-light fw-semibold'>
                        Desktop
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-grow-1 d-flex flex-column min-h-0'>
              <h6 className='text-md text-primary-light mb-16 fw-semibold'>
                Login History
              </h6>
              <div className='overflow-y-auto flex-grow-1 max-h-400-px'>
                <ul className='list-unstyled mb-0'>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 15, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            10:30 AM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-1' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-1' />
                            Chrome 120.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-1' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-success-50 text-success-600 ms-12'>
                        Active
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 14, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            08:45 PM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-1' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-1' />
                            Chrome 120.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-1' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 14, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            02:15 PM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-2' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Firefox 121.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.102
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 13, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            11:20 AM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:smartphone-bold' className='text-xs me-2' />
                            Mobile
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Chrome 119.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 12, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            09:00 AM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-2' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Chrome 119.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 11, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            03:45 PM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-2' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Edge 120.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.108
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 10, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            01:20 PM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:smartphone-bold' className='text-xs me-2' />
                            Mobile
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Safari 17.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.110
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 9, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            07:15 AM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-1' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-1' />
                            Chrome 120.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-1' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 8, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            05:30 PM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:tablet-bold' className='text-xs me-2' />
                            Tablet
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Chrome 119.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.112
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-12 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 7, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            12:00 PM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-2' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Firefox 121.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-0 p-16'>
                    <div className='d-flex align-items-center justify-content-between gap-3'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-8'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 6, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            10:10 AM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-2' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Chrome 118.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Inactive
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Reset Modal */}
      <div
        className='modal fade'
        id='passwordResetModal'
        tabIndex={-1}
        aria-labelledby='passwordResetModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='passwordResetModalLabel'>
                Reset Password
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
                <div className='mb-20'>
                  <label
                    htmlFor='modal-email'
                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control radius-8'
                    id='modal-email'
                    defaultValue='ifrandom@gmail.com'
                    disabled
                    readOnly
                  />
                </div>
                <div className='mb-20'>
                  <label
                    htmlFor='modal-current-password'
                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                  >
                    Current Password <span className='text-danger-600'>*</span>
                  </label>
                  <div className='position-relative'>
                    <input
                      type={modalCurrentPasswordVisible ? "text" : "password"}
                      className='form-control radius-8'
                      id='modal-current-password'
                      placeholder='Enter Current Password'
                    />
                    <span
                      className={`toggle-password ${
                        modalCurrentPasswordVisible ? "ri-eye-off-line" : "ri-eye-line"
                      } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                      onClick={toggleModalCurrentPasswordVisibility}
                    ></span>
                  </div>
                </div>
                <div className='mb-20'>
                  <label
                    htmlFor='modal-new-password'
                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                  >
                    New Password <span className='text-danger-600'>*</span>
                  </label>
                  <div className='position-relative'>
                    <input
                      type={modalNewPasswordVisible ? "text" : "password"}
                      className='form-control radius-8'
                      id='modal-new-password'
                      placeholder='Enter New Password'
                    />
                    <span
                      className={`toggle-password ${
                        modalNewPasswordVisible ? "ri-eye-off-line" : "ri-eye-line"
                      } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                      onClick={toggleModalNewPasswordVisibility}
                    ></span>
                  </div>
                </div>
                <div className='mb-20'>
                  <label
                    htmlFor='modal-confirm-password'
                    className='form-label fw-semibold text-primary-light text-sm mb-8'
                  >
                    Confirm Password <span className='text-danger-600'>*</span>
                  </label>
                  <div className='position-relative'>
                    <input
                      type={modalConfirmPasswordVisible ? "text" : "password"}
                      className='form-control radius-8'
                      id='modal-confirm-password'
                      placeholder='Confirm New Password'
                    />
                    <span
                      className={`toggle-password ${
                        modalConfirmPasswordVisible
                          ? "ri-eye-off-line"
                          : "ri-eye-line"
                      } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                      onClick={toggleModalConfirmPasswordVisibility}
                    ></span>
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3 mt-24'>
                  <button
                    type='button'
                    className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-sm px-24 py-10 radius-8'
                    data-bs-dismiss='modal'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary border border-primary-600 text-sm px-24 py-10 radius-8'
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Personal Info Modal */}
      <div
        className='modal fade'
        id='editPersonalInfoModal'
        tabIndex={-1}
        aria-labelledby='editPersonalInfoModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered'>
          <div className='modal-content border radius-16 bg-base'>
            <div className='modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0'>
              <h1 className='modal-title fs-5 text-primary-light fw-semibold' id='editPersonalInfoModalLabel'>
                Edit Personal Info
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
                      Cover Image
                    </label>
                    <div className='position-relative'>
                      <img
                        src={coverImagePreview}
                        alt='Cover Preview'
                        className='w-100 h-120-px border radius-8 object-fit-cover mb-8'
                      />
                      <input
                        type='file'
                        className='form-control radius-8'
                        accept='image/*'
                        onChange={readCoverImage}
                      />
                    </div>
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Profile Image
                    </label>
                    <div className='position-relative'>
                      <div className='d-flex justify-content-center mb-8'>
                        <img
                          src={profileImagePreview}
                          alt='Profile Preview'
                          className='w-120-px h-120-px border radius-8 rounded-circle object-fit-cover'
                        />
                      </div>
                      <input
                        type='file'
                        className='form-control radius-8'
                        accept='image/*'
                        onChange={readProfileImage}
                      />
                    </div>
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Name <span className='text-danger-600'>*</span>
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Name'
                      defaultValue='Jacob Jones'
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
                      defaultValue='ifrandom@gmail.com'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Phone
                    </label>
                    <input
                      type='tel'
                      className='form-control radius-8'
                      placeholder='Enter Phone Number'
                      defaultValue='(1) 2536 2561 2365'
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
                      defaultValue='UI UX Designer'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Reporting Manager
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Reporting Manager'
                      defaultValue='John Smith'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Branch
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Branch'
                      defaultValue='New York Office'
                    />
                  </div>
                  <div className='col-6 mb-20'>
                    <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                      Assigned Roles
                    </label>
                    <input
                      type='text'
                      className='form-control radius-8'
                      placeholder='Enter Assigned Roles'
                      defaultValue='Admin, Manager'
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

    </div>
  );
};

export default ViewProfileLayer;

