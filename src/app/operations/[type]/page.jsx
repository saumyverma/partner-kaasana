import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import OperationsLayer from '@/components/operations/OperationsLayer';

export default async function Page({params}) {
    const resolvedParams = await params;
    const pageId = resolvedParams.type;
   const breadcrumbs = [
     { label: "Operations", href: "#" },
     { label: pageId === "upcoming-travels" ? "Upcoming Travels" : "Refund Cancellations", href: "#" },
    
   ];
  return (
    <ProtectedRoute>
        <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <OperationsLayer pageId={pageId}/>
      </MasterLayout>
    </ProtectedRoute>
  )
}

