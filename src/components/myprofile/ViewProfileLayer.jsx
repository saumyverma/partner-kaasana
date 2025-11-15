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
      <div className='col-lg-8'>
        <div className='card h-100'>
          <div className='card-body p-24'>
            <ul
              className='nav border-gradient-tab nav-pills mb-20 d-inline-flex'
              id='pills-tab'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link d-flex align-items-center px-24 active'
                  id='pills-role-access-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-role-access'
                  type='button'
                  role='tab'
                  aria-controls='pills-role-access'
                  aria-selected='true'
                >
                  Role and Access
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link d-flex align-items-center px-24'
                  id='pills-security-password-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-security-password'
                  type='button'
                  role='tab'
                  aria-controls='pills-security-password'
                  aria-selected='false'
                  tabIndex={-1}
                >
                  Account settings
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link d-flex align-items-center px-24'
                  id='pills-notification-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-notification'
                  type='button'
                  role='tab'
                  aria-controls='pills-notification'
                  aria-selected='false'
                  tabIndex={-1}
                >
                  My preferences
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link d-flex align-items-center px-24'
                  id='pills-edit-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-edit-profile'
                  type='button'
                  role='tab'
                  aria-controls='pills-edit-profile'
                  aria-selected='false'
                  tabIndex={-1}
                >
                  General Info
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link d-flex align-items-center px-24'
                  id='pills-system-info-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-system-info'
                  type='button'
                  role='tab'
                  aria-controls='pills-system-info'
                  aria-selected='false'
                  tabIndex={-1}
                >
                  System Info
                </button>
              </li>
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-role-access'
                role='tabpanel'
                aria-labelledby='pills-role-access-tab'
                tabIndex={0}
              >
                <h6 className='text-md text-primary-light mb-16'>
                  Role and Access Information
                </h6>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='mb-20'>
                      <label
                        htmlFor='user-role-display'
                        className='form-label fw-semibold text-primary-light text-sm mb-8'
                      >
                        User Role
                      </label>
                      <input
                        type='text'
                        className='form-control radius-8'
                        id='user-role-display'
                        defaultValue='Admin'
                        disabled
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='mb-20'>
                      <label
                        htmlFor='access-level-display'
                        className='form-label fw-semibold text-primary-light text-sm mb-8'
                      >
                        Access Level
                      </label>
                      <input
                        type='text'
                        className='form-control radius-8'
                        id='access-level-display'
                        defaultValue='Full Access'
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-24'>
                  <h6 className='text-md text-primary-light mb-16'>
                    Permissions
                  </h6>
                  <div className='py-12 px-16 border radius-8 mb-16'>
                    <div className='d-flex align-items-center gap-3 justify-content-between'>
                      <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                        Dashboard Access
                      </span>
                      <span className='badge bg-success-50 text-success-600'>
                        Enabled
                      </span>
                    </div>
                  </div>
                  <div className='py-12 px-16 border radius-8 mb-16'>
                    <div className='d-flex align-items-center gap-3 justify-content-between'>
                      <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                        User Management
                      </span>
                      <span className='badge bg-success-50 text-success-600'>
                        Enabled
                      </span>
                    </div>
                  </div>
                  <div className='py-12 px-16 border radius-8 mb-16'>
                    <div className='d-flex align-items-center gap-3 justify-content-between'>
                      <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                        Reports Access
                      </span>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium'>
                        Disabled
                      </span>
                    </div>
                  </div>
                  <div className='py-12 px-16 border radius-8 mb-16'>
                    <div className='d-flex align-items-center gap-3 justify-content-between'>
                      <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                        Settings Access
                      </span>
                      <span className='badge bg-light border border-secondary-300 text-dark fw-medium'>
                        Disabled
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='pills-security-password'
                role='tabpanel'
                aria-labelledby='pills-security-password-tab'
                tabIndex={0}
              >
                <div className='mb-24'>
                  <h6 className='text-md text-primary-light mb-8'>
                    Change Password
                  </h6>
                  <p className='text-secondary-light text-sm mb-0'>
                    Update your password to keep your account secure
                  </p>
                </div>
                <div className='border radius-16 p-24 mb-24 bg-base'>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div className='mb-20'>
                        <label
                          htmlFor='current-password'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Current Password <span className='text-danger-600'>*</span>
                        </label>
                        <div className='position-relative'>
                          <input
                            type={currentPasswordVisible ? "text" : "password"}
                            className='form-control radius-8'
                            id='current-password'
                            placeholder='Enter Current Password'
                          />
                          <span
                            className={`toggle-password ${
                              currentPasswordVisible ? "ri-eye-off-line" : "ri-eye-line"
                            } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                            onClick={toggleCurrentPasswordVisibility}
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='new-password'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          New Password <span className='text-danger-600'>*</span>
                        </label>
                        <div className='position-relative'>
                          <input
                            type={passwordVisible ? "text" : "password"}
                            className='form-control radius-8'
                            id='new-password'
                            placeholder='Enter New Password'
                          />
                          <span
                            className={`toggle-password ${
                              passwordVisible ? "ri-eye-off-line" : "ri-eye-line"
                            } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                            onClick={togglePasswordVisibility}
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='confirm-password'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Confirm Password <span className='text-danger-600'>*</span>
                        </label>
                        <div className='position-relative'>
                          <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            className='form-control radius-8'
                            id='confirm-password'
                            placeholder='Confirm New Password'
                          />
                          <span
                            className={`toggle-password ${
                              confirmPasswordVisible
                                ? "ri-eye-off-line"
                                : "ri-eye-line"
                            } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                            onClick={toggleConfirmPasswordVisibility}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-end gap-3 mt-16'>
                    <button
                      type='button'
                      className='border border-secondary-600 bg-hover-secondary-200 text-secondary-600 text-md px-40 py-11 radius-8'
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      className='btn btn-primary border border-primary-600 text-md px-40 py-12 radius-8'
                    >
                      Update Password
                    </button>
                  </div>
                </div>
                <div className='mb-24'>
                  <h6 className='text-md text-primary-light mb-8'>
                    Security Features
                  </h6>
                  <p className='text-secondary-light text-sm mb-0'>
                    Manage additional security options for your account
                  </p>
                </div>
                <div className='border radius-16 p-24 bg-base'>
                  <div className='form-switch switch-primary py-16 px-16 border radius-8 position-relative mb-0'>
                    <label
                      htmlFor='two-factor'
                      className='position-absolute w-100 h-100 start-0 top-0'
                    />
                    <div className='d-flex align-items-center gap-3 justify-content-between'>
                      <div className='d-flex flex-column'>
                        <span className='form-check-label line-height-1 fw-semibold text-primary-light mb-4'>
                          Two-Factor Authentication
                        </span>
                        <span className='text-secondary-light text-sm'>
                          Add an extra layer of security to your account
                        </span>
                      </div>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        role='switch'
                        id='two-factor'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='pills-notification'
                role='tabpanel'
                aria-labelledby='pills-notification-tab'
                tabIndex={0}
              >
                <h6 className='text-md text-primary-light mb-16'>
                  Notification Preferences
                </h6>
                <div className='form-switch switch-primary py-12 px-16 border radius-8 position-relative mb-16'>
                  <label
                    htmlFor='companzNew'
                    className='position-absolute w-100 h-100 start-0 top-0'
                  />
                  <div className='d-flex align-items-center gap-3 justify-content-between'>
                    <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                      Company News
                    </span>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      role='switch'
                      id='companzNew'
                    />
                  </div>
                </div>
                <div className='form-switch switch-primary py-12 px-16 border radius-8 position-relative mb-16'>
                  <label
                    htmlFor='pushNotifcation'
                    className='position-absolute w-100 h-100 start-0 top-0'
                  />
                  <div className='d-flex align-items-center gap-3 justify-content-between'>
                    <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                      Push Notification
                    </span>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      role='switch'
                      id='pushNotifcation'
                      defaultChecked=''
                    />
                  </div>
                </div>
                <div className='form-switch switch-primary py-12 px-16 border radius-8 position-relative mb-16'>
                  <label
                    htmlFor='weeklyLetters'
                    className='position-absolute w-100 h-100 start-0 top-0'
                  />
                  <div className='d-flex align-items-center gap-3 justify-content-between'>
                    <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                      Weekly News Letters
                    </span>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      role='switch'
                      id='weeklyLetters'
                      defaultChecked=''
                    />
                  </div>
                </div>
                <div className='form-switch switch-primary py-12 px-16 border radius-8 position-relative mb-16'>
                  <label
                    htmlFor='meetUp'
                    className='position-absolute w-100 h-100 start-0 top-0'
                  />
                  <div className='d-flex align-items-center gap-3 justify-content-between'>
                    <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                      Meetups Near you
                    </span>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      role='switch'
                      id='meetUp'
                    />
                  </div>
                </div>
                <div className='form-switch switch-primary py-12 px-16 border radius-8 position-relative mb-16'>
                  <label
                    htmlFor='orderNotification'
                    className='position-absolute w-100 h-100 start-0 top-0'
                  />
                  <div className='d-flex align-items-center gap-3 justify-content-between'>
                    <span className='form-check-label line-height-1 fw-medium text-secondary-light'>
                      Orders Notifications
                    </span>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      role='switch'
                      id='orderNotification'
                      defaultChecked=''
                    />
                  </div>
                </div>
                <div className='d-flex align-items-center justify-content-center gap-3'>
                  <button
                    type='button'
                    className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8'
                  >
                    Cancel
                  </button>
                  <button
                    type='button'
                    className='btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8'
                  >
                    Save Settings
                  </button>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='pills-edit-profile'
                role='tabpanel'
                aria-labelledby='pills-edit-profile-tab'
                tabIndex={0}
              >
                <h6 className='text-md text-primary-light mb-16'>
                  Profile Image
                </h6>
                <div className='mb-24 mt-16'>
                  <div className='avatar-upload'>
                    <div className='avatar-edit position-absolute bottom-0 end-0 me-24 mt-16 z-1 cursor-pointer'>
                      <input
                        type='file'
                        id='imageUpload'
                        accept='.png, .jpg, .jpeg'
                        hidden
                        onChange={readURL}
                      />
                      <label
                        htmlFor='imageUpload'
                        className='w-32-px h-32-px d-flex justify-content-center align-items-center bg-primary-50 text-primary-600 border border-primary-600 bg-hover-primary-100 text-lg rounded-circle'
                      >
                        <Icon
                          icon='solar:camera-outline'
                          className='icon'
                        ></Icon>
                      </label>
                    </div>
                    <div className='avatar-preview'>
                      <div
                        id='imagePreview'
                        style={{
                          backgroundImage: `url(${imagePreview})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <form action='#'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='name'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Full Name
                          <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='name'
                          placeholder='Enter Full Name'
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='email'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Email <span className='text-danger-600'>*</span>
                        </label>
                        <input
                          type='email'
                          className='form-control radius-8'
                          id='email'
                          placeholder='Enter email address'
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='number'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Phone
                        </label>
                        <input
                          type='tel'
                          className='form-control radius-8'
                          id='number'
                          placeholder='Enter phone number'
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='depart'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Department
                          <span className='text-danger-600'>*</span>{" "}
                        </label>
                        <select
                          className='form-control radius-8 form-select'
                          id='depart'
                          defaultValue='Select Department'
                        >
                          <option value='Select Department' disabled>
                            Select Department
                          </option>
                          <option value='Design'>Design</option>
                          <option value='Development'>Development</option>
                          <option value='Marketing'>Marketing</option>
                          <option value='Sales'>Sales</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='desig'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Designation
                          <span className='text-danger-600'>*</span>{" "}
                        </label>
                        <select
                          className='form-control radius-8 form-select'
                          id='desig'
                          defaultValue='Select Designation'
                        >
                          <option value='Select Designation' disabled>
                            Select Designation
                          </option>
                          <option value='UI UX Designer'>UI UX Designer</option>
                          <option value='Frontend Developer'>
                            Frontend Developer
                          </option>
                          <option value='Backend Developer'>
                            Backend Developer
                          </option>
                          <option value='Product Manager'>
                            Product Manager
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='gender'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Gender
                        </label>
                        <select
                          className='form-control radius-8 form-select'
                          id='gender'
                          defaultValue='Select Gender'
                        >
                          <option value='Select Gender' disabled>
                            Select Gender
                          </option>
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                          <option value='Other'>Other</option>
                          <option value='Prefer not to say'>
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='dob'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Date of Birth
                        </label>
                        <input
                          type='date'
                          className='form-control radius-8'
                          id='dob'
                          placeholder='Select Date of Birth'
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='country'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Country
                        </label>
                        <select
                          className='form-control radius-8 form-select'
                          id='country'
                          defaultValue='Select Country'
                        >
                          <option value='Select Country' disabled>
                            Select Country
                          </option>
                          <option value='United States'>United States</option>
                          <option value='United Kingdom'>United Kingdom</option>
                          <option value='Canada'>Canada</option>
                          <option value='Australia'>Australia</option>
                          <option value='India'>India</option>
                          <option value='Bangladesh'>Bangladesh</option>
                          <option value='Pakistan'>Pakistan</option>
                          <option value='UAE'>UAE</option>
                          <option value='Saudi Arabia'>Saudi Arabia</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='state'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          State
                        </label>
                        <select
                          className='form-control radius-8 form-select'
                          id='state'
                          defaultValue='Select State'
                        >
                          <option value='Select State' disabled>
                            Select State
                          </option>
                          <option value='California'>California</option>
                          <option value='New York'>New York</option>
                          <option value='Texas'>Texas</option>
                          <option value='Florida'>Florida</option>
                          <option value='Illinois'>Illinois</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='city'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          City
                        </label>
                        <select
                          className='form-control radius-8 form-select'
                          id='city'
                          defaultValue='Select City'
                        >
                          <option value='Select City' disabled>
                            Select City
                          </option>
                          <option value='New York'>New York</option>
                          <option value='Los Angeles'>Los Angeles</option>
                          <option value='Chicago'>Chicago</option>
                          <option value='Houston'>Houston</option>
                          <option value='Phoenix'>Phoenix</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='gov-id-type'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Government ID Type
                        </label>
                        <select
                          className='form-control radius-8 form-select'
                          id='gov-id-type'
                          defaultValue='Select ID Type'
                        >
                          <option value='Select ID Type' disabled>
                            Select ID Type
                          </option>
                          <option value='Passport'>Passport</option>
                          <option value='National ID'>National ID</option>
                          <option value='Driving License'>Driving License</option>
                          <option value='Social Security Number'>
                            Social Security Number
                          </option>
                          <option value='Aadhaar'>Aadhaar</option>
                          <option value='Other'>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='gov-id-number'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Government ID Number
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='gov-id-number'
                          placeholder='Enter ID Number'
                        />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='mb-20'>
                        <label
                          htmlFor='desc'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Profile Highlights
                        </label>
                        <textarea
                          name='#0'
                          className='form-control radius-8'
                          id='desc'
                          placeholder='Write profile highlights and description...'
                          rows='4'
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-center gap-3'>
                    <button
                      type='button'
                      className='border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8'
                    >
                      Cancel
                    </button>
                    <button
                      type='button'
                      className='btn btn-primary border border-primary-600 text-md px-56 py-12 radius-8'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
              <div
                className='tab-pane fade'
                id='pills-system-info'
                role='tabpanel'
                aria-labelledby='pills-system-info-tab'
                tabIndex={0}
              >
                <div className='mb-24'>
                  <h6 className='text-md text-primary-light mb-8'>
                    Current Session Information
                  </h6>
                  <p className='text-secondary-light text-sm mb-0'>
                    Details about your current active session
                  </p>
                </div>
                <div className='border radius-16 p-24 mb-24 bg-base'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='system-version'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          System Version
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='system-version'
                          defaultValue='v2.1.0'
                          disabled
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='timezone'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Timezone
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='timezone'
                          defaultValue='UTC+5:30 (IST)'
                          disabled
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='ip-address'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          IP Address
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='ip-address'
                          defaultValue='192.168.1.105'
                          disabled
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='browser'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Browser
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='browser'
                          defaultValue='Chrome 120.0.6099.129'
                          disabled
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='device'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Device Type
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='device'
                          defaultValue='Desktop (Windows 11)'
                          disabled
                        />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='mb-20'>
                        <label
                          htmlFor='session-start'
                          className='form-label fw-semibold text-primary-light text-sm mb-8'
                        >
                          Session Started
                        </label>
                        <input
                          type='text'
                          className='form-control radius-8'
                          id='session-start'
                          defaultValue='2024-01-15 10:30 AM'
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mb-24'>
                  <h6 className='text-md text-primary-light mb-8'>
                    Recent Login History
                  </h6>
                  <p className='text-secondary-light text-sm mb-0'>
                    Last 5 login attempts and sessions
                  </p>
                </div>
                <div className='border radius-16 overflow-hidden bg-base'>
                  <div className='table-responsive'>
                    <table className='table table-hover mb-0'>
                      <thead className='bg-base'>
                        <tr>
                          <th className='fw-semibold text-primary-light text-sm py-16 px-24 border-bottom'>
                            Date & Time
                          </th>
                          <th className='fw-semibold text-primary-light text-sm py-16 px-24 border-bottom'>
                            IP Address
                          </th>
                          <th className='fw-semibold text-primary-light text-sm py-16 px-24 border-bottom'>
                            Browser
                          </th>
                          <th className='fw-semibold text-primary-light text-sm py-16 px-24 border-bottom'>
                            Device
                          </th>
                          <th className='fw-semibold text-primary-light text-sm py-16 px-24 border-bottom'>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            <div className='fw-medium text-primary-light mb-4'>
                              Jan 15, 2024
                            </div>
                            <div className='text-secondary-light text-xs'>
                              10:30 AM
                            </div>
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            192.168.1.105
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Chrome 120.0
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Desktop
                          </td>
                          <td className='py-16 px-24 border-bottom'>
                            <span className='badge bg-success-50 text-success-600'>
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            <div className='fw-medium text-primary-light mb-4'>
                              Jan 14, 2024
                            </div>
                            <div className='text-secondary-light text-xs'>
                              08:45 PM
                            </div>
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            192.168.1.105
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Chrome 120.0
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Desktop
                          </td>
                          <td className='py-16 px-24 border-bottom'>
                            <span className='badge bg-light border border-secondary-300 text-dark fw-medium'>
                              Logged Out
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            <div className='fw-medium text-primary-light mb-4'>
                              Jan 14, 2024
                            </div>
                            <div className='text-secondary-light text-xs'>
                              02:15 PM
                            </div>
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            192.168.1.102
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Firefox 121.0
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Desktop
                          </td>
                          <td className='py-16 px-24 border-bottom'>
                            <span className='badge bg-light border border-secondary-300 text-dark fw-medium'>
                              Logged Out
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            <div className='fw-medium text-primary-light mb-4'>
                              Jan 13, 2024
                            </div>
                            <div className='text-secondary-light text-xs'>
                              11:20 AM
                            </div>
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            192.168.1.105
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Chrome 119.0
                          </td>
                          <td className='py-16 px-24 border-bottom text-secondary-light text-sm'>
                            Mobile
                          </td>
                          <td className='py-16 px-24 border-bottom'>
                            <span className='badge bg-light border border-secondary-300 text-dark fw-medium'>
                              Logged Out
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className='py-16 px-24 text-secondary-light text-sm'>
                            <div className='fw-medium text-primary-light mb-4'>
                              Jan 12, 2024
                            </div>
                            <div className='text-secondary-light text-xs'>
                              09:00 AM
                            </div>
                          </td>
                          <td className='py-16 px-24 text-secondary-light text-sm'>
                            192.168.1.105
                          </td>
                          <td className='py-16 px-24 text-secondary-light text-sm'>
                            Chrome 119.0
                          </td>
                          <td className='py-16 px-24 text-secondary-light text-sm'>
                            Desktop
                          </td>
                          <td className='py-16 px-24'>
                            <span className='badge bg-light border border-secondary-300 text-dark fw-medium'>
                              Logged Out
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ViewProfileLayer;

