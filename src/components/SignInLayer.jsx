"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlice";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SignInLayer =  () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
     const { isAuthenticated, user } = useSelector((state) => state.auth);
     const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();  
     const isValidForm = watch("email") && watch("password");
     
     // Load saved email from localStorage on mount
     useEffect(() => {
        if (typeof window !== "undefined") {
            const savedEmail = localStorage.getItem("rememberedEmail");
            if (savedEmail) {
                setValue("email", savedEmail);
                setRememberMe(true);
            }
        }
     }, [setValue]);
        const handleLogin = async(data) => {
        console.log("Login clicked", data);
        const tokenCaptcha="kjdfhdsfsdkjfsdf";
        const formData = { email:data.email, password:data.password ,tokenCaptcha};
        
        // Handle Remember Me functionality
        if (rememberMe) {
            localStorage.setItem("rememberedEmail", data.email);
        } else {
            localStorage.removeItem("rememberedEmail");
        }
        
           try {
  //     // ✅ Reuse same post method for any form
      const res = await api.post("auth/signin", formData,{},{showLoader:true ,showToast:true});
      console.log("res",res);

      if(res.status==="success"){
         dispatch(
        login({
          user: { companyDetails: res?.data?.companyDetails,
                 userDetails:res?.userDetails,
                menuList:res?.menuList 
             },
             token: res.data.accessToken,
        })
      );

      router.push("/");
      }
      
      // console.log("Response:", res);
    } catch (err) {
      // setMessage("Error: " + err.message);
    }
       

      // dispatch(
      //   login({
      //     user: { password: password, email:email },
      //     token: "abc123xyz",
      //   })
      // );
    };
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
            <h4 className='mb-12'>Sign In to Kaasana</h4>
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
                className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.email ? 'border-danger' : ''}`}
                 placeholder='Work Email'
                 {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
              />
              {errors.email && (
                <span className='mt-4 text-sm text-danger d-block'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='position-relative mb-20'>
              <div className='icon-field'>
                <span className='icon top-50 translate-middle-y'>
                  <Icon icon='solar:lock-password-outline' />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control h-56-px bg-neutral-50 radius-12 ${errors.password ? 'border-danger' : ''}`}
                  id='your-password'
                  placeholder='Password'
                  {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })}
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
              {errors.password && (
                <span className='mt-4 text-sm text-danger d-block'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className=''>
              <div className='d-flex justify-content-between gap-2'>
                <div className='form-check style-check d-flex align-items-center'>
                  <input
                    className='form-check-input border border-neutral-300'
                    type='checkbox'
                    id='remember'
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className='form-check-label' htmlFor='remember'>
                    Remember me{" "}
                  </label>
                </div>
                <Link href='/forgot-password' className='text-primary-600 fw-medium'>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type='submit'
              className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
              onClick={handleSubmit(handleLogin) }
              disabled={!isValidForm}
            >
              {" "}
              Sign In
            </button>
            {/*<div className='mt-32 center-border-horizontal text-center'>
              <span className='bg-base z-1 px-4'>Or sign in with</span>
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
  );
};

export default SignInLayer;
