import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import HotelsLayer from '@/components/Inventory/HotelsLayer';
import PackagesLayer from '@/components/Inventory/PackagesLayer';
import TransportationsLayer from '@/components/Inventory/TransportationsLayer';
import VisaLayer from '@/components/Inventory/VisaLayer';
import ActivitiesLayer from '@/components/Inventory/ActivitiesLayer';


export default async function Page({params}) {
     const resolvedParams = await params;
      const pageId = resolvedParams.id;
  return (
     <MasterLayout>
       <Breadcrumb title={pageId} />

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
  )
}
