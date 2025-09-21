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
  return (

     <MasterLayout>
       <Breadcrumb title={pageId} />

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
