import React from 'react'
import LeadsLayer from '@/components/crm/LeadsLayer'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
// import ProtectedRoute from "@/components/ProtectedRoute";

export default async  function Page({params}) {
   const resolvedParams = await params;
   const pageId = resolvedParams.id;
  const breadcrumbs = [
    { label: "CRM", href: "#" },
    { label: pageId === "customers" ? "Customer" : "Leads", href: "#" },
    { 
      label: 
        pageId === "leads"
          ? "Overview of New Leads"
          : pageId === "open-leads"
          ? "Overview of Open Leads"
          : pageId === "confirmed-lead"
          ? "Overview of Confirmed Leads"
          : pageId === "archive-leads"
          ? "Overview of Archived Leads"
          : "Customers",
      href: "#"
    }
  ];
   return (
    //  <ProtectedRoute>
        <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <LeadsLayer pageId={pageId}/>
      </MasterLayout>
  //  </ProtectedRoute>
  )
}
