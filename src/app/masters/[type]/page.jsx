import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import Currency from '@/components/master/Currency';
import HotelType from '@/components/master/HotelType';
import MealOptions from '@/components/master/MealOptions';
import PackageDuration from '@/components/master/PackageDuration';
import StayType from '@/components/master/StayType';
import Themes from '@/components/master/Themes';
import PackageType from '@/components/master/PackageType';

export default async  function Page({params}) {
   const resolvedParams = await params;
   const pageId = resolvedParams.type;
  const breadcrumbs = [
            { label: "Master", href: "#" },
    { label: pageId === "currency" ? "Currency" : pageId === "hotel-type" ? "Hotel Type" : pageId === "meal-options" ? "Meal Options" : pageId === "package-duration" ? "Package Duration" : pageId === "stay-type" ? "Stay Type" : pageId === "themes" ? "Themes" : pageId === "package-type" ? "Package Type" : "", href: "#" },
   
  ];
   return (
     <ProtectedRoute>
        <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
          {pageId === "currency" ? (
            <Currency  pageId={pageId}/>
          ) : pageId === "hotel-type" ? (
            <HotelType  pageId={pageId}/>
          ) : pageId === "meal-options" ? (
            <MealOptions  pageId={pageId}/>
          ) : pageId === "package-duration" ? (
            <PackageDuration  pageId={pageId}/>
          ) : pageId === "stay-type" ? (
            <StayType  pageId={pageId}/>
          ) : pageId === "themes" ? (
            <Themes  pageId={pageId}/>
          ) : pageId === "package-type" ? (
            <PackageType  pageId={pageId}/>
          ) : (
            null
          )}
      
        
      </MasterLayout>
    </ProtectedRoute>
  )
}
