import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import CurrencyLayer from '@/components/master/currency/CurrencyLayer';
import HotelTypeLayer from '@/components/master/hotel-type/HotelTypeLayer';
import MealOptionsLayer from '@/components/master/meal-options/MealOptionsLayer';
import PackageDurationLayer from '@/components/master/package-duration/PackageDurationLayer';
import StayTypeLayer from '@/components/master/stay-type/StayTypeLayer';
import ThemesLayer from '@/components/master/themes/ThemesLayer';
import PackageTypeLayer from '@/components/master/package-type/PackageTypeLayer';

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
            <CurrencyLayer  pageId={pageId}/>
          ) : pageId === "hotel-type" ? (
            <HotelTypeLayer  pageId={pageId}/>
          ) : pageId === "meal-options" ? (
            <MealOptionsLayer  pageId={pageId}/>
          ) : pageId === "package-duration" ? (
            <PackageDurationLayer  pageId={pageId}/>
          ) : pageId === "stay-type" ? (
            <StayTypeLayer  pageId={pageId}/>
          ) : pageId === "themes" ? (
            <ThemesLayer  pageId={pageId}/>
          ) : pageId === "package-type" ? (
            <PackageTypeLayer  pageId={pageId}/>
          ) : (
            null
          )}
      
        
      </MasterLayout>
    </ProtectedRoute>
  )
}
