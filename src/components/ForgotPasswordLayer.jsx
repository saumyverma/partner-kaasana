"use client"
import React from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { api } from "@/utils/api";

export default function ForgotPasswordPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();  
  const isValidForm = watch("email");
  const handleForgotPassword = async(data) => {
    console.log("Forgot Password clicked", data);
    const formData = { email:data.email };
    try {
      const tokenCaptcha="sdfsdflnsldkfnlsnk";
      const formData = { username:data.email, tokenCaptcha };
      const res = await api.post("auth/resetPassword", formData,{},{showLoader:true ,showToast:true});
      console.log("res",res);
    } catch (err) {
      console.log("err",err);
    }
  } 
  return (
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
          <h4 className='mb-12'>Forgot Your Password?</h4>
          <p className='mb-32 text-secondary-light text-lg'>
          Enter your email to receive a password reset link
          </p>
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
                {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              />
            </div>
            {errors.email && (
              <span className='mt-4 text-sm text-danger d-block'>
                {errors.email.message}
              </span>
            )}
          </div>
         
           <button
            type='submit'
            className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-10'
            onClick={handleSubmit(handleForgotPassword)}  
          >
            {" "}
            Send Reset Link
          </button>
         
          <div className='mt-32 text-center text-sm'>
            <p className='mb-0'>
              Don’t have an account?{" "}
              <Link href='/sign-up' className='text-primary-600 fw-semibold'>
                Sign Up
              </Link>
            </p>
          </div>
      </div>
    </div>
  </section>
  )
}