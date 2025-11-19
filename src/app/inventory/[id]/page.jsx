import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import HotelsLayer from '@/components/Inventory/hotels/HotelsLayer';
import PackagesLayer from '@/components/Inventory/PackagesLayer';
import TransportationsLayer from '@/components/Inventory/TransportationsLayer';
import VisaLayer from '@/components/Inventory/VisaLayer';
import ActivitiesLayer from '@/components/Inventory/ActivitiesLayer';
import ProtectedRoute from "@/components/ProtectedRoute";

export default async function Page({params}) {
      const resolvedParams = await params;
      const pageId = resolvedParams.id;
      const breadcrumbs = [
   {  label: "Inventory",  href: "#"},
    { 
      label: 
        pageId === "hotels"
          ? "Hotels List"
          : pageId === "packages"
          ? "Packages List"
          : pageId === "transportations"
          ? "Transportation List"
          : pageId === "visa"
          ? "Visa List"
           : pageId === "activities"
          ? "Activities List"
          : "",
      href: "#"
    }
  ];

  return (
     <ProtectedRoute>
     <MasterLayout>
       <Breadcrumb title={pageId === "hotels" ? "Hotels List" : pageId === "packages" ? "Packages List" : pageId === "transportations" ? "Transportation List" : pageId === "visa" ? "Visa List" : pageId === "activities" ? "Activities List" : ""} breadcrumbs={breadcrumbs} />

       {pageId === "hotels" ? (
         <HotelsLayer/>
      ) : pageId === "packages" ? (
        <PackagesLayer/>
      ) : pageId === "transportations" ? (
        <TransportationsLayer/>
      ) : pageId === "visa" ? (
         <VisaLayer/>
      ) : pageId === "activities" ? (
        <ActivitiesLayer/>
      ) : (
       null
      )}
    </MasterLayout>
   </ProtectedRoute>
  )
}
