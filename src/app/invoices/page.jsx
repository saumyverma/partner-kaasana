import React from "react";
import MasterLayout from "@/masterLayout/MasterLayout";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import InvoiceLayer from "@/components/invoice/InvoiceLayer";
export default function Page() {
  const breadcrumbs = [{ label: "Invoices", href: "#" }];
  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb breadcrumbs={breadcrumbs} />
        <InvoiceLayer pageId="invoices" />
      </MasterLayout>
    </ProtectedRoute>
  );
}
