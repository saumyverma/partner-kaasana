import React from 'react'
import styles from '@/components/CommonModel.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import { api } from "@/utils/api";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function EditPersonalInfoModal({ showEditPersonalInfoModal, setShowEditPersonalInfoModal }) {
   
  const [coverImagePreview, setCoverImagePreview] = useState(
    "/assets/img/coverimages.jpg"
  );
  
  const [profileImagePreview, setProfileImagePreview] = useState(
    "assets/img/user.png"
  );
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();  
    const isValidFormEditPersonalInfo = watch("name") && watch("email") && watch("phone") && watch("designation") && watch("reportingManager") && watch("branch") && watch("assignedRoles");
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    console.log("isAuthenticated",isAuthenticated);
    console.log("user",user);
    const userId = user?.id;
    console.log("userId",userId);
  
    const handleEditPersonalInfo = async(data) => {
      console.log("Edit Personal Info clicked", data);
      // const formData = { name:data.name, email:data.email, phone:data.phone, designation:data.designation, reportingManager:data.reportingManager, branch:data.branch, assignedRoles:data.assignedRoles };
      // try {
      //   const res = await api.post("users/updateUser", formData,{},{showLoader:true ,showToast:true});
      //   console.log("res",res);
      // } catch (err) {
      //   console.log("err",err);
      // }
    }
      


    if (!showEditPersonalInfoModal) return null;

    const handleClose = () => {
        setShowEditPersonalInfoModal(false);
    };
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
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
        <>
           <>
            <div
                className={styles.modalOverlay}
                onClick={handleBackdropClick}
            >
                {/* Modal Content */}
                <div
                    className={styles.modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.modalHeader}>
                        <h1 className="modal-title fs-5">
                            Edit Personal Info
                        </h1>
                        <button
                            type='button'
                            className={styles.closeButton}
                            onClick={handleClose}
                            aria-label='Close'
                        >
                            <Icon icon='mdi:close' className={`text-secondary-light ${styles.closeIcon}`} />
                        </button>
                    </div>
                    <div className={styles.modalBody}>
                        <form action='#' onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                         

                        {/* <form onSubmit={handleSubmit(handleEditPersonalInfo)}> */}
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
                      {...register("name", { required: "Name is required" })}
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
                      {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
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
                      {...register("phone", { required: "Phone is required" })}
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
                      {...register("designation", { required: "Designation is required" })}
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
                      {...register("reportingManager", { required: "Reporting Manager is required" })}
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
                      {...register("branch", { required: "Branch is required" })}
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
                      {...register("assignedRoles", { required: "Assigned Roles is required" })}
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
                    onClick={handleSubmit(handleEditPersonalInfo)}
                    // disabled={!isValidFormEditPersonalInfo}
                    >
                    Save
                  </button>
                </div>
              </form>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>
        </>
    );
}