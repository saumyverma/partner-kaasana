import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ActivitiesLayer from '@/components/bookings/ActivitiesLayer';
import FlightsLayer from '@/components/bookings/FlightsLayer';
import HotelsLayer from '@/components/bookings/HotelsLayer';
import PackagesLayer from '@/components/bookings/PackagesLayer';
import TransportationsLayer from '@/components/bookings/TransportationsLayer';
import VisaLayer from '@/components/bookings/VisaLayer';

export default async function Page({params}) {
     const resolvedParams = await params;
      const pageId = resolvedParams.id;
      const breadcrumbs = [
    { label: "Bookings", href: "#" },
    { 
      label: 
        pageId === "packages"
          ? "Packages"
          : pageId === "hotels"
          ? "Hotels"
          : pageId === "flights"
          ? "Flights"
          : pageId === "activities"
          ? "Activities"
           : pageId === "transportations"
          ? "Transportations"
          : "Visa",
      href: "#"
      },
    { 
      label: 
        pageId === "packages"
          ? "Overview of Booking Packages"
          : pageId === "hotels"
          ? "Overview of Booking Hotels"
          : pageId === "Flights"
          ? "Overview of Booking Flights"
          : pageId === "activities"
          ? "Overview of Booking Activities"
           : pageId === "transportations"
          ? "Overview of Booking Transportations"
          : "Overview of Booking Visa",
      href: "#"
    }
  ];
  return (

     <MasterLayout>
       <Breadcrumb breadcrumbs={breadcrumbs} />

       {pageId === "packages" ? (
         <PackagesLayer/>
      ) : pageId === "hotels" ? (
        <HotelsLayer/>
      ) : pageId === "flights" ? (
        <FlightsLayer/>
      ) : pageId === "activities" ? (
        <ActivitiesLayer/>
      ) : pageId === "transportations" ? (
        <TransportationsLayer/>
      ) : pageId === "visa" ? (
        <VisaLayer/>
      ) : (
       null
      )}
 </MasterLayout>
  )
}
