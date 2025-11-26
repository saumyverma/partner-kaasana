"use client"
import React, { useState, useEffect } from 'react'
import { api } from "@/utils/api";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";

export default function VerifyOtp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password") || "";
  
  // Password validation functions
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  const isPasswordValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            setCanResend(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Format timer to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerifyOtp = async(data) => {
    const formData = { password: data.password, otp: data.otp, username: localStorage.getItem("username"),tokenCaptcha:"sdfsdflnsldkfnlsnk" };
    console.log("formData", formData);
    try {
      const res = await api.post("auth/updatePassword", formData, {}, { showLoader: true, showToast: true });
      if(res.status === "success") {
        localStorage.removeItem("username");
        router.push('/sign-in');
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  const handleResendOtp = async() => {
    try {
      const username = localStorage.getItem("username");
      const formData = { username, tokenCaptcha: "sdfsdflnsldkfnlsnk" };
      const res = await api.post("auth/resetPassword", formData, {}, { showLoader: true, showToast: true });
      if(res.status === "success") {
        setTimer(300); // Reset timer to 5 minutes
        setCanResend(false);
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <section className='auth d-flex flex-wrap' style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)', minHeight: '100vh' }}>
      {/* Header */}
      <div className='w-100 position-absolute top-0 start-0 p-24 d-flex justify-content-between align-items-center'>
        <Link href='/' className='text-white fw-bold fs-5 text-decoration-none'>
          Kaasana
        </Link>
        <Link 
          href='/sign-up' 
          className='btn text-white fw-semibold px-24 py-12 radius-8'
          style={{ backgroundColor: '#8b5cf6', border: 'none' }}
        >
          Sign Up <Icon icon='mdi:arrow-right' className='ms-2' />
        </Link>
      </div>

      {/* Main Content */}
      <div className='w-100 d-flex align-items-center justify-content-center py-32 px-24'>
        <div className='max-w-464-px w-100'>
          <div className='card border-0 shadow-lg radius-12 p-40'>
            {/* Title */}
            <h2 className='fs-4 fw-bold text-primary-light mb-8'>
              Verify OTP
            </h2>
            
            {/* Instructions */}
            <p className='text-secondary-light text-lg mb-32'>
              Enter the OTP sent to your email
            </p>

            <form onSubmit={handleSubmit(handleVerifyOtp)}>
              {/* Enter OTP Field */}
              <div className='mb-24'>
                <div className='d-flex justify-content-between align-items-center mb-8'>
                  <label className='form-label fw-semibold text-primary-light text-sm mb-0'>
                    Enter OTP
                  </label>
                  {canResend ? (
                    <button
                      type='button'
                      className='btn btn-link p-0 text-primary-600 fw-medium text-sm text-decoration-none'
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                  ) : (
                    <span className='text-secondary-light text-sm'>
                      Resend OTP in {formatTime(timer)}
                    </span>
                  )}
                </div>
                <input
                  type='text'
                  className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.otp ? 'border-danger' : ''}`}
                  placeholder='Enter OTP'
                  maxLength={4}
                  {...register("otp", { 
                    required: "OTP is required",
                    minLength: {
                      value: 4,
                      message: "OTP must be 4 digits"
                    },
                    pattern: {
                      value: /^[0-9]{4}$/,
                      message: "OTP must be 4 digits"
                    }
                  })}
                />
                {errors.otp && (
                  <span className='mt-4 text-sm text-danger d-block'>
                    {errors.otp.message}
                  </span>
                )}
              </div>

              {/* New Password Field */}
              <div className='mb-32'>
                <label className='form-label fw-semibold text-primary-light text-sm mb-8'>
                  New Password
                </label>
                <div className='position-relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.password ? 'border-danger' : ''}`}
                    placeholder='Enter New Password'
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
                {password && !isPasswordValid && (
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
              </div>

              {/* Verify & Set Password Button */}
              <button
                type='submit'
                 className='btn btn-primary w-100 text-white fw-semibold text-md px-24 py-16 radius-12'
              >
                Verify & Set Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}       