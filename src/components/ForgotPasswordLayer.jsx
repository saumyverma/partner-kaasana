"use client"
import React from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function ForgotPasswordPage() {
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
          <h4 className='mb-12'>Forget Password</h4>
          <p className='mb-32 text-secondary-light text-lg'>
            Access your travel business dashboard
          </p>
        </div>
        {/* <form action='#'> */}
          <div className='icon-field mb-16'>
            <span className='icon top-50 translate-middle-y'>
              <Icon icon='mage:email' />
            </span>
            <input
              type='email'
              className='form-control h-56-px bg-neutral-50 radius-12'
               placeholder='Work Email'
            />
          </div>
          {/* <div className='position-relative mb-20'>
            <div className='icon-field'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='solar:lock-password-outline' />
              </span>
              <input
                type='password'
                className='form-control h-56-px bg-neutral-50 radius-12'
                id='your-password'
                placeholder='Password'
               
              />
            </div>
            <span
              className='toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light'
              data-toggle='#your-password'
            />
          </div> */}
         
          <button
            type='submit'
            className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
           
          >
            {" "}
            Sign In
          </button>
         
          <div className='mt-32 text-center text-sm'>
            <p className='mb-0'>
              Don’t have an account?{" "}
              <Link href='/sign-up' className='text-primary-600 fw-semibold'>
                Sign Up
              </Link>
            </p>
          </div>
        {/* </form> */}
      </div>
    </div>
  </section>
  )
}