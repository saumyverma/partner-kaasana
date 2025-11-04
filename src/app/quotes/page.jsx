import React from 'react'
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import QuotesLayer from '@/components/quotes/QuotesLayer';
export default function Page() {
    const breadcrumbs = [
        { label: "Quotes", href: "#" },
      ];
  return (
    <ProtectedRoute>
        <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <QuotesLayer pageId="quotes" />
        </MasterLayout>
    </ProtectedRoute>
  )
}