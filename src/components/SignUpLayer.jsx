"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";
import TermsAndConditionsModal from "./modal/TermsAndConditionsModal";

const SignUpLayer = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const dispatch = useDispatch();
   const { isAuthenticated, user } = useSelector((state) => state.auth);
   const [showPassword, setShowPassword] = useState(false);
   const password = watch("password") || "";
   const [showTermsAndConditionsModal, setShowTermsAndConditionsModal] = useState(false);
   // Password validation functions
   const hasMinLength = password.length >= 8;
   const hasUpperCase = /[A-Z]/.test(password);
   const hasLowerCase = /[a-z]/.test(password);
   const hasNumber = /[0-9]/.test(password);
   const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
   const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    const handleSignUp = (data) => {
      console.log("SignUp clicked");
      console.log("data",data);
  };
  
  return (

    <>
   {showTermsAndConditionsModal && <TermsAndConditionsModal showTermsAndConditionsModal={showTermsAndConditionsModal} setShowTermsAndConditionsModal={ ()=>setShowTermsAndConditionsModal(false)} />}
    <section className='auth bg-base d-flex flex-wrap'>
      <div className='auth-left d-lg-block d-none'>
        <div className='d-flex align-items-center flex-column h-100 justify-content-center'>
          <img src='assets/img/upper-bg.png' alt='' />
        </div>
      </div>
      <div className='auth-right py-32 px-24 d-flex flex-column justify-content-center'>
        <div className='max-w-464-px mx-auto w-100'>
          <div>
            <Link href='/' className='mb-40 max-w-290-px'>
              <img src='assets/img/KS-logo.svg' alt='' />
            </Link>



            <h4 className='mb-12'>Create Your Account</h4>
            <p className='mb-32 text-secondary-light text-lg'>
              Sign up for FREE and start using Kaasana in seconds !
            </p>
          </div>
          {/* <form action='#'> */}
            <div className='mb-16'>
              <div className='icon-field'>
                <span className='icon top-50 translate-middle-y'>
                  <Icon icon='f7:person' />
                </span>
                <input
                  type='text'
                  className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.firstName ? 'border-danger' : ''}`}
                  placeholder='First Name'
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters"
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "First name should only contain letters"
                    }
                  })}
                />
              </div>
              {errors.firstName && (
                <span className='mt-4 text-sm text-danger d-block'>
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className='mb-16'>
              <div className='icon-field'>
                <span className='icon top-50 translate-middle-y'>
                  <Icon icon='f7:person' />
                </span>
                <input
                  type='text'
                  className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.lastName ? 'border-danger' : ''}`}
                  placeholder='Last Name'
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters"
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Last name should only contain letters"
                    }
                  })}
                />
              </div>
              {errors.lastName && (
                <span className='mt-4 text-sm text-danger d-block'>
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div className='mb-16'>
              <div className='icon-field'>
                <span className='icon top-50 translate-middle-y'>
                  <Icon icon='mage:email' />
                </span>
                <input
                  type='email'
                  className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.email ? 'border-danger' : ''}`}
                  placeholder='Work Email'
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address"
                    }
                  })}
                />
              </div>
              {errors.email && (
                <span className='mt-4 text-sm text-danger d-block'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='mb-20'>
              <div className='position-relative '>
                <div className='icon-field'>
                  <span className='icon top-50 translate-middle-y'>
                    <Icon icon='solar:lock-password-outline' />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.password ? 'border-danger' : ''}`}
                    id='your-password'
                    placeholder='Password'
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                      },
                      validate: {
                        hasUpperCase: (value) => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                        hasLowerCase: (value) => /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
                        hasNumber: (value) => /[0-9]/.test(value) || "Password must contain at least one number",
                        hasSpecialChar: (value) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value) || "Password must contain at least one special character"
                      }
                    })}
                    />
                </div>
                <span
                  className='cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light'
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                >
                  <Icon 
                    icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} 
                    className='text-secondary-light'
                    style={{ fontSize: '20px' }}
                  />
                </span>
              </div>
              {errors.password && (
                <span className='mt-8 text-sm text-danger d-block'>
                  {errors.password.message}
                </span>
              )}
              {password && (
                <div className='mt-12'>
                  <p className='text-sm text-secondary-light mb-8 fw-semibold'>Password Requirements:</p>
                  <div className='d-flex flex-column gap-2'>
                    <div className={`d-flex align-items-center gap-2 text-sm ${hasMinLength ? 'text-success' : 'text-secondary-light'}`}>
                      <Icon 
                        icon={hasMinLength ? 'mdi:check-circle' : 'mdi:circle-outline'} 
                        style={{ fontSize: '16px' }}
                      />
                      <span>At least 8 characters</span>
                    </div>
                    <div className={`d-flex align-items-center gap-2 text-sm ${hasUpperCase ? 'text-success' : 'text-secondary-light'}`}>
                      <Icon 
                        icon={hasUpperCase ? 'mdi:check-circle' : 'mdi:circle-outline'} 
                        style={{ fontSize: '16px' }}
                      />
                      <span>One uppercase letter</span>
                    </div>
                    <div className={`d-flex align-items-center gap-2 text-sm ${hasLowerCase ? 'text-success' : 'text-secondary-light'}`}>
                      <Icon 
                        icon={hasLowerCase ? 'mdi:check-circle' : 'mdi:circle-outline'} 
                        style={{ fontSize: '16px' }}
                      />
                      <span>One lowercase letter</span>
                    </div>
                    <div className={`d-flex align-items-center gap-2 text-sm ${hasNumber ? 'text-success' : 'text-secondary-light'}`}>
                      <Icon 
                        icon={hasNumber ? 'mdi:check-circle' : 'mdi:circle-outline'} 
                        style={{ fontSize: '16px' }}
                      />
                      <span>One number</span>
                    </div>
                    <div className={`d-flex align-items-center gap-2 text-sm ${hasSpecialChar ? 'text-success' : 'text-secondary-light'}`}>
                      <Icon 
                        icon={hasSpecialChar ? 'mdi:check-circle' : 'mdi:circle-outline'} 
                        style={{ fontSize: '16px' }}
                      />
                      <span>One special character</span>
                    </div>
                  </div>
                </div>
              )}
              {!password && (
                <span className='mt-12 text-sm text-secondary-light d-block'>
                  Your password must be at least 8 characters long
                </span>
              )}
            </div>
            <div className=''>
              <div className='d-flex justify-content-between gap-2'>
                <div className='form-check style-check d-flex align-items-start'>
                  <input
                    className='form-check-input border border-neutral-300 mt-4'
                    type='checkbox'
                    defaultValue=''
                    id='condition'
                    {...register("termsAndConditions")}
                  />
                  <label
                    className='form-check-label text-sm'
                    htmlFor='condition'
                  >I agree to <Link
                  href='#'
                  className='text-primary-600 fw-medium'
                  onClick={() => setShowTermsAndConditionsModal(true)}
                >
                  Terms and Conditions
                </Link>
                  </label>
                </div>
                
              </div>
             
            </div>
            <button
              type='submit'
              className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
              onClick={handleSubmit(handleSignUp)}
            >
              {" "}
              Sign Up
            </button>
            {/*<div className='mt-32 center-border-horizontal text-center'>
              <span className='bg-base z-1 px-4'>Or sign up with</span>
            </div>
            <div className='mt-32 d-flex align-items-center gap-3'>
              <button
                type='button'
                className='fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50'
              >
                <Icon
                  icon='ic:baseline-facebook'
                  className='text-primary-600 text-xl line-height-1'
                />
                Google
              </button>
              <button
                type='button'
                className='fw-semibold text-primary-light py-16 px-24 w-50 border radius-12 text-md d-flex align-items-center justify-content-center gap-12 line-height-1 bg-hover-primary-50'
              >
                <Icon
                  icon='logos:google-icon'
                  className='text-primary-600 text-xl line-height-1'
                />
                Google
              </button>
            </div>*/}
            <div className='mt-32 text-center text-sm'>
              <p className='mb-0'>
                Already have an account?{" "}
                <Link href='/sign-in' className='text-primary-600 fw-semibold'>
                  Sign In
                </Link>
              </p>

              {isAuthenticated  &&
                 <>
            <p>Welcome, {user.name}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
             </>
              }
            </div>
          {/* </form> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default SignUpLayer;
