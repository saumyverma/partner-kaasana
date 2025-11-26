"use client"
import React, { useEffect, useState } from 'react'
import { api } from "@/utils/api";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from "@iconify/react/dist/iconify.js";

export default function VerifyEmailLayer({token, id}) {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  

  const handleVerifyEmail = async() => {
    const formData = { username:id, token:token };
    try {
      const res = await api.post("auth/updateAccountVerified", formData,{},{showLoader:true ,showToast:true});
      if(res.status === "success") {
        setIsVerified(true);
      }
    } catch (err) {
      console.log("err",err);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    handleVerifyEmail();
  }, []);

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <section className='auth d-flex flex-wrap' style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)', minHeight: '100vh' }}>
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
      
      <div className='w-100 d-flex align-items-center justify-content-center py-32 px-24'>
        <div className='max-w-464-px w-100'>
          {isLoading ? (
            <div className='card border-0 shadow-lg radius-12 p-40 text-center'>
              <div className='d-flex justify-content-center mb-24'>
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </div>
              <h4 className='mb-8'>Verifying Your Email</h4>
              <p className='text-secondary-light mb-0'>Please wait while we verify your email address...</p>
            </div>
          ) : isVerified ? (
            <div className='card border-0 shadow-lg radius-12 p-40 text-center'>
              {/* Success Icon */}
              <div className='d-flex justify-content-center mb-24'>
                <div 
                  className='rounded-circle d-flex align-items-center justify-content-center'
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#10b981',
                  }}
                >
                  <Icon 
                    icon='mdi:check' 
                    style={{ 
                      fontSize: '48px', 
                      color: '#fff' 
                    }} 
                  />
                </div>
              </div>
              
              {/* Heading */}
              <h2 className='fs-4 fw-bold text-primary-light mb-16'>
                Account Verified!
              </h2>
              
              {/* Description */}
              <p className='text-secondary-light text-lg mb-32'>
                Email verified successfully! You can now log in to your account.
              </p>
              
              {/* Sign In Button */}
              <button
                type='button'
                className='btn w-100 text-white fw-semibold text-md px-24 py-16 radius-12 d-flex align-items-center justify-content-center gap-2'
                style={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #10b981 100%)',
                  border: 'none'
                }}
                onClick={handleSignIn}
              >
                Sign In to Continue
                <Icon icon='mdi:arrow-right' style={{ fontSize: '20px' }} />
              </button>
            </div>
          ) : (
            <div className='card border-0 shadow-lg radius-12 p-40 text-center'>
              {/* Error Icon */}
              <div className='d-flex justify-content-center mb-24'>
                <div 
                  className='rounded-circle d-flex align-items-center justify-content-center'
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#ef4444',
                  }}
                >
                  <Icon 
                    icon='mdi:close' 
                    style={{ 
                      fontSize: '48px', 
                      color: '#fff' 
                    }} 
                  />
                </div>
              </div>
              
              {/* Heading */}
              <h2 className='fs-4 fw-bold text-primary-light mb-16'>
                Verification Failed
              </h2>
              
              {/* Description */}
              <p className='text-secondary-light text-lg mb-32'>
                Unable to verify your email. The link may have expired or is invalid.
              </p>
              
              {/* Action Buttons */}
              <div className='d-flex flex-column gap-3'>
                <button
                  type='button'
                  className='btn btn-primary w-100 text-white fw-semibold text-md px-24 py-16 radius-12'
                  onClick={handleSignIn}
                >
                  Go to Sign In
                </button>
                <Link 
                  href='/sign-up' 
                  className='btn btn-outline-primary w-100 fw-semibold text-md px-24 py-16 radius-12'
                >
                  Sign Up Again
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}   