import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute"
import CostSheetLayer from '@/components/costSheet/CostSheetLayer';
export default function CostSheet() {
    const breadcrumbs = [
        { label: "Cost Sheet", href: "#" },
      ];
  return (
    <ProtectedRoute>
        <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <CostSheetLayer pageId="cost-sheet" />
      </MasterLayout>
    </ProtectedRoute>
  )
}