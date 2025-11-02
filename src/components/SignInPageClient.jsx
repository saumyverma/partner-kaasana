"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import SignInLayer from "@/components/SignInLayer";
import InfoModal from "@/components/modal/infoModal";


const SignInPageClient = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();

  // Redirect if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <>
      {!isAuthenticated && <SignInLayer />}
      <InfoModal />
      <button
            type='button'
            className='btn btn-primary text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            
            Add New Role
          </button>
    </>
  );
};

export default SignInPageClient;

