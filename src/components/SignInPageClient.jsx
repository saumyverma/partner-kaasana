"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import SignInLayer from "@/components/SignInLayer";



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
     </>
  );
};

export default SignInPageClient;

