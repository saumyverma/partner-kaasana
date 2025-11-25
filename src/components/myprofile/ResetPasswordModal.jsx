import React from 'react'
import styles from '@/components/CommonModel.module.css';
import { Icon } from "@iconify/react/dist/iconify.js";
import { api } from "@/utils/api";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ResetPasswordModal({ showResetPasswordModal, setShowResetPasswordModal }) {
   
    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [modalCurrentPasswordVisible, setModalCurrentPasswordVisible] = useState(false);
    const [modalNewPasswordVisible, setModalNewPasswordVisible] = useState(false);
    const [modalConfirmPasswordVisible, setModalConfirmPasswordVisible] = useState(false);
    const toggleModalCurrentPasswordVisibility = () => {
        setModalCurrentPasswordVisible(!modalCurrentPasswordVisible);
      };
    
      const toggleModalNewPasswordVisibility = () => {
        setModalNewPasswordVisible(!modalNewPasswordVisible);
      };
    
      const toggleModalConfirmPasswordVisibility = () => {
        setModalConfirmPasswordVisible(!modalConfirmPasswordVisible);
      };


        if (!showResetPasswordModal) return null;

    const handleClose = () => {
        setShowResetPasswordModal(false);
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
                    className={styles.resetPasswordModalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.modalHeader}>
                        <h1 className="modal-title fs-5">
                        Reset Password
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
        </>
        </>
    );
}