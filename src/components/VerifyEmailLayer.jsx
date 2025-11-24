import React from 'react'
import { api } from "@/utils/api";
import Link from 'next/link';

export default function VerifyEmailLayer({token, id}) {
  console.log("token:", token);
  console.log("id:", id);
  const handleVerifyEmail = async() => {
    // console.log("Verify Email clicked");
    // const formData = { token, id };
    // try {
    //   const res = await api.post("auth/verifyEmail", formData,{},{showLoader:true ,showToast:true});
    //   console.log("res",res);
    // } catch (err) {
    //   console.log("err",err);
    // }
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
            <h4 className='mb-12'>Verify Your Email</h4>
            <p className='mb-32 text-secondary-light text-lg'>
              IN progress
            </p>
          </div>
        </div>
      </div>
    </section>
   
  )
}   