"use client"
import React from 'react'
import { api } from "@/utils/api";
import { useSelector, useDispatch } from "react-redux";

export default function LeadsLayer({pageId}) {
     const { isAuthenticated, user } = useSelector((state) => state.auth);
     console.log("isAuthenticated",isAuthenticated);
     console.log("user",user);
    console.log("pageId",pageId);
    console.log("api",api);
  //  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // ✅ Reuse same post method for any form
  //     const res = await api.post("/users", formData);
  //     setMessage("Saved successfully!");
  //     console.log("Response:", res);
  //   } catch (err) {
  //     setMessage("Error: " + err.message);
  //   }
  // };

  return (
    <div>Profile Overiew  -{pageId} </div>
  )
}
