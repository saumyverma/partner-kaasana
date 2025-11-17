"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const ViewProfileLayer = () => {
  const [imagePreview, setImagePreview] = useState(
    "assets/images/user-grid/user-grid-img13.png"
  );
  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!currentPasswordVisible);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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

  return (
    <div className='row gy-4'>
      {/* user pofile section */}
      <div className='col-lg-4'>
        <div className='user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100'>
          <img
            src='assets/images/user-grid/user-grid-bg1.png'
            alt=''
            className='w-100 object-fit-cover'
          />
          <div className='pb-24 ms-16 mb-24 me-16  mt--100'>
            <div className='text-center border border-top-0 border-start-0 border-end-0'>
              <img
                src='assets/images/user-grid/user-grid-img14.png'
                alt=''
                className='border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover'
              />
              <h6 className='mb-0 mt-16'>Jacob Jones</h6>
              <span className='text-secondary-light mb-16'>
                ifrandom@gmail.com
              </span>
            </div>
            <div className='mt-24'>
              <h6 className='text-xl mb-16'>Personal Info</h6>
              <ul>
                <li className='d-flex align-items-center gap-1 mb-12'>
                  <span className='w-30 text-md fw-semibold text-primary-light'>
                    Full Name
                  </span>
                  <span className='w-70 text-secondary-light fw-medium'>
                    : Will Jonto
                  </span>
                </li>
                <li className='d-flex align-items-center gap-1 mb-12'>
                  <span className='w-30 text-md fw-semibold text-primary-light'>
                    Email
                  </span>
                  <span className='w-70 text-secondary-light fw-medium'>
                    : willjontoax@gmail.com
                  </span>
                </li>
                <li className='d-flex align-items-center gap-1 mb-12'>
                  <span className='w-30 text-md fw-semibold text-primary-light'>
                    Phone Number
                  </span>
                  <span className='w-70 text-secondary-light fw-medium'>
                    : (1) 2536 2561 2365
                  </span>
                </li>
                <li className='d-flex align-items-center gap-1 mb-12'>
                  <span className='w-30 text-md fw-semibold text-primary-light'>
                    Department
                  </span>
                  <span className='w-70 text-secondary-light fw-medium'>
                    : Design
                  </span>
                </li>
                <li className='d-flex align-items-center gap-1 mb-12'>
                  <span className='w-30 text-md fw-semibold text-primary-light'>
                    Designation
                  </span>
                  <span className='w-70 text-secondary-light fw-medium'>
                    : UI UX Designer
                  </span>
                </li>
                <li className='d-flex align-items-center gap-1 mb-12'>
                  <span className='w-30 text-md fw-semibold text-primary-light'>
                    Languages
                  </span>
                  <span className='w-70 text-secondary-light fw-medium'>
                    : English
                  </span>
                </li>
                <li className='d-flex align-items-center gap-1'>
                  <span className='w-30 text-md fw-semibold text-primary-light'>
                    Bio
                  </span>
                  <span className='w-70 text-secondary-light fw-medium'>
                    : Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </span>
                </li>
              </ul>
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
              <div className='overflow-y-auto flex-grow-1'>
                <ul className='list-unstyled mb-0'>
                  <li className='border radius-8 mb-8 p-12'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-6'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 15, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            10:30 AM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-2' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Chrome 120.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-success-50 text-success-600 ms-12'>
                        Active
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-8 p-12'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-6'>
                          <span className='fw-medium text-primary-light text-sm'>
                            Jan 14, 2024
                          </span>
                          <span className='text-secondary-light text-xs'>
                            08:45 PM
                          </span>
                        </div>
                        <div className='d-flex flex-wrap gap-2'>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:monitor-bold' className='text-xs me-2' />
                            Desktop
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:browser-bold' className='text-xs me-2' />
                            Chrome 120.0
                          </span>
                          <span className='badge bg-light border border-secondary-300 text-dark text-xs px-6 py-2'>
                            <Icon icon='solar:router-bold' className='text-xs me-2' />
                            192.168.1.105
                          </span>
                        </div>
                      </div>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium ms-12'>
                        Logged Out
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-8 p-12'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-6'>
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
                        Logged Out
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-8 p-12'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-6'>
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
                        Logged Out
                      </span>
                    </div>
                  </li>
                  <li className='border radius-8 mb-0 p-12'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center gap-2 mb-6'>
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
                        Logged Out
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ViewProfileLayer;

