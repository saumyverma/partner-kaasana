"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import MasterLayout from "@/masterLayout/MasterLayout";
import React from "react";

const Page = () => {
  const [imagePreview, setImagePreview] = useState(
    "assets/images/user-grid/user-grid-img13.png"
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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

  const breadcrumbs = [{ label: "Company Profile", href: "#" }];
  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb title="Company Profile" breadcrumbs={breadcrumbs} />
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="card h-100">
              <div className="card-body p-24">
                <ul
                  className="nav border-gradient-tab nav-pills mb-20 d-inline-flex"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center px-24 active"
                      id="pills-edit-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-edit-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-edit-profile"
                      aria-selected="true"
                    >
                      Company Profile
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link d-flex align-items-center px-24"
                      id="pills-change-passwork-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-change-passwork"
                      type="button"
                      role="tab"
                      aria-controls="pills-change-passwork"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Branches
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card h-100">
              <div className="card-body p-24">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active d-flex flex-column"
                    id="pills-edit-profile"
                    role="tabpanel"
                    aria-labelledby="pills-edit-profile-tab"
                    tabIndex={0}
                  >
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                      <h6 className="text-md text-primary-light mb-16">
                        Agency Code
                      </h6>
                      {/* Upload Image Start */}
                      <button
                        type="button"
                        className="btn rounded-pill btn-outline-warning-600 radius-8 px-20 py-11"
                      >
                        Edit
                      </button>
                      {/* Upload Image End */}
                    </div>

                    <div className="row mt-3 border-bottom ">
                      <div className="col-sm-6">
                        <h6 className="mb-0">Company Details</h6>
                        <p className="text-primary-light text-semibold fs-4 mb-0">
                          The Article Guru
                        </p>
                        <p>
                          Plot 12, near Rajeshwari lawn, janki vihar colony,
                          Baghlan, Baglan, Afghanistan - 226021
                        </p>
                      </div>
                      <div className="col-sm-6 text-end">
                        <p
                          style={{
                            color: "#4361ee",
                            backgroundColor: "#80808033",
                          }}
                          className="mb-0 d-inline px-12 py-4 fw-bold rounded-4"
                        >
                          Headquater
                        </p>
                        <p>Request created - 01 Nov 2025</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <p className="text-primary-light text-semibold fs-5 mb-0">
                        Additional Information
                      </p>
                      <div className="col-sm-12 col-md-4">
                        <div className="mb-20">
                          <label
                            htmlFor="number"
                            className="form-label fw-semibold text-primary-light text-sm mb-0 "
                          >
                            company Type
                          </label>
                          <p>Travel Agent</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <div className="mb-20">
                          <label
                            htmlFor="depart"
                            className="form-label fw-semibold text-primary-light text-sm mb-0"
                          >
                            Country
                            <span className="text-danger-600">*</span>{" "}
                          </label>
                          <p>Afganistan</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <div className="mb-20">
                          <label
                            htmlFor="desig"
                            className="form-label fw-semibold text-primary-light text-sm mb-0"
                          >
                            State
                            <span className="text-danger-600">*</span>{" "}
                          </label>
                          <p>Baglan</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <div className="mb-20">
                          <label
                            htmlFor="Language"
                            className="form-label fw-semibold text-primary-light text-sm mb-0 "
                          >
                            City
                            <span className="text-danger-600">*</span>{" "}
                          </label>
                          <p>Baghlan</p>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <div className="mb-20">
                          <label
                            htmlFor="desc"
                            className="form-label fw-semibold text-primary-light text-sm mb-0"
                          >
                            Tax/ trade licence number
                          </label>
                          <p>asdfghklwertyuiop</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-change-passwork"
                    role="tabpanel"
                    aria-labelledby="pills-change-passwork-tab"
                    tabIndex="0"
                  >
                    <div className="mb-20">
                      <label
                        htmlFor="your-password"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        New Password <span className="text-danger-600">*</span>
                      </label>
                      <div className="position-relative">
                        <input
                          type={passwordVisible ? "text" : "password"}
                          className="form-control radius-8"
                          id="your-password"
                          placeholder="Enter New Password*"
                        />
                        <span
                          className={`toggle-password ${
                            passwordVisible ? "ri-eye-off-line" : "ri-eye-line"
                          } cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                          onClick={togglePasswordVisibility}
                        ></span>
                      </div>
                    </div>

                    <div className="mb-20">
                      <label
                        htmlFor="confirm-password"
                        className="form-label fw-semibold text-primary-light text-sm mb-8"
                      >
                        Confirm Password{" "}
                        <span className="text-danger-600">*</span>
                      </label>
                      <div className="position-relative">
                        <input
                          type={confirmPasswordVisible ? "text" : "password"}
                          className="form-control radius-8"
                          id="confirm-password"
                          placeholder="Confirm Password*"
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
              </div>
            </div>
          </div>
        </div>
      </MasterLayout>
    </ProtectedRoute>
  );
};

export default Page;
