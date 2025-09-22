"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-up"); // redirect if not logged in
    }
  }, [isAuthenticated, router]);

  // If not logged in, you can show a loader until redirect happens
  if (!isAuthenticated) return <p>Redirecting...</p>;

  return children;
}
