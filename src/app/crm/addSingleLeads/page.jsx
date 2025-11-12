import React from "react";

import AddSingleLeadForm from "@/components/crm/AddSingleLeadForm";
import Breadcrumb from "@/components/Breadcrumb";
import ProtectedRoute from "@/components/ProtectedRoute";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "Add Single Lead | CRM",
  description: "Create a new lead entry within the CRM module.",
};

const Page = () => {
  const breadcrumbs = [
    { label: "CRM", href: "/crm" },
    { label: "Add Single Lead", href: "/crm/addSingleLeads" },
  ];

  return (
    <ProtectedRoute>
      <MasterLayout>
        <Breadcrumb title="Add Single Lead" breadcrumbs={breadcrumbs} />
        <AddSingleLeadForm />
      </MasterLayout>
    </ProtectedRoute>
  );
};

export default Page;

