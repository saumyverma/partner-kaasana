"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "@/components/Loader";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);
    if (!isAuthenticated) {
      router.push("/sign-in"); // redirect if not logged in
    }
  }, [isAuthenticated, router]);

  // If not logged in, you can show a loader until redirect happens
  if (!isAuthenticated) return <Loader />;

  return children;
}
