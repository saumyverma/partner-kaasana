"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function LeadsLayer({pageId}) {
     const { isAuthenticated, user } = useSelector((state) => state.auth);
     console.log("isAuthenticated",isAuthenticated);
     console.log("user",user);
    console.log("pageId",pageId);
  return (
    <div>Welcome to  -{pageId} </div>
  )
}
